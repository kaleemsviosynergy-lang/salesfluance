/**
 * SalesFluance Service Page Engine — Shared Domain Primitives
 *
 * These types are consumed by `types/service.ts` and, eventually, by the
 * rendering engine, the content-validation layer, and any future CMS/AI
 * authoring surface. Nothing in this file has any knowledge of React —
 * it is pure data modeling.
 *
 * Design conventions used throughout:
 *  - Enums are modeled as `as const` arrays + derived union types rather than
 *    TypeScript `enum`. This keeps every enum a plain, JSON-serializable
 *    string union (portable to a CMS schema or an AI-generation prompt/schema)
 *    while still giving a runtime array for iteration, validation, and
 *    building select/dropdown options in future authoring tools.
 *  - Every type here is expected to be persisted as plain JSON at some point
 *    (local config today, CMS payload tomorrow) — no functions, no class
 *    instances, no React types.
 */

// ---------------------------------------------------------------------------
// Service Slugs — the 11 flagship services the engine renders.
// ---------------------------------------------------------------------------

export const SERVICE_SLUGS = [
  "lead-generation",
  "account-based-marketing",
  "demand-generation",
  "content-syndication",
  "intent-data",
  "appointment-setting",
  "email-marketing",
  "telemarketing",
  "list-building",
  "data-cleansing",
  "data-appending",
] as const;

/** Unique identifier for a flagship service. Doubles as the route slug. */
export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

// ---------------------------------------------------------------------------
// Service Category — the four flagship-facing categories from the
// Service Portfolio (Strategic Growth Services is intentionally excluded —
// per product decision, its capabilities are folded into flagship services
// rather than exposed as standalone pages).
// ---------------------------------------------------------------------------

export const SERVICE_CATEGORIES = [
  "Demand Generation",
  "Data Solutions",
  "Marketing Services",
  "Sales Support",
] as const;

export type ServiceCategory = (typeof SERVICE_CATEGORIES)[number];

// ---------------------------------------------------------------------------
// Industry Slugs — currently live industries only (per approved IA scope).
// Expand this array once new Industry Playbooks are completed; every
// dependent type derives from it automatically.
// ---------------------------------------------------------------------------

export const INDUSTRY_SLUGS = ["healthcare", "saas", "it-services"] as const;

export type IndustrySlug = (typeof INDUSTRY_SLUGS)[number];

// ---------------------------------------------------------------------------
// Section Type — every renderable section in the approved 18-section IA,
// excluding Footer (global, unconfigured — never part of a page config).
// This is the discriminant used by SectionEntry in service.ts and by the
// engine's SectionRegistry to resolve a data payload to a component.
// ---------------------------------------------------------------------------

export const SECTION_TYPES = [
  "utilityBar",
  "hero",
  "trustIndicators",
  "businessChallenges",
  "ourSolution",
  "serviceOverview",
  "whySalesFluance",
  "businessOutcomes",
  "whoThisIsFor",
  "serviceProcess",
  "deliverables",
  "technologyStack",
  "industriesServed",
  "successMetrics",
  "faqs",
  "relatedServices",
  "finalCta",
] as const;

export type SectionType = (typeof SECTION_TYPES)[number];

// ---------------------------------------------------------------------------
// Icon Name — curated subset of the Lucide React icon set actually used
// across the Design System. Kept as a closed union (rather than `string`)
// so invalid icon references fail at compile time. Extend this list
// deliberately as new sections/services require new icons; do not widen it
// to `string` as a shortcut.
// ---------------------------------------------------------------------------

export const ICON_NAMES = [
  "target",
  "users",
  "trending-up",
  "search",
  "mail",
  "phone",
  "database",
  "shield-check",
  "bar-chart",
  "layers",
  "filter",
  "calendar",
  "check-circle",
  "zap",
  "globe",
  "briefcase",
  "pie-chart",
  "file-text",
  "link",
  "settings",
  "award",
  "clock",
  "arrow-right",
  "star",
  "building",
  "heart-pulse",
  "cpu",
  "handshake",
  "refresh-cw",
  "eye",
  "message-square",
  "list-checks",
  "sparkles",
  "workflow",
] as const;

export type IconName = (typeof ICON_NAMES)[number];

// ---------------------------------------------------------------------------
// Button Variant — matches the Design System's Button component variants.
// ---------------------------------------------------------------------------

export const BUTTON_VARIANTS = ["primary", "secondary", "outline", "text"] as const;

