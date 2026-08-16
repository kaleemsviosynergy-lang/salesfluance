import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import type { SectionComponent } from "@/components/engine/SectionRegistry";

/**
 * Renders the "Related Services" section as a compact navigation
 * between adjacent SalesFluance capabilities.
 *
 * Service names, slugs, and outcome copy remain fully data-driven.
 */
const RelatedServices: SectionComponent<"relatedServices"> = ({ data }) => {
  return (
    <Container>
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <FadeIn delay={0}>
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
              EXPLORE MORE
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              {data.heading}
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Extend your revenue motion with capabilities that work alongside
              your ABM strategy.
            </p>
          </div>
        </FadeIn>

        {/* Related service navigation */}
        <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
          {data.services.map((service, index) => (
            <FadeIn key={service.slug} delay={0.08 + index * 0.06}>
              <a
                href={`/services/${service.slug}`}
                className="group flex items-center gap-5 py-6 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 sm:gap-8"
              >
                {/* Number */}
                <span className="w-8 shrink-0 text-xs font-bold tracking-[0.14em] text-slate-300">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Service */}
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-bold text-slate-950 transition-colors group-hover:text-indigo-600 sm:text-lg">
                    {service.name}
                  </h3>

                  <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600">
                    {service.outcomeLine}
                  </p>
                </div>

                {/* Arrow */}
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:border-indigo-200 group-hover:bg-indigo-50 group-hover:text-indigo-600"
                >
                  →
                </span>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default RelatedServices;