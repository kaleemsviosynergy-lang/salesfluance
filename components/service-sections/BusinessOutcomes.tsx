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
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <FadeIn delay={0}>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{data.heading}</h2>
        </FadeIn>
        {data.subheading ? (
          <FadeIn delay={0.06}>
            <p className="text-lg text-slate-600">{data.subheading}</p>
          </FadeIn>
        ) : null}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.outcomes.map((outcome, index) => (
          <FadeIn key={outcome.id} delay={0.1 + index * 0.06}>
            <Card className="flex h-full flex-col gap-3">
              <Badge>{outcome.label}</Badge>
              {outcome.metricValue ? (
                <p className="text-2xl font-bold text-slate-900">{outcome.metricValue}</p>
              ) : null}
              <p className="text-sm text-slate-600">{outcome.description}</p>
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