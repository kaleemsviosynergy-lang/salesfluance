/**
 * ActivityActor
 *
 * Represents the entity (human user or system process) responsible for
 * generating an activity/audit entry within FLUANZ.
 */

export type ActivityActorType = 'user' | 'system' | 'integration';

export interface ActivityActor {
  /** Unique identifier of the actor (userId, service name, or integration id) */
  id: string;

  /** Display name of the actor, e.g. "Sarah Chen" or "FLUANZ Automation" */
  name: string;

  /** Classification of the actor */
  type: ActivityActorType;

  /** Email address, present for human users */
  email?: string;

  /** Avatar/profile image URL, present for human users */
  avatarUrl?: string;

  /** Role/title of the actor at the time the activity occurred, e.g. "Compliance Lead" */
  role?: string;
}
