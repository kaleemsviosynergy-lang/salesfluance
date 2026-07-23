import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { AssessmentStatus } from "@/features/assessments/types/assessment";

const STATUS_CONFIG: Record<
  AssessmentStatus,
  { label: string; className: string; dotClassName: string }
> = {
  "not-started": {
    label: "Not Started",
    className:
      "bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-500/10 dark:text-slate-400 dark:border-slate-500/20",
    dotClassName: "bg-slate-400",
  },
  "in-progress": {
    label: "In Progress",
    className:
      "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-500/10 dark:text-sky-400 dark:border-sky-500/20",
    dotClassName: "bg-sky-500",
  },
  completed: {
    label: "Completed",
    className:
      "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20",
    dotClassName: "bg-emerald-500",
  },
  overdue: {
    label: "Overdue",
    className:
      "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20",
    dotClassName: "bg-rose-500",
  },
};

interface AssessmentStatusBadgeProps {
  status: AssessmentStatus;
}

export function AssessmentStatusBadge({ status }: AssessmentStatusBadgeProps) {
  const config = STATUS_CONFIG[status];

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