/**
 * SalesFluance Service Page Engine — Service Page Domain Model
 *
 * Every flagship service page (Lead Generation, ABM, Demand Generation,
 * Content Syndication, Intent Data, Appointment Setting, Email Marketing,
 * Telemarketing, List Building, Data Cleansing, Data Appending) is rendered
 * by the same engine from one `ServicePageConfig` object. This file defines
 * that config and every section data shape it can contain.
 *
 * Hard rule enforced by this model: a section component may only vary its
 * output based on the `data` it receives. No section interface below
 * contains a `serviceSlug` field or any other hook that would let a
 * component branch on "which service is this" — that would defeat the
 * purpose of a shared engine. Per-service variance lives entirely in the
 * *values* assigned to these fields in each service's config file, never in
 * new fields or new types.
 *
 * All interfaces here are plain, JSON-serializable shapes — no functions, no
 * class instances — so the entire content layer is portable to a future
 * headless CMS (see CMSMeta in shared.ts) without touching the rendering
 * engine or any section component.
 */

import type {
  AnimationVariant,
  CMSMeta,
  ContentProvenance,
  ContentStatus,
  CTALink,
  IconName,
  ImageAsset,
  IndustrySlug,
  Navigation,
  SectionType,
  SEOMetadata,
  ServiceCategory,
  ServiceSlug,
  StatItem,
} from "./shared";

// ---------------------------------------------------------------------------
// Shared, cross-section item types
// ---------------------------------------------------------------------------

/** A decision-maker persona reference, drawn from the shared persona dataset. */
export interface PersonaRef {
  id: string;
  /** e.g. "VP Sales", "Demand Generation Manager". */
  title: string;
}

/** A single tool within a Technology Stack group. */
export interface ToolRef {
  name: string;
  icon: IconName;
}

// ---------------------------------------------------------------------------
// 1. Navigation is imported directly from shared.ts (see Navigation there) —
//    it is reused verbatim as the data payload for the "utilityBar" section,
//    since a page's in-page navigation contract has no service-specific
//    variance beyond the sticky CTA's copy/link.
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// 2. Hero Section
// ---------------------------------------------------------------------------

export interface HeroSection {
  /** Category label shown above the headline, e.g. "Demand Generation". */
  eyebrow: string;
  /** Outcome-framed H1. The engine renders exactly one <h1> per page, here. */
  headline: string;
  subhead: string;
  primaryCta: CTALink;
  secondaryCta?: CTALink;
  visual?: ImageAsset;
}

// ---------------------------------------------------------------------------
// 3. Trust Indicators Section (proof-optional — see StatItem in shared.ts)
// ---------------------------------------------------------------------------

export interface TrustIndicatorsSection {
  heading?: string;
  logos?: ImageAsset[];
  stats?: StatItem[];
}

// ---------------------------------------------------------------------------
// 4. Challenge Section ("Business Challenges")
// ---------------------------------------------------------------------------

export interface ChallengeItem {
  id: string;
  icon: IconName;
  label: string;
  description: string;
}

export interface ChallengeSection {
  heading: string;
  subheading?: string;
  items: ChallengeItem[];
}

// ---------------------------------------------------------------------------
// 5. Solution Section ("Our Solution")
// ---------------------------------------------------------------------------

export interface SolutionPillar {
  id: string;
  icon: IconName;
  title: string;
  description: string;
}

export interface SolutionSection {
  heading: string;
  subheading?: string;
  pillars: SolutionPillar[];
  /** Optional inline CTA, e.g. "See how this works" scrolling to Process. */
  cta?: CTALink;
}

// ---------------------------------------------------------------------------
// 6. Overview Section ("Service Overview")
// ---------------------------------------------------------------------------

export interface OverviewSection {
  heading: string;
  /**
   * Structured placeholder copy pending founder review, until each config's
   * top-level `status` is "published". See ContentProvenance in shared.ts.
   */
  paragraphs: string[];
  bullets?: string[];
}

