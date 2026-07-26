import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { RecommendationActionCard } from "@/features/recommendations/components/RecommendationActionCard";
import { RecommendationCommentCard } from "@/features/recommendations/components/RecommendationCommentCard";
import { RecommendationEffortIndicator } from "@/features/recommendations/components/RecommendationEffortIndicator";
import { RecommendationImpactIndicator } from "@/features/recommendations/components/RecommendationImpactIndicator";
import { RecommendationPriorityBadge } from "@/features/recommendations/components/RecommendationPriorityBadge";
import { RecommendationStatusBadge } from "@/features/recommendations/components/RecommendationStatusBadge";
import { RecommendationTimeline } from "@/features/recommendations/components/RecommendationTimeline";
import type { Recommendation } from "@/features/recommendations/types/recommendation";

interface RecommendationCardProps {
  recommendation: Recommendation;
}

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

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

function formatCurrency(amount: number | null): string {
  return amount !== null ? currencyFormatter.format(amount) : "—";
}

/**
 * Presentational card for a single recommendation. Nests its own
 * Actions, Comments, and Timeline sections beneath the recommendation's
 * core details, per the Recommendations tab's card → actions → comments
 * → timeline layout.
 */
export function RecommendationCard({ recommendation }: RecommendationCardProps) {
  return (
    <Card>
      <CardContent className="flex flex-col gap-5 p-5 sm:p-6">
        <div className="space-y-2">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <h3 className="text-sm font-semibold text-foreground">
              {recommendation.title}
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              <RecommendationImpactIndicator impact={recommendation.impact} />
              <RecommendationEffortIndicator effort={recommendation.effort} />
              <RecommendationPriorityBadge priority={recommendation.priority} />
              <RecommendationStatusBadge status={recommendation.status} />
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            {recommendation.description}
          </p>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wide text-muted-foreground">
            <span>Progress</span>
            <span className="tabular-nums text-foreground">
              {recommendation.progress}%
            </span>
          </div>
          <Progress
            value={recommendation.progress}
            aria-label={`Recommendation progress: ${recommendation.progress}%`}
          />
        </div>

        <dl className="grid grid-cols-2 gap-x-6 gap-y-3 border-t pt-4 sm:grid-cols-3 lg:grid-cols-5">
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Owner
            </dt>
            <dd className="mt-1 text-sm text-foreground">
              {recommendation.owner}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Due
            </dt>
            <dd className="mt-1 text-sm text-foreground">
              {formatDate(recommendation.dueDate)}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Completed
            </dt>
            <dd className="mt-1 text-sm text-foreground">
              {formatDate(recommendation.completedDate)}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Est. Cost
            </dt>
            <dd className="mt-1 text-sm tabular-nums text-foreground">
              {formatCurrency(recommendation.estimatedCost)}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Expected ROI
            </dt>
            <dd className="mt-1 text-sm tabular-nums text-foreground">
              {formatCurrency(recommendation.expectedROI)}
            </dd>
          </div>
        </dl>

        {recommendation.actions.length > 0 && (
          <div className="space-y-2 border-t pt-4">
            <h4 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Actions
            </h4>
            <div className="flex flex-col gap-2">
              {recommendation.actions
                .slice()
                .sort((a, b) => a.order - b.order)
                .map((action) => (
                  <RecommendationActionCard key={action.id} action={action} />
                ))}
            </div>
          </div>
        )}

        {recommendation.comments.length > 0 && (
          <div className="space-y-3 border-t pt-4">
            <h4 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Comments
            </h4>
            <div className="flex flex-col gap-4">
              {recommendation.comments.map((comment) => (
                <RecommendationCommentCard key={comment.id} comment={comment} />
              ))}
            </div>
          </div>
        )}

        <div className="space-y-2 border-t pt-4">
          <h4 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Timeline
          </h4>
          <RecommendationTimeline recommendation={recommendation} />
        </div>
      </CardContent>
    </Card>
  );
}