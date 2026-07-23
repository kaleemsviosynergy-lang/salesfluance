import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AssessmentProgress } from "@/features/assessments/components/AssessmentProgress";
import { AssessmentStatusBadge } from "@/features/assessments/components/AssessmentStatusBadge";
import type { Assessment } from "@/features/assessments/types/assessment";

interface AssessmentHeroProps {
  assessment: Assessment;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
}

function formatDate(isoDate: string | null): string {
  if (!isoDate) {
    return "—";
  }

  return new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function AssessmentHero({ assessment }: AssessmentHeroProps) {
  const summaryFields = [
    { label: "Started", value: formatDate(assessment.startedAt) },
    { label: "Last Updated", value: formatDate(assessment.lastUpdatedAt) },
    ...(assessment.status === "completed"
      ? [{ label: "Completed", value: formatDate(assessment.completedAt) }]
      : []),
    { label: "Owner", value: assessment.owner },
  ];

  return (
    <Card>
      <CardContent className="flex flex-col gap-6 p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-4">
            <Avatar className="h-11 w-11 shrink-0 rounded-full border">
              <AvatarFallback className="bg-primary/10 text-sm font-semibold text-primary">
                {getInitials(assessment.owner)}
              </AvatarFallback>
            </Avatar>
            <div className="space-y-1.5">
              <h2 className="text-xl font-semibold tracking-tight text-foreground">
                {assessment.title}
              </h2>
              <p className="text-sm text-muted-foreground">
                {assessment.description}
              </p>
              <div className="pt-1">
                <AssessmentStatusBadge status={assessment.status} />
              </div>
            </div>
          </div>

          <div className="sm:w-72">
            <AssessmentProgress
              progress={assessment.progress}
              overallScore={assessment.overallScore}
            />
          </div>
        </div>

        <Separator />

        <dl className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
          {summaryFields.map((field) => (
            <div key={field.label}>
              <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {field.label}
              </dt>
              <dd className="mt-1 text-sm text-foreground">{field.value}</dd>
            </div>
          ))}
        </dl>
      </CardContent>
    </Card>
  );
}