/**
 * SalesFluance Content Layer — Telemarketing
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
    { label: "Telemarketing" },
  ],
  stickyCta: {
    label: "Book a Discovery Call",
    href: "/contact",
    variant: "primary",
  },
};

const hero: HeroSection = {
  eyebrow: "Telemarketing",
  headline: "Real Conversations With the Contacts Who Actually Matter",
  subhead:
    "Professional B2B callers qualify interest, confirm fit, and move the right prospects toward your sales team — a human on the line, working from a verified list, not a script blasted at a database.",
  primaryCta: { label: "Book a Discovery Call", href: "/contact", variant: "primary" },
  secondaryCta: { label: "Explore Related Services", href: "#related-services", variant: "text" },
  visual: {
    src: "/images/services/telemarketing-hero.webp",
    alt: "Professional B2B sales representative conducting a focused business conversation.",
  },
};

const businessChallenges: ChallengeSection = {
  heading: "The Challenges We Solve",
  subheading:
    "Most outbound calling programs fail for the same reason: the list is wrong, the caller has no context, and the conversation goes nowhere before it starts.",
  items: [
    {
      id: "challenge-stale-call-lists",
      icon: "database",
      label: "Stale or Unverified Call Lists",
      description:
        "Outdated numbers and titles mean calls land with the wrong person, or no one at all, before a conversation can even begin.",
    },
    {
      id: "challenge-untrained-callers",
      icon: "message-square",
      label: "Scripted, Untrained Calling",
      description:
        "Generic scripts read at a prospect don't hold attention or build the trust a real qualifying conversation needs.",
    },
    {
      id: "challenge-no-followup-structure",
      icon: "refresh-cw",
      label: "No Structured Follow-Up",
      description:
        "Promising conversations stall because there's no consistent cadence for calling back, following up, or re-engaging.",
    },
    {
      id: "challenge-internal-bandwidth",
      icon: "clock",
      label: "Limited Internal Calling Capacity",
      description:
        "Sales teams don't have the hours to run a disciplined outbound calling motion alongside closing active deals.",
    },
  ],
};

const ourSolution: SolutionSection = {
  heading: "Our Solution",
  subheading:
    "We run telemarketing as a qualification discipline, not a volume game — every call is made by a trained caller working from verified data and a clear qualification framework.",
  pillars: [
    {
      id: "pillar-trained-callers",
      icon: "users",
      title: "Trained B2B Callers",
      description:
        "Experienced callers who understand your offer, ask real qualifying questions, and know when to escalate a conversation.",
    },
    {
      id: "pillar-verified-contact-data",
      icon: "shield-check",
      title: "Verified Contact Data",
      description:
        "Every number and contact is researched and checked before it's dialed, not pulled from a stale database.",
    },
    {
      id: "pillar-structured-followup",
      icon: "refresh-cw",
      title: "Structured Follow-Up Cadence",
      description:
        "A disciplined calling and follow-up sequence keeps warm conversations from going cold.",
    },
  ],
  cta: { label: "See How This Works", href: "#service-process", variant: "text" },
};

const businessOutcomes: BusinessOutcomeSection = {
  heading: "Business Outcomes",
  subheading:
    "The value of a calling program shows up in the quality of the conversations it produces, not the number of dials logged.",
  outcomes: [
    {
      id: "outcome-qualified-conversations",
      icon: "message-square",
      label: "Qualified Conversations",
      description: "Real conversations with contacts who match your ICP and have a genuine reason to talk.",
    },
    {
      id: "outcome-sales-ready-handoffs",
      icon: "handshake",
      label: "Sales-Ready Handoffs",
      description: "Qualified prospects move to your sales team with full context, not a cold transfer.",
    },
    {
      id: "outcome-consistent-outreach",
      icon: "trending-up",
      label: "Consistent Outbound Coverage",
      description: "A steady calling cadence across your target accounts, sustained week over week.",
    },
  ],
  cta: { label: "Talk to a Strategist", href: "/contact", variant: "outline" },
};

const whoThisIsFor: ICPSection = {
  heading: "Who This Is For",
  intro: "Built for teams that want a disciplined outbound calling motion without building and managing it in-house.",
  personas: [
    { id: "persona-vp-sales", title: "VP Sales" },
    { id: "persona-sales-director", title: "Sales Director" },
    { id: "persona-demand-gen-manager", title: "Demand Generation Manager" },
    { id: "persona-founder-ceo", title: "Founder / CEO" },
  ],
  companySizeRange: "10–5,000 Employees",
  industries: ["healthcare", "saas", "it-services"],
};

const serviceProcess: ProcessSection = {
  heading: "Our Process",
  subheading: "Every calling campaign follows the same disciplined structure, from list to live conversation.",
  steps: [
    {
      id: "process-discovery",
      order: 1,
      label: "Discovery",
      description: "Define your target audience, qualification criteria, and desired outcome for every call.",
    },
    {
      id: "process-list-preparation",
      order: 2,
      label: "List Preparation",
      description: "Research and verify the contacts and numbers that will actually be called.",
    },
    {
      id: "process-calling-framework",
      order: 3,
      label: "Calling Framework",
      description: "Build the qualifying questions and conversation framework callers work from.",
    },
    {
      id: "process-execution",
      order: 4,
      label: "Execution",
      description: "Calls are placed, conversations are logged, and qualified prospects are flagged.",
    },
    {
      id: "process-handoff",
      order: 5,
      label: "Handoff & Reporting",
      description: "Qualified prospects and call outcomes are delivered to your team on a regular cadence.",
    },
  ],
};

const deliverables: DeliverablesSection = {
  heading: "What You Receive",
  items: [
    { id: "deliverable-qualified-prospects", icon: "check-circle", label: "Qualified Prospect Conversations" },
    { id: "deliverable-call-outcomes", icon: "file-text", label: "Call Outcome Reports" },
    { id: "deliverable-verified-lists", icon: "shield-check", label: "Verified Calling Lists" },
    { id: "deliverable-crm-updates", icon: "database", label: "CRM-Ready Records & Notes" },
  ],
};

const relatedServices: RelatedServiceSection = {
  heading: "Related Services",
  services: [
    {
      slug: "appointment-setting",
      name: "Appointment Setting",
      outcomeLine: "Turn conversations into booked meetings",
      icon: "calendar",
    },
    {
      slug: "lead-generation",
      name: "Lead Generation",
      outcomeLine: "Build a predictable B2B sales pipeline",
      icon: "trending-up",
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
  heading: "Ready for Outbound Calling Done Right?",
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

export const telemarketingConfig: ServicePageConfig = {
  schemaVersion: 1,
  slug: "telemarketing",
  category: "Sales Support",
  status: "published",
  seo: {
    title: "B2B Telemarketing Services | SalesFluance",
    description:
      "Professional B2B telemarketing that qualifies prospects and drives real sales conversations — verified data, trained callers, structured follow-up.",
    canonical: "/services/telemarketing",
    keywords: ["B2B telemarketing services"],
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
