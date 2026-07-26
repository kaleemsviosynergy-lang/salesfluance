import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { FindingPriority } from "@/features/findings/types/finding";

const PRIORITY_CONFIG: Record<
  FindingPriority,
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
  normal: {
    label: "Normal",
    className:
      "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-500/10 dark:text-sky-400 dark:border-sky-500/20",
  },
  low: {
    label: "Low",
    className:
      "bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-500/10 dark:text-slate-400 dark:border-slate-500/20",
  },
};

interface FindingPriorityBadgeProps {
  priority: FindingPriority;
}

export function FindingPriorityBadge({ priority }: FindingPriorityBadgeProps) {
  const config = PRIORITY_CONFIG[priority];

  return (
    <Badge variant="outline" className={cn("font-medium", config.className)}>
      {config.label}
    </Badge>
  );
}