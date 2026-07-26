import {
  ClipboardList,
  FileSearch,
  Lightbulb,
  UserRound,
  Clock,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

import type { Activity } from "../types";
import { ActivityTypeBadge } from "./ActivityTypeBadge";
import { ActivityActor } from "./ActivityActor";

interface ActivityCardProps {
  activity: Activity;
  className?: string;
}

interface MetadataChip {
  key: string;
  label: string;
  icon: typeof ClipboardList;
}

function formatTimestamp(isoDate: string): string {
  const date = new Date(isoDate);
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

/**
 * Builds the list of "nice" metadata chips to render for an activity,
 * based on whichever denormalized display fields are present. Designed
 * so each chip can be swapped for a real link (e.g. to the referenced
 * assessment/finding/recommendation/evidence/contact) without any
 * layout changes.
 */
function getMetadataChips(activity: Activity): MetadataChip[] {
  const { metadata } = activity;
  const chips: MetadataChip[] = [];

  if (metadata.assessmentName) {
    chips.push({
      key: "assessmentName",
      label: metadata.assessmentName,
      icon: ClipboardList,
    });
  }
  if (metadata.evidenceName) {
    chips.push({
      key: "evidenceName",
      label: metadata.evidenceName,
      icon: FileSearch,
    });
  }
  if (metadata.findingTitle) {
    chips.push({
      key: "findingTitle",
      label: metadata.findingTitle,
      icon: FileSearch,
    });
  }
  if (metadata.recommendationTitle) {
    chips.push({
      key: "recommendationTitle",
      label: metadata.recommendationTitle,
      icon: Lightbulb,
    });
  }
  if (metadata.contactName) {
    chips.push({
      key: "contactName",
      label: metadata.contactName,
      icon: UserRound,
    });
  }

  return chips;
}

/**
 * ActivityCard
 *
 * Enterprise audit-log card for a single Activity entry. Pure
 * presentation — the metadata chips are plain elements today, but are
 * structured (one chip per referenced entity) so they can become
 * clickable links later without a redesign.
 */
export function ActivityCard({ activity, className }: ActivityCardProps) {
  const metadataChips = getMetadataChips(activity);
  const hasFieldChange = Boolean(
    activity.metadata.fieldChanged && activity.metadata.previousValue !== undefined
  );

  return (
    <Card className={cn("shadow-sm", className)}>
      <CardContent className="flex flex-col gap-3 p-4">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <ActivityTypeBadge type={activity.type} />
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            <time dateTime={activity.createdAt}>
              {formatTimestamp(activity.createdAt)}
            </time>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <h4 className="text-sm font-semibold text-foreground">
            {activity.title}
          </h4>
          <p className="text-sm text-muted-foreground">
            {activity.description}
          </p>
        </div>

        {hasFieldChange && (
          <div className="flex flex-wrap items-center gap-1.5 rounded-md bg-muted/50 px-2.5 py-1.5 text-xs text-muted-foreground">
            <span className="font-medium text-foreground">
              {activity.metadata.fieldChanged}
            </span>
            <span>changed from</span>
            <span className="font-medium">{activity.metadata.previousValue}</span>
            <span>to</span>
            <span className="font-medium text-foreground">
              {activity.metadata.newValue}
            </span>
          </div>
        )}

        {metadataChips.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {metadataChips.map((chip) => {
              const ChipIcon = chip.icon;
              return (
                <span
                  key={chip.key}
                  className="inline-flex items-center gap-1 rounded-md border bg-background px-2 py-1 text-xs text-foreground"
                >
                  <ChipIcon className="h-3 w-3 text-muted-foreground" aria-hidden="true" />
                  {chip.label}
                </span>
              );
            })}
          </div>
        )}

        <Separator />

        <ActivityActor actor={activity.actor} />
      </CardContent>
    </Card>
  );
}
