import { LoadingState, SectionHeader } from "@/components/common";
import { RecommendationCard } from "@/features/recommendations/components/RecommendationCard";
import { RecommendationHero } from "@/features/recommendations/components/RecommendationHero";
import { RecommendationsEmptyState } from "@/features/recommendations/components/RecommendationsEmptyState";
import type { Recommendation } from "@/features/recommendations/types/recommendation";

interface RecommendationsTabProps {
  recommendations: Recommendation[];
  isLoading?: boolean;
}

export function RecommendationsTab({
  recommendations,
  isLoading = false,
}: RecommendationsTabProps) {
  if (isLoading) {
    return (
      <div className="flex flex-col gap-6">
        <SectionHeader title="Recommendations" />
        <LoadingState rows={4} />
      </div>
    );
  }

  if (recommendations.length === 0) {
    return (
      <div className="flex flex-col gap-6">
        <SectionHeader title="Recommendations" />
        <RecommendationsEmptyState />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <RecommendationHero recommendations={recommendations} />

      <section className="flex flex-col gap-4">
        <SectionHeader
          title="Recommended Actions"
          description={`${recommendations.length} ${
            recommendations.length === 1 ? "recommendation" : "recommendations"
          }`}
        />
        <div className="flex flex-col gap-4">
          {recommendations.map((recommendation) => (
            <RecommendationCard
              key={recommendation.id}
              recommendation={recommendation}
            />
          ))}
        </div>
      </section>
    </div>
  );
}