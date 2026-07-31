import * as React from "react";
import { cn } from "@/lib/utils";

/** Visual style of the badge. */
export type BadgeVariant =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "outline";

/** Size scale of the badge. */
export type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "children"> {
  /** Visual style. Defaults to "default". */
  variant?: BadgeVariant;
  /** Size scale. Defaults to "md". */
  size?: BadgeSize;
  /** Optional icon or dot rendered before the label. */
  leftIcon?: React.ReactNode;
  /** Badge label / content. */
  children?: React.ReactNode;
  /** Additional class names merged onto the root element. */
  className?: string;
}

const baseStyles =
  "inline-flex items-center gap-1.5 rounded-full font-medium whitespace-nowrap w-fit";

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-slate-100 text-slate-700",
  primary: "bg-indigo-100 text-indigo-700",
  success: "bg-emerald-100 text-emerald-700",
  warning: "bg-amber-100 text-amber-800",
  danger: "bg-red-100 text-red-700",
  outline: "border border-slate-300 text-slate-700 bg-transparent",
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: "text-xs px-2 py-0.5",
  md: "text-xs px-2.5 py-1",
  lg: "text-sm px-3 py-1.5",
};

/**
 * Badge
 * Compact status / label indicator. Reusable across cards, list items,
 * page headers, and dashboard widgets.
 *
 * @example
 * <Badge variant="success" size="sm">Active</Badge>
 */
export default function Badge({
  variant = "default",
  size = "md",
  leftIcon,
  children,
  className,
  ...rest
}: BadgeProps): React.JSX.Element {
  return (
    <span
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...rest}
    >
      {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
      {children}
    </span>
  );
}