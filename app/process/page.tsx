"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

/**
 * SalesFluance Process — "The SalesFluance Method"
 *
 * Architecture decision (approved):
 * - ONE unified 8-stage flow, not two parallel tracks. Quality is shown
 *   as checkpoints embedded IN the flow (03 Verify, 06 Qualify,
 *   07 Validate) rather than as a separate QA track — this is the
 *   literal visual proof of "quality isn't the final step, it's built
 *   into every step," not just a headline claim.
 * - Desktop: one shared Ink Black detail panel, content swaps by
 *   activeStep. Not 8 separate cards.
 * - Mobile: vertical accordion, same data, no horizontal layout forced.
 * - No new visual language: reuses the connecting-line/node pattern
 *   from Approach, the rounded-2xl Ink Black panel from Revenue
 *   Readiness, and font-mono labels used throughout the site.
 */

interface Stage {
  number: string;
  title: string;
  summary: string;
  isQA: boolean;
  detail: {
    whatHappens: string;
    whatWeCheck: string;
    clientReceives: string;
    whyItMatters: string;
  };
}

const STAGES: Stage[] = [
  {
    number: "01",
    title: "Discover",
    summary: "Campaign requirements and target criteria are defined before any outreach begins.",
    isQA: false,
    detail: {
      whatHappens: "SalesFluance receives the campaign specification and works with the client to define target account criteria and ideal customer profile.",
      whatWeCheck: "That the targeting criteria are specific enough to produce credible opportunity, not broad audience volume.",
      clientReceives: "An agreed target definition before any research or outreach begins.",
      whyItMatters: "A disciplined process starts with a defined target, not a purchased list.",
    },
  },
  {
    number: "02",
    title: "Identify",
    summary: "Accounts and decision-makers are researched and mapped.",
    isQA: false,
    detail: {
      whatHappens: "Target accounts are researched and the relevant decision-makers within each buying group are identified.",
      whatWeCheck: "That contacts identified actually match the roles and seniority relevant to the buying decision.",
      clientReceives: "A mapped set of accounts and contacts, not a raw contact list.",
      whyItMatters: "Reaching the right person matters more than reaching more people.",
    },
  },
  {
    number: "03",
    title: "Verify",
    summary: "Contact and company data is validated before it enters the pipeline.",
    isQA: true,
    detail: {
      whatHappens: "Contact and company information is validated for accuracy before it is used in any campaign.",
      whatWeCheck: "Data accuracy — role, company, and contact details are confirmed, not assumed.",
      clientReceives: "A verified working set, not unverified scraped data.",
      whyItMatters: "This is the first of two verification checkpoints — bad data is caught before it costs time or credibility.",
    },
  },
  {
    number: "04",
    title: "Prepare",
    summary: "Messaging and strategy are built and aligned with the client.",
    isQA: false,
    detail: {
      whatHappens: "Messaging, templates, and campaign strategy are developed and reviewed with the client before launch.",
      whatWeCheck: "That messaging reflects the client's positioning and is approved before it reaches a single contact.",
      clientReceives: "Sign-off on messaging and approach ahead of launch.",
      whyItMatters: "Nothing goes out that the client hasn't seen and approved.",
    },
  },
  {
    number: "05",
    title: "Launch",
    summary: "Outreach begins against the verified, qualified target set.",
    isQA: false,
    detail: {
      whatHappens: "The campaign is launched against the verified account and contact set defined in the earlier stages.",
      whatWeCheck: "That execution follows the approved plan and targeting.",
      clientReceives: "A live campaign built on verified targeting, not a mass send.",
      whyItMatters: "Launch is the execution of a plan, not the start of guesswork.",
    },
  },
  {
    number: "06",
    title: "Qualify",
    summary: "Responses are scored and reviewed, call and email activity audited.",
    isQA: true,
    detail: {
      whatHappens: "Responses are scored, and call and email activity is audited as engagement comes in.",
      whatWeCheck: "That engagement reflects genuine interest and fit, not just activity volume.",
      clientReceives: "A qualified, scored view of engagement — not a raw response count.",
      whyItMatters: "Quality control happens during the campaign, not only at the end of it.",
    },
  },
  {
    number: "07",
    title: "Validate",
    summary: "Every opportunity is human-verified before it reaches the client.",
    isQA: true,
    detail: {
      whatHappens: "A final human review confirms each qualified opportunity before it is delivered.",
      whatWeCheck: "That every opportunity handed to the client is real, relevant, and ready for a conversation.",
      clientReceives: "Opportunities that have passed a human check, not an automated pass-through.",
      whyItMatters: "This is the second verification checkpoint — the last human check before anything reaches the client.",
    },
  },
  {
    number: "08",
    title: "Optimize",
    summary: "Performance is reviewed and the approach refined for what comes next.",
    isQA: false,
    detail: {
      whatHappens: "Campaign performance is reviewed with the client, and findings feed directly back into targeting and messaging.",
      whatWeCheck: "What worked, what didn't, and what should change before the next cycle.",
      clientReceives: "A feedback loop, not a one-off campaign report.",
      whyItMatters: "The process is designed to improve with every cycle, not repeat itself unchanged.",
    },
  },
];

