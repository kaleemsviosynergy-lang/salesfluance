import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import type { SectionComponent } from "@/components/engine/SectionRegistry";

/**
 * Renders the "Business Outcomes" section: a heading, optional subheading,
 * a grid of outcome cards, and an optional secondary CTA. `metricValue` is
 * only ever rendered when present in `data` — this component never
 * fabricates a figure. No business content is hardcoded.
 */
const BusinessOutcomes: SectionComponent<"businessOutcomes"> = ({ data }) => {
  return (
    <Container>
      <div className="mx-auto max-w-3xl text-center">
        <FadeIn delay={0}>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{data.heading}</h2>
        </FadeIn>
        {data.subheading ? (
          <FadeIn delay={0.06}>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{data.subheading}</p>
          </FadeIn>
        ) : null}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {data.outcomes.map((outcome, index) => (
          <FadeIn key={outcome.id} delay={0.1 + index * 0.05}>
            <Card className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50/60 p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                  <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-violet-600" />
                </span>
                <span className="text-sm font-semibold text-slate-900">{outcome.label}</span>
              </div>
              {outcome.metricValue ? (
                <p className="text-2xl font-bold text-slate-900">{outcome.metricValue}</p>
              ) : null}
              <p className="text-sm leading-6 text-slate-600">{outcome.description}</p>
            </Card>
          </FadeIn>
        ))}
      </div>

      {data.cta ? (
        <FadeIn delay={0.1 + data.outcomes.length * 0.06 + 0.1}>
          <div className="mt-10 flex justify-center">
            <Button
              href={data.cta.href}
              variant={data.cta.variant === "text" ? undefined : data.cta.variant}
              target={data.cta.external ? "_blank" : undefined}
              rel={data.cta.external ? "noreferrer noopener" : undefined}
            >
              {data.cta.label}
            </Button>
          </div>
        </FadeIn>
      ) : null}
    </Container>
  );
};

export default BusinessOutcomes;