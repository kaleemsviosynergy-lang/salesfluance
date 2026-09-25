/**
 * SalesFluance Content Layer — Master Playbook Domain Model (Phase 1)
 *
 * This is the data-layer counterpart to `types/blog.ts` and `types/service.ts`,
 * scoped to Phase 1 of the approved Master Playbook Architecture v0.2 /
 * Technical Design. It has no dependency on React, Next.js routing, or any
 * rendering concern — pure data modeling, exactly like its two siblings.
 *
 * CORE PRINCIPLE: "One framework. Multiple chapters. Connected paths to
 * revenue execution." The framework below (`FRAMEWORK_STAGES`) is the
 * SalesFluance revenue-execution framework and is completely separate from
 * FLUANZ (the "Observation → Signal → Evidence → Finding → Recommendation →
 * Executive Decision" product methodology in `components/home/
 * RevenueReadiness.tsx`). Nothing in this file references, imports, or
 * derives from FLUANZ, and nothing here should ever be renamed to resemble
 * it — nothing here should ever be renamed to resemble it, in name or in
 * stage vocabulary.
 *
 * Reuse discipline: this file imports, and never redefines, the primitives
 * that already govern services and blog posts — `ContentStatus`,
 * `ServiceSlug`, `IndustrySlug`, `ContentProvenance`. A Playbook chapter's
 * publishing gate is the same concept as a blog post's or a service's and
 * must stay the same type, or the three content-access layers could
 * silently drift apart. `ImageAsset` is deliberately NOT imported here —
 * no field in this Phase 1 model requires it (no `featuredImage` field is
 * part of the approved Phase 1 scope); import it if and when a real field
 * needs it, rather than in advance of need.
 *
 * Like `types/blog.ts`, every interface here is a plain, JSON-serializable
 * shape — no functions, no class instances — so this model is portable to
 * a future CMS payload or AI-generation output without touching the
 * content-access layer (`lib/content/getPlaybookChapter.ts`) or any
 * consuming route.
 *
 * Phase 1 explicitly does NOT create any chapter content, any route, or
 * any UI. This file only establishes the type system a later phase will
 * author real chapters against.
 */

import type {
  ContentProvenance,
  ContentStatus,
  IndustrySlug,
  ServiceSlug,
} from "./shared";
import type { BlogVisualId } from "./blog";

// ---------------------------------------------------------------------------
// Playbook Chapter Kind — the four routable "chapter" shapes the Playbook
// system supports. All four share one content model (see
// `PlaybookChapterConfig` below) rather than being four separate entity
// types — see the approved Technical Design, Section 2, for why a shared
// entity with a `kind` discriminant was chosen over either one monolithic
// entity or a fully separate entity per kind.
// ---------------------------------------------------------------------------

export const PLAYBOOK_CHAPTER_KINDS = ["hub", "framework", "service", "industry"] as const;

export type PlaybookChapterKind = (typeof PLAYBOOK_CHAPTER_KINDS)[number];

// ---------------------------------------------------------------------------
// Framework Stages — the locked SalesFluance revenue-execution framework.
// This is the single source of truth for both the stage ids (used for
// typing/validation/references) and their display copy (used for
// rendering). No future chapter file should ever hardcode a stage's label
// or description inline — it references the id, and a renderer resolves
// the id against `FRAMEWORK_STAGE_DETAILS` below. This is what keeps "one
// framework" true at the code level, not just as a stated principle.
//
// VALIDATE and VERIFY are deliberately both present and are near-synonyms
// in plain English — the descriptions below encode the required
// distinction explicitly:
//   VALIDATE = determine whether the information, data, or inputs are
//              reliable enough to act on.
//   VERIFY   = determine whether the resulting activity, output, or
//              outcome meets the required standard.
// ---------------------------------------------------------------------------

export const FRAMEWORK_STAGES = [
  "define",
  "discover",
  "validate",
  "prioritize",
  "activate",
  "engage",
  "verify",
  "learn",
] as const;

export type FrameworkStage = (typeof FRAMEWORK_STAGES)[number];

