import { CheckCircle2, Circle } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { RecommendationAction } from "@/features/recommendations/types/recommendation-action";

interface RecommendationActionCardProps {
  action: RecommendationAction;
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

export function RecommendationActionCard({ action }: RecommendationActionCardProps) {
  return (
    <Card>
      <CardContent className="flex items-start gap-3 p-4">
        {action.completed ? (
          <CheckCircle2
            className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
            aria-hidden="true"
          />
        ) : (
          <Circle
            className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground"
            aria-hidden="true"
          />
        )}
        <div className="min-w-0 flex-1">
          <p
            className={cn(
              "text-sm font-medium text-foreground",
              action.completed && "text-muted-foreground line-through",
            )}
          >
            {action.title}
          </p>
          {action.description && (
            <p className="text-xs text-muted-foreground">
              {action.description}
            </p>
          )}
          <p className="mt-1 text-xs text-muted-foreground">
            {action.owner}
            {action.completed &&
              ` · Completed ${formatDate(action.completedAt)}`}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}