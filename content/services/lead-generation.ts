/**
 * SalesFluance Content Layer — Lead Generation
 *
 * This file is pure data. It has no dependency on React, Next.js, or any
 * rendering concern — it can be imported, validated, and unit-tested in
 * complete isolation from the UI layer, and it is structured so that a
 * future headless CMS could produce this exact same shape as an API
 * response with no change to how the engine consumes it.
 *
 * CONTENT STATUS: All copy below is structured placeholder content authored
 * to match SalesFluance's approved positioning (outcome-first, consultative,
 * enterprise-grade — never feature-led). It is NOT final marketing copy.
 * `status: "draft"` below is what keeps this config out of production
 * builds until Founder review promotes it to "published" — see
 * ContentProvenance / ContentStatus in types/shared.ts.
 */

import type {
  ChallengeSection,
  CTASection,
  DeliverablesSection,
  FAQSection,
  HeroSection,
  ICPSection,
  IndustrySection,
  MetricsSection,
  OverviewSection,
  ProcessSection,
  RelatedServiceSection,
  SectionEntry,
  ServicePageConfig,
  SolutionSection,
  TechnologySection,
  TrustIndicatorsSection,
  WhySalesFluanceSection,
  BusinessOutcomeSection,
} from "../../types/service";
import type { Navigation } from "../../types/shared";

// ---------------------------------------------------------------------------
// Section data — one constant per section, composed into `sections` below.
// Splitting these out (rather than inlining an anonymous array) keeps each
// section independently readable, diffable, and easy to unit test.
// ---------------------------------------------------------------------------

const utilityBar: Navigation = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Lead Generation" },
  ],
  stickyCta: {
    label: "Book a Discovery Call",
    href: "/contact",
    variant: "primary",
  },
};

const hero: HeroSection = {
  eyebrow: "Demand Generation",
  headline: "Build a Predictable Sales Pipeline",
  subhead:
    "[PLACEHOLDER — Founder review] SalesFluance identifies, researches, and engages qualified decision-makers so your team spends time closing, not prospecting.",
  primaryCta: { label: "Book a Discovery Call", href: "/contact", variant: "primary" },
  secondaryCta: { label: "Explore Related Services", href: "#related-services", variant: "text" },
};

const trustIndicators: TrustIndicatorsSection = {
  // Intentionally empty — logos/stats populate once real client proof exists.
  // The section component self-hides when both arrays are empty/undefined.
};

const businessChallenges: ChallengeSection = {
  heading: "The Challenges We Solve",
  subheading: "[PLACEHOLDER — Founder review]",
  items: [
    {
      id: "challenge-inconsistent-pipeline",
      icon: "trending-up",
      label: "Inconsistent Pipeline",
      description:
        "[PLACEHOLDER] Deal flow depends on inbound luck instead of a repeatable, forecastable process.",
    },
    {
      id: "challenge-reaching-decision-makers",
      icon: "users",
      label: "Difficulty Reaching Decision-Makers",
      description:
        "[PLACEHOLDER] Outreach lands with gatekeepers, not the CEOs, VP Sales, and RevOps leaders who actually buy.",
    },
    {
      id: "challenge-limited-resources",
      icon: "clock",
      label: "Limited Internal Sales Resources",
      description:
        "[PLACEHOLDER] Internal teams are stretched between closing existing deals and sourcing new ones.",
    },
    {
      id: "challenge-poor-data",
      icon: "database",
      label: "Unreliable Prospect Data",
      description:
        "[PLACEHOLDER] Stale or unverified contact data quietly erodes outreach performance before a campaign even starts.",
    },
  ],
};

