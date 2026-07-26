import type { Finding } from "@/features/findings/types/finding";

interface FindingTimelineProps {
  finding: Finding;
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

function getResolvedLabel(status: Finding["status"]): string {
  return status === "dismissed" ? "Dismissed" : "Resolved";
}

function buildTimelineEvents(finding: Finding): TimelineEvent[] {
  const events: TimelineEvent[] = [
    {
      id: `${finding.id}_identified`,
      label: "Identified",
      actor: finding.identifiedBy,
      timestamp: finding.identifiedAt,
    },
    ...finding.comments.map((comment) => ({
      id: comment.id,
      label: "Comment",
      actor: comment.author,
      timestamp: comment.createdAt,
      description: comment.message,
    })),
  ];

  if (finding.resolvedAt) {
    events.push({
      id: `${finding.id}_resolved`,
      label: getResolvedLabel(finding.status),
      actor: finding.identifiedBy,
      timestamp: finding.resolvedAt,
    });
  }

  return [...events].sort(
    (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime(),
  );
}

/**
 * Chronological lifecycle timeline for a single finding — distinct from
 * the raw comment list, this combines the identified event, every
 * comment, and the resolved/dismissed event (if any) into one ordered
 * view.
 */
export function FindingTimeline({ finding }: FindingTimelineProps) {
  const events = buildTimelineEvents(finding);

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