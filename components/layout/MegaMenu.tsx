import * as React from "react";
import NavLink from "./NavLink";
import CTAButton from "./CTAButton";
import { cn } from "@/lib/utils";

/** A single link within a MegaMenu group. */
export interface MegaMenuLink {
  /** Stable identifier, e.g. for React keys. */
  id: string;
  /** Link label. */
  label: string;
  /** Optional one-line supporting copy shown beneath the label. */
  description?: string;
  /** Destination URL. */
  href: string;
  /** Opens the destination in a new tab when true. Defaults to false. */
  external?: boolean;
  /** Optional leading icon. */
  icon?: React.ReactNode;
}

/** A titled group of links within the MegaMenu. */
export interface MegaMenuGroup {
  /** Stable identifier, e.g. for React keys. */
  id: string;
  /** Group heading. */
  title: string;
  /** Optional supporting copy shown beneath the group heading. */
  description?: string;
  /** Links belonging to this group. */
  links: MegaMenuLink[];
}

/** Optional highlighted call-to-action panel shown alongside the groups. */
export interface MegaMenuFeatured {
  /** Heading for the featured panel. */
  label: string;
  /** Optional supporting copy. */
  description?: string;
  /** CTA destination URL. */
  href: string;
  /** Opens the CTA destination in a new tab when true. Defaults to false. */
  external?: boolean;
  /** Label shown on the CTA button itself. */
  ctaLabel: string;
}

export interface MegaMenuProps {
  /** Titled groups of links to render, left to right. */
  groups: MegaMenuGroup[];
  /** Optional highlighted CTA panel rendered alongside the groups. */
  featured?: MegaMenuFeatured;
  /** Additional class names merged onto the root panel element. */
  className?: string;
}

/**
 * MegaMenu
 *
 * Purpose:
 * A generic, content-driven dropdown panel. It renders whatever groups,
 * links, and optional featured CTA it is given via props — it has no
 * knowledge of any specific service, product, or navigation structure,
 * and no knowledge of how or when it is shown (that is the triggering
 * component's responsibility; see Navigation.tsx).
 *
 * Props:
 * - `groups`   — ordered list of `{ title, description?, links[] }`
 *                sections to render.
 * - `featured` — optional highlighted CTA panel rendered alongside the
 *                groups.
 * - `className`— additional classes merged onto the root panel.
 *
 * Architecture decisions:
 * - Pure presentation: MegaMenu contains no routing logic and no
 *   business logic. Internal vs. external link rendering is delegated
 *   entirely to the existing NavLink and CTAButton components.
 * - Responsive layout: groups render in a CSS grid that collapses to a
 *   single column on small viewports and expands to multiple columns at
 *   larger breakpoints; the optional featured panel stacks below the
 *   groups on narrow viewports and sits beside them at `lg` and above.
 * - Link descriptions are rendered as a separate line beneath each
 *   NavLink rather than inside it, since NavLink's API intentionally has
 *   no `description` prop — MegaMenu composes NavLink rather than
 *   extending it.
 * - No `React.memo` / `useMemo` / `useEffect`: this component performs a
 *   direct, non-expensive render of its props with no side effects.
 */
export default function MegaMenu({ groups, featured, className }: MegaMenuProps): React.JSX.Element {
  return (
    <div
      className={cn(
        "w-screen max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-xl",
        className
      )}
    >
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <div key={group.id}>
              <p className="text-sm font-semibold text-slate-900">{group.title}</p>
              {group.description && (
                <p className="mt-1 text-sm text-slate-500">{group.description}</p>
              )}
              <ul className="mt-4 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.id}>
                    <NavLink href={link.href} external={link.external} icon={link.icon} className="block">
                      {link.label}
                    </NavLink>
                    {link.description && (
                      <p className="mt-0.5 pl-6 text-xs text-slate-500">{link.description}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {featured && (
          <div className="flex w-full flex-col gap-3 rounded-xl bg-slate-50 p-6 lg:w-72 lg:shrink-0">
            <p className="text-sm font-semibold text-slate-900">{featured.label}</p>
            {featured.description && (
              <p className="text-sm text-slate-500">{featured.description}</p>
            )}
            <CTAButton href={featured.href} external={featured.external} className="mt-2 w-fit">
              {featured.ctaLabel}
            </CTAButton>
          </div>
        )}
      </div>
    </div>
  );
}