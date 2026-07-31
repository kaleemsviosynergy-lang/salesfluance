import * as React from "react";
import { cn } from "@/lib/utils";

/** Max-width scale of the container. */
export type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";

export type ContainerProps<T extends React.ElementType = "div"> = {
  /** Max-width breakpoint. Defaults to "lg". */
  size?: ContainerSize;
  /** Disables horizontal padding when true. Defaults to false. */
  disableGutters?: boolean;
  /** Element type to render. Defaults to "div". */
  as?: T;
  /** Container content. */
  children?: React.ReactNode;
  /** Additional class names merged onto the root element. */
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const sizeStyles: Record<ContainerSize, string> = {
  sm: "max-w-2xl",
  md: "max-w-4xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-none",
};

/**
 * Container
 * Centers and constrains page content to a consistent responsive width.
 * Used directly or wrapped by Section across every page type.
 *
 * @example
 * <Container size="lg">...</Container>
 */
export default function Container<T extends React.ElementType = "div">({
  size = "lg",
  disableGutters = false,
  as,
  children,
  className,
  ...rest
}: ContainerProps<T>): React.JSX.Element {
  const Tag = (as || "div") as React.ElementType;

  return (
    <Tag
      className={cn(
        "mx-auto w-full",
        sizeStyles[size],
        !disableGutters && "px-4 sm:px-6 lg:px-8",
        className
      )}
      {...(rest as any)}
    >
      {children}
    </Tag>
  );
}