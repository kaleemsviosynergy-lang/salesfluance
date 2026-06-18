import type { Metadata } from "next";
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  CheckCircle,
  Compass,
  Database,
  Globe2,
  Handshake,
  Search,
  Send,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Process | SalesFluance - Growth Framework",
  description:
    "Explore SalesFluance's proven growth process for generating qualified opportunities, building partnerships, and accelerating revenue.",
};

const timelineSteps = [
  {
    step: "01",
    title: "Discovery & Goal Alignment",
    description:
      "Align on business objectives, target markets, and growth metrics before every campaign begins.",
    icon: Compass,
  },
  {
    step: "02",
    title: "Market Research & ICP Definition",
    description:
      "Define ideal customer profiles, buying committees, and priority accounts with market intelligence.",
    icon: Search,
  },
  {
    step: "03",
    title: "Data Collection & Verification",
    description:
      "Build and validate clean prospect data that supports compliant, scalable outreach.",
    icon: Database,
  },
  {
    step: "04",
    title: "Multi-Channel Outreach",
    description:
      "Launch coordinated email, social, and direct outreach sequences tailored to buyer intent.",
    icon: Send,
  },
  {
    step: "05",
    title: "Lead Qualification",
    description:
      "Assess inbound responses with robust qualification criteria to isolate revenue-ready leads.",
    icon: CheckCircle,
  },
  {
    step: "06",
    title: "Meeting Scheduling",
    description:
      "Secure quality conversations with decision-makers through proactive booking support.",
    icon: CalendarDays,
  },
  {
    step: "07",
    title: "Partnership Development",
    description:
      "Create strategic partner relationships and channel pathways that expand market access.",
    icon: Handshake,
  },
  {
    step: "08",
    title: "Growth Optimization & Reporting",
    description:
      "Continuously refine campaigns with transparent reporting, performance reviews, and scaling plans.",
    icon: TrendingUp,
  },
];

const whyCards = [
  {
    title: "Data-Driven Decisions",
    description:
      "Every stage is informed by data, so your growth program is rooted in evidence rather than guesswork.",
    icon: BarChart3,
  },
  {
    title: "Human + AI Execution",
    description:
      "We combine human strategy with AI-powered automation for better personalization at scale.",
    icon: Sparkles,
  },
  {
    title: "Quality Over Quantity",
    description:
      "Focus on genuine opportunities and high-intent engagement instead of broad spray-and-pray outreach.",
    icon: Target,
  },
  {
    title: "Continuous Optimization",
    description:
      "Ongoing testing and measurement keep your campaigns adaptive and revenue-focused.",
    icon: Globe2,
  },
];

const kpis = [
  {
    label: "Qualified Opportunities",
    value: "3200+",
  },
  {
    label: "Better Conversion Rates",
    value: "40%",
  },
  {
    label: "Faster Sales Cycles",
    value: "25%",
  },
  {
    label: "Strategic Partnerships",
    value: "120+",
  },
];

export default function ProcessPage() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-sky-900 px-6 py-20 lg:px-12 lg:py-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.24),_transparent_55%)]" />
        <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-400/20 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute left-0 bottom-0 h-80 w-80 rounded-full bg-gradient-to-br from-indigo-500/10 to-transparent blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-500/40 bg-slate-900/70 px-4 py-2 text-sm text-sky-200 shadow-lg shadow-slate-950/20 backdrop-blur">
              <Sparkles className="h-4 w-4 text-sky-300" />
              <span>Proven revenue growth framework</span>
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Our Growth Process
              </h1>
              <p className="text-xl leading-9 text-slate-200 sm:text-2xl">
                A proven framework for generating qualified opportunities, building strategic partnerships, and accelerating revenue growth.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
              >
                Book a Discovery Call
                <ArrowRight className="ml-3 h-4 w-4" />
              </a>
              <a
                href="#timeline"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-400"
              >
                View the roadmap
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="timeline" className="relative px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-sky-300/90">Roadmap</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              A visual roadmap to predictable growth
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-400">
              Eight distinct steps that guide campaigns from initial strategy through performance optimization.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-8 h-[calc(100%-2rem)] w-px bg-slate-800" />

            <div className="grid gap-10 lg:grid-cols-2">
              {timelineSteps.map((item, index) => {
                const Icon = item.icon;
                const isLeft = index % 2 === 0;
                return (
                  <div
                    key={item.step}
                    className={
                      "relative rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40 transition hover:-translate-y-1 " +
                      (isLeft ? "lg:mr-auto lg:w-[calc(50%-1rem)]" : "lg:ml-auto lg:w-[calc(50%-1rem)]")
                    }
                  >
                    <div className="absolute right-[-1.75rem] top-10 hidden h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-sky-500 text-slate-950 shadow-xl shadow-cyan-500/20 lg:flex">
                      <span className="text-sm font-semibold">{item.step}</span>
                    </div>
                    <div className="absolute left-[-1.75rem] top-10 hidden h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-sky-500 text-slate-950 shadow-xl shadow-cyan-500/20 lg:flex">
                      <span className="text-sm font-semibold">{item.step}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 to-sky-500 text-slate-950 shadow-lg shadow-cyan-500/20">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Step {item.step}</p>
                        <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
                      </div>
                    </div>
                    <p className="mt-5 text-slate-400 leading-7">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.28em] text-sky-300/90">Why Our Process Works</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Built for measurable, scalable B2B growth
              </h2>
              <p className="max-w-2xl text-base leading-8 text-slate-300">
                Our process is designed to balance strategy, execution, and optimization so every campaign improves over time.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {whyCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
  key={card.title}
  className="group rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/30 transition hover:-translate-y-1 hover:border-cyan-400/30">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 to-sky-500 text-slate-950 shadow-lg shadow-cyan-500/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-white">{card.title}</h3>
                    <p className="mt-4 text-slate-400 leading-7">{card.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-sky-300/90">KPI Snapshot</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Outcomes that matter to B2B revenue leaders
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/30 transition hover:-translate-y-1">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{kpi.label}</p>
                <p className="mt-4 text-4xl font-semibold text-white">{kpi.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-950 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-950/95 p-10 shadow-2xl shadow-slate-950/40">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.28em] text-sky-300/90">Ready to scale?</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Ready to Build a Predictable Growth Engine?
              </h2>
              <p className="max-w-2xl text-base leading-8 text-slate-300">
                Book a discovery call and learn how SalesFluance turns your demand strategy into a repeatable, enterprise-grade growth machine.
              </p>
            </div>
            <div className="space-y-4 rounded-[1.75rem] border border-white/10 bg-slate-950/90 p-8 text-slate-300 shadow-inner shadow-slate-950/20">
              <div className="flex items-center gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-500 text-slate-950">
                  <CalendarDays className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-sky-300/90">Discovery Call</p>
                  <p className="text-lg font-semibold text-white">30-minute strategy session</p>
                </div>
              </div>
              <ul className="space-y-3 text-slate-400">
                {[
                  "Review your growth priorities",
                  "Map the next pipeline accelerator",
                  "Align strategy with execution",
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
