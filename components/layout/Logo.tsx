import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Size scale for the Logo component. Drives the wordmark's text size via
 * the `sizeStyles` lookup below — never branch on this with if/else or
 * switch; extend the lookup instead.
 */
export type LogoSize = "sm" | "md" | "lg";

export interface LogoProps {
  /** Additional class names merged onto the root link element. */
  className?: string;
  /** Wordmark size. Defaults to "md". */
  size?: LogoSize;
  /** Renders the "B2B Growth & Revenue Intelligence" tagline below the wordmark when true. Defaults to false. */
  showTagline?: boolean;
}

/**
 * Wordmark text size per LogoSize. Object lookup only, per project
 * convention — no switch statement, no if/else chain.
 */
const sizeStyles: Record<LogoSize, string> = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-3xl",
};

/**
 * Logo
 *
 * Purpose:
 * Renders the SalesFluance brand wordmark as a single link to the
 * homepage. This is a self-contained brand component — it has no
 * awareness of navigation, menus, scroll position, or sticky behavior,
 * and must remain independent of the Navbar (not yet implemented) so it
 * can be reused anywhere the brand mark is needed (Navbar, Footer, auth
 * screens, a future Dashboard shell, etc.).
 *
 * Props:
 * - `className`  — optional extra classes merged onto the root `<Link>`.
 * - `size`       — "sm" | "md" | "lg", resolved through `sizeStyles`.
 *                   Defaults to "md".
 * - `showTagline`— renders the small muted tagline beneath the wordmark
 *                   when true. Defaults to false.
 *
 * Architecture decisions:
 * - The whole wordmark is one Next.js `<Link href="/">` so the entire
 *   logo — not just part of it — is the click target, per the
 *   accessibility requirement. `aria-label="SalesFluance Home"` is set
 *   on that same link since it is the component's only interactive
 *   element.
 * - "Sales" and "Fluance" are two `<span>`s with distinct Tailwind text
 *   colors (dark navy / primary blue) rather than a single string, since
 *   the two-tone treatment is part of the brand mark itself, not
 *   incidental styling.
 * - Sizing is resolved via a `Record<LogoSize, string>` lookup rather
 *   than a conditional chain, per project convention — this also keeps
 *   the component trivially extensible if a new size is ever added.
 * - Hover opacity and the 200ms transition are expressed purely as
 *   Tailwind utility classes (`hover:opacity-80 transition-opacity
 *   duration-200`) — no inline styles, no hardcoded color values outside
 *   Tailwind's palette.
 * - No `React.memo`: this component takes only primitive props and
 *   involves no expensive computation, so memoization would add
 *   complexity without a measurable benefit.
 * - No business logic of any kind lives here — it renders exactly what
 *   its props describe and nothing else.
 */
export default function Logo({
  className,
  size = "md",
  showTagline = false,
}: LogoProps): React.JSX.Element {
  return (
    <Link
      href="/"
      aria-label="SalesFluance Home"
      className={cn(
        "inline-flex flex-col items-start opacity-100 transition-opacity duration-200 hover:opacity-80",
        className
      )}
    >
      <span className={cn("font-bold leading-none tracking-tight", sizeStyles[size])}>
        <span className="text-slate-900">Sales</span>
        <span className="text-blue-600">Fluance</span>
      </span>
      {showTagline ? (
  <span className="mt-1 text-xs font-medium text-slate-500">
    B2B Growth &amp; Revenue Intelligence
  </span>
) : null}
    </Link>
  );
}