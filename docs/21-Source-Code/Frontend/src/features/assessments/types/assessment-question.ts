export type QuestionType =
  | "text"
  | "textarea"
  | "number"
  | "boolean"
  | "single-select"
  | "multi-select"
  | "date";

export type QuestionAnswer = string | number | boolean | string[] | null;

export interface AssessmentQuestion {
  id: string;
  sectionId: string;
  question: string;
  description?: string;
  type: QuestionType;
  required: boolean;
  /** Relative weight of this question within its section's score. */
  weight: number;
  answer: QuestionAnswer;
  evidenceRequired: boolean;
}