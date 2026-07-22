import type { OrganizationDetails } from "@/features/organizations/types/organization-details";

export const MOCK_ORGANIZATION_DETAILS: OrganizationDetails[] = [
  {
    id: "org_001",
    name: "Northwind Analytics",
    domain: "northwindanalytics.com",
    industry: "SaaS",
    employees: 240,
    country: "United States",
    readinessScore: 82,
    status: "active",
    primaryContact: "Priya Chandran",
    lastAssessedAt: "2026-07-02",
  },
  {
    id: "org_002",
    name: "Verity Capital Partners",
    domain: "veritycapital.com",
    industry: "Financial Services",
    employees: 1180,
    country: "United Kingdom",
    readinessScore: 64,
    status: "active",
    primaryContact: "Marcus Ellery",
    lastAssessedAt: "2026-06-28",
  },
];