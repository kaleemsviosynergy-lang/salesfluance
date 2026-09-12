/**
 * SalesFluance Content Layer — List Building
 *
 * This file is pure data. It has no dependency on React, Next.js, or any
 * rendering concern — it can be imported, validated, and unit-tested in
 * complete isolation from the UI layer, and it is structured so that a
 * future headless CMS could produce this exact same shape as an API
 * response with no change to how the engine consumes it.
 *
 * CONTENT STATUS: AI-generated draft copy authored to match SalesFluance's
 * approved positioning (outcome-first, consultative, enterprise-grade —
 * never feature-led). It is NOT final marketing copy and has not been
 * reviewed by the Founder. `status: "draft"` keeps this config out of
 * production builds — see ContentProvenance / ContentStatus in
 * types/shared.ts.
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
    { label: "List Building" },
  ],
  stickyCta: {
    label: "Book a Discovery Call",
    href: "/contact",
    variant: "primary",
  },
};

const hero: HeroSection = {
  eyebrow: "List Building",
  headline: "Prospect Lists Built on Research, Not Guesswork",
  subhead:
    "We research your ICP, identify the accounts and decision-makers who actually fit, and deliver structured, verified prospect lists your team can act on immediately.",
  primaryCta: { label: "Book a Discovery Call", href: "/contact", variant: "primary" },
  secondaryCta: { label: "Explore Related Services", href: "#related-services", variant: "text" },
  visual: {
    src: "/images/services/list-building-hero.webp",
    alt: "B2B researcher organizing structured prospect and account records into a targeted list.",
  },
};

const businessChallenges: ChallengeSection = {
  heading: "The Challenges We Solve",
  subheading:
    "A list is only as useful as the research behind it — and most lists are built for size, not fit.",
  items: [
    {
      id: "challenge-poorly-defined-icp",
      icon: "target",
      label: "Poorly Defined ICP Criteria",
      description:
        "Without clear account and persona criteria, list-building defaults to broad titles instead of real buying fit.",
    },
    {
      id: "challenge-purchased-lists",
      icon: "database",
      label: "Purchased, Unverified Lists",
      description:
        "Bulk-purchased contact lists arrive outdated and unverified, wasting outreach effort before it starts.",
    },
    {
      id: "challenge-internal-research-time",
      icon: "clock",
      label: "Limited Internal Research Capacity",
      description:
        "Manual prospect research takes hours your team doesn't have, and quality suffers when it's rushed.",
    },
    {
      id: "challenge-inconsistent-structure",
      icon: "list-checks",
      label: "Inconsistent List Structure",
      description:
        "Lists built ad hoc lack consistent fields and formatting, making them hard to use across your CRM and outreach tools.",
    },
  ],
};

const ourSolution: SolutionSection = {
  heading: "Our Solution",
  subheading:
    "We build lists the way we'd want to receive them — structured, verified, and grounded in a clearly defined ICP, not assembled for volume.",
  pillars: [
    {
      id: "pillar-icp-research",
      icon: "target",
      title: "ICP-Based Account Research",
      description:
        "Every list starts with a clear definition of the accounts and roles that actually fit your business.",
    },
    {
      id: "pillar-decision-maker-identification",
      icon: "users",
      title: "Decision-Maker Identification",
      description:
        "We identify the specific people with the authority and context to act on outreach, not just a title match.",
    },
    {
      id: "pillar-structured-delivery",
      icon: "list-checks",
      title: "Structured, CRM-Ready Delivery",
      description:
        "Lists arrive in a consistent, structured format your team can load directly into existing workflows.",
    },
  ],
  cta: { label: "See How This Works", href: "#service-process", variant: "text" },
};

const businessOutcomes: BusinessOutcomeSection = {
  heading: "Business Outcomes",
  subheading:
    "A good list shows up as usable pipeline input, not a spreadsheet your team has to clean up before it's useful.",
  outcomes: [
    {
      id: "outcome-icp-aligned-lists",
      icon: "target",
      label: "ICP-Aligned Prospect Lists",
      description: "Every contact on the list has been checked against your actual buying criteria.",
    },
    {
      id: "outcome-research-quality",
      icon: "search",
      label: "Research-Grade Accuracy",
      description: "Human-researched records, not automated scrapes pulled from stale databases.",
    },
    {
      id: "outcome-immediate-usability",
      icon: "list-checks",
      label: "Immediately Usable Lists",
      description: "Structured, consistent data your team can act on the day it's delivered.",
    },
  ],
  cta: { label: "Talk to a Strategist", href: "/contact", variant: "outline" },
};

const whoThisIsFor: ICPSection = {
  heading: "Who This Is For",
  intro: "Built for teams that need a well-researched prospect list, not another bulk data purchase.",
  personas: [
    { id: "persona-sales-development-lead", title: "Sales Development Lead" },
    { id: "persona-demand-gen-manager", title: "Demand Generation Manager" },
    { id: "persona-revops-manager", title: "Revenue Operations Manager" },
    { id: "persona-founder-ceo", title: "Founder / CEO" },
  ],
  companySizeRange: "10–5,000 Employees",
  industries: ["healthcare", "saas", "it-services"],
};

const serviceProcess: ProcessSection = {
  heading: "Our Process",
  subheading: "Every list is built from a defined ICP forward — never from an existing database backward.",
  steps: [
    {
      id: "process-discovery",
      order: 1,
      label: "Discovery",
      description: "Define your ICP, target roles, and the criteria a good-fit account needs to meet.",
    },
    {
      id: "process-account-research",
      order: 2,
      label: "Account Research",
      description: "Identify companies that match your defined criteria.",
    },
    {
      id: "process-contact-identification",
      order: 3,
      label: "Decision-Maker Identification",
      description: "Research and confirm the specific contacts within each account.",
    },
    {
      id: "process-verification",
      order: 4,
      label: "Verification",
      description: "Every contact is checked for accuracy and current role before delivery.",
    },
    {
      id: "process-delivery",
      order: 5,
      label: "Delivery",
      description: "The finished list is delivered in a structured, CRM-ready format.",
    },
  ],
};

const deliverables: DeliverablesSection = {
  heading: "What You Receive",
  items: [
    { id: "deliverable-verified-prospect-list", icon: "shield-check", label: "Verified Prospect List" },
    { id: "deliverable-account-research", icon: "search", label: "Account Research Summary" },
    { id: "deliverable-structured-fields", icon: "list-checks", label: "Structured, Consistent Data Fields" },
    { id: "deliverable-crm-ready-file", icon: "database", label: "CRM-Ready File Delivery" },
  ],
};

const relatedServices: RelatedServiceSection = {
  heading: "Related Services",
  services: [
    {
      slug: "lead-generation",
      name: "Lead Generation",
      outcomeLine: "Build a predictable B2B sales pipeline",
      icon: "trending-up",
    },
    {
      slug: "data-cleansing",
      name: "Data Cleansing",
      outcomeLine: "Keep your CRM data accurate and reliable",
      icon: "shield-check",
    },
    {
      slug: "data-appending",
      name: "Data Appending",
      outcomeLine: "Fill in missing record information",
      icon: "database",
    },
  ],
};

const finalCta: CTASection = {
  heading: "Ready for a Prospect List Built on Real Research?",
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

export const listBuildingConfig: ServicePageConfig = {
  schemaVersion: 1,
  slug: "list-building",
  category: "Data Solutions",
  status: "published",
  seo: {
    title: "B2B List Building Services | SalesFluance",
    description:
      "ICP-based B2B prospect list building with verified decision-maker research — structured, CRM-ready lists from SalesFluance.",
    canonical: "/services/list-building",
    keywords: ["B2B list building services"],
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
