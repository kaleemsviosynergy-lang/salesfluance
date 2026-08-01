"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ScrollHeaderProps {
  /** Header content — Navbar composes Logo, Navigation, CTAButton, etc. inside this. */
  children: React.ReactNode;
  /** Additional class names merged onto the root `<header>` element. */
  className?: string;
  /** Scroll distance in pixels after which the "scrolled" visual state applies. Defaults to 20. */
  threshold?: number;
}

/**
 * ScrollHeader
 *
 * Purpose:
 * Owns exactly one concern: tracking whether the page has been scrolled
 * past `threshold`, and applying the corresponding visual treatment to
 * the `<header>` it renders. It has no knowledge of navigation, the
 * logo, CTAs, menus, or the mobile drawer — it only wraps whatever
 * `children` it is given.
 *
 * Props:
 * - `children`  — the header's content, rendered as-is inside `<header>`.
 * - `className` — additional classes merged onto the root element.
 * - `threshold` — scroll distance in pixels that triggers the "scrolled"
 *                 state. Defaults to 20.
 *
 * Behavior:
 * - Before `threshold`: transparent background, no border, no shadow.
 * - After `threshold`: white background, backdrop blur, a bottom
 *   border, and a small shadow — transitioning smoothly between the two
 *   states.
 *
 * Architecture decisions:
 * - A single `useEffect` registers one native `scroll` listener (passive,
 *   for scroll-performance) and tears it down on unmount — no
 *   throttling library, matching the stated implementation constraint.
 *   The listener also runs once synchronously on mount so the header
 *   reflects an already-scrolled page (e.g. after a client-side
 *   navigation or a restored scroll position) instead of assuming the
 *   page starts at the top.
 * - Before the scrolled state, the border is `border-transparent`
 *   rather than simply omitted, so the header's box height does not
 *   shift by the border's width when the state changes.
 * - No `React.memo` / extra hooks: one `useState` boolean and one
 *   `useEffect` are the minimum needed to derive and react to scroll
 *   position; nothing here is expensive enough to warrant memoization.
 */
export default function ScrollHeader({
  children,
  className,
  threshold = 20,
}: ScrollHeaderProps): React.JSX.Element {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return (
    <header
      className={cn(
        "border-b transition-all duration-200",
        isScrolled
          ? "border-slate-200 bg-white/80 shadow-sm backdrop-blur-md"
          : "border-transparent bg-transparent shadow-none",
        className
      )}
    >
      {children}
    </header>
  );
}