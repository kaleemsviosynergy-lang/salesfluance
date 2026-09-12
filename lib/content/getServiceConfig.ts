/**
 * SalesFluance Content Service — getServiceConfig
 *
 * This is the single abstraction boundary that routing, SEO, and sitemap
 * code call to retrieve a service's content — never the raw registry
 * directly. Today it resolves from the local, in-repo content registry
 * (content/services). When content moves to a headless CMS, only the body
 * of `getServiceConfig` changes — from a synchronous object lookup to an
 * async fetch against the CMS, validated against the exact same
 * `ServicePageConfig` contract. Every caller already awaits this function,
 * so that migration requires zero changes at any call site.
 *
 * No React/UI dependency — this file is pure business logic.
 */

import { getServiceConfig as readFromRegistry } from "../../content/services";
import { validateServiceConfig, type ValidationIssue } from "./validateServiceConfig";
import type { ServicePageConfig, SectionEntry } from "../../types/service";
import { SERVICE_SLUGS, type ServiceSlug } from "../../types/shared";

// ---------------------------------------------------------------------------
// Error types
//
// Distinct classes let calling code branch cleanly on failure mode: an
// unknown slug should typically resolve to a 404 (Next.js `notFound()`); an
// invalid or unpublished config represents an authoring/content-pipeline
// state that calling code may want to handle very differently (e.g. fail
// the build, or fall back to a "coming soon" state in preview mode).
// ---------------------------------------------------------------------------

export class ServiceConfigNotFoundError extends Error {
  readonly slug: string;
  constructor(slug: string) {
    super(`No service configuration found for slug "${slug}".`);
    this.name = "ServiceConfigNotFoundError";
    this.slug = slug;
  }
}

export class ServiceConfigInvalidError extends Error {
  readonly slug: string;
  readonly issues: ValidationIssue[];
  constructor(slug: string, issues: ValidationIssue[]) {
    super(
      `Service configuration for slug "${slug}" failed validation:\n` +
        issues.map((issue) => `  - ${issue.path}: ${issue.message}`).join("\n"),
    );
    this.name = "ServiceConfigInvalidError";
    this.slug = slug;
    this.issues = issues;
  }
}

export class ServiceConfigUnpublishedError extends Error {
  readonly slug: string;
  constructor(slug: string) {
    super(`Service configuration for slug "${slug}" is not published.`);
    this.name = "ServiceConfigUnpublishedError";
    this.slug = slug;
  }
}

export type ServiceConfigError =
  | ServiceConfigNotFoundError
  | ServiceConfigInvalidError
  | ServiceConfigUnpublishedError;

// ---------------------------------------------------------------------------
// Options
// ---------------------------------------------------------------------------

export interface GetServiceConfigOptions {
  /**
   * Allow returning configs whose status is "draft" or "review". Intended
   * strictly for internal preview/staging builds — production rendering
   * paths must never set this to true, since it bypasses the editorial
   * gate that keeps unreviewed (including AI-generated) copy off the live
   * site.
   */
  allowUnpublished?: boolean;
}

// ---------------------------------------------------------------------------
// Guard
// ---------------------------------------------------------------------------

function isServiceSlug(value: string): value is ServiceSlug {
  return (SERVICE_SLUGS as readonly string[]).includes(value);
}

// ---------------------------------------------------------------------------
// Primary accessor (throwing)
//
// Declared `async` by design, even though today's implementation resolves
// synchronously from the local registry. Every call site therefore already
// treats retrieval as asynchronous, so replacing the local lookup below
// with a real CMS `fetch()` call later requires no changes outside this
// file — that is the entire point of this abstraction boundary.
// ---------------------------------------------------------------------------

export async function getServiceConfig(
  slug: string,
  options: GetServiceConfigOptions = {},
): Promise<ServicePageConfig> {
  if (!isServiceSlug(slug)) {
    throw new ServiceConfigNotFoundError(slug);
  }

  const raw = readFromRegistry(slug);
  if (raw === undefined) {
    throw new ServiceConfigNotFoundError(slug);
  }

  const result = validateServiceConfig(raw);
  if (!result.valid) {
    throw new ServiceConfigInvalidError(slug, result.issues);
  }

  if (!options.allowUnpublished && result.config.status !== "published") {
    throw new ServiceConfigUnpublishedError(slug);
  }

  return result.config;
}