export type ButtonVariant = (typeof BUTTON_VARIANTS)[number];

// ---------------------------------------------------------------------------
// Animation Variant — matches the centralized Framer Motion variants defined
// in lib/animations/variants.ts. "none" is a first-class value, not an
// absence of a value, so `prefers-reduced-motion` and non-animated contexts
// can be expressed explicitly in data rather than inferred.
// ---------------------------------------------------------------------------

export const ANIMATION_VARIANTS = [
  "fadeInUp",
  "staggerContainer",
  "staggerChild",
  "accordionExpand",
  "stickySlide",
  "none",
] as const;

export type AnimationVariant = (typeof ANIMATION_VARIANTS)[number];

// ---------------------------------------------------------------------------
// Content Status — editorial gate. Production builds must refuse to render
// any ServicePageConfig whose status is not "published". This is what makes
// the domain model safe for AI-drafted content (see ContentProvenance below)
// without risking unreviewed copy reaching the live site.
// ---------------------------------------------------------------------------

export const CONTENT_STATUSES = ["draft", "review", "published"] as const;

export type ContentStatus = (typeof CONTENT_STATUSES)[number];

// ---------------------------------------------------------------------------
// Content Provenance — future AI Content Generator compatibility.
// Every AI-authored config or section should be able to declare its origin
// and review trail without changing the rendering contract at all.
// ---------------------------------------------------------------------------

export interface ContentProvenance {
  /** Where this content originated. */
  source: "human" | "ai-generated";
  /** Editorial status — mirrors ServicePageConfig.status but can be tracked per-revision. */
  status: ContentStatus;
  /** Name/id of the human author, if source is "human". */
  authoredBy?: string;
  /** Name/id of the human reviewer who approved AI-generated content. */
  reviewedBy?: string;
  /** ISO 8601 timestamp of the last edit. */
  lastEditedAt?: string;
  /** Free-form note, e.g. the AI generation prompt/model version, for audit purposes. */
  generationNote?: string;
}

// ---------------------------------------------------------------------------
// CMS Metadata — future headless-CMS compatibility. Optional and additive:
// today's local TypeScript configs simply omit this; a CMS-backed config
// populates it without requiring any change to consuming components.
// ---------------------------------------------------------------------------

export interface CMSMeta {
  /** External CMS record id, once content is migrated off local config files. */
  cmsId?: string;
  /** BCP 47 locale tag, reserved for future i18n support. */
  locale?: string;
  /** ISO 8601 timestamp of the last sync from the CMS. */
  updatedAt?: string;
}

// ---------------------------------------------------------------------------
// Core Reusable Primitives
// ---------------------------------------------------------------------------

/** A single call-to-action link, used across Hero, CTA, and inline sections. */
export interface CTALink {
  label: string;
  href: string;
  variant: ButtonVariant;
  /** Opens in a new tab — reserved for external links (e.g. resource downloads). */
  external?: boolean;
}

/**
 * An image asset. `alt` is required at the type level — a config that omits
 * alt text fails to compile, not just fails a lint pass. This is a
 * deliberate accessibility guardrail, not an oversight.
 */
export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

/** A single breadcrumb entry. The final item in a trail typically omits href. */
export interface BreadcrumbItem {
  label: string;
  href?: string;
}

/**
 * Navigation — the in-page navigation contract for a service page: the
 * breadcrumb trail plus the persistent sticky CTA shown once the visitor
 * scrolls past the Hero. Reused directly as the data payload for the
 * "utilityBar" SectionEntry defined in service.ts.
 */
export interface Navigation {
  breadcrumb: BreadcrumbItem[];
  stickyCta: CTALink;
}

/**
 * SEO Metadata — drives the Next.js Metadata API output and the JSON-LD
 * Service schema for a given page. `openGraph` fields are optional
 * overrides; when omitted, the engine falls back to `title`/`description`.
 */
export interface SEOMetadata {
  title: string;
  description: string;
  /** Path-relative canonical URL, e.g. "/services/lead-generation". */
  canonical: string;
  keywords?: string[];
  openGraph?: {
    title?: string;
    description?: string;
    image?: ImageAsset;
  };
}

/**
 * A generic, reusable statistic — label with an optional value. The value is
 * intentionally optional: components must render (or self-hide) correctly
 * with no numeric proof supplied, since fabricated statistics are never
 * permitted. A value is only ever populated once real client data exists.
 */
export interface StatItem {
  label: string;
  value?: string;
}