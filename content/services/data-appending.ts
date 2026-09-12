/**
 * SalesFluance Content Layer — Data Appending
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
    { label: "Data Appending" },
  ],
  stickyCta: {
    label: "Book a Discovery Call",
    href: "/contact",
    variant: "primary",
  },
};

const hero: HeroSection = {
  eyebrow: "Data Appending",
  headline: "Complete the Records Your Team Already Has",
  subhead:
    "We research and fill in missing contact and business information on your existing CRM records — turning partial, hard-to-use data into complete records your team can act on.",
  primaryCta: { label: "Book a Discovery Call", href: "/contact", variant: "primary" },
  secondaryCta: { label: "Explore Related Services", href: "#related-services", variant: "text" },
  visual: {
    src: "/images/services/data-appending-hero.webp",
    alt: "Business records being enriched with additional verified information in a modern data workspace.",
  },
};

const businessChallenges: ChallengeSection = {
  heading: "The Challenges We Solve",
  subheading:
    "Incomplete records quietly limit what your team can do with the data they already have.",
  items: [
    {
      id: "challenge-incomplete-records",
      icon: "database",
      label: "Incomplete Contact Records",
      description:
        "Missing phone numbers, titles, or company details make existing records harder to act on than they should be.",
    },
    {
      id: "challenge-partial-firmographic-data",
      icon: "building",
      label: "Missing Firmographic Data",
      description:
        "Gaps in company size, industry, or location data make it difficult to segment and prioritize accounts accurately.",
    },
    {
      id: "challenge-manual-research-burden",
      icon: "clock",
      label: "Manual Research Burden",
      description:
        "Filling gaps record by record takes hours your team could spend on outreach instead.",
    },
    {
      id: "challenge-underused-crm-data",
      icon: "database",
      label: "Underused CRM Data",
      description:
        "Incomplete records get skipped over for outreach and segmentation, even when the contact itself is a good fit.",
    },
  ],
};

const ourSolution: SolutionSection = {
  heading: "Our Solution",
  subheading:
    "We fill in what's missing without disturbing what's already correct — enriching existing records rather than replacing them wholesale.",
  pillars: [
    {
      id: "pillar-targeted-appending",
      icon: "database",
      title: "Targeted Field Appending",
      description:
        "We identify exactly which fields are missing and research the accurate information to complete them.",
    },
    {
      id: "pillar-structured-enhancement",
      icon: "list-checks",
      title: "Structured Data Enhancement",
      description:
        "Appended data is delivered in a consistent format that matches your existing CRM structure.",
    },
    {
      id: "pillar-workflow-support",
      icon: "workflow",
      title: "Support for Sales & Marketing Workflows",
      description:
        "Complete records mean more of your database becomes usable for segmentation, outreach, and reporting.",
    },
  ],
  cta: { label: "See How This Works", href: "#service-process", variant: "text" },
};

const businessOutcomes: BusinessOutcomeSection = {
  heading: "Business Outcomes",
  subheading:
    "Completing your records pays off in how much more of your existing database your team can actually put to work.",
  outcomes: [
    {
      id: "outcome-complete-records",
      icon: "database",
      label: "Complete, Usable Records",
      description: "Fewer gaps mean more of your existing database is ready for segmentation and outreach.",
    },
    {
      id: "outcome-better-segmentation",
      icon: "filter",
      label: "Better Segmentation",
      description: "Complete firmographic and contact fields make accurate targeting possible.",
    },
    {
      id: "outcome-improved-crm-usability",
      icon: "list-checks",
      label: "Improved CRM Usability",
      description: "Your team spends less time working around gaps and more time acting on the data.",
    },
  ],
  cta: { label: "Talk to a Strategist", href: "/contact", variant: "outline" },
};

const whoThisIsFor: ICPSection = {
  heading: "Who This Is For",
  intro: "Built for teams sitting on a CRM full of partial records that need completing, not replacing.",
  personas: [
    { id: "persona-revops-manager", title: "Revenue Operations Manager" },
    { id: "persona-crm-administrator", title: "CRM Administrator" },
    { id: "persona-marketing-director", title: "Marketing Director" },
    { id: "persona-vp-sales", title: "VP Sales" },
  ],
  companySizeRange: "10–5,000 Employees",
  industries: ["healthcare", "saas", "it-services"],
};

const serviceProcess: ProcessSection = {
  heading: "Our Process",
  subheading: "Appending data starts with knowing exactly what's missing and why it matters.",
  steps: [
    {
      id: "process-discovery",
      order: 1,
      label: "Discovery",
      description: "Assess your current records and identify which fields are incomplete.",
    },
    {
      id: "process-gap-analysis",
      order: 2,
      label: "Gap Analysis",
      description: "Prioritize which missing fields matter most to your sales and marketing workflows.",
    },
    {
      id: "process-research",
      order: 3,
      label: "Research & Appending",
      description: "Research and fill in the missing contact and firmographic information.",
    },
    {
      id: "process-verification",
      order: 4,
      label: "Verification",
      description: "Appended data is checked for accuracy before it's delivered.",
    },
    {
      id: "process-delivery",
      order: 5,
      label: "Delivery",
      description: "Completed records are delivered in a structured, CRM-ready format.",
    },
  ],
};

const deliverables: DeliverablesSection = {
  heading: "What You Receive",
  items: [
    { id: "deliverable-appended-records", icon: "database", label: "Appended, Completed Records" },
    { id: "deliverable-gap-analysis-report", icon: "bar-chart", label: "Data Gap Analysis Report" },
    { id: "deliverable-structured-fields", icon: "list-checks", label: "Structured, Consistent Data Fields" },
    { id: "deliverable-crm-ready-file", icon: "workflow", label: "CRM-Ready File Delivery" },
  ],
};

const relatedServices: RelatedServiceSection = {
  heading: "Related Services",
  services: [
    {
      slug: "data-cleansing",
      name: "Data Cleansing",
      outcomeLine: "Keep your CRM data accurate and reliable",
      icon: "shield-check",
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
  heading: "Ready to Complete Your CRM Records?",
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

export const dataAppendingConfig: ServicePageConfig = {
  schemaVersion: 1,
  slug: "data-appending",
  category: "Data Solutions",
  status: "published",
  seo: {
    title: "B2B Data Appending Services | SalesFluance",
    description:
      "Fill in missing contact and firmographic information on existing CRM records. B2B data appending built for usable, complete data, from SalesFluance.",
    canonical: "/services/data-appending",
    keywords: ["B2B data appending services"],
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
