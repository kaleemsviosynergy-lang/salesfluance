/**
 * SalesFluance Service Page Engine — Section Registry
 *
 * The single place a SectionType is mapped to the component that renders
 * it. This is the ONLY file that should change to wire up a real section
 * component — ServicePageEngine and SectionRenderer never need to change,
 * regardless of how many of the 17 section types have real implementations
 * versus scaffolding.
 *
 * Type-safety note: `SectionComponent<T>` is the precise, per-type contract
 * a concrete section component should be authored against (e.g.
 * `const Hero: SectionComponent<"hero"> = ({ data }) => ...`, where `data`
 * is typed exactly as `HeroSection`). The registry map itself, however,
 * stores components under the common denominator `AnySectionComponent`
 * (`data: unknown`). This is a deliberate, documented boundary: TypeScript
 * cannot correlate a discriminant (`SectionType`) with a payload
 * (`SectionEntry["data"]`) across a *generic* lookup without either an
 * unsafe cast or losing type safety at the individual component's
 * definition site. Keeping the registry's value type as `unknown` avoids
 * ever needing a cast, at the cost of type safety only at this one generic
 * dispatch point — every concrete section component still gets full,
 * precise typing where it's actually authored.
 *
 * `Record<SectionType, ...>` (not `Partial<...>`) is used deliberately so
 * that omitting a SectionType here is a compile-time error, not a runtime
 * surprise — the registry must always be exhaustive.
 */

import type { ComponentType } from "react";
import type { SectionEntryOf } from "../../types/service";
import type { SectionType } from "../../types/shared";
import { SectionPlaceholder } from "./SectionPlaceholder";

/** Precise per-type contract for authoring an individual section component. */
export type SectionComponent<T extends SectionType> = ComponentType<{
  data: SectionEntryOf<T>["data"];
}>;

/** Common-denominator contract used only by the registry map itself. */
export type AnySectionComponent = ComponentType<{ data: unknown }>;

export const SECTION_REGISTRY: Record<SectionType, AnySectionComponent> = {
  // Every entry below currently points at the scaffolding placeholder.
  // Replace an entry with its real component as that section is
  // implemented (tracked in the Sprint backlog) — no other engine file
  // needs to change when that happens.
  utilityBar: SectionPlaceholder,
  hero: SectionPlaceholder,
  trustIndicators: SectionPlaceholder,
  businessChallenges: SectionPlaceholder,
  ourSolution: SectionPlaceholder,
  serviceOverview: SectionPlaceholder,
  whySalesFluance: SectionPlaceholder,
  businessOutcomes: SectionPlaceholder,
  whoThisIsFor: SectionPlaceholder,
  serviceProcess: SectionPlaceholder,
  deliverables: SectionPlaceholder,
  technologyStack: SectionPlaceholder,
  industriesServed: SectionPlaceholder,
  successMetrics: SectionPlaceholder,
  faqs: SectionPlaceholder,
  relatedServices: SectionPlaceholder,
  finalCta: SectionPlaceholder,
};