const ourSolution: SolutionSection = {
  heading: "Our Solution",
  subheading: "[PLACEHOLDER — Founder review]",
  pillars: [
    {
      id: "pillar-strategy-first",
      icon: "target",
      title: "Strategy Before Execution",
      description:
        "[PLACEHOLDER] Every campaign starts with your ICP, buying signals, and business goals — not a generic contact list.",
    },
    {
      id: "pillar-verified-data",
      icon: "shield-check",
      title: "Human-Verified Data",
      description:
        "[PLACEHOLDER] Every contact is researched and verified before outreach begins, not pulled from a stale database.",
    },
    {
      id: "pillar-multichannel",
      icon: "zap",
      title: "Multi-Channel Engagement",
      description:
        "[PLACEHOLDER] Email, LinkedIn, and voice outreach are coordinated as one strategy, not run in isolation.",
    },
  ],
  cta: { label: "See How This Works", href: "#service-process", variant: "text" },
};

const serviceOverview: OverviewSection = {
  heading: "Service Overview",
  paragraphs: [
    "[PLACEHOLDER — Founder review] SalesFluance Lead Generation combines ICP research, verified contact data, and structured outreach to put qualified decision-makers in front of your sales team on a predictable cadence.",
    "[PLACEHOLDER] This is not a one-time list purchase or an isolated email blast — it is an ongoing, managed pipeline-generation engine built around your specific market.",
  ],
  bullets: [
    "ICP-aligned prospect research",
    "Multi-channel outreach (email, LinkedIn, voice)",
    "Human-verified contact data",
    "Weekly performance reporting",
  ],
};

const whySalesFluance: WhySalesFluanceSection = {
  heading: "Why SalesFluance",
  subheading: "[PLACEHOLDER — Founder review]",
  rows: [
    {
      dimension: "Approach",
      traditionalAgency: "Volume-based outreach, generic messaging",
      salesFluance: "Strategy-led, ICP-specific messaging",
    },
    {
      dimension: "Data",
      traditionalAgency: "Bulk, unverified contact lists",
      salesFluance: "Human-verified, continuously refreshed data",
    },
    {
      dimension: "Reporting",
      traditionalAgency: "Opaque activity metrics",
      salesFluance: "Transparent, business-outcome reporting",
    },
    {
      dimension: "Relationship",
      traditionalAgency: "Transactional, campaign-by-campaign",
      salesFluance: "Long-term growth partnership",
    },
  ],
};

const businessOutcomes: BusinessOutcomeSection = {
  heading: "Business Outcomes",
  subheading: "[PLACEHOLDER — Founder review]",
  outcomes: [
    {
      id: "outcome-pipeline-growth",
      icon: "trending-up",
      label: "Pipeline Growth",
      description: "[PLACEHOLDER] A consistent flow of qualified opportunities entering your pipeline.",
    },
    {
      id: "outcome-qualified-meetings",
      icon: "calendar",
      label: "Qualified Meetings",
      description: "[PLACEHOLDER] More conversations with decision-makers who match your ICP.",
    },
    {
      id: "outcome-conversion-rate",
      icon: "bar-chart",
      label: "Improved Conversion Rates",
      description: "[PLACEHOLDER] Better-fit leads mean higher close rates further down the funnel.",
    },
    {
      id: "outcome-sales-cycle",
      icon: "clock",
      label: "Shorter Sales Cycles",
      description: "[PLACEHOLDER] Pre-qualified opportunities move through your funnel faster.",
    },
    {
      id: "outcome-revenue-growth",
      icon: "award",
      label: "Revenue Growth",
      description: "[PLACEHOLDER] A predictable pipeline that compounds into predictable revenue.",
    },
  ],
  cta: { label: "Talk to a Strategist", href: "/contact", variant: "outline" },
};

const whoThisIsFor: ICPSection = {
  heading: "Who This Is For",
  intro: "[PLACEHOLDER] Built for growth-stage and enterprise teams ready to scale outbound predictably.",
  personas: [
    { id: "persona-founder-ceo", title: "Founder / CEO" },
    { id: "persona-vp-sales", title: "VP Sales" },
    { id: "persona-sales-director", title: "Sales Director" },
    { id: "persona-demand-gen-manager", title: "Demand Generation Manager" },
    { id: "persona-revops-manager", title: "Revenue Operations Manager" },
  ],
  companySizeRange: "10–5,000 Employees",
  industries: ["healthcare", "saas", "it-services"],
};

