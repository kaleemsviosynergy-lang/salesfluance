import * as React from "react";

const DemandGenerationHeroVisual = (): React.JSX.Element => {
  return (
    <div className="relative w-full max-w-[560px] overflow-hidden rounded-[28px] border border-slate-200 bg-white p-3 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(148,163,184,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.10) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative">
        {/* Top status bar */}
        <div className="flex items-center justify-between px-3 py-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600">
              Demand Intelligence
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Awareness → Engagement → Intent
            </p>
          </div>

          <div className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-700">
              LIVE
            </span>
          </div>
        </div>

        {/* Main intelligence panel */}
        <div className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left: market demand */}
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M4 19V5" />
                    <path d="M4 19h16" />
                    <path d="m7 15 3-4 3 2 5-7" />
                  </svg>
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Market Demand
                  </p>
                  <p className="text-[10px] text-slate-500">
                    Target audience activity
                  </p>
                </div>
              </div>

              <span className="text-[10px] font-medium text-slate-400">
                01
              </span>
            </div>

            {/* Demand signal */}
            <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                  Demand Signal
                </span>
                <span className="text-xs font-semibold text-indigo-600">
                  Growing
                </span>
              </div>

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full w-[76%] rounded-full bg-indigo-500" />
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2">
                <div className="rounded-lg bg-white p-2">
                  <p className="text-[9px] uppercase tracking-wide text-slate-400">
                    Reach
                  </p>
                  <p className="mt-1 text-xs font-bold text-slate-900">
                    Expanding
                  </p>
                </div>

                <div className="rounded-lg bg-white p-2">
                  <p className="text-[9px] uppercase tracking-wide text-slate-400">
                    Engagement
                  </p>
                  <p className="mt-1 text-xs font-bold text-slate-900">
                    Active
                  </p>
                </div>

                <div className="rounded-lg bg-white p-2">
                  <p className="text-[9px] uppercase tracking-wide text-slate-400">
                    Intent
                  </p>
                  <p className="mt-1 text-xs font-bold text-slate-900">
                    Emerging
                  </p>
                </div>
              </div>
            </div>

            {/* Audience chips */}
            <div className="mt-4 flex flex-wrap gap-2">
              {["Target Accounts", "Decision-Makers", "Buying Groups"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[10px] font-medium text-slate-600"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Right: demand motion */}
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <circle cx="12" cy="12" r="8" />
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v3M22 12h-3M12 22v-3M2 12h3" />
                </svg>
              </div>

              <div>
                <p className="text-sm font-bold text-slate-900">
                  Demand Motion
                </p>
                <p className="text-[10px] text-slate-500">
                  From awareness to intent
                </p>
              </div>
            </div>

            <div className="mt-4 space-y-2.5">
              {/* Step 1 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M3 11h4l3-6 4 14 3-8h4" />
                    </svg>
                  </div>

                  <div>
                    <p className="text-[11px] font-bold text-slate-900">
                      Market Awareness
                    </p>
                    <p className="text-[9px] text-slate-500">
                      Reach the right audience
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center text-slate-300">
                ↓
              </div>

              {/* Step 2 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M4 5h16v11H4z" />
                      <path d="M8 20h8" />
                      <path d="M12 16v4" />
                    </svg>
                  </div>

                  <div>
                    <p className="text-[11px] font-bold text-slate-900">
                      Content Engagement
                    </p>
                    <p className="text-[9px] text-slate-500">
                      Educate and build relevance
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center text-slate-300">
                ↓
              </div>

              {/* Step 3 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <circle cx="12" cy="12" r="8" />
                      <path d="M12 8v4l3 2" />
                    </svg>
                  </div>

                  <div>
                    <p className="text-[11px] font-bold text-slate-900">
                      Buying Intent
                    </p>
                    <p className="text-[9px] text-slate-500">
                      Identify active interest
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center text-slate-300">
                ↓
              </div>

              {/* Step 4 */}
              <div className="rounded-xl border border-indigo-100 bg-indigo-50/70 p-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M4 18V6" />
                      <path d="M4 18h16" />
                      <path d="M7 15l3-4 3 2 4-6" />
                    </svg>
                  </div>

                  <div>
                    <p className="text-[11px] font-bold text-slate-900">
                      Sales Pipeline
                    </p>
                    <p className="text-[9px] text-slate-500">
                      Convert demand into opportunity
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom intelligence bar */}
        <div className="mt-3 rounded-2xl border border-indigo-100 bg-indigo-50/70 p-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M4 18V6" />
                <path d="M4 18h16" />
                <path d="M7 14l3-3 3 2 5-6" />
              </svg>
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-indigo-500">
                Demand Readiness
              </p>

              <div className="mt-1 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-slate-900">
                  Audience → Awareness → Engagement → Intent → Pipeline
                </span>
              </div>
            </div>

            <div className="hidden h-2 w-28 overflow-hidden rounded-full bg-white sm:block">
              <div className="h-full w-[72%] rounded-full bg-indigo-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemandGenerationHeroVisual;