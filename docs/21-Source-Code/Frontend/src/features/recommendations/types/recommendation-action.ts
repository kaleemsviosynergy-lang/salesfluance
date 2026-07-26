export interface RecommendationAction {
  id: string;
  recommendationId: string;
  title: string;
  description?: string;
  completed: boolean;
  /** ISO date string, or null if not yet completed. */
  completedAt: string | null;
  owner: string;
  /** Display order within the recommendation, 1-based. */
  order: number;
}