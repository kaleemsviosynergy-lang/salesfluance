"use client";

import React from "react";
import { Check } from "lucide-react";

const TRUST_ITEMS = [
  {
    title: "Revenue Intelligence",
    description: "Turn market signals into actionable revenue opportunities.",
  },
  {
    title: "Human-Verified Engagement",
    description: "Research and qualification before opportunity delivery.",
  },
  {
    title: "Strategic Partnerships",
    description: "Build relationships that create long-term commercial growth.",
  },
  {
    title: "Enterprise B2B Focus",
    description: "Designed around complex buying decisions and sales cycles.",
  },
] as const;

export default function TrustStrip() {
  return (
    <section
      aria-label="SalesFluance trust principles"
      className="border-y border-slate-200 bg-[#FAFAF9]"
    >
      <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-16">
        <div className="grid border-x border-slate-200 md:grid-cols-[1.1fr_repeat(4,1fr)]">
          
          {/* Intro */}
          <div className="border-b border-slate-200 px-6 py-8 md:border-b-0 md:border-r lg:px-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Built for B2B Growth
            </p>

            <p className="mt-3 max-w-[260px] text-sm leading-6 text-slate-600">
              A revenue-focused approach connecting intelligence,
              engagement, and relationships.
            </p>
          </div>

          {/* Trust items */}
          {TRUST_ITEMS.map((item, index) => (
            <div
              key={item.title}
              className={[
                "px-6 py-8 lg:px-7",
                index < TRUST_ITEMS.length - 1
                  ? "border-b border-slate-200 md:border-b-0 md:border-r"
                  : "",
              ].join(" ")}
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-emerald-500/60">
                  <Check
                    aria-hidden="true"
                    className="h-2.5 w-2.5 text-emerald-600"
                    strokeWidth={2}
                  />
                </span>

                <div>
                  <h3 className="text-sm font-semibold tracking-[-0.01em] text-[#0A0E14]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}