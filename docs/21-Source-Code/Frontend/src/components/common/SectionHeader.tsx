import type { ReactNode } from "react";

interface SectionHeaderProps {
  /** Section title, rendered smaller than PageHeader's title. */
  title: string;
  /** Optional supporting copy shown under the title. */
  description?: string;
  /** Optional actions (buttons, links, menus) rendered on the right. */
  actions?: ReactNode;
}

/**
 * Header for a section within a page (e.g. a Card or panel heading).
 * Same left-title / right-actions layout as PageHeader, at a smaller scale.
 */
export function SectionHeader({
  title,
  description,
  actions,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div className="space-y-1">
        <h2 className="text-base font-semibold text-foreground">{title}</h2>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      {actions && (
        <div className="flex shrink-0 flex-wrap items-center gap-2">
          {actions}
        </div>
      )}
    </div>
  );
}