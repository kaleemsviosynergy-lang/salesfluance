/**
 * SalesFluance Content Service — getBlogPost
 *
 * This is the single abstraction boundary that routing, SEO, and sitemap
 * code must call to retrieve blog content — never `content/blog` directly.
 * Mirrors `lib/content/getServiceConfig.ts` in every material way: today it
 * resolves from the local, in-repo registry; a future CMS migration only
 * changes the body of `getBlogPost`, not any call site, since every caller
 * already treats retrieval as asynchronous.
 *
 * No React/UI dependency — this file is pure business logic.
 */

import { getBlogPost as readFromRegistry, getImplementedBlogSlugs } from "../../content/blog";
import { tryGetServiceConfig } from "./getServiceConfig";
import { validateBlogConfig, type ValidationIssue } from "./validateBlogConfig";
import type { BlogPostConfig } from "../../types/blog";
import type { ServiceSlug } from "../../types/shared";

// ---------------------------------------------------------------------------
// Error types — mirrors getServiceConfig.ts's three-way split exactly, so
// calling code can distinguish "no such article" from "this article is a
// real content bug" from "this article exists but isn't public yet."
// ---------------------------------------------------------------------------

export class BlogPostNotFoundError extends Error {
  readonly slug: string;
  constructor(slug: string) {
    super(`No blog post found for slug "${slug}".`);
    this.name = "BlogPostNotFoundError";
    this.slug = slug;
  }
}

export class BlogPostInvalidError extends Error {
  readonly slug: string;
  readonly issues: ValidationIssue[];
  constructor(slug: string, issues: ValidationIssue[]) {
    super(
      `Blog post configuration for slug "${slug}" failed validation:\n` +
        issues.map((issue) => `  - ${issue.path}: ${issue.message}`).join("\n"),
    );
    this.name = "BlogPostInvalidError";
    this.slug = slug;
    this.issues = issues;
  }
}

export class BlogPostUnpublishedError extends Error {
  readonly slug: string;
  constructor(slug: string) {
    super(`Blog post for slug "${slug}" is not published.`);
    this.name = "BlogPostUnpublishedError";
    this.slug = slug;
  }
}

export type BlogPostError =
  | BlogPostNotFoundError
  | BlogPostInvalidError
  | BlogPostUnpublishedError;

// ---------------------------------------------------------------------------
// Options
// ---------------------------------------------------------------------------

export interface GetBlogPostOptions {
  /**
   * Allow returning posts whose status is "draft" or "review". Strictly for
   * internal preview/staging builds, identical in intent to
   * `GetServiceConfigOptions.allowUnpublished` — production rendering paths
   * must never set this to true.
   */
  allowUnpublished?: boolean;
}

// ---------------------------------------------------------------------------
// Primary accessor (throwing)
//
// Declared `async` by design, even though today's implementation resolves
// synchronously — see the identical note in getServiceConfig.ts. Every
// call site already awaits this function, so a future CMS-backed
// implementation requires no changes outside this file.
// ---------------------------------------------------------------------------

export async function getBlogPost(
  slug: string,
  options: GetBlogPostOptions = {},
): Promise<BlogPostConfig> {
  const raw = readFromRegistry(slug);
  if (raw === undefined) {
    throw new BlogPostNotFoundError(slug);
  }

  const result = validateBlogConfig(raw);
  if (!result.valid) {
    throw new BlogPostInvalidError(slug, result.issues);
  }

  if (!options.allowUnpublished && result.config.status !== "published") {
    throw new BlogPostUnpublishedError(slug);
  }

  return result.config;
}

// ---------------------------------------------------------------------------
// Non-throwing variant — for batch/aggregate contexts where one missing or
// invalid post shouldn't abort the whole operation.
// ---------------------------------------------------------------------------

export type GetBlogPostResult =
  | { ok: true; config: BlogPostConfig }
  | { ok: false; error: BlogPostError };

export async function tryGetBlogPost(
  slug: string,
  options: GetBlogPostOptions = {},
): Promise<GetBlogPostResult> {
  try {
    const config = await getBlogPost(slug, options);
    return { ok: true, config };
  } catch (error) {
    if (
      error instanceof BlogPostNotFoundError ||
      error instanceof BlogPostInvalidError ||
      error instanceof BlogPostUnpublishedError
    ) {
      return { ok: false, error };
    }
    throw error;
  }
}

// ---------------------------------------------------------------------------
// Published listing
//
// The one function a future `/resources/blogs` listing page and sitemap
// integration should use. Validates every registered post and silently
// excludes anything invalid rather than letting one bad record take down
// the whole listing — a real content bug here is still discoverable via
// `getBlogRegistryIssues()`/`validateBlogConfig` in a build-time check, it
// just doesn't crash a page render.
// ---------------------------------------------------------------------------

export async function getPublishedBlogPosts(): Promise<BlogPostConfig[]> {
  const results = await Promise.all(
    getImplementedBlogSlugs().map((slug) => tryGetBlogPost(slug)),
  );
  return results
    .filter((result): result is { ok: true; config: BlogPostConfig } => result.ok)
    .map((result) => result.config);
}

// ---------------------------------------------------------------------------
// Related-content link gating — mirrors SVC-02's
// `filterPublishedRelatedServices` in getServiceConfig.ts exactly. A
// published article's authored `relatedArticles`/`relatedServices` data is
// never mutated in the content file itself; a currently-unpublished or
// unimplemented target is simply omitted from the *rendered* list. If it
// is later approved/implemented, the existing relationship reappears with
// zero content-file changes.
// ---------------------------------------------------------------------------

/**
 * Returns the subset of `config.relatedArticles` that are currently
 * publicly visible (published, valid). Always applies the strict
 * production gate, independent of whether the current page itself is
 * being rendered in a preview/allowUnpublished context — a published
 * article must never link out to a draft one.
 */
export async function filterPublishedRelatedArticles(
  config: BlogPostConfig,
): Promise<string[]> {
  const targets = config.relatedArticles ?? [];
  const visibility = await Promise.all(targets.map((slug) => tryGetBlogPost(slug)));
  return targets.filter((_, index) => visibility[index].ok);
}

/**
 * Returns the subset of `config.relatedServices` that currently have an
 * implemented, published service configuration — reuses
 * `tryGetServiceConfig` from `getServiceConfig.ts` rather than duplicating
 * any service-visibility logic in the blog content layer. Named distinctly
 * from `filterPublishedRelatedServices` in `getServiceConfig.ts` (which
 * filters a `ServicePageConfig`'s related-services *section*, not a blog
 * post's flat slug array) so the two are never confused if both are
 * imported into the same file.
 */
export async function getVisibleRelatedServiceSlugs(
  config: BlogPostConfig,
): Promise<ServiceSlug[]> {
  const targets = config.relatedServices ?? [];
  const visibility = await Promise.all(targets.map((slug) => tryGetServiceConfig(slug)));
  return targets.filter((_, index) => visibility[index].ok);
}

// Re-exported so callers of this module don't also need to import
// `types/shared` directly just to type a related-service slug.
export type { ServiceSlug };
