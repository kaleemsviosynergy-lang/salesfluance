/**
 * SalesFluance Content Layer — Email Marketing
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
    { label: "Email Marketing" },
  ],
  stickyCta: {
    label: "Book a Discovery Call",
    href: "/contact",
    variant: "primary",
  },
};

const hero: HeroSection = {
  eyebrow: "Email Marketing",
  headline: "B2B Email Campaigns Built for Engagement, Not Inbox Volume",
  subhead:
    "We plan, segment, and execute targeted email campaigns that reach the right contacts with the right message — and measure engagement the way your revenue team actually cares about.",
  primaryCta: { label: "Book a Discovery Call", href: "/contact", variant: "primary" },
  secondaryCta: { label: "Explore Related Services", href: "#related-services", variant: "text" },
  visual: {
    src: "/images/services/email-marketing-hero.webp",
    alt: "Modern B2B email marketing campaign reaching segmented professional audiences.",
  },
};

const businessChallenges: ChallengeSection = {
  heading: "The Challenges We Solve",
  subheading:
    "Most B2B email programs are optimized for send volume — which is exactly why so many of them stop working.",
  items: [
    {
      id: "challenge-generic-segmentation",
      icon: "filter",
      label: "Weak or No Segmentation",
      description:
        "Broad, one-size-fits-all sends underperform because the message doesn't match the recipient's role or stage.",
    },
    {
      id: "challenge-declining-engagement",
      icon: "trending-up",
      label: "Declining Open and Reply Rates",
      description:
        "Volume-first sending habits erode deliverability and engagement over time, making every future send less effective.",
    },
    {
      id: "challenge-no-nurture-structure",
      icon: "refresh-cw",
      label: "No Structured Nurture Path",
      description:
        "Prospects who aren't ready today get a single email instead of a sequence built to stay relevant until they are.",
    },
    {
      id: "challenge-limited-measurement",
      icon: "bar-chart",
      label: "Limited Campaign Measurement",
      description:
        "Without clear reporting, it's hard to know which messaging and segments are actually driving results.",
    },
  ],
};

const ourSolution: SolutionSection = {
  heading: "Our Solution",
  subheading:
    "We run email as a targeted engagement channel, not a broadcast tool — every send is built around a defined segment, a specific message, and a measurable outcome.",
  pillars: [
    {
      id: "pillar-audience-segmentation",
      icon: "filter",
      title: "Audience Segmentation",
      description:
        "Campaigns are built around specific segments defined by role, industry, and buying stage — not a single generic list.",
    },
    {
      id: "pillar-message-strategy",
      icon: "mail",
      title: "Message Strategy",
      description:
        "Copy and sequencing are built around what actually earns a reply from a specific buyer, not a template.",
    },
    {
      id: "pillar-performance-tracking",
      icon: "bar-chart",
      title: "Measurable Campaign Execution",
      description:
        "Every campaign is tracked against engagement and reply metrics, so decisions are based on what's working.",
    },
  ],
  cta: { label: "See How This Works", href: "#service-process", variant: "text" },
};

const businessOutcomes: BusinessOutcomeSection = {
  heading: "Business Outcomes",
  subheading:
    "A working email program shows up as engagement your sales team can act on, not a vanity open-rate chart.",
  outcomes: [
    {
      id: "outcome-higher-engagement",
      icon: "trending-up",
      label: "Higher Engagement Rates",
      description: "Segmented, relevant messaging earns more opens and replies than generic broadcast sends.",
    },
    {
      id: "outcome-nurtured-pipeline",
      icon: "refresh-cw",
      label: "A Nurtured Pipeline",
      description: "Prospects who aren't ready yet stay engaged through a structured, ongoing sequence.",
    },
    {
      id: "outcome-sales-ready-replies",
      icon: "mail",
      label: "Sales-Ready Replies",
      description: "Engaged prospects are flagged and routed to your team at the right moment.",
    },
  ],
  cta: { label: "Talk to a Strategist", href: "/contact", variant: "outline" },
};

const whoThisIsFor: ICPSection = {
  heading: "Who This Is For",
  intro: "Built for teams that want email working as a targeted engagement channel, not a volume broadcast.",
  personas: [
    { id: "persona-demand-gen-manager", title: "Demand Generation Manager" },
    { id: "persona-marketing-director", title: "Marketing Director" },
    { id: "persona-vp-sales", title: "VP Sales" },
    { id: "persona-founder-ceo", title: "Founder / CEO" },
  ],
  companySizeRange: "10–5,000 Employees",
  industries: ["healthcare", "saas", "it-services"],
};

const serviceProcess: ProcessSection = {
  heading: "Our Process",
  subheading: "Every campaign follows the same structure — segment, message, send, and measure.",
  steps: [
    {
      id: "process-discovery",
      order: 1,
      label: "Discovery",
      description: "Understand your audience, goals, and existing email performance.",
    },
    {
      id: "process-segmentation",
      order: 2,
      label: "Segmentation",
      description: "Build audience segments based on role, industry, and buying stage.",
    },
    {
      id: "process-messaging",
      order: 3,
      label: "Messaging & Sequencing",
      description: "Craft campaign copy and sequencing tailored to each segment.",
    },
    {
      id: "process-execution",
      order: 4,
      label: "Execution",
      description: "Campaigns are launched, monitored, and adjusted in real time.",
    },
    {
      id: "process-reporting",
      order: 5,
      label: "Reporting & Optimization",
      description: "Performance is reported and used to refine future sends.",
    },
  ],
};

const deliverables: DeliverablesSection = {
  heading: "What You Receive",
  items: [
    { id: "deliverable-segmented-campaigns", icon: "filter", label: "Segmented Campaign Builds" },
    { id: "deliverable-email-sequences", icon: "mail", label: "Managed Email Sequences" },
    { id: "deliverable-performance-reports", icon: "bar-chart", label: "Campaign Performance Reports" },
    { id: "deliverable-engaged-prospect-list", icon: "list-checks", label: "Engaged Prospect Handoff List" },
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
      slug: "content-syndication",
      name: "Content Syndication",
      outcomeLine: "Expand content reach to the right buyers",
      icon: "file-text",
    },
    {
      slug: "appointment-setting",
      name: "Appointment Setting",
      outcomeLine: "Turn engagement into booked meetings",
      icon: "calendar",
    },
  ],
};

const finalCta: CTASection = {
  heading: "Ready for Email That Actually Engages?",
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

export const emailMarketingConfig: ServicePageConfig = {
  schemaVersion: 1,
  slug: "email-marketing",
  category: "Marketing Services",
  status: "published",
  seo: {
    title: "B2B Email Marketing Services | SalesFluance",
    description:
      "SalesFluance delivers B2B email marketing services built on segmentation, messaging strategy, and measurable engagement — not inbox volume.",
    canonical: "/services/email-marketing",
    keywords: ["B2B email marketing services"],
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
