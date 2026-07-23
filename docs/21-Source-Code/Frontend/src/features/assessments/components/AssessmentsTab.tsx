import { LoadingState, SectionHeader } from "@/components/common";
import { AssessmentEmptyState } from "@/features/assessments/components/AssessmentEmptyState";
import { AssessmentHero } from "@/features/assessments/components/AssessmentHero";
import { AssessmentSectionCard } from "@/features/assessments/components/AssessmentSectionCard";
import type { Assessment } from "@/features/assessments/types/assessment";

interface AssessmentsTabProps {
  assessments: Assessment[];
  isLoading?: boolean;
}

/**
 * Presentational assessment dashboard for the Organization Details page.
 * Today it renders the first assessment as the "active" one. This is
 * intentionally the only place that notion lives, so multiple-assessment
 * support, an assessment switcher (rendered via AssessmentCard), filtering,
 * searching, or a "Start/Continue Assessment" action can be added later by
 * extending this component without reshaping AssessmentHero or
 * AssessmentSectionCard.
 */
export function AssessmentsTab({
  assessments,
  isLoading = false,
}: AssessmentsTabProps) {
  if (isLoading) {
    return (
      <div className="flex flex-col gap-6">
        <SectionHeader title="Assessments" />
        <LoadingState rows={4} />
      </div>
    );
  }

  if (assessments.length === 0) {
    return (
      <div className="flex flex-col gap-6">
        <SectionHeader title="Assessments" />
        <AssessmentEmptyState />
      </div>
    );
  }

  const activeAssessment = assessments[0];

  return (
    <div className="flex flex-col gap-6">
      <AssessmentHero assessment={activeAssessment} />

      <section className="flex flex-col gap-6">
        <SectionHeader
          title="Assessment Sections"
          description="Complete each section to improve Revenue Readiness."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {activeAssessment.sections.map((section) => (
            <AssessmentSectionCard key={section.id} section={section} />
          ))}
        </div>
      </section>
    </div>
  );
}