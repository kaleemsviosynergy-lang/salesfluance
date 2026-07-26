import type { ActivityActor } from "./activity-actor";
import type { ActivityMetadata } from "./activity-metadata";

/**
 * Canonical set of Activity event types tracked across the FLUANZ
 * platform. New entity-driven events should be added here.
 */
export type ActivityType =
  | "assessment_created"
  | "assessment_updated"
  | "assessment_completed"
  | "evidence_uploaded"
  | "evidence_approved"
  | "evidence_rejected"
  | "finding_created"
  | "finding_updated"
  | "finding_resolved"
  | "recommendation_created"
  | "recommendation_updated"
  | "recommendation_completed"
  | "contact_added"
  | "contact_updated"
  | "organization_updated"
  | "comment_added";

export interface Activity {
  id: string;
  organizationId: string;
  type: ActivityType;
  title: string;
  description: string;
  actor: ActivityActor;
  createdAt: string;
  metadata: ActivityMetadata;
}
