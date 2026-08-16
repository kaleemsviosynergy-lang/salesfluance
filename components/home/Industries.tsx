"use client";

import {
  Building2,
  Cpu,
  Factory,
  HeartPulse,
  Landmark,
  Network,
  ArrowUpRight,
} from "lucide-react";

const INDUSTRIES = [
  {
    number: "01",
    icon: Building2,
    label: "Technology",
    description:
      "Navigate complex buying groups, technical evaluation, and multi-stakeholder decisions.",
  },
  {
    number: "02",
    icon: Landmark,
    label: "Financial Services",
    description:
      "Identify commercial signals and decision-makers across regulated, relationship-driven markets.",
  },
  {
    number: "03",
    icon: Factory,
    label: "Industrial & Manufacturing",
    description:
      "Connect account intelligence with long sales cycles, operational priorities, and buying committees.",
  },
  {
    number: "04",
    icon: HeartPulse,
    label: "Healthcare",
    description:
      "Map complex organizations and create relevant engagement across specialized buying environments.",
  },
  {
    number: "05",
    icon: Cpu,
    label: "Business Services",
    description:
      "Build targeted commercial opportunities around specialized expertise and high-value relationships.",
  },
  {
    number: "06",
    icon: Network,
    label: "Enterprise Markets",
    description:
      "Understand accounts, influence networks, and revenue pathways across complex organizations.",
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="border-t border-slate-200 bg-[#FAFAF9]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Industries
            </p>

            <h2
              id="industries-heading"
              className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.025em] text-[#0A0E14] sm:text-5xl"
            >
              Different markets.
              <br />
              <span className="text-cyan-600">
                Different buying dynamics.
              </span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              SalesFluance applies the same intelligence discipline across
              industries while adapting research, engagement, and relationship
              development to the way each market actually buys.
            </p>
          </div>
        </div>

        {/* Industry grid */}
        <div className="mt-16 grid border-l border-t border-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry) => {
            const Icon = industry.icon;

            return (
              <article
                key={industry.number}
                className="group relative flex min-h-[250px] flex-col border-b border-r border-slate-200 bg-white p-7 transition-colors duration-200 hover:bg-slate-50 sm:p-8"
              >
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center border border-cyan-500/20 bg-cyan-500/5">
                    <Icon
                      aria-hidden="true"
                      className="h-[18px] w-[18px] stroke-[1.5] text-cyan-600"
                    />
                  </div>

                  <span className="font-mono text-[10px] font-semibold tracking-[0.16em] text-slate-400">
                    {industry.number}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-auto pt-10">
                  <h3 className="text-xl font-semibold tracking-[-0.015em] text-[#0A0E14]">
                    {industry.label}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
                    {industry.description}
                  </p>
                </div>

                {/* Direction */}
                <ArrowUpRight
                  aria-hidden="true"
                  className="absolute bottom-7 right-7 h-5 w-5 text-slate-300 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-600"
                />

                {/* Precision indicator */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-px w-0 bg-cyan-500 transition-all duration-300 group-hover:w-full"
                />
              </article>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            Context matters
          </p>

          <p className="max-w-2xl text-sm leading-6 text-slate-500">
            The objective is not to apply a generic playbook. It is to
            understand the commercial environment well enough to know where,
            why, and with whom to engage.
          </p>
        </div>
      </div>
    </section>
  );
}