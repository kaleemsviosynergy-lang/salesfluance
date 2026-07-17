import { Plus, Search, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { INDUSTRIES, STATUSES } from "../data/mock-data";

import type {
  OrganizationFilters,
  OrganizationStatus,
} from "../types/types";

const STATUS_LABELS: Record<OrganizationStatus, string> = {
  active: "Active",
  onboarding: "Onboarding",
  "at-risk": "At Risk",
  churned: "Churned",
};

interface OrganizationsToolbarProps {
  filters: OrganizationFilters;
  onFiltersChange: (filters: OrganizationFilters) => void;
  onAddOrganization: () => void;
}

export function OrganizationsToolbar({
  filters,
  onFiltersChange,
  onAddOrganization,
}: OrganizationsToolbarProps) {
  const hasActiveFilters =
    filters.search !== "" || filters.industry !== "all" || filters.status !== "all";

  const handleReset = () => {
    onFiltersChange({ search: "", industry: "all", status: "all" });
  };

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative w-full sm:max-w-xs">
          <Search className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={filters.search}
            onChange={(event) =>
              onFiltersChange({ ...filters, search: event.target.value })
            }
            placeholder="Search organizations..."
            className="pl-8"
            aria-label="Search organizations"
          />
        </div>

        <Select
          value={filters.industry}
          onValueChange={(value) =>
            onFiltersChange({
              ...filters,
              industry: value as OrganizationFilters["industry"],
            })
          }
        >
          <SelectTrigger className="w-full sm:w-44" aria-label="Filter by industry">
            <SelectValue placeholder="Industry" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All industries</SelectItem>
            {INDUSTRIES.map((industry) => (
              <SelectItem key={industry} value={industry}>
                {industry}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={filters.status}
          onValueChange={(value) =>
            onFiltersChange({
              ...filters,
              status: value as OrganizationFilters["status"],
            })
          }
        >
          <SelectTrigger className="w-full sm:w-40" aria-label="Filter by status">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All statuses</SelectItem>
            {STATUSES.map((status) => (
              <SelectItem key={status} value={status}>
                {STATUS_LABELS[status]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleReset}
            className="gap-1.5 text-muted-foreground"
          >
            <X className="h-3.5 w-3.5" />
            Clear
          </Button>
        )}
      </div>

      <Button onClick={onAddOrganization} className="gap-1.5 sm:w-auto">
        <Plus className="h-4 w-4" />
        Add Organization
      </Button>
    </div>
  );
}
