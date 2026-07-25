export type EvidenceFileType =
  | "pdf"
  | "image"
  | "spreadsheet"
  | "document"
  | "presentation"
  | "other";

export interface EvidenceFile {
  id: string;
  evidenceId: string;
  fileName: string;
  fileType: EvidenceFileType;
  fileSizeBytes: number;
  url: string;
  uploadedBy: string;
  /** ISO date string. */
  uploadedAt: string;
}