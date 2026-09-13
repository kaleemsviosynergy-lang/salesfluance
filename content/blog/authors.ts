/**
 * SalesFluance Content Layer — Blog Authors
 *
 * Deliberately minimal, per Phase 1A scope: one shared, stable author
 * identity for in-house editorial content. No author profile pages, no
 * per-author routes, no invented credentials, awards, or bios. Add a new
 * `BlogAuthor` object here only when a real, distinct byline is needed —
 * do not build this out into a roster speculatively.
 */

import type { BlogAuthor } from "../../types/blog";

export const editorialTeam: BlogAuthor = {
  id: "salesfluance-editorial",
  name: "SalesFluance Editorial Team",
  title: "Editorial Team",
};
