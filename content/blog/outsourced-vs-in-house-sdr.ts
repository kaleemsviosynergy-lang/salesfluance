/**
 * Phase 1A placeholder record — architecture only. No body copy has been
 * written. `status: "draft"` keeps this out of every public retrieval path
 * (see lib/content/getBlogPost.ts). Do not treat any field here as
 * approved editorial copy.
 */

import type { BlogPostConfig } from "../../types/blog";
import { editorialTeam } from "./authors";

export const outsourcedVsInHouseSdrConfig: BlogPostConfig = {
  schemaVersion: 1,
  slug: "outsourced-vs-in-house-sdr",
  title: "Outsourced vs. In-House SDR: The Real Tradeoffs",
  excerpt: "Placeholder excerpt — full article not yet written.",
  status: "draft",
  role: "cornerstone",
  pillar: "Revenue Process & Operations",
  author: editorialTeam,
  seo: {
    title: "Outsourced vs. In-House SDR: The Real Tradeoffs",
    description: "Placeholder SEO description — to be finalized before publication.",
    canonical: "/resources/blogs/outsourced-vs-in-house-sdr",
  },
  relatedServices: ["lead-generation", "appointment-setting"],
  content: [
    { type: "paragraph", text: "Placeholder content — this article has not been written yet." },
  ],
  provenance: {
    source: "ai-generated",
    status: "draft",
    generationNote: "Phase 1A architecture placeholder — taxonomy and service mapping only, no body copy.",
  },
};
