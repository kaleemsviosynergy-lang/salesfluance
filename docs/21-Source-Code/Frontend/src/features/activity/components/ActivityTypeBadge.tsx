import {
  ClipboardCheck,
  ClipboardEdit,
  ClipboardList,
  UploadCloud,
  ShieldCheck,
  ShieldX,
  FileWarning,
  FilePenLine,
  FileCheck2,
  Lightbulb,
  Pencil,
  CheckCircle2,
  UserPlus,
  UserCog,
  Building2,
  MessageSquare,
  type LucideIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import type { ActivityType } from "../types";

interface ActivityTypeBadgeProps {
  type: ActivityType;
  className?: string;
}

interface ActivityTypeConfig {
  label: string;
  icon: LucideIcon;
  className: string;
}

const ACTIVITY_TYPE_CONFIG: Record<ActivityType, ActivityTypeConfig> = {
  assessment_created: {
    label: "Assessment Created",
    icon: ClipboardList,
    className:
      "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-900",
  },
  assessment_updated: {
    label: "Assessment Updated",
    icon: ClipboardEdit,
    className:
      "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-900",
  },
  assessment_completed: {
    label: "Assessment Completed",
    icon: ClipboardCheck,
    className:
      "bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800",
  },
  evidence_uploaded: {
    label: "Evidence Uploaded",
    icon: UploadCloud,
    className:
      "bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950/40 dark:text-violet-300 dark:border-violet-900",
  },
  evidence_approved: {
    label: "Evidence Approved",
    icon: ShieldCheck,
    className:
      "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-900",
  },
  evidence_rejected: {
    label: "Evidence Rejected",
    icon: ShieldX,
    className:
      "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-900",
  },
  finding_created: {
    label: "Finding Created",
    icon: FileWarning,
    className:
      "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-900",
  },
  finding_updated: {
    label: "Finding Updated",
    icon: FilePenLine,
    className:
      "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-900",
  },
  finding_resolved: {
    label: "Finding Resolved",
    icon: FileCheck2,
    className:
      "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-900",
  },
  recommendation_created: {
    label: "Recommendation Created",
    icon: Lightbulb,
    className:
      "bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/40 dark:text-teal-300 dark:border-teal-900",
  },
  recommendation_updated: {
    label: "Recommendation Updated",
    icon: Pencil,
    className:
      "bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/40 dark:text-teal-300 dark:border-teal-900",
  },
  recommendation_completed: {
    label: "Recommendation Completed",
    icon: CheckCircle2,
    className:
      "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-900",
  },
  contact_added: {
    label: "Contact Added",
    icon: UserPlus,
    className:
      "bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950/40 dark:text-cyan-300 dark:border-cyan-900",
  },
  contact_updated: {
    label: "Contact Updated",
    icon: UserCog,
    className:
      "bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950/40 dark:text-cyan-300 dark:border-cyan-900",
  },
  organization_updated: {
    label: "Organization Updated",
    icon: Building2,
    className:
      "bg-slate-100 text-slate-700 border-slate-300 dark:bg-slate-800/60 dark:text-slate-300 dark:border-slate-700",
  },
  comment_added: {
    label: "Comment Added",
    icon: MessageSquare,
    className:
      "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950/40 dark:text-orange-300 dark:border-orange-900",
  },
};

/**
 * ActivityTypeBadge
 *
 * Presentational badge that renders a labeled, color-coded, icon-prefixed
 * indicator for any ActivityType. Purely visual — carries no logic beyond
 * a static lookup table.
 */
export function ActivityTypeBadge({ type, className }: ActivityTypeBadgeProps) {
  const config = ACTIVITY_TYPE_CONFIG[type];
  const Icon = config.icon;

  return (
    <Badge
      variant="outline"
      className={cn("gap-1.5 font-medium", config.className, className)}
    >
      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
      {config.label}
    </Badge>
  );
}
