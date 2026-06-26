"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import Button from "../components/Button";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-sky-900 py-28">
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-[160px]" />

      <div className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[160px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="max-w-3xl">

          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-5 py-2">

            <Sparkles className="h-4 w-4 text-sky-400" />

            <span className="text-sm text-sky-200">
              Let's Build Something Great Together
            </span>

          </div>

          <h1 className="text-5xl font-extrabold leading-tight text-white lg:text-7xl">

            Start a Conversation
            <span className="mt-3 block text-sky-400">
              With SalesFluance
            </span>

          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-300">

            Whether you're looking for qualified B2B leads,
            strategic partnerships, AI-powered outreach,
            or demand generation support, our team is ready
            to help accelerate your business growth.

          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Button href="#contact-form">

              Schedule a Discovery Call

              <ArrowRight className="ml-2 h-5 w-5" />

            </Button>

            <Button
              href="/services"
              variant="secondary"
            >
              Explore Services
            </Button>

          </div>

          <div className="mt-16 grid grid-cols-3 gap-8">

            <div>

              <h2 className="text-4xl font-bold text-white">
                24h
              </h2>

              <p className="mt-2 text-slate-400">
                Response Time
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-bold text-white">
                3200+
              </h2>

              <p className="mt-2 text-slate-400">
                Qualified Leads
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-bold text-white">
                120+
              </h2>

              <p className="mt-2 text-slate-400">
                Business Partners
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}