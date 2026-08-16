"use client";

import {
  ArrowUpRight,
  Brain,
  Handshake,
  Radar,
  Target,
  Users,
} from "lucide-react";

const CAPABILITIES = [
  {
    number: "01",
    icon: Target,
    label: "B2B Lead Generation",
    title: "Find the accounts worth pursuing.",
    description:
      "Identify and qualify relevant B2B accounts using focused targeting, research, and human verification.",
  },
  {
    number: "02",
    icon: Radar,
    label: "Demand Generation",
    title: "Create demand around real opportunity.",
    description:
      "Build targeted campaigns that connect market signals with the accounts and decision-makers most likely to engage.",
  },
  {
    number: "03",
    icon: Users,
    label: "Business Development Support",
    title: "Turn research into conversations.",
    description:
      "Support sales teams with account research, decision-maker intelligence, outreach, and qualified opportunity development.",
  },
  {
    number: "04",
    icon: Handshake,
    label: "Strategic Partnerships",
    title: "Build relationships that compound.",
    description:
      "Identify and develop commercial partnerships designed around mutual value, market access, and long-term growth.",
  },
  {
    number: "05",
    icon: Brain,
    label: "AI-Assisted Sales & Marketing",
    title: "Use intelligence without losing judgment.",
    description:
      "Combine AI-assisted research and analysis with human verification to improve speed, relevance, and decision quality.",
  },
];

export default function CoreCapabilities() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="border-t border-slate-200 bg-[#FAFAF9]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Core Capabilities
            </p>

            <h2
              id="capabilities-heading"
              className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.025em] text-[#0A0E14] sm:text-5xl"
            >
              Built around the
              <br />
              <span className="text-cyan-600">
                revenue relationship.
              </span>
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              From account discovery to strategic partnerships, SalesFluance
              connects the capabilities required to turn market intelligence
              into qualified commercial opportunities.
            </p>
          </div>
        </div>

        {/* Capability grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((capability, index) => {
            const Icon = capability.icon;

            return (
              <article
                key={capability.number}
                className={`group relative flex min-h-[290px] flex-col border border-slate-200 bg-white p-7 transition-colors duration-200 hover:border-cyan-500/40 ${
                  index === CAPABILITIES.length - 1
                    ? "sm:col-span-2 lg:col-span-1"
                    : ""
                }`}
              >
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <div className="flex h-9 w-9 items-center justify-center border border-cyan-500/20 bg-cyan-500/5">
                    <Icon
                      aria-hidden="true"
                      className="h-[18px] w-[18px] stroke-[1.5] text-cyan-600"
                    />
                  </div>

                  <span className="font-mono text-[10px] font-semibold tracking-[0.16em] text-slate-400">
                    {capability.number}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-10">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    {capability.label}
                  </p>

                  <h3 className="mt-3 max-w-sm text-xl font-semibold tracking-[-0.015em] text-[#0A0E14]">
                    {capability.title}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
                    {capability.description}
                  </p>
                </div>

                {/* Direction */}
                <div className="mt-auto flex justify-end pt-8">
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-5 w-5 text-slate-300 transition-colors duration-200 group-hover:text-cyan-600"
                  />
                </div>

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
            Intelligence + human judgment
          </p>

          <p className="max-w-2xl text-sm leading-6 text-slate-500">
            Each capability is designed to strengthen the quality of the next
            stage — from targeting and research through engagement and
            relationship development.
          </p>
        </div>
      </div>
    </section>
  );
}