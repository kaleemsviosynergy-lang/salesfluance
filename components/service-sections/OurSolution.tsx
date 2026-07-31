import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import type { SectionComponent } from "@/components/engine/SectionRegistry";

/**
 * Renders the "Our Solution" section: a heading, optional subheading, a
 * grid of solution pillars, and an optional inline CTA. Every string, icon,
 * and pillar comes from `data` — no business content is hardcoded.
 */
const OurSolution: SectionComponent<"ourSolution"> = ({ data }) => {
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
        {data.pillars.map((pillar, index) => (
          <FadeIn key={pillar.id} delay={0.1 + index * 0.06}>
            <Card className="flex h-full flex-col gap-3">
              <Badge>{pillar.title}</Badge>
              <p className="text-sm text-slate-600">{pillar.description}</p>
            </Card>
          </FadeIn>
        ))}
      </div>

      {data.cta ? (
        <FadeIn delay={0.1 + data.pillars.length * 0.06 + 0.1}>
          <div className="mt-10 flex justify-center">
            <Button
              href={data.cta.href}
              variant={data.cta.variant as any}
              target={data.cta.external ? "_blank" : undefined}
              rel={data.cta.external ? "noopener noreferrer" : undefined}
            >
              {data.cta.label}
            </Button>
          </div>
        </FadeIn>
      ) : null}
    </Container>
  );
};

export default OurSolution;