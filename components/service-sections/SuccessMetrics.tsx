import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import type { SectionComponent } from "@/components/engine/SectionRegistry";

/**
 * Renders the "Success Metrics & Reporting" section.
 *
 * The section presents measurable outcomes as an executive-level
 * measurement framework rather than a conventional KPI grid.
 *
 * All metric content remains data-driven through `data`.
 */
const SuccessMetrics: SectionComponent<"successMetrics"> = ({ data }) => {
  return (
    <Container>
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <FadeIn delay={0}>
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
                Measurement & Accountability
              </p>

              <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                {data.heading}
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.06}>
            <p className="max-w-2xl text-base leading-7 text-slate-600 lg:ml-auto">
              Every account program is measured against the signals that
              indicate progress — from engagement and buying committee
              coverage to pipeline movement and revenue impact.
            </p>
          </FadeIn>
        </div>

        {/* Metrics */}
        <div className="mt-12 overflow-hidden rounded-[28px] border border-slate-200 bg-white">
          <div className="grid grid-cols-1 divide-y divide-slate-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {data.metrics.map((metric, index) => (
              <FadeIn key={metric.id} delay={0.08 + index * 0.05}>
                <div className="group relative flex min-h-[190px] flex-col justify-between p-7 transition-colors duration-300 hover:bg-slate-50 sm:p-8">
                  {/* Index */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold tracking-[0.16em] text-slate-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      aria-hidden="true"
                      className="h-2 w-2 rounded-full bg-indigo-500 opacity-60 transition-transform duration-300 group-hover:scale-150"
                    />
                  </div>

                  {/* Metric */}
                  <div className="mt-8">
                    {metric.value ? (
                      <div className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                        {metric.value}
                      </div>
                    ) : null}

                    <div className="mt-2 max-w-[180px] text-sm font-medium leading-6 text-slate-600">
                      {metric.label}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Reporting cadence */}
        {data.reportingCadence ? (
          <FadeIn delay={0.1 + data.metrics.length * 0.05}>
            <div className="mt-5 flex flex-col gap-3 rounded-2xl border border-indigo-100 bg-indigo-50/50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-600">
                Reporting cadence
              </span>

              <span className="text-sm font-medium text-slate-700">
                {data.reportingCadence}
              </span>
            </div>
          </FadeIn>
        ) : null}
      </div>
    </Container>
  );
};

export default SuccessMetrics;