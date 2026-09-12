import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Users,
  Layers,
  Building2,
  BarChart3,
  Workflow,
  RefreshCw,
  CheckCircle2,
} from "lucide-react";

import { buildMetadata } from "@/lib/seo/buildMetadata";

export const metadata: Metadata = buildMetadata({
  title: "SaaS Lead Generation & ABM | SalesFluance",
  description:
    "SalesFluance helps SaaS companies build qualified pipeline through SaaS lead generation and ABM built around ICP fit, buyer committees, and pipeline quality.",
  path: "/industries/saas",
  keywords: [
    "SaaS lead generation",
    "SaaS lead generation agency",
    "ABM for SaaS",
    "SaaS outbound sales agency",
  ],
});

const challenges = [
  {
    title: "Crowded, well-funded categories",
    description:
      "Most SaaS categories have multiple credible vendors competing for the same buyer's attention, making a clear commercial narrative essential.",
  },
  {
    title: "Buying committees, not single buyers",
    description:
      "SaaS purchases typically move through several stakeholders — economic buyers, technical evaluators, and end users — each with different priorities.",
  },
  {
    title: "Activity that doesn't equal intent",
    description:
      "Website visits, content downloads, and trial sign-ups are useful signals, but they don't reliably indicate who is ready for a sales conversation.",
  },
  {
    title: "Retention pressure changes the pipeline math",
    description:
      "When expansion and renewal revenue matter as much as new logos, pipeline quality and account fit carry more weight than raw lead volume.",
  },
];

const buyerConsiderations = [
  {
    icon: Users,
    title: "Multiple stakeholders",
    text: "Economic buyers, technical evaluators, and day-to-day users often need different messaging and different proof points.",
  },
  {
    icon: Building2,
    title: "RevOps and Finance influence",
    text: "Procurement, security review, and budget approval frequently sit outside the initial champion, and can stall a deal if engaged too late.",
  },
  {
    icon: Layers,
    title: "ICP fit over firmographic volume",
    text: "A tightly defined ideal customer profile — not just company size or industry — is what keeps pipeline quality high in competitive categories.",
  },
  {
    icon: RefreshCw,
    title: "Expansion and renewal in view",
    text: "Accounts are evaluated with an eye toward long-term fit, not only the likelihood of closing an initial deal.",
  },
];

const relevantServices = [
  {
    slug: "lead-generation",
    name: "Lead Generation",
    outcomeLine: "Build a predictable pipeline of qualified, ICP-fit SaaS opportunities.",
  },
  {
    slug: "account-based-marketing",
    name: "Account-Based Marketing",
    outcomeLine: "Coordinated, multi-threaded engagement for named enterprise SaaS accounts.",
  },
  {
    slug: "appointment-setting",
    name: "Appointment Setting",
    outcomeLine: "Calendar-ready meetings with the stakeholders who influence the decision.",
  },
];

const faqs = [
  {
    question: "How is SaaS lead generation different from other B2B industries?",
    answer:
      "SaaS buying usually involves a wider buying committee, shorter evaluation windows for point solutions, and a stronger link between new-logo pipeline and long-term account expansion. Targeting and messaging need to account for all three.",
  },
  {
    question: "Do you support account-based marketing for SaaS specifically?",
    answer:
      "Yes. Our account-based marketing service is used for named-account, committee-based motions common in competitive SaaS categories — coordinating outreach across the stakeholders involved in a purchase decision.",
  },
  {
    question: "Can this work alongside our existing SDR or growth team?",
    answer:
      "SalesFluance is typically brought in to extend pipeline generation capacity or cover specific segments and outbound motions, working alongside an existing revenue team rather than replacing it.",
  },
  {
    question: "How is account and contact data quality handled?",
    answer:
      "Account and contact data used in SaaS outbound programs goes through verification before it reaches your team, so qualification time is spent on genuine opportunities rather than correcting bad records.",
  },
];

