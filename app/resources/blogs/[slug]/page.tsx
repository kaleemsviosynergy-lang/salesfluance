import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import type { BlogContentBlock, BlogPostConfig } from "@/types/blog";
import AIRevenueFlowHero from "@/components/blog/AIRevenueFlowHero";
import AIVsHumanGrid from "@/components/blog/AIVsHumanGrid";
import RevenueWorkflowLoop from "@/components/blog/RevenueWorkflowLoop";

import {
  getBlogPost,
  tryGetBlogPost,
  getPublishedBlogPosts,
  filterPublishedRelatedArticles,
  getVisibleRelatedServiceSlugs,
  BlogPostNotFoundError,
  BlogPostUnpublishedError,
} from "@/lib/content/getBlogPost";
import { tryGetServiceConfig } from "@/lib/content/getServiceConfig";
import type { ServicePageConfig } from "@/types/service";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Generate static routes for published articles only. While every article
 * in content/blog remains `status: "draft"`, `getPublishedBlogPosts()`
 * resolves to an empty array, so this generates zero static pages —
 * no draft article is ever pre-rendered as a public page.
 */
export async function generateStaticParams() {
  const posts = await getPublishedBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

/**
 * Metadata is generated through the same gated accessor the page body
 * uses (`tryGetBlogPost`), with no `allowUnpublished` override — unlike
 * the service route, the blog route does not offer a dev-preview bypass,
 * since Phase 1B's brief is explicit that draft articles must not be
 * publicly accessible under any circumstance. A missing/invalid/draft
 * slug returns `{}`, matching the equivalent case in
 * `app/services/[slug]/page.tsx`.
 *
 * Canonical is derived deterministically from the route path via
 * `buildMetadata`, never from the article's own `seo.canonical` field —
 * that field is treated as non-authoritative for routing purposes.
 */
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  const result = await tryGetBlogPost(slug);
  if (!result.ok) {
    return {};
  }

  const config = result.config;
  const base = buildMetadata({
    path: `/resources/blogs/${config.slug}`,
    title: config.seo.title,
    description: config.seo.description,
    keywords: config.seo.keywords,
  });

  // Use the article's configured social image if one exists; otherwise
  // fall back to buildMetadata's own site-level default (already applied
  // above) rather than inventing an asset.
  const image = config.seo.socialImage ?? config.featuredImage;
  if (!image) {
    return base;
  }

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      images: [{ url: image.src, alt: image.alt }],
    },
    twitter: {
      ...base.twitter,
      images: [image.src],
    },
  };
}

function ContentBlock({ block, index }: { block: BlogContentBlock; index: number }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={index} className="text-base leading-8 text-slate-700">
          {block.text}
        </p>
      );
    case "heading": {
      const HeadingTag = block.level === 2 ? "h2" : "h3";
      return (
        <HeadingTag
          key={index}
          className={
            block.level === 2
              ? "mt-4 text-2xl font-semibold tracking-tight text-slate-950"
              : "mt-2 text-xl font-semibold tracking-tight text-slate-950"
          }
        >
          {block.text}
        </HeadingTag>
      );
    }
    case "list":
      return (
        <ul key={index} className="list-disc space-y-2 pl-6 text-base leading-7 text-slate-700">
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex}>{item}</li>
          ))}
        </ul>
      );
    case "visual":
      switch (block.visual) {
        case "ai-revenue-flow":
          return <AIRevenueFlowHero key={index} />;
        case "ai-vs-human":
          return <AIVsHumanGrid key={index} />;
        case "revenue-workflow-loop":
          return <RevenueWorkflowLoop key={index} />;
        default:
          return null;
      }
    default:
      return null;
  }
}

/**
 * Dynamic Blog Article Page
 *
 * URL → slug → gated content service (`getBlogPost` — validates AND
 * enforces the publishing gate in one place) → related-content gates
 * (`getVisibleRelatedServiceSlugs`, `filterPublishedRelatedArticles`) →
 * render.
 *
 * A missing slug and an unpublished (draft/review) slug both resolve to
 * Next's standard `notFound()`. A real content bug
 * (`BlogPostInvalidError`) is left to propagate rather than being
 * silently mapped to a 404 — identical philosophy to
 * `app/services/[slug]/page.tsx`.
 */
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  let config;
  try {
    config = await getBlogPost(slug);
  } catch (error) {
    if (
      error instanceof BlogPostNotFoundError ||
      error instanceof BlogPostUnpublishedError
    ) {
      notFound();
    }
    throw error;
  }

  const [relatedServiceSlugs, relatedArticleSlugs] = await Promise.all([
    getVisibleRelatedServiceSlugs(config),
    filterPublishedRelatedArticles(config),
  ]);

  const relatedServiceResults = await Promise.all(
    relatedServiceSlugs.map((serviceSlug) => tryGetServiceConfig(serviceSlug)),
  );
  const relatedServices = relatedServiceResults
    .filter((result): result is { ok: true; config: ServicePageConfig } => result.ok)
    .map((result) => result.config);

  const relatedArticleResults = await Promise.all(
    relatedArticleSlugs.map((articleSlug) => tryGetBlogPost(articleSlug)),
  );
  const relatedArticles = relatedArticleResults
    .filter((result): result is { ok: true; config: BlogPostConfig } => result.ok)
    .map((result) => result.config);

  const roleLabel = config.role === "cornerstone" ? "Cornerstone" : "Supporting";

  return (
    <main className="bg-white text-slate-950">
      {/* Header */}
      <section className="border-b border-slate-200 bg-[#F5F9FD]">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8 lg:py-28">
          <Link
            href="/resources/blogs"
            className="group inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 transition hover:text-cyan-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            Insights
          </Link>

          <header className="mt-14">
            <div className="flex flex-wrap items-center gap-3">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-600">
                {config.pillar}
              </p>
              <span className="rounded-full border border-slate-300 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                {roleLabel}
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              {config.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {config.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500">
              <span>{config.author.name}</span>
              {config.publishedAt && (
                <>
                  <span aria-hidden="true">·</span>
                  <time dateTime={config.publishedAt}>
                    {new Date(config.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </>
              )}
            </div>
          </header>
        </div>
      </section>

      {/* Body */}
      <article className="px-6 py-16 lg:px-8 lg:py-20">
        {/* Wide (max-w-6xl) column so visuals can use the enterprise layout;
            prose blocks stay in a readable max-w-2xl measure. */}
        <div className="mx-auto max-w-6xl space-y-6">
          {config.content.map((block, index) =>
            block.type === "visual" ? (
              <div key={index} className="py-8 lg:py-10">
                <ContentBlock block={block} index={index} />
              </div>
            ) : (
              <div key={index} className="mx-auto max-w-2xl">
                <ContentBlock block={block} index={index} />
              </div>
            ),
          )}
        </div>
      </article>

      {/* Related Services — only valid, currently implemented services. */}
      {relatedServices.length > 0 && (
        <section
          aria-labelledby="related-services-heading"
          className="border-t border-slate-200 bg-[#FAFAF9]"
        >
          <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
            <h2
              id="related-services-heading"
              className="text-2xl font-semibold tracking-tight text-slate-950"
            >
              Related Services
            </h2>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {relatedServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-cyan-400/40 hover:bg-cyan-50/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-semibold text-slate-950">
                      {service.seo.title}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-300 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-500" />
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {service.seo.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Articles — only published, valid targets. Omitted entirely
          when none exist, per the content-access layer's gating. */}
      {relatedArticles.length > 0 && (
        <section
          aria-labelledby="related-articles-heading"
          className="border-t border-slate-200"
        >
          <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
            <h2
              id="related-articles-heading"
              className="text-2xl font-semibold tracking-tight text-slate-950"
            >
              Related Articles
            </h2>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {relatedArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/resources/blogs/${article.slug}`}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-cyan-400/40 hover:bg-cyan-50/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-semibold text-slate-950">
                      {article.title}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-300 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-500" />
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {article.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col gap-8 rounded-3xl bg-[#0A0E14] p-8 text-white md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
              SalesFluance
            </p>
            <h2 className="mt-4 text-3xl font-semibold">
              Have a growth problem worth solving?
            </h2>
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
