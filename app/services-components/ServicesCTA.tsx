"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesCTA() {
  return (
    <section className="bg-gradient-to-r from-[#0A1F3F] via-[#163A70] to-[#234E82] py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-sky-200">
          READY TO GROW?
        </span>

        <h2 className="mt-8 text-5xl font-bold leading-tight text-white">
          Let's Build Your Next
          <span className="block text-sky-300">
            Revenue Growth Story
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
          Whether you're a startup, SaaS company, marketing agency,
          or enterprise business, SalesFluance helps you generate
          qualified leads, build strategic partnerships, and
          accelerate predictable revenue growth.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl bg-orange-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-orange-700"
          >
            Book a Discovery Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>

          <Link
            href="/about"
            className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            Learn More About Us
          </Link>

        </div>

        <div className="mt-16 grid gap-8 text-center md:grid-cols-3">

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
              Strategic Partners
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