"use client";

import * as React from "react";
import ScrollHeader from "./ScrollHeader";
import Logo from "./Logo";
import Navigation from "./Navigation";
import CTAButton from "./CTAButton";
import MobileDrawer from "./MobileDrawer";
import Container from "@/components/ui/Container";
import { mainNavigation, primaryCta } from "@/app/data/navigation";
import { cn } from "@/lib/utils";

export interface NavbarProps {
  /** Additional class names merged onto the root ScrollHeader element. */
  className?: string;
}

/** Three-line hamburger icon toggling the mobile drawer. */
function HamburgerIcon(): React.JSX.Element {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function addIdsToNavigationItems(items: readonly any[], parentId = "nav"): any[] {
  return items.map((item, index) => {
    const id = item.id ?? item.href ?? `${parentId}-${index}`;

    return {
      ...item,
      id,
      children: item.children
        ? addIdsToNavigationItems(item.children, id)
        : undefined,
    };
  });
}

/**
 * Navbar
 *
 * Purpose:
 * The global site header. It composes the existing layout primitives —
 * ScrollHeader, Logo, Navigation, CTAButton, and MobileDrawer — into the
 * final navigation bar. It renders no navigation links, menus, or CTA
 * markup of its own: Navigation renders the desktop link set (and, via
 * MegaMenu, its dropdowns), MobileMenu (via MobileDrawer) renders the
 * mobile link set, and ScrollHeader owns the scroll-driven visual state.
 * Navbar's own job is purely composition and layout.
 *
 * Props:
 * - `className` — additional classes merged onto the root ScrollHeader.
 *
 * Data:
 * - `navigationItems` and `primaryCta` are imported from
 *   `app/data/navigation.ts` — the single source of truth for the
 *   site's nav structure and primary call-to-action, per the
 *   content-driven architecture used throughout this project. No link,
 *   label, or href is hardcoded in this file.
 *
 * State:
 * - Navbar owns exactly one piece of state: `isDrawerOpen`, a boolean
 *   controlling the mobile drawer. Every other stateful concern already
 *   belongs to another component (scroll state → ScrollHeader; drawer
 *   animation, escape key, scroll lock → MobileDrawer) and is not
 *   duplicated here.
 *
 * Architecture decisions:
 * - Desktop (`lg:` and above): `Navigation` is rendered directly — it
 *   already renders the Logo internally, so Navbar does not render a
 *   second desktop Logo. `CTAButton` is rendered by Navbar itself
 *   (rather than via Navigation's own optional `cta` prop) since the
 *   spec calls for Logo, Navigation, and CTAButton as three
 *   independently composed elements at this layer.
 * - Mobile (below `lg`): Navigation is hidden by its own internal
 *   responsive classes, so Navbar renders a standalone Logo plus a
 *   hamburger button that opens `MobileDrawer`. `MobileDrawer` renders
 *   its own `MobileMenu` internally — Navbar never touches
 *   `MobileMenu` directly, keeping mobile navigation rendering in
 *   exactly one place.
 * - Layout uses the existing `Container` component (`size="xl"` → the
 *   required `max-w-7xl`) rather than re-implementing max-width/gutter
 *   logic, with a fixed `h-[72px]` row and `justify-between` alignment
 *   applied via `className`.
 * - `sticky top-0 z-40` is applied to `ScrollHeader` via its
 *   `className` prop — ScrollHeader itself has no opinion on
 *   positioning, only on scroll-triggered appearance, per its own
 *   documented scope.
 * - The hamburger button carries `aria-label="Toggle navigation"` and a
 *   live `aria-expanded={isDrawerOpen}`, since this button is the one
 *   element in the composition that actually controls the drawer's
 *   open state. Overlay-click-to-close and Escape-to-close are already
 *   implemented inside `MobileDrawer` and are not duplicated here.
 * - No `React.memo` / extra hooks: the single `useState` for
 *   `isDrawerOpen` is the minimum state this component needs.
 */
export default function Navbar({ className }: NavbarProps): React.JSX.Element {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  return (
    <>
      <ScrollHeader className={cn("sticky top-0 z-40", className)}>
        <Container size="xl" className="flex h-[72px] items-center justify-between">
          <div className="lg:hidden">
            <Logo />
          </div>

          <Navigation items={mainNavigation} className="flex-1" />

          <div className="hidden lg:flex">
            <CTAButton href={primaryCta.href}>
              {primaryCta.label}
            </CTAButton>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isDrawerOpen}
            onClick={() => setIsDrawerOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 transition-colors duration-200 hover:text-blue-600 lg:hidden"
          >
            <HamburgerIcon />
          </button>
        </Container>
      </ScrollHeader>

      <MobileDrawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        navigation={mainNavigation}
      />
    </>
  );
}