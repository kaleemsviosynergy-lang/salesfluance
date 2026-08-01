import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import FadeIn from "@/components/ui/FadeIn";
import { Section } from "@/components/shared/Section";
import { getImplementedServiceSlugs } from "@/content/services";
import { tryGetServiceConfig } from "@/lib/content/getServiceConfig";
import type { IconName, ServiceCategory } from "@/types/shared";

export const metadata: Metadata = {
  title: "Enterprise B2B Growth Services | SalesFluance",
  description:
    "AI-assisted demand generation, lead generation, appointment setting and revenue acceleration designed for modern B2B companies.",
};

/**
 * Decorative icon per service category. This is a closed, presentation-only
 * mapping keyed off the existing ServiceCategory enum — not service-specific
 * content, so it introduces no duplication and needs no update as new
 * services are added (only if a wholly new category is ever introduced).
 */
const CATEGORY_ICON: Record<ServiceCategory, IconName> = {
  "Demand Generation": "target",
  "Data Solutions": "database",
  "Marketing Services": "mail",
  "Sales Support": "phone",
};

/**
 * Derives a readable display name from a service slug (e.g.
 * "lead-generation" -> "Lead Generation"). A generic formatting transform,
 * not a hardcoded name lookup — it works for any slug the content layer
 * produces, including services added after this page was written.
 */
function formatServiceName(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const PROCESS_STEPS = ["Discover", "Research", "Verify", "Outreach", "Optimize"] as const;

/** Minimal shape a Services Grid card needs — derived per service below, never hardcoded. */
interface ServiceCardData {
  slug: string;
  name: string;
  description: string;
  category: ServiceCategory;
}

/**
 * Services Listing page (/services). Introduces every implemented,
 * published service and routes visitors into the existing dynamic service
 * pages at /services/{slug}. The services grid is built entirely from the
 * content layer via getImplementedServiceSlugs()/tryGetServiceConfig() —
 * no service name, description, or count is hardcoded here, so newly
 * published services appear automatically with no change to this file.
 *
 * This page does not go through ServicePageEngine/SectionRenderer (it has
 * no ServicePageConfig of its own), so — unlike the individual section
 * components under components/sections/, which rely on SectionRenderer to
 * supply the Section wrapper — each block here applies Section itself.
 */
export default async function ServicesPage() {
  const slugs = getImplementedServiceSlugs();
 const results = await Promise.all(
  slugs.map((slug) =>
    tryGetServiceConfig(slug, {
      allowUnpublished: process.env.NODE_ENV !== "production",
    })
  )
);

  const services: ServiceCardData[] = [];
  for (const result of results) {
    if (!result.ok) continue;

    const heroEntry = result.config.sections.find((section) => section.type === "hero");
    const description = heroEntry && heroEntry.type === "hero" ? heroEntry.data.subhead : undefined;
    if (!description) continue;

    services.push({
      slug: result.config.slug,
      name: formatServiceName(result.config.slug),
      description,
      category: result.config.category,
    });
  }

  return (
    <main>
      {/* 1. Hero */}
      <Section id="services-hero" ariaLabel="Enterprise B2B Growth Services">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <FadeIn delay={0}>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Enterprise B2B Growth Services
              </h1>
            </FadeIn>
            <FadeIn delay={0.08}>
              <p className="max-w-2xl text-lg text-slate-600 sm:text-xl">
                AI-assisted demand generation, lead generation, appointment setting and revenue acceleration designed
                for modern B2B companies.
              </p>
            </FadeIn>
            <FadeIn delay={0.16}>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
                <Button href="/contact" variant="primary" className="w-full sm:w-auto">
                  Book Discovery Call
                </Button>
                <Button href="/process" variant="outline" className="w-full sm:w-auto">
                  View Process
                </Button>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* 2. Services Grid */}
      <Section id="services-grid" ariaLabel="Our Services">
        <Container>
          <FadeIn delay={0}>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Services</h2>
          </FadeIn>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <FadeIn key={service.slug} delay={0.06 + index * 0.04}>
                <Card className="flex h-full flex-col gap-4">
                  <Badge>{service.category}</Badge>
                  <h3 className="text-lg font-semibold text-slate-900">{service.name}</h3>
                  <p className="flex-1 text-sm text-slate-600">{service.description}</p>
                  <Button href={`/services/${service.slug}`} variant="text">
                    Learn More
                  </Button>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. Why SalesFluance */}
      <Section id="why-salesfluance" ariaLabel="Why SalesFluance">
        <Container>
          <FadeIn delay={0}>
            <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Why SalesFluance
            </h2>
          </FadeIn>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { label: "AI Assisted", icon: "sparkles" as IconName },
              { label: "Enterprise Quality", icon: "award" as IconName },
              { label: "Human Verified", icon: "shield-check" as IconName },
            ].map((feature, index) => (
              <FadeIn key={feature.label} delay={0.06 + index * 0.06}>
                <Card className="flex flex-col items-center gap-3 text-center">
                  <Badge>{feature.label}</Badge>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. Process Preview */}
      <Section id="process-preview" ariaLabel="Our Process">
        <Container>
          <div className="flex flex-col items-center gap-8">
            <FadeIn delay={0}>
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                {PROCESS_STEPS.map((step, index) => (
                  <div key={step} className="flex items-center gap-4 sm:gap-6">
                    <div className="flex flex-col items-center gap-2">
                      <span
                        aria-hidden="true"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-600 text-sm font-semibold text-white"
                      >
                        {index + 1}
                      </span>
                      <span className="text-sm font-medium text-slate-700">{step}</span>
                    </div>
                    {index < PROCESS_STEPS.length - 1 ? (
                      <span aria-hidden="true" className="h-px w-8 bg-slate-300 sm:w-12" />
                    ) : null}
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Button href="/process" variant="outline">
                See Full Process
              </Button>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* 5. Final CTA */}
      <Section id="final-cta" ariaLabel="Ready to Accelerate Your Pipeline">
        <Container>
          <FadeIn delay={0}>
            <Card className="flex flex-col items-center gap-6 py-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Ready to accelerate your pipeline?
              </h2>
              <Button href="/contact" variant="primary">
                Book Discovery Call
              </Button>
            </Card>
          </FadeIn>
        </Container>
      </Section>
    </main>
  );
}