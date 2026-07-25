import { LoadingState, SectionHeader } from "@/components/common";
import { EvidenceCard } from "@/features/evidence/components/EvidenceCard";
import { EvidenceEmptyState } from "@/features/evidence/components/EvidenceEmptyState";
import { EvidenceHero } from "@/features/evidence/components/EvidenceHero";
import type { Evidence } from "@/features/evidence/types/evidence";

interface EvidenceTabProps {
  evidence: Evidence[];
  isLoading?: boolean;
}

export function EvidenceTab({ evidence, isLoading = false }: EvidenceTabProps) {
  if (isLoading) {
    return (
      <div className="flex flex-col gap-6">
        <SectionHeader title="Evidence" />
        <LoadingState rows={4} />
      </div>
    );
  }

  if (evidence.length === 0) {
    return (
      <div className="flex flex-col gap-6">
        <SectionHeader title="Evidence" />
        <EvidenceEmptyState />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <EvidenceHero evidence={evidence} />

      <section className="flex flex-col gap-4">
        <SectionHeader
          title="Submitted Evidence"
          description={`${evidence.length} ${
            evidence.length === 1 ? "item" : "items"
          } submitted`}
        />
        <div className="flex flex-col gap-4">
          {evidence.map((item) => (
            <EvidenceCard key={item.id} evidence={item} />
          ))}
        </div>
      </section>
    </div>
  );
}