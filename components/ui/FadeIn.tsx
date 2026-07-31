export type FadeDirection =
  | "up"
  | "down"
  | "left"
  | "right"
  | "none";

export interface FadeInProps {
  children: React.ReactNode;

  direction?: FadeDirection;

  delay?: number;

  duration?: number;

  once?: boolean;

  className?: string;
}