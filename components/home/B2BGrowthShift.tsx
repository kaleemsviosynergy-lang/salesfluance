"use client";

import { ArrowRight, Check, Minus } from "lucide-react";

const OLD_MODEL = [
  "Lead volume",
  "Broad targeting",
  "Cold outreach",
  "Activity metrics",
  "Short-term pipeline",
];

const SALESFLUANCE_MODEL = [
  "Market intelligence",
  "Account understanding",
  "Decision-maker mapping",
  "Qualified engagement",
  "Revenue relationships",
];

export default function B2BGrowthShift() {
  return (
    <section
      id="growth-shift"
      aria-labelledby="growth-shift-heading"
      className="border-t border-slate-200 bg-[#FAFAF9]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 py-24 sm:px-10 lg:px-16">
        {/* Section intro */}
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            B2B Growth Is Changing
          </p>

          <h2
            id="growth-shift-heading"
            className="mt-5 text-4xl font-semibold tracking-[-0.025em] text-[#0A0E14] sm:text-5xl"
          >
            Stop optimizing for activity.
            <br />
            <span className="text-cyan-600">
              Start building revenue relationships.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Modern B2B growth is not simply a volume problem. The advantage
            comes from understanding the right accounts, finding the right
            people, and creating the right conversations.
          </p>
        </div>

        {/* Comparison */}
        <div className="mt-16 grid overflow-hidden rounded-2xl border border-slate-200 bg-white lg:grid-cols-2">
          {/* Old model */}
          <div className="border-b border-slate-200 p-7 sm:p-9 lg:border-b-0 lg:border-r">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  The old model
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-[#0A0E14]">
                  More activity
                </h3>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200">
                <Minus
                  aria-hidden="true"
                  className="h-4 w-4 text-slate-400"
                />
              </div>
            </div>

            <div className="mt-8 divide-y divide-slate-100">
              {OLD_MODEL.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 py-4"
                >
                  <span className="font-mono text-[10px] font-medium text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm text-slate-600">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-7 border-t border-slate-200 pt-6">
              <p className="text-sm leading-6 text-slate-500">
                More campaigns. More outreach. More noise — without
                necessarily creating better opportunities.
              </p>
            </div>
          </div>

          {/* SalesFluance model */}
          <div className="relative bg-[#0A0E14] p-7 text-white sm:p-9">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full border border-cyan-400/10"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-10 top-10 h-20 w-20 rounded-full border border-cyan-400/10"
            />

            <div className="relative">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
                    The SalesFluance model
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-white">
                    Better intelligence
                  </h3>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/5">
                  <Check
                    aria-hidden="true"
                    className="h-4 w-4 text-cyan-400"
                  />
                </div>
              </div>

              <div className="mt-8 divide-y divide-white/10">
                {SALESFLUANCE_MODEL.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 py-4"
                  >
                    <span className="font-mono text-[10px] font-medium text-cyan-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm text-slate-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-7 border-t border-white/10 pt-6">
                <div className="flex items-center justify-between gap-5">
                  <p className="max-w-md text-sm leading-6 text-slate-400">
                    Turn intelligence into relevant conversations,
                    qualified opportunities, and long-term commercial
                    relationships.
                  </p>

                  <ArrowRight
                    aria-hidden="true"
                    className="hidden h-5 w-5 shrink-0 text-cyan-400 sm:block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom principle */}
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            From activity → intelligence → engagement → revenue
          </p>

          <p className="max-w-xl text-sm leading-6 text-slate-500">
            SalesFluance connects the signals around an account before
            turning them into a conversation.
          </p>
        </div>
      </div>
    </section>
  );
}