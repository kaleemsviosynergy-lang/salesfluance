import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import FadeIn from "@/components/ui/FadeIn";
import type { SectionComponent } from "@/components/engine/SectionRegistry";

/**
 * Renders the "Who This Is For" section: a heading, intro copy, the
 * decision-maker personas this service targets, and a compact company
 * size / industry-fit panel. Industry slugs are formatted for display
 * (hyphens replaced with spaces, capitalized via CSS) rather than passed
 * through a hardcoded name lookup, since `data` provides only slugs here.
 */
const WhoThisIsFor: SectionComponent<"whoThisIsFor"> = ({ data }) => {
  return (
    <Container>
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <FadeIn delay={0}>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{data.heading}</h2>
        </FadeIn>
        <FadeIn delay={0.06}>
          <p className="text-lg text-slate-600">{data.intro}</p>
        </FadeIn>
      </div>

      <FadeIn delay={0.12}>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {data.personas.map((persona) => (
            <Badge key={persona.id}>{persona.title}</Badge>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.18}>
        <Card className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Company Size</p>
            <p className="text-sm font-semibold text-slate-900">{data.companySizeRange}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {data.industries.map((industry) => (
              <Badge key={industry}>
                <span className="capitalize">{industry.replace(/-/g, " ")}</span>
              </Badge>
            ))}
          </div>
        </Card>
      </FadeIn>
    </Container>
  );
};

export default WhoThisIsFor;