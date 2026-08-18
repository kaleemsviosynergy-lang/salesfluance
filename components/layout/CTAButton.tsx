import * as React from "react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type CTAButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "text"
  | "ghost"
  | "destructive";

type CTAButtonSize = "sm" | "md" | "lg";

export interface CTAButtonProps {
  /** Destination URL for the CTA. */
  href: string;

  /** CTA label / content. */
  children: React.ReactNode;

  /** Visual style passed to Button. */
  variant?: CTAButtonVariant;

  /** Button size passed to Button. */
  size?: CTAButtonSize;

  /** Icon rendered before the label. */
  leftIcon?: React.ReactNode;

  /** Icon rendered after the label. */
  rightIcon?: React.ReactNode;

  /** Opens the destination in a new tab. */
  external?: boolean;

  /** Additional class names merged onto the rendered Button. */
  className?: string;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  external = false,
  className,
}: CTAButtonProps): React.JSX.Element {
  return (
    <Button
      href={href}
      variant={variant}
      size={size}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      className={cn("h-9 px-4 text-xs rounded-lg", className)}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {children}
    </Button>
  );
}