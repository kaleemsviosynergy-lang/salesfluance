import Link from "next/link";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseStyle =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-orange-600 text-white hover:bg-orange-700 shadow-lg hover:shadow-xl",
    secondary:
      "border border-slate-300 bg-white text-slate-800 hover:bg-slate-100",
  };

  return (
    <Link
      href={href}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}