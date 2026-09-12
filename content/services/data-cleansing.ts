/**
 * SalesFluance Content Layer — Data Cleansing
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
    { label: "Data Cleansing" },
  ],
  stickyCta: {
    label: "Book a Discovery Call",
    href: "/contact",
    variant: "primary",
  },
};

const hero: HeroSection = {
  eyebrow: "Data Cleansing",
  headline: "A CRM Your Team Can Actually Trust",
  subhead:
    "We identify and correct inaccurate, duplicate, and stale records in your CRM — so every campaign, report, and outreach effort starts from data your team can rely on.",
  primaryCta: { label: "Book a Discovery Call", href: "/contact", variant: "primary" },
  secondaryCta: { label: "Explore Related Services", href: "#related-services", variant: "text" },
  visual: {
    src: "/images/services/data-cleansing-hero.webp",
    alt: "Revenue operations professional reviewing and correcting duplicate business records.",
  },
};

const businessChallenges: ChallengeSection = {
  heading: "The Challenges We Solve",
  subheading:
    "Bad data doesn't announce itself — it just quietly undermines every campaign and report built on top of it.",
  items: [
    {
      id: "challenge-duplicate-records",
      icon: "layers",
      label: "Duplicate Records",
      description:
        "Duplicate contacts and accounts inflate your database and create inconsistent reporting across teams.",
    },
    {
      id: "challenge-stale-contact-data",
      icon: "clock",
      label: "Stale or Outdated Information",
      description:
        "Job changes, role changes, and company moves go unrecorded, so outreach quietly loses accuracy over time.",
    },
    {
      id: "challenge-invalid-contacts",
      icon: "database",
      label: "Invalid or Unreachable Contacts",
      description:
        "Bounced emails and disconnected numbers waste outreach effort and damage sender and caller reputation.",
    },
    {
      id: "challenge-unreliable-reporting",
      icon: "bar-chart",
      label: "Unreliable Reporting",
      description:
        "Dirty data undermines confidence in pipeline and performance reporting across sales and marketing.",
    },
  ],
};

const ourSolution: SolutionSection = {
  heading: "Our Solution",
  subheading:
    "We treat CRM hygiene as an ongoing discipline, not a one-time cleanup — identifying and correcting the specific issues that erode data reliability.",
  pillars: [
    {
      id: "pillar-duplicate-resolution",
      icon: "layers",
      title: "Duplicate Identification & Resolution",
      description:
        "Duplicate records are identified and merged or removed, restoring a single source of truth.",
    },
    {
      id: "pillar-record-verification",
      icon: "shield-check",
      title: "Record Verification",
      description:
        "Contact and account details are checked and corrected against current, verified sources.",
    },
    {
      id: "pillar-crm-reliability",
      icon: "database",
      title: "Improved CRM Reliability",
      description:
        "A cleaner database means every team working from your CRM can trust what it shows.",
    },
  ],
  cta: { label: "See How This Works", href: "#service-process", variant: "text" },
};

const businessOutcomes: BusinessOutcomeSection = {
  heading: "Business Outcomes",
  subheading:
    "Clean data doesn't show up as a headline metric — it shows up in every campaign and report that finally works the way it should.",
  outcomes: [
    {
      id: "outcome-reliable-database",
      icon: "shield-check",
      label: "A Reliable Database",
      description: "Your team works from accurate, deduplicated, current records.",
    },
    {
      id: "outcome-improved-deliverability",
      icon: "mail",
      label: "Improved Outreach Deliverability",
      description: "Fewer bounces and disconnects protect your sender and caller reputation.",
    },
    {
      id: "outcome-confident-reporting",
      icon: "bar-chart",
      label: "More Confident Reporting",
      description: "Pipeline and performance reporting reflect reality, not data noise.",
    },
  ],
  cta: { label: "Talk to a Strategist", href: "/contact", variant: "outline" },
};

const whoThisIsFor: ICPSection = {
  heading: "Who This Is For",
  intro: "Built for teams whose CRM has accumulated years of duplicate, stale, or unverified records.",
  personas: [
    { id: "persona-revops-manager", title: "Revenue Operations Manager" },
    { id: "persona-crm-administrator", title: "CRM Administrator" },
    { id: "persona-vp-sales", title: "VP Sales" },
    { id: "persona-marketing-director", title: "Marketing Director" },
  ],
  companySizeRange: "10–5,000 Employees",
  industries: ["healthcare", "saas", "it-services"],
};

const serviceProcess: ProcessSection = {
  heading: "Our Process",
  subheading: "Cleansing your CRM starts with understanding exactly where the data has gone wrong.",
  steps: [
    {
      id: "process-discovery",
      order: 1,
      label: "Discovery",
      description: "Assess your current CRM structure and the specific data quality issues present.",
    },
    {
      id: "process-audit",
      order: 2,
      label: "Data Audit",
      description: "Identify duplicates, stale records, and invalid contacts across your database.",
    },
    {
      id: "process-verification",
      order: 3,
      label: "Verification & Correction",
      description: "Records are checked against current sources and corrected where needed.",
    },
    {
      id: "process-deduplication",
      order: 4,
      label: "Deduplication",
      description: "Duplicate records are merged or removed to restore a single source of truth.",
    },
    {
      id: "process-reporting",
      order: 5,
      label: "Reporting",
      description: "A summary of changes made and current database health is delivered to your team.",
    },
  ],
};

const deliverables: DeliverablesSection = {
  heading: "What You Receive",
  items: [
    { id: "deliverable-cleansed-database", icon: "shield-check", label: "Cleansed CRM Database" },
    { id: "deliverable-duplicate-report", icon: "layers", label: "Duplicate Resolution Report" },
    { id: "deliverable-data-quality-summary", icon: "bar-chart", label: "Data Quality Summary" },
    { id: "deliverable-updated-records", icon: "database", label: "Updated, Verified Records" },
  ],
};

const relatedServices: RelatedServiceSection = {
  heading: "Related Services",
  services: [
    {
      slug: "data-appending",
      name: "Data Appending",
      outcomeLine: "Fill in missing record information",
      icon: "database",
    },
    {
      slug: "list-building",
      name: "List Building",
      outcomeLine: "Structured, research-backed prospect lists",
      icon: "list-checks",
    },
    {
      slug: "lead-generation",
      name: "Lead Generation",
      outcomeLine: "Build a predictable B2B sales pipeline",
      icon: "trending-up",
    },
  ],
};

const finalCta: CTASection = {
  heading: "Ready for a CRM You Can Trust?",
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

export const dataCleansingConfig: ServicePageConfig = {
  schemaVersion: 1,
  slug: "data-cleansing",
  category: "Data Solutions",
  status: "published",
  seo: {
    title: "B2B Data Cleansing Services | SalesFluance",
    description:
      "Identify and correct duplicate, stale, and invalid CRM records. B2B data cleansing built to improve database reliability, from SalesFluance.",
    canonical: "/services/data-cleansing",
    keywords: ["B2B data cleansing services"],
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
