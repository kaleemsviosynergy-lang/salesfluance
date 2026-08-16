import Link from "next/link";
import * as React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface MegaMenuCardProps {
  /** Destination URL. */
  href: string;

  /** Service / Industry name. */
  title: string;

  /** Short one-line description. */
  description: string;

  /** Optional icon shown inside the icon container. */
  icon?: React.ReactNode;

  /** Marks this card with a subtle "Featured" badge. */
  featured?: boolean;

  /** Additional classes. */
  className?: string;
}

/**
 * MegaMenuCard
 *
 * Small clickable navigation card used throughout MegaMenu v2.
 *
 * Business agnostic.
 *
 * Can represent:
 * - Service
 * - Industry
 * - Solution
 * - Resource
 */
export default function MegaMenuCard({
  href,
  title,
  description,
  icon,
  featured,
  className,
}: MegaMenuCardProps): React.JSX.Element {
  return (
    <Link
      href={href}
      className={cn(
        "group flex [56px] items-start gap-3 rounded-xl border border-transparent px-3 py-2.5 transition-all duration-200 ease-out",
        "hover:-translate-y-0.5 hover:border-slate-200 hover:bg-slate-50/80 hover:shadow-sm",
        className
      )}
    >
      {/* Icon */}
      <div
        className="
          flex h-7 w-7 shrink-0 items-center justify-center
          rounded-lg
          bg-slate-100
          text-slate-500
          transition-all
          duration-200
          ease-out
          group-hover:text-blue-600
          group-hover:bg-blue-50
          group-hover:text-blue-600
        "
      >
        {icon ?? (
          <ArrowRight
            className="
              h-4 w-4
              transition-transform
              duration-200
              ease-out
              group-hover:translate-x-0.5
            "
          />
        )}
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1 min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h4
            className="
              truncate
              text-sm
              font-semibold
              text-slate-900
              transition-colors
              duration-200
              ease-out
              group-hover:text-blue-700
            "
          >
            {title}
          </h4>

          {featured && (
            <span
              className="
                inline-flex shrink-0 items-center rounded-full border
                border-blue-100 bg-blue-50 px-1.5 py-0
                text-[9px] font-semibold uppercase tracking-wide text-blue-600
              "
            >
              Featured
            </span>
          )}
        </div>

        <p
          className="
            mt-0.5
            line-clamp-2
            text-xs
            leading-4
            text-slate-500
          "
        >
          {description}
        </p>
      </div>
    </Link>
  );
}