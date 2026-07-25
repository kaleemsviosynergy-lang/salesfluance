import { Progress } from "@/components/ui/progress";

interface EvidenceScoreProps {
  /** 0–100 quality score, or null if not yet scored. */
  score: number | null;
}

function getScoreLabel(score: number): string {
  if (score >= 80) return "Strong";
  if (score >= 50) return "Developing";
  return "Weak";
}

export function EvidenceScore({ score }: EvidenceScoreProps) {
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
        aria-label={`Evidence quality score: ${score}`}
      />
      <span className="shrink-0 text-xs text-muted-foreground">
        {getScoreLabel(score)}
      </span>
    </div>
  );
}