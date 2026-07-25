export interface EvidenceComment {
  id: string;
  evidenceId: string;
  author: string;
  message: string;
  /** ISO date string. */
  createdAt: string;
}