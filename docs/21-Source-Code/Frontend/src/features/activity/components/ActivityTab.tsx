import { LoadingState, SectionHeader } from "@/components/common";
import { cn } from "@/lib/utils";

import type { Activity } from "../types";
import { ActivityHero } from "./ActivityHero";
import { ActivityTimeline } from "./ActivityTimeline";
import { ActivityEmptyState } from "./ActivityEmptyState";

interface ActivityTabProps {
  activities: Activity[];
  isLoading?: boolean;
  className?: string;
}

/**
 * ActivityTab
 *
 * Presentational orchestration for the Activity tab, mirroring the
 * AssessmentsTab / EvidenceTab / FindingsTab / RecommendationsTab
 * pattern:
 *
 *   Loading  -> LoadingState
 *   Empty    -> ActivityEmptyState
 *   Data     -> ActivityHero -> SectionHeader -> ActivityTimeline
 *
 * No data fetching, routing, or mutations — activities are supplied
 * entirely by the parent.
 */
export function ActivityTab({
  activities,
  isLoading = false,
  className,
}: ActivityTabProps) {
  if (isLoading) {
    return <LoadingState />;
  }

  if (activities.length === 0) {
    return <ActivityEmptyState />;
  }

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <ActivityHero activities={activities} />

      <SectionHeader
        title="Activity Feed"
        description="Chronological audit history for this organization."
      />

      <ActivityTimeline activities={activities} />
    </div>
  );
}
