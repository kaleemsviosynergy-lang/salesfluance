"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-[#0B1F44] via-[#123B74] to-[#1D5C9F] py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-sky-200">
          READY TO SCALE?
        </span>

        <h2 className="mt-8 text-5xl font-bold leading-tight text-white">
          Let's Grow Your Business
          <span className="block text-sky-300">
            Together
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
          Whether you're looking for qualified leads, strategic partnerships,
          AI-powered outreach or complete demand generation, SalesFluance is
          ready to help you accelerate revenue growth.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl bg-orange-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-orange-700"
          >
            Schedule a Discovery Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            Explore Services
          </Link>

        </div>

        <div className="mt-16 grid gap-8 text-center md:grid-cols-4">

          <div>
            <h3 className="text-4xl font-bold text-white">
              3200+
            </h3>

            <p className="mt-2 text-slate-300">
              Qualified Leads
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-white">
              120+
            </h3>

            <p className="mt-2 text-slate-300">
              Business Partners
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-white">
              40%
            </h3>

            <p className="mt-2 text-slate-300">
              MQL → SQL
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-white">
              95%
            </h3>

            <p className="mt-2 text-slate-300">
              Client Satisfaction
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}