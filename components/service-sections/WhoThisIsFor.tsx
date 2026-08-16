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
      <div className="mx-auto max-w-3xl text-center">
        <FadeIn delay={0}>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{data.heading}</h2>
        </FadeIn>
        <FadeIn delay={0.06}>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{data.intro}</p>
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
        <div className="mt-8 rounded-[24px] border border-slate-200 bg-slate-50/70 p-5">
          <p className="text-sm font-medium text-slate-600">
            Best suited for B2B companies selling complex, high-value solutions with multiple decision-makers.
          </p>
        </div>
      </FadeIn>
    </Container>
  );
};

export default WhoThisIsFor;