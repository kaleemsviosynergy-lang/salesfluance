import * as React from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";
import CTAButton from "./CTAButton";
import type { NavigationItem } from "./Navigation";
import { cn } from "@/lib/utils";

export interface MobileMenuProps {
  /** Top-level navigation items — the same NavigationItem model used by Navigation.tsx. */
  navigation: NavigationItem[];
  /** Called after a navigation link is activated (e.g. so a parent drawer can close). */
  onNavigate?: () => void;
  /** Additional class names merged onto the root element. */
  className?: string;
}

/** Small chevron indicating an expandable `<details>` section, rotates on open via `group-open:`. */
function ChevronDownIcon(): React.JSX.Element {
  return (
    <svg
      className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"
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

/**
 * MobileMenu
 *
 * Purpose:
 * Renders the content of the mobile navigation — brand mark, top-level
 * links, MegaMenu content as expandable sections, and the primary CTA —
 * and nothing else. It owns no open/close state, no animation, no
 * scroll locking, and no overlay; those all belong to MobileDrawer,
 * which is the only component that mounts MobileMenu. This split means
 * navigation rendering exists in exactly one place regardless of how
 * many containers (drawer today, potentially others later) present it.
 *
 * Props:
 * - `navigation` — the same `NavigationItem[]` model consumed by
 *                  Navigation.tsx (desktop), so both surfaces stay in
 *                  sync from one data source.
 * - `onNavigate` — optional callback fired when a plain navigation link
 *                  is activated, so a container (MobileDrawer) can close
 *                  itself in response.
 * - `className`  — additional classes merged onto the root element.
 *
 * Layout:
 * - Top: Logo.
 * - Middle: navigation links. Items carrying a `megaMenu` payload render
 *   as a native `<details>`/`<summary>` disclosure — each section
 *   expands independently, with zero custom JavaScript or keyboard
 *   handling, per the native-semantics requirement.
 * - Bottom: primary "Book Discovery Call" CTA.
 *
 * Architecture decisions:
 * - `<details>`/`<summary>` is used instead of a controlled
 *   open/close state specifically because native disclosure elements
 *   are keyboard- and screen-reader-accessible out of the box (Enter/
 *   Space toggles, exposed as a button semantically) — no
 *   `useState`, `aria-expanded` wiring, or key handlers needed here.
 * - `onNavigate` is wired to NavLink's existing `onClick` prop only.
 *   CTAButton's prop surface (`href`, `children`, `variant`, `external`,
 *   `className`) does not include `onClick`, and this component does
 *   not modify existing files to add one — so `onNavigate` does not
 *   currently fire when a CTAButton (including the featured MegaMenu
 *   CTA or the bottom primary CTA) is activated. This is a known,
 *   deliberate limitation rather than an oversight.
 * - The bottom CTA's destination is not part of `MobileMenuProps` (the
 *   prop contract is fixed to `navigation`, `onNavigate`, `className`),
 *   so its `href` is fixed chrome rather than data-driven content, same
 *   as its label. If this needs to become configurable, that requires a
 *   prop-contract change in a future sprint.
 * - No `React.memo` / `useMemo` / `useEffect`: this component performs a
 *   direct, non-expensive render of its props with no side effects.
 */
export default function MobileMenu({
  navigation,
  onNavigate,
  className,
}: MobileMenuProps): React.JSX.Element {
  return (
    <div className={cn("flex h-full flex-col", className)}>
      <div className="border-b border-slate-200 px-6 py-5">
        <Logo />
      </div>

      <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-6 py-6">
        <ul className="flex flex-col gap-1">
          {navigation.map((item) => (
            <li key={item.id}>
              {item.megaMenu ? (
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between rounded-md px-2 py-3 text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-blue-600">
                    {item.label}
                    <ChevronDownIcon />
                  </summary>

                  <div className="flex flex-col gap-6 py-3 pl-4">
                    {item.megaMenu.groups.map((group) => (
                      <div key={group.id}>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          {group.title}
                        </p>
                        <ul className="mt-2 flex flex-col gap-2">
                          {group.links.map((link) => (
                            <li key={link.id}>
                              <NavLink
                                href={link.href}
                                external={link.external}
                                icon={link.icon}
                                onClick={onNavigate}
                                className="block py-1"
                              >
                                {link.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {item.megaMenu.featured && (
                      <div className="rounded-lg bg-slate-50 p-4">
                        <p className="text-sm font-semibold text-slate-900">
                          {item.megaMenu.featured.label}
                        </p>
                        {item.megaMenu.featured.description && (
                          <p className="mt-1 text-xs text-slate-500">
                            {item.megaMenu.featured.description}
                          </p>
                        )}
                        <CTAButton
                          href={item.megaMenu.featured.href}
                          external={item.megaMenu.featured.external}
                          className="mt-3 w-fit"
                        >
                          {item.megaMenu.featured.ctaLabel}
                        </CTAButton>
                      </div>
                    )}
                  </div>
                </details>
              ) : (
                <NavLink
                  href={item.href}
                  active={item.active}
                  external={item.external}
                  onClick={onNavigate}
                  className="block rounded-md px-2 py-3"
                >
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-slate-200 px-6 py-5">
        <CTAButton href="/discovery-call" className="w-full justify-center">
          Book Discovery Call
        </CTAButton>
      </div>
    </div>
  );
}