/**
 * SalesFluance Content Service — getPlaybookChapter (Phase 1)
 *
 * This is the single abstraction boundary that routing, SEO, and sitemap
 * code must call to retrieve Playbook chapter content — never
 * `content/playbooks` directly. Mirrors `lib/content/getBlogPost.ts` in
 * every material way: today it resolves from the local, in-repo registry;
 * a future CMS migration only changes the body of `getPlaybookChapter`, not
 * any call site, since every caller already treats retrieval as
 * asynchronous.
 *
 * PHASE 1 SCOPE: `content/playbooks/index.ts`'s registry is empty, so this
 * file establishes the accessor *pattern* — every function here compiles
 * and behaves correctly against zero records: `getPublishedPlaybookChapters`
 * returns an empty array, `tryGetPlaybookChapter` returns a safe not-found
 * result for any slug, and `getPlaybookChapter` throws the typed not-found
 * error for any slug. No route, no Next.js dependency, no UI — this module
 * remains framework-agnostic, exactly like `getBlogPost.ts` and
 * `getServiceConfig.ts`.
 *
 * Deliberately NOT included in Phase 1 (kept out to avoid overbuilding
 * ahead of real content, per the approved Phase 1 scope): relationship-
 * resolution helpers analogous to `filterPublishedRelatedArticles` /
 * `getVisibleRelatedServiceSlugs` in `getBlogPost.ts`. With no chapters
 * authored yet, there is nothing for such helpers to filter; add them in
 * the phase that authors the first real chapters and needs to render its
 * relationships, following those two functions as the direct precedent.
 *
 * No React/UI dependency — this file is pure business logic.
 */

import {
  getPlaybookChapter as readFromRegistry,
  getImplementedPlaybookSlugs,
} from "../../content/playbooks";
import { validatePlaybookConfig, type ValidationIssue } from "./validatePlaybookConfig";
import type { PlaybookChapterConfig } from "../../types/playbook";

// ---------------------------------------------------------------------------
// Error types — mirrors getBlogPost.ts's/getServiceConfig.ts's three-way
// split exactly, so calling code can distinguish "no such chapter" from
// "this chapter is a real content bug" from "this chapter exists but isn't
// public yet." Public routes (built in a later phase) collapse all three to
// a 404 — that collapsing happens at the route layer, not here.
// ---------------------------------------------------------------------------

export class PlaybookChapterNotFoundError extends Error {
  readonly slug: string;
  constructor(slug: string) {
    super(`No Playbook chapter found for slug "${slug}".`);
    this.name = "PlaybookChapterNotFoundError";
    this.slug = slug;
  }
}

export class PlaybookChapterInvalidError extends Error {
  readonly slug: string;
  readonly issues: ValidationIssue[];
  constructor(slug: string, issues: ValidationIssue[]) {
    super(
      `Playbook chapter configuration for slug "${slug}" failed validation:\n` +
        issues.map((issue) => `  - ${issue.path}: ${issue.message}`).join("\n"),
    );
    this.name = "PlaybookChapterInvalidError";
    this.slug = slug;
    this.issues = issues;
  }
}

export class PlaybookChapterUnpublishedError extends Error {
  readonly slug: string;
  constructor(slug: string) {
    super(`Playbook chapter for slug "${slug}" is not published.`);
    this.name = "PlaybookChapterUnpublishedError";
    this.slug = slug;
  }
}

export type PlaybookChapterError =
  | PlaybookChapterNotFoundError
  | PlaybookChapterInvalidError
  | PlaybookChapterUnpublishedError;

// ---------------------------------------------------------------------------
// Options
// ---------------------------------------------------------------------------

export interface GetPlaybookChapterOptions {
  /**
   * Allow returning chapters whose status is "draft" or "review". Strictly
   * for internal preview/staging builds, identical in intent to
   * `GetBlogPostOptions.allowUnpublished` / `GetServiceConfigOptions.
   * allowUnpublished` — production rendering paths must never set this to
   * true.
   */
  allowUnpublished?: boolean;
}

// ---------------------------------------------------------------------------
// Primary accessor (throwing)
//
// Declared `async` by design, even though today's implementation resolves
// synchronously — see the identical note in getBlogPost.ts/getServiceConfig.ts.
// Every call site should already await this function, so a future
// CMS-backed implementation requires no changes outside this file.
// ---------------------------------------------------------------------------

export async function getPlaybookChapter(
  slug: string,
  options: GetPlaybookChapterOptions = {},
): Promise<PlaybookChapterConfig> {
  const raw = readFromRegistry(slug);
  if (raw === undefined) {
    throw new PlaybookChapterNotFoundError(slug);
  }

  const result = validatePlaybookConfig(raw);
  if (!result.valid) {
    throw new PlaybookChapterInvalidError(slug, result.issues);
  }

  if (!options.allowUnpublished && result.config.status !== "published") {
    throw new PlaybookChapterUnpublishedError(slug);
  }

  return result.config;
}

// ---------------------------------------------------------------------------
// Non-throwing variant — for batch/aggregate contexts where one missing or
// invalid chapter shouldn't abort the whole operation.
// ---------------------------------------------------------------------------

export type GetPlaybookChapterResult =
  | { ok: true; config: PlaybookChapterConfig }
  | { ok: false; error: PlaybookChapterError };

export async function tryGetPlaybookChapter(
  slug: string,
  options: GetPlaybookChapterOptions = {},
): Promise<GetPlaybookChapterResult> {
  try {
    const config = await getPlaybookChapter(slug, options);
    return { ok: true, config };
  } catch (error) {
    if (
      error instanceof PlaybookChapterNotFoundError ||
      error instanceof PlaybookChapterInvalidError ||
      error instanceof PlaybookChapterUnpublishedError
    ) {
      return { ok: false, error };
    }
    throw error;
  }
}

// ---------------------------------------------------------------------------
// Published listing
//
// The one function a future `/resources/playbooks` hub, chapter routes, and
// sitemap integration should use. Validates every registered chapter and
// silently excludes anything invalid rather than letting one bad record
// take down the whole listing. With Phase 1's registry empty, this
// correctly resolves to an empty array.
// ---------------------------------------------------------------------------

export async function getPublishedPlaybookChapters(): Promise<PlaybookChapterConfig[]> {
  const results = await Promise.all(
    getImplementedPlaybookSlugs().map((slug) => tryGetPlaybookChapter(slug)),
  );
  return results
    .filter((result): result is { ok: true; config: PlaybookChapterConfig } => result.ok)
    .map((result) => result.config);
}
