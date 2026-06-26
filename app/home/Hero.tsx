"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import Button from "../components/Button";
import BackgroundEffects from "../components/BackgroundEffects";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F8FBFF] via-[#EEF6FF] to-[#E0F2FE] py-24 lg:py-32">
      <BackgroundEffects />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-16 px-6 lg:flex-row lg:px-8">
        {/* LEFT SIDE */}
        <div className="max-w-3xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-5 py-2 shadow-md">
            <Sparkles className="h-4 w-4 text-sky-500" />
            <span className="text-sm font-medium text-slate-700">
              Enterprise B2B Demand Generation Platform
            </span>
          </div>

          <h1 className="text-5xl font-extrabold leading-tight text-slate-900 lg:text-7xl">
            Accelerate Your{" "}
            <span className="text-orange-600">B2B Revenue</span> Growth
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-600">
            SalesFluance helps ambitious B2B companies generate qualified
            pipeline, build strategic partnerships, and accelerate predictable
            revenue growth.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact">
              Book a Discovery Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button href="/about" variant="secondary">
              Learn More
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8">
            <div>
              <h2 className="text-5xl font-bold text-slate-900">3200+</h2>
              <p className="mt-2 text-slate-600">Qualified Leads</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-slate-900">40%</h2>
              <p className="mt-2 text-slate-600">MQL → SQL</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-slate-900">120+</h2>
              <p className="mt-2 text-slate-600">Strategic Partners</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE DASHBOARD */}
        <div className="w-full max-w-md rounded-[32px] border border-slate-200 bg-white p-8 shadow-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
            SALES DASHBOARD
          </p>

          <h3 className="mt-4 text-3xl font-bold text-slate-900">
            Growth Metrics
          </h3>

          <div className="mt-8 rounded-2xl bg-sky-50 p-6">
            <p className="text-slate-500">Qualified Pipeline</p>

            <h2 className="mt-2 text-5xl font-bold text-slate-900">
              $2.4M
            </h2>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-slate-500">Conversion</p>
              <h3 className="mt-2 text-4xl font-bold">42%</h3>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-slate-500">Meetings</p>
              <h3 className="mt-2 text-4xl font-bold">168</h3>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
            <p>Revenue Growth</p>

            <h2 className="mt-2 text-5xl font-bold">+187%</h2>
          </div>
        </div>
      </div>
    </section>
  );
}