/**
 * SalesFluance Content Layer — Demand Generation
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
    { label: "Demand Generation" },
  ],
  stickyCta: {
    label: "Book a Discovery Call",
    href: "/contact",
    variant: "primary",
  },
};

const hero: HeroSection = {
  eyebrow: "Demand Generation",
  headline: "Create Demand Before Your Pipeline Needs It",
  subhead:
    "SalesFluance builds market awareness, educates your target accounts, and creates genuine buying intent long before a prospect ever talks to sales — because a pipeline built entirely on capture, with nothing feeding it from above, eventually runs out of demand to capture.",
  primaryCta: { label: "Book a Discovery Call", href: "/contact", variant: "primary" },
  secondaryCta: { label: "Explore Related Services", href: "#related-services", variant: "text" },
};

const trustIndicators: TrustIndicatorsSection = {
  // Intentionally empty — logos/stats populate once real client proof exists.
  // The section component self-hides when both arrays are empty/undefined.
};

const businessChallenges: ChallengeSection = {
  heading: "The Challenges We Solve",
  subheading:
    "Most B2B organizations run outbound and inbound as if they were the same motion measured two different ways. They're not. Outbound and conversion tactics assume a prospect already knows they have a problem worth solving — but most of your market doesn't know that yet, and no amount of sequencing fixes an audience that isn't ready. We built our Demand Generation practice around a different observation: companies with the most durable pipeline aren't the ones with the sharpest closers, they're the ones who spent the two quarters before that closer's first call making sure the right people already understood why the problem mattered. Below are the four patterns we see most often in organizations that have a capture engine but no engine feeding it.",
  items: [
    {
      id: "challenge-low-market-awareness",
      icon: "eye",
      label: "Low Market Awareness",
      description:
        "Your target accounts don't recognize your category, your name, or the cost of the problem you solve — so every outbound touch starts from zero instead of from familiarity.",
    },
    {
      id: "challenge-unready-buyers",
      icon: "calendar",
      label: "Buyers Aren't Ready When You Reach Them",
      description:
        "Prospects are contacted before they've been educated on the problem, so even a well-targeted message lands as an interruption instead of a relevant next step.",
    },
    {
      id: "challenge-sales-marketing-gap",
      icon: "workflow",
      label: "Marketing and Sales Aren't Building the Same Pipeline",
      description:
        "Marketing generates activity it can report on, sales works leads it doesn't trust, and neither side agrees on what \"demand\" actually means — so credit and accountability both get lost.",
    },
    {
      id: "challenge-no-top-of-funnel-engine",
      icon: "filter",
      label: "No Consistent Top-of-Funnel Engine",
      description:
        "Pipeline depends on whichever campaign ran last quarter instead of a standing system that continuously builds awareness and intent — so growth stalls the moment outbound alone can't keep up.",
    },
  ],
};

const ourSolution: SolutionSection = {
  heading: "Our Solution",
  subheading:
    "We don't treat Demand Generation as a content calendar or a paid media line item — it's the upstream discipline that determines whether everything downstream of it, including Lead Generation, has anything real to work with. Our approach starts by defining what \"aware\" and \"educated\" actually mean for your specific buying committee, then builds sustained, multi-touch programs that move target accounts from not knowing you exist to actively wanting the conversation. It's a longer runway than outbound alone, and it's the reason outbound alone eventually plateaus.",
  pillars: [
    {
      id: "pillar-market-education",
      icon: "file-text",
      title: "Market Education First",
      description:
        "Programs are built around the problems your buyers already have, not products you want to sell — awareness earns attention before outreach asks for it.",
    },
    {
      id: "pillar-multi-touch-nurture",
      icon: "refresh-cw",
      title: "Sustained, Multi-Touch Nurture",
      description:
        "Target accounts are engaged across content, channel, and time — not a single campaign burst that fades the moment it ends.",
    },
    {
      id: "pillar-intent-informed-timing",
      icon: "trending-up",
      title: "Intent-Informed Timing",
      description:
        "Engagement and intent signals tell us when a prospect is ready to move from awareness to conversation, so handoff to sales happens at the right moment, not the earliest one.",
    },
  ],
  cta: { label: "See How This Works", href: "#service-process", variant: "text" },
};

const serviceOverview: OverviewSection = {
  heading: "Service Overview",
  paragraphs: [
    "SalesFluance Demand Generation builds sustained awareness and buying intent across your target market — combining audience research, education-led content, and multi-channel nurture so that by the time a prospect enters an active buying process, they already understand your category and trust your point of view. This is the layer of GTM that sits upstream of pipeline capture: Lead Generation identifies and converts demand that already exists, while Demand Generation is the discipline responsible for making sure that demand exists in the first place. Run one without the other and you either have interest with nowhere to go, or outreach with nothing behind it.",
    "This is not a campaign you launch once and measure for a quarter — it is a standing function that compounds. Awareness built in month one still influences a buying decision in month nine, but only if the program keeps running long enough for that compounding to show up. We treat Demand Generation the same way we treat Lead Generation: as an ongoing, managed function inside your GTM motion, continuously researched and continuously refreshed, because the market's understanding of your category doesn't hold still any more than your prospect data does.",
  ],
  bullets: [
    "Audience and buying-committee research",
    "Education-led, multi-channel content programs",
    "Intent and engagement signal tracking",
    "Marketing–sales alignment on demand handoff",
  ],
};

const whySalesFluance: WhySalesFluanceSection = {
  heading: "Why SalesFluance",
  subheading:
    "Most demand generation gets sold as a content or media function — volume of assets, volume of impressions, volume of clicks. We measure it as a pipeline function, because that's what it's actually for. The comparison below is deliberately specific rather than another paragraph of positioning language, because the difference between activity-based demand generation and outcome-based demand generation doesn't show up in month one. It shows up in month six, when one program is still producing sales-ready conversations and the other is still producing impressions.",
  rows: [
    {
      dimension: "Approach",
      traditionalAgency: "Content and media volume, generic themes",
      salesFluance: "Buying-committee-specific education programs",
    },
    {
      dimension: "Signals",
      traditionalAgency: "Engagement tracked, rarely acted on",
      salesFluance: "Intent signals feed directly into sales handoff timing",
    },
    {
      dimension: "Reporting",
      traditionalAgency: "Impressions, clicks, and open rates",
      salesFluance: "Pipeline-influenced and sales-readiness reporting",
    },
    {
      dimension: "Relationship",
      traditionalAgency: "Campaign-by-campaign content delivery",
      salesFluance: "Long-term growth partnership aligned to pipeline",
    },
  ],
};

const businessOutcomes: BusinessOutcomeSection = {
  heading: "Business Outcomes",
  subheading:
    "Impressions and content downloads are easy to produce and easy to put on a slide, but they're not what your CRO is forecasting against. We report on the outcomes that actually determine whether Demand Generation is doing its job: is the market more aware of you than it was last quarter, are more of the right people arriving already educated, and is that showing up as shorter cycles and higher win rates once those prospects reach sales. That's a harder set of numbers to produce — and a far more honest one.",
  outcomes: [
    {
      id: "outcome-brand-awareness",
      icon: "eye",
      label: "Increased Brand Awareness",
      description: "Target accounts recognize your category and point of view before outreach ever begins.",
    },
    {
      id: "outcome-inbound-interest",
      icon: "trending-up",
      label: "Higher Inbound Interest",
      description: "Educated demand starts finding its own way to you, reducing reliance on outbound alone.",
    },
    {
      id: "outcome-buyer-education",
      icon: "file-text",
      label: "Better Buyer Education",
      description: "Prospects enter conversations already understanding the problem and your approach to it.",
    },
    {
      id: "outcome-sales-cycle",
      icon: "clock",
      label: "Shorter Sales Cycles",
      description: "Pre-educated buyers move through evaluation faster because less time is spent on the basics.",
    },
    {
      id: "outcome-pipeline-alignment",
      icon: "handshake",
      label: "Marketing–Sales Alignment",
      description: "A shared, sustainable pipeline engine that both teams trust and can forecast against.",
    },
  ],
  cta: { label: "Talk to a Strategist", href: "/contact", variant: "outline" },
};

const whoThisIsFor: ICPSection = {
  heading: "Who This Is For",
  intro:
    "Built for growth-stage and enterprise teams that need a sustained engine building market demand — not for companies looking for a short-term content push to fill a quarterly gap.",
  personas: [
    { id: "persona-founder-ceo", title: "Founder / CEO" },
    { id: "persona-cro", title: "CRO" },
    { id: "persona-vp-marketing", title: "VP Marketing" },
    { id: "persona-demand-gen-manager", title: "Demand Generation Manager" },
    { id: "persona-revops-manager", title: "Revenue Operations Manager" },
  ],
  companySizeRange: "10–5,000 Employees",
  industries: ["healthcare", "saas", "it-services"],
};

const serviceProcess: ProcessSection = {
  heading: "Our Process",
  subheading:
    "We publish our process because Demand Generation is easy to run badly and still look busy — content goes out, impressions accumulate, and nobody can tell whether any of it moved the pipeline until a quarter has already passed. Six stages, in order, no step skipped to get content live faster — because programs that underperform almost always skipped Audience Research or Signal Design to start publishing sooner, and by the time that shows up in the numbers, a quarter of content has gone out to the wrong audience. Nothing below is unusual on its own. What's unusual is doing all six, in this order, every time.",
  steps: [
    {
      id: "process-discovery",
      order: 1,
      label: "Discovery",
      description: "Understand your business objectives, category position, and existing marketing and sales motion.",
    },
    {
      id: "process-audience-research",
      order: 2,
      label: "Audience Research",
      description: "Buying-committee mapping, problem-awareness research, and channel strategy tailored to your market.",
    },
    {
      id: "process-planning",
      order: 3,
      label: "Planning",
      description: "Program strategy, content themes, channel mix, timeline, and KPIs are defined.",
    },
    {
      id: "process-execution",
      order: 4,
      label: "Execution",
      description: "Education-led content and multi-channel nurture programs go live against the agreed plan.",
    },
    {
      id: "process-signal-qualification",
      order: 5,
      label: "Signal Qualification",
      description: "Engagement and intent are tracked and qualified before any handoff to sales is made.",
    },
    {
      id: "process-growth",
      order: 6,
      label: "Growth",
      description: "Ongoing performance review, optimization, and scaling of what's building real demand.",
    },
  ],
};

const deliverables: DeliverablesSection = {
  heading: "What You Receive",
  items: [
    { id: "deliverable-content-programs", icon: "file-text", label: "Education-Led Content Programs" },
    { id: "deliverable-nurture-campaigns", icon: "refresh-cw", label: "Managed Multi-Channel Nurture Campaigns" },
    { id: "deliverable-intent-reporting", icon: "trending-up", label: "Intent & Engagement Signal Reports" },
    { id: "deliverable-crm-integration", icon: "database", label: "CRM-Ready Demand Records" },
  ],
};

const technologyStack: TechnologySection = {
  heading: "Technology We Work Within",
  subheading:
    "We're often asked which platform runs the program, as if the tool were the differentiator. It isn't — a marketing automation platform doesn't know your buying committee, and an intent data feed doesn't know which signals actually matter to your sales team. What matters is that we work inside the systems you already use, so demand data lands where marketing and sales both already look for it. The tools below are the infrastructure; the judgment that runs through them is the actual work.",
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
        { name: "HubSpot Marketing Hub", icon: "mail" },
        { name: "Marketo", icon: "layers" },
      ],
    },
    {
      category: "Outreach",
      tools: [
        { name: "6sense", icon: "search" },
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
      description: "Building trusted awareness with healthcare decision-makers ahead of a compliant outreach motion.",
      icon: "heart-pulse",
    },
    {
      slug: "saas",
      name: "SaaS",
      description: "Category education and nurture programs built for recurring-revenue buying cycles.",
      icon: "cpu",
    },
    {
      slug: "it-services",
      name: "IT Services",
      description: "Sustained awareness programs for long, multi-stakeholder enterprise buying cycles.",
      icon: "building",
    },
  ],
};

const successMetrics: MetricsSection = {
  heading: "Success Metrics & Reporting",
  reportingCadence: "Reported Monthly",
  metrics: [
    { id: "metric-marketing-qualified-leads", label: "Marketing-Qualified Leads" },
    { id: "metric-engagement-rate", label: "Content & Program Engagement" },
    { id: "metric-pipeline-influenced", label: "Pipeline Influenced" },
    { id: "metric-conversion-to-sql", label: "Conversion to Sales-Qualified" },
  ],
};

const faqs: FAQSection = {
  heading: "Frequently Asked Questions",
  items: [
    {
      id: "faq-what-is-demand-generation",
      question: "What is Demand Generation?",
      answer: "[PLACEHOLDER — Founder review]",
    },
    {
      id: "faq-demand-vs-lead-generation",
      question: "How is Demand Generation different from Lead Generation?",
      answer: "[PLACEHOLDER — Founder review]",
    },
    {
      id: "faq-timeline",
      question: "How long before results are visible?",
      answer: "[PLACEHOLDER — Founder review]",
    },
    {
      id: "faq-abm-support",
      question: "Do you support ABM campaigns?",
      answer: "[PLACEHOLDER — Founder review]",
    },
    {
      id: "faq-demand-quality",
      question: "How do you measure demand quality?",
      answer: "[PLACEHOLDER — Founder review]",
    },
    {
      id: "faq-works-with-sdr-team",
      question: "Can Demand Generation work alongside our existing SDR team?",
      answer: "[PLACEHOLDER — Founder review]",
    },
  ],
};

const relatedServices: RelatedServiceSection = {
  heading: "Related Services",
  services: [
    {
      slug: "lead-generation",
      name: "Lead Generation",
      outcomeLine: "Convert demand into qualified pipeline",
      icon: "trending-up",
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
  heading: "Ready to Build Demand That Converts?",
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

export const demandGenerationConfig: ServicePageConfig = {
  schemaVersion: 1,
  slug: "demand-generation",
  category: "Demand Generation",
  status: "published",
  seo: {
    title: "Demand Generation Services | SalesFluance",
    description:
      "[PLACEHOLDER — Founder review] Build sustained market awareness and qualified buying intent with education-led, multi-channel Demand Generation from SalesFluance.",
    canonical: "/services/demand-generation",
    keywords: ["B2B demand generation", "pipeline growth", "buyer education", "ABM nurture"],
  },
  sections,
  provenance: {
    source: "human",
    status: "draft",
    authoredBy: "Product Engineering (placeholder copy — pending Founder review)",
    lastEditedAt: "2026-08-04",
  },
};