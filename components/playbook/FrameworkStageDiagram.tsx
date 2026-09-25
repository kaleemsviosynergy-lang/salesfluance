import Link from "next/link";

import {
  FRAMEWORK_STAGES,
  FRAMEWORK_STAGE_DETAILS,
  type FrameworkStage,
} from "@/types/playbook";

interface FrameworkStageDiagramProps {
  /** The stage to visually highlight — e.g. the stage the current chapter belongs to. */
  highlightStage?: FrameworkStage;
  /**
   * Stages that currently have a published, routable chapter. Only these
   * render as links — every other stage renders as a plain, non-interactive
   * card, so the diagram never points at a chapter that does not exist yet.
   * Resolved by the caller from `getPublishedPlaybookChapters()`, never
   * hardcoded here.
   */
  linkedStages: FrameworkStage[];
}

/**
 * Renders the eight-stage SalesFluance Revenue Execution Framework from the
 * single source of truth in `types/playbook.ts` (`FRAMEWORK_STAGE_DETAILS`),
 * sorted by each stage's explicit `order`. No stage label, description, or
 * sequence is ever restated independently here.
 */
export default function FrameworkStageDiagram({
  highlightStage,
  linkedStages,
}: FrameworkStageDiagramProps) {
  const stages = [...FRAMEWORK_STAGES].sort(
    (a, b) => FRAMEWORK_STAGE_DETAILS[a].order - FRAMEWORK_STAGE_DETAILS[b].order,
  );
  const linked = new Set(linkedStages);

  return (
    <div
      role="list"
      aria-label="The SalesFluance Revenue Execution Framework — eight stages"
      className="grid grid-cols-2 gap-3 sm:grid-cols-4"
    >
      {stages.map((stage) => {
        const detail = FRAMEWORK_STAGE_DETAILS[stage];
        const isHighlighted = stage === highlightStage;
        const isLinked = linked.has(stage);

        const cardClasses = [
          "group relative flex h-full flex-col rounded-2xl border p-4 text-left transition",
          isHighlighted
            ? "border-cyan-400 bg-cyan-50/40 shadow-sm"
            : "border-slate-200 bg-white",
          isLinked && !isHighlighted ? "hover:border-cyan-300 hover:bg-cyan-50/20" : "",
        ].join(" ");

        const content = (
          <>
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              {String(detail.order).padStart(2, "0")}
            </span>
            <span
              className={
                isHighlighted
                  ? "mt-2 text-sm font-semibold text-cyan-700"
                  : "mt-2 text-sm font-semibold text-slate-950"
              }
            >
              {detail.label}
            </span>
            {!isLinked && (
              <span className="mt-2 font-mono text-[9px] uppercase tracking-[0.14em] text-slate-400">
                In the framework
              </span>
            )}
          </>
        );

        if (isLinked) {
          return (
            <Link
              key={stage}
              href={`/resources/playbooks/${stage}`}
              role="listitem"
              aria-current={isHighlighted ? "step" : undefined}
              className={`${cardClasses} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2`}
            >
              {content}
            </Link>
          );
        }

        return (
          <div key={stage} role="listitem" aria-current={isHighlighted ? "step" : undefined} className={cardClasses}>
            {content}
          </div>
        );
      })}
    </div>
  );
}
