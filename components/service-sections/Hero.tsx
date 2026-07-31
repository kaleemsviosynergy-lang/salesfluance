import * as React from "react";
import Button, { type ButtonVariant as UIButtonVariant } from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import type { HeroSection } from "@/types/service";
import type { ButtonVariant as CTAVariant, CTALink } from "@/types/shared";

/** Props for Hero — receives only the typed HeroSection data payload. */
export interface HeroProps {
  data: HeroSection;
}

/**
 * Maps the content-layer CTA variant (types/shared.ts `ButtonVariant`) to
 * the Design System's Button component variant (components/ui/Button.tsx
 * `ButtonVariant`). The two unions are declared independently and are not
 * identical ("text" has no equivalent on Button, and Button's "ghost" /
 * "destructive" have no equivalent on CTALink), so this table is the single
 * place that reconciles them. No other logic is applied to CTA data.
 */
const ctaVariantToButtonVariant: Record<CTAVariant, UIButtonVariant> = {
  primary: "primary",
  secondary: "secondary",
  outline: "outline",
  text: "ghost",
};

/** Renders a single CTALink using the existing Button API in link mode. */
function renderCta(cta: CTALink): React.JSX.Element {
  return (
    <Button
      href={cta.href}
      variant={ctaVariantToButtonVariant[cta.variant]}
      target={cta.external ? "_blank" : undefined}
      rel={cta.external ? "noopener noreferrer" : undefined}
    >
      {cta.label}
    </Button>
  );
}

/**
 * Hero
 * Top-of-page section for flagship service pages. Renders exactly the
 * fields present on HeroSection — no hardcoded copy, no per-service
 * branching. Composed entirely from existing Design System primitives
 * (Container, FadeIn, Badge, Button); intentionally not wrapped in Section
 * so the engine/caller controls outer spacing and background.
 */
export default function Hero({ data }: HeroProps): React.JSX.Element {
  const { eyebrow, headline, subhead, primaryCta, secondaryCta, visual } = data;

  return (
    <Container>
      <div className="flex flex-col items-center gap-10 text-center lg:flex-row lg:items-center lg:text-left">
        <div className="flex-1">
          <FadeIn direction="up">
            <Badge variant="outline" size="md">
              {eyebrow}
            </Badge>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {headline}
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <p className="mt-4 text-lg text-slate-600 sm:text-xl">{subhead}</p>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              {renderCta(primaryCta)}
              {secondaryCta && renderCta(secondaryCta)}
            </div>
          </FadeIn>
        </div>

        {visual && (
          <FadeIn direction="left" delay={0.15} className="w-full flex-1">
            <img
              src={visual.src}
              alt={visual.alt}
              width={visual.width}
              height={visual.height}
              className="h-auto w-full rounded-2xl"
            />
          </FadeIn>
        )}
      </div>
    </Container>
  );
}