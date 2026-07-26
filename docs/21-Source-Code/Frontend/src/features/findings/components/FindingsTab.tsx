import { LoadingState, SectionHeader } from "@/components/common";
import { FindingCard } from "@/features/findings/components/FindingCard";
import { FindingHero } from "@/features/findings/components/FindingHero";
import { FindingsEmptyState } from "@/features/findings/components/FindingsEmptyState";
import type { Finding } from "@/features/findings/types/finding";

interface FindingsTabProps {
  findings: Finding[];
  isLoading?: boolean;
}

export function FindingsTab({ findings, isLoading = false }: FindingsTabProps) {
  if (isLoading) {
    return (
      <div className="flex flex-col gap-6">
        <SectionHeader title="Findings" />
        <LoadingState rows={4} />
      </div>
    );
  }

  if (findings.length === 0) {
    return (
      <div className="flex flex-col gap-6">
        <SectionHeader title="Findings" />
        <FindingsEmptyState />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <FindingHero findings={findings} />

      <section className="flex flex-col gap-4">
        <SectionHeader
          title="Identified Findings"
          description={`${findings.length} ${
            findings.length === 1 ? "finding" : "findings"
          } identified`}
        />
        <div className="flex flex-col gap-4">
          {findings.map((finding) => (
            <FindingCard key={finding.id} finding={finding} />
          ))}
        </div>
      </section>
    </div>
  );
}