import * as React from "react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

/**
 * DESIGN SYSTEM NOTES (apply globally, not just here):
 * - Accent color is now cyan (was sky) — reads as "our intelligence layer,"
 *   not "generic SaaS blue." Amber is reserved for CTAs / live-signal only.
 * - Labels, step numbers, and system copy use font-mono — assumes
 *   `font-mono` is mapped to IBM Plex Mono / JetBrains Mono in tailwind.config.
 *   If not yet configured, add it before shipping — this detail carries
 *   a lot of the "precision instrument" feel.
 * - Panel styling (ink-950 bg, hairline borders, cyan glow) is the visual
 *   spine of the whole site — reuse this exact card treatment for the
 *   Approach, Revenue Readiness/FLUANZ, and Proof/Metrics sections so the
 *   hero doesn't read as an isolated "nice panel" on an otherwise generic page.
 */

export default function HomeHero(): React.JSX.Element {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
      {/* Subtle background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(15,23,42,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.055) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />

        <div className="absolute left-1/2 top-0 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-slate-100/70 blur-3xl" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:py-24">
          {/* LEFT — MESSAGE */}
          <div className="max-w-3xl">
            <FadeIn direction="up">
              <div className="mb-7">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Enterprise B2B Growth
                </span>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.08}>
              <h1 className="max-w-[760px] text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-[68px]">
                Turn Market Intelligence
                <span className="block text-cyan-600">
                  Into Revenue
                </span>
                Relationships
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.16}>
              <p className="mt-7 max-w-[650px] text-lg leading-8 text-slate-600 sm:text-xl">
                SalesFluance connects market intelligence, decision-maker
                mapping, and qualified engagement to build strategic
                partnerships that convert into enterprise pipeline.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.24}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" variant="primary">
                  Book Discovery Call
                </Button>

                <Button href="/services" variant="outline">
                  Explore Services
                </Button>
              </div>
            </FadeIn>

            {/* Supporting positioning */}
            <FadeIn direction="up" delay={0.32}>
              <div className="mt-10 border-t border-slate-200 pt-6">
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                  From market intelligence to revenue relationships
                </p>

                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
                  <span>Demand Generation</span>
                  <span className="text-slate-300">•</span>
                  <span>Lead Generation</span>
                  <span className="text-slate-300">•</span>
                  <span>Account Intelligence</span>
                  <span className="text-slate-300">•</span>
                  <span>Strategic Partnerships</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT — REVENUE INTELLIGENCE VISUAL */}
          <FadeIn direction="left" delay={0.18} className="w-full">
            <div className="relative mx-auto w-full max-w-[650px]">
              {/* Main intelligence panel */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-[#0A0E14] shadow-[0_30px_80px_rgba(10,14,20,0.35)]">
                {/* Panel header */}
                <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                  <div>
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                      Revenue Intelligence
                    </p>

                    <p className="mt-1 text-sm text-white">
                      Enterprise Revenue Health
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-emerald-400">
                      Active
                    </span>
                  </div>
                </div>

                {/* Intelligence map */}
                <div className="p-6">
                  <div className="grid gap-4 sm:grid-cols-[1.05fr_0.95fr]">
                    {/* Relationship map */}
                    <div className="relative min-h-[310px] overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                          Relationship Map
                        </span>

                        <span className="font-mono text-[10px] text-slate-500">
                          Account
                        </span>
                      </div>

                      {/* Connection lines */}
                      <div
                        aria-hidden="true"
                        className="absolute left-1/2 top-1/2 z-[1] h-px w-[190px] -translate-x-1/2 bg-cyan-400/30"
                      />

                      <div
                        aria-hidden="true"
                        className="absolute left-1/2 top-1/2 z-[1] h-[150px] w-px -translate-y-1/2 bg-cyan-400/30"
                      />

                      {/* Central account */}
                      <div className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-cyan-400/25 bg-[#0F141C] shadow-[0_0_45px_rgba(34,211,238,0.10)]">
                        <div className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
                          Target
                        </div>

                        <div className="mt-1 text-sm font-semibold text-white">
                          Enterprise
                        </div>

                        <div className="mt-1 text-[9px] text-slate-500">
                          Account
                        </div>
                      </div>

                      {/* Buyer nodes */}
                      <div className="absolute left-4 top-16 rounded-lg border border-white/10 bg-[#0F141C]/90 px-3 py-2.5">
                        <p className="font-mono text-[9px] uppercase tracking-wider text-slate-500">
                          Economic Buyer
                        </p>
                        <p className="mt-1 text-xs font-medium text-white">
                          Executive
                        </p>
                      </div>

                      <div className="absolute right-4 top-16 rounded-lg border border-white/10 bg-[#0F141C]/90 px-3 py-2.5">
                        <p className="font-mono text-[9px] uppercase tracking-wider text-slate-500">
                          Technical
                        </p>
                        <p className="mt-1 text-xs font-medium text-white">
                          Evaluator
                        </p>
                      </div>

                      <div className="absolute bottom-12 left-5 rounded-lg border border-white/10 bg-[#0F141C]/90 px-3 py-2.5">
                        <p className="font-mono text-[9px] uppercase tracking-wider text-slate-500">
                          Champion
                        </p>
                        <p className="mt-1 text-xs font-medium text-white">
                          Influencer
                        </p>
                      </div>

                      <div className="absolute bottom-12 right-5 rounded-lg border border-white/10 bg-[#0F141C]/90 px-3 py-2.5">
                        <p className="font-mono text-[9px] uppercase tracking-wider text-slate-500">
                          Procurement
                        </p>
                        <p className="mt-1 text-xs font-medium text-white">
                          Decision
                        </p>
                      </div>
                    </div>

                    {/* Revenue motion */}
                    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-400">◎</span>

                        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                          Revenue Motion
                        </span>
                      </div>

                      <div className="mt-5 space-y-3">
                        <MotionStep
                          number="01"
                          title="Market Intelligence"
                          description="Identify where opportunity exists"
                        />

                        <MotionConnector />

                        <MotionStep
                          number="02"
                          title="Decision-Maker Mapping"
                          description="Understand who influences revenue"
                        />

                        <MotionConnector />

                        <MotionStep
                          number="03"
                          title="Qualified Engagement"
                          description="Create relevant conversations"
                        />

                        <MotionConnector />

                        <MotionStep
                          number="04"
                          title="Revenue Relationships"
                          description="Move opportunities forward"
                          active
                        />
                      </div>
                    </div>
                  </div>

                  {/* Bottom signal */}
                  <div className="mt-4 rounded-xl border border-cyan-400/15 bg-cyan-400/[0.04] p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
                          Revenue Readiness
                        </p>

                        <p className="mt-1 text-sm font-medium text-white">
                          Account → People → Signals → Opportunity
                        </p>
                      </div>

                      <div className="hidden h-2 w-24 overflow-hidden rounded-full bg-slate-800 sm:block">
                        <div className="h-full w-3/4 rounded-full bg-cyan-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative signal — kept minimal, single accent, no competing shapes */}
              <div
                aria-hidden="true"
                className="absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-full border border-slate-200 sm:block"
              />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

interface MotionStepProps {
  number: string;
  title: string;
  description: string;
  active?: boolean;
}

function MotionStep({
  number,
  title,
  description,
  active = false,
}: MotionStepProps): React.JSX.Element {
  return (
    <div
      className={[
        "rounded-lg border p-3",
        active
          ? "border-cyan-400/20 bg-cyan-400/[0.06]"
          : "border-white/10 bg-[#0F141C]/60",
      ].join(" ")}
    >
      <div className="flex items-start gap-3">
        <div
          className={[
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-md font-mono text-[9px] font-semibold",
            active
              ? "bg-cyan-400/10 text-cyan-400"
              : "bg-white/[0.06] text-slate-500",
          ].join(" ")}
        >
          {number}
        </div>

        <div className="min-w-0">
          <p className="text-xs font-semibold text-white">{title}</p>

          <p className="mt-1 text-[10px] leading-4 text-slate-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function MotionConnector(): React.JSX.Element {
  return <div aria-hidden="true" className="ml-4 h-3 w-px bg-slate-700" />;
}