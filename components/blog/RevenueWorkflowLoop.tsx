import { Activity, Cpu, UserCheck, Zap, ShieldCheck, RefreshCw, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

/**
 * RevenueWorkflowLoop — compact operating-loop diagram for Blog #11.
 *
 * Same six stages and actor color-coding as AIRevenueFlowHero, but
 * deliberately smaller/denser (label-only nodes, no description copy)
 * and built to make the feedback loop the visual's whole point: an
 * explicit curved connector routes "Outcome & Learn" back to "Signals",
 * reinforcing that this is a repeating operating model, not a one-off
 * funnel. Reuses the same card/eyebrow/footer grammar as the other two
 * blog visuals and the service-page process sections — no new visual
 * system introduced.
 */

type NodeActor = "system" | "ai" | "human";

interface WorkflowNode {
  label: string;
  actor: NodeActor;
  icon: LucideIcon;
}

const NODES: WorkflowNode[] = [
  { label: "Signals", actor: "system", icon: Activity },
  { label: "AI Interpretation", actor: "ai", icon: Cpu },
  { label: "Human Review", actor: "human", icon: UserCheck },
  { label: "AI Execution", actor: "ai", icon: Zap },
  { label: "Human Verification", actor: "human", icon: ShieldCheck },
  { label: "Outcome & Learn", actor: "system", icon: RefreshCw },
];

const NODE_STYLES: Record<NodeActor, string> = {
  system: "border-slate-200 bg-slate-50 text-slate-600",
  ai: "border-indigo-100 bg-indigo-50 text-indigo-600",
  human: "border-slate-800 bg-slate-950 text-white",
};

export default function RevenueWorkflowLoop() {
  return (
    <section aria-labelledby="revenue-workflow-heading" className="not-prose">
      <Container size="lg" disableGutters>
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-indigo-200" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-indigo-600">
                The Emerging Workflow
              </span>
              <span aria-hidden="true" className="h-px w-8 bg-indigo-200" />
            </div>
            <h2
              id="revenue-workflow-heading"
              className="text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:text-4xl"
            >
              A loop, not a funnel
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mx-auto mt-10 max-w-5xl rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.06)] sm:p-8">
            {/* Desktop: single row with arrow connectors */}
            <ol className="hidden items-stretch justify-between gap-2 lg:flex">
              {NODES.map((node, index) => {
                const Icon = node.icon;
                const isLast = index === NODES.length - 1;
                return (
                  <li key={node.label} className="flex flex-1 items-center">
                    <div className="flex flex-1 flex-col items-center gap-2 rounded-2xl border border-slate-100 bg-slate-50/50 px-3 py-4 text-center">
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-xl border ${NODE_STYLES[node.actor]}`}
                      >
                        <Icon aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
                      </span>
                      <span className="text-[11px] font-bold leading-tight text-slate-950">
                        {node.label}
                      </span>
                    </div>
                    {!isLast && (
                      <svg
                        aria-hidden="true"
                        width="20"
                        height="14"
                        viewBox="0 0 20 14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="mx-1 shrink-0 text-slate-300"
                      >
                        <path d="M2 7h14M11 2l5 5-5 5" />
                      </svg>
                    )}
                  </li>
                );
              })}
            </ol>

            {/* Tablet/mobile: vertical stack with down connectors */}
            <ol className="flex flex-col items-stretch gap-1.5 lg:hidden">
              {NODES.map((node, index) => {
                const Icon = node.icon;
                const isLast = index === NODES.length - 1;
                return (
                  <li key={node.label}>
                    <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/50 px-4 py-3">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border ${NODE_STYLES[node.actor]}`}
                      >
                        <Icon aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
                      </span>
                      <span className="text-sm font-bold text-slate-950">{node.label}</span>
                    </div>
                    {!isLast && (
                      <div aria-hidden="true" className="flex justify-center py-1 text-slate-300">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 5v14M5 12l7 7 7-7" />
                        </svg>
                      </div>
                    )}
                  </li>
                );
              })}
            </ol>

            {/* Feedback loop indicator — explicit on every breakpoint */}
            <div className="mt-5 flex items-center justify-center gap-2 rounded-2xl border border-dashed border-indigo-200 bg-indigo-50/40 px-4 py-3 text-center">
              <RefreshCw aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-indigo-500" strokeWidth={2} />
              <span className="text-xs font-semibold text-indigo-700 sm:text-sm">
                Outcome &amp; Learn feeds back into Signals — the cycle repeats.
              </span>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
