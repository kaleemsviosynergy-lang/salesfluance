export type SectionSpacing =
  | "sm"
  | "md"
  | "lg"
  | "xl";

export interface SectionProps {
  ariaLabel?: string;

  id?: string;

  spacing?: SectionSpacing;

  container?: boolean;

  className?: string;
}