"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * OpenBookProcess
 *
 * Purpose:
 * Renders the eight SalesFluance process stages as a premium, interactive
 * "open book" — an editorial two-page spread on tablet/desktop and a single
 * readable card on mobile. This component owns presentation only: it takes
 * the existing process stages as a prop and renders them, so the content
 * itself continues to live exactly where it already lived (the STAGES
 * array in app/process/page.tsx). Nothing here hardcodes or duplicates
 * process copy.
 *
 * Content mapping (unchanged from the previous dark detail panel):
 * - Left page  → step number + name, main statement, "What Happens",
 *                "What We Check".
 * - Right page → "What the Client Receives", "Why It Matters", the
 *                progress indicator, and Previous/Next controls.
 * - Mobile     → the same fields, same order, stacked into one card.
 *
 * Every field is rendered exactly once in the DOM — the responsive reflow
 * (two columns → one column) is pure CSS grid, so mobile and desktop can
 * never drift into showing different content.
 *
 * Animation model — one state machine, two visual layers:
 * - `activeIndex` is the single source of truth for "current step"
 *   everywhere: book content, the "NN / 08" counter, the step-navigation
 *   strip, and the aria-live announcement all read from it directly and
 *   update atomically on click — nothing waits for an animation to finish,
 *   so indicators can never disagree with the content.
 * - Both pages crossfade their content on every step change (one shared,
 *   simple transition — this alone is what mobile and reduced-motion use).
 * - On tablet/desktop, with motion enabled, a second, purely decorative
 *   layer is added on top of the right page only: the outgoing content is
 *   captured into an absolutely-positioned overlay that rotates away
 *   (rotateY) and fades, while the real, already-correct new content sits
 *   underneath the whole time. Because the overlay owns its own lifecycle
 *   (mount → animate → unmount) and `activeIndex` never depends on it,
 *   there is nothing for it to desynchronize with.
 * - Clicks are ignored (not queued) while a transition is in flight, so
 *   rapid repeated clicks cannot corrupt the displayed step.
 */

export interface ProcessStageDetail {
  whatHappens: string;
  whatWeCheck: string;
  clientReceives: string;
  whyItMatters: string;
}

export interface ProcessStage {
  number: string;
  title: string;
  summary: string;
  isQA: boolean;
  detail: ProcessStageDetail;
}

export interface OpenBookProcessProps {
  /** The eight process stages, in order. Provided by the caller — this
   * component never defines or duplicates process content itself. */
  stages: ProcessStage[];
  className?: string;
}

const TURN_MS = 550;
const CROSSFADE_MS = 260;
const REDUCED_MOTION_MS = 180;

type Direction = 1 | -1;

/** True once the viewport is at least `px` wide. Defaults to false on the
 * server and on first client paint (matching this project's mobile-first
 * Tailwind convention), then updates from a live matchMedia listener. */
