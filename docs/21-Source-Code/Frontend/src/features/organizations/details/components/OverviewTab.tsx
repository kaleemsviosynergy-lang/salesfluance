import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ReadinessScore } from "@/features/organizations/components/ReadinessScore";
import { StatusBadge } from "@/features/organizations/components/StatusBadge";
import type { OrganizationDetails }
from "@/features/organizations/types/organization-details";

export interface OverviewCounts {
  assessments: number;
  evidence: number;
  findings: number;
  recommendations: number;
}

interface OverviewTabProps {
  organization: OrganizationDetails;
  /** Sizes of the organization-scoped collections shown in the other tabs. */
  counts: OverviewCounts;
}

interface SummaryField {
  label: string;
  value: string;
}

interface AssessmentMetric {
  label: string;
  value: number;
}

const READINESS_SCORE_DESCRIPTION =
  "This score is calculated from assessment findings, evidence quality and organizational maturity.";

function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function OverviewTab({ organization, counts }: OverviewTabProps) {
  const assessmentSummaryMetrics: AssessmentMetric[] = [
    { label: "Assessments", value: counts.assessments },
    { label: "Evidence", value: counts.evidence },
    { label: "Findings", value: counts.findings },
    { label: "Recommendations", value: counts.recommendations },
  ];

  const organizationSummaryFields: SummaryField[] = [
    { label: "Organization Name", value: organization.name },
    { label: "Domain", value: organization.domain },
    { label: "Industry", value: organization.industry },
    { label: "Country", value: organization.country },
    { label: "Employees", value: organization.employees.toLocaleString() },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Organization Summary</CardTitle>
          <CardDescription>
            Core profile details for this organization.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {organizationSummaryFields.map((field) => (
              <div key={field.label}>
                <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {field.label}
                </dt>
                <dd className="mt-1 text-sm text-foreground">
                  {field.value}
                </dd>
              </div>
            ))}
          </dl>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Revenue Readiness</CardTitle>
          <CardDescription>
            Current readiness standing for this organization.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <StatusBadge status={organization.status} />
          <ReadinessScore score={organization.readinessScore} />
          <Separator />
          <p className="text-sm text-muted-foreground">
            {READINESS_SCORE_DESCRIPTION}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Business Information</CardTitle>
          <CardDescription>
            Ownership, status and engagement details.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Primary Contact
              </dt>
              <dd className="mt-1 text-sm text-foreground">
                {organization.primaryContact}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Status
              </dt>
              <dd className="mt-1">
                <StatusBadge status={organization.status} />
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Last Assessment
              </dt>
              <dd className="mt-1 text-sm text-foreground">
                {formatDate(organization.lastAssessmentDate)}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Country
              </dt>
              <dd className="mt-1 text-sm text-foreground">
                {organization.country}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Employees
              </dt>
              <dd className="mt-1 text-sm tabular-nums text-foreground">
                {organization.employees.toLocaleString()}
              </dd>
            </div>
          </dl>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Assessment Summary</CardTitle>
          <CardDescription>
            Lifetime activity recorded for this organization.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <dl className="grid grid-cols-2 gap-4">
            {assessmentSummaryMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg border bg-muted/30 p-4"
              >
                <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {metric.label}
                </dt>
                <dd className="mt-1 text-2xl font-semibold tabular-nums text-foreground">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        </CardContent>
      </Card>
    </div>
  );
}