import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServicePageEngine } from "@/components/engine/ServicePageEngine";

import {
  getServiceConfig,
  getImplementedServiceSlugs,
} from "@/content/services";

import { validateServiceConfig } from "@/lib/content/validateServiceConfig";

import type { ServiceSlug } from "@/types/shared";

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
 * Generate SEO metadata directly from the content layer.
 */
export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;

  const config = getServiceConfig(slug as ServiceSlug);

  if (!config) {
    return {};
  }

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
 * Content Layer
 *   ↓
 * Validation
 *   ↓
 * Service Page Engine
 */
export default async function ServicePage({
  params,
}: ServicePageProps) {
  const { slug } = await params;

  const config = getServiceConfig(slug as ServiceSlug);

  if (!config) {
    notFound();
  }

  const validation = validateServiceConfig(config);

  if (!validation.valid) {
    throw new Error(
      `Invalid service configuration for "${slug}".`
    );
  }

  return <ServicePageEngine config={config} />;
}