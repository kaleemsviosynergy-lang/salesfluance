import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import type { RecommendationComment } from "@/features/recommendations/types/recommendation-comment";

interface RecommendationCommentCardProps {
  comment: RecommendationComment;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
}

function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function RecommendationCommentCard({
  comment,
}: RecommendationCommentCardProps) {
  return (
    <div className="flex items-start gap-3">
      <Avatar className="h-8 w-8 shrink-0 rounded-full border">
        <AvatarFallback className="bg-primary/10 text-xs font-semibold text-primary">
          {getInitials(comment.author)}
        </AvatarFallback>
      </Avatar>
      <div className="min-w-0 flex-1 space-y-0.5">
        <div className="flex flex-wrap items-baseline gap-2">
          <p className="text-sm font-medium text-foreground">
            {comment.author}
          </p>
          <p className="text-xs text-muted-foreground">
            {formatDate(comment.createdAt)}
          </p>
        </div>
        <p className="text-sm text-muted-foreground">{comment.message}</p>
      </div>
    </div>
  );
}