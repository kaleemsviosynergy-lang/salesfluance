"use client";

import {
  Building2,
  Globe,
  Handshake,
  Lightbulb,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "We believe in honesty, transparency and long-term business relationships.",
  },
  {
    icon: Target,
    title: "Results Driven",
    description: "Everything we do is focused on measurable business growth.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Human expertise combined with AI-powered execution.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "We work as an extension of your sales and marketing team.",
  },
];

const industries = [
  "SaaS",
  "Technology",
  "Healthcare",
  "FinTech",
  "Manufacturing",
  "Professional Services",
];

export default function AboutPage() {
  return (
    <main className="bg-white">

      {/* Hero */}

      <section className="bg-gradient-to-br from-[#F8FBFF] via-[#EEF6FF] to-[#E0F2FE] py-24">

        <div className="mx-auto max-w-7xl px-6">

          <span className="rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold text-sky-700">
            About SalesFluance
          </span>

          <h1 className="mt-8 max-w-4xl text-6xl font-bold leading-tight text-slate-900">
            We Build Revenue Relationships, Not Just Lead Lists.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
            SalesFluance helps ambitious B2B businesses accelerate revenue
            through strategic partnerships, intelligent lead generation,
            AI-powered outreach and high-quality business development.
          </p>

        </div>

      </section>

      {/* Our Story */}

      <section className="py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div>

            <h2 className="text-4xl font-bold text-slate-900">
              Our Story
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-600">
              SalesFluance was founded with a simple vision —
              helping businesses generate sustainable growth through
              meaningful business relationships.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Instead of simply providing leads, we create complete
              demand-generation strategies that combine people,
              technology and AI to build predictable revenue.
            </p>

          </div>

          <div className="rounded-3xl bg-gradient-to-br from-[#0A1F3F] to-[#234E82] p-12 text-white shadow-xl">

            <TrendingUp className="h-16 w-16 text-cyan-300" />

            <h3 className="mt-8 text-3xl font-bold">
              Our Mission
            </h3>

            <p className="mt-6 leading-8 text-slate-200">
              Empower B2B businesses to scale faster through
              smarter partnerships, better data and AI-powered
              business development.
            </p>

          </div>

        </div>

      </section>

      {/* Values */}

      <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16 text-center">

            <h2 className="text-5xl font-bold text-slate-900">
              Our Core Values
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              Everything we do is built around trust,
              innovation and measurable growth.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {values.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2"
                >

                  <Icon className="h-12 w-12 text-sky-600" />

                  <h3 className="mt-6 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {item.description}
                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </section>

      {/* Industries */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <h2 className="text-5xl font-bold text-slate-900">
              Industries We Serve
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              Helping companies across multiple industries grow faster.
            </p>

          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3 lg:grid-cols-6">

            {industries.map((industry) => (

              <div
                key={industry}
                className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
              >

                <Building2 className="mx-auto h-10 w-10 text-sky-600" />

                <h3 className="mt-5 font-semibold text-slate-900">
                  {industry}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Stats */}

      <section className="bg-gradient-to-r from-[#0A1F3F] to-[#234E82] py-24 text-white">

        <div className="mx-auto grid max-w-7xl gap-10 px-6 text-center md:grid-cols-4">

          <div>
            <h2 className="text-5xl font-bold">3200+</h2>
            <p className="mt-4">Qualified Leads</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">120+</h2>
            <p className="mt-4">Business Partners</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">40%</h2>
            <p className="mt-4">MQL → SQL</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">95%</h2>
            <p className="mt-4">Client Satisfaction</p>
          </div>

        </div>

      </section>

    </main>
  );
}