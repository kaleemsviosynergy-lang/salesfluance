"use client";

import {
  ArrowUpRight,
  Check,
  FileCheck,
  GitBranch,
  Search,
} from "lucide-react";

const DECISION_CHAIN = [
  {
    number: "01",
    label: "OBSERVATION",
    title: "What is happening?",
  },
  {
    number: "02",
    label: "SIGNAL",
    title: "What deserves attention?",
  },
  {
    number: "03",
    label: "EVIDENCE",
    title: "What supports it?",
  },
  {
    number: "04",
    label: "FINDING",
    title: "What does it mean?",
  },
  {
    number: "05",
    label: "RECOMMENDATION",
    title: "What should change?",
  },
  {
    number: "06",
    label: "EXECUTIVE DECISION",
    title: "What happens next?",
  },
];

const READINESS_ITEMS = [
  {
    icon: Search,
    label: "Commercial signals",
    description: "Identify what is changing across accounts, markets, and opportunities.",
  },
  {
    icon: FileCheck,
    label: "Evidence-backed findings",
    description: "Connect observations to evidence before drawing conclusions.",
  },
  {
    icon: GitBranch,
    label: "Decision pathways",
    description: "Translate findings into clear recommendations and actions.",
  },
];

export default function RevenueReadiness() {
  return (
    <section
      id="fluanz"
      aria-labelledby="fluanz-heading"
      className="border-t border-[#1E2530] bg-[#0A0E14] text-white"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        {/* Product introduction */}
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-24">
          <div>
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-cyan-400"
              />

              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
                FLUANZ
              </p>
            </div>

            <h2
              id="fluanz-heading"
              className="mt-6 max-w-2xl text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl"
            >
              Turn commercial
              <br />
              <span className="text-cyan-400">
                signals into decisions.
              </span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              FLUANZ is SalesFluance&apos;s Commercial Decision Intelligence
              methodology — the discipline SalesFluance applies to turn
              commercial observations into evidence-backed executive
              decisions.
            </p>
          </div>
        </div>

        {/* Main product moment */}
        <div className="mt-16 overflow-hidden border border-cyan-400/20 bg-[#0D121A]">
          {/* Panel header */}
          <div className="flex flex-col gap-5 border-b border-white/10 px-6 py-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
                REVENUE READINESS ASSESSMENT
              </p>

              <p className="mt-2 text-sm text-slate-300">
                An evidence-backed assessment of commercial execution
                readiness — delivered by SalesFluance, structured by FLUANZ
              </p>
            </div>

            <div className="inline-flex items-center border border-white/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
              Evidence-based methodology
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_0.95fr]">
            {/* Left — assessment identity */}
            <div className="border-b border-white/10 p-7 sm:p-9 lg:border-b-0 lg:border-r lg:p-10">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
                  WHAT THE ASSESSMENT EXAMINES
                </p>

                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-white">
                  Revenue Readiness
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-6 text-slate-400">
                  A point-in-time view of an organization&apos;s ability to
                  convert commercial opportunity into predictable,
                  repeatable revenue through trustworthy execution.
                </p>
              </div>

              {/* Readiness dimensions */}
              <div className="mt-10 space-y-0 border-t border-white/10">
                {READINESS_ITEMS.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex gap-4 border-b border-white/10 py-5 last:border-b-0"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-cyan-400/20 bg-cyan-400/5">
                        <Icon
                          aria-hidden="true"
                          className="h-4 w-4 stroke-[1.5] text-cyan-400"
                        />
                      </div>

                      <div>
                        <p className="text-sm font-medium text-slate-200">
                          {item.label}
                        </p>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right — decision intelligence chain */}
            <div className="relative p-7 sm:p-9 lg:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-[-70px] top-[-70px] h-48 w-48 rounded-full border border-cyan-400/10"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-[-30px] top-[-30px] h-28 w-28 rounded-full border border-cyan-400/10"
              />

              <div className="relative">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
                  THE REASONING CHAIN
                </p>

                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-white">
                  Observation → Decision
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
                  FLUANZ preserves the reasoning chain between what is observed
                  and what an executive ultimately decides — nothing is
                  asserted without a traceable path back to evidence.
                </p>

                {/* Chain */}
                <div className="mt-9 space-y-0">
                  {DECISION_CHAIN.map((step, index) => {
                    const isLast = index === DECISION_CHAIN.length - 1;

                    return (
                      <div key={step.number} className="relative flex gap-4">
                        {!isLast && (
                          <div
                            aria-hidden="true"
                            className="absolute left-[15px] top-9 h-[calc(100%-1px)] w-px bg-cyan-400/15"
                          />
                        )}

                        <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center border border-cyan-400/30 bg-[#0D121A]">
                          <span className="font-mono text-[9px] text-cyan-400">
                            {step.number}
                          </span>
                        </div>

                        <div
                          className={`flex min-h-16 flex-1 items-center justify-between gap-5 border-b border-white/10 ${
                            isLast ? "border-b-0" : ""
                          }`}
                        >
                          <div>
                            <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-cyan-400">
                              {step.label}
                            </p>

                            <p className="mt-1 text-sm font-medium text-slate-200">
                              {step.title}
                            </p>
                          </div>

                          {isLast && (
                            <Check
                              aria-hidden="true"
                              className="h-4 w-4 shrink-0 text-emerald-400"
                            />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Product footer */}
          <div className="border-t border-cyan-400/15 bg-[#0B1017] px-6 py-5 sm:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500">
                Evidence → Finding → Recommendation → Decision
              </p>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span>Delivered as part of a SalesFluance engagement</span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 text-cyan-400"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom positioning statement */}
        <div className="mt-10 grid gap-6 border-t border-white/10 pt-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <p className="max-w-2xl text-sm leading-6 text-slate-400">
            Revenue Readiness is not another dashboard or score. It is a
            preserved, explainable assessment built from evidence — giving
            leadership a clearer basis for commercial decisions.
          </p>

          <button
            type="button"
            className="group inline-flex items-center gap-3 self-start border border-white/15 px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:border-cyan-400/40 hover:text-cyan-400 lg:self-auto"
          >
            Explore FLUANZ
            <ArrowUpRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </section>
  );
}