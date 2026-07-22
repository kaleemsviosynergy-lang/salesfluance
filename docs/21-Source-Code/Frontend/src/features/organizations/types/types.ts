/**
 * Organization lifecycle status.
 */
export type OrganizationStatus =
  | "active"
  | "onboarding"
  | "at-risk"
  | "churned";

/**
 * Supported organization industries.
 */
export type Industry =
  | "SaaS"
  | "Financial Services"
  | "Healthcare"
  | "Manufacturing"
  | "Retail & E-commerce"
  | "Professional Services"
  | "Logistics";

/**
 * Organization record shown in the Organizations list.
 */
export interface Organization {
  id: string;
  name: string;
  domain: string;
  industry: Industry;
  employees: number;
  country: string;

  /**
   * Revenue Readiness Score (0–100)
   */
  readinessScore: number;

  status: OrganizationStatus;

  primaryContact: string;

  /**
   * ISO 8601 date
   * Example: 2026-07-18
   */
  lastAssessmentDate: string;
}

/**
 * Organization table filters.
 */
export interface OrganizationFilters {
  search: string;
  industry: Industry | "all";
  status: OrganizationStatus | "all";
}