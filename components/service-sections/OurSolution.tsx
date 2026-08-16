import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import type { SectionComponent } from "@/components/engine/SectionRegistry";

/**
 * Renders the "Our Solution" section: a heading, optional subheading, a
 * grid of solution pillars, and an optional inline CTA. Every string, icon,
 * and pillar comes from `data` — no business content is hardcoded.
 */
const OurSolution: SectionComponent<"ourSolution"> = ({ data }) => {
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

      <div className="mt-10 grid grid-cols-1 gap-3 lg:grid-cols-6">
        {data.pillars.map((pillar, index) => (
          <FadeIn key={pillar.id} delay={0.1 + index * 0.06}>
            <div className="flex h-full items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-indigo-600" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-[.12em] text-slate-500">{pillar.title}</p>
                <p className="mt-1 text-sm leading-5 text-slate-600">{pillar.description}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {data.cta ? (
        <FadeIn delay={0.1 + data.pillars.length * 0.06 + 0.1}>
          <div className="mt-10 flex justify-center">
            <Button
              href={data.cta.href}
              variant={data.cta.variant as any}
              target={data.cta.external ? "_blank" : undefined}
              rel={data.cta.external ? "noopener noreferrer" : undefined}
            >
              {data.cta.label}
            </Button>
          </div>
        </FadeIn>
      ) : null}
    </Container>
  );
};

export default OurSolution;