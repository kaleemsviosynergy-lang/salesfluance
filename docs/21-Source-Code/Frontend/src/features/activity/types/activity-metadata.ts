/**
 * Flexible, cross-referencing metadata payload attached to an Activity.
 * Only the fields relevant to the originating entity are populated.
 */
export interface ActivityMetadata {
  assessmentId?: string;
  evidenceId?: string;
  findingId?: string;
  recommendationId?: string;
  contactId?: string;

  // Denormalized display fields to avoid extra lookups in the UI.
  assessmentName?: string;
  evidenceName?: string;
  findingTitle?: string;
  recommendationTitle?: string;
  contactName?: string;

  // Optional change tracking for update-style events.
  previousValue?: string;
  newValue?: string;
  fieldChanged?: string;

  [key: string]: string | undefined;
}
