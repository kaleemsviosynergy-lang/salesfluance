import { cn } from "@/lib/utils";

interface ReadinessScoreProps {
  score: number;
}

function getTier(score: number) {
  if (score >= 75) {
    return {
      label: "Strong",
      barClassName: "bg-emerald-500",
      textClassName: "text-emerald-700 dark:text-emerald-400",
    };
  }
  if (score >= 50) {
    return {
      label: "Developing",
      barClassName: "bg-amber-500",
      textClassName: "text-amber-700 dark:text-amber-400",
    };
  }
  return {
    label: "Weak",
    barClassName: "bg-rose-500",
    textClassName: "text-rose-700 dark:text-rose-400",
  };
}

export function ReadinessScore({ score }: ReadinessScoreProps) {
  const tier = getTier(score);

  return (
    <div className="flex min-w-32 items-center gap-2.5">
      <span className={cn("w-8 text-sm font-semibold tabular-nums", tier.textClassName)}>
        {score}
      </span>
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
        <div
          className={cn("h-full rounded-full transition-all", tier.barClassName)}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}