export default function Process(): React.JSX.Element {
  const [activeStep, setActiveStep] = React.useState<number>(0);
  const active = STAGES[activeStep];

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="border-t border-slate-200 bg-[#FAFAF9]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
        {/* Section intro */}
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            The SalesFluance Method
          </p>

          <h2
            id="process-heading"
            className="mt-5 text-4xl font-semibold tracking-[-0.025em] text-[#0A0E14] sm:text-5xl"
          >
            A disciplined process
            <br />
            <span className="text-cyan-600">built for revenue.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            SalesFluance combines intelligence, execution, verification, and
            optimization into one repeatable system — not a single campaign,
            run once.
          </p>
        </div>

        {/* ============================================================
            DESKTOP — horizontal line, shared detail panel
        ============================================================ */}
        <div className="mt-16 hidden overflow-hidden rounded-2xl border border-cyan-400/20 bg-[#0A0E14] lg:block">
          <div className="p-10 xl:p-12">
            {/* Node line */}
            <div className="relative">
              <div className="absolute left-0 right-0 top-5 h-px bg-white/10" />

              <motion.div
                aria-hidden="true"
                className="absolute left-0 top-5 h-px origin-left bg-cyan-400/50"
                style={{ width: "100%" }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
              />

              <div className="relative grid grid-cols-8 gap-2">
                {STAGES.map((stage, index) => {
                  const isActive = index === activeStep;

                  return (
                    <button
                      key={stage.number}
                      type="button"
                      onClick={() => setActiveStep(index)}
                      aria-pressed={isActive}
                      className="group flex flex-col items-center gap-3 pt-0 text-center"
                    >
                      <span
                        className={[
                          "relative z-10 flex h-10 w-10 items-center justify-center rounded-full border font-mono text-[10px] font-semibold transition-colors duration-200",
                          isActive
                            ? "border-cyan-400 bg-cyan-400/10 text-cyan-400"
                            : "border-white/15 bg-[#0A0E14] text-slate-500 group-hover:border-cyan-400/40 group-hover:text-cyan-400/70",
                        ].join(" ")}
                      >
                        {stage.number}

                        {stage.isQA && (
                          <span
                            aria-hidden="true"
                            className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full border border-[#0A0E14] bg-cyan-400"
                          />
                        )}
                      </span>

                      <span
                        className={[
                          "text-xs font-medium transition-colors duration-200",
                          isActive
                            ? "text-white"
                            : "text-slate-500 group-hover:text-slate-300",
                        ].join(" ")}
                      >
                        {stage.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Shared detail panel */}
            <div className="mt-10 border-t border-white/10 pt-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.number}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
                          {active.number} / {active.title}
                        </span>

                        {active.isQA && (
                          <span className="inline-flex items-center gap-1.5 border border-cyan-400/25 bg-cyan-400/5 px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-cyan-400">
                            QA checkpoint
                          </span>
                        )}
                      </div>

                      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-white">
                        {active.summary}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    <DetailField label="What happens" value={active.detail.whatHappens} />
                    <DetailField label="What we check" value={active.detail.whatWeCheck} />
                    <DetailField label="What the client receives" value={active.detail.clientReceives} />
                    <DetailField label="Why it matters" value={active.detail.whyItMatters} />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ============================================================
            MOBILE — vertical accordion
        ============================================================ */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-cyan-400/20 bg-[#0A0E14] lg:hidden">
          {STAGES.map((stage, index) => {
            const isOpen = index === activeStep;

            return (
              <div
                key={stage.number}
                className="border-b border-white/10 last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => setActiveStep(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  aria-controls={`stage-panel-${stage.number}`}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={[
                        "relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-mono text-[10px] font-semibold",
                        isOpen
                          ? "border-cyan-400 bg-cyan-400/10 text-cyan-400"
                          : "border-white/15 text-slate-500",
                      ].join(" ")}
                    >
                      {stage.number}

                      {stage.isQA && (
                        <span
                          aria-hidden="true"
                          className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full border border-[#0A0E14] bg-cyan-400"
                        />
                      )}
                    </span>

                    <span
                      className={[
                        "text-sm font-medium",
                        isOpen ? "text-white" : "text-slate-300",
                      ].join(" ")}
                    >
                      {stage.title}
                    </span>
                  </div>

                  <ChevronDown
                    aria-hidden="true"
                    className={[
                      "h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200",
                      isOpen ? "rotate-180 text-cyan-400" : "",
                    ].join(" ")}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`stage-panel-${stage.number}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6">
                        {stage.isQA && (
                          <span className="mb-4 inline-flex items-center gap-1.5 border border-cyan-400/25 bg-cyan-400/5 px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-cyan-400">
                            QA checkpoint
                          </span>
                        )}

                        <p className="text-sm leading-6 text-slate-300">
                          {stage.summary}
                        </p>

                        <div className="mt-5 space-y-4">
                          <DetailField label="What happens" value={stage.detail.whatHappens} />
                          <DetailField label="What we check" value={stage.detail.whatWeCheck} />
                          <DetailField label="What the client receives" value={stage.detail.clientReceives} />
                          <DetailField label="Why it matters" value={stage.detail.whyItMatters} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Quality principle statement */}
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            Verification occurs twice — data, then delivery
          </p>

          <p className="max-w-2xl text-sm leading-6 text-slate-500">
            Quality isn&apos;t the final step. It&apos;s built into every step.
          </p>
        </div>

        {/* Master chain — reused from the site's central narrative,
            not a new outcome-line invented for this section. */}
        <div className="mt-6 border-t border-slate-200 pt-6">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            Accounts → People → Signals → Engagement → Pipeline → Revenue
          </p>
        </div>
      </div>
    </section>
  );
}

function DetailField({
  label,
  value,
}: {
  label: string;
  value: string;
}): React.JSX.Element {
  return (
    <div>
      <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-500">
        {label}
      </p>

      <p className="mt-2 text-sm leading-6 text-slate-300">{value}</p>
    </div>
  );
}