import { Badge } from "@/components/ui/badge";
import type { EvidenceType } from "@/features/evidence/types/evidence";

const TYPE_LABELS: Record<EvidenceType, string> = {
  document: "Document",
  screenshot: "Screenshot",
  "data-export": "Data Export",
  "interview-notes": "Interview Notes",
  "system-report": "System Report",
  other: "Other",
};

interface EvidenceTypeBadgeProps {
  type: EvidenceType;
}

export function EvidenceTypeBadge({ type }: EvidenceTypeBadgeProps) {
  return <Badge variant="secondary">{TYPE_LABELS[type]}</Badge>;
}