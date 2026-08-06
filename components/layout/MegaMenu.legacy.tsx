"use client";

/**
 * SalesFluance MegaMenu
 *
 * Purpose:
 * Renders the panel content for a top-level navigation item's dropdown —
 * category columns of scannable service/industry cards, plus an optional
 * featured CTA panel. This file did not exist in the files shared for this
 * task; its public API is inferred entirely from how `Navigation.tsx`
 * already imports and calls it:
 *
 *   import MegaMenu, { type MegaMenuGroup, type MegaMenuFeatured } from "./MegaMenu";
 *   <MegaMenu groups={item.megaMenu.groups} featured={item.megaMenu.featured} />
 *
 * This implementation matches that exact contract — same default export,
 * same two named type exports, same two props — so it is a drop-in
 * replacement. Nothing in Navigation.tsx, Navbar.tsx, navigation.ts,
 * NavLink, or CTAButton needs to change.
 *
 * Data-driven, not content-driven:
 * This component is reused for both the Services menu (3 groups + a
 * featured panel) and the Industries menu (1 group, no featured panel,
 * per navigation.ts's actual data). It never hardcodes category names,
 * service names, or a fixed column count — the layout adapts to
 * `groups.length` and whether `featured` is present. A single-group menu
 * (Industries today) renders its links in an internal card grid rather
 * than one cramped, narrow column, since there's no featured column to
 * fill the remaining width.
 *
 * Icons:
 * `NavigationLink.icon?: IconName` already exists on the real data type,
 * but navigation.ts's current entries don't populate it yet. Rather than
 * hardcoding per-service icon choices into this component (business
 * content doesn't belong in a presentation component) or leaving cards
 * iconless, every card resolves its icon through a local, exhaustive
 * `IconName -> Lucide component` map with a neutral `ArrowRight` fallback
 * when a link has no `icon` set. Populating `icon` on each link in
 * navigation.ts is a recommended follow-up content change, not something
 * this component can or should do on the data file's behalf.
 *
 * Featured panel / value propositions:
 * `NavigationFeatured` (from navigation.ts) has no field for a bulleted
 * list of value propositions. Rather than fabricating
 * "AI-Assisted Research / Human Verified Data / ..." as literal strings
 * inside this component, `MegaMenuFeatured` is defined as an *additive*,
 * backward-compatible extension of `NavigationFeatured`
 * (`NavigationFeatured & { valuePoints?: string[] }`). Today's data has no
 * `valuePoints`, so the panel renders heading/description/CTA only, but
 * the UI is ready to show up to four value points the moment that
 * optional field is added to the "Need Qualified Leads?" object in
 * navigation.ts — a content update, not a breaking type change.
 *
 * Animation:
 * Navigation.tsx documents a deliberate "no dropdown state, pure CSS"
 * architecture (`group-hover` / `group-focus-within` on the parent
 * `<li>`). This component's root panel rides that same ancestor `.group`
 * context — it never introduces a second, competing visibility mechanism.
 * The fade is already handled by Navigation.tsx's own opacity classes;
 * this file adds a complementary `motion-safe:` translateY + scale
 * entrance on the same `group-hover`/`group-focus-within` triggers, so it
 * automatically no-ops under `prefers-reduced-motion` via Tailwind's
 * built-in media-query variant — no JS, no extra prop, no change to
 * Navigation.tsx required.
 *
 * The one deliberate exception to "no JS": an `onKeyDown` handler blurs
 * the active element on Escape, which is what actually closes the panel
 * given the CSS-only, focus-driven visibility model — without this, there
 * would be no way to close the menu from the keyboard other than tabbing
 * away. This is the sole reason this file is a Client Component.
 */

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BarChart,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle,
  Clock,
  Cpu,
  Database,
  Eye,
  FileText,
  Filter,
  Globe,
  Handshake,
  HeartPulse,
  Layers,
  Link as LinkIcon,
  Mail,
  MessageSquare,
  ListChecks,
  PieChart,
  Phone,
  RefreshCw,
  Search,
  Settings,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Workflow,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import CTAButton from "./CTAButton";
import { cn } from "@/lib/utils";
import type { IconName } from "@/types/shared";
import type {
  NavigationFeatured,
  NavigationGroup,
  NavigationLink,
} from "@/app/data/navigation";

/** Re-exported under the names Navigation.tsx already imports — same underlying shape as navigation.ts's own types, so no data transformation is needed anywhere in the chain. */
export type MegaMenuGroup = NavigationGroup;

/**
 * Additive extension of NavigationFeatured. `valuePoints` is optional so
 * today's data (which has none) remains perfectly valid — see file header
 * for the full rationale.
 */
export type MegaMenuFeatured = NavigationFeatured & {
  valuePoints?: string[];
};

export interface MegaMenuProps {
  /** Category columns, each rendered as a group of scannable link cards. */
  groups: MegaMenuGroup[];
  /** Optional featured CTA panel, rendered as an additional column when present. */
  featured?: MegaMenuFeatured;
  /** Additional class names merged onto the root panel element. */
  className?: string;
}

/**
 * Exhaustive IconName -> Lucide component map. `Record<IconName, ...>`
 * (not `Partial`) so adding a new IconName without updating this map is a
 * compile-time error, not a silent missing icon at runtime.
 */
