/**
 * Phase 1A placeholder record — architecture only. No body copy has been
 * written. `status: "draft"` keeps this out of every public retrieval path
 * (see lib/content/getBlogPost.ts). Do not treat any field here as
 * approved editorial copy.
 */

import type { BlogPostConfig } from "../../types/blog";
import { editorialTeam } from "./authors";

export const listBuildingWithoutTheReputationProblemConfig: BlogPostConfig = {
  schemaVersion: 1,
  slug: "list-building-without-the-reputation-problem",
  title: "List Building Without the List-Buying Reputation Problem",
  excerpt: "Placeholder excerpt — full article not yet written.",
  status: "draft",
  role: "supporting",
  pillar: "Demand & Pipeline Generation",
  author: editorialTeam,
  seo: {
    title: "List Building Without the List-Buying Reputation Problem",
    description: "Placeholder SEO description — to be finalized before publication.",
    canonical: "/resources/blogs/list-building-without-the-reputation-problem",
  },
  relatedServices: ["list-building"],
  content: [
    { type: "paragraph", text: "Placeholder content — this article has not been written yet." },
  ],
  provenance: {
    source: "ai-generated",
    status: "draft",
    generationNote: "Phase 1A architecture placeholder — taxonomy and service mapping only, no body copy.",
  },
};
