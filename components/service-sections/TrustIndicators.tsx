import { createElement as h } from "react";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import type { SectionComponent } from "@/components/engine/SectionRegistry";

/**
 * Renders the "Trust Indicators" section: an optional logo strip and/or
 * stat row. This is a proof-optional section by design — if `data`
 * supplies neither logos nor stats, this component renders nothing rather
 * than placeholder chrome, since fabricated social proof is never
 * acceptable.
 */
const TrustIndicators: SectionComponent<"trustIndicators"> = ({ data }) => {
  const hasLogos = Boolean(data.logos && data.logos.length > 0);
  const hasStats = Boolean(data.stats && data.stats.length > 0);

  if (!hasLogos && !hasStats) {
    return null;
  }

  return (
    <Container>
      {data.heading ? (
        <FadeIn delay={0}>
          <p className="text-center text-sm font-semibold uppercase tracking-wide text-slate-400">{data.heading}</p>
        </FadeIn>
      ) : null}

      {hasLogos ? (
        <FadeIn delay={0.06}>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {data.logos!.map((logo) => (
              // eslint-disable-next-line @next/next/no-img-element -- replace with next/image at integration time if desired
              <img key={logo.src} src={logo.src} alt={logo.alt} className="h-8 w-auto grayscale opacity-70" />
            ))}
          </div>
        </FadeIn>
      ) : null}

      {hasStats ? (
        <FadeIn delay={0.12}>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {data.stats!.map((stat) => (
              <p key={stat.label} className="text-sm text-slate-500">
                {stat.value ? <span className="font-semibold text-slate-900">{stat.value} </span> : null}
                {stat.label}
              </p>
            ))}
          </div>
        </FadeIn>
      ) : null}
    </Container>
  );
};

export default TrustIndicators;