"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden border-t border-[#1E2530] bg-[#0A0E14] text-white"
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #94A3B8 1px, transparent 1px),
            linear-gradient(to bottom, #94A3B8 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Subtle atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.025] blur-3xl"
      />

      {/* Convergence path */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1440 720"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M170 575 C390 575 430 505 600 430 C760 360 830 315 1010 245 C1110 205 1190 160 1270 105"
          stroke="#38BDF8"
          strokeOpacity="0.08"
          strokeWidth="1"
        />

        <path
          d="M310 660 C500 600 585 520 720 455 C870 385 1000 350 1140 270"
          stroke="#38BDF8"
          strokeOpacity="0.045"
          strokeWidth="1"
        />

        <circle
          cx="170"
          cy="575"
          r="3"
          fill="#38BDF8"
          fillOpacity="0.18"
        />

        <circle
          cx="600"
          cy="430"
          r="3"
          fill="#38BDF8"
          fillOpacity="0.18"
        />

        <circle
          cx="1010"
          cy="245"
          r="3"
          fill="#38BDF8"
          fillOpacity="0.22"
        />

        <circle
          cx="1270"
          cy="105"
          r="4"
          fill="#38BDF8"
          fillOpacity="0.28"
        />
      </svg>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[620px] w-full max-w-[1280px] items-center justify-center px-6 py-28 sm:px-10 lg:px-16 lg:py-36">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Begin the conversation
          </p>

          {/* Headline */}
          <h2
            id="final-cta-heading"
            className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            From signal to revenue —
            <br />
            <span className="text-cyan-400">
              the conversation starts here.
            </span>
          </h2>

          {/* Supporting copy */}
          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            A discovery conversation is a working session around your
            commercial signals, target accounts, and growth priorities — not a
            generic sales pitch.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-amber-400 px-6 text-sm font-semibold text-[#0A0E14] transition-colors duration-200 hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-[#0A0E14]"
            >
              <span>Book Discovery Call</span>

              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              href="/approach"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-[#1E2530] px-6 text-sm font-medium text-slate-300 transition-colors duration-200 hover:border-slate-500 hover:text-white"
            >
              Explore Our Approach
            </Link>
          </div>

          {/* Closing relationship chain */}
          <div className="mx-auto mt-14 flex max-w-xl items-center justify-center gap-4">
            <span
              aria-hidden="true"
              className="h-px flex-1 bg-[#1E2530]"
            />

            <span className="font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-slate-600">
              Accounts → People → Signals → Engagement → Revenue
            </span>

            <span
              aria-hidden="true"
              className="h-px flex-1 bg-[#1E2530]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}