const serviceProcess: ProcessSection = {
  heading: "Our Process",
  subheading: "[PLACEHOLDER — Founder review]",
  steps: [
    {
      id: "process-discovery",
      order: 1,
      label: "Discovery",
      description: "[PLACEHOLDER] Understand your business objectives, target audience, and existing sales process.",
    },
    {
      id: "process-research",
      order: 2,
      label: "Research",
      description: "[PLACEHOLDER] ICP development, market research, and data strategy tailored to your business.",
    },
    {
      id: "process-planning",
      order: 3,
      label: "Planning",
      description: "[PLACEHOLDER] Campaign strategy, channel selection, messaging, timeline, and KPIs are defined.",
    },
    {
      id: "process-execution",
      order: 4,
      label: "Execution",
      description: "[PLACEHOLDER] Lead research and multi-channel outreach begin against the agreed plan.",
    },
    {
      id: "process-quality-assurance",
      order: 5,
      label: "Quality Assurance",
      description: "[PLACEHOLDER] Every lead is verified and quality-checked before it reaches your team.",
    },
    {
      id: "process-growth",
      order: 6,
      label: "Growth",
      description: "[PLACEHOLDER] Ongoing performance review, optimization, and scaling of what's working.",
    },
  ],
};

const deliverables: DeliverablesSection = {
  heading: "What You Receive",
  items: [
    { id: "deliverable-verified-contacts", icon: "shield-check", label: "Verified Prospect Contacts" },
    { id: "deliverable-outreach-campaigns", icon: "mail", label: "Managed Outreach Campaigns" },
    { id: "deliverable-weekly-reporting", icon: "bar-chart", label: "Weekly Performance Reports" },
    { id: "deliverable-crm-integration", icon: "database", label: "CRM-Ready Lead Records" },
  ],
};

const technologyStack: TechnologySection = {
  heading: "Technology We Work Within",
  subheading: "[PLACEHOLDER — Founder review]",
  groups: [
    {
      category: "CRM",
      tools: [
        { name: "HubSpot", icon: "layers" },
        { name: "Salesforce", icon: "cpu" },
      ],
    },
    {
      category: "Outreach",
      tools: [
        { name: "LinkedIn Sales Navigator", icon: "link" },
        { name: "Outreach", icon: "message-square" },
      ],
    },
    {
      category: "Research",
      tools: [
        { name: "Apollo", icon: "search" },
        { name: "ZoomInfo", icon: "globe" },
      ],
    },
    {
      category: "Reporting",
      tools: [{ name: "Looker Studio", icon: "pie-chart" }],
    },
  ],
};

const industriesServed: IndustrySection = {
  heading: "Industries We Serve",
  industries: [
    {
      slug: "healthcare",
      name: "Healthcare",
      description: "[PLACEHOLDER] Reaching busy healthcare decision-makers with verified, compliant outreach.",
      icon: "heart-pulse",
    },
    {
      slug: "saas",
      name: "SaaS",
      description: "[PLACEHOLDER] Scalable pipeline generation built for recurring-revenue growth.",
      icon: "cpu",
    },
    {
      slug: "it-services",
      name: "IT Services",
      description: "[PLACEHOLDER] Enterprise-grade outreach for long, multi-stakeholder buying cycles.",
      icon: "building",
    },
  ],
};

const successMetrics: MetricsSection = {
  heading: "Success Metrics & Reporting",
  reportingCadence: "Reported Monthly",
  metrics: [
    { id: "metric-qualified-leads", label: "Qualified Leads" },
    { id: "metric-meetings-booked", label: "Meetings Booked" },
    { id: "metric-pipeline-growth", label: "Pipeline Growth" },
    { id: "metric-conversion-rate", label: "Conversion Rate" },
  ],
};

