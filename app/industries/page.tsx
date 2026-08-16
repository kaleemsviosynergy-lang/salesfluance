import Link from "next/link";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    number: "01",
    name: "Healthcare",
    slug: "healthcare",
    description:
      "Identify commercial signals across complex healthcare markets, stakeholders, providers, and buying organizations.",
  },
  {
    number: "02",
    name: "SaaS",
    slug: "saas",
    description:
      "Turn account intelligence and changing buying signals into focused pipeline opportunities.",
  },
  {
    number: "03",
    name: "IT Services",
    slug: "it-services",
    description:
      "Find organizations with active technology needs and connect commercial signals to the right engagement strategy.",
  },
  {
    number: "04",
    name: "Finance",
    slug: "finance",
    description:
      "Navigate relationship-driven markets with intelligence built around accounts, stakeholders, signals, and commercial timing.",
  },
  {
    number: "05",
    name: "Manufacturing",
    slug: "manufacturing",
    description:
      "Surface operational, technology, and business signals that indicate where commercial conversations can begin.",
  },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200">
        {/* Background grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #64748B 1px, transparent 1px),
              linear-gradient(to bottom, #64748B 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />

        <div className="relative mx-auto max-w-[1280px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <div className="max-w-4xl">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-600">
              INDUSTRIES
            </p>

            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">
              Revenue intelligence,
              <br />
              <span className="text-cyan-500">
                applied to your market.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Every market has different buying dynamics, stakeholders,
              commercial signals, and paths to revenue. Our approach adapts
              to the realities of the industry you operate in.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-16 lg:py-28">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              MARKET CONTEXT
            </p>

            <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
              Different markets.
              <br />
              Different buying dynamics.
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-slate-600">
              Commercial intelligence only becomes useful when it reflects
              the market it is being applied to. We look beyond generic
              targeting to understand the accounts, people, signals, and
              engagement patterns that shape opportunity within each industry.
            </p>

            <p className="mt-6 text-base leading-7 text-slate-500">
              Explore how the FLUANZ approach translates into practical
              revenue intelligence for your market.
            </p>
          </div>
        </div>
      </section>

      {/* INDUSTRY DIRECTORY */}
      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-600">
                INDUSTRY INTELLIGENCE
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                Built around the realities of your market.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-slate-500">
              Select an industry to explore its commercial signals,
              challenges, and revenue opportunities.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2">
            {industries.map((industry, index) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className={`group relative bg-white p-7 transition-colors duration-300 hover:bg-slate-950 hover:text-white sm:p-9 ${
                  index === industries.length - 1
                    ? "sm:col-span-2"
                    : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] font-semibold tracking-[0.16em] text-slate-400 transition-colors group-hover:text-cyan-400">
                    {industry.number}
                  </span>

                  <ArrowRight className="h-4 w-4 text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-400" />
                </div>

                <h3 className="mt-10 text-2xl font-semibold tracking-[-0.025em]">
                  {industry.name}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500 transition-colors group-hover:text-slate-400">
                  {industry.description}
                </p>

                <div className="mt-8 h-px w-8 bg-cyan-400 transition-all duration-300 group-hover:w-14" />

                <p className="mt-4 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-400 transition-colors group-hover:text-slate-500">
                  Explore industry
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="border-t border-slate-200 bg-[#0A0E14] text-white">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-16 lg:py-28">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
              THE FLUANZ APPROACH
            </p>

            <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
              One methodology.
              <br />
              Applied with context.
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="max-w-2xl text-lg leading-8 text-slate-400">
              The underlying methodology stays consistent: understand the
              account, identify the people, interpret the signals, determine
              the right engagement, and move toward measurable revenue.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 font-mono text-[10px] font-semibold uppercase tracking-[0.14em]">
              <span className="text-white">Accounts</span>
              <span className="text-cyan-400">→</span>
              <span className="text-white">People</span>
              <span className="text-cyan-400">→</span>
              <span className="text-white">Signals</span>
              <span className="text-cyan-400">→</span>
              <span className="text-white">Engagement</span>
              <span className="text-cyan-400">→</span>
              <span className="text-white">Revenue</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-24 text-center sm:px-10 lg:px-16 lg:py-32">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-600">
            FIND YOUR SIGNAL
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl">
            Your market has signals.
            <br />
            <span className="text-cyan-500">
              The question is what you do with them.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500">
            Start a working conversation around your market, target accounts,
            and commercial priorities.
          </p>

          <Link
            href="/contact"
            className="group mt-9 inline-flex h-12 items-center gap-2 rounded-lg bg-[#0A0E14] px-6 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            Book Discovery Call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}