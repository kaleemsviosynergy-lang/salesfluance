import type { Metadata } from "next";
import { seoConfig } from "./seoConfig";

type BuildMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  noIndex = false,
}: BuildMetadataOptions = {}): Metadata {
  const pageTitle = title ?? seoConfig.defaultTitle;
  const pageDescription =
    description ?? seoConfig.defaultDescription;

  const canonicalUrl = new URL(
    path,
    seoConfig.siteUrl
  ).toString();

  return {
    metadataBase: new URL(seoConfig.siteUrl),

    title: title
      ? {
          absolute: pageTitle,
        }
      : {
          default: seoConfig.defaultTitle,
          template: seoConfig.titleTemplate,
        },

    description: pageDescription,

    keywords: [
      ...seoConfig.keywords,
      ...keywords,
    ],

    alternates: {
      canonical: canonicalUrl,
    },

    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },

    openGraph: {
      type: "website",
      locale: seoConfig.locale,
      url: canonicalUrl,
      siteName: seoConfig.siteName,
      title: pageTitle,
      description: pageDescription,
      images: [
        {
          url: seoConfig.defaultOgImage,
          alt: seoConfig.siteName,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [seoConfig.defaultOgImage],
    },
  };
}