const faqs: FAQSection = {
  heading: "Frequently Asked Questions",
  items: [
    {
      id: "faq-timeline",
      question: "How long until we see qualified leads?",
      answer: "[PLACEHOLDER — Founder review]",
    },
    {
      id: "faq-data-source",
      question: "Where does your contact data come from?",
      answer: "[PLACEHOLDER — Founder review]",
    },
    {
      id: "faq-crm-integration",
      question: "Does this integrate with our existing CRM?",
      answer: "[PLACEHOLDER — Founder review]",
    },
    {
      id: "faq-contract-length",
      question: "Is there a minimum engagement length?",
      answer: "[PLACEHOLDER — Founder review]",
    },
    {
      id: "faq-industries",
      question: "Do you only work with the industries listed here?",
      answer: "[PLACEHOLDER — Founder review]",
    },
  ],
};

const relatedServices: RelatedServiceSection = {
  heading: "Related Services",
  services: [
    {
      slug: "appointment-setting",
      name: "Appointment Setting",
      outcomeLine: "Increase qualified sales meetings",
      icon: "calendar",
    },
    {
      slug: "account-based-marketing",
      name: "Account-Based Marketing",
      outcomeLine: "Win high-value target accounts",
      icon: "target",
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
  heading: "Ready to Build a Predictable Pipeline?",
  reassurance:
    "A 15-minute conversation about your goals — no pressure, no obligation.",
  primaryCta: { label: "Book a Discovery Call", href: "/contact", variant: "primary" },
  secondaryCta: { label: "Explore Our Process", href: "/process", variant: "text" },
};

// ---------------------------------------------------------------------------
// Ordered section list — this ordering is the approved Information
// Architecture (v2). It is data, not layout code: the engine renders
// sections strictly in this order, and reordering the page means editing
// this array, never a component.
// ---------------------------------------------------------------------------

const sections: SectionEntry[] = [
  { id: "section-utility-bar", type: "utilityBar", data: utilityBar },
  { id: "section-hero", type: "hero", data: hero },
  { id: "section-trust-indicators", type: "trustIndicators", data: trustIndicators },
  { id: "section-business-challenges", type: "businessChallenges", data: businessChallenges },
  { id: "section-our-solution", type: "ourSolution", data: ourSolution },
  { id: "section-service-overview", type: "serviceOverview", data: serviceOverview },
  { id: "section-why-salesfluance", type: "whySalesFluance", data: whySalesFluance },
  { id: "section-business-outcomes", type: "businessOutcomes", data: businessOutcomes },
  { id: "section-who-this-is-for", type: "whoThisIsFor", data: whoThisIsFor },
  { id: "section-service-process", type: "serviceProcess", data: serviceProcess },
  { id: "section-deliverables", type: "deliverables", data: deliverables },
  { id: "section-technology-stack", type: "technologyStack", data: technologyStack },
  { id: "section-industries-served", type: "industriesServed", data: industriesServed },
  { id: "section-success-metrics", type: "successMetrics", data: successMetrics },
  { id: "section-faqs", type: "faqs", data: faqs },
  { id: "section-related-services", type: "relatedServices", data: relatedServices },
  { id: "section-final-cta", type: "finalCta", data: finalCta },
];

// ---------------------------------------------------------------------------
// ServicePageConfig — the single exported object for this service.
// ---------------------------------------------------------------------------

export const leadGenerationConfig: ServicePageConfig = {
  schemaVersion: 1,
  slug: "lead-generation",
  category: "Demand Generation",
  status: "draft",
  seo: {
    title: "Lead Generation Services | SalesFluance",
    description:
      "[PLACEHOLDER — Founder review] Build a predictable B2B sales pipeline with verified data, strategic outreach, and qualified opportunities from SalesFluance.",
    canonical: "/services/lead-generation",
    keywords: ["B2B lead generation", "sales pipeline", "demand generation"],
  },
  sections,
  provenance: {
    source: "human",
    status: "draft",
    authoredBy: "Product Engineering (placeholder copy — pending Founder review)",
    lastEditedAt: "2026-07-29",
  },
};