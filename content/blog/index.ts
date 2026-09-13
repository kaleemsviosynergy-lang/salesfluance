/**
 * SalesFluance Content Layer — Blog Registry (Phase 1A)
 *
 * This is the single aggregation point for every blog article's content
 * configuration, in the same spirit as `content/services/index.ts`. It has
 * no dependency on React, Next.js routing, or any rendering concern.
 *
 * IMPORTANT — this module is the raw registry. Routes, sitemap
 * integration, and any other production code MUST NOT import from here
 * directly; they must go through `lib/content/getBlogPost.ts`, which is
 * the one controlled access layer responsible for validation and
 * publication-status gating. This module only filters by `status` — it
 * does not validate shape, and a route that reads it directly could
 * render an invalid or unpublished config. (This is a stricter rule than
 * the current service registry follows in practice — see the comment on
 * `getPublishedBlogPostConfigs` below — because Phase 1A is establishing
 * this convention fresh, rather than retrofitting it.)
 *
 * ADDING A NEW ARTICLE requires exactly two changes:
 *   1. Create `content/blog/<slug>.ts` exporting a `BlogPostConfig`.
 *   2. Add one line to `blogRegistry` below, keyed by that same slug.
 *
 * FUTURE CMS MIGRATION: mirrors the note in `content/services/index.ts` —
 * `getBlogPost` here does a synchronous local-object lookup today; a CMS
 * migration only changes this function's implementation to an async
 * fetch-and-validate call against the same `BlogPostConfig` shape.
 */

import type { BlogPostConfig, BlogRegistry } from "../../types/blog";
import { getImplementedServiceSlugs } from "../services";
import { validateBlogConfig, type ValidationIssue } from "../../lib/content/validateBlogConfig";

import { demandGenerationVsLeadGenerationConfig } from "./demand-generation-vs-lead-generation";
import { signalQualityVsSignalVolumeConfig } from "./signal-quality-vs-signal-volume";
import { crmDataDecayProblemConfig } from "./crm-data-decay-problem";
import { whatDataAppendingActuallyFixesConfig } from "./what-data-appending-actually-fixes";
import { abmReadinessCheckConfig } from "./abm-readiness-check";
import { accountPrioritizationWithoutGuessworkConfig } from "./account-prioritization-without-guesswork";
import { theVerificationGapConfig } from "./the-verification-gap";
import { whatQualifiedActuallyMeansConfig } from "./what-qualified-actually-means";
import { outsourcedVsInHouseSdrConfig } from "./outsourced-vs-in-house-sdr";
import { mqlToSalesConversationGapConfig } from "./mql-to-sales-conversation-gap";
import { whereAiActuallyHelpsInB2bRevenueConfig } from "./where-ai-actually-helps-in-b2b-revenue";
import { firstPartyVsThirdPartyIntentDataConfig } from "./first-party-vs-third-party-intent-data";
import { listBuildingWithoutTheReputationProblemConfig } from "./list-building-without-the-reputation-problem";

// ---------------------------------------------------------------------------
// Registry
//
// All 13 approved first-batch articles are registered as Phase 1A
// architecture placeholders — every one is `status: "draft"`. None of them
// are reachable through any public retrieval path (see
// `lib/content/getBlogPost.ts`) until a human editor changes their status.
// ---------------------------------------------------------------------------

export const blogRegistry: BlogRegistry = {
  "demand-generation-vs-lead-generation": demandGenerationVsLeadGenerationConfig,
  "signal-quality-vs-signal-volume": signalQualityVsSignalVolumeConfig,
  "crm-data-decay-problem": crmDataDecayProblemConfig,
  "what-data-appending-actually-fixes": whatDataAppendingActuallyFixesConfig,
  "abm-readiness-check": abmReadinessCheckConfig,
  "account-prioritization-without-guesswork": accountPrioritizationWithoutGuessworkConfig,
  "the-verification-gap": theVerificationGapConfig,
  "what-qualified-actually-means": whatQualifiedActuallyMeansConfig,
  "outsourced-vs-in-house-sdr": outsourcedVsInHouseSdrConfig,
  "mql-to-sales-conversation-gap": mqlToSalesConversationGapConfig,
  "where-ai-actually-helps-in-b2b-revenue": whereAiActuallyHelpsInB2bRevenueConfig,
  "first-party-vs-third-party-intent-data": firstPartyVsThirdPartyIntentDataConfig,
  "list-building-without-the-reputation-problem": listBuildingWithoutTheReputationProblemConfig,
};

// ---------------------------------------------------------------------------
// Accessors
// ---------------------------------------------------------------------------

/**
 * Raw lookup by slug. Returns `undefined` if no article with that slug has
 * been authored. Not validated, not publication-gated — internal use by
 * `lib/content/getBlogPost.ts` only.
 */
export function getBlogPost(slug: string): BlogPostConfig | undefined {
  return blogRegistry[slug];
}

/** Every slug currently registered, regardless of status. */
export function getImplementedBlogSlugs(): string[] {
  return Object.keys(blogRegistry);
}

/**
 * Raw, status-filtered (but NOT shape-validated) published configs. Kept
 * for parity/audit purposes with `getPublishedServiceConfigs` in
 * `content/services/index.ts`. Production code should use
 * `getPublishedBlogPosts` from `lib/content/getBlogPost.ts` instead, which
 * additionally validates each config and excludes any that fail — this
 * function trusts the registry's TypeScript shape and does not.
 */
export function getPublishedBlogPostConfigs(): BlogPostConfig[] {
  return Object.values(blogRegistry).filter((config) => config.status === "published");
}

// ---------------------------------------------------------------------------
// Registry-integrity audit
//
// Cross-record checks that a single config's validator cannot perform on
// its own (duplicate slugs, dangling relatedArticles/relatedServices
// references). Mirrors the role `getUnimplementedServiceSlugs` plays for
// services: a reporting utility for a future build-time/CI check, not
// something wired into any runtime path today — one bad or unfinished
// article must never be able to break another article's page, so this is
// intentionally never invoked automatically.
// ---------------------------------------------------------------------------

export function getBlogRegistryIssues(): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const implementedServiceSlugs = new Set(getImplementedServiceSlugs());
  const seenSlugValues = new Set<string>();

  for (const [key, config] of Object.entries(blogRegistry)) {
    const result = validateBlogConfig(config);
    if (!result.valid) {
      for (const issue of result.issues) {
        issues.push({ path: `${key}${issue.path.replace(/^\$/, "")}`, message: issue.message });
      }
      // Shape is unproven for this entry — skip the cross-reference checks
      // below, which assume a validated `BlogPostConfig`.
      continue;
    }

    if (config.slug !== key) {
      issues.push({
        path: `${key}.slug`,
        message: `registry key "${key}" does not match config.slug "${config.slug}"`,
      });
    }

    if (seenSlugValues.has(config.slug)) {
      issues.push({ path: `${key}.slug`, message: `duplicate slug value "${config.slug}"` });
    }
    seenSlugValues.add(config.slug);

    for (const relatedSlug of config.relatedArticles ?? []) {
      if (!(relatedSlug in blogRegistry)) {
        issues.push({
          path: `${key}.relatedArticles`,
          message: `references unknown article slug "${relatedSlug}"`,
        });
      }
    }

    for (const serviceSlug of config.relatedServices ?? []) {
      if (!implementedServiceSlugs.has(serviceSlug)) {
        issues.push({
          path: `${key}.relatedServices`,
          message: `references service slug "${serviceSlug}", which has no implemented service configuration`,
        });
      }
    }
  }

  return issues;
}
