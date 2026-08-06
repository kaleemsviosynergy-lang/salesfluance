import type { ServicePageConfig } from "@/types/service";

import { SectionRenderer } from "./SectionRenderer";

export interface ServicePageEngineProps {
  config: ServicePageConfig;
}

/**
 * Service Page Engine
 *
 * Pure rendering engine responsible for rendering a ServicePageConfig.
 * Business logic belongs to the content layer. Individual UI belongs to
 * section components. This component simply orchestrates rendering.
 */
export function ServicePageEngine({
  config,
}: ServicePageEngineProps): React.JSX.Element {
  return (
    <>
      {config.sections.map((section) => (
        <SectionRenderer
          key={section.id}
          entry={section}
        />
      ))}
    </>
  );
}