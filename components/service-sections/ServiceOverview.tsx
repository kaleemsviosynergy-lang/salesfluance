import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import type { SectionComponent } from "@/components/engine/SectionRegistry";

/**
 * Enterprise-level Service Overview section.
 *
 * Layout:
 * - Editorial introduction on the left
 * - Structured capability framework on the right
 * - Strong visual hierarchy without excessive cards
 *
 * All business content remains data-driven.
 */
const ServiceOverview: SectionComponent<"serviceOverview"> = ({ data }) => {
  const hasBullets = Boolean(data.bullets && data.bullets.length > 0);

  return (
    <section className="relative border-t border-slate-100 bg-white py-24 sm:py-28 lg:py-32">
      <Container>
        <div
          className={
            hasBullets
              ? "grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16"
              : "mx-auto max-w-4xl"
          }
        >
          {/* =========================================================
              LEFT — SERVICE POSITIONING
          ========================================================== */}
          <div className="max-w-xl">
            <FadeIn delay={0}>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-indigo-200" />

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
                  Service Overview
                </span>
              </div>

              <h2 className="text-4xl font-bold tracking-[-0.03em] text-slate-950 sm:text-5xl">
                {data.heading}
              </h2>
            </FadeIn>

            <div className="mt-7 space-y-5">
              {data.paragraphs.slice(0, 2).map((paragraph, index) => (
                <FadeIn
                  key={index}
                  delay={0.08 + index * 0.06}
                >
                  <p
                    className="
                      max-w-xl
                      text-[15px]
                      leading-7
                      text-slate-600
                      sm:text-base
                      sm:leading-7
                    "
                  >
                    {paragraph}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* =========================================================
              RIGHT — WHAT WE ACTUALLY DO
          ========================================================== */}
          {hasBullets ? (
            <FadeIn delay={0.12}>
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-slate-200
                  bg-slate-50/70
                  p-5
                  shadow-[0_12px_40px_rgba(15,23,42,0.05)]
                  sm:p-6
                  lg:p-7
                "
              >
                {/* Decorative background element */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-48
                    w-48
                    rounded-full
                    bg-indigo-100/40
                    blur-3xl
                  "
                />

                <div className="relative">
                  {/* Panel header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
                        What We Actually Do
                      </p>

                      <p className="mt-2 text-sm text-slate-500">
                        The disciplines behind enterprise ABM.
                      </p>
                    </div>

                    <div className="hidden h-9 w-9 items-center justify-center rounded-xl border border-indigo-100 bg-white text-indigo-600 shadow-sm sm:flex">
                      <span
                        aria-hidden="true"
                        className="h-2.5 w-2.5 rounded-full bg-indigo-600"
                      />
                    </div>
                  </div>

                  {/* Capability list */}
                  <div className="mt-6 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                    {data.bullets!.map((bullet, index) => (
                      <div
                        key={`${bullet}-${index}`}
                        className="
                          group
                          flex
                          items-center
                          gap-4
                          px-4
                          py-5
                          transition-colors
                          duration-200
                          hover:bg-slate-50
                          sm:px-5
                        "
                      >
                        {/* Number */}
                        <div
                          className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-indigo-100
                            bg-indigo-50
                            text-xs
                            font-bold
                            text-indigo-600
                          "
                        >
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        {/* Capability */}
                        <p
                          className="
                            min-w-0
                            text-sm
                            font-semibold
                            leading-6
                            text-slate-900
                            sm:text-[15px]
                          "
                        >
                          {bullet}
                        </p>

                        {/* Arrow */}
                        <span
                          aria-hidden="true"
                          className="
                            ml-auto
                            shrink-0
                            text-slate-300
                            transition-transform
                            duration-200
                            group-hover:translate-x-1
                            group-hover:text-indigo-500
                          "
                        >
                          →
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom signal */}
                  <div className="mt-5 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />

                    <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-slate-400">
                      Enterprise revenue discipline
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ) : null}
        </div>
      </Container>
    </section>
  );
};

export default ServiceOverview;