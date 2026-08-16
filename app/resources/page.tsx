import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  FileText,
  Layers3,
  Presentation,
} from "lucide-react";

// Reuses the site's own brand mark instead of a generic "AI magic"
// icon (Sparkles) — see note on the Featured Intelligence panel below.
import LogoMark from "@/components/brand/LogoMark";

const resourceTypes = [
  {
    eyebrow: "INSIGHTS",
    title: "Blogs",
    description:
      "Practical perspectives on B2B growth, demand generation, partnerships, sales intelligence, and revenue strategy.",
    href: "/resources/blogs",
    icon: BookOpen,
  },
  {
    eyebrow: "PROOF",
    title: "Case Studies",
    description:
      "Real-world examples, campaign lessons, and commercial outcomes from B2B growth initiatives.",
    href: "/resources/case-studies",
    icon: FileText,
  },
  {
    eyebrow: "EXECUTION",
    title: "Playbooks",
    description:
      "Practical frameworks and repeatable approaches your team can use to improve commercial execution.",
    href: "/resources/playbooks",
    icon: Layers3,
  },
  {
    eyebrow: "RESEARCH",
    title: "Whitepapers",
    description:
      "Deeper research, strategic frameworks, and original thinking around the changing B2B revenue landscape.",
    href: "/resources/whitepapers",
    icon: Presentation,
  },
];

export default function ResourcesPage() {
  return (
    <main className="bg-white">
      {/* Hero — background aligned to the site's locked #FAFAF9 token
          (was a fourth, close-but-different #F8FBFF). Headline accent
          aligned to cyan-600 to match the eyebrow above it and Home's
          hero accent (was cyan-500). */}
      <section className="border-b border-slate-200 bg-[#FAFAF9]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-600">
              Resources
            </p>

            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
              Ideas, intelligence, and
              <span className="block text-cyan-600">
                practical frameworks.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              Explore practical thinking for B2B growth — from demand
              generation and sales intelligence to partnerships, targeting,
              and revenue strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Intelligence — Sparkles (a generic "AI magic" icon,
          exactly what was ruled out for FLUANZ) replaced with the
          site's own brand mark. This panel remains a brand statement
          until real content exists; once it does, this slot should
          spotlight one actual featured resource rather than stay
          abstract. Radius aligned to rounded-2xl (was 3xl). */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 flex items-end justify-between gap-8">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-600">
                Featured Intelligence
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Built to be useful.
              </h2>
            </div>

            <p className="hidden max-w-md text-right text-sm leading-6 text-slate-500 md:block">
              No content for content&apos;s sake. Every resource is designed
              to help B2B teams think more clearly and execute more
              effectively.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#0A0E14]">
            <div className="grid lg:grid-cols-[1.3fr_1fr]">
              <div className="p-8 md:p-12 lg:p-14">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  SalesFluance Intelligence
                </p>

                <h3 className="mt-6 max-w-2xl text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Turning commercial signals into better revenue decisions.
                </h3>

                <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
                  Our resources explore the systems, decisions, and
                  relationships that influence modern B2B growth.
                </p>

                <div className="mt-8">
                  <Link
                    href="/resources/whitepapers"
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
                  >
                    Explore research
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>

              <div className="relative min-h-[280px] border-t border-white/10 bg-[#0B1B2D] lg:border-l lg:border-t-0">
                <div className="absolute inset-0 flex items-center justify-center p-10">
                  <div className="text-center">
                    <LogoMark size={40} className="mx-auto text-cyan-400" />

                    <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                      Intelligence
                    </p>

                    <p className="mt-3 text-xl font-medium text-white">
                      Signal → Insight → Action
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Types — hover treatment de-lifted (was translate-y +
          heavy shadow-xl, the one section using that interaction on
          the whole site). Icon chip switched from a solid tinted
          rounded square to the hairline-bordered treatment used
          everywhere else. Redundant "Explore {title}" line removed —
          the whole card is already the link, and the top-right arrow
          already signals that. Radius aligned to rounded-2xl. */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-600">
              Explore the Library
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Four ways to go deeper.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Choose the format that fits what you are trying to solve —
              whether you want perspective, proof, execution guidance, or
              deeper research.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {resourceTypes.map((resource) => {
              const Icon = resource.icon;

              return (
                <Link
                  key={resource.href}
                  href={resource.href}
                  className="group rounded-2xl border border-slate-200 bg-white p-8 transition-colors duration-200 hover:border-cyan-400/40 hover:bg-cyan-50/20 md:p-10"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex h-11 w-11 items-center justify-center border border-cyan-400/20 bg-cyan-400/5 text-cyan-600">
                      <Icon className="h-5 w-5 stroke-[1.5]" />
                    </div>

                    <ArrowUpRight className="h-5 w-5 text-slate-300 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-500" />
                  </div>

                  <p className="mt-8 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-600">
                    {resource.eyebrow}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold text-slate-950">
                    {resource.title}
                  </h3>

                  <p className="mt-4 max-w-lg leading-7 text-slate-600">
                    {resource.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Point of View — repurposed. Previously restated the homepage
          methodology (accounts/people/signals/engagement), which
          doesn't help someone specifically trying to find a resource.
          Now specific to using the library. Card border+shadow
          redundancy removed (border only, no shadow-sm, matching the
          border-only convention used elsewhere). Radius aligned. */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 md:p-12 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-600">
                  Using This Library
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                  Start where you are.
                </h2>
              </div>

              <div>
                <p className="text-lg leading-8 text-slate-600">
                  Early in a decision? Start with Blogs for perspective.
                  Evaluating an approach? Case Studies show what actually
                  happened. Ready to execute? Playbooks give you the
                  framework directly.
                </p>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Whitepapers are for teams who want to go deeper than any
                  single article — original research, not summarized
                  thinking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — radius aligned to rounded-2xl, otherwise unchanged. */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-2xl bg-[#0A0E14] p-8 text-white md:p-12 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Ready to Apply It?
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                  Turn better intelligence into better revenue.
                </h2>

                <p className="mt-5 max-w-2xl leading-7 text-slate-400">
                  If you have a growth challenge worth solving, let&apos;s
                  talk about where SalesFluance can help.
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
        </div>
      </section>
    </main>
  );
}