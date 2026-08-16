import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Crosshair,
  Layers3,
  Target,
} from "lucide-react";

const playbooks = [
  {
    number: "01",
    category: "TARGETING",
    title: "Build a Revenue-Ready ICP",
    description:
      "A practical framework for defining the accounts, buying roles, signals, and conditions that should shape a B2B growth campaign.",
    icon: Target,
    status: "Coming soon",
  },
  {
    number: "02",
    category: "DEMAND GENERATION",
    title: "Design a Signal-Led Campaign",
    description:
      "Move beyond static lists by connecting account intelligence, commercial signals, messaging, and engagement into one campaign system.",
    icon: Crosshair,
    status: "Coming soon",
  },
  {
    number: "03",
    category: "SALES INTELLIGENCE",
    title: "From Accounts to Opportunities",
    description:
      "A framework for turning researched accounts and decision-makers into structured, prioritized opportunities for revenue teams.",
    icon: Building2,
    status: "Coming soon",
  },
  {
    number: "04",
    category: "REVENUE STRATEGY",
    title: "Build a Revenue Readiness System",
    description:
      "Understand the conditions that determine whether an organization is actually ready to convert commercial intelligence into pipeline.",
    icon: BrainCircuit,
    status: "Coming soon",
  },
  {
    number: "05",
    category: "ACCOUNT-BASED MARKETING",
    title: "Map the Buying Committee",
    description:
      "Identify the people, relationships, influence patterns, and engagement signals that shape complex B2B buying decisions.",
    icon: Layers3,
    status: "Coming soon",
  },
  {
    number: "06",
    category: "OPTIMIZATION",
    title: "Build the Feedback Loop",
    description:
      "Create a repeatable system for using campaign performance, qualification, client feedback, and testing to improve the next cycle.",
    icon: BarChart3,
    status: "Coming soon",
  },
];

export default function PlaybooksPage() {
  return (
    <main className="bg-white text-slate-950">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-[#F7FAFE]">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-28 lg:px-8">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500 transition hover:text-cyan-500"
          >
            <ArrowLeft className="h-3 w-3" />
            Resources
          </Link>

          <div className="mt-12 max-w-5xl">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-600">
              PLAYBOOKS
            </p>

            <h1 className="mt-5 text-5xl font-semibold tracking-[-0.045em] text-slate-950 md:text-7xl">
              Systems you can
              <br />
              <span className="text-cyan-500">put to work.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              Practical frameworks for building stronger B2B targeting,
              demand generation, sales intelligence, and revenue systems.
            </p>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="border-b border-slate-200">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1fr_1.2fr] lg:px-8">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-600">
              PRACTICAL INTELLIGENCE
            </p>

            <h2 className="mt-5 max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">
              Less theory.
              <br />
              More systems.
            </h2>
          </div>

          <div className="max-w-2xl text-base leading-8 text-slate-600">
            <p>
              A good playbook should make the next decision easier. These
              frameworks are designed around the actual work behind B2B growth:
              identifying the right accounts, understanding buying signals,
              engaging the right people, and creating a path toward revenue.
            </p>

            <p className="mt-6">
              Each playbook will separate the framework from the evidence,
              assumptions, and execution steps behind it.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-600">
              FEATURED PLAYBOOK
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Start with the foundation.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-500 md:text-right">
            The library is being developed around practical systems that
            revenue teams can apply, adapt, and improve.
          </p>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-[#1E2530] bg-[#080D14] text-white shadow-2xl">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="p-8 md:p-12 lg:p-14">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950">
                <Target className="h-6 w-6" />
              </div>

              <p className="mt-8 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-400">
                PLAYBOOK 01 · TARGETING
              </p>

              <h3 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">
                Build a Revenue-Ready ICP.
              </h3>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
                A structured approach to defining who you should target, why
                they should matter, and which signals indicate that an account
                is worth engaging.
              </p>

              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-400">
                <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" />
                Coming soon
              </div>
            </div>

            <div className="flex min-h-[320px] items-center justify-center bg-[#0B1B2D] p-10">
              <div className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-cyan-400/30">
                  <Target className="h-8 w-8 text-cyan-400" />
                </div>

                <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
                  SIGNAL → PRIORITY → ACTION
                </p>

                <p className="mt-3 text-lg font-medium text-white">
                  Better targeting starts with better definition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLAYBOOK GRID */}
      <section className="bg-[#F7FAFE]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mb-12">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-600">
              THE LIBRARY
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Frameworks for the work ahead.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {playbooks.map((playbook) => {
              const Icon = playbook.icon;

              return (
                <article
                  key={playbook.number}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B1B2D] text-cyan-400">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="font-mono text-[10px] text-slate-400">
                      {playbook.number}
                    </span>
                  </div>

                  <p className="mt-8 font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-cyan-600">
                    {playbook.category}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">
                    {playbook.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {playbook.description}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-xs text-slate-400">
                      {playbook.status}
                    </span>

                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400">
                      In development
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* POINT OF VIEW */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-600">
              OUR STANDARD
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-5xl">
              A playbook should change
              <br />
              <span className="text-slate-500">what you do next.</span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-600">
              We are not building a library to add more noise to the B2B
              ecosystem. The goal is simple: useful frameworks, clear
              reasoning, and practical systems that survive contact with a
              real revenue team.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="overflow-hidden rounded-[28px] bg-[#080D14] px-8 py-12 text-white md:px-12 md:py-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-400">
                SALESFLUANCE
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Have a growth problem worth solving?
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                If the right framework does not exist yet, let’s work through
                the problem directly.
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
      </section>
    </main>
  );
}