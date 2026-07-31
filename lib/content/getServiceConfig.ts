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
import type { ServicePageConfig } from "../../types/service";
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