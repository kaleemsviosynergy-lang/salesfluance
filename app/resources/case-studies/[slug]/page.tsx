import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ShieldCheck } from "lucide-react";
import { caseStudies } from "@/app/data/caseStudies";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;

  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    return (
      <main className="min-h-screen bg-white px-6 py-32">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/resources/case-studies"
            className="inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-slate-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Case Studies
          </Link>

          <h1 className="mt-12 text-4xl font-semibold text-slate-950">
            Case study not found.
          </h1>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white text-slate-950">
      {/* Hero */}
      <section className="bg-[#F5F9FD] px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/resources/case-studies"
            className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 transition hover:text-cyan-500"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Case Studies
          </Link>

          <p className="mt-16 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-500">
            Case Study
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 md:text-6xl">
            {study.title}
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            {study.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs text-slate-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Evidence framework */}
      <section className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-500">
                How we document results
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950">
                The work matters.
                <br />
                So does the evidence.
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Challenge",
                  text: study.challenge,
                },
                {
                  number: "02",
                  title: "Approach",
                  text: study.approach,
                },
                {
                  number: "03",
                  title: "Verification",
                  text: study.verification,
                },
                {
                  number: "04",
                  title: "Outcome",
                  text: study.outcome,
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="border-t border-slate-200 pt-6"
                >
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-4 w-4 text-cyan-500" />

                    <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                      {item.number}
                    </span>

                    <h3 className="font-semibold text-slate-950">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proof principle */}
      <section className="bg-[#F5F9FD] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-500">
            A note on proof
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            We document what happened — not what sounds impressive.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            Client results are published only when the underlying engagement,
            metrics, and outcomes can be responsibly represented and
            verified.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-3xl bg-[#0A0E14] p-8 text-white md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
              SalesFluance
            </p>

            <h2 className="mt-4 text-3xl font-semibold">
              Have a growth problem worth solving?
            </h2>
          </div>

          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Book Discovery Call
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </main>
  );
}