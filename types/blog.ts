/**
 * SalesFluance Content Layer — Blog / Editorial Domain Model (Phase 1A)
 *
 * This is the data-layer counterpart to `types/service.ts`, scoped to the
 * small, curated editorial system approved for the first batch of B2B blog
 * articles. It deliberately reuses primitives already defined in
 * `types/shared.ts` (`ContentStatus`, `ImageAsset`, `ContentProvenance`,
 * `ServiceSlug`) rather than redefining them — a blog post's publishing
 * gate and a service page's publishing gate are the same concept and must
 * stay the same type, or the two content-access layers could silently
 * drift apart.
 *
 * Two axes are modeled independently and must never be conflated:
 *   - `status` (ContentStatus: draft | review | published) — is this
 *     content allowed to be shown publicly right now?
 *   - `role` (ArticleRole: cornerstone | supporting) — what is this
 *     article's editorial job within a pillar? A cornerstone article can
 *     be a draft; a supporting article can be published. Every
 *     combination of the two is valid.
 *
 * Like `types/service.ts`, every interface here is a plain,
 * JSON-serializable shape — no functions, no class instances — so this
 * model is portable to a future CMS payload or AI-generation output
 * without touching the content-access layer (`lib/content/getBlogPost.ts`)
 * or any consuming route.
 *
 * Phase 1A explicitly does NOT build a full article rendering/section
 * engine the way `types/service.ts` does for service pages (see
 * `SectionEntry`/`SECTION_TYPES`) — there are only 13 articles planned and
 * no body copy is being written yet. `BlogContentBlock` below is
 * intentionally minimal: enough structure to avoid a raw markdown/HTML
 * blob, without inventing section types nothing will use for months.
 * Extend that union, not this file's overall shape, when real article
 * bodies are authored in a later phase.
 */

import type {
  ContentProvenance,
  ContentStatus,
  ImageAsset,
  ServiceSlug,
} from "./shared";

// ---------------------------------------------------------------------------
// Editorial Pillars — the six approved taxonomy categories. Fixed by
// editorial decision; do not rename or reorder without a corresponding
// content decision (see docs/SEO.md / the Phase 1 content plan). This is
// taxonomy, not strategy — no pillar is hardcoded as "priority" here, that
// judgment belongs to editorial planning, not the application layer.
// ---------------------------------------------------------------------------

export const BLOG_PILLARS = [
  "Demand & Pipeline Generation",
  "Data & Signal Quality",
  "Account-Based Growth",
  "Revenue Process & Operations",
  "AI & Revenue Systems",
  "B2B Growth",
] as const;

export type BlogPillar = (typeof BLOG_PILLARS)[number];

// ---------------------------------------------------------------------------
// Article Role — editorial architecture, deliberately separate from
// `ContentStatus`. See the module-level note above: role and status are
// independent axes and every combination of the two must be representable.
// ---------------------------------------------------------------------------

export const ARTICLE_ROLES = ["cornerstone", "supporting"] as const;

export type ArticleRole = (typeof ARTICLE_ROLES)[number];

// ---------------------------------------------------------------------------
// Author — minimum viable structure only. No author routes, no profile
// pages, no invented credentials/bios. A stable id plus a display name
// (and an optional plain title) is sufficient for a small in-house
// editorial team; see content/blog/authors.ts for the single shared value
// currently in use.
// ---------------------------------------------------------------------------

export interface BlogAuthor {
  id: string;
  name: string;
  /** Plain role label, e.g. "Editorial Team". No titles/credentials beyond this. */
  title?: string;
}

// ---------------------------------------------------------------------------
// SEO — mirrors the shape (not the type) of `SEOMetadata` in shared.ts.
// Kept as its own interface rather than reusing `SEOMetadata` directly
// because a blog post's social image is a full `ImageAsset` reference
// (reused verbatim from shared.ts) rather than the nested
// `openGraph.image` shape services use — the fields below are what
// Phase 1B/1C's `buildMetadata()` call and future Article JSON-LD need,
// no more.
// ---------------------------------------------------------------------------

