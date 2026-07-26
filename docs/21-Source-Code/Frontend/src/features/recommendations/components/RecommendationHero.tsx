import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import type { Recommendation } from "@/features/recommendations/types/recommendation";

interface RecommendationHeroProps {
  recommendations: Recommendation[];
}

function getAverageProgress(recommendations: Recommendation[]): number {
  if (recommendations.length === 0) {
    return 0;
  }

  const total = recommendations.reduce((sum, item) => sum + item.progress, 0);
  return Math.round(total / recommendations.length);
}

export function RecommendationHero({ recommendations }: RecommendationHeroProps) {
  const totalCount = recommendations.length;
  const inProgressCount = recommendations.filter(
    (item) => item.status === "in-progress",
  ).length;
  const completedCount = recommendations.filter(
    (item) => item.status === "completed",
  ).length;
  const blockedCount = recommendations.filter(
    (item) => item.status === "blocked",
  ).length;
  const averageProgress = getAverageProgress(recommendations);

  const summaryFields = [
    { label: "In Progress", value: inProgressCount },
    { label: "Completed", value: completedCount },
    { label: "Blocked", value: blockedCount },
    { label: "Total", value: totalCount },
  ];

  return (
    <Card>
      <CardContent className="flex flex-col gap-6 p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-1.5">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Recommendations
            </h2>
            <p className="text-sm text-muted-foreground">
              Action plans generated from assessment findings.
            </p>
          </div>

          <div className="sm:w-56">
            <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wide text-muted-foreground">
              <span>Average Progress</span>
              <span className="tabular-nums text-foreground">
                {averageProgress}%
              </span>
            </div>
            <Progress
              value={averageProgress}
              className="mt-2"
              aria-label={`Average recommendation progress: ${averageProgress}%`}
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