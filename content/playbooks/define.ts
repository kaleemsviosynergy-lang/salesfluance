/**
 * SalesFluance Master Playbook — DEFINE Chapter (Phase 3A)
 *
 * Methodology-focused. No fabricated statistics, client results, or
 * performance claims. Define is treated as the foundational
 * ICP/account-definition stage — not a generic ABM service page — and is
 * explicitly distinguished from an operational account list.
 */

import type { PlaybookChapterConfig } from "../../types/playbook";

export const defineConfig: PlaybookChapterConfig = {
  schemaVersion: 1,
  slug: "define",
  kind: "framework",
  title: "Define: Establishing Who and What to Pursue",
  excerpt:
    "How the Define stage establishes who and what a revenue motion should pursue — and why an ICP is a definition of fit, not a list of accounts.",
  status: "published",
  frameworkStages: {
    primary: "define",
  },
  relatedServices: ["account-based-marketing", "lead-generation"],
  relatedArticles: ["abm-readiness-check", "account-prioritization-without-guesswork"],
  seo: {
    title: "Define — Building an Account-Based Foundation | SalesFluance Playbook",
    description:
      "Inside the Define stage of the SalesFluance Revenue Execution Framework: how a clear ICP and account definition prevent downstream targeting problems, and why an ICP is not the same as an account list.",
    keywords: [
      "revenue execution framework",
      "icp definition",
      "account-based marketing framework",
      "b2b account definition",
    ],
  },
  provenance: {
    source: "ai-generated",
    status: "published",
    lastEditedAt: "2026-09-26",
    generationNote:
      "Phase 3A framework-expansion chapter. Methodology-focused; no statistics, client evidence, or performance claims. Cross-references the existing, published 'ABM Readiness Check' and 'Account Prioritization Without Guesswork' articles rather than restating them.",
  },
  publishedAt: "2026-09-26",
  content: [
    // 1. What Define means
    {
      type: "paragraph",
      text: "Define is the first stage in the SalesFluance Revenue Execution Framework, and it answers a question every later stage depends on: who and what is this revenue motion actually pursuing? Discovery, validation, prioritization, and activation all inherit whatever definition is set here — a vague or missing definition does not disappear downstream, it just becomes harder to see.",
    },
    {
      type: "paragraph",
      text: "This chapter treats Define as the deliberate work of establishing target market, ideal customer profile, and account-level fit criteria before any signal is collected or any account is engaged.",
    },

    // 2. Where Define sits
    {
      type: "heading",
      level: 2,
      text: "Where Define Sits in the Framework",
    },
    {
      type: "paragraph",
      text: "Define is the first of eight stages, and the only one with nothing upstream of it. Everything that follows — from Discover's signal collection to Verify's outcome check — operates on whatever definition Define establishes.",
    },
    {
      type: "frameworkStageDiagram",
      highlightStage: "define",
    },

    // 3. The definition problem
    {
      type: "heading",
      level: 2,
      text: "The Definition Problem",
    },
    {
      type: "paragraph",
      text: "When a target market or ICP is left implicit, different parts of a revenue team end up pursuing subtly different definitions of who is worth pursuing — one person's “good account” is another's distraction. This does not require a large organization or a long sales cycle to happen; it happens whenever more than one person or system is prioritizing without a shared, explicit reference.",
    },
    {
      type: "paragraph",
      text: "The cost shows up downstream, not at Define itself: Discover collects signals against an unclear target, Prioritize has no stable criteria to rank against, and Activate ends up guessing which motion — demand creation or lead capture — actually fits a given account.",
    },

    // 4. What needs to be defined
    {
      type: "heading",
      level: 2,
      text: "What Needs to Be Defined",
    },
    {
      type: "list",
      items: [
        "Target market — the broad category of organizations the motion is meant to reach",
        "Ideal Customer Profile (ICP) — the specific combination of characteristics that indicate genuine fit, not just category membership",
        "Account characteristics — firmographic, technographic, and situational attributes that describe a real account, not a hypothetical one",
        "Relevance — why the problem being solved actually matters to this account right now",
        "Fit — whether the account's characteristics match the ICP closely enough to justify attention",
        "Buying context — who is likely involved in a decision, and under what conditions a conversation could plausibly start",
      ],
    },

    // 5. ICP vs. account list
    {
      type: "heading",
      level: 2,
      text: "ICP vs. Account List",
    },
    {
      type: "paragraph",
      text: "An ICP and an account list answer different questions, and treating them as the same thing is one of the more common definition errors. An ICP defines what fit looks like — it is a set of criteria, not a set of names. An account list is the operational result of applying that definition to real accounts at a point in time.",
    },
    {
      type: "comparisonGrid",
      columns: [
        {
          label: "ICP — a definition of fit",
          items: [
            "A set of criteria, not a set of names",
            "Should remain stable across a given period of time",
            "Answers: what does a good-fit account look like?",
          ],
        },
        {
          label: "Account list — an operational record set",
          items: [
            "A specific set of named accounts at a point in time",
            "Expected to change as accounts qualify in and out",
            "Answers: which real accounts currently match the ICP?",
          ],
        },
      ],
    },
    {
      type: "paragraph",
      text: "An account list built without a clear ICP behind it is just a list — it cannot be evaluated, refreshed, or defended when priorities are questioned. An ICP without an account list is just a theory — it has not yet been applied to anything real.",
    },

    // 6. Define before Discover
    {
      type: "heading",
      level: 2,
      text: "Define Before Discover",
    },
    {
      type: "paragraph",
      text: "Signal collection is only as useful as the definition it is collected against. Without a defined target, Discover has no way to distinguish a meaningful signal from background noise — everything looks equally relevant, because nothing has been defined as more relevant than anything else. Define does not need to be perfect before Discover begins, but it does need to exist.",
    },

    // 7. Common failure modes
    {
      type: "heading",
      level: 2,
      text: "Common Definition Failure Modes",
    },
    {
      type: "failureMode",
      title: "Targeting too broadly",
      symptom: "The ICP is defined so loosely that most accounts in a category technically qualify.",
      likelyCause:
        "Definition criteria were set to avoid excluding potential opportunity rather than to identify genuine fit.",
      recommendedFix: "Tighten the ICP until it meaningfully excludes accounts, not just describes the market.",
    },
    {
      type: "failureMode",
      title: "Defining an ICP only by firmographics",
      symptom: "Two accounts with identical firmographic profiles perform very differently once engaged.",
      likelyCause:
        "Firmographic criteria (size, industry, geography) were treated as sufficient on their own, without situational or buying-context criteria.",
      recommendedFix: "Add situational and buying-context criteria to the definition, not just firmographic filters.",
    },
    {
      type: "failureMode",
      title: "Confusing a named account list with an ICP",
      symptom: "When asked what the ICP is, the answer is a list of company names rather than a set of criteria.",
      likelyCause: "The account list was built without first defining the criteria it should represent.",
      recommendedFix: "Write down the criteria the list is supposed to represent, independent of the specific accounts on it.",
    },
    {
      type: "failureMode",
      title: "Changing targeting criteria mid-motion without recording the change",
      symptom:
        "Accounts already in progress no longer match the current definition, and no one can say when or why the definition changed.",
      likelyCause: "Definition changes were made informally, without updating the recorded ICP or account list criteria.",
      recommendedFix: "Treat a definition change as a deliberate update, recorded and applied consistently going forward.",
    },

    // 8. Define -> Discover
    {
      type: "heading",
      level: 2,
      text: "From Define to Discover",
    },
    {
      type: "paragraph",
      text: "Define's output is a description of who is worth pursuing and why. Discover's job is to find evidence about those accounts — signals, activity, context — that indicates when and how to act. Discover cannot do that work meaningfully until Define has established what it is looking for evidence of.",
    },

    // 9. Practical Define checklist
    {
      type: "heading",
      level: 2,
      text: "Practical Define Checklist",
    },
    {
      type: "checklist",
      items: [
        { text: "The target market is described in terms specific enough to exclude some accounts, not just include them" },
        { text: "The ICP is written as a set of criteria, not as a list of company names" },
        { text: "Firmographic criteria are paired with situational or buying-context criteria" },
        { text: "The current account list can be traced back to the ICP criteria it represents" },
        { text: "Any change to targeting criteria is recorded, not made informally" },
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
      serviceSlug: "account-based-marketing",
    },
    {
      type: "serviceRelationshipCard",
      serviceSlug: "lead-generation",
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
      slug: "abm-readiness-check",
    },
    {
      type: "relatedResource",
      resourceType: "article",
      slug: "account-prioritization-without-guesswork",
    },
  ],
};
