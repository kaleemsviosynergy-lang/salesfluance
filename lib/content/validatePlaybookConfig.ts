/**
 * SalesFluance Content Service — Playbook Configuration Validator (Phase 1)
 *
 * Same rationale as `validateBlogConfig.ts` and `validateServiceConfig.ts`:
 * TypeScript only guarantees shape safety for content authored inside this
 * codebase and passed through unmodified at compile time. This is a
 * dependency-free runtime validator so a future CMS/AI-authoring ingestion
 * path can sit behind the exact same `PlaybookChapterConfig` contract
 * without adding a schema-library dependency to the content layer.
 *
 * This validator checks a *single* config's structural shape only. It
 * deliberately does not check whether a `relatedChapters`/`relatedArticles`
 * slug actually exists elsewhere in a registry, whether a `relatedServices`
 * slug has an *implemented* service configuration, or whether two chapters
 * share a duplicate slug/canonical path — those are cross-record concerns.
 * `content/blog/index.ts`'s `getBlogRegistryIssues()` is the precedent for
 * that kind of registry-integrity audit; building an equivalent for
 * Playbook chapters is deliberately deferred (there is nothing to audit
 * yet, since Phase 1's registry is empty — see `content/playbooks/index.ts`).
 *
 * `relatedServices`/`relatedIndustries` are validated against the closed
 * `SERVICE_SLUGS`/`INDUSTRY_SLUGS` unions from `types/shared.ts` — this is
 * structural/type validation (is this a legal slug value at all), not a
 * check against the live service/industry content registries (does a
 * published config actually exist for it). That stronger check is a
 * render-time/cross-record concern for the future accessor layer, exactly
 * as `validateBlogConfig.ts` already treats `relatedServices` the same way.
 *
 * No React/UI dependency — this file is pure validation logic.
 */

import {
  EVIDENCE_BASES,
  FRAMEWORK_STAGES,
  PLAYBOOK_BLOCK_TYPES,
  PLAYBOOK_CALLOUT_TONES,
  PLAYBOOK_CHAPTER_KINDS,
  PLAYBOOK_RELATED_RESOURCE_TYPES,
  PLAYBOOK_USE_CASE_IDS,
  type PlaybookChapterConfig,
} from "../../types/playbook";
import { BLOG_VISUALS } from "../../types/blog";
import { CONTENT_STATUSES, INDUSTRY_SLUGS, SERVICE_SLUGS } from "../../types/shared";
import type { ValidationIssue } from "./validateServiceConfig";

export type { ValidationIssue };

export type PlaybookValidationResult =
  | { valid: true; config: PlaybookChapterConfig; issues: [] }
  | { valid: false; config: null; issues: ValidationIssue[] };

// ---------------------------------------------------------------------------
// Primitive guards — intentionally duplicated (not imported) from
// `validateBlogConfig.ts`/`validateServiceConfig.ts`. These are 3-line,
// dependency-free predicates; importing them across independent content
// domains would create a coupling for no real reuse benefit — the same
// reasoning `validateBlogConfig.ts` already states for itself.
// ---------------------------------------------------------------------------

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((v) => typeof v === "string");
}

function isOneOf<T extends string>(value: unknown, allowed: readonly T[]): value is T {
  return typeof value === "string" && (allowed as readonly string[]).includes(value);
}

/** Kebab-case only — matches the route segment convention used elsewhere in the app. */
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function isValidSlug(value: unknown): value is string {
  return typeof value === "string" && SLUG_PATTERN.test(value);
}

function isValidIsoDate(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0 && !Number.isNaN(Date.parse(value));
}

// ---------------------------------------------------------------------------
// Reusable nested-shape validators
// ---------------------------------------------------------------------------

function validateFrameworkStages(value: unknown, path: string, issues: ValidationIssue[]): void {
  if (value === undefined) return;
  if (!isPlainObject(value)) {
    issues.push({ path, message: "must be an object when present" });
    return;
  }
  if (!isOneOf(value.primary, FRAMEWORK_STAGES)) {
    issues.push({ path: `${path}.primary`, message: `must be one of: ${FRAMEWORK_STAGES.join(", ")}` });
  }
  if (value.secondary !== undefined) {
    if (!Array.isArray(value.secondary)) {
      issues.push({ path: `${path}.secondary`, message: "must be an array when present" });
    } else {
      value.secondary.forEach((stage: unknown, index: number) => {
        if (!isOneOf(stage, FRAMEWORK_STAGES)) {
          issues.push({
            path: `${path}.secondary[${index}]`,
            message: `must be one of: ${FRAMEWORK_STAGES.join(", ")}`,
          });
        }
      });
    }
  }
}

