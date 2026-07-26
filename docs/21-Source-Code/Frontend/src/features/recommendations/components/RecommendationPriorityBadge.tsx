import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { RecommendationPriority } from "@/features/recommendations/types/recommendation";

const PRIORITY_CONFIG: Record<
  RecommendationPriority,
  { label: string; className: string }
> = {
  urgent: {
    label: "Urgent",
    className:
      "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20",
  },
  high: {
    label: "High",
    className:
      "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-500/10 dark:text-orange-400 dark:border-orange-500/20",
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

interface RecommendationPriorityBadgeProps {
  priority: RecommendationPriority;
}

export function RecommendationPriorityBadge({
  priority,
}: RecommendationPriorityBadgeProps) {
  const config = PRIORITY_CONFIG[priority];

  return (
    <Badge variant="outline" className={cn("font-medium", config.className)}>
      {config.label}
    </Badge>
  );
}