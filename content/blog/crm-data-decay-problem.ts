/**
 * Phase 1A placeholder record — architecture only. No body copy has been
 * written. `status: "draft"` keeps this out of every public retrieval path
 * (see lib/content/getBlogPost.ts). Do not treat any field here as
 * approved editorial copy.
 */

import type { BlogPostConfig } from "../../types/blog";
import { editorialTeam } from "./authors";

export const crmDataDecayProblemConfig: BlogPostConfig = {
  schemaVersion: 1,
  slug: "crm-data-decay-problem",
  title: "The CRM Data-Decay Problem Nobody Budgets For",
  excerpt: "Placeholder excerpt — full article not yet written.",
  status: "draft",
  role: "supporting",
  pillar: "Data & Signal Quality",
  author: editorialTeam,
  seo: {
    title: "The CRM Data-Decay Problem Nobody Budgets For",
    description: "Placeholder SEO description — to be finalized before publication.",
    canonical: "/resources/blogs/crm-data-decay-problem",
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
