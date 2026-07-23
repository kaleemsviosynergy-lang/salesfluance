import { ClipboardList } from "lucide-react";

import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/common";

export function AssessmentEmptyState() {
  return (
    <EmptyState
      icon={ClipboardList}
      title="No assessments found"
      description="This organization has not started a Revenue Readiness Assessment yet."
      action={
        <Button type="button" disabled>
          Start Assessment
        </Button>
      }
    />
  );
}