export interface FrameworkStageDetail {
  label: string;
  description: string;
  /** Explicit display/sequence order — never inferred from array or object
   *  key iteration order, which is not a safe ordering guarantee to lean on. */
  order: number;
}

/**
 * The single source of truth for every framework stage's display label,
 * description, and order. A `frameworkStageDiagram` content block (see
 * below) renders every stage sorted by `.order`, and a chapter referencing
 * a stage id resolves its label/description from here — never restated.
 */
export const FRAMEWORK_STAGE_DETAILS: Record<FrameworkStage, FrameworkStageDetail> = {
  define: {
    label: "Define",
    description:
      "Establish which accounts, buying roles, and conditions a revenue motion should target.",
    order: 1,
  },
  discover: {
    label: "Discover",
    description:
      "Surface the data and commercial signals relevant to those targets.",
    order: 2,
  },
  validate: {
    label: "Validate",
    description:
      "Determine whether the information, data, or inputs discovered are reliable enough to act on.",
    order: 3,
  },
  prioritize: {
    label: "Prioritize",
    description:
      "Determine what deserves attention right now, based on fit, signal, timing, and capacity.",
    order: 4,
  },
  activate: {
    label: "Activate",
    description:
      "Create qualified interest through demand-creation and lead-capture motions — two distinct " +
      "motions held within one stage, never collapsed into a single concept (see PlaybookProcessFlowBlock " +
      "and PlaybookComparisonGridBlock, which a future Activate chapter uses to keep the two visibly separate).",
    order: 5,
  },
  engage: {
    label: "Engage",
    description: "Turn interest into a structured commercial conversation.",
    order: 6,
  },
  verify: {
    label: "Verify",
    description:
      "Determine whether the resulting activity, output, or outcome meets the required standard.",
    order: 7,
  },
  learn: {
    label: "Learn",
    description: "Feed outcomes back into the system to improve the next cycle.",
    order: 8,
  },
};

// ---------------------------------------------------------------------------
// Evidence Basis — internal content-governance metadata only. This exists
// so a Playbook chapter's authored relationship to an industry can be
// tagged with how certain that relationship actually is, per the locked
// instruction that service × industry relationships must remain
// evidence-based and must never be manufactured.
//
// IMPORTANT: this is NOT a public marketing badge. Nothing in this Phase
// requires or implies rendering "(Observed)" / "(Inferred)" labels on a
// live page — that is a future, separate design/copy decision, if made at
// all. For Phase 1 it exists purely as typed relationship metadata for
// validation and editorial review.
// ---------------------------------------------------------------------------

export const EVIDENCE_BASES = ["observed", "inferred", "needs-validation"] as const;

export type EvidenceBasis = (typeof EVIDENCE_BASES)[number];

/** A single authored industry relationship, carrying its evidence basis. */
export interface PlaybookRelatedIndustry {
  slug: IndustrySlug;
  basis: EvidenceBasis;
}

// ---------------------------------------------------------------------------
// Framework Stage Mapping — how a chapter (framework, service, or industry)
// declares which stage(s) of the framework it belongs to.
// ---------------------------------------------------------------------------

export interface PlaybookFrameworkStageMapping {
  primary: FrameworkStage;
  secondary?: FrameworkStage[];
}

// ---------------------------------------------------------------------------
// Use Cases — stable identifiers for the six existing Playbook concepts
// ("Build a Revenue-Ready ICP", etc.), so the same use case can be
// referenced from multiple chapters (e.g. "Map the Buying Committee" from
// both the Engage framework chapter and the Account-Based Marketing
// service chapter) without duplicating its title/description in each
// place. This mirrors `FRAMEWORK_STAGE_DETAILS` exactly: a closed id union
// plus a single details map, both living here — not a separate registry
// file, not a separate content entity, not a separate route. See the
// Phase 1 final report for the explicit reasoning on why this satisfies
// "stable useCaseId references" without requiring a fifth file.
//
// These six are preserved conceptually, per the locked reconciliation —
// none are deleted, and none become an independent competing system.
// ---------------------------------------------------------------------------

export const PLAYBOOK_USE_CASE_IDS = [
  "revenue-ready-icp",
  "signal-led-campaign",
  "accounts-to-opportunities",
  "revenue-readiness-system",
  "buying-committee-mapping",
  "feedback-loop",
] as const;

