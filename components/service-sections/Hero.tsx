import * as React from "react";
import Button, { type ButtonVariant as UIButtonVariant } from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import ABMHeroVisual from "@/components/sections/ABMHeroVisual";
import type { HeroSection } from "@/types/service";
import type { ButtonVariant as CTAVariant, CTALink } from "@/types/shared";

export interface HeroProps {
  data: HeroSection;
}

const ctaVariantToButtonVariant: Record<CTAVariant, UIButtonVariant> = {
  primary: "primary",
  secondary: "secondary",
  outline: "outline",
  text: "ghost",
};

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
 *
 * ABM gets a dedicated composition because its visual is a structured revenue
 * intelligence interface rather than a generic service-page image. All copy
 * and CTA data still come from HeroSection; other services keep the original
 * image-based layout.
 */
export default function Hero({ data }: HeroProps): React.JSX.Element {
  const { eyebrow, headline, subhead, primaryCta, secondaryCta, visual } = data;
  const isABMHero = eyebrow === "Account-Based Marketing";

  if (isABMHero) {
    return (
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[.92fr_1.08fr] lg:gap-8 xl:gap-10">
          <div className="min-w-0">
            <FadeIn direction="up">
              <Badge variant="outline" size="md">
                {eyebrow}
              </Badge>
            </FadeIn>

            <FadeIn direction="up" delay={0.08}>
              <h1 className="mt-5 max-w-[620px] text-4xl font-bold tracking-[-0.035em] text-slate-900 sm:text-5xl lg:text-[54px] lg:leading-[1.03] xl:text-[58px]">
                {headline}
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.16}>
              <p className="mt-6 max-w-[590px] text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                {subhead}
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.24}>
              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
                {renderCta(primaryCta)}
                {secondaryCta && renderCta(secondaryCta)}
              </div>
            </FadeIn>

          </div>

          <FadeIn direction="left" delay={0.12} className="w-full min-w-0">
            <ABMHeroVisual />
          </FadeIn>
        </div>
      </Container>
    );
  }

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

        {visual ? (
          <FadeIn direction="left" delay={0.15} className="w-full flex-1">
            <img
              src={visual.src}
              alt={visual.alt}
              width={visual.width}
              height={visual.height}
              className="h-auto w-full rounded-2xl"
            />
          </FadeIn>
        ) : null}
      </div>
    </Container>
  );
}