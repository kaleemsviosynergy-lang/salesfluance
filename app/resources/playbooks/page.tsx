import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/buildMetadata";

import { getPublishedPlaybookChapters } from "@/lib/content/getPlaybookChapter";
import { FRAMEWORK_STAGE_DETAILS, type FrameworkStage } from "@/types/playbook";
import type { IndustrySlug } from "@/types/shared";
import FrameworkStageDiagram from "@/components/playbook/FrameworkStageDiagram";
import ServiceRelationshipCard from "@/components/playbook/ServiceRelationshipCard";
import RelatedResourceCard from "@/components/playbook/RelatedResourceCard";

// Route-specific metadata — informational intent, distinct from the
// commercial service pages the chapters point to. Canonical is derived by
// `buildMetadata` from `path`, never authored manually.
export const metadata: Metadata = buildMetadata({
  path: "/resources/playbooks",
  title: "SalesFluance Master Playbook — Revenue Execution Framework",
  description:
    "A single framework for B2B revenue execution — Define, Discover, Validate, Prioritize, Activate, Engage, Verify, Learn — with in-depth chapters published as they're ready. Start with Activate.",
  keywords: [
    "b2b revenue execution framework",
    "revenue execution playbook",
    "demand generation and lead generation framework",
  ],
});

/**
 * Master Playbook Hub — an orientation/navigation layer, not the complete
 * Playbook itself. Every dynamic section below reads from the same
 * published-only accessor (`getPublishedPlaybookChapters`) the chapter
 * route uses, so:
 *   - the framework map only links to stages that actually have a chapter,
 *   - the "live chapters" list only ever shows what's really published,
 *   - the capability/industry/reading pathways only surface relationships
 *     that a real, published chapter has actually authored.
 * Nothing here is hardcoded to "Activate" specifically — this page will
 * pick up additional framework chapters automatically as they're added in
 * a later phase, with zero changes to this file.
 */
export default async function PlaybooksHubPage() {
  const publishedChapters = await getPublishedPlaybookChapters();
  const frameworkChapters = publishedChapters.filter(
    (chapter) => chapter.kind === "framework" && chapter.frameworkStages,
  );

  const linkedStages: FrameworkStage[] = frameworkChapters.map(
    (chapter) => chapter.frameworkStages!.primary,
  );

  const relatedServiceSlugs = Array.from(
    new Set(frameworkChapters.flatMap((chapter) => chapter.relatedServices ?? [])),
  );
  const relatedArticleSlugs = Array.from(
    new Set(frameworkChapters.flatMap((chapter) => chapter.relatedArticles ?? [])),
  );

  const v1Industries: { slug: IndustrySlug; label: string }[] = [
    { slug: "healthcare", label: "Healthcare" },
    { slug: "saas", label: "SaaS" },
    { slug: "it-services", label: "IT Services" },
  ];

  return (
    <main className="bg-white text-slate-950">
      {/* HERO — the revenue execution problem, framed concisely */}
      <section className="border-b border-slate-200 bg-[#F7FAFE]">
        <div className="mx-auto max-w-5xl px-6 pb-24 pt-28 lg:px-8">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-600">
            MASTER PLAYBOOK
          </p>

          <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.03em] text-slate-950 md:text-6xl">
            One framework.
            <br />
            <span className="text-cyan-500">Multiple chapters.</span> Connected
            paths to revenue execution.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
            Most B2B revenue problems are not caused by a lack of activity. They
            are caused by activity that has no shared framework behind it —
            data no one validated, leads no one prioritized, engagement
            mistaken for intent. The SalesFluance Revenue Execution Framework
            is a single model for how revenue actually gets built, stage by
            stage.
          </p>
        </div>
      </section>

      {/* THE FRAMEWORK — the 8-stage map from the single source of truth */}
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-600">
            THE FRAMEWORK
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Eight stages. One direction. One shared vocabulary.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Define, Discover, Validate, Prioritize, Activate, Engage, Verify,
            Learn — each stage answers a different question, and each chapter
            goes deeper into one of them. Chapters are published as they are
            written; the map below reflects what is live today, not what is
            planned.
          </p>

          <div className="mt-10">
            <FrameworkStageDiagram linkedStages={linkedStages} />
          </div>
        </div>
      </section>

      {/* LIVE CHAPTERS — only real, published chapters, never a placeholder */}
      {frameworkChapters.length > 0 && (
        <section className="border-b border-slate-200 bg-[#F7FAFE]">
          <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-600">
              AVAILABLE NOW
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Start with the live chapter.
            </h2>

            <div className="mt-10 grid gap-5">
              {frameworkChapters.map((chapter) => {
                const stageDetail = FRAMEWORK_STAGE_DETAILS[chapter.frameworkStages!.primary];
                return (
                  <Link
                    key={chapter.slug}
                    href={`/resources/playbooks/${chapter.slug}`}
                    className="group overflow-hidden rounded-[28px] border border-[#1E2530] bg-[#080D14] p-8 text-white transition hover:border-cyan-400/40 md:p-12"
                  >
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-400">
                      Stage {stageDetail.order} of 8 · {stageDetail.label}
                    </p>
                    <h3 className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl">
                      {chapter.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
                      {chapter.excerpt}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400">
                      Read the chapter
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CAPABILITY PATHWAY — services the live chapter(s) actually reference */}
      {relatedServiceSlugs.length > 0 && (
        <section className="border-b border-slate-200">
          <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-600">
              CAPABILITY PATHWAY
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Where the framework connects to SalesFluance today.
            </h2>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {relatedServiceSlugs.map((serviceSlug) => (
                <ServiceRelationshipCard key={serviceSlug} serviceSlug={serviceSlug} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* V1 INDUSTRY PATHWAY — the three typed, registry-backed industries only */}
      <section className="border-b border-slate-200 bg-[#F7FAFE]">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-600">
            INDUSTRY PATHWAY
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Applied to the markets we cover today.
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {v1Industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-cyan-400/40 hover:bg-cyan-50/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2"
              >
                <span className="text-sm font-semibold text-slate-950">{industry.label}</span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-300 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-500" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED RESOURCES — published articles the live chapter(s) reference */}
      {relatedArticleSlugs.length > 0 && (
        <section>
          <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-600">
              RELATED READING
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              From the SalesFluance blog.
            </h2>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {relatedArticleSlugs.map((articleSlug) => (
                <RelatedResourceCard key={articleSlug} resourceType="article" slug={articleSlug} />
              ))}
            </div>

            <Link
              href="/resources/blogs"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 transition hover:text-cyan-500"
            >
              Browse all articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-24 lg:px-8">
        <div className="overflow-hidden rounded-[28px] bg-[#080D14] px-8 py-12 text-white md:px-12 md:py-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-400">
                SALESFLUANCE
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Have a growth problem worth solving?
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                If the chapter you need is not written yet, let&rsquo;s work
                through the problem directly.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Book Discovery Call
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
