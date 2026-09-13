import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { seoConfig } from "@/lib/seo/seoConfig";
import { ServicePageEngine } from "@/components/engine/ServicePageEngine";

import { getImplementedServiceSlugs } from "@/content/services";

import {
  getServiceConfig,
  tryGetServiceConfig,
  filterPublishedRelatedServices,
  ServiceConfigNotFoundError,
  ServiceConfigUnpublishedError,
} from "@/lib/content/getServiceConfig";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Generate static routes for all implemented services.
 */
export async function generateStaticParams() {
  return getImplementedServiceSlugs().map((slug) => ({
    slug,
  }));
}

/**
 * Generate SEO metadata through the same gated content abstraction the page
 * body uses (`lib/content/getServiceConfig`), rather than reading the raw
 * registry directly. This keeps metadata generation and rendering agreeing
 * on which services are publicly visible — see SVC-01 in the Master Audit.
 *
 * `allowUnpublished` mirrors the same environment check already used by
 * `app/services/page.tsx`, so preview/dev builds can still preview
 * draft/review metadata while production never does.
 */
export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;

  const result = await tryGetServiceConfig(slug, {
    allowUnpublished: process.env.NODE_ENV !== "production",
  });

  if (!result.ok) {
    return {};
  }

  const config = result.config;

  // Phase 0 technical SEO fix: this function previously never set
  // `alternates.canonical`, so every service page silently inherited the
  // root layout's default canonical (the homepage) instead of pointing
  // at itself — confirmed live on /services/lead-generation. Because
  // this is the single shared route behind every service slug, this fix
  // applies to all published services, not lead-generation alone.
  const canonicalUrl = `${seoConfig.siteUrl}/services/${config.slug}`;

  return {
    title: config.seo.title,
    description: config.seo.description,
    keywords: config.seo.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: config.seo.title,
      description: config.seo.description,
      url: `/services/${config.slug}`,
      image: config.seo.openGraph?.image,
    },
    twitter: {
      card: "summary_large_image",
      title: config.seo.title,
      description: config.seo.description,
    },
  } as Metadata;
}

/**
 * Dynamic Service Page
 *
 * Flow:
 *
 * URL
 *   ↓
 * slug
 *   ↓
 * Gated Content Service (lib/content/getServiceConfig — validates AND
 * enforces the editorial publishing gate in one place)
 *   ↓
 * Related-service link gate (filterPublishedRelatedServices — SVC-02;
 * same abstraction, applied to each Related Services target)
 *   ↓
 * Service Page Engine
 *
 * `getServiceConfig` (the throwing, gated abstraction — not the raw
 * registry lookup in content/services/index.ts) is the single source of
 * truth for "is this service allowed to render publicly." A missing slug
 * and an unpublished (draft/review) slug both resolve to Next's standard
 * `notFound()` — a real content bug (`ServiceConfigInvalidError`) is left
 * to propagate as a thrown error rather than being silently mapped to a
 * 404, so validation failures are still loud in build/dev the same way
 * they were before this fix.
 *
 * Before rendering, `filterPublishedRelatedServices` re-applies that same
 * gate to every target in this page's own Related Services section, so a
 * published page can never link out to a draft/review/invalid service —
 * see SVC-02 in the Master Audit.
 */
export default async function ServicePage({
  params,
}: ServicePageProps) {
  const { slug } = await params;

  let config;
  try {
    config = await getServiceConfig(slug, {
      allowUnpublished: process.env.NODE_ENV !== "production",
    });
  } catch (error) {
    if (
      error instanceof ServiceConfigNotFoundError ||
      error instanceof ServiceConfigUnpublishedError
    ) {
      notFound();
    }
    throw error;
  }

  const visibleConfig = await filterPublishedRelatedServices(config);

  return <ServicePageEngine config={visibleConfig} />;
}
