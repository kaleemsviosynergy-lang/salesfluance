import type { Assessment, AssessmentStatus } from "@/features/assessments/types/assessment";
import type { AssessmentSection } from "@/features/assessments/types/assessment-section";
import type {
  AssessmentQuestion,
  QuestionAnswer,
  QuestionType,
} from "@/features/assessments/types/assessment-question";

interface QuestionTemplate {
  question: string;
  type: QuestionType;
  evidenceRequired: boolean;
}

interface SectionTemplate {
  title: string;
  description: string;
  questions: QuestionTemplate[];
}

/**
 * Every assessment follows the same standardized Revenue Readiness
 * framework, so all mock assessments share this section/question shape —
 * only progress, scores, and answers vary per assessment.
 */
const SECTION_TEMPLATES: SectionTemplate[] = [
  {
    title: "Financial Health",
    description: "Revenue predictability, margins, and financial controls.",
    questions: [
      {
        question:
          "Does the organization have a documented revenue forecasting process?",
        type: "boolean",
        evidenceRequired: true,
      },
      {
        question: "What is the average gross margin across core product lines?",
        type: "number",
        evidenceRequired: false,
      },
    ],
  },
  {
    title: "Sales Pipeline & Forecasting",
    description: "Pipeline hygiene, forecasting accuracy, and deal visibility.",
    questions: [
      {
        question:
          "Describe how sales stages are defined and enforced in the CRM.",
        type: "textarea",
        evidenceRequired: true,
      },
      {
        question: "Which forecasting methodology is currently in use?",
        type: "single-select",
        evidenceRequired: false,
      },
    ],
  },
  {
    title: "Customer Retention",
    description: "Churn drivers, renewal processes, and account health signals.",
    questions: [
      {
        question: "Is customer health scoring in place across the account base?",
        type: "boolean",
        evidenceRequired: true,
      },
      {
        question: "What was the net revenue retention rate for the last fiscal year?",
        type: "number",
        evidenceRequired: true,
      },
    ],
  },
];

function clampPercentage(value: number): number {
  return Math.max(0, Math.min(100, value));
}

function buildAnswer(type: QuestionType, questionIndex: number): QuestionAnswer {
  switch (type) {
    case "boolean":
      return questionIndex % 2 === 0;
    case "number":
      return 58 + questionIndex * 11;
    case "textarea":
      return "Documented and reviewed quarterly by the revenue operations team.";
    case "single-select":
      return "Bottoms-up pipeline forecast";
    default:
      return null;
  }
}

function buildSections(
  assessmentId: string,
  status: AssessmentStatus,
  overallProgress: number,
  overallScore: number | null,
): AssessmentSection[] {
  return SECTION_TEMPLATES.map((template, sectionIndex) => {
    const sectionId = `${assessmentId}_section_${sectionIndex + 1}`;

    const sectionProgress =
      status === "not-started"
        ? 0
        : status === "completed"
          ? 100
          : clampPercentage(overallProgress + (sectionIndex - 1) * 8);

    const sectionScore =
      sectionProgress === 0
        ? null
        : clampPercentage((overallScore ?? 50) + (sectionIndex - 1) * 5);

    const questions: AssessmentQuestion[] = template.questions.map(
      (questionTemplate, questionIndex) => {
        const questionId = `${sectionId}_q${questionIndex + 1}`;

        return {
          id: questionId,
          sectionId,
          question: questionTemplate.question,
          type: questionTemplate.type,
          required: true,
          weight: questionIndex === 0 ? 2 : 1,
          answer:
            sectionProgress === 0
              ? null
              : buildAnswer(questionTemplate.type, questionIndex),
          evidenceRequired: questionTemplate.evidenceRequired,
        };
      },
    );

    return {
      id: sectionId,
      assessmentId,
      title: template.title,
      description: template.description,
      order: sectionIndex + 1,
      progress: sectionProgress,
      score: sectionScore,
      questions,
    };
  });
}

interface AssessmentSeed {
  id: string;
  organizationId: string;
  title: string;
  description: string;
  status: AssessmentStatus;
  progress: number;
  overallScore: number | null;
  owner: string;
  startedAt: string | null;
  completedAt: string | null;
  lastUpdatedAt: string;
}

