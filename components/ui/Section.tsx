import * as React from "react";
import { cn } from "@/lib/utils";
import Container, { type ContainerSize } from "@/components/ui/Container";

/** Vertical padding scale of the section. */
export type SectionSpacing = "none" | "sm" | "md" | "lg" | "xl";

export interface SectionProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
  /** Element type to render. Defaults to "section". */
  as?: "section" | "div" | "article" | "header" | "footer" | "aside";
  /** Wraps children in a Container when true. Defaults to true. */
  withContainer?: boolean;
  /** Container max-width, forwarded to Container when withContainer is true. */
  containerSize?: ContainerSize;
  /** Vertical (top/bottom) padding. Defaults to "lg". */
  spacing?: SectionSpacing;
  /** Section content. */
  children?: React.ReactNode;
  /** Additional class names merged onto the root element. */
  className?: string;
  /** Additional class names merged onto the inner Container, if rendered. */
  containerClassName?: string;
}

const spacingStyles: Record<SectionSpacing, string> = {
  none: "py-0",
  sm: "py-8 sm:py-12",
  md: "py-12 sm:py-16",
  lg: "py-16 sm:py-24",
  xl: "py-24 sm:py-32",
};

/**
 * Section
 * Layout primitive for page-level blocks (Hero, Service Pages, Marketing,
 * Contact, About, Dashboard). Handles vertical rhythm and optionally wraps
 * its content in Container for horizontal constraint/centering.
 *
 * @example
 * <Section spacing="xl" containerSize="lg">
 *   <h1>Hero</h1>
 * </Section>
 *
 * @example
 * // Full-bleed background with an inner constrained container
 * <Section withContainer={false} className="bg-slate-900">
 *   <Container>...</Container>
 * </Section>
 */
export default function Section({
  as: Tag = "section",
  withContainer = true,
  containerSize = "lg",
  spacing = "lg",
  children,
  className,
  containerClassName,
  ...rest
}: SectionProps): React.JSX.Element {
  return (
    <Tag className={cn(spacingStyles[spacing], className)} {...rest}>
      {withContainer ? (
        <Container size={containerSize} className={containerClassName}>
          {children}
        </Container>
      ) : (
        children
      )}
    </Tag>
  );
}