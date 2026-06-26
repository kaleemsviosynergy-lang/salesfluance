"use client";

import Link from "next/link";
import {
  Search,
  Target,
  Rocket,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Research",
    description: "Understand your market, ICP and business goals.",
  },
  {
    icon: Target,
    title: "Strategy",
    description: "Build a customized demand generation plan.",
  },
  {
    icon: Rocket,
    title: "Execute",
    description: "Launch outreach campaigns across multiple channels.",
  },
  {
    icon: TrendingUp,
    title: "Scale",
    description: "Optimize campaigns and accelerate predictable growth.",
  },
];

export default function Process() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            OUR PROCESS
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Our Proven Growth Framework
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            A simple, transparent process that turns strategy into measurable
            business growth.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white">
                  <Icon className="h-8 w-8" />
                </div>

                <div className="mb-3 text-sm font-bold text-orange-600">
                  STEP {index + 1}
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

        <div className="mt-16 text-center">

          <Link
            href="/process"
            className="inline-flex items-center rounded-xl bg-slate-900 px-8 py-4 text-lg font-semibold text-white transition hover:bg-slate-800"
          >
            Explore Our Process
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>

        </div>

      </div>
    </section>
  );
}