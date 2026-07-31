/**
 * SalesFluance Service Page Engine — Section Placeholder
 *
 * Scaffolding only. Every entry in SectionRegistry currently points here
 * until its real section component is implemented in a later sprint task.
 * It has no business logic and no brand styling decisions — its only job
 * is to prove the engine's data-in/render-out contract end-to-end, so real
 * section components can be swapped into the registry later with zero
 * change to ServicePageEngine or SectionRenderer.
 *
 * Do not add service- or section-specific logic here. When a section's
 * real component is implemented, replace its entry in SectionRegistry —
 * this component should shrink toward unused, not grow new behavior.
 */

export interface SectionPlaceholderProps {
  data: unknown;
}

export function SectionPlaceholder({ data }: SectionPlaceholderProps) {
  return (
    <div className="rounded border border-dashed border-gray-300 p-4 text-sm text-gray-500">
      <p className="mb-2 font-mono">Section not yet implemented — rendering raw data:</p>
      <pre className="overflow-x-auto whitespace-pre-wrap">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}