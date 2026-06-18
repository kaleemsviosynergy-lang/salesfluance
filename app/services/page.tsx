import type { Metadata } from "next";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  CheckCircle,
  Code2,
  Database,
  Handshake,
  MessageSquare,
  Network,
  PhoneCall,
  Rocket,
  Sparkles,
  Target,
  Zap,
  Globe2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services | SalesFluance - B2B Growth Solutions",
  description:
    "Comprehensive B2B demand generation, lead generation, and account-based marketing services. AI-powered outreach, data enrichment, and strategic partnerships.",
};

const services = [
  {
    title: "B2B Lead Generation",
    description:
      "Targeted outreach campaigns that connect you with qualified decision-makers in your ideal customer profile.",
    icon: Target,
  },
  {
    title: "Account-Based Marketing",
    description:
      "Personalized, multi-channel campaigns designed for high-value accounts with coordinated messaging.",
    icon: Briefcase,
  },
  {
    title: "Content Syndication",
    description:
      "Distribute thought leadership and gated content to engaged B2B audiences across premium networks.",
    icon: MessageSquare,
  },
  {
    title: "Data Appending & Cleansing",
    description:
      "Enrich your existing data with verified contact information and append firmographic insights.",
    icon: Database,
  },
  {
    title: "AI-Powered Outreach",
    description:
      "Intelligent sequencing and personalization at scale using advanced AI for higher engagement rates.",
    icon: Zap,
  },
  {
    title: "Partner Acquisition",
    description:
      "Build strategic partnerships and channel relationships that extend your market reach and revenue.",
    icon: Handshake,
  },
  {
    title: "Business Development Support",
    description:
      "Expert-led guidance on GTM strategy, sales enablement, and revenue acceleration programs.",
    icon: Rocket,
  },
  {
    title: "Strategic Networking",
    description:
      "Curated introductions and relationship building with key prospects and industry influencers.",
    icon: Network,
  },
];

