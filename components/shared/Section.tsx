/**
 * SalesFluance Service Page Engine — Section Layout Wrapper
 *
 * Deliberately minimal: this component enforces spacing consistency and a
 * real <section> landmark for every rendered section. It makes zero brand,
 * color, or typography decisions — that is out of scope for the engine and
 * belongs to the individual section components as they are implemented.
 *
 * No business logic. No knowledge of any specific section type or service.
 */

import type { ReactNode } from "react";

export interface SectionProps {
  /** Stable id from the section's SectionEntry — used as the DOM id and anchor target. */
  id: string;
  /** Falls back to a readable label (the section's type) until a real heading exists. */
  ariaLabel?: string;
  children: ReactNode;
}

export function Section({ id, ariaLabel, children }: SectionProps) {
  return (
    <section
    id={id}
    aria-label={ariaLabel}
    className="w-full"
>
    {children}
</section>
  );
}