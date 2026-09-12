/**
 * SalesFluance Content Layer — Content Syndication
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
    { label: "Content Syndication" },
  ],
  stickyCta: {
    label: "Book a Discovery Call",
    href: "/contact",
    variant: "primary",
  },
};

const hero: HeroSection = {
  eyebrow: "Content Syndication",
  headline: "Put Your Best Content in Front of the Right Buyers",
  subhead:
    "We distribute your gated content to relevant, verified B2B audiences and identify who actually engages with it — turning content reach into a source of qualified demand, not just downloads.",
  primaryCta: { label: "Book a Discovery Call", href: "/contact", variant: "primary" },
  secondaryCta: { label: "Explore Related Services", href: "#related-services", variant: "text" },
  visual: {
    src: "/images/services/content-syndication-hero.webp",
    alt: "Premium B2B content being distributed across multiple connected audience channels.",
  },
};

const businessChallenges: ChallengeSection = {
  heading: "The Challenges We Solve",
  subheading:
    "Good content is wasted the moment it's distributed to the wrong audience — reach without relevance doesn't move pipeline.",
  items: [
    {
      id: "challenge-limited-content-reach",
      icon: "globe",
      label: "Limited Content Reach",
      description:
        "Strong content sits behind a form with no distribution plan, so it reaches only the audience that was already looking for it.",
    },
    {
      id: "challenge-irrelevant-audiences",
      icon: "filter",
      label: "Distribution to the Wrong Audience",
      description:
        "Generic syndication networks prioritize volume over fit, generating downloads from contacts who were never a match.",
    },
    {
      id: "challenge-no-engagement-visibility",
      icon: "eye",
      label: "No Visibility Into Real Engagement",
      description:
        "A download doesn't tell you who actually engaged with the content or whether it moved them closer to a buying decision.",
    },
    {
      id: "challenge-disconnected-from-demand-gen",
      icon: "link",
      label: "Disconnected From the Rest of Demand Gen",
      description:
        "Content engagement data sits in a separate report instead of feeding directly into outreach and pipeline follow-up.",
    },
  ],
};

const ourSolution: SolutionSection = {
  heading: "Our Solution",
  subheading:
    "We treat syndication as a targeting exercise first and a distribution exercise second — content only goes where it fits your ICP.",
  pillars: [
    {
      id: "pillar-targeted-distribution",
      icon: "target",
      title: "Targeted Distribution",
      description:
        "Content is placed in front of audiences matched to your ICP, not a broad, generic network.",
    },
    {
      id: "pillar-engagement-tracking",
      icon: "eye",
      title: "Engagement Identification",
      description:
        "We identify which prospects actually engaged with the content, not just who filled out a form.",
    },
    {
      id: "pillar-demand-gen-connection",
      icon: "link",
      title: "Connected to Demand Generation",
      description:
        "Engaged prospects are routed into follow-up outreach, so content becomes a pipeline input, not a standalone metric.",
    },
  ],
  cta: { label: "See How This Works", href: "#service-process", variant: "text" },
};

const businessOutcomes: BusinessOutcomeSection = {
  heading: "Business Outcomes",
  subheading:
    "The point of syndicating content isn't the download count — it's the qualified conversations that come from it.",
  outcomes: [
    {
      id: "outcome-expanded-reach",
      icon: "globe",
      label: "Expanded Content Visibility",
      description: "Your content reaches relevant B2B audiences beyond your existing owned channels.",
    },
    {
      id: "outcome-engaged-prospects",
      icon: "eye",
      label: "Identified Engaged Prospects",
      description: "You know which contacts actually engaged, not just who downloaded.",
    },
    {
      id: "outcome-pipeline-connection",
      icon: "link",
      label: "Content Tied to Pipeline",
      description: "Engagement signals feed directly into follow-up outreach and demand generation.",
    },
  ],
  cta: { label: "Talk to a Strategist", href: "/contact", variant: "outline" },
};

const whoThisIsFor: ICPSection = {
  heading: "Who This Is For",
  intro: "Built for teams with strong content that needs a targeted distribution strategy behind it.",
  personas: [
    { id: "persona-marketing-director", title: "Marketing Director" },
    { id: "persona-demand-gen-manager", title: "Demand Generation Manager" },
    { id: "persona-content-marketing-lead", title: "Content Marketing Lead" },
    { id: "persona-vp-marketing", title: "VP Marketing" },
  ],
  companySizeRange: "10–5,000 Employees",
  industries: ["healthcare", "saas", "it-services"],
};

const serviceProcess: ProcessSection = {
  heading: "Our Process",
  subheading: "Distribution only works when it's built around your ICP from the first step.",
  steps: [
    {
      id: "process-discovery",
      order: 1,
      label: "Discovery",
      description: "Understand your content, target audience, and distribution goals.",
    },
    {
      id: "process-audience-targeting",
      order: 2,
      label: "Audience Targeting",
      description: "Define the accounts and personas the content should reach.",
    },
    {
      id: "process-distribution",
      order: 3,
      label: "Distribution",
      description: "Place content in front of the targeted, verified audience.",
    },
    {
      id: "process-engagement-tracking",
      order: 4,
      label: "Engagement Tracking",
      description: "Identify and qualify prospects based on actual content engagement.",
    },
    {
      id: "process-handoff",
      order: 5,
      label: "Handoff & Reporting",
      description: "Engaged prospects and performance data are delivered to your team.",
    },
  ],
};

const deliverables: DeliverablesSection = {
  heading: "What You Receive",
  items: [
    { id: "deliverable-distribution-report", icon: "globe", label: "Content Distribution Report" },
    { id: "deliverable-engaged-prospect-list", icon: "eye", label: "Engaged Prospect List" },
    { id: "deliverable-lead-handoff", icon: "list-checks", label: "Qualified Lead Handoff" },
    { id: "deliverable-crm-records", icon: "database", label: "CRM-Ready Engagement Records" },
  ],
};

const relatedServices: RelatedServiceSection = {
  heading: "Related Services",
  services: [
    {
      slug: "demand-generation",
      name: "Demand Generation",
      outcomeLine: "Create and capture market demand",
      icon: "sparkles",
    },
    {
      slug: "lead-generation",
      name: "Lead Generation",
      outcomeLine: "Build a predictable B2B sales pipeline",
      icon: "trending-up",
    },
    {
      slug: "intent-data",
      name: "Intent Data",
      outcomeLine: "Identify accounts actively researching",
      icon: "eye",
    },
    {
      slug: "email-marketing",
      name: "Email Marketing",
      outcomeLine: "Improve engagement and conversions",
      icon: "mail",
    },
  ],
};

const finalCta: CTASection = {
  heading: "Ready to Extend Your Content's Reach?",
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

export const contentSyndicationConfig: ServicePageConfig = {
  schemaVersion: 1,
  slug: "content-syndication",
  category: "Marketing Services",
  status: "published",
  seo: {
    title: "B2B Content Syndication Services | SalesFluance",
    description:
      "Distribute your B2B content to targeted, verified audiences and identify engaged prospects with SalesFluance's content syndication services.",
    canonical: "/services/content-syndication",
    keywords: ["B2B content syndication services"],
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
