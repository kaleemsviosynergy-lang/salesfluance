"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Factory,
  HeartPulse,
  Landmark,
  Lightbulb,
  Brain,
} from "lucide-react";

// Adjust this import path to match your project structure —
// this is the same brand mark used in the nav / Hero panel.
import LogoMark from "@/components/brand/LogoMark";

const values = [
  {
    number: "01",
    title: "Curiosity",
    description:
      "We continuously question assumptions and conventional approaches to find better ways forward.",
  },
  {
    number: "02",
    title: "Partnership",
    description:
      "We work alongside businesses as an extension of their commercial team, not a disconnected vendor.",
  },
  {
    number: "03",
    title: "Integrity",
    description:
      "Trust is built through transparency, responsible data practices, and honest communication.",
  },
  {
    number: "04",
    title: "Progress",
    description:
      "We value measurable improvement over activity for activity's sake.",
  },
];

const howWeWork = [
  {
    number: "01",
    title: "Human Expertise",
    description:
      "Business relationships require judgment, context, and conversation. Technology supports the work; people give it meaning.",
  },
  {
    number: "02",
    title: "AI Intelligence",
    description:
      "AI helps research markets, identify patterns, prioritize opportunities, and accelerate execution.",
  },
  {
    number: "03",
    title: "Verified Data",
    description:
      "Better decisions begin with relevant, structured, and reliable information.",
  },
  {
    number: "04",
    title: "Revenue Focus",
    description:
      "Activity only matters when it contributes to meaningful commercial outcomes.",
  },
];

const industries = [
  { name: "Finance", href: "/industries/finance", icon: Landmark },
  { name: "Healthcare", href: "/industries/healthcare", icon: HeartPulse },
  { name: "IT Services", href: "/industries/it-services", icon: Brain },
  { name: "Manufacturing", href: "/industries/manufacturing", icon: Factory },
  { name: "SaaS", href: "/industries/saas", icon: Lightbulb },
];

