import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { RecommendationImpact } from "@/features/recommendations/types/recommendation";

const IMPACT_CONFIG: Record<
  RecommendationImpact,
  { label: string; className: string }
> = {
  "very-high": {
    label: "Very High",
    className:
      "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20",
  },
  high: {
    label: "High",
    className:
      "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-500/10 dark:text-sky-400 dark:border-sky-500/20",
  },
  medium: {
    label: "Medium",
    className:
      "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20",
  },
  low: {
    label: "Low",
    className:
      "bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-500/10 dark:text-slate-400 dark:border-slate-500/20",
  },
};

interface RecommendationImpactIndicatorProps {
  impact: RecommendationImpact;
}

export function RecommendationImpactIndicator({
  impact,
}: RecommendationImpactIndicatorProps) {
  const config = IMPACT_CONFIG[impact];

  return (
    <Badge variant="outline" className={cn("font-medium", config.className)}>
      {config.label}
    </Badge>
  );
}