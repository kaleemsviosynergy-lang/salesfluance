import { Card, CardContent } from "@/components/ui/card";
import { FindingCommentCard } from "@/features/findings/components/FindingCommentCard";
import { FindingConfidence } from "@/features/findings/components/FindingConfidence";
import { FindingEvidenceCard } from "@/features/findings/components/FindingEvidenceCard";
import { FindingPriorityBadge } from "@/features/findings/components/FindingPriorityBadge";
import { FindingSeverityBadge } from "@/features/findings/components/FindingSeverityBadge";
import { FindingStatusBadge } from "@/features/findings/components/FindingStatusBadge";
import { FindingTimeline } from "@/features/findings/components/FindingTimeline";
import type { Finding } from "@/features/findings/types/finding";

interface FindingCardProps {
  finding: Finding;
}

function formatDate(isoDate: string | null): string {
  if (!isoDate) {
    return "—";
  }

  return new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/**
 * Presentational card for a single finding. Nests its own Evidence,
 * Comments, and Timeline sections beneath the finding's core details,
 * per the Findings tab's card → evidence → comments → timeline layout.
 */
export function FindingCard({ finding }: FindingCardProps) {
  return (
    <Card>
      <CardContent className="flex flex-col gap-5 p-5 sm:p-6">
        <div className="space-y-2">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <h3 className="text-sm font-semibold text-foreground">
              {finding.title}
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              <FindingSeverityBadge severity={finding.severity} />
              <FindingPriorityBadge priority={finding.priority} />
              <FindingStatusBadge status={finding.status} />
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            {finding.description}
          </p>
        </div>

        <FindingConfidence score={finding.confidenceScore} />

        <dl className="grid grid-cols-2 gap-x-6 gap-y-3 border-t pt-4 sm:grid-cols-3">
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Identified By
            </dt>
            <dd className="mt-1 text-sm text-foreground">
              {finding.identifiedBy}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Identified
            </dt>
            <dd className="mt-1 text-sm text-foreground">
              {formatDate(finding.identifiedAt)}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Resolved
            </dt>
            <dd className="mt-1 text-sm text-foreground">
              {formatDate(finding.resolvedAt)}
            </dd>
          </div>
        </dl>

        {finding.evidence.length > 0 && (
          <div className="space-y-2 border-t pt-4">
            <h4 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Evidence
            </h4>
            <div className="flex flex-col gap-2">
              {finding.evidence.map((evidenceLink) => (
                <FindingEvidenceCard
                  key={evidenceLink.id}
                  evidenceLink={evidenceLink}
                />
              ))}
            </div>
          </div>
        )}

        {finding.comments.length > 0 && (
          <div className="space-y-3 border-t pt-4">
            <h4 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Comments
            </h4>
            <div className="flex flex-col gap-4">
              {finding.comments.map((comment) => (
                <FindingCommentCard key={comment.id} comment={comment} />
              ))}
            </div>
          </div>
        )}

        <div className="space-y-2 border-t pt-4">
          <h4 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Timeline
          </h4>
          <FindingTimeline finding={finding} />
        </div>
      </CardContent>
    </Card>
  );
}