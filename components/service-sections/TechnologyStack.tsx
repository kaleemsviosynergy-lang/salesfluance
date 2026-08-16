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

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {data.groups.map((group, groupIndex) => (
          <FadeIn key={`${group.category}-${groupIndex}`} delay={0.1 + groupIndex * 0.08}>
            <div className="rounded-[24px] border border-slate-200 bg-slate-50/60 p-4 shadow-sm">
              <h3 className="text-[11px] font-bold uppercase tracking-[.16em] text-slate-500">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <Badge key={tool.name}>{tool.name}</Badge>
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