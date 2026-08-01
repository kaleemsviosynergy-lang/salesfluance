import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface NavLinkProps {
  /** Destination URL — internal path or absolute external URL. */
  href: string;
  /** Link label / content. */
  children: React.ReactNode;
  /** Additional class names merged onto the root element. */
  className?: string;
  /** Marks this link as representing the current page/section. Defaults to false. */
  active?: boolean;
  /** Renders as a plain `<a target="_blank">` instead of a Next.js Link. Defaults to false. */
  external?: boolean;
  /** Optional icon rendered before the label. */
  icon?: React.ReactNode;
  /** Optional click handler, forwarded to the underlying anchor element. */
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

/** Classes shared by every NavLink regardless of state or rendering mode. */
const baseStyles = "inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200";

/**
 * Color/weight treatment per active state, resolved via lookup rather than
 * a conditional chain — extend this object, never branch on `active`
 * inline.
 */
const activeStyles: Record<"true" | "false", string> = {
  true: "text-blue-600 font-semibold",
  false: "text-slate-700 hover:text-blue-600",
};

/**
 * NavLink
 *
 * Purpose:
 * Renders exactly one navigation link — the smallest, most reused
 * primitive in the navigation system. It is consumed by Desktop
 * Navigation, Mobile Navigation, the Mega Menu, Footer Navigation, and a
 * future Dashboard Navigation, so it must stay generic enough for all of
 * them and specific to none of them.
 *
 * Props:
 * - `href`      — internal path or external URL for this link.
 * - `children`  — the link's label content.
 * - `className` — optional extra classes merged onto the root element.
 * - `active`    — marks the link as representing the current
 *                 page/section; resolves visual state via `activeStyles`.
 * - `external`  — when true, renders a plain `<a>` with
 *                 `target="_blank"` and `rel="noopener noreferrer"`
 *                 instead of a Next.js `Link`.
 * - `icon`      — optional leading icon, laid out via `flex items-center
 *                 gap-2` alongside the label.
 * - `onClick`   — forwarded directly to the underlying anchor element.
 *
 * Architecture decisions:
 * - This component has zero knowledge of menus, dropdowns, mega menus,
 *   mobile state, scroll position, or stickiness — it renders one link
 *   and nothing more. Any of those concerns belong to the parent
 *   navigation component composing many `NavLink`s together.
 * - Internal vs. external rendering is a routing/anchor-tag concern, not
 *   business logic: `href`-based dispatch to `next/link` vs. a raw `<a>`
 *   is the standard, framework-prescribed way to distinguish the two.
 * - Active-state styling is resolved through `activeStyles`, a
 *   `Record<"true" | "false", string>` lookup, per project convention —
 *   no switch statement, no if/else chain, no inline conditional class
 *   concatenation beyond selecting the lookup key.
 * - No inline styles and no colors outside the Tailwind palette are used
 *   anywhere in this component.
 * - No `React.memo`, `useMemo`, or `useEffect`: this component has no
 *   expensive computation and no side effects to manage — it is a pure
 *   render of its props.
 * - Native focus styles are left untouched (no `outline-none` /
 *   `focus:outline-none`) so keyboard focus indication continues to work
 *   exactly as the browser and Tailwind's defaults provide.
 */
export default function NavLink({
  href,
  children,
  className,
  active = false,
  external = false,
  icon,
  onClick,
}: NavLinkProps): React.JSX.Element {
  const stateStyles = {
  active: "...",
  inactive: "...",
};

const classes = cn(
  baseStyles,
  active ? stateStyles.active : stateStyles.inactive,
  className
);

  const content = (
    <>
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      {children}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {content}
    </Link>
  );
}