/**
 * SalesFluance Master Playbook — ACTIVATE Chapter (Phase 2 Walking Skeleton)
 *
 * This is the first real Playbook chapter, authored against the Phase 1
 * content model (`types/playbook.ts`) with zero changes to that model.
 *
 * Editorial scope, per the approved Phase 2 brief:
 *  - Methodology-focused. No fabricated statistics, client results, case
 *    studies, or proprietary-technology claims.
 *  - Explicitly preserves the distinction established by the published
 *    "Demand Generation vs. Lead Generation" article (Blog #1): demand
 *    creation and lead capture are related but different motions, held
 *    within ONE framework stage (Activate), never described as
 *    interchangeable and never split into a ninth stage.
 *  - Frames Activate around revenue-execution methodology, not as a sales
 *    pitch for the two related services — the service relationship cards
 *    at the end are pathways to the commercial pages, not the chapter's
 *    subject matter.
 */

import type { PlaybookChapterConfig } from "../../types/playbook";

export const activateConfig: PlaybookChapterConfig = {
  schemaVersion: 1,
  slug: "activate",
  kind: "framework",
  title: "Activate: Turning Opportunity Into Revenue Activity",
  excerpt:
    "How the Activate stage turns a validated opportunity into the right kind of revenue activity — and why demand creation and lead capture are not the same motion.",
  status: "published",
  frameworkStages: {
    primary: "activate",
  },
  relatedServices: ["demand-generation", "lead-generation"],
  relatedArticles: ["demand-generation-vs-lead-generation"],
  seo: {
    title: "Activate — Demand Creation vs. Lead Capture | SalesFluance Playbook",
    description:
      "Inside the Activate stage of the SalesFluance Revenue Execution Framework: how demand creation and lead capture work as distinct motions, when to use each, and where activation ends and verification begins.",
    keywords: [
      "revenue execution framework",
      "demand generation vs lead generation",
      "b2b activation stage",
      "b2b demand creation",
      "b2b lead capture",
    ],
  },
  provenance: {
    source: "ai-generated",
    status: "published",
    lastEditedAt: "2026-09-26",
    generationNote:
      "Phase 2 walking-skeleton chapter. Methodology-focused; no statistics, client evidence, or performance claims. Cross-references the existing, published 'Demand Generation vs. Lead Generation' article's thesis rather than restating or re-deriving it.",
  },
  publishedAt: "2026-09-26",
  content: [
    // 1. Introduction
    {
      type: "paragraph",
      text: "Activate is the point in the SalesFluance Revenue Execution Framework where an identified market opportunity is turned into deliberate commercial activity. Everything upstream — Define, Discover, Validate, Prioritize — exists to answer one question: who is worth activating, and why. Activate is where that answer becomes action.",
    },
    {
      type: "paragraph",
      text: "This chapter treats Activate as a single framework stage that contains two distinct motions, not one blended activity. Demand generation and lead generation are related, but they are not interchangeable — a distinction SalesFluance treats as foundational, not semantic.",
    },

    // 2. Where Activate sits
    {
      type: "heading",
      level: 2,
      text: "Where Activate Sits in the Framework",
    },
    {
      type: "paragraph",
      text: "The framework moves in one direction, with Learn feeding back into Define. Activate is the fifth of eight stages: everything before it decides who deserves attention, and everything after it decides whether that attention was worth having.",
    },
    {
      type: "frameworkStageDiagram",
      highlightStage: "activate",
    },

    // 3. The problem
    {
      type: "heading",
      level: 2,
      text: "The Problem Activate Solves",
    },
    {
      type: "paragraph",
      text: "Identifying a good opportunity is not the same as converting it into revenue activity. A validated, prioritized account is still just information until someone does something with it — and what that “something” should be is not obvious. Treating every opportunity the same way, regardless of what stage of awareness or intent it represents, is one of the more common execution failures in B2B revenue teams.",
    },
    {
      type: "paragraph",
      text: "Activate exists to make that choice deliberate: is this opportunity ready for direct outreach, or does it first need market education? Answering that question correctly is the actual job of this stage.",
    },

    // 4. Demand creation vs. lead capture
    {
      type: "heading",
      level: 2,
      text: "Demand Creation vs. Lead Capture",
    },
    {
      type: "comparisonGrid",
      columns: [
        {
          label: "Demand creation",
          items: [
            "Builds awareness and credibility with accounts before they are ready to talk to sales",
            "Targets a market, category, or problem space rather than a single named contact",
            "Succeeds when a market recognizes the problem and associates SalesFluance-style thinking with solving it",
            "Is measured in attention, engagement, and category association — not immediate pipeline",
          ],
        },
        {
          label: "Lead capture",
          items: [
            "Identifies specific people at specific accounts who can be engaged directly",
            "Targets individuals with enough context or intent signal to justify direct outreach",
            "Succeeds when a real, qualified conversation is scheduled with a genuine buyer",
            "Is measured in qualified conversations and sales-ready handoffs",
          ],
        },
      ],
    },
    {
      type: "paragraph",
      text: "These are not two names for the same activity. A campaign that generates attention without ever producing an identifiable, contactable lead is not a lead-capture failure — it may be doing exactly what demand creation is supposed to do. The reverse is also true: a direct-outreach motion that fails to educate an unaware market is not necessarily broken; that was never its job.",
    },

    // 5. The two-motion activation model
    {
      type: "heading",
      level: 2,
      text: "The Two-Motion Activation Model",
    },
    {
      type: "paragraph",
      text: "Both motions can be described as a sequence, though neither is a strict, universal pipeline — they are conceptual motions, not a guaranteed linear process every account moves through in order.",
    },
    {
      type: "heading",
      level: 3,
      text: "Demand-creation motion",
    },
    {
      type: "processFlow",
      steps: [
        { label: "Market attention", description: "The market notices that the problem being addressed exists." },
        { label: "Relevance", description: "The market connects that problem to its own situation." },
        { label: "Interest", description: "Specific accounts engage further with the point of view being offered." },
        { label: "Engagement", description: "Accounts begin interacting in ways that signal real, ongoing interest." },
      ],
    },
    {
      type: "heading",
      level: 3,
      text: "Lead-capture motion",
    },
    {
      type: "processFlow",
      steps: [
        { label: "Audience/account", description: "A specific, reachable account or contact is identified." },
        { label: "Response", description: "The contact responds to direct outreach." },
        { label: "Identifiable lead", description: "The response produces a real, qualified, contactable lead." },
        { label: "Sales-ready handoff", description: "The lead is ready to move into Engage as a genuine conversation." },
      ],
    },
    {
      type: "paragraph",
      text: "The two motions are not sequential phases of one funnel. A revenue team can run both at once — a demand-creation motion building longer-term market recognition while a lead-capture motion works validated, prioritized accounts in parallel. What matters is that each motion is evaluated against the outcome it actually produces, not against the other motion's success criteria.",
    },

    // 6. When each motion is useful
    {
      type: "heading",
      level: 2,
      text: "When Each Motion Is Useful",
    },
    {
      type: "list",
      items: [
        "Demand creation tends to fit when the target market has limited awareness of the problem being solved",
        "Demand creation tends to fit when the buying committee has not yet formed a point of view",
        "Demand creation tends to fit when the sales cycle is long enough that early credibility matters",
      ],
    },
    {
      type: "list",
      items: [
        "Lead capture tends to fit when accounts have already been validated and prioritized with real signal",
        "Lead capture tends to fit when there is a defined, reachable buying contact",
        "Lead capture tends to fit when the goal is a specific, scheduled commercial conversation",
      ],
    },
    {
      type: "callout",
      tone: "note",
      text: "Most real activation programs use both motions deliberately, not by default. See “Demand Generation vs. Lead Generation” below for the fuller treatment of this distinction.",
    },

    // 7. Common activation failure modes
    {
      type: "heading",
      level: 2,
      text: "Common Activation Failure Modes",
    },
    {
      type: "failureMode",
      title: "Treating all activation as lead capture",
      symptom:
        "Every campaign is judged by how many named leads it produced, even campaigns designed to build market awareness.",
      likelyCause: "No explicit decision was made about which motion a given activity was meant to serve.",
      recommendedFix:
        "Assign each activation effort to demand creation or lead capture explicitly, and measure it against that motion's own criteria.",
    },
    {
      type: "failureMode",
      title: "Measuring volume without downstream quality",
      symptom:
        "Activation reports show rising activity — impressions, outreach volume, form fills — with no corresponding change in qualified conversations.",
      likelyCause: "Activation metrics are disconnected from what happens at Engage and Verify.",
      recommendedFix: "Track activation output through to the next stage's actual result, not in isolation.",
    },
    {
      type: "failureMode",
      title: "Activating before validating the underlying data",
      symptom:
        "Outreach targets accounts or contacts that turn out to be inaccurate, outdated, or misprioritized.",
      likelyCause: "Activate is treated as the first stage instead of following Validate and Prioritize.",
      recommendedFix:
        "Confirm the framework's earlier stages were actually completed before activation begins, rather than assuming they were.",
    },
    {
      type: "failureMode",
      title: "Confusing engagement with buying intent",
      symptom: "A contact who opened an email or attended a webinar is treated as sales-ready.",
      likelyCause:
        "Engagement signals are read as if they were validated intent, without further qualification.",
      recommendedFix: "Treat engagement as an input to further qualification, not as a conclusion in itself.",
    },
    {
      type: "failureMode",
      title: "Creating activity without a clear next-stage handoff",
      symptom: "Activation produces contacts or leads that sit without a defined path into Engage.",
      likelyCause: "Activation was planned without a receiving process on the other side.",
      recommendedFix: "Define the Engage-stage handoff criteria before activation begins, not after.",
    },

    // 8. Activate -> Engage
    {
      type: "heading",
      level: 2,
      text: "From Activate to Engage",
    },
    {
      type: "paragraph",
      text: "Activation's job is to create or identify a genuine opportunity — either a market that recognizes the problem, or a specific, reachable lead. Engagement is where that opportunity becomes a real commercial conversation. The two stages should not be conflated: an activated contact is not yet an engaged one, and treating activation output as if the sales conversation has already started skips the actual work of engagement.",
    },

    // 9. Activate -> Verify
    {
      type: "heading",
      level: 2,
      text: "From Activate to Verify",
    },
    {
      type: "paragraph",
      text: "Not every result of activation should be treated as a validated revenue opportunity. A response, a form fill, or a booked meeting is an output of activation — whether it meets the standard required to count as real pipeline is a separate question, and answering it is the job of Verify, not Activate. Skipping this distinction is how activity gets mistaken for progress.",
    },

    // 10. Practical activation checklist
    {
      type: "heading",
      level: 2,
      text: "Practical Activation Checklist",
    },
    {
      type: "checklist",
      items: [
        { text: "The target account or contact has already passed Validate and Prioritize" },
        { text: "Each activation effort is assigned to demand creation or lead capture explicitly" },
        { text: "Success criteria are defined for the motion actually being run, not the other one" },
        { text: "A defined handoff exists into Engage before activation begins" },
        { text: "Activation output feeds into Verify rather than being counted as pipeline automatically" },
      ],
    },

    // 11. Related SalesFluance capabilities
    {
      type: "heading",
      level: 2,
      text: "Related SalesFluance Capabilities",
    },
    {
      type: "serviceRelationshipCard",
      serviceSlug: "demand-generation",
    },
    {
      type: "serviceRelationshipCard",
      serviceSlug: "lead-generation",
    },

    // 12. Related reading
    {
      type: "heading",
      level: 2,
      text: "Related Reading",
    },
    {
      type: "relatedResource",
      resourceType: "article",
      slug: "demand-generation-vs-lead-generation",
    },
  ],
};
