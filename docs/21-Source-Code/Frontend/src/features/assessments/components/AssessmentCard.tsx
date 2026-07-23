import { Card, CardContent } from "@/components/ui/card";
import { AssessmentProgress } from "@/features/assessments/components/AssessmentProgress";
import { AssessmentStatusBadge } from "@/features/assessments/components/AssessmentStatusBadge";
import type { Assessment } from "@/features/assessments/types/assessment";

interface AssessmentCardProps {
  assessment: Assessment;
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
 * Reusable card representing a single assessment. Intentionally free of
 * routing, click handlers, and menus today — the root <Card> and its
 * content are structured so a future onClick, context menu, or selection
 * control can be layered on without reshaping this component.
 */
export function AssessmentCard({ assessment }: AssessmentCardProps) {
  const sectionCount = assessment.sections.length;

  return (
    <Card>
      <CardContent className="flex flex-col gap-4 p-5">
        <div className="space-y-2">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <h3 className="text-sm font-semibold text-foreground">
              {assessment.title}
            </h3>
            <AssessmentStatusBadge status={assessment.status} />
          </div>
          <p className="text-sm text-muted-foreground">
            {assessment.description}
          </p>
        </div>

        <div className="space-y-3 border-t pt-4">
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Owner
            </dt>
            <dd className="mt-1 text-sm text-foreground">{assessment.owner}</dd>
          </div>

          <AssessmentProgress
            progress={assessment.progress}
            overallScore={assessment.overallScore}
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 border-t pt-4 text-xs text-muted-foreground">
          <span>
            {sectionCount} {sectionCount === 1 ? "section" : "sections"}
          </span>
          <span>Updated {formatDate(assessment.lastUpdatedAt)}</span>
        </div>
      </CardContent>
    </Card>
  );
}