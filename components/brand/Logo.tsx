import * as React from "react";
import Link from "next/link";
import LogoMark from "./LogoMark";

interface LogoProps {
  variant?: "full" | "mark";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const SIZE_MAP = {
  sm: { mark: 24, text: "text-lg", gap: "gap-2" },
  md: { mark: 30, text: "text-xl", gap: "gap-2.5" },
  lg: { mark: 40, text: "text-2xl", gap: "gap-3" },
};

export default function Logo({
  variant = "full",
  size = "md",
  className = "",
}: LogoProps): React.JSX.Element {
  const s = SIZE_MAP[size];

  if (variant === "mark") {
    return (
      <Link
        href="/"
        aria-label="SalesFluance home"
        className={className}
      >
        <LogoMark size={s.mark} />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      aria-label="SalesFluance home"
      className={`flex items-center ${s.gap} ${className}`}
    >
      <LogoMark
        size={s.mark}
        className="shrink-0 text-current"
      />

      <span
        className={`${s.text} font-semibold tracking-[-0.02em] leading-none`}
      >
        <span className="text-current">Sales</span>
        <span className="text-cyan-400">Fluance</span>
      </span>
    </Link>
  );
}