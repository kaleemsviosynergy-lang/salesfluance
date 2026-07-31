import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";
import type { SectionComponent } from "@/components/engine/SectionRegistry";

/**
 * Renders the "Industries Served" section: a heading and a grid of
 * industry cards, each linking to its dedicated industry page. Only the
 * industries present in `data.industries` are rendered — this component
 * has no fixed notion of which industries exist.
 */
const IndustriesServed: SectionComponent<"industriesServed"> = ({ data }) => {
  return (
    <Container>
      <FadeIn delay={0}>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{data.heading}</h2>
      </FadeIn>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.industries.map((industry, index) => (
          <FadeIn key={industry.slug} delay={0.06 + index * 0.06}>
            <a href={`/industries/${industry.slug}`} className="block h-full focus-visible:outline-none">
              <Card className="flex h-full flex-col gap-3 focus-visible:ring-2 focus-visible:ring-sky-600">
                <Badge>{industry.name}</Badge>
                <p className="text-sm text-slate-600">{industry.description}</p>
              </Card>
            </a>
          </FadeIn>
        ))}
      </div>
    </Container>
  );
};

export default IndustriesServed;