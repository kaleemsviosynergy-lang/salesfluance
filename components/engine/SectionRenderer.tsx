/**
 * SalesFluance Service Page Engine — Section Renderer
 *
 * Resolves exactly one SectionEntry to its registered component and renders
 * it inside the shared layout wrapper. This is the ONLY place a
 * SectionEntry's `type` is used to select behavior, and it does so
 * generically via SECTION_REGISTRY — never a switch/if-chain keyed on
 * section type or service slug, which would need editing every time a
 * section or service is added.
 *
 * No business logic. No knowledge of any specific service.
 */

import type { SectionEntry } from "../../types/service";
import { SECTION_REGISTRY } from "./SectionRegistry";
import { Section } from "../shared/Section";

export interface SectionRendererProps {
  entry: SectionEntry;
}

export function SectionRenderer({ entry }: SectionRendererProps) {
  const Component = SECTION_REGISTRY[entry.type];

  return (
    <Section id={entry.id} ariaLabel={entry.type}>
      <Component data={entry.data} />
    </Section>
  );
}