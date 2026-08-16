import * as React from "react";
import {
  CheckCircle2,
  Search,
  Sparkles,
  Send,
  Workflow,
  DollarSign,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface MegaMenuBrandProps {
  className?: string;
}

interface WorkflowStep {
  label: string;
  icon: LucideIcon;
}

const WORKFLOW_STEPS: WorkflowStep[] = [
  { label: "Research", icon: Search },
  { label: "Intelligence", icon: Sparkles },
  { label: "Outreach", icon: Send },
  { label: "Pipeline", icon: Workflow },
  { label: "Revenue", icon: DollarSign },
];

/**
 * MegaMenuBrand
 *
 * Brand positioning panel displayed in Mega Menu v2.
 *
 * Purpose:
 * Reinforce SalesFluance positioning without acting like an advertisement.
 *
 * No navigation.
 * No CTA button.
 * Pure brand communication.
 */
export default function MegaMenuBrand({
  className,
}: MegaMenuBrandProps): React.JSX.Element {
  const highlights = [
    "✓ AI Research",
    "✓ Verified Data",
    "✓ Buying Committee",
    "Sales Meetings",
    "✓ Revenue Focus",
  ];

  return (
    <aside
      className={cn(
        "rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-4",
        className
      )}
    >
      {/* Heading */}
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
          Enterprise Revenue Growth
        </p>

        <h3 className="mt-2 text-lg font-bold leading-tight text-slate-900">
          Revenue Intelligence,
          <br />
          Built for Enterprise.
        </h3>

        <p className="mt-2.5 text-[13px] leading-4 text-slate-600">
          Human-verified research, AI-assisted intelligence — built for
          enterprise pipeline.
        </p>
      </div>

      {/* Highlights — the visual focal point of this panel */}
      <div className="mt-4 rounded-xl border border-slate-200/80 bg-white/70 p-3">
        <div className="space-y-1.5">
          {highlights.map((item) => (
            <div key={item} className="flex items-center gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" strokeWidth={2.25} />
              </span>

              <span className="text-[13px] font-medium leading-tight text-slate-700">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="my-3 h-px bg-slate-200" />

      {/* Process */}
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
          Our Approach
        </p>

        <div className="mt-3.5">
          {WORKFLOW_STEPS.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === WORKFLOW_STEPS.length - 1;

            return (
              <div key={step.label}>
                <div className="flex items-center gap-2.5 py-0.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-white text-slate-500 ring-1 ring-slate-200">
                    <Icon className="h-3 w-3" strokeWidth={2} />
                  </span>

                  <span className="text-[13px] font-medium text-slate-700">
                    {step.label}
                  </span>
                </div>

                {!isLast && (
                  <div className="flex h-2.5 w-6 shrink-0 items-center justify-center">
                    <div className="h-full w-px bg-slate-200" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}