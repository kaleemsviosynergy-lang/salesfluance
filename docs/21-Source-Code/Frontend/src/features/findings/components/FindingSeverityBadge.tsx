import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { FindingSeverity } from "@/features/findings/types/finding";

const SEVERITY_CONFIG: Record<
  FindingSeverity,
  { label: string; className: string; dotClassName: string }
> = {
  critical: {
    label: "Critical",
    className:
      "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20",
    dotClassName: "bg-rose-500",
  },
  high: {
    label: "High",
    className:
      "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-500/10 dark:text-orange-400 dark:border-orange-500/20",
    dotClassName: "bg-orange-500",
  },
  medium: {
    label: "Medium",
    className:
      "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20",
    dotClassName: "bg-amber-500",
  },
  low: {
    label: "Low",
    className:
      "bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-500/10 dark:text-slate-400 dark:border-slate-500/20",
    dotClassName: "bg-slate-400",
  },
};

interface FindingSeverityBadgeProps {
  severity: FindingSeverity;
}

export function FindingSeverityBadge({ severity }: FindingSeverityBadgeProps) {
  const config = SEVERITY_CONFIG[severity];

  return (
    <Badge
      variant="outline"
      className={cn("gap-1.5 font-medium", config.className)}
    >
      <span
        className={cn("h-1.5 w-1.5 rounded-full", config.dotClassName)}
        aria-hidden="true"
      />
      {config.label}
    </Badge>
  );
}