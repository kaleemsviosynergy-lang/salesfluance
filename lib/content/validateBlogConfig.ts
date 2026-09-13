/**
 * SalesFluance Content Service — Blog Configuration Validator
 *
 * Same rationale as `validateServiceConfig.ts`: TypeScript only guarantees
 * shape safety for content authored inside this codebase and passed
 * through unmodified at compile time. This is a dependency-free runtime
 * validator so a future CMS/AI-authoring ingestion path can sit behind the
 * exact same `BlogPostConfig` contract without adding a schema-library
 * dependency to the content layer.
 *
 * This validator checks a *single* config's structural shape only. It
 * deliberately does not check whether a `relatedArticles` slug actually
 * exists elsewhere in the registry — that is a cross-record concern and
 * lives in `getBlogRegistryIssues()` in `content/blog/index.ts`, exactly
 * as `validateServiceConfig` only checks that a `relatedServices.slug` is
 * a legal `ServiceSlug` value, not that the target is implemented.
 *
 * No React/UI dependency — this file is pure validation logic.
 */

import {
  ARTICLE_ROLES,
  BLOG_PILLARS,
  type ArticleRole,
  type BlogPillar,
  type BlogPostConfig,
} from "../../types/blog";
import { CONTENT_STATUSES, SERVICE_SLUGS, type ContentStatus, type ServiceSlug } from "../../types/shared";
import type { ValidationIssue } from "./validateServiceConfig";

export type { ValidationIssue };

export type BlogValidationResult =
  | { valid: true; config: BlogPostConfig; issues: [] }
  | { valid: false; config: null; issues: ValidationIssue[] };

// ---------------------------------------------------------------------------
// Primitive guards — intentionally duplicated (not imported) from
// `validateServiceConfig.ts`. These are 3-line, dependency-free predicates;
// importing them across the two validators would create a coupling between
// two otherwise-independent content domains for no real reuse benefit.
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

function validateAuthor(value: unknown, path: string, issues: ValidationIssue[]): void {
  if (!isPlainObject(value)) {
    issues.push({ path, message: "expected a BlogAuthor object" });
    return;
  }
  if (!isNonEmptyString(value.id)) issues.push({ path: `${path}.id`, message: "required non-empty string" });
  if (!isNonEmptyString(value.name)) issues.push({ path: `${path}.name`, message: "required non-empty string" });
}

function validateSeo(value: unknown, path: string, issues: ValidationIssue[]): void {
  if (!isPlainObject(value)) {
    issues.push({ path, message: "required object" });
    return;
  }
  if (!isNonEmptyString(value.title)) issues.push({ path: `${path}.title`, message: "required non-empty string" });
  if (!isNonEmptyString(value.description)) issues.push({ path: `${path}.description`, message: "required non-empty string" });
  if (!isNonEmptyString(value.canonical)) issues.push({ path: `${path}.canonical`, message: "required non-empty string" });
  if (value.keywords !== undefined && !isStringArray(value.keywords)) {
    issues.push({ path: `${path}.keywords`, message: "must be a string array when present" });
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
        if (!isNonEmptyString(block.text)) issues.push({ path: `${blockPath}.text`, message: "required non-empty string" });
        break;
      case "heading":
        if (block.level !== 2 && block.level !== 3) issues.push({ path: `${blockPath}.level`, message: "must be 2 or 3" });
        if (!isNonEmptyString(block.text)) issues.push({ path: `${blockPath}.text`, message: "required non-empty string" });
        break;
      case "list":
        if (!isStringArray(block.items) || block.items.length === 0) {
          issues.push({ path: `${blockPath}.items`, message: "required non-empty string array" });
        }
        break;
      default:
        issues.push({ path: `${blockPath}.type`, message: "must be one of: paragraph, heading, list" });
    }
  });
}

// ---------------------------------------------------------------------------
// Top-level validation
// ---------------------------------------------------------------------------

export function validateBlogConfig(input: unknown): BlogValidationResult {
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
  if (!isNonEmptyString(input.title)) {
    issues.push({ path: "$.title", message: "required non-empty string" });
  }
  if (!isNonEmptyString(input.excerpt)) {
    issues.push({ path: "$.excerpt", message: "required non-empty string" });
  }
  if (!isOneOf<ContentStatus>(input.status, CONTENT_STATUSES)) {
    issues.push({ path: "$.status", message: "must be a valid ContentStatus" });
  }
  if (!isOneOf<ArticleRole>(input.role, ARTICLE_ROLES)) {
    issues.push({ path: "$.role", message: "must be a valid ArticleRole (cornerstone | supporting)" });
  }
  if (!isOneOf<BlogPillar>(input.pillar, BLOG_PILLARS)) {
    issues.push({ path: "$.pillar", message: "must be one of the six approved editorial pillars" });
  }
  if (input.tags !== undefined && !isStringArray(input.tags)) {
    issues.push({ path: "$.tags", message: "must be a string array when present" });
  }

  validateAuthor(input.author, "$.author", issues);
  validateSeo(input.seo, "$.seo", issues);
  validateContentBlocks(input.content, "$.content", issues);

  // Publication date rules: malformed dates are always rejected; a
  // "published" post must have a valid `publishedAt` (the field the
  // public listing/route would need), a draft/review post legitimately
  // has none yet and is not penalized for omitting it.
  if (input.publishedAt !== undefined && !isValidIsoDate(input.publishedAt)) {
    issues.push({ path: "$.publishedAt", message: "must be a valid ISO 8601 date string" });
  }
  if (input.updatedAt !== undefined && !isValidIsoDate(input.updatedAt)) {
    issues.push({ path: "$.updatedAt", message: "must be a valid ISO 8601 date string" });
  }
  if (input.status === "published" && !isValidIsoDate(input.publishedAt)) {
    issues.push({ path: "$.publishedAt", message: "required valid ISO 8601 date string when status is \"published\"" });
  }

  if (input.relatedServices !== undefined) {
    if (!Array.isArray(input.relatedServices)) {
      issues.push({ path: "$.relatedServices", message: "must be an array when present" });
    } else {
      input.relatedServices.forEach((ref: unknown, index: number) => {
        if (!isOneOf<ServiceSlug>(ref, SERVICE_SLUGS)) {
          issues.push({ path: `$.relatedServices[${index}]`, message: "must be a valid ServiceSlug" });
        }
      });
    }
  }

  if (input.relatedArticles !== undefined) {
    if (!isStringArray(input.relatedArticles) || input.relatedArticles.some((s) => !isValidSlug(s))) {
      issues.push({ path: "$.relatedArticles", message: "must be an array of kebab-case slug strings" });
    }
  }

  if (issues.length > 0) {
    return { valid: false, config: null, issues };
  }

  // Every required field has been checked above; safe to assert the shape —
  // the one, explicit, fully-justified assertion in this validator, made
  // only after every required field has been checked field-by-field above.
  return { valid: true, config: input as unknown as BlogPostConfig, issues: [] };
}
