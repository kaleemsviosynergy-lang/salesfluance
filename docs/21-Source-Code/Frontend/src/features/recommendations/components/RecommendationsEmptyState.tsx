import { Lightbulb } from "lucide-react";

import { EmptyState } from "@/components/common";

export function RecommendationsEmptyState() {
  return (
    <EmptyState
      icon={Lightbulb}
      title="No Recommendations Yet"
      description="No recommendations have been generated for this assessment yet."
    />
  );
}