export default function AboutPage() {
  return (
    <main className="bg-white text-[#0A0E14]">
      {/* ================================================================
          HERO
          Rewritten headline — relationship/intelligence language,
          consistent with Home ("Turn Market Intelligence Into Revenue
          Relationships"), not the platform/SaaS word "infrastructure."
      ================================================================ */}

      <section
        aria-labelledby="about-heading"
        className="relative overflow-hidden border-b border-slate-200 bg-[#FAFAF9]"
      >
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

        <div className="relative mx-auto max-w-[1280px] px-6 py-28 sm:px-10 lg:px-16 lg:py-36">
          <div className="max-w-5xl">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-600">
              About SalesFluance
            </p>

            <h1
              id="about-heading"
              className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.04] tracking-[-0.035em] text-[#0A0E14] sm:text-6xl lg:text-7xl"
            >
              We build revenue relationships
              <br />
              <span className="text-cyan-600">not lead lists.</span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
              SalesFluance helps B2B businesses turn fragmented prospecting,
              partnerships, and data into a connected path to revenue.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================
          WHO WE ARE
          Second paragraph trimmed ~25% for scannability.
      ================================================================ */}

      <section
        aria-labelledby="who-we-are-heading"
        className="border-b border-slate-200 bg-white"
      >
        <div className="mx-auto max-w-[1280px] px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Who We Are
              </p>

              <h2
                id="who-we-are-heading"
                className="mt-5 max-w-md text-4xl font-semibold leading-tight tracking-[-0.025em] text-[#0A0E14] sm:text-5xl"
              >
                A B2B growth partner built around relationships.
              </h2>
            </div>

            <div className="max-w-3xl space-y-6 text-base leading-8 text-slate-600 sm:text-lg">
              <p>
                SalesFluance helps businesses create the relationships that
                move revenue forward — with prospects, partners,
                decision-makers, and the markets they want to enter.
              </p>

              <p>
                Our purpose is simple: combine human expertise, intelligent
                technology, and disciplined execution. Less time chasing
                disconnected opportunities — more time building relationships
                that matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          OUR VISION — The Grow Together Economy
          The emotional peak of the page. Larger type ceiling than Hero,
          a one-time draw-in animation on the convergence lines (this is
          the one place on the page that spends animation budget), and a
          glowing gradient seam into the next section instead of a flat
          cut — makes the transition itself feel authored.
      ================================================================ */}

      <section
        aria-labelledby="grow-together-heading"
        className="relative overflow-hidden bg-[#0A0E14] text-white"
      >
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
          viewBox="0 0 1440 760"
          fill="none"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M80 620 C330 620 420 540 610 430 C790 325 900 285 1080 205 C1180 160 1260 110 1360 60"
            stroke="#22D3EE"
            strokeOpacity="0.14"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />

          <motion.path
            d="M160 700 C400 650 520 570 700 480 C870 395 1030 330 1210 220"
            stroke="#22D3EE"
            strokeOpacity="0.08"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.8, ease: "easeInOut", delay: 0.15 }}
          />

          <circle cx="610" cy="430" r="4" fill="#22D3EE" fillOpacity="0.18" />
          <circle cx="1080" cy="205" r="4" fill="#22D3EE" fillOpacity="0.2" />
          <circle cx="1360" cy="60" r="5" fill="#22D3EE" fillOpacity="0.28" />
        </svg>

        <div className="relative mx-auto max-w-[1280px] px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
          <div className="max-w-4xl">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Our Point of View
            </p>

            <h2
              id="grow-together-heading"
              className="mt-6 text-5xl font-semibold leading-[1.03] tracking-[-0.035em] sm:text-6xl lg:text-7xl xl:text-8xl"
            >
              The{" "}
              <span className="text-cyan-400">Grow Together Economy.</span>
            </h2>

            <div className="mt-10 max-w-3xl space-y-6 text-base leading-8 text-slate-400 sm:text-lg">
              <p>
                We believe the next generation of B2B growth will be built
                through connected ecosystems rather than isolated
                transactions.
              </p>

              <p>
                Businesses grow when the right companies, people, partners,
                and opportunities find each other. SalesFluance exists to
                help create those connections — turning relationships into
                opportunities, and opportunities into sustainable growth.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-12 bg-cyan-400/40" />

              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Better connections. Better opportunities. Shared growth.
              </p>
            </div>
          </div>
        </div>

        {/* Glowing seam — the transition into the next section is deliberate,
            not a flat color cut. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
        />
      </section>

      {/* ================================================================
          CORE VALUES — moved up (Who → Believe → Think → Work → Trust)
          Reformatted from a bordered card grid to the same quiet list
          format as How We Work. The generic lucide icon set (which also
          duplicated icons used in Industries) is replaced with the
          brand's own logo mark at low opacity — a quiet, consistent
          signature instead of a fifth unrelated icon language.
      ================================================================ */}

      <section aria-labelledby="values-heading" className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Core Values
            </p>

            <h2
              id="values-heading"
              className="mt-5 text-4xl font-semibold tracking-[-0.025em] text-[#0A0E14] sm:text-5xl"
            >
              Principles that shape the work.
            </h2>
          </div>

          <div className="mt-14 divide-y divide-slate-200 border-y border-slate-200">
            {values.map((value) => (
              <div
                key={value.number}
                className="grid gap-4 py-7 sm:grid-cols-[72px_180px_1fr] sm:items-start"
              >
                <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-2">
                  <span className="font-mono text-[11px] font-semibold tracking-[0.16em] text-cyan-600">
                    {value.number}
                  </span>

                  <LogoMark size={16} className="text-cyan-400/40" />
                </div>

                <h3 className="text-base font-semibold text-[#0A0E14]">
                  {value.title}
                </h3>

                <p className="text-sm leading-6 text-slate-500">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          HOW WE WORK — moved down (after Values, per the "how we think
          then how we work" arc). Redundant headline/subhead pairing
          fixed — subhead now introduces the list instead of restating
          the headline.
      ================================================================ */}

      <section
        aria-labelledby="how-we-work-heading"
        className="border-b border-slate-200 bg-[#FAFAF9]"
      >
        <div className="mx-auto max-w-[1280px] px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                How We Work
              </p>

              <h2
                id="how-we-work-heading"
                className="mt-5 max-w-md text-4xl font-semibold leading-tight tracking-[-0.025em] text-[#0A0E14] sm:text-5xl"
              >
                Intelligence with judgment.
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-slate-500">
                What guides how we execute.
              </p>
            </div>

            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {howWeWork.map((item) => (
                <div
                  key={item.number}
                  className="grid gap-4 py-7 sm:grid-cols-[72px_180px_1fr] sm:items-start"
                >
                  <span className="font-mono text-[11px] font-semibold tracking-[0.16em] text-cyan-600">
                    {item.number}
                  </span>

                  <h3 className="text-base font-semibold text-[#0A0E14]">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          [DECISION PENDING] TEAM / LEADERSHIP
          Not built — no real content was provided and this should not
          be fabricated. This remains the single highest-leverage
          addition available if real team/founder material exists.
          Insert here, between How We Work and Industries, if approved.
      ================================================================ */}

      {/* ================================================================
          INDUSTRIES
          Unchanged structurally. Icon set no longer conflicts with
          Values (Values now uses the brand mark, not lucide icons),
          so Brain/Lightbulb are safe to keep here without duplication.
      ================================================================ */}

      <section
        aria-labelledby="industries-heading"
        className="border-t border-slate-200 bg-[#FAFAF9]"
      >
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Industries
              </p>

              <h2
                id="industries-heading"
                className="mt-4 text-3xl font-semibold tracking-[-0.025em] text-[#0A0E14] sm:text-4xl"
              >
                Built for B2B markets.
              </h2>
            </div>

            <Link
              href="/industries"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 transition-colors hover:text-cyan-500"
            >
              Explore all industries
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="mt-10 grid border-y border-slate-200 sm:grid-cols-2 lg:grid-cols-5">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <Link
                  key={industry.name}
                  href={industry.href}
                  className="group flex items-center gap-4 border-b border-slate-200 px-5 py-6 transition-colors hover:bg-white sm:border-r lg:border-b-0"
                >
                  <Icon
                    aria-hidden="true"
                    className="h-5 w-5 stroke-[1.5] text-slate-400 transition-colors group-hover:text-cyan-600"
                  />

                  <span className="text-sm font-semibold text-slate-700 transition-colors group-hover:text-[#0A0E14]">
                    {industry.name}
                  </span>

                  <ArrowRight
                    aria-hidden="true"
                    className="ml-auto h-4 w-4 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-cyan-600"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================
          ABOUT CTA
          Unchanged copy — "Start a Conversation" kept as a deliberate
          variant from Home's "Book Discovery Call." Confirm this is
          intentional (softer entry point for a Company-context page)
          before shipping, per the earlier audit note.
      ================================================================ */}

      <section
        aria-labelledby="about-cta-heading"
        className="relative overflow-hidden border-t border-[#1E2530] bg-[#0A0E14] text-white"
      >
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

        <div className="relative mx-auto max-w-[1280px] px-6 py-28 text-center sm:px-10 lg:px-16 lg:py-32">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Build Together
          </p>

          <h2
            id="about-cta-heading"
            className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl"
          >
            Let&apos;s build what{" "}
            <span className="text-cyan-400">growth looks like next.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            Whether you&apos;re looking for new customers, strategic
            partners, or a smarter way to build your market presence,
            let&apos;s start with the opportunity in front of you.
          </p>

          <div className="mt-10 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-amber-400 px-6 text-sm font-semibold text-[#0A0E14] transition-colors duration-200 hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-[#0A0E14]"
            >
              Start a Conversation
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}