import * as React from "react";
import { cn } from "@/lib/utils";

export type PageContainerSize =
  | "hero"
  | "wide"
  | "default"
  | "narrow";

export interface PageContainerProps {
  children: React.ReactNode;

  /**
   * Controls the maximum content width.
   *
   * hero    = Homepage Hero
   * wide    = Large feature sections
   * default = Standard website content
   * narrow  = Forms / FAQ / Articles
   */
  size?: PageContainerSize;

  className?: string;
}

const sizeClasses: Record<PageContainerSize, string> = {
  hero: "max-w-[1600px]",
  wide: "max-w-[1440px]",
  default: "max-w-[1280px]",
  narrow: "max-w-[960px]",
};

export default function PageContainer({
  children,
  size = "default",
  className,
}: PageContainerProps): React.JSX.Element {
  return (
    <div
      className={cn(
        "mx-auto w-full",
        "px-6 md:px-10 xl:px-16",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  );
}