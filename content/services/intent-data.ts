/**
 * SalesFluance Content Layer — Intent Data
 *
 * This file is pure data. It has no dependency on React, Next.js, or any
 * rendering concern — it can be imported, validated, and unit-tested in
 * complete isolation from the UI layer, and it is structured so that a
 * future headless CMS could produce this exact same shape as an API
 * response with no change to how the engine consumes it.
 *
 * CONTENT STATUS: `status: "published"` — this service page is live in
 * production per Founder decision (Sept 2026: all 11 flagship services
 * approved for publication). The copy below was AI-generated to match
 * SalesFluance's approved positioning (outcome-first, consultative,
 * enterprise-grade — never feature-led); it has not been through a
 * subsequent line-by-line Founder copy review. `provenance.status` below
 * intentionally still reads "draft" — it tracks copy-review workflow
 * state, not production visibility, and does not gate rendering. See
 * ContentProvenance / ContentStatus in types/shared.ts.
 *
 * PAGE STRATEGY: This is a lean service page (10 sections), not a flagship
 * page — see the approved IA scope for the 8 non-flagship services.
 */

import type {
  ChallengeSection,
  CTASection,
  DeliverablesSection,
  HeroSection,
  ICPSection,
  ProcessSection,
  RelatedServiceSection,
  SectionEntry,
  ServicePageConfig,
  SolutionSection,
  BusinessOutcomeSection,
} from "../../types/service";
import type { Navigation } from "../../types/shared";

// ---------------------------------------------------------------------------
// Section data — one constant per section, composed into `sections` below.
// ---------------------------------------------------------------------------

const utilityBar: Navigation = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Intent Data" },
  ],
  stickyCta: {
    label: "Book a Discovery Call",
    href: "/contact",
    variant: "primary",
  },
};

const hero: HeroSection = {
  eyebrow: "Intent Data",
  headline: "Know Who's Ready to Buy Before You Reach Out",
  subhead:
    "We identify account-level buying signals and turn them into prioritized, well-timed outreach — so your team spends its energy on accounts that are already in-market, not accounts that might be someday.",
  primaryCta: { label: "Book a Discovery Call", href: "/contact", variant: "primary" },
  secondaryCta: { label: "Explore Related Services", href: "#related-services", variant: "text" },
  visual: {
    src: "/images/services/intent-data-hero.webp",
    alt: "Revenue professional analyzing account intelligence with a highlighted buying-intent signal.",
  },
};

const businessChallenges: ChallengeSection = {
  heading: "The Challenges We Solve",
  subheading:
    "Most outreach is timed by quota pressure, not buyer readiness — which means good targeting gets undone by bad timing.",
  items: [
    {
      id: "challenge-no-visibility-into-timing",
      icon: "eye",
      label: "No Visibility Into Buyer Timing",
      description:
        "Without signal data, every account looks equally ready — so reps spend the same effort on cold accounts as active ones.",
    },
    {
      id: "challenge-signal-overload",
      icon: "database",
      label: "Too Much Signal, Not Enough Prioritization",
      description:
        "Raw intent feeds generate noise faster than they generate direction, leaving teams unsure which accounts to act on first.",
    },
    {
      id: "challenge-generic-outreach-timing",
      icon: "clock",
      label: "Outreach That Ignores Buying Stage",
      description:
        "The same message goes out to an account starting research and an account ready to evaluate vendors — and neither lands well.",
    },
    {
      id: "challenge-missed-in-market-accounts",
      icon: "trending-up",
      label: "Missed In-Market Accounts",
      description:
        "Without a system to catch rising intent, accounts actively researching a solution go unnoticed until a competitor gets there first.",
    },
  ],
};

const ourSolution: SolutionSection = {
  heading: "Our Solution",
  subheading:
    "We treat intent data as a prioritization system, not a data feed — signals only matter once they're translated into who to contact, and when.",
  pillars: [
    {
      id: "pillar-signal-identification",
      icon: "eye",
      title: "Buying-Signal Identification",
      description:
        "We track account-level research activity and engagement signals tied to your specific solution category.",
    },
    {
      id: "pillar-account-prioritization",
      icon: "filter",
      title: "Account Prioritization",
      description:
        "Signals are scored and ranked, so your team knows exactly which accounts deserve attention first.",
    },
    {
      id: "pillar-timed-outreach",
      icon: "zap",
      title: "Timing-Aware Outreach",
      description:
        "Messaging and outreach cadence are matched to where each account actually sits in its buying process.",
    },
  ],
  cta: { label: "See How This Works", href: "#service-process", variant: "text" },
};

const businessOutcomes: BusinessOutcomeSection = {
  heading: "Business Outcomes",
  subheading:
    "The real payoff of intent data isn't the data itself — it's outreach that finally lands at the moment an account is ready to hear it.",
  outcomes: [
    {
      id: "outcome-prioritized-pipeline",
      icon: "filter",
      label: "A Prioritized Target List",
      description: "Your team knows which accounts to work first, based on real buying signals, not guesswork.",
    },
    {
      id: "outcome-better-timed-outreach",
      icon: "zap",
      label: "Better-Timed Outreach",
      description: "Messages reach accounts when they're actively evaluating, not cold.",
    },
    {
      id: "outcome-improved-response-rates",
      icon: "trending-up",
      label: "Improved Response Rates",
      description: "Timing-aware outreach earns more replies than volume-based outreach ever will.",
    },
  ],
  cta: { label: "Talk to a Strategist", href: "/contact", variant: "outline" },
};

