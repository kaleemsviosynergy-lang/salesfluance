import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

interface OrganizationHeaderProps {
  /** Route to return to. Defaults to the Organizations list. */
  backHref?: string;
}

export function OrganizationHeader({
  backHref = "/organizations",
}: OrganizationHeaderProps) {
  return (
    <div className="flex items-center">
      <Button
        variant="ghost"
        size="sm"
        asChild
        className="-ml-2 gap-1.5 text-muted-foreground hover:text-foreground"
      >
        <Link to={backHref}>
          <ArrowLeft className="h-4 w-4" />
          Back to Organizations
        </Link>
      </Button>
    </div>
  );
}