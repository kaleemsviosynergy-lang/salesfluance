import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";
import type { SectionComponent } from "@/components/engine/SectionRegistry";

/**
 * Renders the "Technology Stack" section: a heading, optional subheading,
 * and the tool groups relevant to this specific service. A service's
 * config supplies only the categories/tools that apply to it — this
 * component never assumes a fixed set of categories.
 */
const TechnologyStack: SectionComponent<"technologyStack"> = ({ data }) => {
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

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {data.groups.map((group, groupIndex) => (
          <FadeIn key={group.category} delay={0.1 + groupIndex * 0.08}>
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <Badge key={tool.name}>
                    {tool.name}
                  </Badge>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Container>
  );
};

export default TechnologyStack;