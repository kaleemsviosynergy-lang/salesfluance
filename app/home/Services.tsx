"use client";

import Link from "next/link";
import {
  Target,
  Mail,
  Bot,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Lead Generation",
    description:
      "Connect with verified decision-makers that match your ideal customer profile.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Generate qualified meetings through personalized outreach campaigns.",
  },
  {
    icon: Bot,
    title: "AI Outreach",
    description:
      "Scale outbound campaigns using AI-powered prospecting and automation.",
  },
];

export default function Services() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            FEATURED SERVICES
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Solutions Built for B2B Growth
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We help businesses generate qualified pipeline, build strategic
            partnerships, and accelerate predictable revenue growth.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {services.map((service) => {

            const Icon = service.icon;

            return (

              <div
                key={service.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white">

                  <Icon className="h-8 w-8" />

                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

              </div>

            );

          })}

        </div>

        <div className="mt-16 text-center">

          <Link
            href="/services"
            className="inline-flex items-center rounded-xl bg-orange-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-orange-700"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>

        </div>

      </div>
    </section>
  );
}