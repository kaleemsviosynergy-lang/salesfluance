/**
 * SalesFluance Content Layer — Appointment Setting
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
    { label: "Appointment Setting" },
  ],
  stickyCta: {
    label: "Book a Discovery Call",
    href: "/contact",
    variant: "primary",
  },
};

const hero: HeroSection = {
  eyebrow: "Appointment Setting",
  headline: "Calendar-Ready Meetings With the People Who Can Say Yes",
  subhead:
    "We research each account, confirm the right decision-maker, and secure a qualified meeting slot directly on your team's calendar — so your reps spend their time selling, not chasing.",
  primaryCta: { label: "Book a Discovery Call", href: "/contact", variant: "primary" },
  secondaryCta: { label: "Explore Related Services", href: "#related-services", variant: "text" },
  visual: {
    src: "/images/services/appointment-setting-hero.webp",
    alt: "Professional B2B meeting scene with a subtle scheduling interface highlighting a confirmed sales conversation.",
  },
};

const businessChallenges: ChallengeSection = {
  heading: "The Challenges We Solve",
  subheading:
    "Booking a meeting is easy. Booking a meeting with someone who fits, has authority, and shows up ready to talk is the part most teams struggle with.",
  items: [
    {
      id: "challenge-no-show-meetings",
      icon: "calendar",
      label: "Low-Quality, No-Show Meetings",
      description:
        "Meetings get booked with the wrong contact or the wrong context, so they cancel, no-show, or go nowhere once they happen.",
    },
    {
      id: "challenge-rep-time-on-prospecting",
      icon: "clock",
      label: "Reps Spending Time on Prospecting, Not Selling",
      description:
        "Every hour a closer spends chasing a calendar slot is an hour not spent advancing a deal that's already in motion.",
    },
    {
      id: "challenge-inconsistent-outreach",
      icon: "trending-up",
      label: "Inconsistent Outreach Cadence",
      description:
        "Sporadic, unscripted follow-up means promising conversations go cold before a meeting ever gets confirmed.",
    },
    {
      id: "challenge-gatekeeper-access",
      icon: "users",
      label: "Difficulty Reaching Actual Decision-Makers",
      description:
        "Generic outreach lands with gatekeepers instead of the buyers who can actually approve a next step.",
    },
  ],
};

const ourSolution: SolutionSection = {
  heading: "Our Solution",
  subheading:
    "We treat a meeting as the output of a qualification process, not the goal of a cold-calling script — so every slot on your calendar has already earned its place there.",
  pillars: [
    {
      id: "pillar-decision-maker-access",
      icon: "target",
      title: "Verified Decision-Maker Access",
      description:
        "We confirm the right title, authority, and context before a single outreach touch goes out.",
    },
    {
      id: "pillar-structured-qualification",
      icon: "list-checks",
      title: "Structured Qualification",
      description:
        "Every prospect is qualified against your criteria before a meeting is offered, not after it's booked.",
    },
    {
      id: "pillar-seamless-handoff",
      icon: "handshake",
      title: "Seamless Sales-Team Handoff",
      description:
        "Meeting notes, context, and next steps arrive with the invite, so your reps walk in prepared, not cold.",
    },
  ],
  cta: { label: "See How This Works", href: "#service-process", variant: "text" },
};

const businessOutcomes: BusinessOutcomeSection = {
  heading: "Business Outcomes",
  subheading:
    "The measure of a good appointment-setting program isn't how many invites go out — it's how many of them turn into a real second conversation.",
  outcomes: [
    {
      id: "outcome-calendar-ready-meetings",
      icon: "calendar",
      label: "Calendar-Ready Meetings",
      description: "Qualified meetings land directly on your reps' calendars, confirmed and context-ready.",
    },
    {
      id: "outcome-higher-show-rates",
      icon: "check-circle",
      label: "Higher Show Rates",
      description: "Structured confirmation and follow-up reduce no-shows and last-minute cancellations.",
    },
    {
      id: "outcome-rep-time-back",
      icon: "clock",
      label: "More Selling Time for Your Team",
      description: "Reps spend their week in conversations, not chasing calendars.",
    },
    {
      id: "outcome-pipeline-consistency",
      icon: "trending-up",
      label: "A Consistent Meeting Cadence",
      description: "A steady, forecastable flow of qualified conversations instead of feast-or-famine weeks.",
    },
  ],
  cta: { label: "Talk to a Strategist", href: "/contact", variant: "outline" },
};

const whoThisIsFor: ICPSection = {
  heading: "Who This Is For",
  intro:
    "Built for sales teams that want an outsourced SDR motion filling their calendar with qualified conversations — not a bigger pile of unqualified ones.",
  personas: [
    { id: "persona-vp-sales", title: "VP Sales" },
    { id: "persona-sales-director", title: "Sales Director" },
    { id: "persona-account-executive-lead", title: "Account Executive Team Lead" },
    { id: "persona-founder-ceo", title: "Founder / CEO" },
  ],
  companySizeRange: "10–5,000 Employees",
  industries: ["healthcare", "saas", "it-services"],
};

const serviceProcess: ProcessSection = {
  heading: "Our Process",
  subheading: "Every meeting we book has gone through the same qualification path — no shortcuts to hit a booking target.",
  steps: [
    {
      id: "process-discovery",
      order: 1,
      label: "Discovery",
      description: "Define your ideal prospect, qualification criteria, and what a good meeting looks like.",
    },
    {
      id: "process-research",
      order: 2,
      label: "Research",
      description: "Identify and verify the right accounts and decision-makers within them.",
    },
    {
      id: "process-outreach",
      order: 3,
      label: "Outreach & Qualification",
      description: "Structured, multi-touch outreach qualifies interest and fit before a meeting is offered.",
    },
    {
      id: "process-scheduling",
      order: 4,
      label: "Scheduling & Confirmation",
      description: "Meetings are booked, confirmed, and reconfirmed to protect your reps' time.",
    },
    {
      id: "process-handoff",
      order: 5,
      label: "Handoff",
      description: "Full context and notes are delivered to your team ahead of every meeting.",
    },
  ],
};

const deliverables: DeliverablesSection = {
  heading: "What You Receive",
  items: [
    { id: "deliverable-qualified-meetings", icon: "calendar", label: "Qualified, Calendar-Ready Meetings" },
    { id: "deliverable-prospect-research", icon: "search", label: "Decision-Maker Research Records" },
    { id: "deliverable-meeting-notes", icon: "file-text", label: "Pre-Meeting Context & Notes" },
    { id: "deliverable-crm-records", icon: "database", label: "CRM-Ready Prospect Records" },
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
      slug: "account-based-marketing",
      name: "Account-Based Marketing",
      outcomeLine: "Win high-value target accounts",
      icon: "target",
    },
    {
      slug: "demand-generation",
      name: "Demand Generation",
      outcomeLine: "Create and capture market demand",
      icon: "sparkles",
    },
    {
      slug: "telemarketing",
      name: "Telemarketing",
      outcomeLine: "Real conversations with qualified prospects",
      icon: "phone",
    },
  ],
};

const finalCta: CTASection = {
  heading: "Ready to Fill Your Calendar With the Right Conversations?",
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

export const appointmentSettingConfig: ServicePageConfig = {
  schemaVersion: 1,
  slug: "appointment-setting",
  category: "Sales Support",
  status: "published",
  seo: {
    title: "B2B Appointment Setting Company | SalesFluance",
    description:
      "SalesFluance is a B2B appointment setting company delivering qualified, calendar-ready meetings with verified decision-makers — outsourced SDR support without the hiring cycle.",
    canonical: "/services/appointment-setting",
    keywords: ["B2B appointment setting company", "outsourced SDR services"],
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
