"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  ClipboardList,
  Crosshair,
  FileCheck2,
  FlaskConical,
  Megaphone,
  Search,
  ShieldCheck,
  Target,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    shortDescription:
      "Campaign requirements and target criteria are defined before any outreach begins.",
    icon: ClipboardList,
    qa: false,
    details: {
      happens:
        "We begin with the campaign requirements, ICP, target industries, regions, company characteristics, and commercial objectives.",
      verify:
        "The target criteria are reviewed to make sure the campaign has a clear definition of the accounts and people it is intended to reach.",
      receives:
        "A defined campaign scope and targeting framework aligned with the agreed requirements.",
      matters:
        "Strong campaigns start with clear targeting. This prevents wasted outreach and keeps execution focused on the right opportunities.",
    },
  },
  {
    number: "02",
    title: "Identify",
    shortDescription:
      "Accounts and decision-makers are researched and mapped.",
    icon: Search,
    qa: false,
    details: {
      happens:
        "Our research process identifies relevant companies, accounts, decision-makers, and contact information based on the approved targeting criteria.",
      verify:
        "Company relevance, contact information, roles, and other available data points are reviewed before prospects move forward.",
      receives:
        "A researched prospect universe mapped against the campaign's target profile.",
      matters:
        "The right account is only valuable when you can reach the right person. Research connects both sides of that equation.",
    },
  },
  {
    number: "03",
    title: "Verify",
    shortDescription:
      "Contact and company data is validated before it enters the pipeline.",
    icon: ShieldCheck,
    qa: true,
    details: {
      happens:
        "Identified companies and contacts pass through data-quality checks before campaign execution.",
      verify:
        "Contact details, company relevance, decision-maker information, and campaign-fit criteria are reviewed.",
      receives:
        "A cleaner, verified target set ready for campaign preparation.",
      matters:
        "Verification at the beginning protects the campaign from poor data and improves the quality of everything that follows.",
    },
  },
  {
    number: "04",
    title: "Prepare",
    shortDescription:
      "Messaging and strategy are built and aligned with the client.",
    icon: Target,
    qa: false,
    details: {
      happens:
        "Campaign messaging, outreach sequences, positioning, and execution strategy are prepared around the approved audience and objectives.",
      verify:
        "The campaign approach is reviewed against the agreed targeting, messaging requirements, and client expectations.",
      receives:
        "A campaign strategy and outreach framework ready for launch.",
      matters:
        "Good data needs good execution. Preparation connects research with relevant communication.",
    },
  },
  {
    number: "05",
    title: "Launch",
    shortDescription:
      "Outreach begins against the verified, qualified target set.",
    icon: Megaphone,
    qa: false,
    details: {
      happens:
        "The approved campaign is launched across the agreed outreach channels.",
      verify:
        "Campaign activity is monitored to ensure execution follows the defined targeting and messaging strategy.",
      receives:
        "Active campaign execution with engagement activity available for analysis.",
      matters:
        "Launch is where the strategy meets the market. Continuous monitoring allows the campaign to respond to real engagement.",
    },
  },
  {
    number: "06",
    title: "Qualify",
    shortDescription:
      "Responses are scored and reviewed, while calls and emails are audited.",
    icon: Crosshair,
    qa: true,
    details: {
      happens:
        "Engagement is evaluated through campaign responses, email activity, calls, and other available signals.",
      verify:
        "Leads are scored while the QA process audits calls and email engagement to determine whether the interaction meets the campaign's qualification criteria.",
      receives:
        "Qualified opportunities supported by engagement and quality-review signals.",
      matters:
        "Not every response represents a real opportunity. Qualification separates meaningful engagement from surface-level activity.",
    },
  },
  {
    number: "07",
    title: "Validate",
    shortDescription:
      "Every opportunity is human-verified before it reaches the client.",
    icon: FileCheck2,
    qa: true,
    details: {
      happens:
        "Qualified opportunities go through a final human verification before delivery.",
      verify:
        "The QA team reviews the available lead information and qualification signals to confirm that the opportunity meets the agreed delivery criteria.",
      receives:
        "Human-verified qualified leads ready for client delivery and sales follow-up.",
      matters:
        "AI and automation can accelerate execution, but final human verification creates the quality gate that protects the client relationship.",
    },
  },
  {
    number: "08",
    title: "Optimize",
    shortDescription:
      "Performance is reviewed and the approach is refined for what comes next.",
    icon: FlaskConical,
    qa: false,
    details: {
      happens:
        "Campaign performance, engagement signals, client feedback, and testing results are reviewed.",
      verify:
        "Open rates, click-through activity, response quality, qualification patterns, and other relevant performance indicators are analyzed.",
      receives:
        "Actionable insights that inform the next campaign cycle and targeting decisions.",
      matters:
        "The process does not end with delivery. Each campaign creates information that can make the next cycle more precise.",
    },
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const active = steps[activeStep];
  const ActiveIcon = active.icon;

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* --------------------------------------------------------------- */}
        {/* Header */}
        {/* --------------------------------------------------------------- */}

        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-cyan-600">
            THE SALESFLUANCE METHOD
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            A Disciplined Process Built for Revenue
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Intelligence, execution, verification, and optimization combined
            into a repeatable system — not a one-off campaign.
          </p>
        </div>

        {/* --------------------------------------------------------------- */}
        {/* Desktop methodology timeline */}
        {/* --------------------------------------------------------------- */}

        <div className="mt-20 hidden md:block">

          <div className="relative">

            {/* Connecting line */}

            <div className="absolute left-0 right-0 top-6 h-px bg-slate-200" />

            {/* Active line */}

            <div
              className="absolute left-0 top-6 h-px bg-cyan-500 transition-all duration-500"
              style={{
                width: `${(activeStep / (steps.length - 1)) * 100}%`,
              }}
            />

            {/* Nodes */}

            <div className="relative grid grid-cols-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === activeStep;
                const isPassed = index <= activeStep;

                return (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    className="group flex flex-col items-center text-center"
                    aria-label={`View ${step.title} stage`}
                  >
                    <span
                      className={[
                        "relative z-10 flex h-12 w-12 items-center justify-center rounded-full border bg-white transition-all duration-300",
                        isActive
                          ? "border-cyan-500 bg-cyan-500 text-white shadow-lg shadow-cyan-100"
                          : isPassed
                            ? "border-cyan-300 text-cyan-600"
                            : "border-slate-300 text-slate-400",
                      ].join(" ")}
                    >
                      <Icon className="h-5 w-5" />
                    </span>

                    {/* QA marker */}

                    {step.qa && (
                      <span className="mt-3 flex items-center gap-1 font-mono text-[9px] font-semibold uppercase tracking-wider text-cyan-600">
                        <Check className="h-3 w-3" />
                        QA
                      </span>
                    )}

                    {!step.qa && <span className="mt-3 h-3" />}

                    <span
                      className={[
                        "mt-3 font-mono text-[10px] font-semibold tracking-widest",
                        isActive ? "text-cyan-600" : "text-slate-400",
                      ].join(" ")}
                    >
                      {step.number}
                    </span>

                    <span
                      className={[
                        "mt-1 text-sm font-semibold transition-colors",
                        isActive
                          ? "text-slate-950"
                          : "text-slate-500 group-hover:text-slate-900",
                      ].join(" ")}
                    >
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* Shared detail panel */}
          {/* ------------------------------------------------------------- */}

          <div className="mt-14 overflow-hidden rounded-2xl border border-cyan-900/40 bg-[#071827] text-white shadow-2xl shadow-slate-200">

            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

              {/* Panel intro */}

              <div className="border-b border-white/10 p-8 lg:border-b-0 lg:border-r lg:p-10">

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                    <ActiveIcon className="h-6 w-6" />
                  </div>

                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-400">
                      Stage {active.number}
                    </p>

                    <h3 className="mt-1 text-2xl font-semibold">
                      {active.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-8 text-base leading-7 text-slate-300">
                  {active.shortDescription}
                </p>

                {active.qa && (
                  <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-cyan-300">
                    <Check className="h-3.5 w-3.5" />
                    Quality checkpoint
                  </div>
                )}
              </div>

              {/* Detail content */}

              <div className="p-8 lg:p-10">

                <div className="grid gap-8 sm:grid-cols-2">

                  <DetailItem
                    label="What happens"
                    text={active.details.happens}
                  />

                  <DetailItem
                    label="What we verify"
                    text={active.details.verify}
                  />

                  <DetailItem
                    label="What the client receives"
                    text={active.details.receives}
                  />

                  <DetailItem
                    label="Why it matters"
                    text={active.details.matters}
                  />

                </div>

              </div>
            </div>

            {/* Step navigation */}

            <div className="flex items-center justify-between border-t border-white/10 px-8 py-4 lg:px-10">

              <button
                type="button"
                disabled={activeStep === 0}
                onClick={() => setActiveStep((current) => current - 1)}
                className="font-mono text-[10px] uppercase tracking-wider text-slate-400 transition hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
              >
                Previous
              </button>

              <div className="flex gap-1.5">
                {steps.map((step, index) => (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    aria-label={`Go to stage ${step.number}`}
                    className={[
                      "h-1.5 rounded-full transition-all duration-300",
                      index === activeStep
                        ? "w-8 bg-cyan-400"
                        : "w-1.5 bg-slate-600 hover:bg-slate-400",
                    ].join(" ")}
                  />
                ))}
              </div>

              <button
                type="button"
                disabled={activeStep === steps.length - 1}
                onClick={() => setActiveStep((current) => current + 1)}
                className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-slate-400 transition hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
              >
                Next
                <ArrowRight className="h-3.5 w-3.5" />
              </button>

            </div>
          </div>
        </div>

        {/* --------------------------------------------------------------- */}
        {/* Mobile accordion */}
        {/* --------------------------------------------------------------- */}

        <div className="mt-14 space-y-3 md:hidden">

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === activeStep;

            return (
              <div
                key={step.number}
                className={[
                  "overflow-hidden rounded-2xl border transition-all duration-300",
                  isActive
                    ? "border-cyan-300 bg-slate-50"
                    : "border-slate-200 bg-white",
                ].join(" ")}
              >
                <button
                  type="button"
                  onClick={() => setActiveStep(isActive ? -1 : index)}
                  className="flex w-full items-center gap-4 p-5 text-left"
                >
                  <span
                    className={[
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border",
                      isActive
                        ? "border-cyan-500 bg-cyan-500 text-white"
                        : "border-slate-200 text-slate-500",
                    ].join(" ")}
                  >
                    <Icon className="h-5 w-5" />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-2">
                      <span className="font-mono text-[10px] font-semibold tracking-widest text-cyan-600">
                        {step.number}
                      </span>

                      {step.qa && (
                        <span className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-cyan-600">
                          <Check className="h-3 w-3" />
                          QA
                        </span>
                      )}
                    </span>

                    <span className="mt-1 block text-base font-semibold text-slate-950">
                      {step.title}
                    </span>
                  </span>

                  <span
                    className={[
                      "text-xl text-slate-400 transition-transform",
                      isActive ? "rotate-45" : "",
                    ].join(" ")}
                  >
                    +
                  </span>
                </button>

                {isActive && (
                  <div className="border-t border-slate-200 px-5 pb-6 pt-5">

                    <p className="text-sm leading-7 text-slate-600">
                      {step.shortDescription}
                    </p>

                    <div className="mt-6 space-y-5">
                      <DetailItem
                        label="What happens"
                        text={step.details.happens}
                        dark={false}
                      />

                      <DetailItem
                        label="What we verify"
                        text={step.details.verify}
                        dark={false}
                      />

                      <DetailItem
                        label="What the client receives"
                        text={step.details.receives}
                        dark={false}
                      />

                      <DetailItem
                        label="Why it matters"
                        text={step.details.matters}
                        dark={false}
                      />
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* --------------------------------------------------------------- */}
        {/* Quality statement */}
        {/* --------------------------------------------------------------- */}

        <div className="mx-auto mt-16 max-w-2xl text-center">

          <div className="mx-auto mb-5 h-px w-12 bg-cyan-500" />

          <p className="text-xl font-semibold tracking-tight text-slate-950 md:text-2xl">
            Quality isn't the final step.
            <span className="text-cyan-600"> It's built into every step.</span>
          </p>

        </div>

        {/* --------------------------------------------------------------- */}
        {/* Outcome strip */}
        {/* --------------------------------------------------------------- */}

        <div className="mt-16 border-y border-slate-200 py-8">

          <p className="text-center font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
            From intelligence to revenue
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-sm font-semibold text-slate-800 md:gap-x-6">

            {[
              "Accounts",
              "People",
              "Signals",
              "Engagement",
              "Pipeline",
              "Revenue",
            ].map((item, index, array) => (
              <div key={item} className="flex items-center gap-4 md:gap-6">
                <span>{item}</span>

                {index < array.length - 1 && (
                  <ArrowRight className="h-4 w-4 text-cyan-500" />
                )}
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------- */
/* Detail item */
/* ----------------------------------------------------------------------- */

function DetailItem({
  label,
  text,
  dark = true,
}: {
  label: string;
  text: string;
  dark?: boolean;
}) {
  return (
    <div>
      <p
        className={[
          "font-mono text-[10px] font-semibold uppercase tracking-[0.18em]",
          dark ? "text-cyan-400" : "text-cyan-600",
        ].join(" ")}
      >
        {label}
      </p>

      <p
        className={[
          "mt-2 text-sm leading-7",
          dark ? "text-slate-300" : "text-slate-600",
        ].join(" ")}
      >
        {text}
      </p>
    </div>
  );
}