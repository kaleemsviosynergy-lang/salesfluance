import { Users } from "lucide-react";

import { EmptyState } from "@/components/common";

export function ContactEmptyState() {
  return (
    <EmptyState
      icon={Users}
      title="No Contacts"
      description="This organization doesn't have any contacts yet."
    />
  );
}