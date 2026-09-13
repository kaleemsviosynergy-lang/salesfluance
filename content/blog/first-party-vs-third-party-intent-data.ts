/**
 * Phase 1A placeholder record — architecture only. No body copy has been
 * written. `status: "draft"` keeps this out of every public retrieval path
 * (see lib/content/getBlogPost.ts). Do not treat any field here as
 * approved editorial copy.
 */

import type { BlogPostConfig } from "../../types/blog";
import { editorialTeam } from "./authors";

export const firstPartyVsThirdPartyIntentDataConfig: BlogPostConfig = {
  schemaVersion: 1,
  slug: "first-party-vs-third-party-intent-data",
  title: "First-Party vs. Third-Party Intent Data: What's Actually Reliable",
  excerpt: "Placeholder excerpt — full article not yet written.",
  status: "draft",
  role: "supporting",
  pillar: "Data & Signal Quality",
  author: editorialTeam,
  seo: {
    title: "First-Party vs. Third-Party Intent Data: What's Actually Reliable",
    description: "Placeholder SEO description — to be finalized before publication.",
    canonical: "/resources/blogs/first-party-vs-third-party-intent-data",
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
