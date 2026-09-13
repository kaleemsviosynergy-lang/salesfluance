/**
 * Phase 1A placeholder record — architecture only. No body copy has been
 * written. `status: "draft"` keeps this out of every public retrieval path
 * (see lib/content/getBlogPost.ts). Do not treat any field here as
 * approved editorial copy.
 */

import type { BlogPostConfig } from "../../types/blog";
import { editorialTeam } from "./authors";

export const whatDataAppendingActuallyFixesConfig: BlogPostConfig = {
  schemaVersion: 1,
  slug: "what-data-appending-actually-fixes",
  title: "What Data Appending Actually Fixes (and What It Can't)",
  excerpt: "Placeholder excerpt — full article not yet written.",
  status: "draft",
  role: "supporting",
  pillar: "Data & Signal Quality",
  author: editorialTeam,
  seo: {
    title: "What Data Appending Actually Fixes (and What It Can't)",
    description: "Placeholder SEO description — to be finalized before publication.",
    canonical: "/resources/blogs/what-data-appending-actually-fixes",
  },
  relatedServices: ["data-cleansing", "data-appending"],
  content: [
    { type: "paragraph", text: "Placeholder content — this article has not been written yet." },
  ],
  provenance: {
    source: "ai-generated",
    status: "draft",
    generationNote: "Phase 1A architecture placeholder — taxonomy and service mapping only, no body copy.",
  },
};
