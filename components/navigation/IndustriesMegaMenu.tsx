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

function IndustryLink({ title, href }: IndustryLinkProps): React.JSX.Element {
  return (
    <Link
      href={href}
      className={cn(
        "group flex min-h-11 min-w-0 items-center justify-between rounded-xl px-3 py-2 transition-all duration-200",
        "hover:bg-cyan-50/50"
      )}
    >
      <span className="min-w-0 text-sm font-medium leading-5 text-slate-800 transition-colors duration-200 group-hover:text-cyan-600">
        {title}
      </span>

      <ArrowRight
        className="h-4 w-4 shrink-0 text-slate-400 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:text-cyan-500 group-hover:opacity-100"
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
        // Shadow/ring swapped for a single soft, low-opacity elevation
        // shadow — the hairline border now carries the structural
        // definition, per the "borders over shadows" rule used
        // throughout the rest of the site.
        "mx-auto w-[460px] max-w-[calc(100vw-32px)] rounded-2xl border border-slate-200 bg-white shadow-[0_24px_48px_-20px_rgba(15,23,42,0.16)]",
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
            className="group inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 transition-colors hover:text-cyan-500"
          >
            Explore All Industries
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}