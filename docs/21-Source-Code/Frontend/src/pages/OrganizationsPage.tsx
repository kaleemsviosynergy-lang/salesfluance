import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { PageHeader } from "@/components/common";
import { Card } from "@/components/ui/card";
import {
  MOCK_ORGANIZATIONS,
  OrganizationsEmptyState,
  OrganizationsPagination,
  OrganizationsTable,
  OrganizationsToolbar,
} from "@/features/organizations";
import type {
  Organization,
  OrganizationFilters,
} from "@/features/organizations";
import { info } from "@/lib/toast";

const DEFAULT_FILTERS: OrganizationFilters = {
  search: "",
  industry: "all",
  status: "all",
};

const DEFAULT_PAGE_SIZE = 10;

function matchesFilters(
  organization: Organization,
  filters: OrganizationFilters,
): boolean {
  const search = filters.search.trim().toLowerCase();

  const matchesSearch =
    search === "" ||
    organization.name.toLowerCase().includes(search) ||
    organization.domain.toLowerCase().includes(search) ||
    organization.primaryContact.toLowerCase().includes(search);

  const matchesIndustry =
    filters.industry === "all" || organization.industry === filters.industry;

  const matchesStatus =
    filters.status === "all" || organization.status === filters.status;

  return matchesSearch && matchesIndustry && matchesStatus;
}

export default function OrganizationsPage() {
  const navigate = useNavigate();

  const [filters, setFilters] = useState<OrganizationFilters>(DEFAULT_FILTERS);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);

  const filteredOrganizations = useMemo(
    () =>
      MOCK_ORGANIZATIONS.filter((organization) =>
        matchesFilters(organization, filters),
      ),
    [filters],
  );

  const totalPages = Math.max(
    1,
    Math.ceil(filteredOrganizations.length / pageSize),
  );
  const currentPage = Math.min(page, totalPages);

  const visibleOrganizations = filteredOrganizations.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  const hasActiveFilters =
    filters.search !== "" ||
    filters.industry !== "all" ||
    filters.status !== "all";

  const handleFiltersChange = (next: OrganizationFilters) => {
    setFilters(next);
    setPage(1);
  };

  const handlePageSizeChange = (next: number) => {
    setPageSize(next);
    setPage(1);
  };

  const handleView = (organization: Organization) => {
    navigate(`/organizations/${organization.id}`);
  };

  // Create / edit / remove flows are not built yet (no dialogs or API layer).
  const handleAdd = () => info("Adding organizations isn't available yet.");
  const handleEdit = () => info("Editing organizations isn't available yet.");
  const handleDelete = () =>
    info("Removing organizations isn't available yet.");

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
      <PageHeader
        title="Organizations"
        description="Every organization tracked for Revenue Readiness."
      />

      <OrganizationsToolbar
        filters={filters}
        onFiltersChange={handleFiltersChange}
        onAddOrganization={handleAdd}
      />

      <Card className="overflow-hidden p-0">
        {filteredOrganizations.length === 0 ? (
          <OrganizationsEmptyState
            hasActiveFilters={hasActiveFilters}
            onAddOrganization={handleAdd}
            onClearFilters={() => handleFiltersChange(DEFAULT_FILTERS)}
          />
        ) : (
          <>
            <OrganizationsTable
              organizations={visibleOrganizations}
              onView={handleView}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
            <OrganizationsPagination
              page={currentPage}
              pageSize={pageSize}
              totalItems={filteredOrganizations.length}
              onPageChange={setPage}
              onPageSizeChange={handlePageSizeChange}
            />
          </>
        )}
      </Card>
    </div>
  );
}
