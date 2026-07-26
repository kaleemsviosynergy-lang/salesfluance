import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { FindingStatus } from "@/features/findings/types/finding";

const STATUS_CONFIG: Record<
  FindingStatus,
  { label: string; className: string; dotClassName: string }
> = {
  open: {
    label: "Open",
    className:
      "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-500/10 dark:text-sky-400 dark:border-sky-500/20",
    dotClassName: "bg-sky-500",
  },
  "in-review": {
    label: "In Review",
    className:
      "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20",
    dotClassName: "bg-amber-500",
  },
  resolved: {
    label: "Resolved",
    className:
      "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20",
    dotClassName: "bg-emerald-500",
  },
  dismissed: {
    label: "Dismissed",
    className:
      "bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-500/10 dark:text-slate-400 dark:border-slate-500/20",
    dotClassName: "bg-slate-400",
  },
};

interface FindingStatusBadgeProps {
  status: FindingStatus;
}

export function FindingStatusBadge({ status }: FindingStatusBadgeProps) {
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