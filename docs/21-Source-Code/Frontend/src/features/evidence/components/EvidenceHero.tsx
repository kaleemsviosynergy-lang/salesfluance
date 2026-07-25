import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { EvidenceProgress } from "@/features/evidence/components/EvidenceProgress";
import { EvidenceScore } from "@/features/evidence/components/EvidenceScore";
import type { Evidence } from "@/features/evidence/types/evidence";

interface EvidenceHeroProps {
  evidence: Evidence[];
}

function getAverageScore(evidence: Evidence[]): number | null {
  const scored = evidence.filter(
    (item): item is Evidence & { qualityScore: number } =>
      item.qualityScore !== null,
  );

  if (scored.length === 0) {
    return null;
  }

  const total = scored.reduce((sum, item) => sum + item.qualityScore, 0);
  return Math.round(total / scored.length);
}

export function EvidenceHero({ evidence }: EvidenceHeroProps) {
  const totalCount = evidence.length;
  const approvedCount = evidence.filter(
    (item) => item.status === "approved",
  ).length;
  const progress =
    totalCount === 0 ? 0 : Math.round((approvedCount / totalCount) * 100);
  const averageScore = getAverageScore(evidence);

  return (
    <Card>
      <CardContent className="flex flex-col gap-6 p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-1.5">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Evidence
            </h2>
            <p className="text-sm text-muted-foreground">
              Supporting documentation submitted across this assessment.
            </p>
          </div>

          <div className="sm:w-56">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Average Quality Score
            </p>
            <div className="mt-2">
              <EvidenceScore score={averageScore} />
            </div>
          </div>
        </div>

        <Separator />

        <EvidenceProgress
          progress={progress}
          approvedCount={approvedCount}
          totalCount={totalCount}
        />
      </CardContent>
    </Card>
  );
}