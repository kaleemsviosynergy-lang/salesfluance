"use client";

import {
  Search,
  Target,
  Rocket,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery & Research",
    description:
      "We understand your business, target audience, industry, and growth objectives to build the right strategy.",
  },
  {
    icon: Target,
    step: "02",
    title: "Strategy & Planning",
    description:
      "Our team creates a customized lead generation and outreach strategy aligned with your business goals.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Execution & Outreach",
    description:
      "We launch personalized campaigns using email marketing, AI outreach, and demand generation.",
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Optimization & Growth",
    description:
      "We continuously monitor, optimize, and improve campaign performance to maximize ROI.",
  },
];

export default function GrowthProcess() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            OUR PROCESS
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            How We Help You Grow
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every successful campaign follows a structured process that turns
            strategy into measurable business growth.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-4">

          {steps.map((step) => {

            const Icon = step.icon;

            return (

              <div
                key={step.step}
                className="group rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="mb-6 flex items-center justify-between">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white">

                    <Icon className="h-8 w-8" />

                  </div>

                  <span className="text-4xl font-bold text-slate-200">
                    {step.step}
                  </span>

                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}