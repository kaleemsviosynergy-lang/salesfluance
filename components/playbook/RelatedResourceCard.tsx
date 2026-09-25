import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { tryGetBlogPost } from "@/lib/content/getBlogPost";
import { tryGetPlaybookChapter } from "@/lib/content/getPlaybookChapter";
import type { PlaybookRelatedResourceType } from "@/types/playbook";

interface RelatedResourceCardProps {
  resourceType: PlaybookRelatedResourceType;
  slug: string;
}

/**
 * Resolves a related blog article or Playbook chapter through the existing
 * gated accessors (`tryGetBlogPost` / `tryGetPlaybookChapter`) rather than
 * duplicating the target's title/excerpt. Renders nothing for a missing,
 * invalid, or unpublished target — an authored relationship to a draft
 * article or chapter never produces a visible link.
 */
export default async function RelatedResourceCard({ resourceType, slug }: RelatedResourceCardProps) {
  if (resourceType === "article") {
    const result = await tryGetBlogPost(slug);
    if (!result.ok) return null;
    const article = result.config;

    return (
      <Link
        href={`/resources/blogs/${article.slug}`}
        className="group flex items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-cyan-400/40 hover:bg-cyan-50/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2"
      >
        <div>
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-600">
            Related Article
          </p>
          <h3 className="mt-2 text-sm font-semibold text-slate-950">{article.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{article.excerpt}</p>
        </div>
        <ArrowUpRight
          aria-hidden="true"
          className="mt-1 h-4 w-4 shrink-0 text-slate-300 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-500"
        />
      </Link>
    );
  }

  const result = await tryGetPlaybookChapter(slug);
  if (!result.ok) return null;
  const chapter = result.config;

  return (
    <Link
      href={`/resources/playbooks/${chapter.slug}`}
      className="group flex items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-cyan-400/40 hover:bg-cyan-50/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2"
    >
      <div>
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-600">
          Related Chapter
        </p>
        <h3 className="mt-2 text-sm font-semibold text-slate-950">{chapter.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{chapter.excerpt}</p>
      </div>
      <ArrowUpRight
        aria-hidden="true"
        className="mt-1 h-4 w-4 shrink-0 text-slate-300 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-500"
      />
    </Link>
  );
}
