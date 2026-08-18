import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  FileText,
  Lightbulb,
  ShieldCheck,
  Target,
} from "lucide-react";

const researchAreas = [
  {
    icon: BrainCircuit,
    title: "Revenue Intelligence",
    description:
      "Frameworks for turning market signals, commercial data, and customer intelligence into better revenue decisions.",
  },
  {
    icon: Target,
    title: "Demand Generation",
    description:
      "Practical thinking around targeting, engagement, messaging, and the systems behind predictable B2B demand.",
  },
  {
    icon: Lightbulb,
    title: "B2B Growth",
    description:
      "Ideas for building stronger growth systems across markets, accounts, channels, and commercial teams.",
  },
  {
    icon: BookOpen,
    title: "Partnerships",
    description:
      "Research into partner ecosystems, strategic relationships, and opportunities for collaborative growth.",
  },
  {
    icon: ShieldCheck,
    title: "AI & Revenue",
    description:
      "Practical perspectives on applying intelligent systems and automation to modern revenue operations.",
  },
];

const upcomingPapers = [
  {
    number: "01",
    title: "Revenue Intelligence in Modern B2B Growth",
    description:
      "A framework for connecting market signals, account intelligence, engagement, and revenue decisions.",
    category: "REVENUE INTELLIGENCE",
  },
  {
    number: "02",
    title: "From Lead Generation to Revenue Systems",
    description:
      "Exploring why disconnected campaigns often fail to create predictable commercial outcomes.",
    category: "DEMAND GENERATION",
  },
  {
    number: "03",
    title: "The Verification Advantage",
    description:
      "How stronger data verification and quality controls can improve the reliability of B2B growth programs.",
    category: "B2B GROWTH",
  },
];

export default function WhitepapersPage() {
  return (
    <main className="bg-white text-slate-950">

      {/* Hero */}
      <section className="border-b border-slate-200 bg-[#F7FAFE]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

          <Link
            href="/resources"
            className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 transition hover:text-cyan-600"
          >
            ← Resources
          </Link>

          <div className="mt-12 max-w-5xl">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-600">
              WHITEPAPERS
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.02] tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
              Research for the decisions
              <br />
              <span className="text-cyan-500">
                that shape revenue.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              Deep thinking on B2B growth, revenue intelligence, demand
              generation, partnerships, AI, and the systems that help
              commercial teams make better decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Research */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-600">
                FEATURED RESEARCH
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">
                Built for practical application.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              Our research is designed to help revenue teams understand
              commercial problems clearly and translate ideas into action.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-[28px] border border-slate-200 bg-[#080D14] shadow-xl">

            <div className="grid lg:grid-cols-[1.2fr_0.8fr]">

              {/* Left */}
              <div className="p-8 md:p-12 lg:p-14">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950">
                  <FileText className="h-6 w-6" />
                </div>

                <p className="mt-8 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  SALESFLUANCE RESEARCH
                </p>

                <h3 className="mt-5 max-w-2xl text-3xl font-bold leading-tight text-white md:text-4xl">
                  Turning commercial signals into better revenue decisions.
                </h3>

                <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400">
                  Our first whitepaper is being developed around a practical
                  question: how can B2B teams connect intelligence, execution,
                  verification, and optimization into one stronger revenue
                  system?
                </p>

                <div className="mt-8 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
                  RESEARCH IN DEVELOPMENT
                </div>

              </div>

              {/* Right */}
              <div className="flex min-h-[360px] items-center justify-center border-t border-white/10 bg-[#0B1B2D] p-10 lg:border-l lg:border-t-0">

                <div className="text-center">

                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10">
                    <BrainCircuit className="h-9 w-9 text-cyan-400" />
                  </div>

                  <p className="mt-8 font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500">
                    RESEARCH MODEL
                  </p>

                  <p className="mt-4 text-xl font-semibold text-white">
                    Signal → Insight → Action
                  </p>

                  <p className="mx-auto mt-4 max-w-xs text-sm leading-6 text-slate-400">
                    Research should create a clearer decision, not simply
                    produce another document.
                  </p>

                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="border-y border-slate-200 bg-[#F7FAFE]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-600">
                RESEARCH AREAS
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-slate-950">
                Questions worth
                <br />
                researching.
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-slate-600">
                We focus on commercial questions where better intelligence,
                stronger execution, or better systems can create meaningful
                business impact.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {researchAreas.map((area) => {
                const Icon = area.icon;

                return (
                  <div
                    key={area.title}
                    className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 transition group-hover:bg-cyan-400 group-hover:text-slate-950">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-6 text-lg font-bold text-slate-950">
                      {area.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {area.description}
                    </p>
                  </div>
                );
              })}

            </div>

          </div>
        </div>
      </section>

      {/* Upcoming Papers */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="max-w-2xl">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-600">
              RESEARCH PIPELINE
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-950">
              What we are working on.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              These are research themes currently being developed. They are
              intentionally presented as works in progress until the underlying
              research is complete and ready for publication.
            </p>
          </div>

          <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">

            {upcomingPapers.map((paper) => (
              <div
                key={paper.number}
                className="grid gap-8 py-10 md:grid-cols-[80px_1fr_auto] md:items-center"
              >

                <div className="font-mono text-sm font-semibold text-cyan-600">
                  {paper.number}
                </div>

                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    {paper.category}
                  </p>

                  <h3 className="mt-3 text-xl font-bold text-slate-950">
                    {paper.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                    {paper.description}
                  </p>
                </div>

                <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                  COMING NEXT
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Research Standard */}
      <section className="bg-[#F7FAFE]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="rounded-[28px] border border-slate-200 bg-white p-8 md:p-12 lg:p-16">

            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

              <div>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-600">
                  OUR RESEARCH STANDARD
                </p>

                <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-slate-950">
                  Evidence before
                  <br />
                  conclusions.
                </h2>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">

                {[
                  ["01", "Evidence", "Start with observable information and clearly defined assumptions."],
                  ["02", "Framework", "Organize complex commercial problems into practical decision models."],
                  ["03", "Application", "Translate research into actions a revenue team can actually use."],
                  ["04", "Transparency", "Clearly distinguish documented evidence from interpretation and opinion."],
                ].map(([number, title, description]) => (
                  <div key={number} className="border-t border-slate-200 pt-5">
                    <span className="font-mono text-[10px] font-semibold text-cyan-600">
                      {number}
                    </span>

                    <h3 className="mt-3 text-lg font-bold text-slate-950">
                      {title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {description}
                    </p>
                  </div>
                ))}

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="overflow-hidden rounded-[28px] bg-[#080D14]">

            <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center lg:p-14">

              <div>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-400">
                  SALESFLUANCE
                </p>

                <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Have a growth problem worth researching?
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
                  Bring us the commercial question. We can explore the problem,
                  identify the signals, and determine what a useful solution
                  could look like.
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