const whyChooseCards = [
  {
    title: "Human + AI Strategy",
    description:
      "Our team of growth strategists combines human expertise with advanced AI tools to create campaigns that feel personal yet scale globally.",
    icon: Sparkles,
  },
  {
    title: "Targeted Prospecting",
    description:
      "Precision data segmentation and intent-based research ensure every outreach reaches the right decision-maker at the right time.",
    icon: BarChart3,
  },
  {
    title: "Enterprise Demand Generation",
    description:
      "Build predictable pipeline through integrated email, social, and direct outreach sequences tailored to your sales cycle.",
    icon: Code2,
  },
  {
    title: "Partnership Development",
    description:
      "Strategic relationships with channel partners, affiliates, and co-marketing collaborators that multiply your reach.",
    icon: Network,
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-sky-900 px-6 py-20 lg:px-12 lg:py-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_55%)]" />
        <div className="pointer-events-none absolute right-0 top-16 h-96 w-96 rounded-full bg-gradient-to-br from-sky-500/20 via-sky-400/10 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-gradient-to-tr from-indigo-500/10 to-transparent blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-500/40 bg-slate-900/70 px-4 py-2 text-sm text-sky-200 shadow-lg shadow-slate-950/20 backdrop-blur">
              <Sparkles className="h-4 w-4 text-sky-300" />
              <span>Comprehensive B2B growth solutions</span>
            </div>

            <div className="space-y-6">
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Revenue Growth Solutions for Modern B2B Companies
              </h1>
              <p className="max-w-2xl text-xl leading-9 text-slate-200 sm:text-2xl">
                From lead generation to strategic partnerships, we deliver integrated demand generation services that accelerate pipeline velocity and drive measurable business outcomes.
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
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-400"
              >
                Explore services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="bg-slate-950 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-sky-300/90">Our Services</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              End-to-end B2B demand generation and growth services
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-8 text-slate-300">
              Integrated solutions designed to fuel your sales pipeline and accelerate revenue growth across the entire customer journey.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/30 transition hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-slate-900/95"
                >
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 to-sky-500 text-slate-950 shadow-lg shadow-cyan-500/20 transition group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-4 text-slate-400 leading-7">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-sky-300/90">Why Choose SalesFluance</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              What sets us apart in the B2B growth space
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-8 text-slate-300">
              We combine strategic thinking, advanced technology, and proven execution to deliver sustainable, measurable growth for your business.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {whyChooseCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="group rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-[0_20px_80px_-40px_rgba(14,165,233,0.5)] transition hover:-translate-y-2 hover:border-cyan-400/30"
                >
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 to-sky-500 text-slate-950 shadow-lg shadow-cyan-500/20 transition group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{card.title}</h3>
                  <p className="mt-4 text-slate-400 leading-7">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="bg-slate-950 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-8">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-sky-300/90">Service Benefits</p>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                  Measurable growth from day one
                </h2>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "Accelerated Pipeline Growth",
                    description:
                      "Build a predictable, repeatable demand engine that feeds your sales team with qualified opportunities.",
                  },
                  {
                    title: "Higher Conversion Rates",
                    description:
                      "Personalized outreach and intelligent targeting improve MQL-to-SQL conversion and deal velocity.",
                  },
                  {
                    title: "Enterprise-Grade Compliance",
                    description:
                      "GDPR-ready, verified data, and auditable processes ensure every campaign meets regulatory standards.",
                  },
                  {
                    title: "Strategic Partnership Alignment",
                    description:
                      "Co-marketing and channel development initiatives that multiply your market reach and revenue potential.",
                  },
                ].map((benefit) => (
                  <div key={benefit.title} className="flex gap-4">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 text-cyan-400" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">{benefit.title}</h4>
                      <p className="mt-2 text-slate-400">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40">
              <div className="space-y-6">
                <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 p-8">
                  <p className="text-sm uppercase tracking-[0.28em] text-sky-300/90">Integrated Approach</p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">
                    Strategy meets execution
                  </h3>
                  <p className="mt-4 text-slate-300 leading-7">
                    Our team works as an extension of your revenue organization, combining strategic planning with tactical execution to build sustainable B2B growth.
                  </p>
                </div>

                <div className="grid gap-4">
                  {[
                    { label: "Average MQL → SQL Conversion", value: "40%" },
                    { label: "Campaign Launch Speed", value: "2 weeks" },
                    { label: "Client satisfaction rating", value: "9.2/10" },
                    { label: "Average deal acceleration", value: "35%" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                        {stat.label}
                      </p>
                      <p className="mt-3 text-2xl font-semibold text-white">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-sky-300/90">Our Process</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              How we deliver results
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-8 text-slate-300">
              A proven, repeatable methodology built on years of B2B growth experience and continuous optimization.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                description:
                  "Deep dive into your ICP, market positioning, and revenue goals to build a customized growth plan.",
              },
              {
                step: "02",
                title: "Campaign Design",
                description:
                  "Develop targeted outreach sequences, messaging frameworks, and multi-channel orchestration.",
              },
              {
                step: "03",
                title: "Execution & Optimization",
                description:
                  "Launch campaigns with real-time monitoring, A/B testing, and daily optimization for maximum results.",
              },
              {
                step: "04",
                title: "Reporting & Scaling",
                description:
                  "Transparent analytics, ROI tracking, and strategic recommendations for scaling winning programs.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/30 transition hover:-translate-y-2"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-500 text-slate-950 font-semibold shadow-lg shadow-cyan-500/15">
                  {item.step}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-slate-400 leading-7">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section id="industries" className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-sky-300/90">Industries We Serve</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Specialized expertise across complex B2B markets
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-8 text-slate-300">
              From SaaS to enterprise services, we bring deep market knowledge and proven demand generation strategies tailored to your industry.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              { name: "SaaS & Cloud Platforms", icon: Rocket },
              { name: "FinTech & Financial Services", icon: BarChart3 },
              { name: "Healthcare & Life Sciences", icon: Briefcase },
              { name: "Professional Services", icon: Target },
              { name: "Manufacturing & Industrial", icon: Code2 },
              { name: "Technology & AI", icon: Zap },
            ].map((industry) => {
              const Icon = industry.icon;
              return (
                <div
                  key={industry.name}
                  className="group rounded-3xl border border-white/10 bg-slate-900/80 p-8 transition hover:-translate-y-1 hover:border-cyan-400/30"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-500 text-slate-950 shadow-lg shadow-cyan-500/15">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{industry.name}</h3>
                  <p className="mt-3 text-slate-400 leading-7">
                    Tailored demand generation strategy for your unique market dynamics and buying cycles.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-slate-950 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-950/95 p-10 shadow-2xl shadow-slate-950/40">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.28em] text-sky-300/90">Get Started</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Ready to Accelerate Revenue Growth?
              </h2>
              <p className="max-w-2xl text-base leading-8 text-slate-300">
                Book a 30-minute discovery call to explore how SalesFluance can build a custom demand generation program tailored to your market, team, and revenue goals.
              </p>
            </div>
            <div className="space-y-4 rounded-[1.75rem] border border-white/10 bg-slate-950/90 p-8 text-slate-300 shadow-inner shadow-slate-950/20">
              <div className="flex items-center gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-500 text-slate-950">
                  <PhoneCall className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-sky-300/90">
                    Discovery Call
                  </p>
                  <p className="text-lg font-semibold text-white">30-minute strategy session</p>
                </div>
              </div>
              <ul className="space-y-3 text-slate-400">
                {[
                  "Audit your current lead generation strategy",
                  "Identify pipeline acceleration opportunities",
                  "Review custom service recommendations",
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