export default function SaaSPage() {
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
          <div className="max-w-4xl">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-600">
              INDUSTRY PLAYBOOK / SAAS
            </p>

            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Predictable pipeline
              <br />
              <span className="text-cyan-500">
                for competitive SaaS markets.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              SalesFluance helps SaaS companies identify high-value accounts,
              reach the right people across the buying committee, and turn
              commercial signals into qualified revenue opportunities —
              without relying on inbound demand alone.
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
        </div>
      </section>

      {/* SAAS CHALLENGES */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="max-w-3xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-600">
              THE SAAS PIPELINE PROBLEM
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              SaaS pipeline requires more
              <br />
              than a bigger contact list.
            </h2>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2">
            {challenges.map((item, index) => (
              <article key={item.title} className="bg-white p-7 sm:p-9">
                <span className="font-mono text-[11px] font-semibold text-cyan-600">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-lg font-semibold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW SALESFLUANCE HELPS */}
      <section className="bg-[#0A0E14] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">

          <div className="max-w-3xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
              FROM SIGNAL TO PIPELINE
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Build pipeline around
              <br />
              accounts that actually fit.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400">
              SalesFluance combines account prioritization, multi-threaded
              outreach, and qualification into a single SaaS pipeline
              generation motion — built around your ICP, not generic
              firmographic filters.
            </p>

            <p className="mt-5 text-base leading-7 text-slate-400">
              This is delivered through our{" "}
              <Link
                href="/services/lead-generation"
                className="font-medium text-cyan-400 underline decoration-cyan-400/40 underline-offset-4 transition-colors hover:text-cyan-300"
              >
                B2B lead generation
              </Link>{" "}
              service, with{" "}
              <Link
                href="/services/account-based-marketing"
                className="font-medium text-cyan-400 underline decoration-cyan-400/40 underline-offset-4 transition-colors hover:text-cyan-300"
              >
                account-based marketing
              </Link>{" "}
              coordinating engagement across the buying committee for
              named target accounts.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-slate-800 bg-slate-800 md:grid-cols-3">
            {[
              {
                icon: Target,
                number: "01",
                title: "Define & Prioritize",
                text: "Sharpen your ICP and prioritize the accounts most likely to convert and expand.",
              },
              {
                icon: Users,
                number: "02",
                title: "Multi-thread the Committee",
                text: "Reach the economic buyer, technical evaluator, and end users with context-aware messaging.",
              },
              {
                icon: CheckCircle2,
                number: "03",
                title: "Qualify Pipeline-Ready Signals",
                text: "Separate genuine buying intent from generic engagement before it reaches your sales team.",
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

      {/* BUYER & PERSONA CONSIDERATIONS */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-600">
                BUYER & PERSONA CONSIDERATIONS
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                SaaS deals are won
                <br />
                across a committee.
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
                Few SaaS purchases are decided by one person. Messaging and
                outreach need to account for the different priorities of
                economic buyers, technical evaluators, end users, and the
                operations functions that influence approval.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {buyerConsiderations.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="border border-slate-200 bg-slate-50 p-6">
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

      {/* ABM FOR SAAS */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-600">
                ABM FOR SAAS
              </p>

              <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
                Named accounts deserve
                <br />
                a coordinated approach.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                In competitive SaaS categories, the accounts that matter most
                are usually known in advance. Account-based marketing for
                SaaS focuses effort on those named accounts — aligning
                outreach, content, and timing around the specific stakeholders
                involved in each deal, rather than spreading effort evenly
                across a broad target list.
              </p>

              <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                This approach is delivered through our{" "}
                <Link
                  href="/services/account-based-marketing"
                  className="font-medium text-cyan-600 underline decoration-cyan-600/30 underline-offset-4 transition-colors hover:text-cyan-700"
                >
                  account-based marketing
                </Link>{" "}
                service, built around enterprise and mid-market SaaS accounts
                where a single champion is rarely enough to move a deal
                forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SAAS OUTBOUND & PIPELINE DEVELOPMENT */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="max-w-3xl">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-600">
              SAAS OUTBOUND & PIPELINE DEVELOPMENT
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Outbound built around
              <br />
              account fit, not volume.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              Acting as an extension of your revenue team, SalesFluance runs
              outbound sales development for SaaS companies that need
              additional pipeline capacity — combining account
              prioritization, sequenced multi-channel outreach, and
              qualification, with sales and marketing kept aligned on the
              same target account list throughout.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Layers,
                title: "Account prioritization",
                text: "Rank target accounts by ICP fit and commercial relevance before outreach begins.",
              },
              {
                icon: Workflow,
                title: "Sequenced outreach",
                text: "Coordinate email, phone, and social touchpoints around a single account timeline.",
              },
              {
                icon: BarChart3,
                title: "Pipeline quality checks",
                text: "Qualify opportunities against agreed criteria before they reach your sales team.",
              },
              {
                icon: Users,
                title: "Sales & marketing alignment",
                text: "Keep outbound and demand-generation efforts pointed at the same account list.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="border border-slate-200 bg-slate-50 p-6">
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
      </section>

      {/* BUSINESS OUTCOMES */}
      <section className="bg-[#0A0E14] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="max-w-3xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
              WHAT CHANGES
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              What a focused SaaS
              <br />
              pipeline motion looks like.
            </h2>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {[
              "More qualified conversations with accounts that actually match your ICP.",
              "A shorter path from buying signal to sales conversation.",
              "Multi-threaded engagement across the buying committee, not just one champion.",
              "Less dependence on inbound demand alone to fill pipeline.",
            ].map((text) => (
              <div
                key={text}
                className="flex items-start gap-3 border border-slate-800 bg-[#0F141C] p-6"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                <p className="text-sm leading-6 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-600">
            FREQUENTLY ASKED QUESTIONS
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            SaaS lead generation, answered.
          </h2>

          <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((faq) => (
              <div key={faq.question} className="py-7">
                <h3 className="text-base font-semibold text-slate-950">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELEVANT / RELATED SERVICES */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">

          <div className="max-w-2xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-600">
              RELEVANT SERVICES
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Built around the SaaS buying committee.
            </h2>
          </div>

          <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
            {relevantServices.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex items-center gap-5 py-6 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 sm:gap-8"
              >
                <span className="w-8 shrink-0 font-mono text-xs font-semibold tracking-[0.14em] text-slate-300">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-semibold text-slate-950 transition-colors group-hover:text-cyan-600 sm:text-lg">
                    {service.name}
                  </h3>

                  <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600">
                    {service.outcomeLine}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:border-cyan-200 group-hover:bg-cyan-50 group-hover:text-cyan-600"
                >
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center sm:px-10 lg:py-32">

          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-600">
            SAAS PIPELINE GROWTH
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Turn SaaS buying signals
            <br />
            into qualified pipeline.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600">
            Let's examine your ICP, target accounts, and buying committee —
            and determine where SalesFluance can add pipeline capacity.
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