export interface BlogSEO {
  title: string;
  description: string;
  /** Path-relative canonical, e.g. "/resources/blogs/<slug>" — matches the
   *  convention used by `SEOMetadata.canonical` in shared.ts. */
  canonical: string;
  keywords?: string[];
  socialImage?: ImageAsset;
}

// ---------------------------------------------------------------------------
// Content Body — intentionally minimal. This is a placeholder-safe,
// structured representation (plain data, no markdown/MDX pipeline), left
// open to extension via the union below once real sections are needed.
// Phase 1A does not implement a renderer for this — see the module-level
// note above.
// ---------------------------------------------------------------------------

export interface BlogParagraphBlock {
  type: "paragraph";
  text: string;
}

export interface BlogHeadingBlock {
  type: "heading";
  level: 2 | 3;
  text: string;
}

export interface BlogListBlock {
  type: "list";
  items: string[];
}

export type BlogContentBlock =
  | BlogParagraphBlock
  | BlogHeadingBlock
  | BlogListBlock;

// ---------------------------------------------------------------------------
// BlogPostConfig — the single source of truth for one article, in the
// same spirit as `ServicePageConfig`.
// ---------------------------------------------------------------------------

export interface BlogPostConfig {
  /** Bump on any breaking change to this interface or its nested shapes. */
  schemaVersion: 1;
  /** Stable, URL-safe identifier. Must be unique across the registry and
   *  match the route segment at `/resources/blogs/<slug>`. Kebab-case. */
  slug: string;
  title: string;
  /** Short summary shown in listings/cards. Not SEO copy — see `seo.description`. */
  excerpt: string;
  /**
   * Editorial gate — reused verbatim from `types/shared.ts`. Production
   * retrieval must refuse anything that is not "published", identically
   * to `ServicePageConfig.status`.
   */
  status: ContentStatus;
  /** Editorial role — see the module-level note above. Independent of `status`. */
  role: ArticleRole;
  pillar: BlogPillar;
  tags?: string[];
  author: BlogAuthor;
  /**
   * ISO 8601 date string. Required once `status` is "published" (enforced
   * by the validator, not by the type system, since a draft legitimately
   * has no publication date yet).
   */
  publishedAt?: string;
  /** ISO 8601 date string. Only meaningful once a post has been published. */
  updatedAt?: string;
  seo: BlogSEO;
  featuredImage?: ImageAsset;
  /**
   * Related services, referenced by their existing, official `ServiceSlug`
   * — never a blog-specific duplicate of the service registry. A related
   * service that is not currently implemented/published is still a valid
   * *reference* here; visibility at render time is filtered by the
   * content-access layer, not by this data.
   */
  relatedServices?: ServiceSlug[];
  /**
   * Related articles, referenced by their `slug`. A curated list, not an
   * algorithmic recommendation — see `filterPublishedRelatedArticles` in
   * `lib/content/getBlogPost.ts` for how unpublished/invalid targets are
   * kept out of public output without deleting the authored relationship.
   */
  relatedArticles?: string[];
  /**
   * Minimal structured body. For an unwritten/placeholder article this is
   * a single block clearly marked as a placeholder — never fabricated
   * copy. See the module-level note above on scope.
   */
  content: BlogContentBlock[];
  /** Optional authorship/review trail — reused verbatim from shared.ts. */
  provenance?: ContentProvenance;
}

// ---------------------------------------------------------------------------
// Registry type — open-ended by design. Unlike `ServiceSlug` (a small,
// fixed set of 11), blog slugs are an unbounded, growing catalog, so this
// cannot be a closed `Record<ServiceSlug, ...>`-style mapped type the way
// `ServiceRegistry` is.
// ---------------------------------------------------------------------------

export type BlogRegistry = Record<string, BlogPostConfig>;
