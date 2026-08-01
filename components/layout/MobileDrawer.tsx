"use client";

import * as React from "react";
import MobileMenu from "./MobileMenu";
import type { NavigationItem } from "./Navigation";
import { cn } from "@/lib/utils";

export interface MobileDrawerProps {
  /** Whether the drawer is currently open. Rendering is entirely driven by this prop. */
  open: boolean;
  /** Called to request the drawer be closed — overlay click, close button, or Escape key. */
  onClose: () => void;
  /** Top-level navigation items, forwarded to MobileMenu unchanged. */
  navigation: NavigationItem[];
  /** Additional class names merged onto the drawer panel. */
  className?: string;
}

/** Small "X" close icon, purely decorative — the accessible label lives on the button itself. */
function CloseIcon(): React.JSX.Element {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

/**
 * MobileDrawer
 *
 * Purpose:
 * The slide-in container for mobile navigation. It owns every concern
 * MobileMenu deliberately does not: whether anything renders at all,
 * the overlay, the open/close slide animation, body scroll locking, the
 * Escape-key handler, and the close button. It renders MobileMenu once,
 * inside itself, rather than rendering any navigation markup directly —
 * navigation rendering exists in exactly one place (MobileMenu).
 *
 * Props:
 * - `open`       — controls whether the drawer renders at all. When
 *                  false, this component renders nothing.
 * - `onClose`    — invoked when the user requests closing: overlay
 *                  click, close button, or Escape key.
 * - `navigation` — forwarded directly to MobileMenu; MobileDrawer does
 *                  not read or transform this data.
 * - `className`  — additional classes merged onto the drawer panel.
 *
 * Architecture decisions:
 * - Rendering is a direct function of `open` — there is no internal
 *   "is the drawer open" state. The only internal state
 *   (`isSlidIn`, below) exists solely to sequence the slide-in
 *   transition on mount and is not a duplicate of `open`.
 * - Escape key and body scroll lock are each implemented as a small,
 *   single-purpose `useEffect` scoped to `open`, so both behaviors
 *   register only while the drawer is actually open and are guaranteed
 *   to clean up — restoring `document.body.style.overflow` and removing
 *   the `keydown` listener — whenever `open` becomes false or the
 *   component unmounts, satisfying "restore on unmount" as a natural
 *   consequence of the effect's cleanup function.
 * - Animation uses Tailwind's `translate-x-full` → `translate-x-0`
 *   transition only, no animation library. Because the drawer renders
 *   nothing at all when `open` is false (per spec), there is no exit
 *   transition — the panel disappears immediately on close rather than
 *   sliding out. To still get a slide-*in* transition on open, a single
 *   `isSlidIn` boolean flips from `false` to `true` one animation frame
 *   after mount, giving Tailwind's `transition-transform` something to
 *   animate from. This is the minimum state needed to satisfy the
 *   stated animation requirement without introducing a general
 *   open/close state machine.
 * - The overlay and panel are both `fixed`, so their nesting inside a
 *   shared wrapper is purely for z-index grouping, not for positioning.
 * - No `React.memo` / `useMemo`: no expensive computation occurs here.
 */
export default function MobileDrawer({
  open,
  onClose,
  navigation,
  className,
}: MobileDrawerProps): React.JSX.Element {
  const [isSlidIn, setIsSlidIn] = React.useState(false);

  // Sequence the slide-in transition: start translated off-screen, then
  // flip to the visible position one frame after mount so the CSS
  // transition has a "from" state to animate from.
  React.useEffect(() => {
    if (!open) {
      setIsSlidIn(false);
      return;
    }
    const frame = requestAnimationFrame(() => setIsSlidIn(true));
    return () => cancelAnimationFrame(frame);
  }, [open]);

  // Close on Escape while open; listener is removed whenever `open`
  // becomes false or the component unmounts.
  React.useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  // Lock body scroll while open; original inline overflow value is
  // restored whenever `open` becomes false or the component unmounts.
  React.useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  if (!open) {
    return <></>;
  }

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="fixed inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          "fixed inset-y-0 right-0 flex h-full w-full max-w-sm flex-col overflow-y-auto bg-white shadow-xl transition-transform duration-300 ease-in-out",
          isSlidIn ? "translate-x-0" : "translate-x-full",
          className
        )}
      >
        <div className="flex justify-end px-4 pt-4">
          <button
            type="button"
            aria-label="Close navigation"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-500 transition-colors duration-200 hover:text-blue-600"
          >
            <CloseIcon />
          </button>
        </div>

        <MobileMenu navigation={navigation} onNavigate={onClose} className="flex-1" />
      </div>
    </div>
  );
}