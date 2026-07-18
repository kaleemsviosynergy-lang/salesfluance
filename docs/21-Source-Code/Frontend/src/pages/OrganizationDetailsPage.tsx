import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Building2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MOCK_ORGANIZATION_DETAILS } from "@/features/organizations/data/organization-details.mock";
import {
  OrganizationHeader,
  OrganizationHero,
  OrganizationTabs,
} from "@/features/organizations/details/components";;

export default function OrganizationDetailsPage() {
  const { organizationId } = useParams<{ organizationId: string }>();


const organization = MOCK_ORGANIZATION_DETAILS.find(
  (org) => org.id === organizationId
);

  if (!organization) {
    return (
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-8">
        <Card>
          <CardContent className="flex flex-col items-center justify-center gap-3 py-16 text-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-muted">
              <Building2 className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-foreground">
                Organization not found
              </p>
              <p className="text-sm text-muted-foreground">
                We couldn&apos;t find an organization matching this link.
              </p>
            </div>
            <Button variant="outline" size="sm" asChild className="gap-1.5">
              <Link to="/organizations">
                <ArrowLeft className="h-4 w-4" />
                Back to Organizations
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-8">
      <OrganizationHeader />
      <OrganizationHero organization={organization} />
      <OrganizationTabs organization={organization} />
    </div>
  );
}