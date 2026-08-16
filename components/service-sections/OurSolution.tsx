import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/ui/FadeIn";
import type { SectionComponent } from "@/components/engine/SectionRegistry";

/**
 * Enterprise-level "Our Solution" section.
 *
 * The component is intentionally data-driven:
 * - Heading comes from data
 * - Subheading comes from data
 * - Solution pillars come from data
 * - No business-specific copy is hardcoded here
 *
 * Layout:
 * 1. Strong section introduction
 * 2. Three solution pillars
 * 3. Clear visual hierarchy
 */
const OurSolution: SectionComponent<"ourSolution"> = ({ data }) => {
  return (
    <section className="relative border-t border-slate-100 bg-white py-24 sm:py-28 lg:py-32">
      <Container>
        {/* =========================================================
            SECTION INTRO
        ========================================================== */}
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn delay={0}>
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-indigo-200" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
                Our Solution
              </span>

              <span className="h-px w-8 bg-indigo-200" />
            </div>

            <h2 className="text-4xl font-bold tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-[3.25rem]">
              {data.heading}
            </h2>
          </FadeIn>

          {data.subheading ? (
            <FadeIn delay={0.08}>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                {data.subheading}
              </p>
            </FadeIn>
          ) : null}
        </div>

        {/* =========================================================
            SOLUTION FRAMEWORK
        ========================================================== */}
        <div className="mx-auto mt-14 max-w-6xl">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {data.pillars.map((pillar, index) => (
              <FadeIn
                key={pillar.id}
                delay={0.12 + index * 0.08}
              >
                <Card
                  className="
                    group
                    relative
                    flex
                    h-full
                    min-h-[280px]
                    flex-col
                    overflow-hidden
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
                    p-7
                    shadow-[0_10px_35px_rgba(15,23,42,0.05)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-indigo-200
                    hover:shadow-[0_18px_45px_rgba(79,70,229,0.10)]
                    sm:p-8
                  "
                >
                  {/* Subtle background glow */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-40
                      w-40
                      rounded-full
                      bg-indigo-50
                      opacity-0
                      blur-2xl
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                  />

                  {/* Top row */}
                  <div className="relative flex items-start justify-between">
                    {/* Icon */}
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-indigo-100
                        bg-indigo-50
                        text-indigo-600
                      "
                    >
                      <span
                        aria-hidden="true"
                        className="h-3 w-3 rounded-full bg-indigo-600"
                      />
                    </div>

                    {/* Step number */}
                    <span className="text-xs font-semibold tracking-[0.18em] text-slate-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative mt-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-600">
                      Solution Pillar
                    </p>

                    <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
                      {pillar.title}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Bottom visual rule */}
                  <div className="relative mt-auto pt-8">
                    <div className="h-px w-full bg-slate-100" />

                    <div className="mt-4 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                      <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate-400">
                        Enterprise framework
                      </span>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurSolution;