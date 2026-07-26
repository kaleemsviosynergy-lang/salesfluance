import { FileText } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import type { FindingEvidenceLink } from "@/features/findings/types/finding-evidence";

interface FindingEvidenceCardProps {
  evidenceLink: FindingEvidenceLink;
}

export function FindingEvidenceCard({ evidenceLink }: FindingEvidenceCardProps) {
  return (
    <Card>
      <CardContent className="flex items-start gap-3 p-4">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-muted"
          aria-hidden="true"
        >
          <FileText className="h-4 w-4 text-muted-foreground" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-foreground">
            {evidenceLink.evidenceId}
          </p>
          {evidenceLink.relevanceNote && (
            <p className="text-xs text-muted-foreground">
              {evidenceLink.relevanceNote}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}