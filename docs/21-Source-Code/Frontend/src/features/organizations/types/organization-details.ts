import type { OrganizationStatus } from "./types";

export interface OrganizationDetails {
  id: string;
  name: string;
  domain: string;
  industry: string;
  employees: number;
  country: string;
  readinessScore: number;
  status: OrganizationStatus;
  primaryContact: string;
  lastAssessedAt: string;
}