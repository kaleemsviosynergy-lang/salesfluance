import { ReactNode } from "react";

export type ContainerSize =
  | "narrow"
  | "default"
  | "wide"
  | "full";

export interface ContainerProps {
  children: ReactNode;

  /**
   * Controls the maximum width.
   * @default "default"
   */
  size?: ContainerSize;

  /**
   * Additional Tailwind classes.
   */
  className?: string;
}