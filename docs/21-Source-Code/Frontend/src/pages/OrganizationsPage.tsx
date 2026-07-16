import { useEffect, useMemo, useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  MOCK_ORGANIZATIONS,
  OrganizationsEmptyState,
  OrganizationsPagination,
  OrganizationsTable,
  OrganizationsTableSkeleton,
  OrganizationsToolbar,
} from "@/components/organizations";
import type { Organization, OrganizationFilters } from "@/components/organizations";

const DEFAULT_FILTERS: OrganizationFilters = {
  search: "",
  industry: "all",
  status: "all",
};

const DEFAULT_PAGE_SIZE = 10;

// Simulated network latency for the mock data fetch. Replace with a real
// data-fetching hook (React Query, SWR, etc.) when the API is available.
const MOCK_FETCH_DELAY_MS = 700;

export default function OrganizationsPage() {
  const [organizations, setOrganizations] = useState<Organization[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState<OrganizationFilters>(DEFAULT_FILTERS);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setOrganizations(MOCK_ORGANIZATIONS);
      setIsLoading(false);
    }, MOCK_FETCH_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  const filteredOrganizations = useMemo(() => {
    if (!organizations) return [];

    const search = filters.search.trim().toLowerCase();

    return organizations.filter((organization) => {
      const matchesSearch =
        search.length === 0 ||
        organization.name.toLowerCase().includes(search) ||
        organization.domain.toLowerCase().includes(search) ||
        organization.primaryContact.toLowerCase().includes(search);

      const matchesIndustry =
        filters.industry === "all" || organization.industry === filters.industry;

      const matchesStatus =
        filters.status === "all" || organization.status === filters.status;

      return matchesSearch && matchesIndustry && matchesStatus;
    });
  }, [organizations, filters]);

  const totalPages = Math.max(1, Math.ceil(filteredOrganizations.length / pageSize));
  const currentPage = Math.min(page, totalPages);

  const paginatedOrganizations = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredOrganizations.slice(start, start + pageSize);
  }, [filteredOrganizations, currentPage, pageSize]);

  const hasActiveFilters =
    filters.search !== "" || filters.industry !== "all" || filters.status !== "all";

  const handleFiltersChange = (nextFilters: OrganizationFilters) => {
    setFilters(nextFilters);
    setPage(1);
  };

  const handlePageSizeChange = (nextPageSize: number) => {
    setPageSize(nextPageSize);
    setPage(1);
  };

  // Mock action handlers — wire these up to real navigation / mutations
  // once the backend integration for Organizations is available.
  const handleAddOrganization = () => {
    console.log("Add organization clicked");
  };

  const handleView = (organization: Organization) => {
    console.log("View organization", organization.id);
  };

  const handleEdit = (organization: Organization) => {
    console.log("Edit organization", organization.id);
  };

  const handleDelete = (organization: Organization) => {
    console.log("Remove organization", organization.id);
  };

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Organizations
        </h1>
        <p className="text-sm text-muted-foreground">
          Manage the organizations FLUANZ evaluates for Revenue Readiness.
        </p>
      </div>

      <OrganizationsToolbar
        filters={filters}
        onFiltersChange={handleFiltersChange}
        onAddOrganization={handleAddOrganization}
      />

      <Card className="overflow-hidden py-0">
        <CardContent className="p-0">
          {isLoading ? (
            <OrganizationsTableSkeleton />
          ) : paginatedOrganizations.length === 0 ? (
            <OrganizationsEmptyState
              hasActiveFilters={hasActiveFilters}
              onAddOrganization={handleAddOrganization}
              onClearFilters={() => handleFiltersChange(DEFAULT_FILTERS)}
            />
          ) : (
            <>
              <div className="overflow-x-auto">
                <OrganizationsTable
                  organizations={paginatedOrganizations}
                  onView={handleView}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              </div>
              <OrganizationsPagination
                page={currentPage}
                pageSize={pageSize}
                totalItems={filteredOrganizations.length}
                onPageChange={setPage}
                onPageSizeChange={handlePageSizeChange}
              />
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