// ---------------------------------------------------------------------------
// 7. Why SalesFluance Section — company-level positioning, shared dataset
//    imported by every service config rather than restated per service.
// ---------------------------------------------------------------------------

export interface ComparisonRow {
  /** e.g. "Approach", "Data Quality", "Reporting". */
  dimension: string;
  traditionalAgency: string;
  salesFluance: string;
}

export interface WhySalesFluanceSection {
  heading: string;
  subheading?: string;
  rows: ComparisonRow[];
}

// ---------------------------------------------------------------------------
// 8. Business Outcome Section
// ---------------------------------------------------------------------------

export interface OutcomeItem {
  id: string;
  icon: IconName;
  /** e.g. "Pipeline Growth", "Shorter Sales Cycles". Outcome, not feature. */
  label: string;
  description: string;
  /** Real-client-data-only. Never fabricated. Omit until data exists. */
  metricValue?: string;
}

export interface BusinessOutcomeSection {
  heading: string;
  subheading?: string;
  outcomes: OutcomeItem[];
  /** Optional secondary CTA — deliberately lighter weight than the Final CTA. */
  cta?: CTALink;
}

// ---------------------------------------------------------------------------
// 9. ICP Section ("Who This Is For")
// ---------------------------------------------------------------------------

export interface ICPSection {
  heading: string;
  intro: string;
  personas: PersonaRef[];
  /** e.g. "10–5,000 Employees". */
  companySizeRange: string;
  industries: IndustrySlug[];
}

// ---------------------------------------------------------------------------
// 10. Process Section ("Service Process")
// ---------------------------------------------------------------------------

export interface ProcessStep {
  id: string;
  order: number;
  label: string;
  description: string;
  /** e.g. "Week 1–2". Optional — not every step needs a stated duration. */
  duration?: string;
}

export interface ProcessSection {
  heading: string;
  subheading?: string;
  steps: ProcessStep[];
}

// ---------------------------------------------------------------------------
// 11. Deliverables Section
// ---------------------------------------------------------------------------

export interface DeliverableItem {
  id: string;
  icon: IconName;
  label: string;
}

export interface DeliverablesSection {
  heading: string;
  items: DeliverableItem[];
}

// ---------------------------------------------------------------------------
// 12. Technology Section ("Technology Stack")
// ---------------------------------------------------------------------------

export interface TechStackGroup {
  category: "CRM" | "Outreach" | "Research" | "Reporting";
  tools: ToolRef[];
}

export interface TechnologySection {
  heading: string;
  subheading?: string;
  groups: TechStackGroup[];
}

// ---------------------------------------------------------------------------
// 13. Industry Section ("Industries Served")
// ---------------------------------------------------------------------------

export interface IndustryRef {
  slug: IndustrySlug;
  name: string;
  description: string;
  icon: IconName;
}

export interface IndustrySection {
  heading: string;
  industries: IndustryRef[];
}

// ---------------------------------------------------------------------------
// 14. Metrics Section ("Success Metrics & Reporting")
// ---------------------------------------------------------------------------

export interface MetricItem {
  id: string;
  label: string;
  /** Real-client-data-only. Never fabricated. Omit until data exists. */
  value?: string;
}

export interface MetricsSection {
  heading: string;
  metrics: MetricItem[];
  /** e.g. "Reported Monthly". */
  reportingCadence?: string;
}

// ---------------------------------------------------------------------------
// 15. FAQ Section
// ---------------------------------------------------------------------------

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQSection {
  heading: string;
  items: FAQItem[];
}

// ---------------------------------------------------------------------------
// 16. Related Service Section
// ---------------------------------------------------------------------------

export interface RelatedServiceRef {
  slug: ServiceSlug;
  name: string;
  /** One-line, outcome-framed description — never a feature description. */
  outcomeLine: string;
  icon: IconName;
}

export interface RelatedServiceSection {
  heading: string;
  services: RelatedServiceRef[];
}

