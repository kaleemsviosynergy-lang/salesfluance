import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Users,
  Target,
  Activity,
  Building2,
  Stethoscope,
  CheckCircle2,
} from "lucide-react";

export default function HealthcarePage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200">
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

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">

            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-600">
                INDUSTRY PLAYBOOK / HEALTHCARE
              </p>

              <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Revenue growth for
                <br />
                <span className="text-cyan-500">
                  complex healthcare markets.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Healthcare buying decisions rarely sit with one person.
                SalesFluance helps identify the right organizations,
                decision-makers, and commercial signals — then turns that
                intelligence into qualified conversations.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#0A0E14] px-6 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                >
                  Book Discovery Call
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-200 px-6 text-sm font-medium text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-950"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Intelligence visual */}
            <div className="relative">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-slate-400">
                      HEALTHCARE SIGNAL MAP
                    </p>
                    <p className="mt-1 text-sm font-semibold">
                      Commercial Intelligence
                    </p>
                  </div>

                  <span className="h-2 w-2 rounded-full bg-cyan-500" />
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    ["01", "Target Organization", "Health System"],
                    ["02", "Decision Maker", "Executive / Commercial"],
                    ["03", "Buying Signal", "Active Opportunity"],
                    ["04", "Engagement", "Relevant Outreach"],
                    ["05", "Outcome", "Qualified Conversation"],
                  ].map(([number, label, value]) => (
                    <div
                      key={number}
                      className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4"
                    >
                      <span className="font-mono text-[10px] text-cyan-600">
                        {number}
                      </span>

                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                          {label}
                        </p>
                        <p className="mt-1 text-sm font-medium text-slate-900">
                          {value}
                        </p>
                      </div>

                      <ArrowRight className="h-4 w-4 text-slate-300" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY HEALTHCARE IS DIFFERENT */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-600">
                THE MARKET REALITY
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                Healthcare requires
                <br />
                more than a contact list.
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
                Healthcare organizations operate across multiple stakeholders,
                specialized functions, long buying cycles, and high expectations
                around relevance and trust. The commercial challenge is not
                simply finding contacts. It is understanding which organizations
                matter, who influences the decision, and when engagement is
                commercially relevant.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: Building2,
                    title: "Complex Organizations",
                    text: "Map organizations and buying groups instead of treating every contact as an isolated prospect.",
                  },
                  {
                    icon: Users,
                    title: "Multiple Stakeholders",
                    text: "Identify the people who influence, evaluate, and approve commercial decisions.",
                  },
                  {
                    icon: Activity,
                    title: "Relevant Signals",
                    text: "Prioritize engagement around meaningful commercial context rather than activity volume.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Quality & Verification",
                    text: "Use verified information and structured quality controls before opportunities reach your team.",
                  },
                ].map(({ icon: Icon, title, text }) => (
                  <div
                    key={title}
                    className="border border-slate-200 bg-white p-6"
                  >
                    <Icon className="h-5 w-5 text-cyan-600" />

                    <h3 className="mt-5 text-sm font-bold uppercase tracking-[0.1em]">
                      {title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* HOW SALESFLUANCE HELPS */}
      <section className="bg-[#0A0E14] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">

          <div className="max-w-3xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
              FROM INTELLIGENCE TO ENGAGEMENT
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Build the right healthcare
              <br />
              revenue relationships.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400">
              SalesFluance connects account intelligence, decision-maker
              research, relevant outreach, qualification, and reporting into
              one commercial workflow.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-slate-800 bg-slate-800 md:grid-cols-3">
            {[
              {
                icon: Target,
                number: "01",
                title: "Identify",
                text: "Define the healthcare organizations and commercial profiles that fit your growth priorities.",
              },
              {
                icon: Stethoscope,
                number: "02",
                title: "Engage",
                text: "Reach relevant decision-makers with context-aware messaging and coordinated outreach.",
              },
              {
                icon: CheckCircle2,
                number: "03",
                title: "Qualify",
                text: "Separate genuine commercial opportunities from activity that is unlikely to move revenue.",
              },
            ].map(({ icon: Icon, number, title, text }) => (
              <div key={number} className="bg-[#0A0E14] p-7 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-cyan-400">
                    {number}
                  </span>
                  <Icon className="h-5 w-5 text-slate-600" />
                </div>

                <h3 className="mt-12 text-lg font-semibold">{title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center sm:px-10 lg:py-32">

          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-600">
            HEALTHCARE GROWTH
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Turn healthcare market intelligence
            <br />
            into commercial opportunity.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600">
            Let's examine your target market, commercial priorities, and
            revenue relationships — and determine where SalesFluance can add
            value.
          </p>

          <Link
            href="/contact"
            className="group mt-9 inline-flex h-12 items-center gap-2 rounded-lg bg-[#0A0E14] px-7 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            Book Discovery Call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>

        </div>
      </section>

    </main>
  );
}