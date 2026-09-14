/**
 * Phase 2 batch 3 — editorial content. Real body copy, researched.
 * Remains `status: "draft"` pending editorial review; not reachable
 * through any public retrieval path until a human reviewer changes that
 * status (see lib/content/getBlogPost.ts).
 *
 * BANT and MEDDIC are referenced only as examples of qualification
 * frameworks, illustrating that such frameworks are built for a
 * particular kind of sale rather than serving as a universal standard.
 * Per the Articles #1-#10 publication-pass correction, hard historical
 * claims (a specific origin decade for BANT; a specific founding year
 * and named individuals for MEDDIC) were removed as insufficiently
 * supported by primary sources for publication — the frameworks are
 * named without dating their origin. No quantitative claims are used.
 */

import type { BlogPostConfig } from "../../types/blog";
import { editorialTeam } from "./authors";

export const whatQualifiedActuallyMeansConfig: BlogPostConfig = {
  schemaVersion: 1,
  slug: "what-qualified-actually-means",
  title: "Why \"Qualified\" Means Something Different on Every Sales Team",
  excerpt:
    "Marketing calls it qualified. Sales rejects it as unqualified. Both are using the word correctly — for definitions nobody actually agreed on.",
  status: "published",
  role: "supporting",
  pillar: "Revenue Process & Operations",
  author: editorialTeam,
  publishedAt: "2026-09-15",
  seo: {
    title: "Why \"Qualified\" Means Something Different on Every Sales Team | SalesFluance",
    description:
      "A lead can't be meaningfully judged against the word \"qualified\" until an organization defines what qualification means for its own revenue model. A practical alignment framework for sales and marketing.",
    keywords: [
      "lead qualification",
      "MQL vs SQL",
      "sales and marketing alignment",
      "qualification criteria",
      "BANT MEDDIC",
    ],
    canonical: "/resources/blogs/what-qualified-actually-means",
  },
  relatedServices: ["lead-generation", "demand-generation"],
  relatedArticles: ["the-verification-gap", "mql-to-sales-conversation-gap"],
  content: [
    { type: "heading", level: 2, text: "A Word Everyone Uses and Nobody Defines" },
    {
      type: "paragraph",
      text: "Few words do more damage in B2B revenue organizations while sounding more precise than “qualified.” Marketing calls a lead qualified. Sales rejects it as unqualified. An SDR books a meeting they consider qualified; the account executive who takes the call disagrees within five minutes. Leadership asks why the qualified-lead number and the closed-deal number don't move together. Everyone in the conversation believes they're using the word correctly, because nobody has actually agreed on what the word means for their specific business.",
    },
    { type: "heading", level: 2, text: "Qualified Compared to What" },
    {
      type: "paragraph",
      text: "The core problem is that “qualified” is not a fixed state — it's a judgment relative to a specific next step, and different roles in a revenue organization are judging against different next steps without realizing it. A marketing-qualified lead is judged against the criteria for handing a record to sales development at all, often engagement-based, and often the lowest bar in the chain. A sales-qualified lead is judged against whether an SDR believes the record is worth pursuing directly. Accepted by sales describes whether an account executive agrees the opportunity is real enough to invest selling time in. Meeting-ready describes whether a conversation is worth scheduling at all, independent of whether it will lead anywhere. Opportunity-ready describes whether there's enough evidence of budget, need, and timing to treat the record as a genuine sales opportunity. Revenue-ready describes something narrower still: that the deal is close enough to closing that revenue forecasting should account for it.",
    },
    {
      type: "paragraph",
      text: "None of these is more “correct” than the others. They're answering different questions, at different points in the process, for different audiences. The failure isn't having multiple definitions — it's using one word for all of them and assuming everyone means the same thing.",
    },
    { type: "heading", level: 2, text: "Why Definitions Vary — And Should" },
    {
      type: "paragraph",
      text: "It would be convenient if there were one universal definition of “qualified” every B2B company could adopt. There isn't, because what counts as sufficient evidence to move a record forward depends on facts specific to the business: how long the sales cycle runs, how large the average deal is, how many people are typically involved in a buying decision, how mature the product and category are, whether the motion is inbound or outbound, and whether selling is transactional or consultative. A qualification bar calibrated for a low-cost, self-serve product doesn't transfer to a large enterprise sale with a multi-department buying committee, and a bar built for a highly consultative motion will slow down a transactional one for no benefit. Qualification methodology should fit the revenue model it's serving — treating any single framework, formal or informal, as universally correct is itself a mistake, regardless of which framework it is.",
    },
    { type: "heading", level: 3, text: "A Familiar Scene" },
    {
      type: "paragraph",
      text: "The conflict this creates is familiar to almost anyone who has sat in a pipeline review. Marketing presents a slide showing MQL volume up double digits quarter over quarter. Sales leadership responds that the meetings coming from those leads aren't converting, and that reps are spending time on calls that go nowhere. Marketing points out that the leads met every criterion in the documented scoring model. Sales points out that the scoring model doesn't capture the thing that actually matters to them — whether the person on the call has real authority and a real, current problem. Both sides are technically right, because “met the documented criteria” and “is worth an AE's time” were never actually confirmed to be the same threshold. The argument that follows isn't really about lead quality. It's about which of several unstated definitions of “qualified” should have been the one everyone was building toward.",
    },
    { type: "heading", level: 2, text: "Common Failure Modes" },
    {
      type: "list",
      items: [
        "MQL volume becomes the primary KPI marketing reports on, regardless of what happens to those leads afterward.",
        "Marketing declares a program successful while sales is quietly rejecting most of what it produces.",
        "SDRs develop their own informal qualification rules because the documented criteria don't match what they observe in practice.",
        "Account executives apply a different, stricter bar than the one SDRs were trained against, so leads that clear one gate stall at the next.",
        "Teams optimize for the number of meetings booked rather than the likelihood any given meeting leads somewhere.",
        "Qualification criteria exist only as institutional memory, never actually written down anywhere.",
        "Written criteria exist but are applied inconsistently, so two reps qualify similar records differently.",
        "The feedback loop between sales and marketing is weak or one-directional, so marketing rarely learns which of its “qualified” leads sales actually valued.",
      ],
    },
    { type: "heading", level: 2, text: "A Practical Alignment Framework" },
    {
      type: "paragraph",
      text: "Rather than adopting a specific methodology, a more durable fix is agreeing on the questions any methodology needs to answer for a given business.",
    },
    {
      type: "list",
      items: [
        "Qualified for what? The specific next step this judgment unlocks, stated explicitly rather than assumed.",
        "Qualified by whom? Which role is making this call, and what authority they have to make it stick.",
        "Qualified based on which evidence? The specific, checkable inputs behind the judgment, not a general impression.",
        "What must be true before handoff? The minimum conditions that must hold before a record moves to the next stage.",
        "What happens if the next stage rejects it? A defined process for disagreement, rather than a quiet, undocumented rejection.",
        "How is that feedback recorded? So a pattern of rejections becomes visible and correctable rather than anecdotal.",
        "When should the definition change? An explicit trigger, tied to changes in the business, rather than letting the definition drift silently over time.",
      ],
    },
    {
      type: "paragraph",
      text: "Answering these questions doesn't require adopting a particular acronym or scoring system. Frameworks such as BANT, a simple checklist built around budget, authority, need, and timeline, and MEDDIC, a more detailed methodology built for complex, high-stakes enterprise deals, can provide useful structure. But neither should automatically be treated as a universal definition of qualification. Each was designed with a particular kind of sale in mind, at a particular level of complexity, which makes either a reasonable starting point for a business whose actual sales motion resembles the one it was built for, and a poor fit for one that doesn't.",
    },
    { type: "heading", level: 3, text: "Why the Same Framework Doesn't Travel" },
    {
      type: "paragraph",
      text: "It's worth dwelling on why a qualification framework built for one company so often fails when copied into another, since this is where a lot of well-intentioned standardization efforts go wrong. A framework encodes assumptions about the sales motion it was built for: how much a buyer typically knows before engaging, how many people are usually involved in approving a purchase, how much evidence of intent is realistic to expect this early in a relationship. Import that framework into a business with a different deal size, a different buying committee structure, or a different sales cycle length, and the thresholds it encodes stop matching reality — not because the framework is poorly designed, but because it was designed to answer a different version of the qualification question than the one this business actually needs answered.",
    },
    { type: "heading", level: 2, text: "Why This Matters More Than It Looks" },
    {
      type: "paragraph",
      text: "Misaligned qualification definitions are rarely blamed directly when pipeline underperforms — the symptom usually gets attributed to lead quality, sales execution, or market conditions instead. But a lot of what looks like a lead-quality problem is actually a definition problem: marketing and sales agreeing on a word without agreeing on its meaning, then measuring success and failure against incompatible standards. Fixing the definition doesn't require new technology or a new campaign. It requires the less glamorous work of writing down what “qualified” actually means, for this business, at each stage, and revisiting that definition as the business changes.",
    },
    {
      type: "paragraph",
      text: "That revisiting matters as much as the initial definition. A qualification bar set when a company was selling primarily to one segment, at one price point, through one motion, doesn't automatically stay accurate as the business adds segments, raises prices, or shifts from inbound to outbound. Treating the definition as fixed once it's documented is its own failure mode — a subtler one than never documenting it at all, but one that produces the same eventual symptom: sales and marketing quietly drifting back toward incompatible, informal standards because the formal one stopped matching reality.",
    },
    { type: "heading", level: 2, text: "The Bottom Line" },
    {
      type: "paragraph",
      text: "“Qualified” isn't a fact about a lead — it's a judgment made against a specific standard, for a specific purpose, by a specific role. The organizations that avoid the recurring sales-marketing conflict over lead quality aren't the ones that found the single correct definition. They're the ones that made their definitions explicit, tied them to their actual revenue model, and built a real feedback loop to keep them accurate as that model changes.",
    },
  ],
  provenance: {
    source: "ai-generated",
    status: "published",
    generationNote:
      "Phase 2 batch 3, revised for the Articles #1-#10 publication pass. BANT and MEDDIC are referenced only as examples of qualification frameworks, not as universal standards. Publication-pass revision removed hard historical claims (BANT's specific origin decade; MEDDIC's specific founding year and named creators) that lacked sufficiently strong primary-source support, while preserving the frameworks themselves as illustrative examples and the article's central thesis unchanged. No quantitative claims are used anywhere in this article.",
  },
};
