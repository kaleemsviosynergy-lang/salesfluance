export type BadgeVariant =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info";

export type BadgeSize =
  | "sm"
  | "md";

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {

  variant?: BadgeVariant;

  size?: BadgeSize;

  children: React.ReactNode;
}