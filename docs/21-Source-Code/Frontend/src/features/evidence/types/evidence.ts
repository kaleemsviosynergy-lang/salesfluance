import type { EvidenceComment } from "@/features/evidence/types/evidence-comment";
import type { EvidenceFile } from "@/features/evidence/types/evidence-file";

export type EvidenceStatus = "pending" | "under-review" | "approved" | "rejected";

export type EvidenceType =
  | "document"
  | "screenshot"
  | "data-export"
  | "interview-notes"
  | "system-report"
  | "other";

export interface Evidence {
  id: string;
  organizationId: string;
  assessmentId: string;
  questionId: string;
  title: string;
  description: string;
  type: EvidenceType;
  status: EvidenceStatus;
  /** 0–100 quality score, or null if not yet scored. */
  qualityScore: number | null;
  submittedBy: string;
  /** ISO date string. */
  submittedAt: string;
  reviewedBy: string | null;
  /** ISO date string, or null if not yet reviewed. */
  reviewedAt: string | null;
  files: EvidenceFile[];
  comments: EvidenceComment[];
}