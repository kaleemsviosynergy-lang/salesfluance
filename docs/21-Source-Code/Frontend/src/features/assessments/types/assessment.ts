import type { AssessmentSection } from "@/features/assessments/types/assessment-section";

export type AssessmentStatus =
  | "not-started"
  | "in-progress"
  | "completed"
  | "overdue";

export interface Assessment {
  id: string;
  organizationId: string;
  title: string;
  description: string;
  status: AssessmentStatus;
  /** 0–100 overall completion percentage. */
  progress: number;
  /** 0–100 overall Revenue Readiness score, or null if not yet scoreable. */
  overallScore: number | null;
  owner: string;
  /** ISO date string, or null if the assessment hasn't started. */
  startedAt: string | null;
  /** ISO date string, or null if the assessment isn't complete. */
  completedAt: string | null;
  /** ISO date string of the most recent update. */
  lastUpdatedAt: string;
  sections: AssessmentSection[];
}