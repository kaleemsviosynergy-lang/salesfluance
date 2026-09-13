/**
 * Phase 1A placeholder record — architecture only. No body copy has been
 * written. `status: "draft"` keeps this out of every public retrieval path
 * (see lib/content/getBlogPost.ts). Do not treat any field here as
 * approved editorial copy.
 */

import type { BlogPostConfig } from "../../types/blog";
import { editorialTeam } from "./authors";

export const abmReadinessCheckConfig: BlogPostConfig = {
  schemaVersion: 1,
  slug: "abm-readiness-check",
  title: "Is Your Company Actually Ready for ABM? A Practical Readiness Check",
  excerpt: "Placeholder excerpt — full article not yet written.",
  status: "draft",
  role: "cornerstone",
  pillar: "Account-Based Growth",
  author: editorialTeam,
  seo: {
    title: "Is Your Company Actually Ready for ABM? A Practical Readiness Check",
    description: "Placeholder SEO description — to be finalized before publication.",
    canonical: "/resources/blogs/abm-readiness-check",
  },
  relatedServices: ["account-based-marketing"],
  content: [
    { type: "paragraph", text: "Placeholder content — this article has not been written yet." },
  ],
  provenance: {
    source: "ai-generated",
    status: "draft",
    generationNote: "Phase 1A architecture placeholder — taxonomy and service mapping only, no body copy.",
  },
};
