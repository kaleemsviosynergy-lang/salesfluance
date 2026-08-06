import * as React from "react";
import { cn } from "@/lib/utils";

export interface MegaMenuSectionHeadingProps {
  /** Column heading text. */
  children: React.ReactNode;

  /** Additional classes if needed. */
  className?: string;
}

/**
 * MegaMenuSectionHeading
 *
 * Shared heading used by every Mega Menu column.
 *
 * Responsibilities:
 * - Consistent typography
 * - Consistent spacing
 * - Divider line
 *
 * Business-agnostic.
 */
export default function MegaMenuSectionHeading({
  children,
  className,
}: MegaMenuSectionHeadingProps): React.JSX.Element {
  return (
    <div className={cn("mb-9", className)}>
      <h3
        className="
          text-xs
          font-bold
          uppercase
          tracking-[0.16em]
          text-slate-700
        "
      >
        {children}
      </h3>

      <div className="mt-4 h-px w-full bg-slate-200" />
    </div>
  );
}