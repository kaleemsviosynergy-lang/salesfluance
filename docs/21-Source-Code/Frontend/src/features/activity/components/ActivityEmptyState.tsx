import { History } from "lucide-react";

import { EmptyState } from "@/components/common";

/**
 * Empty state shown when an organization has no activity yet.
 */
export function ActivityEmptyState() {
  return (
    <EmptyState
      icon={History}
      title="No activity yet"
      description="No audit history exists for this organization."
    />
  );
}