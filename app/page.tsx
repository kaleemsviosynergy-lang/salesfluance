"use client";

import type React from "react";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  CheckCircle,
  Code2,
  Database,
  Globe2,
  Handshake,
  MessageSquare,
  PhoneCall,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Target,
    title: "B2B Lead Generation",
    description: "Targeted outreach to qualified decision-makers in your ICP.",
  },
  {
    icon: Briefcase,
    title: "Account-Based Marketing",
    description: "Personalized campaigns for high-value accounts.",
  },
  {
    icon: MessageSquare,
    title: "Content Syndication",
    description: "Distribute content to engaged B2B audiences.",
  },
  {
    icon: Database,
    title: "Data Appending & Cleansing",
    description: "Enrich and validate your prospect data.",
  },
];

const industries = [
  { name: "SaaS & Cloud", icon: Zap },
  { name: "FinTech", icon: BarChart3 },
  { name: "Healthcare", icon: ShieldCheck },
  { name: "Professional Services", icon: Briefcase },
  { name: "Manufacturing", icon: Code2 },
  { name: "Technology", icon: Rocket },
];

const whyChoose = [
  {
    icon: Sparkles,
    title: "Human + AI Strategy",
    description: "Expert strategists combined with advanced AI tools.",
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Data-driven segmentation reaching the right buyers.",
  },
  {
    icon: TrendingUp,
    title: "Measurable Results",
    description: "Transparent reporting and continuous optimization.",
  },
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    description: "Building relationships that multiply your reach.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "Define your ICP and growth objectives.",
  },
  {
    number: "02",
    title: "Campaign Design",
    description: "Build targeted outreach sequences.",
  },
  {
    number: "03",
    title: "Execution",
    description: "Launch with real-time optimization.",
  },
  {
    number: "04",
    title: "Optimization",
    description: "Scale what works, refine what doesn't.",
  },
];

