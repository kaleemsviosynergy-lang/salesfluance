"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import Button, { type ButtonProps } from "@/components/ui/Button";

const testButtonProps: ButtonProps = {
  href: "#contact-form",
  variant: "primary",
  size: "lg",
};

const conversationPoints = [
  "B2B pipeline and lead generation",
  "Demand generation and targeting",
  "Partnership and market expansion",
  "Revenue intelligence and execution",
];

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#0A0E14]">
      {/* Subtle brand glow */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[150px]" />
      <div className="pointer-events-none absolute right-[-180px] top-20 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[150px]" />

      {/* Fine background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Main message */}
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-400">
              START A CONVERSATION
            </p>

            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-white md:text-6xl lg:text-7xl">
              Let&apos;s talk about
              <span className="block text-cyan-400">
                the revenue problem.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400 md:text-xl">
              Tell us what you&apos;re trying to build, where your pipeline is
              getting stuck, or what commercial opportunity you&apos;re trying
              to unlock.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                href="#contact-form"
                variant="primary"
                size="lg"
                className="bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                Start the conversation
              </Button>

              <Button
                href="/services"
                variant="outline"
                size="lg"
                className="border-slate-700 bg-transparent text-white hover:border-slate-500 hover:bg-white/5 hover:text-white"
              >
                Explore services
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-3 text-sm text-slate-500">
              <span className="h-px w-10 bg-slate-700" />
              <span>
                A focused conversation — not a generic sales pitch.
              </span>
            </div>
          </div>

          {/* Conversation framework */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0B1B2D] shadow-2xl shadow-black/20">
              <div className="border-b border-white/10 px-7 py-6">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-400">
                  WHAT WE CAN DISCUSS
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                  Start with the problem.
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  You don&apos;t need a finished brief. Give us the commercial
                  context and we&apos;ll work from there.
                </p>
              </div>

              <div className="divide-y divide-white/10">
                {conversationPoints.map((point, index) => (
                  <div
                    key={point}
                    className="flex items-start gap-4 px-7 py-5"
                  >
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10">
                      <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                    </div>

                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-600">
                        0{index + 1}
                      </p>

                      <p className="mt-1 text-sm font-medium leading-6 text-slate-200">
                        {point}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 bg-black/10 px-7 py-5">
                <p className="text-sm leading-6 text-slate-500">
                  The objective is simple: understand the opportunity before
                  recommending what happens next.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}