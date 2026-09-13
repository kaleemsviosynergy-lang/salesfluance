/**
 * Phase 1A placeholder record — architecture only. No body copy has been
 * written. `status: "draft"` keeps this out of every public retrieval path
 * (see lib/content/getBlogPost.ts). Do not treat any field here as
 * approved editorial copy.
 */

import type { BlogPostConfig } from "../../types/blog";
import { editorialTeam } from "./authors";

export const whatQualifiedActuallyMeansConfig: BlogPostConfig = {
  schemaVersion: 1,
  slug: "what-qualified-actually-means",
  title: "Why \"Qualified\" Means Something Different on Every Sales Team",
  excerpt: "Placeholder excerpt — full article not yet written.",
  status: "draft",
  role: "supporting",
  pillar: "Revenue Process & Operations",
  author: editorialTeam,
  seo: {
    title: "Why \"Qualified\" Means Something Different on Every Sales Team",
    description: "Placeholder SEO description — to be finalized before publication.",
    canonical: "/resources/blogs/what-qualified-actually-means",
  },
  relatedServices: ["lead-generation", "demand-generation"],
  content: [
    { type: "paragraph", text: "Placeholder content — this article has not been written yet." },
  ],
  provenance: {
    source: "ai-generated",
    status: "draft",
    generationNote: "Phase 1A architecture placeholder — taxonomy and service mapping only, no body copy.",
  },
};
