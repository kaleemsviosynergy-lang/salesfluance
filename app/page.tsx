"use client";

/**
 * SalesFluance Homepage Hero
 *
 * A full rewrite (not an incremental patch) of the homepage hero, built to
 * read as premium enterprise software — closer to Atlassian/Stripe/Vercel/
 * Linear than a marketing-agency landing page. This establishes the visual
 * language later homepage sections should inherit: near-full-viewport
 * scale, a background layer that spans edge-to-edge independent of content
 * width, and a restrained, high-contrast type scale.
 *
 * Structure (matches the requested hierarchy exactly):
 *   Section (existing, unmodified)
 *     -> full-bleed relative wrapper (owns height + vertical centering)
 *          -> HeroBackground (absolute, edge-to-edge, spans the full wrapper)
 *          -> Hero content wrapper (dedicated, Hero-only — NOT the shared
 *             Container; see "Width" note below)
 *               -> Hero content (two-column grid)
 *
 * Width:
 * The Hero intentionally does not use the shared Container component,
 * which tops out at max-w-7xl (1280px) — too narrow for the enterprise,
 * edge-to-edge feel this Hero needs. In its place is a Hero-only wrapper:
 * `mx-auto w-full max-w-[1600px]` with padding that lands on the exact
 * requested steps — `px-6` (24px, mobile) → `sm:px-10` (40px, tablet) →
 * `lg:px-16` (64px, desktop). This wrapper is local to this file; it does
 * not change or replace Container, which every other section continues to
 * use unmodified.
 *
 * Sizing:
 * `min-h-[calc(100vh-4.5rem)]` targets "almost the full first screen"
 * below the navbar. 4.5rem (72px) is an assumed navbar height — this
 * project's Navbar wasn't touched or inspected as part of this task, so
 * adjust that one value if the real rendered navbar height differs.
 * Section's own vertical padding is left untouched (not modifiable here);
 * the min-height simply dominates over it rather than fighting it.
 *
 * Content is a mix of real, durable brand copy (headline, subheading, CTA
 * labels — largely preserved from the previous version) and illustrative
 * figures (KPI row, dashboard mock), explicitly flagged inline as
 * placeholders pending real, founder-approved numbers.
 *
 * Motion: headline lines stagger against each other (nested variants),
 * paragraph and buttons each do a plain fade, the dashboard slides in from
 * the right, and each progress bar animates its fill on a short delay
 * after the rest of the hero has loaded in. `useReducedMotion` disables
 * every transform-based entrance (headline stagger, fades, slide, bar
 * fills) at once rather than requiring per-element opt-outs.
 *
 * The dashboard mock is presentational only: `aria-hidden` with a single
 * `sr-only` text equivalent, so a screen reader isn't read a dozen
 * illustrative numbers as if they were live figures.
 */

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Activity, BarChart3, Brain, Network, Radar, Sparkles, TrendingUp, Users } from "lucide-react";
import { Section } from "@/components/shared/Section";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

/**
 * Illustrative figures only. Replace with real, founder-approved numbers
 * before production — consistent with the project's "never fabricate
 * stats" content policy.
 */
const KPI_DATA: ReadonlyArray<{ value: string; label: string }> = [
  { value: "3,200+", label: "Qualified Leads" },
  { value: "40%", label: "MQL → SQL" },
  { value: "120+", label: "Strategic Partners" },
  { value: "18+", label: "Industries Served" },
];

/** Illustrative dashboard metrics — see file header note on placeholder data. */
const DASHBOARD_METRICS = {
  revenueIntelligence: { score: 82 },
  qualifiedAccounts: { count: "148", delta: "+9 this month" },
  buyingSignals: { count: "47 active" },
  pipelineGrowth: { delta: "+22% QoQ" },
  revenueReadiness: { score: 76 },
  relationshipInsights: { count: "32 tracked" },
} as const;

const heroContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.05 } },
};

const headlineContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const fadeOnly: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.55, ease: "easeOut" } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

