export type OrganizationStatus = "active" | "onboarding" | "at-risk" | "churned";

export type Industry =
  | "SaaS"
  | "Financial Services"
  | "Healthcare"
  | "Manufacturing"
  | "Retail & E-commerce"
  | "Professional Services"
  | "Logistics";

export interface Organization {
  id: string;
  name: string;
  domain: string;
  industry: Industry;
  employees: number;
  country: string;
  readinessScore: number; // 0–100
  status: OrganizationStatus;
  primaryContact: string;
  lastAssessmentDate: string; // ISO date
}

export interface OrganizationFilters {
  search: string;
  industry: Industry | "all";
  status: OrganizationStatus | "all";
}
