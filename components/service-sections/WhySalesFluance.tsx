import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import type { SectionComponent } from "@/components/engine/SectionRegistry";

/**
 * Enterprise differentiation framework.
 *
 * The component remains completely data-driven:
 * - Heading comes from data
 * - Subheading comes from data
 * - Comparison dimensions come from data
 *
 * The visual treatment intentionally avoids a generic card grid and
 * presents the comparison as a strategic positioning framework.
 */
const WhySalesFluance: SectionComponent<"whySalesFluance"> = ({ data }) => {
  return (
    <section className="relative border-t border-slate-100 bg-slate-50/40 py-24 sm:py-28 lg:py-32">
      <Container>
        {/* =========================================================
            SECTION INTRO
        ========================================================== */}
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn delay={0}>
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-indigo-200" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
                Why SalesFluance
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
            COMPARISON FRAMEWORK
        ========================================================== */}
        <div className="mx-auto mt-14 max-w-6xl">
          <FadeIn delay={0.12}>
            <div
              className="
                overflow-hidden
                rounded-[28px]
                border
                border-slate-200
                bg-white
                shadow-[0_16px_50px_rgba(15,23,42,0.06)]
              "
            >
              {/* =====================================================
                  DESKTOP HEADER
              ====================================================== */}
              <div className="hidden grid-cols-[0.8fr_1.2fr_1.4fr] border-b border-slate-200 bg-slate-50/80 sm:grid">
                <div className="px-6 py-5">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Dimension
                  </span>
                </div>

                <div className="border-l border-slate-200 px-6 py-5">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Traditional Approach
                  </span>
                </div>

                <div className="relative border-l border-indigo-100 bg-indigo-50/60 px-6 py-5">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />

                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600">
                      SalesFluance
                    </span>
                  </div>
                </div>
              </div>

              {/* =====================================================
                  COMPARISON ROWS
              ====================================================== */}
              <div>
                {data.rows.map((row, index) => (
                  <FadeIn
                    key={row.dimension}
                    delay={0.16 + index * 0.05}
                  >
                    <div
                      className="
                        grid
                        grid-cols-1
                        border-b
                        border-slate-100
                        last:border-b-0
                        sm:grid-cols-[0.8fr_1.2fr_1.4fr]
                      "
                    >
                      {/* Dimension */}
                      <div className="px-6 py-6 sm:flex sm:items-center">
                        <div>
                          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-indigo-500 sm:hidden">
                            Dimension
                          </span>

                          <p className="mt-1 text-sm font-bold text-slate-950 sm:mt-0 sm:text-[15px]">
                            {row.dimension}
                          </p>
                        </div>
                      </div>

                      {/* Traditional */}
                      <div className="border-slate-100 px-6 pb-5 sm:border-l sm:py-6">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 sm:hidden">
                          Traditional Approach
                        </span>

                        <p className="mt-1 text-sm leading-6 text-slate-500 sm:mt-0">
                          {row.traditionalAgency}
                        </p>
                      </div>

                      {/* SalesFluance */}
                      <div
                        className="
                          border-t
                          border-indigo-100
                          bg-indigo-50/40
                          px-6
                          py-5
                          sm:border-l
                          sm:border-t-0
                          sm:py-6
                        "
                      >
                        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-indigo-500 sm:hidden">
                          SalesFluance
                        </span>

                        <div className="mt-1 flex items-start gap-3 sm:mt-0">
                          <span
                            aria-hidden="true"
                            className="
                              mt-2
                              h-1.5
                              w-1.5
                              shrink-0
                              rounded-full
                              bg-indigo-500
                            "
                          />

                          <p className="text-sm font-medium leading-6 text-slate-800">
                            {row.salesFluance}
                          </p>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>

              {/* =====================================================
                  FRAMEWORK FOOTER
              ====================================================== */}
              <div className="border-t border-slate-200 bg-slate-50/60 px-6 py-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    SalesFluance framework
                  </span>

                  <span className="text-xs font-medium text-slate-500">
                    From activity to accountable revenue
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};

export default WhySalesFluance;