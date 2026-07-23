import type { AssessmentQuestion } from "@/features/assessments/types/assessment-question";

export interface AssessmentSection {
  id: string;
  assessmentId: string;
  title: string;
  description?: string;
  /** Display order within the assessment, 1-based. */
  order: number;
  /** 0–100 completion percentage for this section. */
  progress: number;
  /** 0–100 section score, or null if not yet scoreable. */
  score: number | null;
  questions: AssessmentQuestion[];
}