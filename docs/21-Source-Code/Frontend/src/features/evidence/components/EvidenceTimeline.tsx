import { Separator } from "@/components/ui/separator";
import { EvidenceCommentCard } from "@/features/evidence/components/EvidenceCommentCard";
import type { EvidenceComment } from "@/features/evidence/types/evidence-comment";

interface EvidenceTimelineProps {
  comments: EvidenceComment[];
}

export function EvidenceTimeline({ comments }: EvidenceTimelineProps) {
  if (comments.length === 0) {
    return <p className="text-sm text-muted-foreground">No comments yet.</p>;
  }

  return (
    <div className="flex flex-col gap-4">
      {comments.map((comment, index) => (
        <div key={comment.id}>
          <EvidenceCommentCard comment={comment} />
          {index < comments.length - 1 && <Separator className="mt-4" />}
        </div>
      ))}
    </div>
  );
}