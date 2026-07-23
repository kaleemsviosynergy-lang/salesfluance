export type EvidenceType = "document" | "link" | "image" | "spreadsheet";

export interface Evidence {
  id: string;
  questionId: string;
  type: EvidenceType;
  name: string;
  url: string;
  /** ISO date string. */
  uploadedAt: string;
}