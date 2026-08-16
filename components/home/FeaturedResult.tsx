"use client";

import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const RESULT_POINTS = [
  "Target accounts identified around real commercial signals.",
  "Decision-makers mapped across complex buying groups.",
  "Engagement qualified before opportunity delivery.",
  "Human verification applied before results reach the client.",
];

export default function FeaturedResult() {
  return (
    <section
      id="featured-result"
      aria-labelledby="featured-result-heading"
      className="border-t border-slate-200 bg-[#FAFAF9]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
        {/* Section header */}
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Featured Result
            </p>

            <h2
              id="featured-result-heading"
              className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.025em] text-[#0A0E14] sm:text-5xl"
            >
              Intelligence is only valuable
              <br />
              when it creates
              <br />
              <span className="text-cyan-600">
                commercial movement.
              </span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              SalesFluance combines market intelligence, account research,
              decision-maker mapping, and qualified engagement to help sales
              teams move from potential opportunity to meaningful commercial
              conversations.
            </p>
          </div>
        </div>

        {/* Featured case/result */}
        <article className="mt-16 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            {/* Editorial / result side */}
            <div className="border-b border-slate-200 p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-600">
                    B2B Growth Engagement
                  </p>

                  <p className="mt-3 text-sm font-medium text-slate-400">
                    Featured client outcome
                  </p>
                </div>

                <span className="font-mono text-[10px] font-semibold tracking-[0.16em] text-slate-400">
                  01
                </span>
              </div>

              <h3 className="mt-10 max-w-2xl text-3xl font-semibold tracking-[-0.025em] text-[#0A0E14] sm:text-4xl">
                From fragmented market signals to qualified commercial
                opportunity.
              </h3>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
                A structured approach to identifying the right accounts,
                understanding the buying environment, and creating
                conversations with the people who can influence revenue.
              </p>

              {/* Quote */}
              <blockquote className="mt-10 border-l-2 border-cyan-500 pl-6">
                <p className="text-lg leading-8 text-[#0A0E14] sm:text-xl">
                  "The value was not simply generating more activity. It was
                  helping us understand where the real opportunities were."
                </p>

                <footer className="mt-4 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Client feedback
                </footer>
              </blockquote>
            </div>

            {/* Outcome side */}
            <div className="relative bg-[#0A0E14] p-7 text-white sm:p-10 lg:p-12">
              {/* Precision rings */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-[-70px] top-[-70px] h-52 w-52 rounded-full border border-cyan-400/10"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-[-25px] top-[-25px] h-32 w-32 rounded-full border border-cyan-400/10"
              />

              <div className="relative">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
                  Revenue Movement
                </p>

                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-white">
                  What changed
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-6 text-slate-400">
                  The engagement was designed around signal quality, account
                  relevance, and human-verified opportunity development.
                </p>

                {/* Result points */}
                <div className="mt-9 border-t border-white/10">
                  {RESULT_POINTS.map((point, index) => (
                    <div
                      key={point}
                      className="flex gap-4 border-b border-white/10 py-5 last:border-b-0"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center border border-cyan-400/20 bg-cyan-400/5">
                        <CheckCircle2
                          aria-hidden="true"
                          className="h-4 w-4 stroke-[1.5] text-cyan-400"
                        />
                      </div>

                      <div className="flex gap-4">
                        <span className="pt-0.5 font-mono text-[9px] font-semibold text-cyan-400">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <p className="text-sm leading-6 text-slate-300">
                          {point}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Result footer */}
                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500">
                    Signal → Account → People → Engagement
                  </p>

                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-5 w-5 text-cyan-400"
                  />
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Bottom statement */}
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            Evidence over activity
          </p>

          <p className="max-w-2xl text-sm leading-6 text-slate-500">
            The strongest growth systems do not simply create more
            conversations. They improve the quality of the conversations that
            matter.
          </p>
        </div>
      </div>
    </section>
  );
}