function validateRelatedIndustries(value: unknown, path: string, issues: ValidationIssue[]): void {
  if (value === undefined) return;
  if (!Array.isArray(value)) {
    issues.push({ path, message: "must be an array when present" });
    return;
  }
  value.forEach((entry: unknown, index: number) => {
    const entryPath = `${path}[${index}]`;
    if (!isPlainObject(entry)) {
      issues.push({ path: entryPath, message: "must be an object" });
      return;
    }
    if (!isOneOf(entry.slug, INDUSTRY_SLUGS)) {
      issues.push({ path: `${entryPath}.slug`, message: "must be a valid IndustrySlug" });
    }
    if (!isOneOf(entry.basis, EVIDENCE_BASES)) {
      issues.push({ path: `${entryPath}.basis`, message: `must be one of: ${EVIDENCE_BASES.join(", ")}` });
    }
  });
}

function validateSeo(value: unknown, path: string, issues: ValidationIssue[]): void {
  if (!isPlainObject(value)) {
    issues.push({ path, message: "required object" });
    return;
  }
  if (!isNonEmptyString(value.title)) {
    issues.push({ path: `${path}.title`, message: "required non-empty string" });
  }
  if (!isNonEmptyString(value.description)) {
    issues.push({ path: `${path}.description`, message: "required non-empty string" });
  }
  if (value.keywords !== undefined && !isStringArray(value.keywords)) {
    issues.push({ path: `${path}.keywords`, message: "must be a string array when present" });
  }
  // Canonical rule: canonical is derived by the future route/metadata layer
  // from the chapter's own slug (`/resources/playbooks/<slug>`) and must
  // never be authored as content. A stray `canonical` field is rejected
  // outright rather than silently accepted and ignored.
  if ("canonical" in value) {
    issues.push({
      path: `${path}.canonical`,
      message:
        "must not be authored — canonical is derived from the chapter slug by the route/metadata layer",
    });
  }
}