function useMinWidth(px: number): boolean {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${px}px)`);
    const update = () => setMatches(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, [px]);

  return matches;
}

export default function OpenBookProcess({
  stages,
  className,
}: OpenBookProcessProps): React.JSX.Element {
  const prefersReducedMotion = useReducedMotion();
  const isDesktopOrTablet = useMinWidth(768); // matches this project's `md:` breakpoint

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [turn, setTurn] = React.useState<{
    direction: Direction;
    outgoing: ProcessStage;
  } | null>(null);
  const [isBusy, setIsBusy] = React.useState(false);

  const total = stages.length;
  const active = stages[activeIndex];
  const isFirst = activeIndex === 0;
  const isLast = activeIndex === total - 1;

  const showFlipOverlay = isDesktopOrTablet && !prefersReducedMotion;
  const crossfadeDuration = prefersReducedMotion ? REDUCED_MOTION_MS : CROSSFADE_MS;

  // `goTo` is guarded with refs, not the `isBusy`/`turn` state, on purpose:
  // React state updates are batched, so two clicks fired before a render
  // flushes would both see the same stale, pre-transition state and both
  // pass the guard. Refs are read and written synchronously inside the
  // same call, so the second of two rapid clicks is always rejected,
  // regardless of render timing. `isBusy` state still exists purely to
  // drive the visible/announced disabled state of the controls.
  const isBusyRef = React.useRef(false);
  const activeIndexRef = React.useRef(0);
  const busyTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    return () => {
      if (busyTimeoutRef.current) clearTimeout(busyTimeoutRef.current);
    };
  }, []);

  const goTo = React.useCallback(
    (nextIndex: number) => {
      if (isBusyRef.current) return; // ignore clicks mid-transition, never queue
      if (nextIndex < 0 || nextIndex > total - 1) return;
      if (nextIndex === activeIndexRef.current) return;

      const direction: Direction = nextIndex > activeIndexRef.current ? 1 : -1;
      const outgoing = stages[activeIndexRef.current];

      isBusyRef.current = true;
      activeIndexRef.current = nextIndex;

      setActiveIndex(nextIndex); // commit immediately — one source of truth
      setIsBusy(true);
      if (showFlipOverlay) setTurn({ direction, outgoing });

      const duration = showFlipOverlay ? TURN_MS : crossfadeDuration;
      busyTimeoutRef.current = setTimeout(() => {
        isBusyRef.current = false;
        setIsBusy(false);
        setTurn(null);
      }, duration);
    },
    [total, stages, showFlipOverlay, crossfadeDuration],
  );

  const goNext = React.useCallback(
    () => goTo(activeIndexRef.current + 1),
    [goTo],
  );
  const goPrevious = React.useCallback(
    () => goTo(activeIndexRef.current - 1),
    [goTo],
  );

  // Keyboard support — Left/Right arrows navigate the book.
  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      const tag = target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || target?.isContentEditable) return;

      if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrevious();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrevious]);

  return (
    <div className={cn("w-full", className)}>
      {/* Step navigation — always visible, always in sync with activeIndex.
          Plain buttons (not an ARIA tablist: there is no roving-focus tab
          behavior here, so that role would promise more than is
          implemented) with aria-current identifying the active step. This
          replaces, rather than duplicates, the old node-line's equivalent
          click-to-jump behavior. */}
      <div
        role="group"
        aria-label="Process stages"
        className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5"
      >
        {stages.map((stage, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={stage.number}
              type="button"
              aria-current={isActive ? "step" : undefined}
              aria-label={`Go to stage ${stage.number}, ${stage.title}${
                isActive ? ", current stage" : ""
              }${stage.isQA ? ", QA checkpoint" : ""}`}
              onClick={() => goTo(index)}
              disabled={isBusy && !isActive}
              className={cn(
                "relative flex h-10 w-10 items-center justify-center rounded-full border font-mono text-[10px] font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2",
                isActive
                  ? "border-cyan-600 bg-cyan-50 text-cyan-700"
                  : "border-slate-200 bg-white text-slate-400 hover:border-cyan-300 hover:text-cyan-600 disabled:cursor-default disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-400",
              )}
            >
              {stage.number}
              {stage.isQA && (
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full border border-white",
                    isActive ? "bg-cyan-600" : "bg-cyan-400",
                  )}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Live region — announces step changes for assistive technology. */}
      <p aria-live="polite" className="sr-only">
        {`Stage ${active.number} of ${String(total).padStart(2, "0")}: ${active.title}. ${active.summary}`}
      </p>

      {/* The book */}
      <div className="relative mt-8">
        {/* Decorative shadow beneath the book */}
        <div
          aria-hidden="true"
          className="absolute inset-x-6 -bottom-4 h-10 rounded-full bg-slate-900/10 blur-2xl sm:inset-x-10 lg:inset-x-16"
        />

        {/* Decorative stacked-page slivers near the outer edges (tablet/desktop only) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-3 left-0 hidden w-full md:block"
        >
          <span className="absolute left-[-3px] top-2 bottom-2 w-px rounded-full bg-slate-200/80" />
          <span className="absolute left-[-6px] top-4 bottom-4 w-px rounded-full bg-slate-200/50" />
          <span className="absolute right-[-3px] top-2 bottom-2 w-px rounded-full bg-slate-200/80" />
          <span className="absolute right-[-6px] top-4 bottom-4 w-px rounded-full bg-slate-200/50" />
        </div>

        <div
          className="relative grid grid-cols-1 overflow-hidden rounded-[28px] border border-slate-200/80 bg-white md:grid-cols-2"
          style={{ perspective: 1800 }}
        >
          {/* Center fold (tablet/desktop only) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-8 -translate-x-1/2 bg-gradient-to-r from-black/[0.05] via-black/[0.07] to-black/[0.05] md:block"
          />

          {/* LEFT PAGE (stacks first on mobile) */}
          <div className="relative bg-white px-6 py-9 sm:px-9 sm:py-10 md:rounded-l-[28px] md:shadow-[inset_-10px_0_16px_-12px_rgba(10,14,20,0.10)] lg:px-12 lg:py-12">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: crossfadeDuration / 1000, ease: "easeOut" }}
              >
                <PageHeader stage={active} />
                <div className="mt-8 space-y-8">
                  <Field label="What Happens" value={active.detail.whatHappens} />
                  <Field label="What We Check" value={active.detail.whatWeCheck} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT PAGE (stacks second on mobile) */}
          <div className="relative overflow-hidden bg-[#FAFCFD] px-6 py-9 sm:px-9 sm:py-10 md:rounded-r-[28px] md:shadow-[inset_10px_0_16px_-12px_rgba(10,14,20,0.10)] lg:px-12 lg:py-12">
            {/* Settled (current) content — always correct immediately.
                Crossfades on every change; this is the only animation
                mobile and reduced-motion users ever see. */}
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: crossfadeDuration / 1000, ease: "easeOut" }}
              >
                <div className="space-y-8">
                  <Field label="What the Client Receives" value={active.detail.clientReceives} />
                  <Field label="Why It Matters" value={active.detail.whyItMatters} />
                </div>
              </motion.div>
            </AnimatePresence>

            <RightPageFooter
              current={active}
              index={activeIndex}
              total={total}
              isFirst={isFirst}
              isLast={isLast}
              isAnimating={isBusy}
              onPrevious={goPrevious}
              onNext={goNext}
            />

            {/* Decorative departing-page overlay — tablet/desktop, motion
                enabled, only. Purely visual: activeIndex has already
                committed to the new step by the time this ever renders. */}
            <AnimatePresence>
              {turn && showFlipOverlay && (
                <motion.div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[#FAFCFD] px-6 py-9 sm:px-9 sm:py-10 lg:px-12 lg:py-12"
                  style={{ transformOrigin: "left center", backfaceVisibility: "hidden" }}
                  initial={{ rotateY: 0, opacity: 1 }}
                  animate={{
                    rotateY: turn.direction === 1 ? -140 : 140,
                    opacity: [1, 1, 0],
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: TURN_MS / 1000,
                    ease: [0.45, 0, 0.2, 1],
                    opacity: { times: [0, 0.65, 1], duration: TURN_MS / 1000 },
                  }}
                >
                  <div className="space-y-8">
                    <Field
                      label="What the Client Receives"
                      value={turn.outgoing.detail.clientReceives}
                    />
                    <Field label="Why It Matters" value={turn.outgoing.detail.whyItMatters} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

function PageHeader({ stage }: { stage: ProcessStage }): React.JSX.Element {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-700">
          {stage.number} / {stage.title}
        </span>

        {stage.isQA && (
          <span className="inline-flex items-center gap-1.5 border border-cyan-200 bg-cyan-50 px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-cyan-700">
            QA checkpoint
          </span>
        )}
      </div>

      <h3 className="mt-4 text-2xl font-semibold leading-snug tracking-[-0.02em] text-[#0A0E14] sm:text-3xl">
        {stage.summary}
      </h3>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }): React.JSX.Element {
  return (
    <div>
      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
        {label}
      </p>
      <p className="mt-2.5 text-sm leading-7 text-slate-600 sm:text-[15px]">{value}</p>
    </div>
  );
}

function RightPageFooter({
  current,
  index,
  total,
  isFirst,
  isLast,
  isAnimating,
  onPrevious,
  onNext,
}: {
  current: ProcessStage;
  index: number;
  total: number;
  isFirst: boolean;
  isLast: boolean;
  isAnimating: boolean;
  onPrevious: () => void;
  onNext: () => void;
}): React.JSX.Element {
  return (
    <div className="mt-10 flex flex-col gap-5 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
      {/* Progress indicator */}
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs font-semibold tracking-[0.08em] text-slate-500">
          {current.number} / {String(total).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-1.5" aria-hidden="true">
          {Array.from({ length: total }).map((_, dotIndex) => (
            <span
              key={dotIndex}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                dotIndex === index ? "w-6 bg-cyan-600" : "w-1.5 bg-slate-200",
              )}
            />
          ))}
        </div>
      </div>

      {/* Previous / Next controls */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onPrevious}
          disabled={isFirst || isAnimating}
          aria-label="Go to previous process stage"
          className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-600 transition-colors duration-200 hover:border-cyan-300 hover:text-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-600"
        >
          Previous
        </button>

        <button
          type="button"
          onClick={onNext}
          disabled={isLast || isAnimating}
          aria-label="Go to next process stage"
          className="inline-flex items-center gap-1.5 rounded-full border border-cyan-600 bg-cyan-600 px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-white transition-colors duration-200 hover:bg-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-200 disabled:text-slate-400"
        >
          Next
        </button>
      </div>
    </div>
  );
}