const whoThisIsFor: ICPSection = {
  heading: "Who This Is For",
  intro: "Built for teams that want an intent data provider surfacing real buying signals instead of guessing which accounts to prioritize.",
  personas: [
    { id: "persona-vp-sales", title: "VP Sales" },
    { id: "persona-revops-manager", title: "Revenue Operations Manager" },
    { id: "persona-demand-gen-manager", title: "Demand Generation Manager" },
    { id: "persona-abm-lead", title: "ABM Program Lead" },
  ],
  companySizeRange: "50–5,000 Employees",
  industries: ["healthcare", "saas", "it-services"],
};

const serviceProcess: ProcessSection = {
  heading: "Our Process",
  subheading: "Signal data is only useful once it's connected to a specific account list and a specific action.",
  steps: [
    {
      id: "process-discovery",
      order: 1,
      label: "Discovery",
      description: "Define your target accounts and the buying signals most relevant to your solution.",
    },
    {
      id: "process-signal-mapping",
      order: 2,
      label: "Signal Mapping",
      description: "Identify and track the intent signals tied to your ICP and solution category.",
    },
    {
      id: "process-prioritization",
      order: 3,
      label: "Prioritization",
      description: "Score and rank accounts based on signal strength and fit.",
    },
    {
      id: "process-activation",
      order: 4,
      label: "Activation",
      description: "Route prioritized accounts into timed, relevant outreach.",
    },
    {
      id: "process-reporting",
      order: 5,
      label: "Reporting",
      description: "Ongoing signal tracking and reporting keeps the priority list current.",
    },
  ],
};

const deliverables: DeliverablesSection = {
  heading: "What You Receive",
  items: [
    { id: "deliverable-prioritized-account-list", icon: "filter", label: "Prioritized Target Account List" },
    { id: "deliverable-signal-reports", icon: "bar-chart", label: "Buying-Signal Reports" },
    { id: "deliverable-timed-outreach-plan", icon: "zap", label: "Timing-Aware Outreach Plan" },
    { id: "deliverable-crm-integration", icon: "database", label: "CRM-Ready Account Records" },
  ],
};

const relatedServices: RelatedServiceSection = {
  heading: "Related Services",
  services: [
    {
      slug: "account-based-marketing",
      name: "Account-Based Marketing",
      outcomeLine: "Win high-value target accounts",
      icon: "target",
    },
    {
      slug: "lead-generation",
      name: "Lead Generation",
      outcomeLine: "Build a predictable B2B sales pipeline",
      icon: "trending-up",
    },
    {
      slug: "demand-generation",
      name: "Demand Generation",
      outcomeLine: "Create and capture market demand",
      icon: "sparkles",
    },
    {
      slug: "list-building",
      name: "List Building",
      outcomeLine: "Structured, research-backed prospect lists",
      icon: "list-checks",
    },
  ],
};

const finalCta: CTASection = {
  heading: "Ready to Act on Real Buying Signals?",
  reassurance: "A 15-minute conversation about your goals — no pressure, no obligation.",
  primaryCta: { label: "Book a Discovery Call", href: "/contact", variant: "primary" },
  secondaryCta: { label: "Explore Our Process", href: "/process", variant: "text" },
};

// ---------------------------------------------------------------------------
// Ordered section list — a subset of the approved Information Architecture,
// in canonical order. Sections are omitted deliberately to keep this a lean
// service page; none are reordered.
// ---------------------------------------------------------------------------

const sections: SectionEntry[] = [
  { id: "section-utility-bar", type: "utilityBar", data: utilityBar },
  { id: "section-hero", type: "hero", data: hero },
  { id: "section-business-challenges", type: "businessChallenges", data: businessChallenges },
  { id: "section-our-solution", type: "ourSolution", data: ourSolution },
  { id: "section-business-outcomes", type: "businessOutcomes", data: businessOutcomes },
  { id: "section-who-this-is-for", type: "whoThisIsFor", data: whoThisIsFor },
  { id: "section-service-process", type: "serviceProcess", data: serviceProcess },
  { id: "section-deliverables", type: "deliverables", data: deliverables },
  { id: "section-related-services", type: "relatedServices", data: relatedServices },
  { id: "section-final-cta", type: "finalCta", data: finalCta },
];

// ---------------------------------------------------------------------------
// ServicePageConfig — the single exported object for this service.
// ---------------------------------------------------------------------------

export const intentDataConfig: ServicePageConfig = {
  schemaVersion: 1,
  slug: "intent-data",
  category: "Data Solutions",
  status: "published",
  seo: {
    title: "B2B Intent Data Provider | SalesFluance",
    description:
      "SalesFluance is a B2B intent data provider helping revenue teams identify in-market accounts and act on real buying signals with timing-aware outreach.",
    canonical: "/services/intent-data",
    keywords: ["intent data provider"],
  },
  sections,
  provenance: {
    source: "ai-generated",
    status: "draft",
    generationNote:
      "Initial draft generated by AI content pipeline per approved Sept 2026 service-page expansion brief. Requires Founder review before promotion to 'published'.",
    lastEditedAt: "2026-09-11",
  },
};