function validateContentBlocks(value: unknown, path: string, issues: ValidationIssue[]): void {
  if (!Array.isArray(value) || value.length === 0) {
    issues.push({ path, message: "required non-empty array" });
    return;
  }
  value.forEach((block: unknown, index: number) => {
    const blockPath = `${path}[${index}]`;
    if (!isPlainObject(block)) {
      issues.push({ path: blockPath, message: "must be an object" });
      return;
    }
    switch (block.type) {
      case "paragraph":
        if (!isNonEmptyString(block.text)) {
          issues.push({ path: `${blockPath}.text`, message: "required non-empty string" });
        }
        break;

      case "heading":
        if (block.level !== 2 && block.level !== 3) {
          issues.push({ path: `${blockPath}.level`, message: "must be 2 or 3" });
        }
        if (!isNonEmptyString(block.text)) {
          issues.push({ path: `${blockPath}.text`, message: "required non-empty string" });
        }
        break;

      case "list":
        if (!isStringArray(block.items) || block.items.length === 0) {
          issues.push({ path: `${blockPath}.items`, message: "required non-empty string array" });
        }
        break;

      case "frameworkStageDiagram":
        if (block.highlightStage !== undefined && !isOneOf(block.highlightStage, FRAMEWORK_STAGES)) {
          issues.push({
            path: `${blockPath}.highlightStage`,
            message: `must be one of: ${FRAMEWORK_STAGES.join(", ")}`,
          });
        }
        break;

      case "processFlow":
        if (!Array.isArray(block.steps) || block.steps.length === 0) {
          issues.push({ path: `${blockPath}.steps`, message: "required non-empty array" });
        } else {
          block.steps.forEach((step: unknown, stepIndex: number) => {
            if (!isPlainObject(step) || !isNonEmptyString(step.label)) {
              issues.push({
                path: `${blockPath}.steps[${stepIndex}].label`,
                message: "required non-empty string",
              });
            }
          });
        }
        break;

      case "comparisonGrid":
        if (!Array.isArray(block.columns) || block.columns.length === 0) {
          issues.push({ path: `${blockPath}.columns`, message: "required non-empty array" });
        } else {
          block.columns.forEach((column: unknown, columnIndex: number) => {
            if (!isPlainObject(column) || !isNonEmptyString(column.label)) {
              issues.push({
                path: `${blockPath}.columns[${columnIndex}].label`,
                message: "required non-empty string",
              });
            }
            if (!isPlainObject(column) || !isStringArray(column.items) || column.items.length === 0) {
              issues.push({
                path: `${blockPath}.columns[${columnIndex}].items`,
                message: "required non-empty string array",
              });
            }
          });
        }
        break;

      case "callout":
        if (!isOneOf(block.tone, PLAYBOOK_CALLOUT_TONES)) {
          issues.push({
            path: `${blockPath}.tone`,
            message: `must be one of: ${PLAYBOOK_CALLOUT_TONES.join(", ")}`,
          });
        }
        if (!isNonEmptyString(block.text)) {
          issues.push({ path: `${blockPath}.text`, message: "required non-empty string" });
        }
        break;

      case "serviceRelationshipCard":
        if (!isOneOf(block.serviceSlug, SERVICE_SLUGS)) {
          issues.push({ path: `${blockPath}.serviceSlug`, message: "must be a valid ServiceSlug" });
        }
        break;

      case "industryRelationshipCard":
        if (!isOneOf(block.industrySlug, INDUSTRY_SLUGS)) {
          issues.push({ path: `${blockPath}.industrySlug`, message: "must be a valid IndustrySlug" });
        }
        if (!isOneOf(block.basis, EVIDENCE_BASES)) {
          issues.push({
            path: `${blockPath}.basis`,
            message: `must be one of: ${EVIDENCE_BASES.join(", ")}`,
          });
        }
        break;

      case "checklist":
        if (!Array.isArray(block.items) || block.items.length === 0) {
          issues.push({ path: `${blockPath}.items`, message: "required non-empty array" });
        } else {
          block.items.forEach((item: unknown, itemIndex: number) => {
            if (!isPlainObject(item) || !isNonEmptyString(item.text)) {
              issues.push({
                path: `${blockPath}.items[${itemIndex}].text`,
                message: "required non-empty string",
              });
            }
          });
        }
        break;

      case "diagnostic":
        if (!Array.isArray(block.criteria) || block.criteria.length === 0) {
          issues.push({ path: `${blockPath}.criteria`, message: "required non-empty array" });
        } else {
          block.criteria.forEach((criterion: unknown, criterionIndex: number) => {
            if (!isPlainObject(criterion) || !isNonEmptyString(criterion.question)) {
              issues.push({
                path: `${blockPath}.criteria[${criterionIndex}].question`,
                message: "required non-empty string",
              });
            }
            if (!isPlainObject(criterion) || !isNonEmptyString(criterion.guidance)) {
              issues.push({
                path: `${blockPath}.criteria[${criterionIndex}].guidance`,
                message: "required non-empty string",
              });
            }
          });
        }
        break;

      case "failureMode":
        (["title", "symptom", "likelyCause", "recommendedFix"] as const).forEach((field) => {
          if (!isNonEmptyString(block[field])) {
            issues.push({ path: `${blockPath}.${field}`, message: "required non-empty string" });
          }
        });
        break;

      case "implementationStep":
        if (typeof block.stepNumber !== "number" || !Number.isInteger(block.stepNumber) || block.stepNumber < 1) {
          issues.push({ path: `${blockPath}.stepNumber`, message: "required positive integer" });
        }
        if (!isNonEmptyString(block.title)) {
          issues.push({ path: `${blockPath}.title`, message: "required non-empty string" });
        }
        if (!isNonEmptyString(block.description)) {
          issues.push({ path: `${blockPath}.description`, message: "required non-empty string" });
        }
        break;

      case "useCase":
        if (!isOneOf(block.useCaseId, PLAYBOOK_USE_CASE_IDS)) {
          issues.push({
            path: `${blockPath}.useCaseId`,
            message: `must be one of: ${PLAYBOOK_USE_CASE_IDS.join(", ")}`,
          });
        }
        break;

      case "relatedResource":
        if (!isOneOf(block.resourceType, PLAYBOOK_RELATED_RESOURCE_TYPES)) {
          issues.push({
            path: `${blockPath}.resourceType`,
            message: `must be one of: ${PLAYBOOK_RELATED_RESOURCE_TYPES.join(", ")}`,
          });
        }
        if (!isValidSlug(block.slug)) {
          issues.push({ path: `${blockPath}.slug`, message: "required, kebab-case, URL-safe string" });
        }
        break;

      case "visual":
        if (!isOneOf(block.visual, BLOG_VISUALS)) {
          issues.push({ path: `${blockPath}.visual`, message: `must be one of: ${BLOG_VISUALS.join(", ")}` });
        }
        break;

      default:
        issues.push({
          path: `${blockPath}.type`,
          message: `must be one of: ${PLAYBOOK_BLOCK_TYPES.join(", ")}`,
        });
    }
  });
}

