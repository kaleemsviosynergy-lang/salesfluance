import { SearchCheck } from "lucide-react";

import { EmptyState } from "@/components/common";

export function FindingsEmptyState() {
  return (
    <EmptyState
      icon={SearchCheck}
      title="No Findings Yet"
      description="No findings have been identified for this assessment yet."
    />
  );
}