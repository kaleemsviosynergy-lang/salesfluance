import { cn } from "@/lib/utils";

import type { Activity } from "../types";
import { ActivityCard } from "./ActivityCard";

interface ActivityTimelineProps {
  activities: Activity[];
  className?: string;
}

/**
 * ActivityTimeline
 *
 * Renders a chronological (most recent first) feed of ActivityCards.
 * Pure presentation — no filtering, grouping, or fetching. The parent
 * is responsible for supplying whatever slice of activities it wants
 * displayed.
 */
export function ActivityTimeline({ activities, className }: ActivityTimelineProps) {
  const sortedActivities = [...activities].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {sortedActivities.map((activity) => (
        <ActivityCard key={activity.id} activity={activity} />
      ))}
    </div>
  );
}