export type PlaybookUseCaseId = (typeof PLAYBOOK_USE_CASE_IDS)[number];

export interface PlaybookUseCaseDetail {
  title: string;
  description: string;
}

/**
 * The single source of truth for each use case's title and description —
 * a `useCase` content block (see below) stores only the id; a renderer
 * resolves the title/description from here. Descriptions are carried over
 * verbatim from the existing (pre-Playbook) `/resources/playbooks` page
 * copy, since that page's descriptions are the only currently-approved
 * editorial text for these six concepts — nothing here is newly invented.
 */
export const PLAYBOOK_USE_CASE_DETAILS: Record<PlaybookUseCaseId, PlaybookUseCaseDetail> = {
  "revenue-ready-icp": {
    title: "Build a Revenue-Ready ICP",
    description:
      "A practical framework for defining the accounts, buying roles, signals, and conditions that should shape a B2B growth campaign.",
  },
  "signal-led-campaign": {
    title: "Design a Signal-Led Campaign",
    description:
      "Move beyond static lists by connecting account intelligence, commercial signals, messaging, and engagement into one campaign system.",
  },
  "accounts-to-opportunities": {
    title: "From Accounts to Opportunities",
    description:
      "A framework for turning researched accounts and decision-makers into structured, prioritized opportunities for revenue teams.",
  },
  "revenue-readiness-system": {
    title: "Build a Revenue Readiness System",
    description:
      "Understand the conditions that determine whether an organization is actually ready to convert commercial intelligence into pipeline.",
  },
  "buying-committee-mapping": {
    title: "Map the Buying Committee",
    description:
      "Identify the people, relationships, influence patterns, and engagement signals that shape complex B2B buying decisions.",
  },
  "feedback-loop": {
    title: "Build the Feedback Loop",
    description:
      "Create a repeatable system for using campaign performance, qualification, client feedback, and testing to improve the next cycle.",
  },
};

// ---------------------------------------------------------------------------
// SEO — deliberately does NOT include a `canonical` field. Canonical URLs
// are never author-controlled content: the future route/metadata layer
// derives a chapter's canonical from `/resources/playbooks/<slug>`, the
// same way `buildMetadata({ path })` already derives every other page's
// canonical in this codebase. `validatePlaybookConfig.ts` actively rejects
// a stray `canonical` field if one is present, rather than silently
// accepting and ignoring it.
// ---------------------------------------------------------------------------

export interface PlaybookSEO {
  title: string;
  description: string;
  keywords?: string[];
}

// ---------------------------------------------------------------------------
// Content Blocks — the Playbook's content-block union. Extends the same
// philosophy as `BlogContentBlock` in `types/blog.ts` (a discriminated
// union on `type`, each variant validated by its own case in the
// validator's switch) with the richer block set the approved Technical
// Design calls for, since Playbook chapters need to hold structured
// diagnostics/checklists/failure-modes/etc., not just prose.
// ---------------------------------------------------------------------------

export const PLAYBOOK_BLOCK_TYPES = [
  "paragraph",
  "heading",
  "list",
  "frameworkStageDiagram",
  "processFlow",
  "comparisonGrid",
  "callout",
  "serviceRelationshipCard",
  "industryRelationshipCard",
  "checklist",
  "diagnostic",
  "failureMode",
  "implementationStep",
  "useCase",
  "relatedResource",
  "visual",
] as const;

export type PlaybookBlockType = (typeof PLAYBOOK_BLOCK_TYPES)[number];

export interface PlaybookParagraphBlock {
  type: "paragraph";
  text: string;
}

export interface PlaybookHeadingBlock {
  type: "heading";
  level: 2 | 3;
  text: string;
}

export interface PlaybookListBlock {
  type: "list";
  items: string[];
}

/** Renders the 8-stage sequence from `FRAMEWORK_STAGE_DETAILS`, optionally
 *  highlighting one stage. Never carries its own copy of stage labels. */
export interface PlaybookFrameworkStageDiagramBlock {
  type: "frameworkStageDiagram";
  highlightStage?: FrameworkStage;
}

