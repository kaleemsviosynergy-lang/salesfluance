import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
}

export default function Button({
  children,
  leftIcon,
  rightIcon,
  isLoading = false,
  ...props
}: ButtonProps) {
  return (
    <button {...props}>
      {leftIcon}
      {isLoading ? "Loading..." : children}
      {rightIcon}
    </button>
  );
}