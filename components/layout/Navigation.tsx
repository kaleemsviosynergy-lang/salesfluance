import * as React from "react";
import Logo from "@/components/brand/Logo";
import NavLink from "./NavLink";
import CTAButton from "./CTAButton";
import MegaMenu from "@/components/navigation/MegaMenu";
import IndustriesMegaMenu from "@/components/navigation/IndustriesMegaMenu"
import { cn } from "@/lib/utils";
import type {
  NavigationItem,
  PrimaryCTA,
} from "@/app/data/navigation";


export interface NavigationProps {
  items: NavigationItem[];
  cta?: PrimaryCTA;
  className?: string;
}

/** Small chevron indicating a MegaMenu trigger, purely decorative. */
function ChevronDownIcon(): React.JSX.Element {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

/** Base treatment for a MegaMenu trigger, matching NavLink's default/hover styling. */
const triggerStyles =
  "inline-flex items-center gap-1 text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-blue-600 group-focus-within:text-blue-600";

/**
 * MegaMenu panel visibility, expressed entirely as Tailwind utility
 * classes driven by the `group-hover` / `group-focus-within` pseudo
 * classes on the parent `<li>`. No JavaScript state is involved.
 */
const megaMenuVisibility =
  `
absolute
left-1/2
top-full
z-50
mt-4
-wtranslate-x-1/2
opacity-0
invisible
pointer-events-none
transition-all
duration-200

group-hover:visible
group-hover:opacity-100
group-hover:pointer-events-auto

group-focus-within:visible
group-focus-within:opacity-100
group-focus-within:pointer-events-auto
`;

/**
 * Navigation
 *
 * Purpose:
 * Renders the desktop-only global navigation bar — brand mark, top-level
 * links (some of which may open a MegaMenu), and a trailing
 * call-to-action — entirely from the data passed in via `items` and
 * `cta`. It contains no hardcoded links or copy.
 *
 * Props:
 * - `items`     — ordered top-level navigation entries; each is either a
 *                 direct link (`href`) or a MegaMenu trigger
 *                 (`megaMenu`), modeled as a discriminated union so a
 *                 given item cannot accidentally carry both.
 * - `cta`       — optional trailing call-to-action, rendered via
 *                 CTAButton.
 * - `className` — additional classes merged onto the root `<nav>`.
 *
 * Architecture decisions:
 * - Desktop only: the root element is hidden below the `lg` breakpoint
 *   (`hidden lg:flex`). Mobile navigation is an explicitly separate,
 *   not-yet-built component/concern.
 * - No dropdown state: MegaMenu visibility is driven purely by CSS
 *   (`group-hover` / `group-focus-within`) rather than a `useState`
 *   toggle, per this sprint's constraints. `group-focus-within` keeps
 *   the panel open via keyboard when focus is anywhere inside the
 *   trigger or the panel itself, preserving keyboard operability without
 *   introducing JS state. The one accessibility trade-off of this
 *   approach: `aria-expanded` cannot be kept in sync without state, so
 *   the trigger exposes `aria-haspopup="true"` only. If a fully
 *   state-synced `aria-expanded` is required, that belongs in a future
 *   sprint that explicitly scopes dropdown state.
 * - No sticky logic, no mobile logic, no business logic: this component
 *   only composes existing primitives (Logo, NavLink, CTAButton,
 *   MegaMenu) around the data it is given.
 * - No `React.memo` / `useMemo` / `useEffect`: rendering is a direct,
 *   non-expensive function of props.
 */
export default function Navigation({ items, cta, className }: NavigationProps): React.JSX.Element {
  return (
    <nav aria-label="Primary" className={cn("hidden items-center justify-between lg:flex", className)}>
      <Logo />

      <ul className="flex items-center gap-8">
        {items.map((item) => (
          <li key={item.href ?? item.label} className="group relative">
            {item.megaMenu ? (
              <>
                <button type="button" className={triggerStyles} aria-haspopup="true">
                  {item.label}
                  <ChevronDownIcon />
                </button>
                <div className={megaMenuVisibility}>
  {item.label === "Industries" ? (
    <IndustriesMegaMenu />
  ) : (
    <MegaMenu
      groups={item.megaMenu.groups}
      featured={item.megaMenu.featured}
    />
  )}
</div>
              </>
            ) : (
              <NavLink href={item.href}>
  {item.label}
</NavLink>
            )}
          </li>
        ))}
      </ul>

      {cta && (
        <CTAButton href={cta.href}>
  {cta.label}
</CTAButton>
      )}
    </nav>
  );
}