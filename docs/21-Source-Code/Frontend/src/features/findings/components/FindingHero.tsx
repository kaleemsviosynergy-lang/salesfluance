import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FindingConfidence } from "@/features/findings/components/FindingConfidence";
import type { Finding } from "@/features/findings/types/finding";

interface FindingHeroProps {
  findings: Finding[];
}

function getAverageConfidence(findings: Finding[]): number | null {
  const scored = findings.filter(
    (finding): finding is Finding & { confidenceScore: number } =>
      finding.confidenceScore !== null,
  );

  if (scored.length === 0) {
    return null;
  }

  const total = scored.reduce((sum, finding) => sum + finding.confidenceScore, 0);
  return Math.round(total / scored.length);
}

export function FindingHero({ findings }: FindingHeroProps) {
  const totalCount = findings.length;
  const openCount = findings.filter((finding) => finding.status === "open").length;
  const criticalCount = findings.filter(
    (finding) => finding.severity === "critical",
  ).length;
  const resolvedCount = findings.filter(
    (finding) => finding.status === "resolved",
  ).length;
  const averageConfidence = getAverageConfidence(findings);

  const summaryFields = [
    { label: "Open", value: openCount },
    { label: "Critical", value: criticalCount },
    { label: "Resolved", value: resolvedCount },
    { label: "Total", value: totalCount },
  ];

  return (
    <Card>
      <CardContent className="flex flex-col gap-6 p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-1.5">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Findings
            </h2>
            <p className="text-sm text-muted-foreground">
              Issues and observations identified during this assessment.
            </p>
          </div>

          <div className="sm:w-56">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Average Confidence
            </p>
            <div className="mt-2">
              <FindingConfidence score={averageConfidence} />
            </div>
          </div>
        </div>

        <Separator />

        <dl className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
          {summaryFields.map((field) => (
            <div key={field.label}>
              <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {field.label}
              </dt>
              <dd className="mt-1 text-2xl font-semibold tabular-nums text-foreground">
                {field.value}
              </dd>
            </div>
          ))}
        </dl>
      </CardContent>
    </Card>
  );
}