// ---------------------------------------------------------------------------
// Top-level validation
// ---------------------------------------------------------------------------

export function validatePlaybookConfig(input: unknown): PlaybookValidationResult {
  const issues: ValidationIssue[] = [];

  if (!isPlainObject(input)) {
    return { valid: false, config: null, issues: [{ path: "$", message: "config must be an object" }] };
  }

  if (input.schemaVersion !== 1) {
    issues.push({ path: "$.schemaVersion", message: "must equal 1" });
  }
  if (!isValidSlug(input.slug)) {
    issues.push({ path: "$.slug", message: "required, kebab-case, URL-safe string" });
  }
  if (!isOneOf(input.kind, PLAYBOOK_CHAPTER_KINDS)) {
    issues.push({ path: "$.kind", message: `must be one of: ${PLAYBOOK_CHAPTER_KINDS.join(", ")}` });
  }
  if (!isNonEmptyString(input.title)) {
    issues.push({ path: "$.title", message: "required non-empty string" });
  }
  if (!isNonEmptyString(input.excerpt)) {
    issues.push({ path: "$.excerpt", message: "required non-empty string" });
  }
  if (!isOneOf(input.status, CONTENT_STATUSES)) {
    issues.push({ path: "$.status", message: "must be a valid ContentStatus" });
  }

  validateFrameworkStages(input.frameworkStages, "$.frameworkStages", issues);

  if (input.relatedServices !== undefined) {
    if (!Array.isArray(input.relatedServices)) {
      issues.push({ path: "$.relatedServices", message: "must be an array when present" });
    } else {
      input.relatedServices.forEach((ref: unknown, index: number) => {
        if (!isOneOf(ref, SERVICE_SLUGS)) {
          issues.push({ path: `$.relatedServices[${index}]`, message: "must be a valid ServiceSlug" });
        }
      });
    }
  }

  validateRelatedIndustries(input.relatedIndustries, "$.relatedIndustries", issues);

  if (input.relatedArticles !== undefined) {
    if (!isStringArray(input.relatedArticles) || input.relatedArticles.some((s) => !isValidSlug(s))) {
      issues.push({ path: "$.relatedArticles", message: "must be an array of kebab-case slug strings" });
    }
  }

  if (input.relatedChapters !== undefined) {
    if (!isStringArray(input.relatedChapters) || input.relatedChapters.some((s) => !isValidSlug(s))) {
      issues.push({ path: "$.relatedChapters", message: "must be an array of kebab-case slug strings" });
    }
  }

  validateSeo(input.seo, "$.seo", issues);
  validateContentBlocks(input.content, "$.content", issues);

  // Publication date rules: malformed dates are always rejected; a
  // "published" chapter must have a valid `publishedAt` (the field the
  // future public route/sitemap would need), a draft/review chapter
  // legitimately has none yet and is not penalized for omitting it —
  // identical rule to `validateBlogConfig.ts`.
  if (input.publishedAt !== undefined && !isValidIsoDate(input.publishedAt)) {
    issues.push({ path: "$.publishedAt", message: "must be a valid ISO 8601 date string" });
  }
  if (input.updatedAt !== undefined && !isValidIsoDate(input.updatedAt)) {
    issues.push({ path: "$.updatedAt", message: "must be a valid ISO 8601 date string" });
  }
  if (input.status === "published" && !isValidIsoDate(input.publishedAt)) {
    issues.push({
      path: "$.publishedAt",
      message: 'required valid ISO 8601 date string when status is "published"',
    });
  }

  if (issues.length > 0) {
    return { valid: false, config: null, issues };
  }

  // Every required field has been checked above; safe to assert the shape —
  // the one, explicit, fully-justified assertion in this validator, made
  // only after every required field has been checked field-by-field above.
  return { valid: true, config: input as unknown as PlaybookChapterConfig, issues: [] };
}
