import type { FindingComment } from "@/features/findings/types/finding-comment";
import type { FindingEvidenceLink } from "@/features/findings/types/finding-evidence";

export type FindingStatus = "open" | "in-review" | "resolved" | "dismissed";

export type FindingSeverity = "critical" | "high" | "medium" | "low";

export type FindingPriority = "urgent" | "high" | "normal" | "low";

export interface Finding {
  id: string;
  organizationId: string;
  assessmentId: string;
  sectionId: string;
  questionId: string;
  title: string;
  description: string;
  status: FindingStatus;
  severity: FindingSeverity;
  priority: FindingPriority;
  /** 0–100 confidence score, or null if not yet scored. */
  confidenceScore: number | null;
  identifiedBy: string;
  /** ISO date string. */
  identifiedAt: string;
  /** ISO date string, or null if unresolved. */
  resolvedAt: string | null;
  evidence: FindingEvidenceLink[];
  comments: FindingComment[];
}