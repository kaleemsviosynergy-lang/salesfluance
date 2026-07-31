import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";
import type { SectionComponent } from "@/components/engine/SectionRegistry";

/**
 * Renders the "Business Challenges" section: a heading, optional
 * subheading, and a grid of challenge cards. Every string, icon, and item
 * comes from `data` — this component carries no business content of its
 * own and does not know which service it belongs to.
 */
const BusinessChallenges: SectionComponent<"businessChallenges"> = ({ data }) => {
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
        {data.items.map((item, index) => (
          <FadeIn key={item.id} delay={0.1 + index * 0.06}>
            <Card className="flex h-full flex-col gap-3">
              <Badge>{item.label}</Badge>
              <p className="text-sm text-slate-600">{item.description}</p>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Container>
  );
};

export default BusinessChallenges;