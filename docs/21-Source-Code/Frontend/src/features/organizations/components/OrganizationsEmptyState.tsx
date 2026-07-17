import { Building2, Plus, SearchX } from "lucide-react";

import { Button } from "@/components/ui/button";

interface OrganizationsEmptyStateProps {
  hasActiveFilters: boolean;
  onAddOrganization: () => void;
  onClearFilters: () => void;
}

export function OrganizationsEmptyState({
  hasActiveFilters,
  onAddOrganization,
  onClearFilters,
}: OrganizationsEmptyStateProps) {
  if (hasActiveFilters) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 px-6 py-16 text-center">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-muted">
          <SearchX className="h-5 w-5 text-muted-foreground" />
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium text-foreground">No organizations match your filters</p>
          <p className="text-sm text-muted-foreground">
            Try a different search term or clear your filters.
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={onClearFilters}>
          Clear filters
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-3 px-6 py-16 text-center">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-muted">
        <Building2 className="h-5 w-5 text-muted-foreground" />
      </div>
      <div className="space-y-1">
        <p className="text-sm font-medium text-foreground">No organizations yet</p>
        <p className="text-sm text-muted-foreground">
          Add your first organization to start tracking Revenue Readiness.
        </p>
      </div>
      <Button size="sm" onClick={onAddOrganization} className="gap-1.5">
        <Plus className="h-4 w-4" />
        Add Organization
      </Button>
    </div>
  );
}
