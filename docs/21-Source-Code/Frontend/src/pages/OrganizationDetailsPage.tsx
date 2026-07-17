import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Building2, Globe, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { MOCK_ORGANIZATION_DETAILS } from "@/features/organizations/data/organization-details.mock";

export default function OrganizationDetailsPage() {
  const { organizationId } = useParams();

  const organization = MOCK_ORGANIZATION_DETAILS.find(
    (org) => org.id === organizationId
  );

  if (!organization) {
    return (
      <div className="mx-auto max-w-6xl p-8">
        <Button asChild variant="outline">
          <Link to="/organizations">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Organizations
          </Link>
        </Button>

        <Card className="mt-6">
          <CardContent className="flex flex-col items-center py-16">
            <Building2 className="mb-4 h-14 w-14 text-muted-foreground" />

            <h2 className="text-3xl font-bold">
              Organization Not Found
            </h2>

            <p className="mt-2 text-muted-foreground">
              The organization you requested does not exist.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl p-8">

      <Button asChild variant="outline">
        <Link to="/organizations">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Organizations
        </Link>
      </Button>

      <div className="mt-8">

        <h1 className="text-4xl font-bold">
          {organization.name}
        </h1>

        <p className="mt-2 text-lg text-muted-foreground">
          {organization.domain}
        </p>

      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <Card>
          <CardHeader>
            <CardTitle>Company Overview</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">

            <div className="flex items-center gap-3">
              <Globe className="h-5 w-5 text-muted-foreground" />
              <span>{organization.country}</span>
            </div>

            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-muted-foreground" />
              <span>{organization.employees.toLocaleString()} Employees</span>
            </div>

            <div>
              <strong>Industry:</strong> {organization.industry}
            </div>

            <div>
              <strong>Status:</strong> {organization.status}
            </div>

            <div>
              <strong>Primary Contact:</strong>{" "}
              {organization.primaryContact}
            </div>

            <div>
              <strong>Revenue Readiness Score:</strong>{" "}
              {organization.readinessScore}/100
            </div>

          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Assessment Summary</CardTitle>
          </CardHeader>

          <CardContent>

            <p className="text-muted-foreground">
              This panel will contain:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Latest Assessment</li>
              <li>Evidence</li>
              <li>Findings</li>
              <li>AI Recommendations</li>
              <li>Activity Timeline</li>
            </ul>

          </CardContent>
        </Card>

      </div>

    </div>
  );
}