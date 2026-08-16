import * as React from "react";
import { cn } from "@/lib/utils";

import MegaMenuCard from "./MegaMenuCard";
import MegaMenuSectionHeading from "./MegaMenuSectionHeading";

export interface MegaMenuColumnItem {
  /** Card title. */
  title: string;

  /** Short one-line description. */
  description: string;

  /** Navigation destination. */
  href: string;

  /** Optional icon. */
  icon?: React.ReactNode;

  /** Marks this card with a subtle "Featured" badge. */
  featured?: boolean;
}

export interface MegaMenuColumnProps {
  /** Column heading. */
  title: string;

  /** Cards rendered beneath the heading. */
  items: MegaMenuColumnItem[];

  /**
   * How items are arranged beneath the heading.
   * "list" (default) is the existing single-column stack used by Services.
   * "grid" arranges items in two columns — used for flat, category-less
   * lists like Industries so they don't run into one tall column.
   */
  itemsLayout?: "list" | "grid";

  /** Additional classes. */
  className?: string;
}

/**
 * MegaMenuColumn
 *
 * Generic navigation column.
 *
 * Used by:
 * - Services
 * - Industries
 * - Future Solutions
 * - Resources
 *
 * Business agnostic.
 */
export default function MegaMenuColumn({
  title,
  items,
  itemsLayout = "list",
  className,
}: MegaMenuColumnProps): React.JSX.Element {
  return (
    <div className={className}>
      <MegaMenuSectionHeading>
        {title}
      </MegaMenuSectionHeading>

      <div
        className={cn(
          itemsLayout === "grid"
            ? "grid grid-cols-1 gap-x-4 gap-y-2"
            : "space-y-1"
        )}
      >
        {items.map((item) => (
          <MegaMenuCard
            key={item.href}
            href={item.href}
            title={item.title}
            description={item.description}
            icon={item.icon}
            featured={item.featured}
          />
        ))}
      </div>
    </div>
  );
}