export interface FindingComment {
  id: string;
  findingId: string;
  author: string;
  message: string;
  /** ISO date string. */
  createdAt: string;
}