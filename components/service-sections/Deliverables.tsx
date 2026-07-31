import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/ui/FadeIn";
import type { OverviewSection } from "../../types/service";

export interface ServiceOverviewProps {
  data: OverviewSection;
}

/**
 * Renders the "Service Overview" section: a heading, one or more prose
 * paragraphs, and an optional at-a-glance bullet list set apart in a Card.
 * All copy comes from `data` — no business content is hardcoded here.
 */
export default function ServiceOverview({ data }: ServiceOverviewProps) {
  return (
    <Container>
      <div
        className={
          data.bullets && data.bullets.length > 0
            ? "grid grid-cols-1 gap-10 lg:grid-cols-[3fr_2fr] lg:items-start"
            : "mx-auto max-w-3xl"
        }
      >
        <div className="flex flex-col gap-5">
          <FadeIn delay={0}>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{data.heading}</h2>
          </FadeIn>
          {data.paragraphs.map((paragraph, index) => (
            <FadeIn key={index} delay={0.06 + index * 0.05}>
              <p className="text-lg text-slate-600">{paragraph}</p>
            </FadeIn>
          ))}
        </div>

        {data.bullets && data.bullets.length > 0 ? (
          <FadeIn delay={0.1}>
            <Card>
              <ul className="flex flex-col gap-3">
                {data.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-600" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </FadeIn>
        ) : null}
      </div>
    </Container>
  );
}