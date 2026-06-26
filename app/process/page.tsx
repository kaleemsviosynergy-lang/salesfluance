"use client";

import {
  ClipboardList,
  Search,
  CheckCircle2,
  Mail,
  Rocket,
  ShieldCheck,
  BadgeCheck,
  Users,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Requirement Collection",
    description:
      "We understand your ICP, target industries, regions, and campaign goals.",
  },
  {
    icon: Search,
    title: "Lead Research",
    description:
      "Our team researches companies and discovers the right decision-makers.",
  },
  {
    icon: CheckCircle2,
    title: "Data Verification",
    description:
      "Every lead is verified through multiple quality checks before outreach.",
  },
  {
    icon: Mail,
    title: "Campaign Creation",
    description:
      "We build personalized email sequences and outreach strategies.",
  },
  {
    icon: Rocket,
    title: "Campaign Launch",
    description:
      "Multi-channel campaigns are launched with continuous monitoring.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Every interaction is reviewed to maintain high-quality standards.",
  },
  {
    icon: BadgeCheck,
    title: "Qualified Leads",
    description:
      "Only validated sales-ready leads are delivered to your sales team.",
  },
  {
    icon: Users,
    title: "Optimization",
    description:
      "We analyze campaign performance and continuously improve results.",
  },
];

export default function Process() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            Our Process
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Our Proven Lead Generation Process
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            A transparent, quality-focused workflow designed to generate
            qualified leads, improve conversion rates, and build predictable
            B2B revenue.
          </p>
        </div>

        {/* Timeline */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-sky-200 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white">
                  <Icon className="h-8 w-8" />
                </div>

                <div className="mb-3 text-sm font-bold text-sky-600">
                  STEP {index + 1}
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-[#0A1F3F] to-[#234E82] p-12 text-center text-white shadow-xl">
          <h3 className="text-3xl font-bold">
            Quality is Built Into Every Step
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-200">
            Every lead passes multiple verification stages before delivery,
            ensuring your sales team receives only high-quality,
            sales-ready prospects.
          </p>
        </div>
      </div>
    </section>
  );
}