export interface FindingEvidenceLink {
  id: string;
  findingId: string;
  /** References Evidence.id from the evidence feature. */
  evidenceId: string;
  /** Optional note on why this evidence supports the finding. */
  relevanceNote?: string;
}