import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";
import type { SectionComponent } from "@/components/engine/SectionRegistry";

/**
 * Renders the "Related Services" section: a heading and a set of linked
 * service cards. Each card links to its own service page by slug — no
 * service names or routes are hardcoded, both come from `data`.
 */
const RelatedServices: SectionComponent<"relatedServices"> = ({ data }) => {
  return (
    <Container>
      <FadeIn delay={0}>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{data.heading}</h2>
      </FadeIn>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.services.map((service, index) => (
          <FadeIn key={service.slug} delay={0.06 + index * 0.06}>
            <a href={`/services/${service.slug}`} className="block h-full focus-visible:outline-none">
              <Card className="flex h-full flex-col gap-3 focus-visible:ring-2 focus-visible:ring-sky-600">
                <Badge>{service.name}</Badge>
                <p className="text-sm text-slate-600">{service.outcomeLine}</p>
              </Card>
            </a>
          </FadeIn>
        ))}
      </div>
    </Container>
  );
};

export default RelatedServices;