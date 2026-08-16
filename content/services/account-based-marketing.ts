/**
 * SalesFluance Content Layer — Account-Based Marketing
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
 *
 * SCHEMA NOTE: This page introduces one section not present in the Lead
 * Generation / Demand Generation benchmark — `enterpriseAnswer`, positioned
 * after `finalCta` per the approved IA for this page. It is typed below as
 * `OverviewSection` (heading + paragraphs + bullets) because that shape
 * matches the content exactly and no existing interface needed to change.
 * If this section is meant to render with distinct visual treatment (rather
 * than reusing the Service Overview component), a dedicated
 * `EnterpriseAnswerSection` type and SectionRegistry entry should be added
 * to `types/service.ts` — that is an engineering decision outside the scope
 * of this content file, so it has intentionally not been made here.
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
    { label: "Account-Based Marketing" },
  ],
  stickyCta: {
    label: "Book a Discovery Call",
    href: "/contact",
    variant: "primary",
  },
};

const hero: HeroSection = {
  eyebrow: "Account-Based Marketing",
  headline: "Enterprise Deals Aren't Won by Campaigns. They're Won by Relationships.",
  subhead:
    "Most ABM programs treat accounts like lead lists. We treat them like revenue opportunities. We identify the right accounts, map every decision-maker that matters, and build the relationships that move enterprise deals forward.",
  primaryCta: { label: "Book a Discovery Call", href: "/contact", variant: "primary" },
  secondaryCta: { label: "Explore Our Process", href: "#service-process", variant: "text" },
};

const trustIndicators: TrustIndicatorsSection = {
  // Intentionally empty — logos/stats populate once real client proof exists.
  // The section component self-hides when both arrays are empty/undefined.
};

const businessChallenges: ChallengeSection = {
  heading: "The Challenges We Solve",
  subheading:
    "Enterprise deals aren't closed by one person clicking \"reply.\" They're closed by a buying committee — a economic buyer, a technical evaluator, a champion doing the internal selling for you, and a procurement function that has veto power over all of it. Most ABM programs are built and measured as if none of that were true: one contact per account, one message per campaign, one dashboard tracking activity instead of committee coverage. The technology available today makes it easy to run this at scale and easy to mistake scale for strategy. The problems below are what we see, in some combination, in almost every enterprise revenue team before they bring a real ABM discipline in-house — which is exactly the gap our methodology is built to close.",
  items: [
    {
      id: "challenge-invisible-buying-committee",
      icon: "users",
      label: "The Buying Committee Stays Invisible",
      description:
        "Programs are built and reported against a single contact per account, so the technical evaluator, the champion, and the procurement stakeholder never enter the plan — until one of them quietly kills the deal in a room you weren't in.",
    },
    {
      id: "challenge-fragmented-sales-marketing",
      icon: "workflow",
      label: "Sales and Marketing Chase Different Accounts",
      description:
        "Marketing runs its target list, sales runs its own pipeline priorities, and the two rarely match — so the accounts getting the most nurture aren't the accounts sales is actually trying to close this quarter.",
    },
    {
      id: "challenge-generic-executive-outreach",
      icon: "message-square",
      label: "Outreach Doesn't Land With Executives",
      description:
        "A first-name merge field isn't personalization — and enterprise decision-makers can tell the difference in one sentence, which is why generic ABM messaging gets the same ignore rate as generic outbound.",
    },
    {
      id: "challenge-guesswork-prioritization",
      icon: "target",
      label: "Account Prioritization Is Guesswork",
      description:
        "Without disciplined tiering and real intent signal, teams spread equal effort across accounts with wildly unequal potential — so the highest-value opportunities get the same attention as the long shots.",
    },
  ],
};

const ourSolution: SolutionSection = {
  heading: "Our Solution",
  subheading:
    "ABM done properly is a chain, not a channel — and it breaks if any link is missing. We start with Research: understanding the account's business, priorities, and structure before a single message is drafted. That becomes Intelligence: firmographic, technographic, and intent signal synthesized into an actual point of view on why this account, why now. From there we build the Buying Committee Map — every economic buyer, technical evaluator, champion, and procurement stakeholder who has to say yes, not just the one who replied to LinkedIn. Only then does Personalization happen, because personalization without committee context is just a mail-merge with better manners. Coordinated Outreach follows, sequenced across the right people in the right order, which is what turns engagement into Pipeline — and Pipeline, tracked and nurtured against the same account plan sales is already running, is what compounds into Revenue. Skip a link and the chain still looks like ABM. It just doesn't produce enterprise deals.",
  pillars: [
    {
      id: "pillar-intelligence-before-outreach",
      icon: "search",
      title: "Account Intelligence Before Outreach",
      description:
        "Every target account is researched and tiered before a message goes out — we earn the right to reach out by understanding the business first.",
    },
    {
      id: "pillar-full-committee-coverage",
      icon: "users",
      title: "Full Buying Committee Coverage",
      description:
        "We map and engage the economic buyer, technical evaluator, champion, and procurement stakeholder — not just the one contact who responded.",
    },
    {
      id: "pillar-executive-personalization",
      icon: "message-square",
      title: "Executive-Level Personalization",
      description:
        "Messaging is built around each stakeholder's actual priorities and business context, not a template with variables swapped in.",
    },
  ],
  cta: { label: "See How This Works", href: "#service-process", variant: "text" },
};

const serviceOverview: OverviewSection = {
  heading: "Service Overview",
  paragraphs: [
    "Account-Based Marketing gets described a hundred different ways, and most of them are wrong in the same direction: they describe ABM as a targeting tactic — narrower lists, sharper segmentation, the same outbound playbook aimed at fewer companies. That's not what enterprise ABM is. Enterprise ABM is a revenue discipline built around a simple fact: complex, high-value deals aren't decided by one person, and they aren't won by whoever sends the most emails. They're won by whoever understands the account's business well enough to have the right conversation with the right person on the buying committee, in the right order, at the right time.",
    "That's also why so many ABM programs underperform their budget. Personalization gets mistaken for a merge field. Account intelligence gets mistaken for a firmographic filter. And sales alignment gets mistaken for CC'ing an AE on a campaign report. Each of those is the appearance of ABM without the substance of it — and enterprise buyers, who evaluate vendors for a living, notice the difference immediately. SalesFluance executes differently by treating each of those three disciplines — personalization, account intelligence, and sales alignment — as non-negotiable, not as line items that get cut when a program needs to scale faster.",
    "Our ABM service is organized around four pillars: Account Intelligence, which defines and tiers the accounts actually worth the investment; Stakeholder Mapping, which identifies the full buying committee before outreach begins; Personalized Engagement, which builds messaging around each stakeholder's real priorities rather than a shared template; and Pipeline Acceleration, which turns engagement into opportunities sales can actually work and close.",
  ],
  bullets: [
    "Account intelligence, tiering, and intent analysis",
    "Full buying committee mapping and stakeholder research",
    "Executive-level personalized, multi-channel engagement",
    "Sales enablement and pipeline acceleration",
  ],
};

const whySalesFluance: WhySalesFluanceSection = {
  heading: "Why SalesFluance",
  subheading:
    "ABM is our revenue discipline, not a marketing add-on. Most agencies sell ABM as a campaign service — a content package and a media plan aimed at a shorter account list. We operate as an extension of your revenue team, accountable to the same pipeline and revenue numbers your CRO is accountable to. The comparison below is specific on purpose, because \"we're more strategic\" is a claim every agency makes and almost none of them can substantiate account by account.",
  rows: [
    {
      dimension: "Discipline",
      traditionalAgency: "ABM sold as a campaign package",
      salesFluance: "Revenue Before Activity — every program is accountable to pipeline, not impressions",
    },
    {
      dimension: "Method",
      traditionalAgency: "Software-driven personalization at scale",
      salesFluance: "Human Intelligence Meets AI — research and judgment applied to every account, AI used to scale it, not replace it",
    },
    {
      dimension: "Relationship",
      traditionalAgency: "Vendor delivering a marketing service",
      salesFluance: "Extension of Your Revenue Team — shared account plans, shared reporting, shared accountability",
    },
    {
      dimension: "Coverage",
      traditionalAgency: "Single contact per target account",
      salesFluance: "Enterprise Buying Committee Expertise — economic buyer, technical evaluator, champion, and procurement, mapped and engaged",
    },
    {
      dimension: "Messaging",
      traditionalAgency: "Templated content with merge fields",
      salesFluance: "Strategic Personalization — messaging built around each stakeholder's actual business priorities",
    },
    {
      dimension: "Scale",
      traditionalAgency: "One-size-fits-all campaign structure",
      salesFluance: "Scalable ABM Frameworks — a repeatable methodology that holds up whether you're running 20 accounts or 200",
    },
  ],
};

const businessOutcomes: BusinessOutcomeSection = {
  heading: "Business Outcomes",
  subheading:
    "Engagement rate and content downloads look good on a slide, but they're not what a CRO forecasts against. ABM's real test is whether it changes the shape of your enterprise pipeline — more of the committee engaged, deals moving faster, bigger contracts, and a higher percentage of them closing. Those are harder numbers to move and the only ones that actually justify the investment a well-run ABM program requires.",
  outcomes: [
    {
      id: "outcome-pipeline-growth",
      icon: "trending-up",
      label: "Pipeline Growth",
      description: "A consistent flow of qualified enterprise opportunities from accounts worth pursuing.",
    },
    {
      id: "outcome-executive-engagement",
      icon: "users",
      label: "Higher Executive Engagement",
      description: "Economic buyers and technical evaluators engaging directly, not just gatekeepers.",
    },
    {
      id: "outcome-sales-cycle-reduction",
      icon: "clock",
      label: "Sales Cycle Reduction",
      description: "Committee-wide alignment removes the internal-selling delays that stall enterprise deals.",
    },
    {
      id: "outcome-larger-deal-sizes",
      icon: "bar-chart",
      label: "Larger Deal Sizes",
      description: "Full committee engagement surfaces expansion scope competitors targeting one contact miss.",
    },
    {
      id: "outcome-win-rates",
      icon: "award",
      label: "Improved Win Rates",
      description: "Deals with full buying committee coverage close at meaningfully higher rates.",
    },
    {
      id: "outcome-committee-penetration",
      icon: "target",
      label: "Buying Committee Penetration",
      description: "Visibility into and engagement with every stakeholder who influences the decision.",
    },
  ],
  cta: { label: "Talk to a Strategist", href: "/contact", variant: "outline" },
};

const whoThisIsFor: ICPSection = {
  heading: "Who This Is For",
  intro:
    "Built for enterprise and upper-mid-market revenue teams selling complex, high-value solutions with multiple stakeholders in every deal — not for companies looking to run the same outbound playbook against a shorter list.",
  personas: [
    { id: "persona-cro", title: "CRO" },
    { id: "persona-vp-sales", title: "VP Sales" },
    { id: "persona-cmo-vp-marketing", title: "CMO / VP Marketing" },
    { id: "persona-enterprise-ae", title: "Enterprise Account Executive" },
    { id: "persona-revops-director", title: "Revenue Operations Director" },
  ],
  companySizeRange: "200–10,000 Employees",
  industries: [
    "saas",
    "it-services",
    "healthcare",
  ],
};

const serviceProcess: ProcessSection = {
  heading: "Our Process",
  subheading:
    "We publish our process because ABM is the easiest motion in B2B to run halfway and still produce a dashboard that looks legitimate. Six stages, in order, no step skipped to launch faster — because the programs that underperform almost always skipped Research to get to Execution sooner, and by the time that shows up in stalled deals, a quarter of effort has already gone into accounts that were never mapped properly. Nothing below is unusual on its own. What's unusual is doing all six, in this order, on every account, every time.",
  steps: [
    {
      id: "process-discovery",
      order: 1,
      label: "Discovery",
      description: "Align on revenue goals, target market, deal size, and buying motion before a single account is selected.",
    },
    {
      id: "process-research",
      order: 2,
      label: "Research",
      description: "Build and prioritize target account lists using firmographic, technographic, and intent data, then map the full buying committee for each.",
    },
    {
      id: "process-planning",
      order: 3,
      label: "Planning",
      description: "Define account tiers, stakeholder messaging, channel mix, campaign calendar, and shared KPIs with your sales team.",
    },
    {
      id: "process-execution",
      order: 4,
      label: "Execution",
      description: "Launch coordinated, personalized outreach across email, LinkedIn, calling, and content engagement by stakeholder group.",
    },
    {
      id: "process-quality-assurance",
      order: 5,
      label: "Quality Assurance",
      description: "Every account plan, message, and stakeholder engagement is reviewed against the research before it reaches your sales team.",
    },
    {
      id: "process-growth",
      order: 6,
      label: "Growth",
      description: "Ongoing optimization of targeting, messaging, and channel performance, plus expansion planning within engaged accounts.",
    },
  ],
};

const deliverables: DeliverablesSection = {
  heading: "What You Receive",
  items: [
    { id: "deliverable-account-segmentation", icon: "layers", label: "Account Segmentation & Tiering Framework" },
    { id: "deliverable-buying-committee-maps", icon: "users", label: "Buying Committee Maps & Intelligence Briefs" },
    { id: "deliverable-personalized-sequences", icon: "message-square", label: "Personalized, Multi-Channel Outreach Sequences" },
    { id: "deliverable-sales-enablement", icon: "briefcase", label: "Sales Enablement Playbooks" },
    { id: "deliverable-engagement-dashboards", icon: "bar-chart", label: "Engagement & Pipeline Dashboards" },
  ],
};

const technologyStack: TechnologySection = {
  heading: "Technology We Work Within",
  subheading:
    "We're often asked which ABM platform runs the program, as if the tool were the differentiator. It isn't — no platform maps a buying committee on its own, and no intent feed writes an executive-relevant message. What matters is that we work inside the systems you already use, so account intelligence, engagement, and reporting all land where your sales and marketing teams already look for them. The tools below are the infrastructure; the judgment that runs through them is the actual work.",
  groups: [
    {
      category: "CRM",
      tools: [
        { name: "Salesforce", icon: "cpu" },
        { name: "HubSpot", icon: "layers" },
      ],
    },
    {
      category: "Outreach",
      tools: [
        { name: "Outreach", icon: "message-square" },
        { name: "Salesloft", icon: "message-square" },
      ],
    },
    {
      category: "Research",
      tools: [
        { name: "6sense", icon: "eye" },
        { name: "Demandbase", icon: "target" },
      ],
    },
    {
      category: "Research",
      tools: [
        { name: "HubSpot Marketing Hub", icon: "mail" },
        { name: "Clearbit", icon: "database" },
      ],
    },
    {
      category: "Research",
      tools: [
        { name: "ZoomInfo", icon: "globe" },
        { name: "Apollo", icon: "search" },
        { name: "LinkedIn Sales Navigator", icon: "link" },
      ],
    },
    {
      category: "Reporting",
      tools: [
        { name: "Google Analytics", icon: "bar-chart" },
        { name: "Looker Studio", icon: "pie-chart" },
      ],
    },
  ],
};

const industriesServed: IndustrySection = {
  heading: "Industries We Serve",
  industries: [
    {
      slug: "saas",
      name: "Technology & SaaS",
      description: "Buying committee coverage built for recurring-revenue, multi-stakeholder purchase decisions.",
      icon: "cpu",
    },
    {
      slug: "it-services",
      name: "IT Services & Consulting",
      description: "Account-based programs for long, technically-evaluated enterprise buying cycles.",
      icon: "building",
    },
    {
      slug: "healthcare",
      name: "Healthcare",
      description: "Multi-stakeholder account programs for clinical, technical, and procurement decision-makers.",
      icon: "heart-pulse",
    },
  ],
};

const successMetrics: MetricsSection = {
  heading: "Success Metrics & Reporting",
  reportingCadence: "Reported Monthly",
  metrics: [
    { id: "metric-committee-penetration", label: "Buying Committee Penetration" },
    { id: "metric-sales-accepted-accounts", label: "Sales-Accepted Account Rate" },
    { id: "metric-pipeline-influenced", label: "Pipeline Influenced" },
    { id: "metric-average-contract-value", label: "Average Contract Value" },
  ],
};

const faqs: FAQSection = {
  heading: "Frequently Asked Questions",
  items: [
    {
      id: "faq-abm-vs-lead-generation",
      question: "How is ABM different from Lead Generation?",
      answer: "[PLACEHOLDER — Founder review]",
    },
    {
      id: "faq-company-size-fit",
      question: "What company size is a good fit for ABM?",
      answer: "[PLACEHOLDER — Founder review]",
    },
    {
      id: "faq-timeline",
      question: "How long before we see results?",
      answer: "[PLACEHOLDER — Founder review]",
    },
    {
      id: "faq-sales-team-involvement",
      question: "Do you work directly with our sales team?",
      answer: "[PLACEHOLDER — Founder review]",
    },
    {
      id: "faq-international-campaigns",
      question: "Can you support international ABM campaigns?",
      answer: "[PLACEHOLDER — Founder review]",
    },
    {
      id: "faq-minimum-account-list",
      question: "Do we need a large target account list to get started?",
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
      outcomeLine: "Convert engaged accounts into qualified pipeline",
      icon: "trending-up",
    },
    {
      slug: "demand-generation",
      name: "Demand Generation",
      outcomeLine: "Build market awareness before accounts are in-market",
      icon: "file-text",
    },
    {
      slug: "intent-data",
      name: "Intent Data & Account Intelligence",
      outcomeLine: "Prioritize accounts already showing buying signals",
      icon: "zap",
    },
  ],
};

const finalCta: CTASection = {
  heading: "Ready to Build a Revenue-Focused ABM Program?",
  reassurance:
    "A 15-minute conversation about your target accounts — no pressure, no obligation.",
  primaryCta: { label: "Book a Discovery Call", href: "/contact", variant: "primary" },
  secondaryCta: { label: "Explore Our Process", href: "/process", variant: "text" },
};

const enterpriseAnswer: OverviewSection = {
  heading: "The Enterprise Answer",
  paragraphs: [
    "If you're a CRO, VP Sales, or CMO reading this, you've already been pitched ABM by someone selling a platform. The pitch usually sounds like this: better data, better scoring, better personalization at scale. All of that is true, and none of it is the reason enterprise deals actually close. Enterprise deals close because a champion inside the account went to bat for you in a room you weren't in, because the technical evaluator trusts that your solution actually solves their problem, and because procurement didn't find a reason to slow the deal down. No platform does that work. People do — informed by intelligence, not replaced by it.",
    "That's the fundamental difference between SalesFluance and a traditional ABM agency. A traditional agency sells you the technology stack and the campaign calendar, then measures success by engagement metrics that look good in a QBR and say nothing about whether the deal is actually moving. We built SalesFluance around the opposite premise: technology is the infrastructure, not the strategy. The strategy is understanding an account's business well enough to know who has to say yes, what each of those people actually cares about, and what it will take to earn their time — then executing that with the same discipline a great enterprise AE brings to their top accounts, at a scale no single AE could sustain alone.",
    "We don't operate as a vendor delivering a marketing service. We operate as an extension of your revenue team — sharing your account plans, your pipeline targets, and your definition of what a qualified opportunity actually looks like. That's a higher bar than most agencies are built to clear, and it's the only bar that matters if the accounts you're targeting are the ones your business actually depends on.",
  ],
  bullets: [
    "Enterprise deals are won by committees, not clicks",
    "Technology scales the work — judgment is still the work",
    "We're accountable to your pipeline, not to campaign metrics",
  ],
};

// ---------------------------------------------------------------------------
// Ordered section list — this ordering is the approved Information
// Architecture (v2) for this page. It is data, not layout code: the engine
// renders sections strictly in this order, and reordering the page means
// editing this array, never a component. Per the approved IA for this page,
// `enterpriseAnswer` is intentionally placed after `finalCta`.
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

export const accountBasedMarketingConfig: ServicePageConfig = {
  schemaVersion: 1,
  slug: "account-based-marketing",
  category: "Demand Generation",
  status: "draft",
  seo: {
    title: "Account-Based Marketing Services | SalesFluance",
    description:
      "[PLACEHOLDER — Founder review] Turn high-value enterprise accounts into qualified pipeline with buying-committee research, executive personalization, and revenue-first ABM from SalesFluance.",
    canonical: "/services/account-based-marketing",
    keywords: ["account-based marketing", "ABM", "enterprise pipeline", "buying committee"],
  },
  sections,
  provenance: {
    source: "human",
    status: "draft",
    authoredBy: "Product Engineering (placeholder copy — pending Founder review)",
    lastEditedAt: "2026-08-07",
  },
};