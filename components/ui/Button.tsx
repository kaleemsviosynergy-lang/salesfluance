"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/** Visual style of the button. */
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "text"
  | "ghost"
  | "destructive";

/** Size scale of the button. */
export type ButtonSize = "sm" | "md" | "lg";

/** Props shared by both the native-button and link renderings of Button. */
interface ButtonBaseProps {
  /** Visual style. Defaults to "primary". */
  variant?: ButtonVariant;
  /** Size scale. Defaults to "md". */
  size?: ButtonSize;
  /** Shows a spinner and disables interaction when true. */
  isLoading?: boolean;
  /** Icon rendered before the label. Hidden while loading. */
  leftIcon?: React.ReactNode;
  /** Icon rendered after the label. Hidden while loading. */
  rightIcon?: React.ReactNode;
  /** Stretches the button to fill its container's width. */
  fullWidth?: boolean;
  /** Additional class names merged onto the root element. */
  className?: string;
  /** Button label / content. */
  children?: React.ReactNode;
}

/** Props when Button renders as a native <button> element. */
type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

/** Props when Button renders as a Next.js <Link> anchor. */
type ButtonAsLink = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    /** Destination URL. Presence of `href` switches Button into link mode. */
    href: string;
  };

/** Union prop type: pass `href` to render a link, omit it for a native button. */
export type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium " +
  "transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-offset-2 focus-visible:ring-indigo-500 disabled:pointer-events-none " +
  "disabled:opacity-50 select-none";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-indigo-600 text-white hover:bg-indigo-500 active:bg-indigo-700",
  secondary:
    "bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-950",
  text:
    "bg-transparent text-slate-900 hover:bg-slate-50 active:bg-slate-100",
  outline:
    "border border-slate-300 bg-transparent text-slate-900 hover:bg-slate-50 active:bg-slate-100",
  ghost:
    "bg-transparent text-slate-900 hover:bg-slate-100 active:bg-slate-200",
  destructive:
    "bg-red-600 text-white hover:bg-red-500 active:bg-red-700",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

const iconOnlySpacing: Record<ButtonSize, string> = {
  sm: "h-4 w-4",
  md: "h-4 w-4",
  lg: "h-5 w-5",
};

/** Small inline spinner used for the loading state. */
function Spinner({ size }: { size: ButtonSize }): React.JSX.Element {
  return (
    <svg
      className={cn("animate-spin", iconOnlySpacing[size])}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  );
}

/**
 * Button
 * Universal action element for the design system. Renders as a native
 * `<button>` by default, or as a Next.js `<Link>` when `href` is provided.
 * Supports loading state, left/right icons, variants, and sizes, and is
 * safe to reuse across Hero, Service Pages, Marketing, Contact, About,
 * and Dashboard surfaces.
 *
 * @example
 * <Button variant="primary" size="lg" leftIcon={<Icon />}>Get Started</Button>
 * <Button href="/contact" variant="outline">Contact Us</Button>
 */
export default function Button(props: ButtonProps): React.JSX.Element {
  const {
    variant = "primary",
    size = "md",
    isLoading = false,
    leftIcon,
    rightIcon,
    fullWidth = false,
    className,
    children,
    href,
    ...rest
  } = props;

  const classes = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && "w-full",
    className
  );

  const content = (
    <>
      {isLoading ? (
        <Spinner size={size} />
      ) : (
        leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>
      )}
      {children && <span className={cn(isLoading && "opacity-80")}>{children}</span>}
      {!isLoading && rightIcon && (
        <span className="inline-flex shrink-0">{rightIcon}</span>
      )}
    </>
  );

  if (href !== undefined) {
    const linkProps = rest as Omit<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      keyof ButtonBaseProps
    >;

    return (
      <Link
        href={href}
        className={classes}
        aria-disabled={isLoading || undefined}
        {...linkProps}
      >
        {content}
      </Link>
    );
  }

  const buttonProps = rest as Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    keyof ButtonBaseProps
  >;

  return (
    <button
      type={buttonProps.type ?? "button"}
      className={classes}
      disabled={isLoading || buttonProps.disabled}
      aria-busy={isLoading || undefined}
      {...buttonProps}
    >
      {content}
    </button>
  );
}