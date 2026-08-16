"use client";

import { ArrowUpRight, Check } from "lucide-react";

const APPROACH_STEPS = [
  {
    number: "01",
    label: "Market Intelligence",
    title: "Understand where opportunity exists.",
    description:
      "Identify the accounts, markets, signals, and conditions that create a credible reason to engage.",
  },
  {
    number: "02",
    label: "Decision-Maker Mapping",
    title: "Understand who influences revenue.",
    description:
      "Map the people, roles, priorities, and relationships that shape complex B2B buying decisions.",
  },
  {
    number: "03",
    label: "Qualified Engagement",
    title: "Create relevant conversations.",
    description:
      "Turn research and intelligence into targeted engagement that earns attention instead of adding noise.",
  },
  {
    number: "04",
    label: "Revenue Relationships",
    title: "Move opportunities forward.",
    description:
      "Build relationships that connect qualified conversations to pipeline, partnerships, and long-term growth.",
  },
];

export default function Approach() {
  return (
    <section
      id="approach"
      aria-labelledby="approach-heading"
      className="relative overflow-hidden border-t border-[#1E2530] bg-[#0A0E14] text-white"
    >
      {/* Background intelligence grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Ambient circles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-24 h-80 w-80 rounded-full border border-cyan-400/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 top-44 h-40 w-40 rounded-full border border-cyan-400/10"
      />

      <div className="relative mx-auto w-full max-w-[1280px] px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
        {/* Intro */}
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
              The SalesFluance Approach
            </p>

            <h2
              id="approach-heading"
              className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.025em] text-white sm:text-5xl"
            >
              Intelligence before
              <br />
              <span className="text-slate-400">engagement.</span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-slate-400 sm:text-lg">
              We connect the signals around an account before turning them
              into a conversation. Every stage is designed to improve the
              quality of the next one.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/5">
                <Check
                  aria-hidden="true"
                  className="h-4 w-4 text-cyan-400"
                />
              </div>

              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500">
                Intelligence → Mapping → Engagement → Revenue
              </p>
            </div>
          </div>

          {/* System statement */}
          <div className="flex items-end">
            <div className="w-full border-l border-cyan-400/20 pl-7 sm:pl-10">
              <p className="max-w-2xl text-2xl font-medium leading-9 tracking-[-0.015em] text-slate-200 sm:text-3xl sm:leading-10">
                B2B growth becomes more predictable when every interaction is
                informed by{" "}
                <span className="text-cyan-400">
                  better intelligence.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Approach system */}
        <div className="relative mt-20">
          {/* Connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-[19px] top-5 hidden h-[calc(100%-40px)] w-px bg-gradient-to-b from-cyan-400/40 via-cyan-400/20 to-transparent lg:block"
          />

          <div className="grid gap-4">
            {APPROACH_STEPS.map((step) => (
              <article
                key={step.number}
                className="group relative grid gap-6 rounded-xl border border-white/10 bg-white/[0.025] p-6 transition-colors duration-200 hover:border-cyan-400/20 hover:bg-white/[0.04] sm:p-7 lg:grid-cols-[72px_250px_1fr_auto] lg:items-center"
              >
                {/* Number node */}
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/25 bg-[#0A0E14] font-mono text-[10px] font-semibold text-cyan-400">
                  {step.number}
                </div>

                {/* Label */}
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {step.label}
                  </p>

                  <h3 className="mt-2 text-base font-semibold text-white">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="max-w-xl text-sm leading-6 text-slate-400">
                  {step.description}
                </p>

                {/* Direction */}
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-5 w-5 text-slate-600 transition-colors group-hover:text-cyan-400"
                />
              </article>
            ))}
          </div>
        </div>

        {/* Bottom principle */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
            Precision over volume
          </p>

          <p className="max-w-2xl text-sm leading-6 text-slate-500">
            The objective is not simply to generate more activity. It is to
            create better conditions for revenue.
          </p>
        </div>
      </div>
    </section>
  );
}