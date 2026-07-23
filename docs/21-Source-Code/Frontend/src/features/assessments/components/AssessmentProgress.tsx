import { Progress } from "@/components/ui/progress";

interface AssessmentProgressProps {
  /** 0–100 completion percentage. */
  progress: number;
  /** 0–100 Revenue Readiness score, or null if not yet scoreable. */
  overallScore: number | null;
}

export function AssessmentProgress({
  progress,
  overallScore,
}: AssessmentProgressProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex-1 space-y-1.5">
        <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wide text-muted-foreground">
          <span>Progress</span>
          <span className="tabular-nums text-foreground">{progress}%</span>
        </div>
        <Progress
          value={progress}
          aria-label={`Assessment progress: ${progress}%`}
        />
      </div>

      <div className="sm:w-40 sm:border-l sm:pl-4">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Revenue Readiness Score
        </p>
        <p className="mt-1 text-2xl font-semibold tabular-nums text-foreground">
          {overallScore !== null ? overallScore : "—"}
        </p>
      </div>
    </div>
  );
}