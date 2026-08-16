import Link from "next/link";
import * as React from "react";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { industriesNavigation } from "@/app/data/navigation";
import MegaMenuSectionHeading from "./MegaMenuSectionHeading";

export interface IndustriesMegaMenuProps {
  className?: string;
}

interface IndustryLinkProps {
  title: string;
  href: string;
}

function IndustryLink({
  title,
  href,
}: IndustryLinkProps): React.JSX.Element {
  return (
    <Link
      href={href}
      className={cn(
        "group flex min-h-11 min-w-0 items-center justify-between rounded-xl px-3 py-2 transition-all duration-200",
        "hover:bg-slate-50"
      )}
    >
      <span
  className="
    min-w-0
    text-sm
    font-medium
    leading-5
    text-slate-800
    transition-colors
    duration-200
    group-hover:text-blue-600
  "
>
        {title}
      </span>

      <ArrowRight
  className="
    h-4
    w-4
    shrink-0
    text-slate-400
    opacity-0
    transition-all
    duration-200
    group-hover:translate-x-1
    group-hover:opacity-100
  "
/>
    </Link>
  );
}

export default function IndustriesMegaMenu({
  className,
}: IndustriesMegaMenuProps): React.JSX.Element {
  const industries =
    industriesNavigation?.megaMenu?.groups?.[0]?.links ?? [];

  return (
    <div
  className={cn(
    "mx-auto w-[460px] max-w-[calc(100vw-32px)] rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10 ring-1 ring-black/[0.03]",
    className
  )}
    >
      <div className="px-6 py-5">

        <MegaMenuSectionHeading className="mb-5">
          Industries
        </MegaMenuSectionHeading>

        <div className="grid grid-cols-2 gap-x-6 gap-y-2">

          {industries.map((industry) => (
            <IndustryLink
              key={industry.href}
              title={industry.label}
              href={industry.href}
            />
          ))}

        </div>

        <div className="mt-6 border-t border-slate-200 pt-4">

          <Link
            href="/industries"
            className="
              group
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-blue-600
              transition-colors
              hover:text-blue-700
            "
          >
            Explore All Industries

            <ArrowRight
              className="
                h-4
                w-4
                transition-transform
                duration-200
                group-hover:translate-x-1
              "
            />
          </Link>

        </div>

      </div>
    </div>
  );
}