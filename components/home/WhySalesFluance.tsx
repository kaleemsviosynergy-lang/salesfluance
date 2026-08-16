"use client";

import { Check, Minus } from "lucide-react";

const COMPARISON = [
  {
    dimension: "Market understanding",
    conventional: "Broad audience and list-based targeting",
    salesfluance:
      "Account-level market intelligence identifies where credible opportunity exists.",
  },
  {
    dimension: "Decision-maker intelligence",
    conventional: "Contact discovery and title-based targeting",
    salesfluance:
      "Maps the people, roles, priorities, and relationships influencing complex B2B decisions.",
  },
  {
    dimension: "Engagement",
    conventional: "Optimize for outreach volume and activity",
    salesfluance:
      "Create qualified conversations based on relevance, timing, and account context.",
  },
  {
    dimension: "Qualification",
    conventional: "Lead scoring and automated qualification",
    salesfluance:
      "Research, qualification, and human verification before opportunity delivery.",
  },
  {
    dimension: "AI & automation",
    conventional: "Automation replaces much of the research process",
    salesfluance:
      "Use AI-assisted research and analysis while keeping human judgment in the loop.",
  },
  {
    dimension: "Commercial outcome",
    conventional: "Short-term lead and pipeline volume",
    salesfluance:
      "Build qualified opportunities, strategic partnerships, and long-term revenue relationships.",
  },
];

export default function WhySalesFluance() {
  return (
    <section
      id="why-salesfluance"
      aria-labelledby="why-salesfluance-heading"
      className="border-t border-slate-200 bg-[#FAFAF9]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Why SalesFluance
            </p>

            <h2
              id="why-salesfluance-heading"
              className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.025em] text-[#0A0E14] sm:text-5xl"
            >
              Not more activity.
              <br />
              <span className="text-cyan-600">
                Better commercial intelligence.
              </span>
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Traditional B2B growth models often optimize for volume. SalesFluance
              is built around the quality of the intelligence, engagement, and
              relationships that create commercial opportunity.
            </p>
          </div>
        </div>

        {/* Comparison table */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          {/* Table header */}
          <div className="hidden grid-cols-[1.05fr_1fr_1fr] border-b border-slate-200 bg-slate-50/70 lg:grid">
            <div className="px-7 py-5">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Commercial dimension
              </span>
            </div>

            <div className="border-l border-slate-200 px-7 py-5">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Conventional model
              </span>
            </div>

            <div className="border-l border-slate-200 px-7 py-5">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-600">
                SalesFluance
              </span>
            </div>
          </div>

          {/* Rows */}
          {COMPARISON.map((item, index) => (
            <div
              key={item.dimension}
              className={`grid lg:grid-cols-[1.05fr_1fr_1fr] ${
                index !== COMPARISON.length - 1
                  ? "border-b border-slate-200"
                  : ""
              }`}
            >
              {/* Dimension */}
              <div className="px-6 py-7 sm:px-7">
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 font-mono text-[10px] font-semibold tracking-[0.16em] text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400 lg:hidden">
                      Commercial dimension
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#0A0E14] lg:mt-0 lg:text-base">
                      {item.dimension}
                    </p>
                  </div>
                </div>
              </div>

              {/* Conventional */}
              <div className="border-t border-slate-100 px-6 py-6 sm:px-7 lg:border-l lg:border-t-0">
                <div className="flex items-start gap-3">
                  <Minus
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 shrink-0 text-slate-300"
                    strokeWidth={1.5}
                  />

                  <div>
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400 lg:hidden">
                      Conventional model
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-500 lg:mt-0">
                      {item.conventional}
                    </p>
                  </div>
                </div>
              </div>

              {/* SalesFluance */}
              <div className="border-t border-slate-100 bg-cyan-50/20 px-6 py-6 sm:px-7 lg:border-l">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-cyan-500/30 bg-cyan-500/5">
                    <Check
                      aria-hidden="true"
                      className="h-3.5 w-3.5 text-cyan-600"
                      strokeWidth={2}
                    />
                  </div>

                  <div>
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-600 lg:hidden">
                      SalesFluance
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-700 lg:mt-0">
                      {item.salesfluance}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom principle */}
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            Intelligence → judgment → engagement → relationships
          </p>

          <p className="max-w-2xl text-sm leading-6 text-slate-500">
            The difference is not simply how many prospects enter the funnel.
            It is how much useful intelligence exists before the next
            commercial decision is made.
          </p>
        </div>
      </div>
    </section>
  );
}