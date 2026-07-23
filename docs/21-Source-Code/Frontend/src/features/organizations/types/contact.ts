export type ContactStatus = "active" | "inactive";

export interface Contact {
  id: string;
  organizationId: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  email: string;
  phone: string;
  department: string;
  status: ContactStatus;
  isPrimary: boolean;
  /** ISO date string of the most recent contact/interaction. */
  lastContactedAt: string;
  /** Optional avatar image URL. Falls back to initials when absent. */
  avatar?: string;
}