// ---------------------------------------------------------------------------
// Non-throwing variant
//
// Useful for batch/aggregate contexts — sitemap generation, registry health
// checks, admin/preview tooling — where one missing or invalid config
// shouldn't abort the whole operation. Genuinely unexpected errors (bugs,
// not content-state errors) are still rethrown rather than swallowed.
// ---------------------------------------------------------------------------

export type GetServiceConfigResult =
  | { ok: true; config: ServicePageConfig }
  | { ok: false; error: ServiceConfigError };

export async function tryGetServiceConfig(
  slug: string,
  options: GetServiceConfigOptions = {},
): Promise<GetServiceConfigResult> {
  try {
    const config = await getServiceConfig(slug, options);
    return { ok: true, config };
  } catch (error) {
    if (
      error instanceof ServiceConfigNotFoundError ||
      error instanceof ServiceConfigInvalidError ||
      error instanceof ServiceConfigUnpublishedError
    ) {
      return { ok: false, error };
    }
    throw error;
  }
}

// ---------------------------------------------------------------------------
// Related-service link gating (SVC-02)
//
// `content/services/*.ts` authors each service's "Related Services" section
// as a small, hand-picked, hardcoded array of `RelatedServiceRef` (slug +
// display copy) — see `RelatedServiceSection` in types/service.ts. That
// authored relationship data is never mutated here: a related service that
// is currently unpublished simply is not *linked to* from a live page
// today, it does not have its relationship deleted from the content model.
// If it is later approved for publication, the existing relationship
// reappears automatically with zero content-file changes.
//
// This filtering happens once, at the route/page boundary, rather than
// inside `RelatedServices.tsx` or the generic `SectionRenderer`/
// `SECTION_REGISTRY` dispatch: `SectionComponent<T>` is a synchronous
// `ComponentType`, and that registry's dispatch is deliberately type-erased
// and exhaustive across all 17 section types specifically so that
// `ServicePageEngine` and `SectionRenderer` never need to change as
// sections are implemented. Giving one section type an async data
// dependency there would either break that synchronous contract or need a
// special case that undermines the registry's "no other engine file
// changes" guarantee. The route handler is already async and is already
// the single place SVC-01's publishing gate is applied to the *current*
// service, so reusing the same `tryGetServiceConfig` call for each related
// target here keeps the gate in exactly one place without touching the
// engine, the registry, or any section component.
// ---------------------------------------------------------------------------

/**
 * Returns a copy of `config` whose `relatedServices` section (if present)
 * has been filtered down to only targets that are currently publicly
 * visible per the same gate `getServiceConfig`/`tryGetServiceConfig`
 * enforce above (`status === "published"` — a related-service *link* on a
 * live page is always held to the strict production gate, independent of
 * any `allowUnpublished` preview override the current page itself may be
 * using).
 *
 * A missing, invalid, draft, or review target is simply omitted from the
 * copy — `tryGetServiceConfig` never throws for a content-state error, so
 * a bad or not-yet-published related-service reference can never break
 * rendering of the current (published) page. Neither `config` nor the
 * content file's authored relationship data are mutated; every other
 * section is passed through unchanged.
 */
export async function filterPublishedRelatedServices(
  config: ServicePageConfig,
): Promise<ServicePageConfig> {
  const sections = await Promise.all(
    config.sections.map(async (section): Promise<SectionEntry> => {
      if (section.type !== "relatedServices") {
        return section;
      }

      const visibility = await Promise.all(
        section.data.services.map((ref) => tryGetServiceConfig(ref.slug)),
      );

      const services = section.data.services.filter((_, index) => visibility[index].ok);

      return {
        ...section,
        data: { ...section.data, services },
      };
    }),
  );

  return { ...config, sections };
}