/**
 * SalesFluance Content Layer — Master Playbook Registry (Phase 1)
 *
 * This is the single aggregation point for every Playbook chapter's content
 * configuration, in the same spirit as `content/blog/index.ts` and
 * `content/services/index.ts`. It has no dependency on React, Next.js
 * routing, or any rendering concern.
 *
 * IMPORTANT — this module is the raw registry. Routes, sitemap
 * integration, and any other production code MUST NOT import from here
 * directly; they must go through `lib/content/getPlaybookChapter.ts`, which
 * is the one controlled access layer responsible for validation and
 * publication-status gating. This module only stores records and filters
 * by `status` — it does not validate shape, exactly as the equivalent
 * comment on `content/blog/index.ts` describes for the blog registry.
 *
 * PHASE 3A UPDATE: three additional framework chapters have been
 * registered — `define`, `discover`, and `validate` — alongside the
 * Phase 2 `activate` chapter. No hub-chapter content record, service
 * chapter, industry chapter, or use-case record has been added; the Master
 * Playbook Hub at `/resources/playbooks` remains a page that reads this
 * registry (via the accessor layer) rather than a `PlaybookChapterConfig`
 * of its own — see the Phase 2 final report for the reasoning, reaffirmed
 * at the Phase 2 checkpoint.
 *
 * ADDING A NEW CHAPTER requires exactly two changes, mirroring the blog
 * registry's own convention:
 *   1. Create `content/playbooks/<slug>.ts` exporting a `PlaybookChapterConfig`.
 *   2. Add one line to `playbookRegistry` below, keyed by that same slug.
 *
 * REGISTRY-INTEGRITY AUDIT: `content/blog/index.ts`'s `getBlogRegistryIssues()`
 * is the precedent for a cross-record audit (duplicate slugs, dangling
 * `relatedChapters`/`relatedArticles`/`relatedServices` references). That
 * audit is deliberately NOT built here in Phase 1 — with an empty registry
 * there is nothing yet to audit, and building it now would be speculative
 * ahead of real content. Add it once real chapters exist to check, following
 * that exact precedent.
 *
 * FUTURE CMS MIGRATION: mirrors the note in `content/blog/index.ts` — the
 * accessor functions below do a synchronous local-object lookup today; a
 * CMS migration only changes their implementation to an async
 * fetch-and-validate call against the same `PlaybookChapterConfig` shape.
 */

import type { PlaybookChapterConfig, PlaybookRegistry } from "../../types/playbook";

import { activateConfig } from "./activate";
import { defineConfig } from "./define";
import { discoverConfig } from "./discover";
import { validateConfig } from "./validate";

// ---------------------------------------------------------------------------
// Registry
// ---------------------------------------------------------------------------

export const playbookRegistry: PlaybookRegistry = {
  define: defineConfig,
  discover: discoverConfig,
  validate: validateConfig,
  activate: activateConfig,
};

// ---------------------------------------------------------------------------
// Accessors
// ---------------------------------------------------------------------------

/**
 * Raw lookup by slug. Returns `undefined` if no chapter with that slug has
 * been authored. Not validated, not publication-gated — internal use by
 * `lib/content/getPlaybookChapter.ts` only.
 */
export function getPlaybookChapter(slug: string): PlaybookChapterConfig | undefined {
  return playbookRegistry[slug];
}

/** Every slug currently registered, regardless of status. */
export function getImplementedPlaybookSlugs(): string[] {
  return Object.keys(playbookRegistry);
}

/**
 * Raw, status-filtered (but NOT shape-validated) published configs. Kept
 * for parity/audit purposes with `getPublishedBlogPostConfigs` in
 * `content/blog/index.ts`. Production code should use
 * `getPublishedPlaybookChapters` from `lib/content/getPlaybookChapter.ts`
 * instead, which additionally validates each config and excludes any that
 * fail — this function trusts the registry's TypeScript shape and does not.
 */
export function getPublishedPlaybookChapterConfigs(): PlaybookChapterConfig[] {
  return Object.values(playbookRegistry).filter((config) => config.status === "published");
}
