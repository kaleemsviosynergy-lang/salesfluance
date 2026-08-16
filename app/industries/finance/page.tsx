import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Building2,
  Radar,
  Target,
  Users,
} from "lucide-react";

const CAPABILITIES = [
  {
    icon: Target,
    title: "Account Intelligence",
    description:
      "Identify finance organizations that fit your commercial priorities and deserve focused attention.",
  },
  {
    icon: Users,
    title: "Decision-Maker Mapping",
    description:
      "Understand the people, roles, and buying influence behind target financial accounts.",
  },
  {
    icon: Radar,
    title: "Demand Generation",
    description:
      "Connect relevant market signals with accounts that have a credible reason to engage.",
  },
  {
    icon: Brain,
    title: "AI-Assisted Intelligence",
    description:
      "Use AI-assisted research and analysis to increase speed while keeping human judgment in the process.",
  },
  {
    icon: Building2,
    title: "Strategic Partnerships",
    description:
      "Identify commercial relationships that can expand market access, distribution, and long-term growth.",
  },
];

const PROCESS = [
  {
    number: "01",
    title: "Identify",
    description:
      "Define the accounts, markets, segments, and commercial signals that matter.",
  },
  {
    number: "02",
    title: "Research",
    description:
      "Build account and decision-maker intelligence around the highest-value opportunities.",
  },
  {
    number: "03",
    title: "Qualify",
    description:
      "Apply focused qualification and human verification before opportunities move forward.",
  },
  {
    number: "04",
    title: "Engage",
    description:
      "Develop relevant conversations around the commercial priorities of each account.",
  },
  {
    number: "05",
    title: "Develop",
    description:
      "Support the transition from initial engagement toward qualified commercial opportunity.",
  },
];

export default function FinancePage() {
  return (
    <main className="bg-white text-[#0A0E14]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200">
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

        <div className="relative mx-auto max-w-[1280px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <div className="max-w-5xl">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-600">
              INDUSTRY / FINANCE
            </p>

            <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#0A0E14] sm:text-6xl lg:text-7xl">
              Turn financial market signals into{" "}
              <span className="text-cyan-600">
                qualified revenue relationships.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              SalesFluance helps finance and financial technology businesses
              identify high-value accounts, understand decision-makers, and
              build focused commercial opportunities.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#0A0E14] px-6 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                Book Discovery Call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/process"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-300 px-6 text-sm font-medium text-slate-700 transition-colors hover:border-slate-500 hover:text-[#0A0E14]"
              >
                Explore Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="border-b border-slate-200 bg-[#FAFAF9]">
        <div className="mx-auto max-w-[1280px] px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                THE COMMERCIAL CHALLENGE
              </p>

              <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                Financial markets generate signals.
                <br />
                <span className="text-cyan-600">
                  The challenge is knowing which ones matter.
                </span>
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-lg leading-8 text-slate-600">
                Finance organizations often operate across complex buying
                groups, specialized markets, and long commercial cycles.
                More data does not automatically create better opportunities.
              </p>

              <p className="mt-6 text-base leading-7 text-slate-500">
                SalesFluance focuses the process on the accounts, people, and
                commercial signals most relevant to your growth priorities —
                then combines AI-assisted research with human judgment to
                determine what deserves action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
          <div className="max-w-3xl">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              WHAT WE DO
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Built for the complexity of{" "}
              <span className="text-cyan-600">B2B finance.</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-px border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-5">
            {CAPABILITIES.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="bg-white p-7">
                  <Icon
                    aria-hidden="true"
                    className="h-5 w-5 text-cyan-600"
                    strokeWidth={1.5}
                  />

                  <h3 className="mt-8 text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-b border-slate-200 bg-[#FAFAF9]">
        <div className="mx-auto max-w-[1280px] px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                THE SALESFLUANCE METHOD
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                From market signal to{" "}
                <span className="text-cyan-600">commercial opportunity.</span>
              </h2>
            </div>

            <div>
              {PROCESS.map((step, index) => (
                <div
                  key={step.number}
                  className={`grid grid-cols-[60px_1fr] gap-6 py-7 ${
                    index === 0 ? "border-t border-slate-300" : ""
                  } border-b border-slate-200`}
                >
                  <span className="font-mono text-xs font-semibold text-slate-400">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-[#0A0E14] text-white">
        <div className="mx-auto max-w-[1280px] px-6 py-28 text-center sm:px-10 lg:px-16 lg:py-36">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
            FINANCE / SALESFLUANCE
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            Better intelligence should lead to{" "}
            <span className="text-cyan-400">
              better revenue conversations.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Start with a working conversation about your target market,
            accounts, commercial signals, and growth priorities.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-amber-400 px-6 text-sm font-semibold text-[#0A0E14] transition-colors hover:bg-amber-300"
          >
            Book Discovery Call
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}