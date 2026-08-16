import * as React from "react";

import Button, {
  type ButtonVariant as UIButtonVariant,
} from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

import ABMHeroVisual from "@/components/sections/ABMHeroVisual";
import LeadGenerationHeroVisual from "@/components/sections/LeadGenerationHeroVisual";
import DemandGenerationHeroVisual from "@/components/sections/DemandGenerationHeroVisual";
import TrustStrip from "@/components/home/TrustStrip";

import type { HeroSection } from "@/types/service";
import type {
  ButtonVariant as CTAVariant,
  CTALink,
} from "@/types/shared";

export interface HeroProps {
  data: HeroSection;
}

const ctaVariantToButtonVariant: Record<
  CTAVariant,
  UIButtonVariant
> = {
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
 * Uses dedicated visual compositions for selected services:
 *
 * - Account-Based Marketing
 * - Lead Generation
 * - Demand Generation
 *
 * All other services continue using their configured image visual.
 */
export default function Hero({
  data,
}: HeroProps): React.JSX.Element {
  const {
    eyebrow,
    headline,
    subhead,
    primaryCta,
    secondaryCta,
    visual,
  } = data;

  /**
   * Identify service-specific hero compositions.
   */
  const isABMHero =
    eyebrow === "Account-Based Marketing";

  const isLeadGenerationHero =
    eyebrow === "Demand Generation" &&
    headline === "Build a Predictable Sales Pipeline";

  const isDemandGenerationHero =
    eyebrow === "Demand Generation" &&
    headline === "Create Demand Before Your Pipeline Needs It";

  return (
    <Container>
      <div className="flex flex-col items-center gap-10 text-center lg:flex-row lg:items-center lg:text-left">
        
        {/* Hero Copy */}
        <div className="flex-1">
          <FadeIn direction="up">
            <Badge
              variant="outline"
              size="md"
            >
              {eyebrow}
            </Badge>
          </FadeIn>

          <FadeIn
            direction="up"
            delay={0.1}
          >
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {headline}
            </h1>
          </FadeIn>

          <FadeIn
            direction="up"
            delay={0.2}
          >
            <p className="mt-4 text-lg text-slate-600 sm:text-xl">
              {subhead}
            </p>
          </FadeIn>

          <FadeIn
            direction="up"
            delay={0.3}
          >
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              {renderCta(primaryCta)}

              {secondaryCta &&
                renderCta(secondaryCta)}
            </div>
          </FadeIn>
        </div>

        {/* Service-specific Hero Visual */}
        {isABMHero ? (
          <FadeIn
            direction="left"
            delay={0.15}
            className="w-full flex-1"
          >
            <ABMHeroVisual />
          </FadeIn>
        ) : isLeadGenerationHero ? (
          <FadeIn
            direction="left"
            delay={0.15}
            className="w-full flex-1"
          >
            <LeadGenerationHeroVisual />
          </FadeIn>
        ) : isDemandGenerationHero ? (
          <FadeIn
            direction="left"
            delay={0.15}
            className="w-full flex-1"
          >
            <DemandGenerationHeroVisual />
          </FadeIn>
        ) : visual ? (
          <FadeIn
            direction="left"
            delay={0.15}
            className="w-full flex-1"
          >
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