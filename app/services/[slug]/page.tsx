import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServicePageEngine } from "@/components/engine/ServicePageEngine";

import { getImplementedServiceSlugs } from "@/content/services";

import {
  getServiceConfig,
  tryGetServiceConfig,
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

  return {
    title: config.seo.title,
    description: config.seo.description,
    keywords: config.seo.keywords,
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

  return <ServicePageEngine config={config} />;
}
