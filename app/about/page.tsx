import type { Metadata } from "next";
import FadeIn from "@/app/components/FadeIn";
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle,
  Globe2,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "about SalesFluance | B2B Growth Agency",
  description:
    "SalesFluance is a growth partner for enterprise B2B companies seeking demand generation, pipeline acceleration, and client-first strategy.",
};

const whyCards = [
  {
    title: "Data-Driven Targeting",
    description:
      "Precision segmentation and intent signals drive outreach to the right decision-makers at the right time.",
    icon: Target,
  },
  {
    title: "Revenue Acceleration",
    description:
      "Create predictable pipeline velocity with campaigns built for growth, retention, and qualified conversions.",
    icon: Sparkles,
  },
  {
    title: "Enterprise Compliance",
    description:
      "Secure, GDPR-ready outreach with robust verification, governance, and quality controls.",
    icon: ShieldCheck,
  },
  {
    title: "B2B Relationship Focus",
    description:
      "Partner-first engagement that combines business development, account intelligence, and revenue leadership expertise.",
    icon: Users,
  },
  {
    title: "Channel Orchestration",
    description:
      "Integrated email, social, and direct-contact sequences that increase engagement across decision funnels.",
    icon: Briefcase,
  },
];

const industries = [
  "SaaS & Cloud Platforms",
  "FinTech & Financial Services",
  "Healthcare & Life Sciences",
  "Professional Services",
  "Manufacturing & Industrial",
  "Technology & AI",
];

