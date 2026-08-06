import * as React from "react";
import {
  ArrowRight,
  CalendarCheck,
  Crosshair,
  Database,
  Layers,
  ListChecks,
  Mail,
  Newspaper,
  Phone,
  Radar,
  ShieldCheck,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

import MegaMenuBrand from "./MegaMenuBrand";
import MegaMenuColumn from "./MegaMenuColumn";

import type { IconName } from "@/types/shared";
import type {
  NavigationFeatured,
  NavigationGroup,
} from "@/app/data/navigation";

export interface MegaMenuProps {
  /** Three navigation columns. */
  groups: NavigationGroup[];

  /** Reserved for future use. */
  featured?: NavigationFeatured;

  /** Additional class names. */
  className?: string;
}

/**
 * Maps the `icon` key on a NavigationLink to an actual Lucide icon
 * component. Kept local to MegaMenu rather than introducing a new shared
 * component — this is purely a lookup table, not UI.
 *
 * Falls back to ArrowRight (the previous default) for any link that omits
 * an icon or references a key not yet mapped here.
 */
const NAV_ICON_MAP: Partial<Record<IconName, LucideIcon>> = {
  target: Target,
  "trending-up": TrendingUp,
  crosshair: Crosshair,
  "calendar-check": CalendarCheck,
  phone: Phone,
  radar: Radar,
  "list-checks": ListChecks,
  database: Database,
  "shield-check": ShieldCheck,
  layers: Layers,
  mail: Mail,
  newspaper: Newspaper,
};

function resolveNavIcon(icon?: IconName): React.ReactNode {
  const Icon = icon ? NAV_ICON_MAP[icon] : undefined;
  const Resolved = Icon ?? ArrowRight;
  return <Resolved className="h-4 w-4" strokeWidth={2} />;
}

/**
 * MegaMenu v2
 *
 * Enterprise navigation inspired by modern SaaS products.
 *
 * Responsibilities:
 * - Layout only
 * - Receives navigation data
 * - Delegates rendering to child components
 *
 * No business logic.
 * No routing logic.
 */
/**
 * Href of the single card that should carry the "Featured" badge.
 * Kept as a local constant rather than a navigation.ts schema field so the
 * NavigationLink data shape stays untouched.
 */
const FEATURED_HREF = "/services/lead-generation";

export default function MegaMenu({
  groups,
  className,
}: MegaMenuProps): React.JSX.Element {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1200px] rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10 ring-1 ring-black/[0.03]",
        className
      )}
    >
      <div className="grid grid-cols-1 gap-10 p-8 lg:grid-cols-[1fr_1fr_1fr_270px] lg:gap-10 lg:p-10">
        {/* Navigation Columns */}
        {groups.map((group) => (
          <MegaMenuColumn
            key={group.title}
            title={group.title}
            items={group.links.map((link) => ({
              title: link.label,
              description: link.description ?? "",
              href: link.href,
              icon: resolveNavIcon(link.icon),
              featured: link.href === FEATURED_HREF,
            }))}
          />
        ))}

        {/* Brand Panel */}
        <MegaMenuBrand />
      </div>
    </div>
  );
}