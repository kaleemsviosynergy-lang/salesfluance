"use client";

import {
  ArrowRight,
  Mail,
  Bot,
  Globe,
  Target,
  Users,
  Rocket,
} from "lucide-react";

const services = [
  {
    title: "B2B Lead Generation",
    description:
      "Connect with qualified decision-makers using accurate research, verified data, and personalized outreach.",
    icon: Target,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Account-Based Marketing",
    description:
      "Run highly targeted campaigns focused on your highest-value accounts and enterprise prospects.",
    icon: Users,
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Demand Generation",
    description:
      "Build a predictable sales pipeline through integrated outbound and inbound demand generation campaigns.",
    icon: Rocket,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Email Marketing",
    description:
      "Create personalized cold email campaigns, follow-up automation, and lead nurturing sequences.",
    icon: Mail,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "AI Outreach",
    description:
      "Leverage AI-powered prospecting and automation while maintaining authentic human conversations.",
    icon: Bot,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Market Expansion",
    description:
      "Identify new markets, industries, and business opportunities to accelerate long-term growth.",
    icon: Globe,
    color: "from-sky-500 to-indigo-500",
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            OUR CORE SERVICES
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Solutions Built for
            <span className="block text-sky-600">
              Sustainable B2B Growth
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            SalesFluance combines human expertise, AI-powered technology,
            and proven B2B strategies to help businesses generate pipeline,
            build partnerships, and accelerate revenue growth.
          </p>
        </div>

        {/* Services Grid */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-sky-300 hover:shadow-2xl"
              >
                <div
                  className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg`}
                >
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {service.description}
                </p>

                <button className="mt-8 inline-flex items-center font-semibold text-sky-600 transition-all duration-300 group-hover:translate-x-2">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom Highlight */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-[#0A1F3F] to-[#234E82] p-12 text-center text-white">
          <h3 className="text-3xl font-bold">
            One Partner. Complete Growth Solutions.
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            Whether you need qualified leads, AI-powered outreach,
            strategic partnerships, or complete demand generation,
            SalesFluance delivers integrated solutions designed
            to help your business grow faster.
          </p>
        </div>
      </div>
    </section>
  );
}