const ASSESSMENT_SEEDS: AssessmentSeed[] = [
  {
    id: "asmt_001",
    organizationId: "org_001",
    title: "Q3 2026 Revenue Readiness Assessment",
    description:
      "Quarterly evaluation of Northwind Analytics' revenue operations maturity.",
    status: "in-progress",
    progress: 65,
    overallScore: 72,
    owner: "Priya Chandran",
    startedAt: "2026-07-01",
    completedAt: null,
    lastUpdatedAt: "2026-07-20",
  },
  {
    id: "asmt_002",
    organizationId: "org_001",
    title: "Q1 2026 Revenue Readiness Assessment",
    description: "Baseline revenue readiness assessment for early 2026.",
    status: "completed",
    progress: 100,
    overallScore: 68,
    owner: "Priya Chandran",
    startedAt: "2026-01-10",
    completedAt: "2026-02-05",
    lastUpdatedAt: "2026-02-05",
  },
  {
    id: "asmt_003",
    organizationId: "org_002",
    title: "Annual Revenue Readiness Review",
    description:
      "Full-year review of Verity Capital Partners' revenue forecasting and controls.",
    status: "in-progress",
    progress: 40,
    overallScore: 55,
    owner: "Marcus Ellery",
    startedAt: "2026-06-15",
    completedAt: null,
    lastUpdatedAt: "2026-07-18",
  },
  {
    id: "asmt_004",
    organizationId: "org_003",
    title: "Healthcare Compliance & Revenue Readiness",
    description:
      "Combined compliance and revenue readiness assessment for Solace Health Group.",
    status: "overdue",
    progress: 25,
    overallScore: 38,
    owner: "Dana Whitfield",
    startedAt: "2026-04-01",
    completedAt: null,
    lastUpdatedAt: "2026-05-10",
  },
  {
    id: "asmt_005",
    organizationId: "org_004",
    title: "Manufacturing Revenue Readiness Assessment",
    description:
      "Evaluation of Ferrowatt Industrial's order-to-cash and demand forecasting maturity.",
    status: "in-progress",
    progress: 55,
    overallScore: 50,
    owner: "Lukas Bergmann",
    startedAt: "2026-06-01",
    completedAt: null,
    lastUpdatedAt: "2026-07-12",
  },
  {
    id: "asmt_006",
    organizationId: "org_005",
    title: "E-commerce Growth Readiness Assessment",
    description:
      "Initial readiness assessment for Cascade Outfitters ahead of its next funding round.",
    status: "not-started",
    progress: 0,
    overallScore: null,
    owner: "Jamie Okafor",
    startedAt: null,
    completedAt: null,
    lastUpdatedAt: "2026-07-14",
  },
  {
    id: "asmt_007",
    organizationId: "org_006",
    title: "Professional Services Readiness Assessment",
    description:
      "Revenue readiness review for Meridian & Cole Advisory's practice growth plan.",
    status: "completed",
    progress: 100,
    overallScore: 88,
    owner: "Sienna Cole",
    startedAt: "2026-05-01",
    completedAt: "2026-06-02",
    lastUpdatedAt: "2026-06-02",
  },
  {
    id: "asmt_008",
    organizationId: "org_007",
    title: "Logistics Revenue Readiness Assessment",
    description:
      "Assessment of Portway Logistics' pricing, contract, and renewal processes.",
    status: "overdue",
    progress: 30,
    overallScore: 35,
    owner: "Tobias Vermeer",
    startedAt: "2026-03-01",
    completedAt: null,
    lastUpdatedAt: "2026-04-20",
  },
  {
    id: "asmt_009",
    organizationId: "org_008",
    title: "Fintech Revenue Readiness Assessment",
    description:
      "Revenue readiness review supporting Brightline Fintech's Series C diligence.",
    status: "completed",
    progress: 100,
    overallScore: 91,
    owner: "Alina Kwok",
    startedAt: "2026-06-01",
    completedAt: "2026-07-01",
    lastUpdatedAt: "2026-07-01",
  },
  {
    id: "asmt_010",
    organizationId: "org_010",
    title: "Legal Services Readiness Assessment",
    description:
      "Revenue readiness review for Ironclad Legal Partners' practice expansion.",
    status: "in-progress",
    progress: 70,
    overallScore: 69,
    owner: "Naomi Rourke",
    startedAt: "2026-06-20",
    completedAt: null,
    lastUpdatedAt: "2026-07-16",
  },
];

export const MOCK_ASSESSMENTS: Assessment[] = ASSESSMENT_SEEDS.map((seed) => ({
  id: seed.id,
  organizationId: seed.organizationId,
  title: seed.title,
  description: seed.description,
  status: seed.status,
  progress: seed.progress,
  overallScore: seed.overallScore,
  owner: seed.owner,
  startedAt: seed.startedAt,
  completedAt: seed.completedAt,
  lastUpdatedAt: seed.lastUpdatedAt,
  sections: buildSections(seed.id, seed.status, seed.progress, seed.overallScore),
}));