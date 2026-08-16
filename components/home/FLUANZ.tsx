"use client";

import {
  ArrowUpRight,
  Check,
  FileSearch,
  GitBranch,
  Search,
  Target,
} from "lucide-react";

const DECISION_STEPS = [
  {
    number: "01",
    label: "Observation",
    question: "What is happening?",
  },
  {
    number: "02",
    label: "Signal",
    question: "What deserves attention?",
  },
  {
    number: "03",
    label: "Evidence",
    question: "What supports it?",
  },
  {
    number: "04",
    label: "Finding",
    question: "What does it mean?",
  },
  {
    number: "05",
    label: "Recommendation",
    question: "What should change?",
  },
  {
    number: "06",
    label: "Executive Decision",
    question: "What happens next?",
  },
];

const READINESS_SIGNALS = [
  {
    icon: Search,
    title: "Commercial signals",
    description:
      "Identify what is changing across accounts, markets, and opportunities.",
  },
  {
    icon: FileSearch,
    title: "Evidence-backed findings",
    description:
      "Connect observations to evidence before drawing conclusions.",
  },
  {
    icon: GitBranch,
    title: "Decision pathways",
    description:
      "Translate findings into clear recommendations and actions.",
  },
];

export default function FLUANZ() {
  return (
    <section
      id="fluanz"
      aria-labelledby="fluanz-heading"
      className="border-t border-[#1E2530] bg-[#080D13] text-white"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
        {/* Section introduction */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
              FLUANZ
            </p>

            <h2
              id="fluanz-heading"
              className="mt-5 max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-[56px]"
            >
              Turn commercial
              <br />
              <span className="text-cyan-400">
                signals into decisions.
              </span>
            </h2>
          </div>

          <div className="pb-1">
            <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              FLUANZ is SalesFluance&apos;s Commercial Decision Intelligence
              system — designed to transform commercial observations into
              trustworthy executive decisions.
            </p>
          </div>
        </div>

        {/* Main FLUANZ intelligence panel */}
        <div className="mt-14 overflow-hidden border border-cyan-400/20 bg-[#0B1118]">
          {/* Panel header */}
          <div className="flex flex-col gap-4 border-b border-white/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <div>
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Revenue Readiness Intelligence
              </p>

              <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                Evidence-backed assessment of commercial execution readiness
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Assessment Active
            </div>
          </div>

          <div className="grid lg:grid-cols-2">
            {/* Revenue Readiness */}
            <div className="border-b border-white/10 p-7 sm:p-9 lg:border-b-0 lg:border-r">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Current Assessment
                  </p>

                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-white sm:text-2xl">
                    Revenue Readiness
                  </h3>
                </div>

                <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-cyan-400/20 bg-cyan-400/5">
                  <Target
                    aria-hidden="true"
                    className="h-4 w-4 text-cyan-400"
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              <p className="mt-5 max-w-lg text-sm leading-6 text-slate-400">
                A point-in-time view of an organization&apos;s ability to
                convert commercial opportunity into predictable, repeatable
                revenue through trustworthy execution.
              </p>

              <div className="mt-8 divide-y divide-white/10 border-t border-white/10">
                {READINESS_SIGNALS.map((signal) => {
                  const Icon = signal.icon;

                  return (
                    <div
                      key={signal.title}
                      className="flex gap-4 py-4"
                    >
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border border-cyan-400/20">
                        <Icon
                          aria-hidden="true"
                          className="h-3.5 w-3.5 text-cyan-400"
                          strokeWidth={1.5}
                        />
                      </div>

                      <div>
                        <h4 className="text-xs font-semibold text-white">
                          {signal.title}
                        </h4>

                        <p className="mt-1 text-[11px] leading-5 text-slate-500">
                          {signal.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Decision Intelligence */}
            <div className="relative overflow-hidden p-7 sm:p-9">
              {/* Decorative convergence rings */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full border border-cyan-400/10"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-2 top-8 h-24 w-24 rounded-full border border-cyan-400/10"
              />

              <div className="relative">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
                  Decision Intelligence
                </p>

                <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-white sm:text-2xl">
                  Observation → Decision
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-6 text-slate-400">
                  FLUANZ preserves the reasoning chain between what is
                  observed and what an executive ultimately decides.
                </p>

                <div className="mt-7">
                  {DECISION_STEPS.map((step, index) => (
                    <div
                      key={step.number}
                      className="relative flex gap-4"
                    >
                      {/* Connecting line */}
                      {index < DECISION_STEPS.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="absolute left-[12px] top-7 h-[calc(100%-7px)] w-px bg-white/10"
                        />
                      )}

                      <div className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center border border-cyan-400/20 bg-[#0B1118] font-mono text-[8px] font-semibold text-cyan-400">
                        {step.number}
                      </div>

                      <div className="min-w-0 flex-1 border-b border-white/10 pb-4 pt-0.5">
                        <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
                          {step.label}
                        </p>

                        <p className="mt-1 text-xs font-semibold text-white">
                          {step.question}
                        </p>
                      </div>

                      {index === DECISION_STEPS.length - 1 && (
                        <Check
                          aria-hidden="true"
                          className="mt-1 h-4 w-4 shrink-0 text-emerald-400"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Panel footer */}
          <div className="flex flex-col gap-3 border-t border-white/10 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Evidence → Finding → Recommendation → Decision
            </p>

            <div className="flex items-center gap-2 text-[10px] text-slate-400">
              <span>Commercial Decision Intelligence</span>
              <ArrowUpRight
                aria-hidden="true"
                className="h-3.5 w-3.5 text-cyan-400"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}