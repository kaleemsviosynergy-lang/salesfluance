/**
 * SalesFluance Content Layer — Service Registry
 *
 * This is the single aggregation point for every flagship service's
 * content configuration. It has no dependency on React, Next.js routing,
 * or any rendering concern — it is pure content, addressable by slug.
 *
 * ADDING A NEW SERVICE requires exactly two changes:
 *   1. Create `content/services/<slug>.ts` exporting a `ServicePageConfig`.
 *   2. Add one line to `serviceRegistry` below.
 * No component, route, sitemap, or SEO code needs to change — all of those
 * consume this registry.
 *
 * FUTURE CMS MIGRATION: `getServiceConfig` is the one seam a CMS migration
 * touches. Today it does a synchronous local-object lookup; once content
 * moves to a headless CMS, this function's *implementation* becomes an
 * async fetch-and-validate call against the same `ServicePageConfig` shape.
 * Every caller of `getServiceConfig` remains unchanged because the return
 * type contract does not change — only keep in mind that a real CMS-backed
 * version of this function will need to be async, so calling code should
 * already be written to tolerate `getServiceConfig` becoming a Promise.
 */

import type { ServicePageConfig, ServiceRegistry } from "../../types/service";
import { SERVICE_SLUGS, type ServiceSlug } from "../../types/shared";
import { leadGenerationConfig } from "./lead-generation";
import { demandGenerationConfig } from "./demand-generation";
import { accountBasedMarketingConfig } from "./account-based-marketing";

// ---------------------------------------------------------------------------
// Registry
//
// Typed as `Partial<ServiceRegistry>` rather than `ServiceRegistry` because
// not all 11 flagship services have a content file yet (Sprint 1 implements
// Lead Generation only). As each remaining service is authored, add its
// entry here; once all 11 keys are present this can be tightened to
// `ServiceRegistry` for full compile-time guarantee of registry completeness.
// ---------------------------------------------------------------------------

export const serviceRegistry: Partial<ServiceRegistry> = {
  "lead-generation": leadGenerationConfig,
  "demand-generation": demandGenerationConfig,
  "account-based-marketing": accountBasedMarketingConfig,
};

// ---------------------------------------------------------------------------
// Accessors
//
// All registry reads go through these functions rather than importing
// `serviceRegistry` directly elsewhere in the app. This keeps a single,
// swappable seam for the future CMS migration described above.
// ---------------------------------------------------------------------------

/**
 * Look up a single service's content configuration by slug.
 * Returns `undefined` if that service has not been authored yet.
 */
export function getServiceConfig(slug: ServiceSlug): ServicePageConfig | undefined {
  return serviceRegistry[slug];
}

/**
 * Slugs for every flagship service the engine is designed to support,
 * regardless of whether content has been authored yet. Useful for
 * generating "coming soon" states or auditing registry completeness.
 */
export function getAllSupportedServiceSlugs(): readonly ServiceSlug[] {
  return SERVICE_SLUGS;
}

/**
 * Slugs for services that currently have a content configuration in the
 * registry. This is what routing (`generateStaticParams`) and the sitemap
 * should iterate over — never `getAllSupportedServiceSlugs`, which may
 * include slugs with no content yet.
 */
export function getImplementedServiceSlugs(): ServiceSlug[] {
  return Object.keys(serviceRegistry) as ServiceSlug[];
}

/**
 * All configs currently eligible for production rendering — implemented
 * *and* editorially approved. Production build/routing code should use
 * this rather than filtering `serviceRegistry` manually, so the
 * "published only" rule lives in exactly one place.
 */
export function getPublishedServiceConfigs(): ServicePageConfig[] {
  return Object.values(serviceRegistry).filter(
    (config): config is ServicePageConfig => config !== undefined && config.status === "published",
  );
}

/**
 * Registry-completeness audit: which supported slugs still have no content
 * configuration authored. Intended for a build-time warning/report, not for
 * runtime use.
 */
export function getUnimplementedServiceSlugs(): ServiceSlug[] {
  const implemented = new Set(getImplementedServiceSlugs());
  return SERVICE_SLUGS.filter((slug) => !implemented.has(slug));
}