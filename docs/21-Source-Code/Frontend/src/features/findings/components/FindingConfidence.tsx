import { Progress } from "@/components/ui/progress";

interface FindingConfidenceProps {
  /** 0–100 confidence score, or null if not yet scored. */
  score: number | null;
}

function getConfidenceLabel(score: number): string {
  if (score >= 80) return "High Confidence";
  if (score >= 50) return "Moderate Confidence";
  return "Low Confidence";
}

export function FindingConfidence({ score }: FindingConfidenceProps) {
  if (score === null) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-muted-foreground">—</span>
        <span className="text-xs text-muted-foreground">Not yet scored</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2.5">
      <span className="w-8 shrink-0 text-sm font-semibold tabular-nums text-foreground">
        {score}
      </span>
      <Progress
        value={score}
        className="h-1.5 flex-1"
        aria-label={`Finding confidence score: ${score}`}
      />
      <span className="shrink-0 text-xs text-muted-foreground">
        {getConfidenceLabel(score)}
      </span>
    </div>
  );
}