/** Minimal inline trend-up glyph — local implementation detail, not a new shared primitive. */
function TrendUpIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3 w-3" fill="none">
      <path d="M2 11.5 6.5 7l3 3L14 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.5 4.5H14V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * A progress bar whose fill animates in shortly after the rest of the hero
 * has loaded — per the "progress indicators animate after load" motion
 * requirement. Disabled (renders at final width immediately) when the
 * user prefers reduced motion.
 */
function AnimatedProgressBar({ percent, reduceMotion }: { percent: number; reduceMotion: boolean }) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
      <motion.div
        className="h-full rounded-full bg-sky-600"
        initial={reduceMotion ? { width: `${percent}%` } : { width: 0 }}
        animate={{ width: `${percent}%` }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.8, delay: 1.0, ease: "easeOut" }}
      />
    </div>
  );
}

/** Faint relationship-network motif — the hero's one deliberate signature element, echoing "strategic partnerships" and "relationship insights." Decorative only. */
function NetworkPattern() {
  const nodes = [
    { x: 40, y: 60 },
    { x: 140, y: 30 },
    { x: 230, y: 90 },
    { x: 320, y: 40 },
    { x: 120, y: 160 },
    { x: 260, y: 190 },
    { x: 360, y: 150 },
    { x: 60, y: 250 },
  ];
  const edges: Array<[number, number]> = [
    [0, 1],
    [1, 2],
    [2, 3],
    [1, 4],
    [4, 5],
    [5, 6],
    [4, 7],
    [2, 5],
  ];

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 320"
      className="absolute -right-16 top-1/2 h-[440px] w-[440px] -translate-y-1/2 text-slate-900 opacity-[0.05] sm:opacity-[0.06]"
      fill="none"
    >
      {edges.map(([from, to]) => (
        <line
          key={`${from}-${to}`}
          x1={nodes[from].x}
          y1={nodes[from].y}
          x2={nodes[to].x}
          y2={nodes[to].y}
          stroke="currentColor"
          strokeWidth="1"
        />
      ))}
      {nodes.map((node, index) => (
        <circle key={index} cx={node.x} cy={node.y} r={index % 3 === 0 ? 4 : 2.5} fill="currentColor" />
      ))}
    </svg>
  );
}

/**
 * Full-bleed, almost-invisible background: soft blue wash, faint grid,
 * faint radial glow, and the network motif. Positioned absolute within
 * the full-bleed wrapper — a sibling of the Hero content wrapper, never a
 * descendant of it, so the content wrapper's max-width never constrains it.
 */
function HeroBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50/70 via-white to-white" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:56px_56px] opacity-[0.035]" />
      <div className="absolute inset-x-0 top-0 h-[720px] bg-[radial-gradient(ellipse_65%_55%_at_50%_-10%,rgba(2,132,199,0.10),transparent_75%)]" />
      <NetworkPattern />
    </div>
  );
}

