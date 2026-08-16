import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import type { SectionComponent } from "@/components/engine/SectionRegistry";

/**
 * Enterprise-style industry coverage section.
 *
 * Content remains completely data-driven through `data.industries`.
 * The visual treatment is intentionally editorial rather than a
 * conventional SaaS card grid.
 */
const IndustriesServed: SectionComponent<"industriesServed"> = ({ data }) => {
  return (
    <Container>
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <FadeIn delay={0}>
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
                Industry Expertise
              </p>

              <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                {data.heading}
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.06}>
            <p className="max-w-2xl text-base leading-7 text-slate-600 lg:ml-auto">
              Our approach adapts to the buying dynamics, decision structures,
              and revenue complexity of the industries we serve.
            </p>
          </FadeIn>
        </div>

        {/* Industry grid */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[28px] border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {data.industries.map((industry, index) => (
            <FadeIn
              key={industry.slug}
              delay={0.08 + index * 0.05}
            >
              <a
                href={`/industries/${industry.slug}`}
                className="group block h-full bg-white focus-visible:outline-none"
              >
                <article className="relative flex h-full min-h-[210px] flex-col justify-between p-7 transition-colors duration-300 group-hover:bg-slate-50 sm:p-8">
                  
                  {/* Top row */}
                  <div className="flex items-start justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-500 transition-colors duration-300 group-hover:border-indigo-200 group-hover:bg-indigo-50 group-hover:text-indigo-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      aria-hidden="true"
                      className="text-lg text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-indigo-600"
                    >
                      →
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                      {industry.name}
                    </h3>

                    <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">
                      {industry.description}
                    </p>
                  </div>

                  {/* Bottom interaction cue */}
                  <div className="mt-7 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400 transition-colors duration-300 group-hover:text-indigo-600">
                    <span>Explore industry</span>
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </div>
                </article>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default IndustriesServed;