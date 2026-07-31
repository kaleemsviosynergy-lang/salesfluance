import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import type { SectionComponent } from "@/components/engine/SectionRegistry";

/**
 * Renders the "Success Metrics & Reporting" section: a heading, the
 * metrics tracked for this service, and an optional reporting cadence
 * note. `value` is only ever shown when present in `data` — never
 * fabricated by this component.
 */
const SuccessMetrics: SectionComponent<"successMetrics"> = ({ data }) => {
  return (
    <Container>
      <FadeIn delay={0}>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{data.heading}</h2>
      </FadeIn>

      <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4">
        {data.metrics.map((metric, index) => (
          <FadeIn key={metric.id} delay={0.06 + index * 0.05}>
            <div>
              {metric.value ? <dt className="text-2xl font-bold text-slate-900 sm:text-3xl">{metric.value}</dt> : null}
              <dd className="text-sm text-slate-500">{metric.label}</dd>
            </div>
          </FadeIn>
        ))}
      </dl>

      {data.reportingCadence ? (
        <FadeIn delay={0.06 + data.metrics.length * 0.05 + 0.06}>
          <p className="mt-8 text-sm text-slate-400">{data.reportingCadence}</p>
        </FadeIn>
      ) : null}
    </Container>
  );
};

export default SuccessMetrics;