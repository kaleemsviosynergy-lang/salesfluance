import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Building2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { OrganizationHeader } from "@/features/organizations/details/components/OrganizationHeader";
import { OrganizationHero } from "@/features/organizations/details/components/OrganizationHero";
import { OrganizationTabs } from "@/features/organizations/details/components/OrganizationTabs";

import { MOCK_ORGANIZATIONS } from "@/features/organizations/data/mock-data";
import { MOCK_CONTACTS } from "@/features/organizations/data/contacts.mock";
import { MOCK_ASSESSMENTS } from "@/features/assessments/data/assessments.mock";
import { MOCK_EVIDENCE } from "@/features/evidence/data/evidence.mock";
import { MOCK_FINDINGS } from "@/features/findings/data/findings.mock";
import { MOCK_RECOMMENDATIONS } from "@/features/recommendations/data/recommendations.mock";
import { MOCK_ACTIVITIES } from "@/features/activity/data/activity.mock";

export default function OrganizationDetailsPage() {
  const { organizationId } = useParams<{ organizationId: string }>();

  const organization = MOCK_ORGANIZATIONS.find(
    (org) => org.id === organizationId,
  );

  if (!organization) {
    return (
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <Card>
          <CardContent className="flex flex-col items-center justify-center gap-3 py-16 text-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-muted">
              <Building2 className="h-5 w-5 text-muted-foreground" />
            </div>

            <div className="space-y-1">
              <p className="text-sm font-medium">
                Organization not found
              </p>

              <p className="text-sm text-muted-foreground">
                We couldn't find an organization matching this link.
              </p>
            </div>

            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              nativeButton={false}
              render={<Link to="/organizations" />}
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Organizations
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const organizationContacts = MOCK_CONTACTS.filter(
    (contact) => contact.organizationId === organization.id,
  );

  const organizationAssessments = MOCK_ASSESSMENTS.filter(
    (assessment) => assessment.organizationId === organization.id,
  );

  const organizationEvidence = MOCK_EVIDENCE.filter(
    (evidence) => evidence.organizationId === organization.id,
  );

  const organizationFindings = MOCK_FINDINGS.filter(
    (finding) => finding.organizationId === organization.id,
  );

  const organizationRecommendations = MOCK_RECOMMENDATIONS.filter(
    (recommendation) => recommendation.organizationId === organization.id,
  );

  const organizationActivities = MOCK_ACTIVITIES.filter(
    (activity) => activity.organizationId === organization.id,
  );

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
      <OrganizationHeader />

      <OrganizationHero organization={organization} />

      <OrganizationTabs
        organization={organization}
        contacts={organizationContacts}
        assessments={organizationAssessments}
        evidence={organizationEvidence}
        findings={organizationFindings}
        recommendations={organizationRecommendations}
        activities={organizationActivities}
      />
    </div>
  );
}