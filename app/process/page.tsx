"use client";

import * as React from "react";
import OpenBookProcess from "@/components/process/OpenBookProcess";

/**
 * SalesFluance Process — "The SalesFluance Method"
 *
 * Architecture decision (approved):
 * - ONE unified 8-stage flow, not two parallel tracks. Quality is shown
 *   as checkpoints embedded IN the flow (03 Verify, 06 Qualify,
 *   07 Validate) rather than as a separate QA track — this is the
 *   literal visual proof of "quality isn't the final step, it's built
 *   into every step," not just a headline claim.
 * - The eight stages are presented as an interactive open-book spread
 *   (OpenBookProcess): an editorial two-page layout on tablet/desktop
 *   and a single readable card on mobile, with Previous/Next, direct
 *   step navigation, and a page-turn transition. This component owns
 *   presentation only — STAGES below remains the one source of truth
 *   for all process copy, exactly as it was for the previous panel.
 * - No new visual language: font-mono labels, the Ink Black (#0A0E14)
 *   and cyan brand tokens, and the rounded panel conventions used
 *   throughout the site are reused, not reinvented.
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

        {/* Interactive open-book presentation of the eight process stages.
            Replaces the previous dark desktop detail panel and mobile
            accordion with one responsive component; STAGES (above) is
            passed straight through, unmodified and not duplicated. */}
        <div className="mt-16">
          <OpenBookProcess stages={STAGES} />
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