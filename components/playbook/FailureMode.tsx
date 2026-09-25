import { AlertTriangle } from "lucide-react";

interface FailureModeProps {
  title: string;
  symptom: string;
  likelyCause: string;
  recommendedFix: string;
}

/**
 * A named, methodology-based failure pattern — never framed as a
 * prevalence claim ("most teams...") or backed by an invented statistic.
 */
export default function FailureMode({ title, symptom, likelyCause, recommendedFix }: FailureModeProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-start gap-3">
        <AlertTriangle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
        <h3 className="text-sm font-semibold text-slate-950">{title}</h3>
      </div>

      <dl className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
        <div>
          <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
            Symptom
          </dt>
          <dd className="mt-1">{symptom}</dd>
        </div>
        <div>
          <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
            Likely cause
          </dt>
          <dd className="mt-1">{likelyCause}</dd>
        </div>
        <div>
          <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
            Recommended fix
          </dt>
          <dd className="mt-1">{recommendedFix}</dd>
        </div>
      </dl>
    </div>
  );
}
