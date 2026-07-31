/**
 * SalesFluance Service Page Engine — ServicePageEngine
 *
 * The single rendering entry point for every flagship service page. This
 * component has no knowledge of any specific service — it receives a
 * ServicePageConfig as a prop and renders exactly what that config
 * describes, in the order the config describes. Adding an 11th, 12th, or
 * Nth service, or reordering a page's sections, never requires a change
 * to this file: those are content changes, made entirely in
 * `content/services/*.ts`.
 *
 * Responsibilities, and only these:
 *   1. Accept an already-loaded ServicePageConfig (loading/validating a
 *      config by slug is the Content Service's job — see
 *      lib/content/getServiceConfig.ts — not the engine's).
 *   2. Loop over `config.sections` in the order given.
 *   3. Delegate each entry to SectionRenderer.
 *
 * No business logic. No hardcoded services. No styling beyond the minimal
 * layout wrapper each section already gets via SectionRenderer/Section.
 */

import type { ServicePageConfig } from "../../types/service";
import { SectionRenderer } from "./SectionRenderer";

export interface ServicePageEngineProps {
  config: ServicePageConfig;
}

export function ServicePageEngine({ config }: ServicePageEngineProps) {
  return (
    <main aria-label={`${config.slug} service page`}>
      {config.sections.map((entry) => (
        <SectionRenderer key={entry.id} entry={entry} />
      ))}
    </main>
  );
}