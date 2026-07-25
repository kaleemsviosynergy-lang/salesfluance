import { Card, CardContent } from "@/components/ui/card";
import { EvidenceFileCard } from "@/features/evidence/components/EvidenceFileCard";
import { EvidenceScore } from "@/features/evidence/components/EvidenceScore";
import { EvidenceStatusBadge } from "@/features/evidence/components/EvidenceStatusBadge";
import { EvidenceTimeline } from "@/features/evidence/components/EvidenceTimeline";
import { EvidenceTypeBadge } from "@/features/evidence/components/EvidenceTypeBadge";
import type { Evidence } from "@/features/evidence/types/evidence";

interface EvidenceCardProps {
  evidence: Evidence;
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
 * Presentational card for a single evidence record. Nests its own Files
 * and Comments sections directly beneath the record's core details, per
 * the Evidence tab's card → files → comments layout.
 */
export function EvidenceCard({ evidence }: EvidenceCardProps) {
  return (
    <Card>
      <CardContent className="flex flex-col gap-5 p-5 sm:p-6">
        <div className="space-y-2">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <h3 className="text-sm font-semibold text-foreground">
              {evidence.title}
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              <EvidenceTypeBadge type={evidence.type} />
              <EvidenceStatusBadge status={evidence.status} />
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            {evidence.description}
          </p>
        </div>

        <EvidenceScore score={evidence.qualityScore} />

        <dl className="grid grid-cols-2 gap-x-6 gap-y-3 border-t pt-4 sm:grid-cols-4">
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Submitted By
            </dt>
            <dd className="mt-1 text-sm text-foreground">
              {evidence.submittedBy}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Submitted
            </dt>
            <dd className="mt-1 text-sm text-foreground">
              {formatDate(evidence.submittedAt)}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Reviewed By
            </dt>
            <dd className="mt-1 text-sm text-foreground">
              {evidence.reviewedBy ?? "—"}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Reviewed
            </dt>
            <dd className="mt-1 text-sm text-foreground">
              {formatDate(evidence.reviewedAt)}
            </dd>
          </div>
        </dl>

        {evidence.files.length > 0 && (
          <div className="space-y-2 border-t pt-4">
            <h4 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Files
            </h4>
            <div className="flex flex-col gap-2">
              {evidence.files.map((file) => (
                <EvidenceFileCard key={file.id} file={file} />
              ))}
            </div>
          </div>
        )}

        {evidence.comments.length > 0 && (
          <div className="space-y-2 border-t pt-4">
            <h4 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Comments
            </h4>
            <EvidenceTimeline comments={evidence.comments} />
          </div>
        )}
      </CardContent>
    </Card>
  );
}