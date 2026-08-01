import * as React from "react";
import NavLink from "./NavLink";
import CTAButton from "./CTAButton";
import { cn } from "@/lib/utils";
import type {
  NavigationGroup,
  NavigationFeatured,
} from "@/app/data/navigation";



export interface MegaMenuProps {
  /** Titled groups of links to render, left to right. */
  groups: NavigationGroup[];
  /** Optional highlighted CTA panel rendered alongside the groups. */
  featured?: NavigationFeatured;
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
            <div key={group.title}>
              <p className="text-sm font-semibold text-slate-900">{group.title}</p>
              
              <ul className="mt-4 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.href}>
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
            <p className="text-sm font-semibold text-slate-900">{featured.title}</p>
            {featured.description && (
              <p className="text-sm text-slate-500">{featured.description}</p>
            )}
            <CTAButton href={featured.cta.href} external={featured.cta.external} className="mt-2 w-fit">
              {featured.cta.label}
            </CTAButton>
          </div>
        )}
      </div>
    </div>
  );
}