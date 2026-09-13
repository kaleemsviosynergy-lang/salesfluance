/**
 * Phase 1A placeholder record — architecture only. No body copy has been
 * written. `status: "draft"` keeps this out of every public retrieval path
 * (see lib/content/getBlogPost.ts). Do not treat any field here as
 * approved editorial copy.
 */

import type { BlogPostConfig } from "../../types/blog";
import { editorialTeam } from "./authors";

export const whereAiActuallyHelpsInB2bRevenueConfig: BlogPostConfig = {
  schemaVersion: 1,
  slug: "where-ai-actually-helps-in-b2b-revenue",
  title: "Where AI Actually Helps in B2B Revenue Execution (and Where It Doesn't)",
  excerpt: "Placeholder excerpt — full article not yet written.",
  status: "draft",
  role: "cornerstone",
  pillar: "AI & Revenue Systems",
  author: editorialTeam,
  seo: {
    title: "Where AI Actually Helps in B2B Revenue Execution (and Where It Doesn't)",
    description: "Placeholder SEO description — to be finalized before publication.",
    canonical: "/resources/blogs/where-ai-actually-helps-in-b2b-revenue",
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
