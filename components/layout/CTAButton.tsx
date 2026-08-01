import * as React from "react";
import Button, { type ButtonVariant } from "@/components/ui/Button";

export interface CTAButtonProps {
  /** Destination URL for the CTA. */
  href: string;
  /** CTA label / content. */
  children: React.ReactNode;
  /** Visual style, passed straight through to Button. Defaults to "primary". */
  variant?: ButtonVariant;
  /** Opens the destination in a new tab with safe `rel` attributes when true. Defaults to false. */
  external?: boolean;
  /** Additional class names merged onto the rendered Button. */
  className?: string;
}

/**
 * CTAButton
 *
 * Purpose:
 * Standardizes how a call-to-action link is rendered everywhere one
 * appears — Navbar, Hero, Footer — so each caller only supplies content
 * (`href`, `children`, `variant`, `external`) instead of re-deriving
 * `target`/`rel` handling for external links itself. It is a thin,
 * fixed-mode wrapper around the existing Button component's link mode.
 *
 * Props:
 * - `href`      — required destination URL; CTAButton always renders
 *                 Button in link mode.
 * - `children`  — the CTA's label content.
 * - `variant`   — forwarded directly to Button's existing `ButtonVariant`
 *                 union; no new variant vocabulary is introduced here.
 * - `external`  — when true, adds `target="_blank"` and
 *                 `rel="noopener noreferrer"`, the same convention used
 *                 for external CTAs elsewhere in the codebase (see
 *                 Hero.tsx's `renderCta`).
 * - `className` — merged onto the underlying Button via its own
 *                 `className` prop.
 *
 * Architecture decisions:
 * - CTAButton does not reimplement any styling, sizing, loading, or icon
 *   behavior — all of that already exists on Button. It exists purely to
 *   fix Button into "link mode with standardized external handling" so
 *   call sites stay uniform across the layout system.
 * - No business logic: it does not know what a CTA is *for*, only how to
 *   render one consistently.
 */
export default function CTAButton({
  href,
  children,
  variant = "primary",
  external = false,
  className,
}: CTAButtonProps): React.JSX.Element {
  return (
    <Button
      href={href}
      variant={variant}
      className={className}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {children}
    </Button>
  );
}