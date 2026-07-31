import * as React from "react";
import { cn } from "@/lib/utils";

/** Visual style of the card. */
export type CardVariant = "default" | "outlined" | "elevated" | "ghost";

/** Internal padding scale of the card. */
export type CardPadding = "none" | "sm" | "md" | "lg";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual style. Defaults to "default". */
  variant?: CardVariant;
  /** Internal padding. Defaults to "md". */
  padding?: CardPadding;
  /** Applies a lift/shadow transition on hover when true. Defaults to false. */
  hoverable?: boolean;
  /** Element type to render. Defaults to "div". */
  as?: React.ElementType;
  /** Card content. */
  children?: React.ReactNode;
  /** Additional class names merged onto the root element. */
  className?: string;
}

const baseStyles = "rounded-2xl transition-all duration-200";

const variantStyles: Record<CardVariant, string> = {
  default: "bg-white border border-slate-200",
  outlined: "bg-transparent border border-slate-300",
  elevated: "bg-white border border-slate-200 shadow-md",
  ghost: "bg-transparent border border-transparent",
};

const paddingStyles: Record<CardPadding, string> = {
  none: "p-0",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

const hoverStyles: Record<CardVariant, string> = {
  default: "hover:shadow-lg hover:-translate-y-0.5",
  outlined: "hover:border-slate-400 hover:-translate-y-0.5",
  elevated: "hover:shadow-xl hover:-translate-y-0.5",
  ghost: "hover:bg-slate-50",
};

/**
 * Card
 * Generic content surface used for feature blocks, pricing tiers, list
 * items, and dashboard widgets. Purely presentational — no business logic.
 *
 * @example
 * <Card variant="elevated" hoverable>
 *   <h3>Feature</h3>
 * </Card>
 */
export default function Card({
  variant = "default",
  padding = "md",
  hoverable = false,
  as: Tag = "div",
  children,
  className,
  ...rest
}: CardProps): React.JSX.Element {
  return (
    <Tag
      className={cn(
        baseStyles,
        variantStyles[variant],
        paddingStyles[padding],
        hoverable && hoverStyles[variant],
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}