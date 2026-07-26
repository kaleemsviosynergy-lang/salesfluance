import type { RecommendationAction } from "@/features/recommendations/types/recommendation-action";
import type { RecommendationComment } from "@/features/recommendations/types/recommendation-comment";

export type RecommendationStatus =
  | "planned"
  | "in-progress"
  | "completed"
  | "blocked"
  | "cancelled";

export type RecommendationPriority = "urgent" | "high" | "medium" | "low";

export type RecommendationImpact = "very-high" | "high" | "medium" | "low";

export type RecommendationEffort = "low" | "medium" | "high";

export interface Recommendation {
  id: string;
  organizationId: string;
  assessmentId: string;
  findingId: string;
  title: string;
  description: string;
  status: RecommendationStatus;
  priority: RecommendationPriority;
  impact: RecommendationImpact;
  effort: RecommendationEffort;
  owner: string;
  /** ISO date string, or null if no due date is set. */
  dueDate: string | null;
  /** ISO date string, or null if not yet completed. */
  completedDate: string | null;
  /** 0–100 completion percentage. */
  progress: number;
  /** Estimated cost to implement, in USD, or null if not yet estimated. */
  estimatedCost: number | null;
  /** Expected annual revenue impact, in USD, or null if not yet estimated. */
  expectedROI: number | null;
  /** ISO date string. */
  createdAt: string;
  /** ISO date string. */
  updatedAt: string;
  actions: RecommendationAction[];
  comments: RecommendationComment[];
}