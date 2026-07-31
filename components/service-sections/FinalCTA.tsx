import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import type { SectionComponent } from "@/components/engine/SectionRegistry";

/**
 * Renders the "Final CTA" section: the page's primary conversion moment.
 * Boxed in a Card for visual weight and separation from the sections
 * above it. Deliberately left in Card's default surface styling rather
 * than overriding its background color via className — Tailwind utility
 * precedence depends on generated stylesheet order, not class-list order,
 * so fighting a component's internal color classes from the outside is
 * unreliable without knowing Card's exact implementation. Emphasis here
 * comes from spacing and type weight instead. Heading, reassurance copy,
 * and both CTAs come entirely from `data` — this component never
 * hardcodes a headline or button label.
 */
const FinalCTA: SectionComponent<"finalCta"> = ({ data }) => {
  return (
    <Container>
      <FadeIn delay={0}>
        <Card className="flex flex-col items-center gap-6 py-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{data.heading}</h2>
          <p className="max-w-xl text-slate-600">{data.reassurance}</p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center sm:gap-4">
            <Button
              href={data.primaryCta.href}
              variant={data.primaryCta.variant}
              className="w-full sm:w-auto"
            >
              {data.primaryCta.label}
            </Button>
            {data.secondaryCta ? (
              <Button
                href={data.secondaryCta.href}
                variant={data.secondaryCta.variant}
                className="w-full sm:w-auto"
              >
                {data.secondaryCta.label}
              </Button>
            ) : null}
          </div>
        </Card>
      </FadeIn>
    </Container>
  );
};

export default FinalCTA;