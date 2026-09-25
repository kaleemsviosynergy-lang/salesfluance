import type { FrameworkStage, PlaybookContentBlock } from "@/types/playbook";

import FrameworkStageDiagram from "./FrameworkStageDiagram";
import ProcessFlow from "./ProcessFlow";
import ComparisonGrid from "./ComparisonGrid";
import ServiceRelationshipCard from "./ServiceRelationshipCard";
import RelatedResourceCard from "./RelatedResourceCard";
import Checklist from "./Checklist";
import FailureMode from "./FailureMode";

interface ContentBlockRendererProps {
  block: PlaybookContentBlock;
  index: number;
  /** Stages with a currently published, routable chapter — threaded through
   *  to any `frameworkStageDiagram` block so it never links to a
   *  nonexistent chapter. See `FrameworkStageDiagram`'s own prop comment. */
  linkedStages: FrameworkStage[];
}

/**
 * Renders one Playbook content block. Mirrors the philosophy of the blog's
 * `ContentBlock` renderer in `app/resources/blogs/[slug]/page.tsx`: a plain
 * switch on `block.type`, with the simplest block types (paragraph,
 * heading, list, callout) rendered inline here, and the richer,
 * structural block types delegated to their own small components.
 *
 * PHASE 2 SCOPE: only the block types actually authored in the Activate
 * chapter are rendered with real markup. `diagnostic`, `implementationStep`,
 * `useCase`, `industryRelationshipCard`, and `visual` are valid per the
 * Phase 1 type system but unused by any chapter yet — they fall through to
 * the `default` case (renders nothing) rather than getting speculative
 * components built ahead of real content, per the approved Phase 2 scope.
 */
export default function ContentBlockRenderer({ block, index, linkedStages }: ContentBlockRendererProps) {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={index} className="text-base leading-8 text-slate-700">
          {block.text}
        </p>
      );

    case "heading": {
      const HeadingTag = block.level === 2 ? "h2" : "h3";
      return (
        <HeadingTag
          key={index}
          className={
            block.level === 2
              ? "mt-4 text-2xl font-semibold tracking-tight text-slate-950"
              : "mt-2 text-lg font-semibold tracking-tight text-slate-950"
          }
        >
          {block.text}
        </HeadingTag>
      );
    }

    case "list":
      return (
        <ul key={index} className="list-disc space-y-2 pl-6 text-base leading-7 text-slate-700">
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex}>{item}</li>
          ))}
        </ul>
      );

    case "callout": {
      const toneClasses =
        block.tone === "warning"
          ? "border-amber-300 bg-amber-50 text-amber-900"
          : "border-cyan-200 bg-cyan-50/60 text-slate-800";
      return (
        <div key={index} className={`rounded-2xl border p-4 text-sm leading-6 ${toneClasses}`}>
          {block.text}
        </div>
      );
    }

    case "frameworkStageDiagram":
      return (
        <FrameworkStageDiagram
          key={index}
          highlightStage={block.highlightStage}
          linkedStages={linkedStages}
        />
      );

    case "processFlow":
      return <ProcessFlow key={index} steps={block.steps} />;

    case "comparisonGrid":
      return <ComparisonGrid key={index} columns={block.columns} />;

    case "checklist":
      return <Checklist key={index} items={block.items} />;

    case "failureMode":
      return (
        <FailureMode
          key={index}
          title={block.title}
          symptom={block.symptom}
          likelyCause={block.likelyCause}
          recommendedFix={block.recommendedFix}
        />
      );

    case "serviceRelationshipCard":
      return <ServiceRelationshipCard key={index} serviceSlug={block.serviceSlug} />;

    case "relatedResource":
      return <RelatedResourceCard key={index} resourceType={block.resourceType} slug={block.slug} />;

    default:
      return null;
  }
}

/**
 * Block types that should render inside the narrower, prose-width column
 * (matching the blog route's `max-w-2xl` prose measure). Every other block
 * type renders at the wider chapter-body width — see the route's own
 * layout comment for the full reasoning.
 */
export const PROSE_BLOCK_TYPES = new Set<PlaybookContentBlock["type"]>([
  "paragraph",
  "heading",
  "list",
  "callout",
]);

/**
 * Block types that should be visually grouped side-by-side with their
 * immediate neighbors of the same type (currently just consecutive service
 * relationship cards) rather than stacked full-width — a small, page-level
 * layout affordance, not a new content-block type.
 */
export const GROUPABLE_BLOCK_TYPES = new Set<PlaybookContentBlock["type"]>([
  "serviceRelationshipCard",
]);
