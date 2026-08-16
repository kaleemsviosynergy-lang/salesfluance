import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/ui/FadeIn";
import type { SectionComponent } from "@/components/engine/SectionRegistry";

/**
 * Renders the "Service Overview" section: a heading, one or more prose
 * paragraphs, and an optional at-a-glance bullet list set apart in a Card.
 * All copy comes from `data` — no business content is hardcoded here.
 */
const ServiceOverview: SectionComponent<"serviceOverview"> = ({ data }) => {
  const hasBullets = Boolean(data.bullets && data.bullets.length > 0);

  return (
    <Container>
      <div className={hasBullets ? "grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_1.4fr] lg:items-start" : "mx-auto max-w-3xl"}>
        <div className="flex flex-col gap-5">
          <FadeIn delay={0}>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{data.heading}</h2>
          </FadeIn>
          {data.paragraphs.slice(0, 2).map((paragraph, index) => (
            <FadeIn key={index} delay={0.06 + index * 0.05}>
              <p className="text-base leading-7 text-slate-600 sm:text-lg">{paragraph}</p>
            </FadeIn>
          ))}
        </div>

        {hasBullets ? (
          <FadeIn delay={0.1}>
            <div className="rounded-[28px] border border-slate-200 bg-slate-50/70 p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[.18em] text-slate-500">What We Actually Do</p>
              <ul className="mt-5 space-y-4">
                {data.bullets!.map((bullet, index) => (
                  <li key={`${bullet}-${index}`} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sm font-bold text-sky-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{bullet}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ) : null}
      </div>
    </Container>
  );
};

export default ServiceOverview;