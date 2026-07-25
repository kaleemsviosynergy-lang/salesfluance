import { FileSearch } from "lucide-react";

import { EmptyState } from "@/components/common";

export function EvidenceEmptyState() {
  return (
    <EmptyState
      icon={FileSearch}
      title="No Evidence Yet"
      description="No evidence has been submitted for this assessment yet."
    />
  );
}