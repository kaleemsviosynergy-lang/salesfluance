import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { buildMetadata } from "@/lib/seo/buildMetadata";

export const metadata: Metadata = buildMetadata({
  title: "IT Services Lead Generation Agency | SalesFluance",
  description:
    "SalesFluance is an IT services lead generation agency, helping technology providers turn capability into qualified, commercially relevant conversations.",
  path: "/industries/it-services",
  keywords: [
    "IT services lead generation",
    "IT services lead generation agency",
  ],
});

const capabilities = [
  "Managed IT Services",
  "Cloud & Infrastructure",
  "Cybersecurity",
  "Technology Consulting",
  "Data & Analytics",
  "Software & Engineering Services",
];

const challenges = [
  {
    title: "Complex buying decisions",
    description:
      "Technology purchases often involve multiple stakeholders, long evaluation cycles, and competing priorities.",
  },
  {
    title: "The right buyer is hard to reach",
    description:
      "Technical capabilities do not automatically connect you with the executives responsible for commercial decisions.",
  },
  {
    title: "Demand is difficult to qualify",
    description:
      "Activity, engagement, and contact volume do not necessarily indicate genuine buying intent.",
  },
  {
    title: "Differentiation gets diluted",
    description:
      "When similar technology providers compete for attention, a clear commercial narrative becomes critical.",
  },
];

const approach = [
  {
    number: "01",
    title: "Identify the right accounts",
    description:
      "Define the companies, markets, and account characteristics where your capabilities have the strongest commercial relevance.",
  },
  {
    number: "02",
    title: "Map the buying environment",
    description:
      "Identify the people and stakeholder groups involved in evaluating, influencing, and approving technology decisions.",
  },
  {
    number: "03",
    title: "Read commercial signals",
    description:
      "Combine account intelligence, engagement behavior, and market context to distinguish meaningful opportunities from surface-level activity.",
  },
  {
    number: "04",
    title: "Create relevant engagement",
    description:
      "Build outreach and conversations around the problems, priorities, and timing that matter to each target account.",
  },
  {
    number: "05",
    title: "Convert intelligence into opportunity",
    description:
      "Qualify the strongest signals and create a clearer path from market activity to sales conversations and pipeline.",
  },
];

const relevantServices = [
  {
    slug: "lead-generation",
    name: "Lead Generation",
    outcomeLine: "Build a predictable pipeline of qualified IT services opportunities.",
  },
  {
    slug: "intent-data",
    name: "Intent Data",
    outcomeLine: "Know which accounts are actively evaluating technology before you reach out.",
  },
  {
    slug: "account-based-marketing",
    name: "Account-Based Marketing",
    outcomeLine: "Coordinated engagement for named enterprise technology accounts.",
  },
];

export default function ITServicesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <div className="max-w-4xl">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-600">
              INDUSTRY · IT SERVICES
            </p>

            <h1 className="mt-6 text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Turn technology
              <br />
              <span className="text-cyan-500">
                capability into opportunity.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              SalesFluance helps IT services companies identify the accounts,
              people, and commercial signals that create a clearer path from
              market activity to qualified revenue relationships.
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
                className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-300 px-6 text-sm font-medium text-slate-700 transition-colors hover:border-slate-500 hover:text-slate-950"
              >
                Explore Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry reality */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-600">
                THE COMMERCIAL REALITY
              </p>

              <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
                Great technology does not automatically create pipeline.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                IT services businesses often have strong technical
                capabilities but face a different challenge: connecting those
                capabilities to the right commercial opportunity at the right
                time.
              </p>

              <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                SalesFluance focuses on the relationship between accounts,
                stakeholders, signals, engagement, and revenue — helping
                technology providers move beyond activity and toward
                commercially meaningful conversations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="max-w-3xl">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-600">
              WHERE IT SERVICES COMPANIES GET STUCK
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              The challenge is not capability.
              <br />
              It is commercial connection.
            </h2>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2">
            {challenges.map((item, index) => (
              <article
                key={item.title}
                className="bg-white p-7 sm:p-9"
              >
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

      {/* Capabilities */}
      <section className="bg-[#0A0E14] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
                IT SERVICES
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                Built for technology businesses with complex offerings.
              </h2>
            </div>

            <div className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {capabilities.map((capability) => (
                <div
                  key={capability}
                  className="flex items-center gap-3 border-b border-[#1E2530] pb-5"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-400" />
                  <span className="text-sm text-slate-300">
                    {capability}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="max-w-3xl">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-600">
              THE SALESFLUANCE APPROACH
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              From technology capability
              <br />
              to revenue relationship.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              The FLUANZ methodology connects market intelligence with
              commercial action — so your team can focus on opportunities that
              have a stronger reason to exist.
            </p>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              This work is delivered through our{" "}
              <Link
                href="/services/lead-generation"
                className="font-medium text-cyan-600 underline decoration-cyan-600/30 underline-offset-4 transition-colors hover:text-cyan-700"
              >
                B2B lead generation
              </Link>{" "}
              and{" "}
              <Link
                href="/services/intent-data"
                className="font-medium text-cyan-600 underline decoration-cyan-600/30 underline-offset-4 transition-colors hover:text-cyan-700"
              >
                intent data
              </Link>{" "}
              programs, coordinated through{" "}
              <Link
                href="/services/account-based-marketing"
                className="font-medium text-cyan-600 underline decoration-cyan-600/30 underline-offset-4 transition-colors hover:text-cyan-700"
              >
                account-based marketing
              </Link>{" "}
              for named enterprise technology accounts.
            </p>
          </div>

          <div className="mt-14 divide-y divide-slate-200 border-y border-slate-200">
            {approach.map((item) => (
              <div
                key={item.number}
                className="grid gap-5 py-8 md:grid-cols-[100px_0.8fr_1.2fr] md:items-start"
              >
                <span className="font-mono text-xs font-semibold text-cyan-600">
                  {item.number}
                </span>

                <h3 className="text-base font-semibold text-slate-950">
                  {item.title}
                </h3>

                <p className="max-w-xl text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELEVANT SERVICES */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">

          <div className="max-w-2xl">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-600">
              RELEVANT SERVICES
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Built around the technology buying cycle.
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

      {/* Closing CTA */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center sm:px-10 lg:py-32">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-600">
            IT SERVICES · SALESFLUANCE
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl">
            Your next opportunity may already be showing a signal.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Let&apos;s identify where your strongest commercial opportunities
            may be hiding — and determine what it would take to turn those
            signals into revenue relationships.
          </p>

          <div className="mt-9">
            <Link
              href="/contact"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#0A0E14] px-6 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Book Discovery Call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
