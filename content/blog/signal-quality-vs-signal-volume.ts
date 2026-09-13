/**
 * Phase 1A placeholder record — architecture only. No body copy has been
 * written. `status: "draft"` keeps this out of every public retrieval path
 * (see lib/content/getBlogPost.ts). Do not treat any field here as
 * approved editorial copy.
 */

import type { BlogPostConfig } from "../../types/blog";
import { editorialTeam } from "./authors";

export const signalQualityVsSignalVolumeConfig: BlogPostConfig = {
  schemaVersion: 1,
  slug: "signal-quality-vs-signal-volume",
  title: "Why Signal Quality Beats Signal Volume in B2B Pipelines",
  excerpt: "Placeholder excerpt — full article not yet written.",
  status: "draft",
  role: "cornerstone",
  pillar: "Data & Signal Quality",
  author: editorialTeam,
  seo: {
    title: "Why Signal Quality Beats Signal Volume in B2B Pipelines",
    description: "Placeholder SEO description — to be finalized before publication.",
    canonical: "/resources/blogs/signal-quality-vs-signal-volume",
  },
  relatedServices: ["intent-data"],
  content: [
    { type: "paragraph", text: "Placeholder content — this article has not been written yet." },
  ],
  provenance: {
    source: "ai-generated",
    status: "draft",
    generationNote: "Phase 1A architecture placeholder — taxonomy and service mapping only, no body copy.",
  },
};
