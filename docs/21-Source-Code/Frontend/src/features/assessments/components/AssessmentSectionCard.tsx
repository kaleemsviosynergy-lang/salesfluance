import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { AssessmentSection } from "@/features/assessments/types/assessment-section";

interface AssessmentSectionCardProps {
  section: AssessmentSection;
}

function formatScore(score: number | null): string {
  return score !== null ? String(score) : "—";
}

/**
 * Reusable card representing a single assessment section (e.g. "Sales
 * Process", "CRM", "Finance"). Intentionally free of click handlers,
 * menus, and badges today — the root <Card> and its content are
 * structured so future navigation, a completion animation, a context
 * menu, an AI recommendation badge, or validation errors can be layered
 * on without reshaping this component.
 */
export function AssessmentSectionCard({ section }: AssessmentSectionCardProps) {
  const questionCount = section.questions.length;

  return (
    <Card>
      <CardContent className="flex flex-col gap-4 p-5">
        <div className="space-y-1">
          <h3 className="text-sm font-semibold text-foreground">
            {section.title}
          </h3>
          {section.description && (
            <p className="text-sm text-muted-foreground">
              {section.description}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wide text-muted-foreground">
            <span>Progress</span>
            <span className="tabular-nums text-foreground">
              {section.progress}%
            </span>
          </div>
          <Progress
            value={section.progress}
            aria-label={`Section progress: ${section.progress}%`}
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 border-t pt-4 text-xs text-muted-foreground">
          <span>
            {questionCount} {questionCount === 1 ? "question" : "questions"}
          </span>
          <span>
            Score{" "}
            <span className="font-medium tabular-nums text-foreground">
              {formatScore(section.score)}
            </span>
          </span>
        </div>
      </CardContent>
    </Card>
  );
}