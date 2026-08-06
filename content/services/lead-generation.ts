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
    "SalesFluance identifies, researches, and engages qualified decision-makers so your team spends time closing, not prospecting — because most pipeline problems aren't a sales execution problem, they're a research problem wearing a sales costume.",
  primaryCta: { label: "Book a Discovery Call", href: "/contact", variant: "primary" },
  secondaryCta: { label: "Explore Related Services", href: "#related-services", variant: "text" },
};

const trustIndicators: TrustIndicatorsSection = {
  // Intentionally empty — logos/stats populate once real client proof exists.
  // The section component self-hides when both arrays are empty/undefined.
};

const businessChallenges: ChallengeSection = {
  heading: "The Challenges We Solve",
  subheading: "Most pipeline problems get diagnosed as a sales execution issue when they're actually a research and sequencing issue upstream of sales. Reps are closing what shows up — they have no control over what shows up, or when. We built SalesFluance around a simple observation: the agencies clients had used before optimized for activity they could report on — dials, sends, connects — not for whether the person on the other end was actually the right buyer, at the right moment, with the right context. That gap is where forecastable pipeline goes to die. Below are the four failure patterns we see most often before a company brings outbound in-house properly, or brings us in to run it.",
  items: [
    {
      id: "challenge-inconsistent-pipeline",
      icon: "trending-up",
      label: "Inconsistent Pipeline",
      description:
        "Deal flow depends on inbound luck instead of a repeatable, forecastable process — so every quarter starts from zero instead of building on the last.",
    },
    {
      id: "challenge-reaching-decision-makers",
      icon: "users",
      label: "Difficulty Reaching Decision-Makers",
      description:
        "Outreach lands with gatekeepers, not the CEOs, VP Sales, and RevOps leaders who actually buy — because targeting was built on titles, not buying authority.",
    },
    {
      id: "challenge-limited-resources",
      icon: "clock",
      label: "Limited Internal Sales Resources",
      description:
        "Internal teams are stretched between closing existing deals and sourcing new ones — and prospecting is always the first thing that slips.",
    },
    {
      id: "challenge-poor-data",
      icon: "database",
      label: "Unreliable Prospect Data",
      description:
        "Stale or unverified contact data quietly erodes outreach performance before a campaign even starts — you don't see the cost until the pipeline is already thin.",
    },
  ],
};

const ourSolution: SolutionSection = {
  heading: "Our Solution",
  subheading: "We didn't set out to build a faster version of what already existed — faster outbound just means you find out you were wrong sooner. Our approach starts a step earlier than most: before a single message goes out, we define who actually fits your ICP, verify that the humans behind the data are real and current, and only then coordinate outreach across channels as one campaign instead of three disconnected ones. It's slower on day one and faster on day ninety, because every conversation your team has is with someone who was worth having a conversation with.",
  pillars: [
    {
      id: "pillar-strategy-first",
      icon: "target",
      title: "Strategy Before Execution",
      description:
        "Every campaign starts with your ICP, buying signals, and business goals — not a generic contact list.",
    },
    {
      id: "pillar-verified-data",
      icon: "shield-check",
      title: "Human-Verified Data",
      description:
        "Every contact is researched and verified before outreach begins, not pulled from a stale database.",
    },
    {
      id: "pillar-multichannel",
      icon: "zap",
      title: "Multi-Channel Engagement",
      description:
        "Email, LinkedIn, and voice outreach are coordinated as one strategy, not run in isolation.",
    },
  ],
  cta: { label: "See How This Works", href: "#service-process", variant: "text" },
};