// ---------------------------------------------------------------------------
// 17. CTA Section ("Final CTA")
// ---------------------------------------------------------------------------

export interface CTASection {
  heading: string;
  /** Reassurance line tied to the Discovery Call Framework. */
  reassurance: string;
  primaryCta: CTALink;
  secondaryCta?: CTALink;
}

// ---------------------------------------------------------------------------
// Discriminated Union — SectionEntry
//
// Every renderable section on a page is one member of this union. The
// engine's SectionRenderer switches on `type` to resolve the matching
// component; TypeScript narrows `data` to the correct shape automatically
// wherever `type` is checked, with zero casting required.
// ---------------------------------------------------------------------------

/** Generic envelope shared by every section entry. Not exported directly. */
interface SectionEnvelope<T extends SectionType, D> {
  /** Stable identifier for this section instance, e.g. for anchor links/QA. */
  id: string;
  type: T;
  data: D;
  /** Per-section animation override; defaults to the engine's standard reveal if omitted. */
  animation?: AnimationVariant;
}

export type SectionEntry =
  | SectionEnvelope<"utilityBar", Navigation>
  | SectionEnvelope<"hero", HeroSection>
  | SectionEnvelope<"trustIndicators", TrustIndicatorsSection>
  | SectionEnvelope<"businessChallenges", ChallengeSection>
  | SectionEnvelope<"ourSolution", SolutionSection>
  | SectionEnvelope<"serviceOverview", OverviewSection>
  | SectionEnvelope<"whySalesFluance", WhySalesFluanceSection>
  | SectionEnvelope<"businessOutcomes", BusinessOutcomeSection>
  | SectionEnvelope<"whoThisIsFor", ICPSection>
  | SectionEnvelope<"serviceProcess", ProcessSection>
  | SectionEnvelope<"deliverables", DeliverablesSection>
  | SectionEnvelope<"technologyStack", TechnologySection>
  | SectionEnvelope<"industriesServed", IndustrySection>
  | SectionEnvelope<"successMetrics", MetricsSection>
  | SectionEnvelope<"faqs", FAQSection>
  | SectionEnvelope<"relatedServices", RelatedServiceSection>
  | SectionEnvelope<"finalCta", CTASection>;

/** Utility type: narrows SectionEntry to the entry for a specific SectionType. */
export type SectionEntryOf<T extends SectionType> = Extract<SectionEntry, { type: T }>;

// ---------------------------------------------------------------------------
// ServicePageConfig — the single source of truth for one flagship service
// page. Everything the engine renders, and everything a future CMS or AI
// content pipeline needs to produce, is described by this shape.
// ---------------------------------------------------------------------------

export interface ServicePageConfig {
  /**
   * Bump on any breaking change to this interface or its section shapes.
   * Enables safe, staged migration of existing configs (or CMS content)
   * when the schema evolves.
   */
  schemaVersion: 1;
  slug: ServiceSlug;
  category: ServiceCategory;
  /**
   * Editorial gate. Production builds must refuse to render any config
   * whose status is not "published" — this is what makes the model safe
   * for AI-drafted or in-progress content without risking it going live.
   */
  status: ContentStatus;
  seo: SEOMetadata;
  /**
   * Ordered list of sections to render. Order is data, not layout code —
   * the approved Information Architecture sequence lives here, validated
   * by the content-validation layer, not hardcoded into the engine.
   */
  sections: SectionEntry[];
  /** Optional authorship/review trail — see ContentProvenance in shared.ts. */
  provenance?: ContentProvenance;
  /** Optional future-CMS linkage — see CMSMeta in shared.ts. */
  cms?: CMSMeta;
}

// ---------------------------------------------------------------------------
// Registry type — the shape of the aggregated content/services/index.ts
// export. Guarantees every ServiceSlug has exactly one config and prevents
// typos in registry keys from silently producing a missing page.
// ---------------------------------------------------------------------------

export type ServiceRegistry = Record<ServiceSlug, ServicePageConfig>;