export default function HomeHero() {
  const shouldReduceMotion = Boolean(useReducedMotion());

  return (
    <Section id="home-hero" ariaLabel="SalesFluance — Enterprise B2B Revenue Growth">
      {/* Full-bleed wrapper: owns viewport-relative height + vertical centering.
          HeroBackground and the Hero content wrapper below are direct
          siblings here, so the background spans this wrapper's full width
          while the content wrapper constrains only the content inside it. */}
      <div className="relative flex min-h-[calc(100vh-4.5rem)] flex-col justify-center overflow-hidden">
        <HeroBackground />

        <div className="relative mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-16">
          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            animate="visible"
            variants={heroContainerVariants}
            className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[58%_42%] lg:gap-20"
          >
            {/* Left column */}
            <div className="flex min-w-0 flex-col items-start text-left">
              <motion.div variants={fadeOnly}>
                <Badge
  variant="primary"size="md"leftIcon={<Sparkles className="h-3.5 w-3.5" />}>
  Enterprise B2B Growth Platform</Badge>
              </motion.div>

              <motion.h1
                variants={headlineContainerVariants}
                className="mt-7 text-5xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl"
              >
                <motion.span variants={fadeUp} className="block">
                  Accelerate Enterprise
                </motion.span>
                <motion.span variants={fadeUp} className="block text-sky-600">
                  B2B Revenue
                </motion.span>
                <motion.span variants={fadeUp} className="block">
                  Through Better Relationships
                </motion.span>
              </motion.h1>

              <motion.p variants={fadeOnly} className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                AI-assisted demand generation and strategic partnerships that convert into qualified pipeline —
                engineered for predictable, enterprise-grade revenue growth.
              </motion.p>

              <motion.div
                variants={fadeOnly}
                className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4"
              >
                <Button href="/contact" variant="primary" className="w-full sm:w-auto">
                  Book Discovery Call
                </Button>
                <Button href="/services" variant="outline" className="w-full sm:w-auto">
                  Explore Services
                </Button>
              </motion.div>

              <motion.dl
                variants={fadeUp}
                className="mt-14 grid w-full grid-cols-2 gap-8 border-t border-slate-200 pt-10 sm:grid-cols-4 sm:gap-10"
              >
                {KPI_DATA.map((kpi) => (
                  <div key={kpi.label} className="flex flex-col-reverse gap-1.5">
                    <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">{kpi.label}</dt>
                    <dd className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{kpi.value}</dd>
                  </div>
                ))}
              </motion.dl>
            </div>

            {/* Right column — Revenue Intelligence Dashboard mock */}
            <motion.div variants={slideFromRight} className="relative w-full min-w-0">
              <span className="sr-only">
                Illustrative preview of the SalesFluance revenue intelligence dashboard, showing revenue
                intelligence score, qualified accounts, buying signals, pipeline growth, revenue readiness, and
                relationship insights.
              </span>

              <div
                aria-hidden="true"
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-900/10 sm:p-10"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-6">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Revenue Intelligence</p>
                    <p className="mt-0.5 text-xs text-slate-400">Enterprise Revenue Health</p>
                  </div>
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                </div>

                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
                  {/* Revenue Intelligence score */}
                  <div className="flex flex-col gap-2.5">
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Revenue Intelligence</p>
                    <p className="text-2xl font-bold text-slate-900">{DASHBOARD_METRICS.revenueIntelligence.score}/100</p>
                    <AnimatedProgressBar percent={DASHBOARD_METRICS.revenueIntelligence.score} reduceMotion={shouldReduceMotion} />
                  </div>

                  {/* Qualified Accounts */}
                  <div className="flex flex-col gap-2.5">
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Qualified Accounts</p>
                    <p className="text-2xl font-bold text-slate-900">{DASHBOARD_METRICS.qualifiedAccounts.count}</p>
                    <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
                      <TrendUpIcon /> {DASHBOARD_METRICS.qualifiedAccounts.delta}
                    </span>
                  </div>

                  {/* Buying Signals */}
                  <div className="flex flex-col gap-2.5 rounded-xl bg-slate-50 p-5">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-600" />
                      </span>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Buying Signals</p>
                    </div>
                    <p className="text-lg font-bold text-slate-900">{DASHBOARD_METRICS.buyingSignals.count}</p>
                  </div>

                  {/* Pipeline Growth */}
                  <div className="flex flex-col gap-2.5">
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Pipeline Growth</p>
                    <span className="flex items-center gap-1 text-2xl font-bold text-emerald-600">
                      <TrendUpIcon /> {DASHBOARD_METRICS.pipelineGrowth.delta}
                    </span>
                  </div>

                  {/* Revenue Readiness */}
                  <div className="flex flex-col gap-2.5">
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Revenue Readiness</p>
                    <p className="text-2xl font-bold text-slate-900">{DASHBOARD_METRICS.revenueReadiness.score}%</p>
                    <AnimatedProgressBar percent={DASHBOARD_METRICS.revenueReadiness.score} reduceMotion={shouldReduceMotion} />
                  </div>

                  {/* Relationship Insights */}
                  <div className="flex flex-col gap-2.5 rounded-xl bg-slate-50 p-5">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-slate-400" />
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Relationship Insights</p>
                    </div>
                    <p className="text-lg font-bold text-slate-900">{DASHBOARD_METRICS.relationshipInsights.count}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}