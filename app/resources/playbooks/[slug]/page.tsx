import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/buildMetadata";

import {
  getPlaybookChapter,
  tryGetPlaybookChapter,
  getPublishedPlaybookChapters,
  PlaybookChapterNotFoundError,
  PlaybookChapterUnpublishedError,
} from "@/lib/content/getPlaybookChapter";
import { FRAMEWORK_STAGE_DETAILS, type FrameworkStage, type PlaybookContentBlock } from "@/types/playbook";
import ContentBlockRenderer, {
  PROSE_BLOCK_TYPES,
  GROUPABLE_BLOCK_TYPES,
} from "@/components/playbook/ContentBlockRenderer";

interface PlaybookChapterPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Generate static routes for published chapters only. Today this resolves
 * to exactly one path (`activate`) — the Phase 2 walking skeleton's only
 * authored chapter. A draft/review chapter is never pre-rendered.
 */
export async function generateStaticParams() {
  const chapters = await getPublishedPlaybookChapters();
  return chapters.map((chapter) => ({ slug: chapter.slug }));
}

/**
 * Metadata is generated through the same gated accessor the page body uses
 * (`tryGetPlaybookChapter`), with no preview/dev bypass — identical
 * philosophy to the blog route. Canonical is derived deterministically from
 * the route path via `buildMetadata`; the chapter's own `seo` object never
 * carries a `canonical` field (enforced by `validatePlaybookConfig.ts`),
 * so there is nothing to override here.
 */
export async function generateMetadata({
  params,
}: PlaybookChapterPageProps): Promise<Metadata> {
  const { slug } = await params;

  const result = await tryGetPlaybookChapter(slug);
  if (!result.ok) {
    return {};
  }

  const config = result.config;
  return buildMetadata({
    path: `/resources/playbooks/${config.slug}`,
    title: config.seo.title,
    description: config.seo.description,
    keywords: config.seo.keywords,
  });
}

/**
 * Groups consecutive content blocks of the same "groupable" type (currently
 * just `serviceRelationshipCard`) so they render side-by-side rather than
 * stacked full-width. This is a page-level layout affordance only — it
 * does not introduce a new content-block type.
 */
type RenderItem =
  | { kind: "single"; block: PlaybookContentBlock; index: number }
  | { kind: "group"; entries: { block: PlaybookContentBlock; index: number }[] };

function groupContentBlocks(content: PlaybookContentBlock[]): RenderItem[] {
  const items: RenderItem[] = [];
  let i = 0;
  while (i < content.length) {
    const block = content[i];
    if (GROUPABLE_BLOCK_TYPES.has(block.type)) {
      const entries: { block: PlaybookContentBlock; index: number }[] = [{ block, index: i }];
      let j = i + 1;
      while (j < content.length && content[j].type === block.type) {
        entries.push({ block: content[j], index: j });
        j++;
      }
      items.push({ kind: "group", entries });
      i = j;
    } else {
      items.push({ kind: "single", block, index: i });
      i++;
    }
  }
  return items;
}

/**
 * Dynamic Playbook Chapter Page
 *
 * URL → slug → gated content service (`getPlaybookChapter` — validates AND
 * enforces the publishing gate in one place) → render. A missing slug and
 * an unpublished (draft/review) slug both resolve to Next's standard
 * `notFound()`. A real content bug (`PlaybookChapterInvalidError`) is left
 * to propagate rather than being silently mapped to a 404 — identical
 * philosophy to `app/resources/blogs/[slug]/page.tsx` and
 * `app/services/[slug]/page.tsx`. `notFound()` is called here, in the
 * route, never inside the accessor itself.
 */
export default async function PlaybookChapterPage({ params }: PlaybookChapterPageProps) {
  const { slug } = await params;

  let config;
  try {
    config = await getPlaybookChapter(slug);
  } catch (error) {
    if (
      error instanceof PlaybookChapterNotFoundError ||
      error instanceof PlaybookChapterUnpublishedError
    ) {
      notFound();
    }
    throw error;
  }

  // Stages with a currently published, routable chapter — threaded into the
  // chapter's own `frameworkStageDiagram` block so it never links to a
  // stage that has no chapter yet. Computed from the same accessor the
  // hub uses, never hardcoded.
  const publishedChapters = await getPublishedPlaybookChapters();
  const linkedStages: FrameworkStage[] = publishedChapters
    .filter((chapter) => chapter.kind === "framework" && chapter.frameworkStages)
    .map((chapter) => chapter.frameworkStages!.primary);

  const stageDetail = config.frameworkStages
    ? FRAMEWORK_STAGE_DETAILS[config.frameworkStages.primary]
    : undefined;

  const renderItems = groupContentBlocks(config.content);

  return (
    <main className="bg-white text-slate-950">
      {/* Header */}
      <section className="border-b border-slate-200 bg-[#F5F9FD]">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8 lg:py-28">
          <Link
            href="/resources/playbooks"
            className="group inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 transition hover:text-cyan-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            Master Playbook
          </Link>

          <header className="mt-14">
            <div className="flex flex-wrap items-center gap-3">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-600">
                Framework Chapter
              </p>
              {stageDetail && (
                <span className="rounded-full border border-slate-300 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Stage {stageDetail.order} of 8 · {stageDetail.label}
                </span>
              )}
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              {config.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{config.excerpt}</p>
          </header>
        </div>
      </section>

      {/* Body */}
      <article className="px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl space-y-6">
          {renderItems.map((item, itemIndex) => {
            if (item.kind === "group") {
              return (
                <div key={`group-${itemIndex}`} className="grid gap-6 sm:grid-cols-2">
                  {item.entries.map(({ block, index }) => (
                    <ContentBlockRenderer key={index} block={block} index={index} linkedStages={linkedStages} />
                  ))}
                </div>
              );
            }

            const isProse = PROSE_BLOCK_TYPES.has(item.block.type);
            return (
              <div key={item.index} className={isProse ? "mx-auto max-w-2xl" : ""}>
                <ContentBlockRenderer block={item.block} index={item.index} linkedStages={linkedStages} />
              </div>
            );
          })}
        </div>
      </article>

      {/* CTA */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col gap-8 rounded-3xl bg-[#0A0E14] p-8 text-white md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
              SalesFluance
            </p>
            <h2 className="mt-4 text-3xl font-semibold">Have a growth problem worth solving?</h2>
          </div>

          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0E14]"
          >
            Book Discovery Call
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
