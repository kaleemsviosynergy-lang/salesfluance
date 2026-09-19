import { Activity, Cpu, UserCheck, Zap, ShieldCheck, RefreshCw, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

/**
 * AIRevenueFlowHero — "AI in B2B Revenue Execution" operating-model
 * diagram for Blog #11.
 *
 * Deliberately built from the same visual grammar as the service-page
 * process sections (see components/service-sections/ServiceProcess.tsx
 * and BusinessChallenges.tsx): numbered cards, a connecting line, an
 * indigo accent, and a framework footer strip — not a new visual system.
 *
 * Each stage is color-coded by who's actually doing the work: neutral
 * slate for system-level signal/outcome stages, indigo for AI stages,
 * and dark slate for human stages. This alternating rhythm is the
 * diagram's entire way of expressing "AI vs. human" — no robot or
 * human-figure iconography is used anywhere.
 *
 * Fully self-contained (no `data` prop) since this diagram belongs to
 * exactly one article's fixed thesis, unlike the data-driven
 * ServicePageConfig section components it borrows styling from.
 */

type StageActor = "system" | "ai" | "human";

interface Stage {
  label: string;
  description: string;
  actor: StageActor;
  icon: LucideIcon;
}

const STAGES: Stage[] = [
  {
    label: "Signals",
    description: "Intent, engagement, and account activity enter the system.",
    actor: "system",
    icon: Activity,
  },
  {
    label: "AI Interpretation",
    description: "Patterns and priorities are surfaced from raw signal.",
    actor: "ai",
    icon: Cpu,
  },
  {
    label: "Human Judgment",
    description: "A person applies context AI doesn't have.",
    actor: "human",
    icon: UserCheck,
  },
  {
    label: "AI-Assisted Execution",
    description: "Approved actions are drafted, sequenced, or sent.",
    actor: "ai",
    icon: Zap,
  },
  {
    label: "Human Verification",
    description: "Outcomes are checked against real accountability.",
    actor: "human",
    icon: ShieldCheck,
  },
  {
    label: "Outcome & Learning",
    description: "Results refine the next cycle of signal interpretation.",
    actor: "system",
    icon: RefreshCw,
  },
];

const ACTOR_STYLES: Record<StageActor, { badge: string; tag: string; tagLabel: string }> = {
  system: {
    badge: "border-slate-200 bg-slate-50 text-slate-600 group-hover:border-slate-300",
    tag: "text-slate-400",
    tagLabel: "System",
  },
  ai: {
    badge: "border-indigo-100 bg-indigo-50 text-indigo-600 group-hover:border-indigo-200",
    tag: "text-indigo-500",
    tagLabel: "AI",
  },
  human: {
    badge: "border-slate-800 bg-slate-950 text-white group-hover:bg-indigo-600 group-hover:border-indigo-600",
    tag: "text-slate-500",
    tagLabel: "Human",
  },
};

export default function AIRevenueFlowHero() {
  return (
    <section aria-labelledby="ai-revenue-flow-heading" className="not-prose">
      <Container size="lg" disableGutters>
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-indigo-200" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-indigo-600">
                Operating Model
              </span>
              <span aria-hidden="true" className="h-px w-8 bg-indigo-200" />
            </div>
            <h2
              id="ai-revenue-flow-heading"
              className="text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:text-4xl"
            >
              AI in B2B Revenue Execution
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              AI is most useful where it improves the speed or consistency of a step.
              Human judgment stays load-bearing at every point that carries real risk.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative mx-auto mt-12 max-w-6xl">
            {/* Desktop connecting line */}
            <div
              aria-hidden="true"
              className="absolute left-[6%] right-[6%] top-9 hidden h-px bg-slate-200 lg:block"
            />

            <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6 lg:gap-3">
              {STAGES.map((stage, index) => {
                const styles = ACTOR_STYLES[stage.actor];
                const Icon = stage.icon;
                const isLast = index === STAGES.length - 1;

                return (
                  <li key={stage.label} className="relative">
                    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_8px_30px_rgba(15,23,42,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_16px_40px_rgba(15,23,42,0.07)]">
                      <div className="flex items-center justify-between">
                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-colors duration-300 ${styles.badge}`}
                        >
                          <Icon aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
                        </span>
                        <span
                          className={`text-[9px] font-semibold uppercase tracking-[0.16em] ${styles.tag}`}
                        >
                          {styles.tagLabel}
                        </span>
                      </div>

                      <h3 className="mt-4 text-[13px] font-bold leading-tight text-slate-950">
                        {stage.label}
                      </h3>

                      <p className="mt-2 text-xs leading-5 text-slate-500">
                        {stage.description}
                      </p>
                    </article>

                    {/* Mobile/tablet connector: down arrow between stacked stages */}
                    {!isLast && (
                      <div
                        aria-hidden="true"
                        className="my-1.5 flex justify-center text-slate-300 sm:hidden"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 5v14M5 12l7 7 7-7" />
                        </svg>
                      </div>
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mx-auto mt-6 max-w-6xl rounded-2xl border border-indigo-100 bg-indigo-50/50 px-6 py-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-600">
                  The Principle
                </p>
                <p className="mt-1 text-sm font-medium leading-6 text-slate-700 sm:text-base">
                  AI changes how fast a step happens. It doesn&apos;t change who&apos;s accountable for it.
                </p>
              </div>
              <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-indigo-100 bg-white text-indigo-600 sm:flex">
                <RefreshCw aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
