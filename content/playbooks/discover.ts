/**
 * SalesFluance Master Playbook — DISCOVER Chapter (Phase 3A)
 *
 * Methodology-focused. No fabricated statistics, client results, or
 * performance claims. Signal volume is never equated with signal quality.
 * Only the published "Signal Quality vs. Signal Volume" article is linked
 * — the draft "First-Party vs. Third-Party Intent Data" article is not
 * referenced anywhere in this file, in or out of the accessor's gate.
 */

import type { PlaybookChapterConfig } from "../../types/playbook";

export const discoverConfig: PlaybookChapterConfig = {
  schemaVersion: 1,
  slug: "discover",
  kind: "framework",
  title: "Discover: Finding Signals Worth Acting On",
  excerpt:
    "How the Discover stage separates a useful signal from background noise — and why a signal is an input to judgment, not an opportunity on its own.",
  status: "published",
  frameworkStages: {
    primary: "discover",
  },
  relatedServices: ["intent-data", "list-building"],
  relatedArticles: ["signal-quality-vs-signal-volume"],
  seo: {
    title: "Discover — Signal Quality vs. Signal Volume | SalesFluance Playbook",
    description:
      "Inside the Discover stage of the SalesFluance Revenue Execution Framework: what counts as a useful signal, why more signals are not automatically better signals, and why discovery is not the same as opportunity.",
    keywords: [
      "revenue execution framework",
      "signal quality vs signal volume",
      "b2b intent data",
      "b2b discovery stage",
    ],
  },
  provenance: {
    source: "ai-generated",
    status: "published",
    lastEditedAt: "2026-09-26",
    generationNote:
      "Phase 3A framework-expansion chapter. Methodology-focused; no statistics, client evidence, or performance claims. Cross-references the existing, published 'Signal Quality vs. Signal Volume' article rather than restating it. The draft 'First-Party vs. Third-Party Intent Data' article is intentionally not referenced.",
  },
  publishedAt: "2026-09-26",
  content: [
    // 1. What Discover means
    {
      type: "paragraph",
      text: "Discover is the stage where a defined target becomes something a revenue team can actually observe. Its job is to surface signals, activity, and context about the accounts Define established as worth pursuing — without a definition to work against, discovery collects everything and prioritizes nothing.",
    },
    {
      type: "paragraph",
      text: "This chapter treats Discover as an interpretive stage, not a data-collection stage: gathering more signals is not the goal. Gathering the right signals, and understanding what they actually indicate, is.",
    },

    // 2. Where Discover sits
    {
      type: "heading",
      level: 2,
      text: "Where Discover Sits in the Framework",
    },
    {
      type: "paragraph",
      text: "Discover is the second of eight stages — it operates on Define's output and feeds Validate, which checks whether what Discover found can actually be trusted.",
    },
    {
      type: "frameworkStageDiagram",
      highlightStage: "discover",
    },

    // 3. Signal quality vs. signal volume
    {
      type: "heading",
      level: 2,
      text: "Signal Quality vs. Signal Volume",
    },
    {
      type: "comparisonGrid",
      columns: [
        {
          label: "Signal volume",
          items: [
            "Counts how much activity or data exists",
            "Can be increased simply by collecting more sources",
            "Says nothing on its own about relevance or reliability",
          ],
        },
        {
          label: "Signal quality",
          items: [
            "Assesses whether a signal is relevant, recent, and reliable",
            "Cannot be increased just by collecting more of the same signal",
            "Is what actually determines whether a signal is worth acting on",
          ],
        },
      ],
    },
    {
      type: "paragraph",
      text: "A large volume of low-quality signals is not a stronger foundation for action than a small number of high-quality ones — it is usually a weaker one, because it takes real effort to separate the signal that matters from the noise around it.",
    },

    // 4. What counts as a useful discovery input
    {
      type: "heading",
      level: 2,
      text: "What Counts as a Useful Discovery Input",
    },
    {
      type: "list",
      items: [
        "Account signals — observable changes at the account level, such as new initiatives or organizational shifts",
        "Behavioral signals — how people at an account are engaging with available information",
        "Intent signals — third-party or first-party indicators that an account may be researching a relevant problem",
        "Contextual information — details that help interpret why a signal might matter right now",
        "Observable changes — events or shifts that create a plausible reason for a conversation",
      ],
    },
    {
      type: "paragraph",
      text: "Not every item on this list indicates active buying intent, and treating all of them as if they do is itself a discovery failure — see the failure modes below.",
    },

    // 5. Signal != opportunity
    {
      type: "heading",
      level: 2,
      text: "A Signal Is Not an Opportunity",
    },
    {
      type: "paragraph",
      text: "A signal is an input to interpretation and prioritization, not a conclusion. An account showing a signal has given the revenue team something worth evaluating — it has not yet earned a place in an active pipeline. That evaluation is the job of Prioritize and, later, Verify, not Discover itself.",
    },

    // 6. Quality of the signal
    {
      type: "heading",
      level: 2,
      text: "What Makes a Signal Good",
    },
    {
      type: "list",
      items: [
        "Relevance — does the signal actually relate to the problem being solved?",
        "Recency — how long ago did the signal occur, and is it still meaningful?",
        "Context — is there enough surrounding information to interpret the signal correctly?",
        "Specificity — does the signal point to a particular account, role, or need, or is it broad and generic?",
        "Reliability — how consistently has this type of signal indicated something real in the past?",
      ],
    },
    {
      type: "callout",
      tone: "note",
      text: "SalesFluance does not apply a single proprietary scoring formula to every signal type. The dimensions above are the criteria worth asking about any signal, not a fixed score to calculate.",
    },

    // 7. Common failure modes
    {
      type: "heading",
      level: 2,
      text: "Common Discovery Failure Modes",
    },
    {
      type: "failureMode",
      title: "Collecting signals without a defined ICP",
      symptom: "Signal volume is high, but no one can say which signals matter more than others.",
      likelyCause: "Discover began before Define established what a good-fit account looks like.",
      recommendedFix: "Confirm the ICP exists and is specific enough to filter signals before scaling signal collection.",
    },
    {
      type: "failureMode",
      title: "Treating every activity as intent",
      symptom: "Any recorded interaction — a page visit, a download, an email open — is logged as buying intent.",
      likelyCause: "Behavioral activity is read at face value without checking relevance, recency, or context.",
      recommendedFix: "Apply the signal-quality dimensions above before labeling an activity as intent.",
    },
    {
      type: "failureMode",
      title: "Optimizing for signal volume",
      symptom: "Reporting emphasizes the number of signals collected rather than what was learned from them.",
      likelyCause: "Signal collection is measured as an activity metric instead of an interpretive one.",
      recommendedFix: "Track how many signals actually informed a prioritization or activation decision, not how many were collected.",
    },
    {
      type: "failureMode",
      title: "Acting on weak or stale information",
      symptom: "Outreach references a signal that is no longer accurate or relevant by the time it is used.",
      likelyCause: "No recency check was applied between when a signal was captured and when it was acted on.",
      recommendedFix: "Set an explicit freshness expectation for each signal type before using it operationally.",
    },
    {
      type: "failureMode",
      title: "Using signals without context",
      symptom: "A signal is interpreted the same way regardless of the situation it occurred in.",
      likelyCause: "The signal was evaluated in isolation, without the contextual information needed to interpret it correctly.",
      recommendedFix: "Pair every signal with enough context to judge what it actually indicates before acting on it.",
    },

    // 8. Discover -> Validate
    {
      type: "heading",
      level: 2,
      text: "From Discover to Validate",
    },
    {
      type: "paragraph",
      text: "Discover's output is a set of signals and information that appear useful. Whether that information is actually accurate, complete, and current enough to act on is a separate question — that is Validate's job, not Discover's. Moving a signal straight into activation without validating the data behind it is how discovery mistakes become activation mistakes.",
    },

    // 9. Practical Discover checklist
    {
      type: "heading",
      level: 2,
      text: "Practical Discover Checklist",
    },
    {
      type: "checklist",
      items: [
        { text: "Signals are being collected against a defined ICP, not everything available" },
        { text: "Each signal type is evaluated for relevance, recency, context, specificity, and reliability" },
        { text: "Behavioral activity is not automatically treated as buying intent" },
        { text: "Signal reporting tracks what was learned, not just how much was collected" },
        { text: "Signals are checked for freshness before being used operationally" },
      ],
    },

    // 10. Related SalesFluance capabilities
    {
      type: "heading",
      level: 2,
      text: "Related SalesFluance Capabilities",
    },
    {
      type: "serviceRelationshipCard",
      serviceSlug: "intent-data",
    },
    {
      type: "serviceRelationshipCard",
      serviceSlug: "list-building",
    },

    // 11. Related published reading
    {
      type: "heading",
      level: 2,
      text: "Related Reading",
    },
    {
      type: "relatedResource",
      resourceType: "article",
      slug: "signal-quality-vs-signal-volume",
    },
  ],
};
