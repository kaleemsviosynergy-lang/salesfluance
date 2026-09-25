/**
 * SalesFluance Master Playbook — VALIDATE Chapter (Phase 3A)
 *
 * Methodology-focused. No fabricated statistics, client results, or
 * performance claims. Validate is explicitly and repeatedly distinguished
 * from Verify throughout this chapter (Validate = trust the inputs;
 * Verify = assess the resulting activity/output/outcome) — see the
 * dedicated "Validate vs. Verify" section, which is mandatory content, not
 * a passing mention.
 */

import type { PlaybookChapterConfig } from "../../types/playbook";

export const validateConfig: PlaybookChapterConfig = {
  schemaVersion: 1,
  slug: "validate",
  kind: "framework",
  title: "Validate: Trusting the Inputs Before You Act",
  excerpt:
    "How the Validate stage checks whether the data behind an opportunity can actually be trusted — and why that question is different from whether the resulting activity worked.",
  status: "published",
  frameworkStages: {
    primary: "validate",
  },
  relatedServices: ["data-cleansing", "data-appending"],
  relatedArticles: [
    "crm-data-decay-problem",
    "what-data-appending-actually-fixes",
    "the-verification-gap",
  ],
  seo: {
    title: "Validate — Data Quality Before Activation | SalesFluance Playbook",
    description:
      "Inside the Validate stage of the SalesFluance Revenue Execution Framework: how to check whether data is reliable enough to act on, why Validate is not the same as Verify, and how data cleansing differs from data appending.",
    keywords: [
      "revenue execution framework",
      "crm data quality",
      "data cleansing vs data appending",
      "validate vs verify",
    ],
  },
  provenance: {
    source: "ai-generated",
    status: "published",
    lastEditedAt: "2026-09-26",
    generationNote:
      "Phase 3A framework-expansion chapter. Methodology-focused; no statistics, client evidence, or performance claims. Cross-references the existing, published 'CRM Data-Decay Problem', 'What Data Appending Actually Fixes', and 'The Verification Gap' articles rather than restating their evidence.",
  },
  publishedAt: "2026-09-26",
  content: [
    // 1. What Validate means
    {
      type: "paragraph",
      text: "Validate answers one question: can the information gathered so far actually be trusted enough to act on? It is a check on inputs — the accounts, contacts, and signals Define and Discover have produced — not a check on results.",
    },
    {
      type: "paragraph",
      text: "This distinction matters because a later stage, Verify, asks a related but different question about outputs. Validate and Verify are both quality checks, applied to different things, at different points in the framework.",
    },

    // 2. Where Validate sits
    {
      type: "heading",
      level: 2,
      text: "Where Validate Sits in the Framework",
    },
    {
      type: "paragraph",
      text: "Validate is the third of eight stages. It sits between Discover, which finds signals and information, and Prioritize, which ranks opportunities — Prioritize should never be working from data that hasn't passed through Validate first.",
    },
    {
      type: "frameworkStageDiagram",
      highlightStage: "validate",
    },

    // 3. The validation gap
    {
      type: "heading",
      level: 2,
      text: "The Validation Gap",
    },
    {
      type: "paragraph",
      text: "Poor-quality inputs do not stay contained to the stage that produced them. An inaccurate contact record, an outdated firmographic detail, or an incomplete account profile carries forward into prioritization, activation, and engagement, becoming harder and more expensive to catch the further it travels. The validation gap is the space between “we have data” and “we can trust this data enough to act on it” — and it is often wider than it appears.",
    },

    // 4. What should be validated
    {
      type: "heading",
      level: 2,
      text: "What Should Be Validated",
    },
    {
      type: "list",
      items: [
        "Completeness — are the fields required for a decision actually populated?",
        "Accuracy — does the data reflect the account or contact's real, current state?",
        "Freshness — how long ago was this data collected or confirmed?",
        "Consistency — does this record agree with other records or sources about the same account?",
        "Identity — is this genuinely the account or contact it claims to be, not a duplicate or a mismatch?",
        "Contact and account data quality — are the specific fields needed for outreach and targeting reliable?",
      ],
    },

    // 5. CRM data decay
    {
      type: "heading",
      level: 2,
      text: "CRM Data Decay",
    },
    {
      type: "paragraph",
      text: "CRM records do not stay accurate indefinitely — people change roles, companies restructure, and details that were correct when entered become stale over time. The mechanics of that decay, and what the available evidence says about its pace, are covered in the existing SalesFluance article linked under Related Reading below, rather than restated here.",
    },

    // 6. Data cleansing vs. data appending
    {
      type: "heading",
      level: 2,
      text: "Data Cleansing vs. Data Appending",
    },
    {
      type: "comparisonGrid",
      columns: [
        {
          label: "Data cleansing",
          items: [
            "Improves or repairs data that already exists in a record",
            "Addresses inaccurate, outdated, or duplicate information",
            "Answers: is what we already have correct?",
          ],
        },
        {
          label: "Data appending",
          items: [
            "Adds information that is currently missing from a record",
            "Addresses incomplete records, not incorrect ones",
            "Answers: what do we still need to know?",
          ],
        },
      ],
    },
    {
      type: "paragraph",
      text: "These are not interchangeable services. Appending new fields onto an inaccurate record does not fix the inaccuracy, and cleansing an incomplete record does not fill in what was never there. Most real data-quality problems need to be diagnosed as one, the other, or both — not assumed to be solved by either alone.",
    },

    // 7. Validation before activation
    {
      type: "heading",
      level: 2,
      text: "Validation Before Activation",
    },
    {
      type: "paragraph",
      text: "An opportunity that has not been validated is still just a claim about an account, not a reliable basis for outreach. Moving unvalidated data into activation does not make the data more reliable — it just moves the point of failure further downstream, where it costs more to notice and fix.",
    },

    // 8. Validate vs. Verify (mandatory distinction)
    {
      type: "heading",
      level: 2,
      text: "Validate vs. Verify",
    },
    {
      type: "comparisonGrid",
      columns: [
        {
          label: "Validate",
          items: [
            "Applied to inputs — accounts, contacts, signals, records",
            "Asks: can we trust this data enough to act on it?",
            "Happens before activation",
          ],
        },
        {
          label: "Verify",
          items: [
            "Applied to outputs — activity, results, outcomes",
            "Asks: did this meet the standard required to count as real?",
            "Happens after activation",
          ],
        },
      ],
    },
    {
      type: "callout",
      tone: "warning",
      text: "Validate and Verify are not the same quality check applied twice. Confusing the two — treating a validated account as if its eventual outcome is already confirmed, or treating a verified outcome as proof the original data was accurate — undermines both stages.",
    },

    // 9. Common failure modes
    {
      type: "heading",
      level: 2,
      text: "Common Validation Failure Modes",
    },
    {
      type: "failureMode",
      title: "Validating only once",
      symptom: "Data that was checked at some point in the past is treated as still reliable indefinitely.",
      likelyCause: "Validation was treated as a one-time setup task rather than an ongoing check.",
      recommendedFix: "Re-validate records on a defined cadence, not just when they are first created.",
    },
    {
      type: "failureMode",
      title: "Checking completeness without checking accuracy",
      symptom: "A record with every field filled in is assumed to be correct.",
      likelyCause: "Validation focused on whether fields were populated, not whether their values were true.",
      recommendedFix: "Check accuracy and completeness as two separate questions, not one.",
    },
    {
      type: "failureMode",
      title: "Appending data without checking source quality",
      symptom: "New fields are added to a record from a source that has not itself been evaluated for reliability.",
      likelyCause: "Appending was treated as inherently additive and safe, regardless of where the new data came from.",
      recommendedFix: "Evaluate the reliability of an append source before trusting what it adds.",
    },
    {
      type: "failureMode",
      title: "Assuming a populated CRM is a reliable CRM",
      symptom: "Reporting and prioritization treat a full-looking CRM as a validated one.",
      likelyCause: "Population (how much data exists) was confused with validation (whether that data can be trusted).",
      recommendedFix: "Track validation status separately from field completeness.",
    },
    {
      type: "failureMode",
      title: "Moving unvalidated records directly into activation",
      symptom: "Outreach begins before the underlying account or contact data has been checked.",
      likelyCause: "Validate was skipped or treated as optional under time pressure.",
      recommendedFix: "Treat validation as a required gate before activation, not an optional step.",
    },

    // 10. Practical Validate checklist
    {
      type: "heading",
      level: 2,
      text: "Practical Validate Checklist",
    },
    {
      type: "checklist",
      items: [
        { text: "Required fields are checked for both completeness and accuracy, not completeness alone" },
        { text: "Data freshness is checked against a defined expectation, not assumed" },
        { text: "Records are checked for consistency across sources before being trusted" },
        { text: "Append sources are evaluated for reliability before their data is trusted" },
        { text: "No record moves into activation without passing through validation first" },
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
      serviceSlug: "data-cleansing",
    },
    {
      type: "serviceRelationshipCard",
      serviceSlug: "data-appending",
    },

    // 12. Related published reading
    {
      type: "heading",
      level: 2,
      text: "Related Reading",
    },
    {
      type: "relatedResource",
      resourceType: "article",
      slug: "crm-data-decay-problem",
    },
    {
      type: "relatedResource",
      resourceType: "article",
      slug: "what-data-appending-actually-fixes",
    },
    {
      type: "relatedResource",
      resourceType: "article",
      slug: "the-verification-gap",
    },
  ],
};
