"use client";

import {
  Brain,
  ShieldCheck,
  Users,
  TrendingUp,
  BarChart3,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Strategy",
    description:
      "We combine human expertise with AI-driven insights to create smarter B2B growth campaigns.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Business Data",
    description:
      "Every lead is carefully researched and verified to ensure higher quality and better conversion rates.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Focused",
    description:
      "Our strategies are designed to generate qualified opportunities that contribute to long-term revenue growth.",
  },
  {
    icon: Users,
    title: "Strategic Partnership",
    description:
      "We work as an extension of your sales team, helping you build lasting business relationships.",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    description:
      "Track campaign performance with clear reporting and actionable business insights.",
  },
  {
    icon: Clock,
    title: "Fast Response",
    description:
      "Our team responds quickly, adapts campaigns rapidly, and continuously optimizes performance.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            WHY SALESFLUANCE
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Why Businesses Choose Us
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We don't just generate leads—we build scalable B2B growth systems
            that help companies create predictable revenue.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-sky-300 hover:bg-white hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}