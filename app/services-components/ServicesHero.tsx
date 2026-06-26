"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import Button from "../components/Button";
import BackgroundEffects from "../components/BackgroundEffects";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0A1F3F] via-[#162E63] to-[#234E82] py-28 text-white">

      <BackgroundEffects />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="max-w-4xl">

          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-white/10 px-5 py-2 backdrop-blur">

            <Sparkles className="h-4 w-4 text-sky-300" />

            <span className="text-sm font-medium">
              Comprehensive B2B Growth Solutions
            </span>

          </div>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight lg:text-7xl">

            Revenue Growth Solutions

            <br />

            for Modern B2B Companies

          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">

            From lead generation to strategic partnerships, we provide
            end-to-end demand generation solutions that help ambitious
            businesses build predictable revenue and long-term growth.

          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Button href="/contact">

              Book a Discovery Call

              <ArrowRight className="ml-2 h-5 w-5" />

            </Button>

            <Button href="/process" variant="secondary">

              Explore Our Process

            </Button>

          </div>

        </div>

      </div>

    </section>
  );
}