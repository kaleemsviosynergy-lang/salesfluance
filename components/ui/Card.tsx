import { HTMLAttributes } from "react";

export type CardVariant =
  | "default"
  | "outlined"
  | "elevated"
  | "ghost";

export interface CardProps
  extends HTMLAttributes<HTMLDivElement> {

  variant?: CardVariant;

  hover?: boolean;

  children: React.ReactNode;
}