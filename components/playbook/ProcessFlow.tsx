import { ArrowRight } from "lucide-react";

import type { PlaybookProcessFlowStep } from "@/types/playbook";

interface ProcessFlowProps {
  steps: PlaybookProcessFlowStep[];
}

/**
 * Renders a directional sequence of named steps — e.g. the demand-creation
 * or lead-capture motion inside the Activate chapter. Presented as a
 * conceptual flow, not implying a guaranteed, universal pipeline every
 * account moves through in order.
 */
export default function ProcessFlow({ steps }: ProcessFlowProps) {
  return (
    <ol className="flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-2">
      {steps.map((step, index) => (
        <li key={index} className="flex flex-1 items-stretch gap-2">
          <div className="flex flex-1 flex-col rounded-2xl border border-slate-200 bg-white p-4">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-600">
              Step {index + 1}
            </span>
            <span className="mt-2 text-sm font-semibold text-slate-950">{step.label}</span>
            {step.description && (
              <span className="mt-2 text-sm leading-6 text-slate-600">{step.description}</span>
            )}
          </div>
          {index < steps.length - 1 && (
            <div className="hidden shrink-0 items-center justify-center sm:flex" aria-hidden="true">
              <ArrowRight className="h-4 w-4 text-slate-300" />
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}
