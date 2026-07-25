import { Progress } from "@/components/ui/progress";

interface EvidenceProgressProps {
  /** 0–100 completion percentage. */
  progress: number;
  /** Number of evidence items approved so far. */
  approvedCount: number;
  /** Total number of evidence items expected. */
  totalCount: number;
}

export function EvidenceProgress({
  progress,
  approvedCount,
  totalCount,
}: EvidenceProgressProps) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wide text-muted-foreground">
        <span>Evidence Collected</span>
        <span className="tabular-nums text-foreground">
          {approvedCount}/{totalCount}
        </span>
      </div>
      <Progress
        value={progress}
        aria-label={`Evidence collection progress: ${progress}%`}
      />
    </div>
  );
}