export interface RecommendationComment {
  id: string;
  recommendationId: string;
  author: string;
  message: string;
  /** ISO date string. */
  createdAt: string;
}