export default function about() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-sky-900 px-6 py-20 lg:px-12 lg:py-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_55%)]" />
        <div className="pointer-events-none absolute right-0 top-16 h-96 w-96 rounded-full bg-gradient-to-br from-sky-500/20 via-sky-400/10 to-transparent blur-3xl" />
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="max-w-2xl space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-500/40 bg-slate-900/70 px-4 py-2 text-sm text-sky-200 shadow-lg shadow-slate-950/20 backdrop-blur">
                <Sparkles className="h-4 w-4 text-sky-300" />
                <span>Premium B2B growth advisory for enterprise teams</span>
              </div>

              <div className="space-y-6">
                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  about SalesFluance
                </h1>
                <p className="max-w-2xl text-xl leading-9 text-slate-200 sm:text-2xl">
                  Connecting Opportunities. Accelerating Growth.
                </p>
              </div>

              <div className="space-y-6 text-slate-300">
                <p className="max-w-2xl text-base leading-8">
                  We help ambition-driven companies turn market intent into repeatable pipeline through enterprise-grade demand generation, targeted account acceleration, and high-touch client relationship management.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
                  >
                    Book a Discovery Call
                    <ArrowRight className="ml-3 h-4 w-4" />
                  </a>
                  <a
                    href="#story"
                    className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-400"
                  >
                    Explore our story
                  </a>
                </div>
              </div>
            </div>

            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-2xl shadow-slate-950/40 backdrop-blur-xl sm:p-10">
              <div className="absolute -right-16 -top-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="space-y-6">
                <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-inner shadow-slate-950/20">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/90">Built for B2B</p>
                      <h2 className="mt-3 text-2xl font-semibold text-white">Strategic Growth from Day One</h2>
                    </div>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400 to-sky-500 text-slate-950 shadow-lg shadow-cyan-500/15">
                      <Award className="h-6 w-6" />
                    </div>
                  </div>
                  <p className="mt-6 text-slate-300 leading-7">
                    Our team combines business development discipline, analytics, and sales operations experience to create demand programs that scale across enterprise buying committees.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { label: "Top-tier pipeline accuracy", value: "73%" },
                    { label: "Client retention focus", value: "92%" },
                    { label: "Annual campaign velocity", value: "4x" },
                    { label: "Average deal acceleration", value: "35%" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{stat.label}</p>
                      <p className="mt-3 text-3xl font-semibold text-white">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="bg-slate-950 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_0.9fr] lg:items-start">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.32em] text-sky-300/90">Company Story</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">A modern agency built for B2B leadership teams.</h2>
              <p className="max-w-2xl text-base leading-8 text-slate-300">
                SalesFluance launched to serve companies that need more than volume. We are the trusted extension of marketing and sales teams, delivering qualified opportunities through intelligent targeting, high-quality data, and deeply collaborative execution.
              </p>
            </div>

            <div className="space-y-6 rounded-[2rem] border border-slate-800/80 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40">
              <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 p-8">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Our story</p>
                <h3 className="mt-5 text-2xl font-semibold text-white">From concept to consistent revenue growth.</h3>
                <p className="mt-4 text-slate-300 leading-7">
                  We started with a simple insight: B2B marketing deserves the same rigor as product and sales strategy. That focus has made us a top choice for companies scaling complex go-to-market operations.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Expert-led teams",
                    description: "Operators who have shipped enterprise campaigns for SaaS, FinTech, and services brands.",
                  },
                  {
                    title: "Client partnership",
                    description: "We act as an embedded revenue partner, not a one-off vendor.",
                  },
                  {
                    title: "Transparent reporting",
                    description: "Clear metrics, clean insights, and regular optimization reviews.",
                  },
                  {
                    title: "Built to scale",
                    description: "Programs that adapt to evolving ICPs and buying committees.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
                    <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                    <p className="mt-3 text-slate-400 leading-7">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-sky-300/90">Our purpose</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Mission & vision with measurable business impact</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300">
              SalesFluance is committed to helping ambitious B2B businesses scale responsibly while preserving revenue predictability and buyer trust.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_20px_80px_-40px_rgba(14,165,233,0.7)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-500 text-slate-950">
                <Globe2 className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">Mission</h3>
              <p className="mt-4 text-slate-300 leading-7">
                Empower revenue teams with custom demand generation systems, so they can attract and convert the right business outcomes with confidence.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_20px_80px_-40px_rgba(59,130,246,0.55)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">Vision</h3>
              <p className="mt-4 text-slate-300 leading-7">
                Become the strategic demand engine for B2B leaders who need consistency, speed, and trusted execution across every stage of the sales funnel.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-sky-300/90">Why SalesFluance</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Why leading B2B brands choose our growth engine</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300">
              Our approach blends strategy, analytics, and best-in-class campaign execution so every program is measurable, accountable, and aligned to revenue goals.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {whyCards.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="group rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/30 transition hover:-translate-y-1 hover:bg-slate-900/95">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 to-sky-500 text-slate-950 shadow-lg shadow-cyan-500/20 transition group-hover:scale-105">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-slate-400 leading-7">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.28em] text-sky-300/90">Founder</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Kalim Shaikh</h2>
              <p className="max-w-2xl text-base leading-8 text-slate-300">
                Founder and growth strategist with 9+ years driving business development, B2B growth and client relationship management for ambitious organizations.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "9+ years business development",
                  "B2B growth acceleration",
                  "Client relationship leadership",
                  "Sales and demand alignment",
                ].map((item) => (
                  <div key={item} className="rounded-3xl border border-white/10 bg-slate-950/80 px-6 py-5">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-800/80 bg-gradient-to-br from-slate-950 to-slate-900 p-8 shadow-2xl shadow-slate-950/40">
              <div className="flex items-center gap-5 rounded-3xl border border-white/10 bg-slate-950/60 p-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 to-sky-500 text-slate-950 shadow-lg shadow-cyan-500/20">
                  <Users className="h-10 w-10" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-sky-300/90">Leadership</p>
                  <p className="mt-2 text-2xl font-semibold text-white">A founder who aligns strategy with execution</p>
                </div>
              </div>

              <div className="mt-10 space-y-6 text-slate-300">
                <p className="text-base leading-8">
                  Kalim brings practical growth experience spanning advanced outreach, account-based programs, and client coaching for teams focused on measurable outcomes.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { label: "Targeted outreach", detail: "Driving engagement with key decision-makers." },
                    { label: "Pipeline quality", detail: "Emphasis on conversion-ready opportunities." },
                    { label: "Client alignment", detail: "Partnerships built on transparency and strategy." },
                    { label: "Revenue enablement", detail: "Programs designed for predictable growth." },
                  ].map((item) => (
                    <div key={item.label} className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
                      <p className="text-sm font-semibold text-white">{item.label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="industries" className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-sky-300/90">Industries We Serve</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Focused support for complex B2B markets</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300">
              We work with teams whose success depends on deep audience understanding, high-value sales cycles, and reliable pipeline outcomes.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry) => (
              <div key={industry} className="group rounded-3xl border border-white/10 bg-slate-900/80 p-8 transition hover:-translate-y-1 hover:border-cyan-400/30">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-500 text-slate-950 shadow-lg shadow-cyan-500/15">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{industry}</h3>
                <p className="mt-3 text-slate-400 leading-7">
                  Tailored campaign frameworks for your market, buying group, and opportunity lifecycle.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-950 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-950/95 p-10 shadow-2xl shadow-slate-950/40">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.28em] text-sky-300/90">Ready to scale?</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Book a discovery call and unlock your next revenue chapter.</h2>
              <p className="max-w-2xl text-base leading-8 text-slate-300">
                Our discovery sessions identify gap areas, refine your ICP, and map the fastest path to sustainable pipeline growth.
              </p>
            </div>
            <div className="space-y-4 rounded-[1.75rem] border border-white/10 bg-slate-950/90 p-8 text-slate-300 shadow-inner shadow-slate-950/20">
              <div className="flex items-center gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-500 text-slate-950">
                  <PhoneCall className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-sky-300/90">Discovery call</p>
                  <p className="text-lg font-semibold text-white">30-minute strategy session</p>
                </div>
              </div>
              <ul className="space-y-3 text-slate-400">
                {[
                  "Review your B2B growth priorities",
                  "Uncover pipeline optimization opportunities",
                  "Align outreach with target accounts",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="mailto:hello@salesfluance.com"
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
              >
                Book a Discovery Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
