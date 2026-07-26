import type { Recommendation } from "@/features/recommendations/types/recommendation";

interface RecommendationTimelineProps {
  recommendation: Recommendation;
}

interface TimelineEvent {
  id: string;
  label: string;
  actor: string;
  timestamp: string;
  description?: string;
}

function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function getCompletionLabel(status: Recommendation["status"]): string {
  if (status === "cancelled") return "Cancelled";
  if (status === "blocked") return "Blocked";
  return "Completed";
}

function buildTimelineEvents(recommendation: Recommendation): TimelineEvent[] {
  const events: TimelineEvent[] = [
    {
      id: `${recommendation.id}_created`,
      label: "Created",
      actor: recommendation.owner,
      timestamp: recommendation.createdAt,
    },
    ...recommendation.actions
      .filter((action) => action.completed && action.completedAt)
      .map((action) => ({
        id: `${action.id}_completed`,
        label: "Action Completed",
        actor: action.owner,
        timestamp: action.completedAt as string,
        description: action.title,
      })),
    ...recommendation.comments.map((comment) => ({
      id: comment.id,
      label: "Comment",
      actor: comment.author,
      timestamp: comment.createdAt,
      description: comment.message,
    })),
  ];

  if (recommendation.completedDate) {
    events.push({
      id: `${recommendation.id}_completed`,
      label: getCompletionLabel(recommendation.status),
      actor: recommendation.owner,
      timestamp: recommendation.completedDate,
    });
  }

  return [...events].sort(
    (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime(),
  );
}

/**
 * Chronological lifecycle timeline for a single recommendation — merges
 * creation, each completed action, every comment, and the completion
 * event (if any) into one ordered view. Distinct from the raw comment
 * list rendered in the Comments section.
 */
export function RecommendationTimeline({
  recommendation,
}: RecommendationTimelineProps) {
  const events = buildTimelineEvents(recommendation);

  return (
    <ol className="flex flex-col gap-4">
      {events.map((event, index) => (
        <li key={event.id} className="flex gap-3">
          <div className="flex flex-col items-center pt-1">
            <span
              className="h-2 w-2 shrink-0 rounded-full bg-primary"
              aria-hidden="true"
            />
            {index < events.length - 1 && (
              <span className="mt-1 w-px flex-1 bg-border" aria-hidden="true" />
            )}
          </div>
          <div className="min-w-0 flex-1 pb-2">
            <div className="flex flex-wrap items-baseline gap-2">
              <p className="text-sm font-medium text-foreground">
                {event.label}
              </p>
              <p className="text-xs text-muted-foreground">
                {event.actor} · {formatDate(event.timestamp)}
              </p>
            </div>
            {event.description && (
              <p className="mt-0.5 text-sm text-muted-foreground">
                {event.description}
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}