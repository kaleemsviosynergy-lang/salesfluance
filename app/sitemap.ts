import type { MetadataRoute } from "next";

import { getPublishedServiceConfigs } from "@/content/services";

const baseUrl = "https://salesfluance.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // Individual service pages are added here only for configs whose editorial
  // `status` is "published" — draft/AI-generated service pages (pending
  // Founder review) are intentionally excluded so the sitemap never lists a
  // URL that isn't yet approved for indexing. This reuses the same
  // `getPublishedServiceConfigs` gate the rest of the app treats as the
  // single source of truth for "is this service live" — see
  // content/services/index.ts.
  const publishedServiceEntries: MetadataRoute.Sitemap = getPublishedServiceConfigs().map(
    (config) => ({
      url: `${baseUrl}/services/${config.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    }),
  );

  // Priority-1 industry pages (SEO Priority 1 sprint). These three routes
  // are hand-authored pages (no IndustryPageConfig/status gate exists yet —
  // see the Industry SEO Implementation Map v1), so unlike services above
  // this list is intentionally static rather than derived from a registry.
  // Only add a slug here once its page has real content and page-level
  // metadata — do not add Finance, Manufacturing, or any future industry
  // route until a dedicated implementation phase covers it.
  const priorityIndustryEntries: MetadataRoute.Sitemap = [
    "saas",
    "healthcare",
    "it-services",
  ].map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...publishedServiceEntries,
    {
      url: `${baseUrl}/industries`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...priorityIndustryEntries,
    {
      url: `${baseUrl}/process`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/case-studies`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/playbooks`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/whitepapers`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
