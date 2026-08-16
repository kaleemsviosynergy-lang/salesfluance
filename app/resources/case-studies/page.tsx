import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Target,
} from "lucide-react";

import { caseStudies } from "@/app/data/caseStudies";

export default function CaseStudiesPage() {
  const featuredCaseStudy =
    caseStudies.find((caseStudy) => caseStudy.featured) ?? caseStudies[0];

  return (
    <main className="bg-white text-slate-950">

      {/* Hero */}
      <section className="border-b border-slate-200 bg-[#F8FBFF]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

          <Link
            href="/resources"
            className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 transition hover:text-cyan-500"
          >
            ← Resources
          </Link>

          <div className="mt-12 max-w-5xl">

            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-500">
              Case Studies
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-[1.02] tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
              Proof from
              <span className="block text-cyan-500">
                the work.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              Real engagements, documented carefully. When client results are
              published, every case study distinguishes what was done, what
              was verified, and what changed.
            </p>

          </div>

        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-500">
                Featured Case Study
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Evidence over claims.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-500">
              We will publish client stories when the work and results are
              ready to be documented responsibly.
            </p>

          </div>

          {/* Main Case Study Panel */}
          <div className="overflow-hidden rounded-[2rem] border border-[#24364A] bg-[#0A0E14] text-white shadow-2xl">

            <div className="grid lg:grid-cols-[1.25fr_0.75fr]">

              {/* Left */}
              <div className="p-8 md:p-12 lg:p-14">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950">
                  <FileText className="h-6 w-6" />
                </div>

                <p className="mt-8 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  {featuredCaseStudy.eyebrow}
                </p>

                <h3 className="mt-5 max-w-2xl text-3xl font-bold leading-tight md:text-4xl">
                  {featuredCaseStudy.title}
                </h3>

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
                  {featuredCaseStudy.summary}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">

                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300">
                    {featuredCaseStudy.industry}
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300">
                    {featuredCaseStudy.service}
                  </span>

                </div>

                <Link
                  href={`/resources/case-studies/${featuredCaseStudy.slug}`}
                  className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
                >
                  View case study
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

              </div>

              {/* Right */}
              <div className="flex min-h-[360px] items-center justify-center border-t border-white/10 bg-[#0B1B2D] p-10 lg:border-l lg:border-t-0">

                <div className="max-w-sm text-center">

                  <ShieldCheck className="mx-auto h-12 w-12 text-cyan-400" />

                  <p className="mt-6 font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500">
                    Documentation standard
                  </p>

                  <p className="mt-4 text-xl font-semibold text-white">
                    Challenge → Approach → Verification → Outcome
                  </p>

                  <p className="mt-5 text-sm leading-7 text-slate-400">
                    Every published case study will separate the intervention
                    from the evidence used to evaluate it.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Documentation Framework */}
      <section className="border-y border-slate-200 bg-[#F8FAFC] py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

            <div>

              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-500">
                How We Document Results
              </p>

              <h2 className="mt-5 max-w-lg text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl">
                The work matters.
                <span className="block text-slate-500">
                  So does the evidence.
                </span>
              </h2>

            </div>

            <div className="grid gap-8 md:grid-cols-2">

              <div className="border-t border-slate-300 pt-6">
                <Target className="h-6 w-6 text-cyan-500" />

                <h3 className="mt-5 text-xl font-bold text-slate-950">
                  01 — Challenge
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  What commercial problem needed to be solved, and what
                  constraints shaped the engagement?
                </p>
              </div>

              <div className="border-t border-slate-300 pt-6">
                <ArrowRight className="h-6 w-6 text-cyan-500" />

                <h3 className="mt-5 text-xl font-bold text-slate-950">
                  02 — Approach
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  What strategy, intelligence, execution, and targeting were
                  actually applied?
                </p>
              </div>

              <div className="border-t border-slate-300 pt-6">
                <ShieldCheck className="h-6 w-6 text-cyan-500" />

                <h3 className="mt-5 text-xl font-bold text-slate-950">
                  03 — Verification
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  What quality controls and evidence checks were used before
                  conclusions were drawn?
                </p>
              </div>

              <div className="border-t border-slate-300 pt-6">
                <CheckCircle2 className="h-6 w-6 text-cyan-500" />

                <h3 className="mt-5 text-xl font-bold text-slate-950">
                  04 — Outcome
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  What changed, supported by client-approved and verifiable
                  evidence?
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Transparency */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-500">
            A Note On Proof
          </p>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            We won't manufacture a result to make a page look impressive.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            Case studies will be published when the underlying engagement,
            metrics, and outcomes can be responsibly represented. Until then,
            this library remains intentionally incomplete rather than filled
            with invented proof.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0A0E14] text-white">

            <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center lg:p-14">

              <div>

                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  SalesFluance
                </p>

                <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
                  Have a growth problem worth solving?
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
                  Let's understand the problem before deciding what the
                  solution should look like.
                </p>

              </div>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Book Discovery Call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}