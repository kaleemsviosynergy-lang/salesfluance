export type CaseStudy = {
  slug: string;
  status: "placeholder" | "published";

  eyebrow: string;
  title: string;
  summary: string;

  industry: string;
  service: string;

  challenge: string;
  approach: string;
  verification: string;
  outcome: string;
  lessons: string;

  metrics?: {
    label: string;
    value: string;
  }[];

  featured?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "case-study-placeholder",
    status: "placeholder",

    eyebrow: "CASE STUDY TEMPLATE",

    title: "[Client case study coming soon]",

    summary:
      "This case study template is ready for a real client engagement. No company, metric, or outcome has been published here until verified client information is available.",

    industry: "[Industry]",

    service: "[Service / Engagement]",

    challenge:
      "[Describe the business problem, commercial challenge, or growth constraint the client needed to solve.]",

    approach:
      "[Describe the SalesFluance strategy, execution model, targeting, outreach, intelligence, or partnership work applied to the engagement.]",

    verification:
      "[Describe the quality controls, validation process, human verification, or measurement used during the engagement.]",

    outcome:
      "[Insert verified business outcome once approved for publication.]",

    lessons:
      "[Describe the key lesson or insight from the engagement.]",

    metrics: [
      {
        label: "[Verified Metric]",
        value: "[—]",
      },
      {
        label: "[Verified Metric]",
        value: "[—]",
      },
      {
        label: "[Verified Metric]",
        value: "[—]",
      },
    ],

    featured: true,
  },
];