const ICON_MAP: Record<IconName, LucideIcon> = {
  target: Target,
  users: Users,
  "trending-up": TrendingUp,
  search: Search,
  mail: Mail,
  phone: Phone,
  database: Database,
  "shield-check": ShieldCheck,
  "bar-chart": BarChart,
  layers: Layers,
  filter: Filter,
  calendar: Calendar,
  "check-circle": CheckCircle,
  zap: Sparkles,
  globe: Globe,
  briefcase: Briefcase,
  "pie-chart": PieChart,
  "file-text": FileText,
  link: LinkIcon,
  settings: Settings,
  award: Award,
  clock: Clock,
  "arrow-right": ArrowRight,
  star: Star,
  building: Building2,
  "heart-pulse": HeartPulse,
  cpu: Cpu,
  handshake: Handshake,
  "refresh-cw": RefreshCw,
  eye: Eye,
  "message-square": MessageSquare,
  "list-checks": ListChecks,
  sparkles: Sparkles,
  workflow: Workflow,
};

/** Uniform icon sizing/stroke across every card — set once, applied everywhere. */
const ICON_SIZE = 18;
const ICON_STROKE_WIDTH = 1.75;

function resolveIcon(name: IconName | undefined): LucideIcon {
  return name ? ICON_MAP[name] : ArrowRight;
}

/** Grid-column class per group count. Lookup, not a conditional chain; falls back to the 4-column treatment for any count beyond what's anticipated. */
const GROUP_GRID_CLASSES: Record<number, string> = {
  1: "lg:grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};
const DEFAULT_GROUP_GRID_CLASS = "sm:grid-cols-2 lg:grid-cols-4";

/** A single scannable, fully clickable link card: icon, title, one-line description. */
function ServiceCard({ link }: { link: NavigationLink }) {
  const Icon = resolveIcon(link.icon);

  const content = (
    <>
      <span
        className={cn(
          "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500",
          "transition-colors duration-200 ease-out group-hover/card:bg-blue-50 group-hover/card:text-blue-600",
        )}
      >
        <Icon size={ICON_SIZE} strokeWidth={ICON_STROKE_WIDTH} aria-hidden="true" />
      </span>
      <span className="flex min-w-0 flex-col">
        <span className="truncate text-sm font-semibold text-slate-900 transition-colors duration-200 ease-out group-hover/card:text-blue-600">
          {link.label}
        </span>
        {link.description ? (
          <span className="mt-0.5 line-clamp-1 text-xs text-slate-500">{link.description}</span>
        ) : null}
      </span>
    </>
  );

  const cardClassName = cn(
    "group/card flex items-start gap-3 rounded-xl p-3",
    "transition-all duration-200 ease-out",
    "hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-md",
    "motion-reduce:transition-none motion-reduce:hover:translate-y-0",
  );

  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={cardClassName}>
        {content}
      </a>
    );
  }

  return (
    <Link href={link.href} className={cardClassName}>
      {content}
    </Link>
  );
}

/** One category column: heading + its links, laid out per the parent grid's adaptive strategy. */
function CategoryColumn({ group, linksLayout }: { group: MegaMenuGroup; linksLayout: "stack" | "grid" }) {
  return (
    <div className="min-w-0">
      <h3 className="text-xs font-bold uppercase tracking-wide text-slate-400">{group.title}</h3>
      <div className={cn("mt-4", linksLayout === "grid" ? "grid grid-cols-1 gap-1 sm:grid-cols-2" : "flex flex-col gap-1")}>
        {group.links.map((link) => (
          <ServiceCard key={link.href} link={link} />
        ))}
      </div>
    </div>
  );
}

/** The optional right-hand featured CTA column — subtle tinted background, never a loud banner. */
function FeaturedPanel({ featured }: { featured: MegaMenuFeatured }) {
  return (
    <div className="flex min-w-0 flex-col rounded-xl bg-slate-50 p-6">
      <h3 className="text-base font-bold text-slate-900">{featured.title}</h3>
      <p className="mt-2 text-sm text-slate-600">{featured.description}</p>

      {featured.valuePoints && featured.valuePoints.length > 0 ? (
        <ul className="mt-4 flex flex-col gap-2">
          {featured.valuePoints.map((point) => (
            <li key={point} className="flex items-start gap-2 text-sm text-slate-700">
              <CheckCircle size={16} strokeWidth={1.75} className="mt-0.5 flex-shrink-0 text-blue-600" aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-6">
        <CTAButton href={featured.cta.href} external={featured.cta.external}>
          {featured.cta.label}
        </CTAButton>
      </div>
    </div>
  );
}

export default function MegaMenu({ groups, featured, className }: MegaMenuProps): React.JSX.Element {
  // A lone group with no featured panel gets its links arranged as an
  // internal card grid (e.g. Industries) rather than one narrow column,
  // since there's no featured column filling the remaining width.
  const linksLayout: "stack" | "grid" = groups.length === 1 && !featured ? "grid" : "stack";
  const gridColumnCount = groups.length + (featured ? 1 : 0);

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      (document.activeElement as HTMLElement | null)?.blur();
    }
  }

  return (
    <div
      onKeyDown={handleKeyDown}
      className={cn(
        "w-max min-w-[560px] max-w-[880px] rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5",
        "origin-top motion-safe:translate-y-1 motion-safe:scale-[0.98] motion-safe:opacity-0",
        "motion-safe:transition-all motion-safe:duration-200 motion-safe:ease-out",
        "motion-safe:group-hover:translate-y-0 motion-safe:group-hover:scale-100 motion-safe:group-hover:opacity-100",
        "motion-safe:group-focus-within:translate-y-0 motion-safe:group-focus-within:scale-100 motion-safe:group-focus-within:opacity-100",
        className,
      )}
    >
      <div className={cn("grid gap-x-10 gap-y-8", GROUP_GRID_CLASSES[gridColumnCount] ?? DEFAULT_GROUP_GRID_CLASS)}>
        {groups.map((group) => (
          <CategoryColumn key={group.title} group={group} linksLayout={linksLayout} />
        ))}
        {featured ? <FeaturedPanel featured={featured} /> : null}
      </div>
    </div>
  );
}