export default function Home(): React.ReactElement {
  return (
    <main className="bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-sky-900 px-6 py-24 lg:px-12 lg:py-40">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_60%)]" />
        <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-gradient-to-br from-sky-500/20 via-sky-400/10 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-gradient-to-tr from-indigo-500/15 to-transparent blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-500/40 bg-slate-900/70 px-4 py-2 text-sm text-sky-200 shadow-lg shadow-slate-950/20 backdrop-blur">
              <Sparkles className="h-4 w-4 text-sky-300" />
              <span>Enterprise B2B demand generation platform</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Accelerate B2B Revenue Growth
              </h1>
              <p className="text-xl leading-9 text-slate-200 sm:text-2xl">
                SalesFluance combines strategy, data, and AI-powered execution to generate qualified pipeline and build strategic partnerships for ambitious B2B companies.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-8 py-4 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
              >
                Book a Discovery Call
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-white/5 px-8 py-4 text-sm font-semibold text-slate-100 transition hover:border-slate-400"
              >
                Learn more
              </Link>
            </div>

            <div className="grid gap-6 pt-8 sm:grid-cols-3 text-sm">
              {[
                { label: "Qualified Leads", value: "3200+" },
                { label: "MQL→SQL Conversion", value: "40%" },
                { label: "Strategic Partners", value: "120+" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-2">
                  <p className="text-slate-400">{stat.label}</p>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why SalesFluance */}
      <section className="bg-slate-950 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-sky-300/90">Why SalesFluance</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Built for B2B revenue leaders who demand excellence
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-8 text-slate-300">
              We combine strategic thinking, advanced technology, and proven execution to deliver measurable growth.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {whyChoose.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/30 transition hover:-translate-y-2 hover:border-cyan-400/30"
                >
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 to-sky-500 text-slate-950 shadow-lg shadow-cyan-500/20">
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

      {/* Core Services */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-sky-300/90">Our Services</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              End-to-end B2B demand generation
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-8 text-slate-300">
              From lead generation to strategic partnerships, we deliver integrated solutions.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/30 transition hover:-translate-y-2 hover:border-cyan-400/30"
                >
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 to-sky-500 text-slate-950 shadow-lg shadow-cyan-500/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-slate-400 text-sm leading-6">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-white/5 px-8 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-400"
            >
              Explore all services
              <ArrowRight className="ml-3 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Growth Process Preview */}
      <section className="bg-slate-950 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-sky-300/90">Our Proven Approach</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              A framework built for predictable growth
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.number} className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/30 transition hover:-translate-y-1">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-500 text-slate-950 font-semibold shadow-lg shadow-cyan-500/15">
                  {step.number}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-slate-400 text-sm leading-6">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/process"
              className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-white/5 px-8 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-400"
            >
              View the full process
              <ArrowRight className="ml-3 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.28em] text-sky-300/90">About SalesFluance</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Enterprise growth for ambitious B2B companies
              </h2>
              <p className="text-base leading-8 text-slate-300">
                Founded on the belief that B2B marketing deserves the same rigor as product and sales strategy. We help companies turn market intent into repeatable pipeline through enterprise-grade demand generation and client-first partnership.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-400"
                >
                  Learn our story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40">
              <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 p-8">
                <p className="text-sm uppercase tracking-[0.28em] text-sky-300/90">Our Mission</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">Predictable, strategic growth</h3>
                <p className="mt-4 text-slate-300 leading-7">
                  Empower revenue teams with custom demand generation systems that attract and convert the right business outcomes with confidence.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Client Retention", value: "92%" },
                  { label: "Avg Conversion Lift", value: "40%" },
                  { label: "Avg Deal Acceleration", value: "35%" },
                  { label: "Campaign Success Rate", value: "4x" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{stat.label}</p>
                    <p className="mt-3 text-2xl font-semibold text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-slate-950 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-sky-300/90">Industries We Serve</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Expertise across complex B2B markets
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <div key={industry.name} className="group rounded-3xl border border-white/10 bg-slate-900/80 p-8 transition hover:-translate-y-1 hover:border-cyan-400/30">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-500 text-slate-950 shadow-lg shadow-cyan-500/15">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-white">{industry.name}</h3>
                  <p className="mt-3 text-slate-400 text-sm leading-6">
                    Tailored strategies for your market dynamics and buying cycles.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Clients Work With Us */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-sky-300/90">Client Experience</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Why leading B2B teams choose SalesFluance
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icon: CheckCircle,
                title: "Transparent Communication",
                description:
                  "Clear reporting, regular reviews, and honest conversations about what's working and what needs improvement.",
              },
              {
                icon: Target,
                title: "Precision Execution",
                description:
                  "Every campaign is data-driven and tailored to your ICP, buying committees, and sales cycle.",
              },
              {
                icon: Sparkles,
                title: "Strategic Partnership",
                description:
                  "We act as an extension of your revenue team, invested in your long-term growth and success.",
              },
              {
                icon: TrendingUp,
                title: "Measurable Impact",
                description:
                  "Pipeline velocity, conversion rates, and cost per opportunity — metrics that matter to revenue leaders.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/30 transition hover:-translate-y-2 hover:border-cyan-400/30"
                >
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 to-sky-500 text-slate-950 shadow-lg shadow-cyan-500/20">
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

      {/* Final CTA */}
      <section id="contact" className="bg-slate-950 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-950/95 p-10 shadow-2xl shadow-slate-950/40">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.28em] text-sky-300/90">Next Step</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Ready to accelerate your B2B revenue?
              </h2>
              <p className="max-w-2xl text-base leading-8 text-slate-300">
                Book a 30-minute discovery call and explore how SalesFluance can build a custom growth program for your team.
              </p>
            </div>
            <div className="space-y-4 rounded-[1.75rem] border border-white/10 bg-slate-950/90 p-8 shadow-inner shadow-slate-950/20">
              <div className="flex items-center gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-500 text-slate-950">
                  <PhoneCall className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-sky-300/90">Discovery Call</p>
                  <p className="text-lg font-semibold text-white">30 minutes</p>
                </div>
              </div>
              <ul className="space-y-3 text-slate-400">
                {[
                  "Audit your growth strategy",
                  "Identify opportunities",
                  "Map your roadmap",
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