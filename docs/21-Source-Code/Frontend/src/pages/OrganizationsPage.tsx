import { Link, useParams } from "react-router-dom";

import { ArrowLeft, Building2, Globe, Users } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { MOCK_ORGANIZATION_DETAILS } from "@/features/organizations/data/organization-details.mock";

export default function OrganizationDetailsPage() {
  const { organizationId } = useParams();

  const organization = MOCK_ORGANIZATION_DETAILS.find(
    (org) => org.id === organizationId
  );

  if (!organization) {
    return (
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-8">
        <Link to="/organizations">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Organizations
          </Button>
        </Link>

        <Card>
          <CardContent className="flex flex-col items-center justify-center py-20 text-center">
            <Building2 className="mb-4 h-14 w-14 text-muted-foreground" />

            <h2 className="text-2xl font-semibold">
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
    <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8">
      {/* Back Button */}

      <Link to="/organizations">
        <Button variant="outline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Organizations
        </Button>
      </Link>

      {/* Header */}

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold">
                {organization.name}
              </h1>

              <p className="mt-1 text-muted-foreground">
                Revenue Readiness Intelligence Profile
              </p>
            </div>

            <div className="rounded-xl bg-primary px-6 py-4 text-center text-primary-foreground">
              <p className="text-sm opacity-80">
                Readiness Score
              </p>

              <p className="text-4xl font-bold">
                {organization.readinessScore}
              </p>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Overview */}

      <Card>
        <CardHeader>
          <CardTitle>Company Overview</CardTitle>
        </CardHeader>

        <CardContent className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-2 flex items-center gap-2 text-muted-foreground">
              <Globe className="h-4 w-4" />
              Domain
            </div>

            <p className="font-medium">
              {organization.domain}
            </p>
          </div>

          <div>
            <div className="mb-2 flex items-center gap-2 text-muted-foreground">
              <Building2 className="h-4 w-4" />
              Industry
            </div>

            <p className="font-medium">
              {organization.industry}
            </p>
          </div>

          <div>
            <div className="mb-2 flex items-center gap-2 text-muted-foreground">
              <Users className="h-4 w-4" />
              Employees
            </div>

            <p className="font-medium">
              {organization.employees.toLocaleString()}
            </p>
          </div>

          <div>
            <div className="mb-2 text-muted-foreground">
              Country
            </div>

            <p className="font-medium">
              {organization.country}
            </p>
          </div>

          <div>
            <div className="mb-2 text-muted-foreground">
              Primary Contact
            </div>

            <p className="font-medium">
              {organization.primaryContact}
            </p>
          </div>

          <div>
            <div className="mb-2 text-muted-foreground">
              Status
            </div>

            <p className="font-medium capitalize">
              {organization.status}
            </p>
          </div>

          <div>
            <div className="mb-2 text-muted-foreground">
              Last Assessment
            </div>

            <p className="font-medium">
              {organization.lastAssessedAt}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Placeholder */}

      <Card>
        <CardHeader>
          <CardTitle>Organization Intelligence Hub</CardTitle>
        </CardHeader>

        <CardContent className="py-12 text-center">
          <h3 className="text-xl font-semibold">
            🚀 Mission F010 Complete
          </h3>

          <p className="mt-3 text-muted-foreground">
            This organization detail page is now connected through React Router.
          </p>

          <p className="mt-2 text-muted-foreground">
            Next we'll build:
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button variant="secondary">Overview</Button>
            <Button variant="secondary">Assessments</Button>
            <Button variant="secondary">Evidence</Button>
            <Button variant="secondary">Findings</Button>
            <Button variant="secondary">AI Recommendations</Button>
            <Button variant="secondary">Timeline</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}