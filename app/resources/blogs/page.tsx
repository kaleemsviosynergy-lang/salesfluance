import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  Sparkles,
} from "lucide-react";

const topics = [
  "B2B Growth",
  "Demand Generation",
  "Sales Intelligence",
  "Partnerships",
  "AI & Revenue",
  "Revenue Strategy",
];

export default function BlogsPage() {
  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="border-b border-slate-200 bg-[#F8FBFF]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

          <Link
            href="/resources"
            className="group inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 transition hover:text-cyan-600"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            Resources
          </Link>

          <div className="mt-12 max-w-5xl">

            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-600">
              Insights
            </p>

            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
              Perspectives for the people
              <span className="block text-cyan-500">
                building B2B growth systems.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              Practical thinking on demand generation, sales intelligence,
              partnerships, AI, and the systems behind sustainable B2B growth.
            </p>

          </div>

        </div>
      </section>


      {/* Topics */}
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="flex flex-wrap gap-x-8 gap-y-4 py-8">

            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              Explore topics
            </span>

            {topics.map((topic) => (
              <span
                key={topic}
                className="text-sm font-medium text-slate-600"
              >
                {topic}
              </span>
            ))}

          </div>

        </div>
      </section>


      {/* Featured / Editorial */}
      <section className="py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mb-12">

            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-600">
              Featured Perspective
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Ideas worth thinking about.
            </h2>

          </div>


          {/* Empty editorial state — intentionally no fabricated article */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-[#0A0E14]">

            <div className="grid lg:grid-cols-[1.25fr_0.75fr]">

              <div className="p-8 md:p-12 lg:p-16">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950">
                  <BookOpen className="h-6 w-6" />
                </div>

                <p className="mt-8 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Editorial Library
                </p>

                <h3 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  The library is being built around practical B2B intelligence.
                </h3>

                <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
                  We are developing perspectives designed to help revenue
                  teams make better decisions — not simply consume more
                  content.
                </p>

              </div>


              <div className="relative min-h-[300px] border-t border-white/10 bg-[#0B1B2D] lg:border-l lg:border-t-0">

                <div className="absolute inset-0 flex items-center justify-center">

                  <div className="text-center">

                    <Sparkles className="mx-auto h-9 w-9 text-cyan-400" />

                    <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                      Coming next
                    </p>

                    <p className="mt-3 text-lg font-medium text-white">
                      Signal → Insight → Action
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Point of View */}
      <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

            <div>

              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-600">
                Our Editorial Point of View
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Less noise.
                <span className="block">More useful thinking.</span>
              </h2>

            </div>

            <div className="max-w-2xl">

              <p className="text-lg leading-8 text-slate-600">
                B2B teams do not need another stream of generic growth advice.
                They need clearer ways to understand markets, identify
                opportunities, engage the right people, and turn signals into
                action.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                That is the standard we are building this library around:
                practical ideas that can survive contact with a real revenue
                team.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="rounded-3xl bg-[#0A0E14] p-8 text-white md:p-12 lg:p-14">

            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

              <div>

                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  SalesFluance
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                  Have a growth problem worth solving?
                </h2>

                <p className="mt-5 max-w-2xl leading-7 text-slate-400">
                  Let&apos;s talk about the accounts, opportunities, and
                  revenue challenges behind it.
                </p>

              </div>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Book Discovery Call
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}