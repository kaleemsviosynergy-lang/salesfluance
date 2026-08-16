import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import type { SectionComponent } from "@/components/engine/SectionRegistry";

/**
 * Renders the Technology Stack as an enterprise revenue-infrastructure
 * framework rather than a conventional collection of technology badges.
 *
 * Categories and tools remain completely data-driven through `data`.
 */
const TechnologyStack: SectionComponent<"technologyStack"> = ({ data }) => {
  return (
    <Container>
      <div className="mx-auto max-w-4xl text-center">
        <FadeIn delay={0}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
            TECHNOLOGY & INTELLIGENCE
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-[44px]">
            {data.heading}
          </h2>
        </FadeIn>

        {data.subheading ? (
          <FadeIn delay={0.06}>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              {data.subheading}
            </p>
          </FadeIn>
        ) : null}
      </div>

      <div className="mx-auto mt-12 max-w-6xl">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[28px] border border-slate-200 bg-slate-200 sm:grid-cols-2">
          {data.groups.map((group, groupIndex) => (
            <FadeIn
              key={`${group.category}-${groupIndex}`}
              delay={0.1 + groupIndex * 0.06}
            >
              <div className="group relative h-full bg-white p-7 transition-colors duration-300 hover:bg-slate-50/70 sm:p-8">
                {/* Category header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-indigo-100 bg-indigo-50 text-xs font-bold text-indigo-600">
                      {String(groupIndex + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                        Capability
                      </p>

                      <h3 className="mt-1 text-sm font-bold uppercase tracking-[0.08em] text-slate-950">
                        {group.category}
                      </h3>
                    </div>
                  </div>

                  <span
                    aria-hidden="true"
                    className="text-slate-300 transition-colors duration-300 group-hover:text-indigo-500"
                  >
                    ↗
                  </span>
                </div>

                {/* Technology list */}
                <div className="mt-7 border-t border-slate-100 pt-5">
                  <div className="flex flex-wrap gap-2">
                    {group.tools.map((tool) => (
                      <span
                        key={tool.name}
                        className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 shadow-[0_2px_8px_rgba(15,23,42,0.03)] transition-all duration-200 hover:border-indigo-200 hover:bg-indigo-50/50 hover:text-indigo-700"
                      >
                        {tool.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom signal */}
                <div className="mt-7 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                    Integrated into the revenue motion
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Enterprise positioning statement */}
      <FadeIn delay={0.35}>
        <div className="mx-auto mt-6 max-w-6xl rounded-2xl border border-slate-200 bg-slate-950 px-6 py-6 sm:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-300">
                THE PRINCIPLE
              </p>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
                Technology supports the strategy — connecting account
                intelligence, engagement, pipeline activity, and revenue
                visibility into one coordinated motion.
              </p>
            </div>

            <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-700 text-indigo-300 sm:flex">
              →
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
};

export default TechnologyStack;