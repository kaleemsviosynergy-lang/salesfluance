import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { tryGetServiceConfig } from "@/lib/content/getServiceConfig";
import type { ServiceSlug } from "@/types/shared";

interface ServiceRelationshipCardProps {
  serviceSlug: ServiceSlug;
}

/**
 * Resolves a service's title/description/href from the existing service
 * registry via `tryGetServiceConfig` — never a Playbook-side copy of that
 * data. Renders nothing if the service is missing, invalid, or not
 * published, so a Playbook chapter can never link to a broken or
 * unpublished service page.
 */
export default async function ServiceRelationshipCard({ serviceSlug }: ServiceRelationshipCardProps) {
  const result = await tryGetServiceConfig(serviceSlug);
  if (!result.ok) {
    return null;
  }

  const service = result.config;

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-cyan-400/40 hover:bg-cyan-50/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2"
    >
      <div>
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-600">
          SalesFluance Service
        </p>
        <h3 className="mt-2 text-sm font-semibold text-slate-950">{service.seo.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{service.seo.description}</p>
      </div>
      <ArrowUpRight
        aria-hidden="true"
        className="mt-1 h-4 w-4 shrink-0 text-slate-300 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-500"
      />
    </Link>
  );
}