export interface PlaybookProcessFlowStep {
  label: string;
  description?: string;
}

/** A directional flow of named steps — e.g. Activate's demand-creation vs.
 *  lead-capture motions, kept as two distinct steps rather than one. */
export interface PlaybookProcessFlowBlock {
  type: "processFlow";
  steps: PlaybookProcessFlowStep[];
}

export interface PlaybookComparisonColumn {
  label: string;
  items: string[];
}

export interface PlaybookComparisonGridBlock {
  type: "comparisonGrid";
  columns: PlaybookComparisonColumn[];
}

export const PLAYBOOK_CALLOUT_TONES = ["note", "warning"] as const;
export type PlaybookCalloutTone = (typeof PLAYBOOK_CALLOUT_TONES)[number];

export interface PlaybookCalloutBlock {
  type: "callout";
  tone: PlaybookCalloutTone;
  text: string;
}

/**
 * References an existing service by slug only — never a service's title,
 * description, or category. Resolved at render time via the existing
 * `getServiceConfig`/`tryGetServiceConfig` in `lib/content/
 * getServiceConfig.ts`. The service registry remains the sole source of
 * truth; this block never duplicates it.
 */
export interface PlaybookServiceRelationshipCardBlock {
  type: "serviceRelationshipCard";
  serviceSlug: ServiceSlug;
}

/**
 * References an existing industry by slug only, carrying the same
 * evidence-basis tag as `PlaybookRelatedIndustry` above — an industry
 * relationship inside content is held to the same "do not manufacture
 * relationships" discipline as the chapter-level `relatedIndustries` field.
 */
export interface PlaybookIndustryRelationshipCardBlock {
  type: "industryRelationshipCard";
  industrySlug: IndustrySlug;
  basis: EvidenceBasis;
}

export interface PlaybookChecklistItem {
  text: string;
}

export interface PlaybookChecklistBlock {
  type: "checklist";
  items: PlaybookChecklistItem[];
}

export interface PlaybookDiagnosticCriterion {
  question: string;
  guidance: string;
}

/** Non-scored diagnostic criteria, matching the existing, already-approved
 *  editorial precedent set by the published "ABM Readiness Check" article —
 *  a qualitative readiness framing, never a fabricated numeric score. */
export interface PlaybookDiagnosticBlock {
  type: "diagnostic";
  criteria: PlaybookDiagnosticCriterion[];
}

export interface PlaybookFailureModeBlock {
  type: "failureMode";
  title: string;
  symptom: string;
  likelyCause: string;
  recommendedFix: string;
}

export interface PlaybookImplementationStepBlock {
  type: "implementationStep";
  stepNumber: number;
  title: string;
  description: string;
}

/** References one of the six reconciled use-case concepts by id only —
 *  see `PLAYBOOK_USE_CASE_DETAILS` above for where its title/description
 *  actually live. */
export interface PlaybookUseCaseBlock {
  type: "useCase";
  useCaseId: PlaybookUseCaseId;
}

export const PLAYBOOK_RELATED_RESOURCE_TYPES = ["article", "chapter"] as const;
export type PlaybookRelatedResourceType = (typeof PLAYBOOK_RELATED_RESOURCE_TYPES)[number];

/**
 * A single explicit cross-link to a blog article (by its existing slug in
 * `content/blog/`) or another Playbook chapter (by its slug in
 * `content/playbooks/`). Never duplicates the target's title/description —
 * resolved at render time against the respective registry's accessor.
 */
export interface PlaybookRelatedResourceBlock {
  type: "relatedResource";
  resourceType: PlaybookRelatedResourceType;
  slug: string;
}

/**
 * Reuses `BlogVisualId`/`BLOG_VISUALS` from `types/blog.ts` verbatim — the
 * three existing visual components (`AIRevenueFlowHero`, `AIVsHumanGrid`,
 * `RevenueWorkflowLoop`) remain owned by the blog domain and are not
 * duplicated or re-declared here. `types/blog.ts` is imported from, never
 * modified.
 */
export interface PlaybookVisualBlock {
  type: "visual";
  visual: BlogVisualId;
}

