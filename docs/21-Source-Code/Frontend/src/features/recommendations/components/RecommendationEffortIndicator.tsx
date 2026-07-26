import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { RecommendationEffort } from "@/features/recommendations/types/recommendation";

const EFFORT_CONFIG: Record<
  RecommendationEffort,
  { label: string; className: string }
> = {
  low: {
    label: "Low",
    className:
      "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20",
  },
  medium: {
    label: "Medium",
    className:
      "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20",
  },
  high: {
    label: "High",
    className:
      "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20",
  },
};

interface RecommendationEffortIndicatorProps {
  effort: RecommendationEffort;
}

export function RecommendationEffortIndicator({
  effort,
}: RecommendationEffortIndicatorProps) {
  const config = EFFORT_CONFIG[effort];

  return (
    <Badge variant="outline" className={cn("font-medium", config.className)}>
      {config.label}
    </Badge>
  );
}