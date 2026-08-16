"use client";

import { ArrowRight, Crosshair, Network, Search, Users, MessageSquare } from "lucide-react";

const PROCESS_STEPS = [
  {
    number: "01",
    icon: Search,
    label: "ACCOUNT DISCOVERY",
    title: "Find where opportunity exists.",
    description:
      "Identify the accounts, markets, and signals that indicate a credible reason to engage.",
  },
  {
    number: "02",
    icon: Crosshair,
    label: "SIGNAL & INTELLIGENCE",
    title: "Understand what matters.",
    description:
      "Connect market signals, account context, and business priorities to determine where attention should go.",
  },
  {
    number: "03",
    icon: Network,
    label: "DECISION-MAKER MAPPING",
    title: "Understand who influences revenue.",
    description:
      "Map the people, roles, and relationships that shape complex B2B buying decisions.",
  },
  {
    number: "04",
    icon: MessageSquare,
    label: "QUALIFIED ENGAGEMENT",
    title: "Create relevant conversations.",
    description:
      "Turn research into targeted engagement that earns attention instead of adding noise.",
  },
  {
    number: "05",
    icon: Users,
    label: "REVENUE RELATIONSHIPS",
    title: "Move opportunities forward.",
    description:
      "Build relationships that connect qualified conversations to pipeline, partnerships, and long-term growth.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="process"
      aria-labelledby="how-it-works-heading"
      className="border-t border-slate-200 bg-[#FAFAF9]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-20">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              How It Works
            </p>

            <h2
              id="how-it-works-heading"
              className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.025em] text-[#0A0E14] sm:text-5xl"
            >
              From signal
              <br />
              <span className="text-cyan-600">to relationship.</span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              We connect the stages between market intelligence and commercial
              opportunity — giving every interaction a clearer reason to exist.
            </p>
          </div>
        </div>

        {/* Process line */}
        <div className="mt-16">
          <div
            aria-hidden="true"
            className="mb-[-1px] hidden h-px bg-slate-200 lg:block"
          >
            <div className="h-px w-full bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0" />
          </div>

          <div className="grid border border-slate-200 bg-white lg:grid-cols-5">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === PROCESS_STEPS.length - 1;

              return (
                <article
                  key={step.number}
                  className={`group relative flex min-h-[330px] flex-col p-6 sm:p-7 ${
                    !isLast ? "border-b border-slate-200 lg:border-b-0 lg:border-r" : ""
                  }`}
                >
                  {/* Node */}
                  <div className="flex items-start justify-between">
                    <div className="relative flex h-10 w-10 items-center justify-center border border-cyan-500/25 bg-cyan-500/[0.04]">
                      <Icon
                        aria-hidden="true"
                        className="h-[18px] w-[18px] stroke-[1.5] text-cyan-600"
                      />

                      <span
                        aria-hidden="true"
                        className="absolute -right-[5px] -top-[5px] h-2 w-2 rounded-full border border-white bg-cyan-500"
                      />
                    </div>

                    <span className="font-mono text-[10px] font-semibold tracking-[0.16em] text-slate-400">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-10">
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                      {step.label}
                    </p>

                    <h3 className="mt-3 max-w-[220px] text-lg font-semibold leading-6 tracking-[-0.015em] text-[#0A0E14]">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-slate-500">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector */}
                  {!isLast && (
                    <div
                      aria-hidden="true"
                      className="absolute bottom-7 right-6 hidden lg:block"
                    >
                      <ArrowRight className="h-4 w-4 stroke-[1.5] text-slate-300 transition-colors duration-200 group-hover:text-cyan-600" />
                    </div>
                  )}

                  {/* Precision indicator */}
                  <div
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-px w-0 bg-cyan-500 transition-all duration-300 group-hover:w-full"
                  />
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom system statement */}
        <div className="mt-10 grid gap-5 border-t border-slate-200 pt-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            Account → Signals → People → Engagement → Revenue
          </p>

          <p className="max-w-xl text-sm leading-6 text-slate-500 lg:text-right">
            Every stage strengthens the next — creating a more informed path
            from account discovery to revenue relationship.
          </p>
        </div>
      </div>
    </section>
  );
}