const serviceOverview: OverviewSection = {
  heading: "Service Overview",
  paragraphs: [
    "SalesFluance Lead Generation combines ICP research, verified contact data, and structured outreach to put qualified decision-makers in front of your sales team on a predictable cadence. We treat \"qualified\" as a research outcome, not a marketing claim — a lead only enters your pipeline after we've confirmed the person, the role, and the buying signal all line up with how you actually sell. That's the difference between a list and a pipeline: one is a spreadsheet, the other is a sequence of verified reasons to have a conversation.",
    "This is not a one-time list purchase or an isolated email blast — it is an ongoing, managed pipeline-generation engine built around your specific market. Markets shift, buying committees change, and data decays the moment it's collected, so a static list starts losing accuracy the day it's delivered. We run this as a standing function inside your GTM motion — continuously researched, continuously refreshed — because the companies with the most reliable pipeline aren't the ones who bought the best list once, they're the ones who never stopped verifying it.",
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
  subheading: "Every agency will tell you they're different. The honest way to show it is to put the actual dimensions side by side and let you judge for yourself — which is why we built the comparison below instead of writing another paragraph about differentiation. The short version: most agencies are optimized to prove they did the work — volume, activity, dials logged. We're optimized to prove the work moved your pipeline. Those are different businesses wearing similar branding, and the difference shows up fastest in month three, when a volume-based list starts running out of good targets and a research-led one is still finding them.",
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
  subheading: "We could report on activity metrics — emails sent, calls made, meetings booked — and most agencies do, because activity is easy to produce and easy to defend on a call. But activity isn't the thing you're actually buying. You're buying a pipeline that behaves predictably enough for your CRO to forecast against it, and reps who spend their week talking to people who can actually say yes. So we report on outcomes further down the funnel than most agencies are comfortable being measured on — because that's where the real evidence of whether outbound is working actually lives.",
  outcomes: [
    {
      id: "outcome-pipeline-growth",
      icon: "trending-up",
      label: "Pipeline Growth",
      description: "A consistent flow of qualified opportunities entering your pipeline.",
    },
    {
      id: "outcome-qualified-meetings",
      icon: "calendar",
      label: "Qualified Meetings",
      description: "More conversations with decision-makers who match your ICP.",
    },
    {
      id: "outcome-conversion-rate",
      icon: "bar-chart",
      label: "Improved Conversion Rates",
      description: "Better-fit leads mean higher close rates further down the funnel.",
    },
    {
      id: "outcome-sales-cycle",
      icon: "clock",
      label: "Shorter Sales Cycles",
      description: "Pre-qualified opportunities move through your funnel faster.",
    },
    {
      id: "outcome-revenue-growth",
      icon: "award",
      label: "Revenue Growth",
      description: "A predictable pipeline that compounds into predictable revenue.",
    },
  ],
  cta: { label: "Talk to a Strategist", href: "/contact", variant: "outline" },
};

const whoThisIsFor: ICPSection = {
  heading: "Who This Is For",
  intro: "Built for growth-stage and enterprise teams ready to scale outbound predictably — not for companies looking for a cheaper way to send more emails.",
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
  subheading: "We publish our process because we want you evaluating us on how the work actually gets done, not on a promise. Six stages, in order, no step skipped to hit a launch date — because the campaigns that underperform almost always skipped Discovery or Research to get to Execution faster, and by the time that shows up in the numbers, you've already burned a month of outreach on the wrong targets. Nothing below is unusual on its own. What's unusual is doing all six, in this order, every time.",
  steps: [
    {
      id: "process-discovery",
      order: 1,
      label: "Discovery",
      description: "Understand your business objectives, target audience, and existing sales process.",
    },
    {
      id: "process-research",
      order: 2,
      label: "Research",
      description: "ICP development, market research, and data strategy tailored to your business.",
    },
    {
      id: "process-planning",
      order: 3,
      label: "Planning",
      description: "Campaign strategy, channel selection, messaging, timeline, and KPIs are defined.",
    },
    {
      id: "process-execution",
      order: 4,
      label: "Execution",
      description: "Lead research and multi-channel outreach begin against the agreed plan.",
    },
    {
      id: "process-quality-assurance",
      order: 5,
      label: "Quality Assurance",
      description: "Every lead is verified and quality-checked before it reaches your team.",
    },
    {
      id: "process-growth",
      order: 6,
      label: "Growth",
      description: "Ongoing performance review, optimization, and scaling of what's working.",
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
  subheading: "We're often asked which platform we run on, as if the tool were the differentiator. It isn't — a CRM doesn't verify a contact, and a sequencer doesn't know your ICP. What matters is that we work inside the systems you already use, so nothing we build lives in a silo you have to reconcile later. Every verified contact, every touch, every report lands where your team already looks for it. The tools below are the infrastructure; the judgment that runs through them is the actual work.",
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
      description: "Reaching busy healthcare decision-makers with verified, compliant outreach.",
      icon: "heart-pulse",
    },
    {
      slug: "saas",
      name: "SaaS",
      description: "Scalable pipeline generation built for recurring-revenue growth.",
      icon: "cpu",
    },
    {
      slug: "it-services",
      name: "IT Services",
      description: "Enterprise-grade outreach for long, multi-stakeholder buying cycles.",
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
  status: "published",
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
    status: "published",
    authoredBy: "Product Engineering (placeholder copy — pending Founder review)",
    lastEditedAt: "2026-07-29",
  },
};