export type PlaybookContentBlock =
  | PlaybookParagraphBlock
  | PlaybookHeadingBlock
  | PlaybookListBlock
  | PlaybookFrameworkStageDiagramBlock
  | PlaybookProcessFlowBlock
  | PlaybookComparisonGridBlock
  | PlaybookCalloutBlock
  | PlaybookServiceRelationshipCardBlock
  | PlaybookIndustryRelationshipCardBlock
  | PlaybookChecklistBlock
  | PlaybookDiagnosticBlock
  | PlaybookFailureModeBlock
  | PlaybookImplementationStepBlock
  | PlaybookUseCaseBlock
  | PlaybookRelatedResourceBlock
  | PlaybookVisualBlock;

// ---------------------------------------------------------------------------
// PlaybookChapterConfig — the single source of truth for one chapter
// (hub, framework, service, or industry), in the same spirit as
// `BlogPostConfig` and `ServicePageConfig`.
// ---------------------------------------------------------------------------

export interface PlaybookChapterConfig {
  /** Bump on any breaking change to this interface or its nested shapes. */
  schemaVersion: 1;
  /** Stable, URL-safe identifier. Must be unique across the registry and
   *  will match the future route segment at `/resources/playbooks/<slug>`.
   *  Kebab-case. */
  slug: string;
  kind: PlaybookChapterKind;
  title: string;
  /** Short summary shown in future listings/cards. Not SEO copy — see `seo.description`. */
  excerpt: string;
  /**
   * Editorial gate — reused verbatim from `types/shared.ts`. Production
   * retrieval must refuse anything that is not "published", identically to
   * `ServicePageConfig.status` and `BlogPostConfig.status`.
   */
  status: ContentStatus;
  /** Which framework stage(s) this chapter belongs to. Optional — the hub
   *  chapter, for instance, spans the whole framework rather than mapping
   *  to one stage. */
  frameworkStages?: PlaybookFrameworkStageMapping;
  /**
   * Related services, referenced by their existing, official `ServiceSlug`
   * — never a Playbook-specific duplicate of the service registry. Kept as
   * a flat slug list, matching `BlogPostConfig.relatedServices` exactly,
   * since a service relationship in this context does not currently need
   * its own evidence-basis tag the way an industry relationship does.
   */
  relatedServices?: ServiceSlug[];
  /**
   * Related industries, each carrying an explicit `EvidenceBasis` tag —
   * deliberately NOT a bare slug array, so an industry claim can never be
   * authored without also declaring how certain it is. See the module-level
   * note on `EvidenceBasis` above.
   */
  relatedIndustries?: PlaybookRelatedIndustry[];
  /** Related blog articles, referenced by their `slug` in `content/blog/`.
   *  A curated list, not an algorithmic recommendation — visibility at
   *  render time is filtered by the content-access layer, not by this data. */
  relatedArticles?: string[];
  /** Related Playbook chapters, referenced by their `slug` in
   *  `content/playbooks/`. Same visibility-filtering discipline applies. */
  relatedChapters?: string[];
  seo: PlaybookSEO;
  /** Structured chapter body. For Phase 1 this type exists but no chapter
   *  content is authored yet — the registry (`content/playbooks/index.ts`)
   *  is intentionally empty. */
  content: PlaybookContentBlock[];
  /** Optional authorship/review trail — reused verbatim from shared.ts. */
  provenance?: ContentProvenance;
  /**
   * ISO 8601 date string. Required once `status` is "published" (enforced
   * by the validator, not by the type system, since a draft legitimately
   * has no publication date yet) — identical rule to `BlogPostConfig.publishedAt`.
   */
  publishedAt?: string;
  /** ISO 8601 date string. Only meaningful once a chapter has been published. */
  updatedAt?: string;
}

// ---------------------------------------------------------------------------
// Registry type — open-ended by design, matching `BlogRegistry` rather than
// the closed, `ServiceSlug`-keyed `ServiceRegistry`. Playbook chapter slugs
// are an unbounded, growing catalog (hub + 8 framework stages + N service
// chapters + N industry chapters and beyond), not a small fixed set.
// ---------------------------------------------------------------------------

export type PlaybookRegistry = Record<string, PlaybookChapterConfig>;
