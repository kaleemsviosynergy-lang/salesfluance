/**
 * SalesFluance Content Service — Configuration Validator
 *
 * TypeScript guarantees shape safety only for content authored inside this
 * codebase and passed straight through, unmodified, at compile time. The
 * moment content can originate from a headless CMS response, a hand-edited
 * JSON import, or an AI content-generation pipeline, that guarantee
 * disappears — the object arriving at runtime is `unknown` until proven
 * otherwise. This module is that proof: a dependency-free runtime validator
 * that can sit in front of any future ingestion path (today: the local
 * registry: tomorrow: a CMS webhook or AI-generation output) without adding
 * a schema-library dependency to the content layer.
 *
 * Validation depth is intentionally uneven and deliberate: sections that
 * carry cross-references (service slugs, industry slugs) or are most prone
 * to CMS/authoring error receive field-level, per-item validation.
 * Simpler sections receive structural presence checks. Extend the relevant
 * `case` below as new failure modes are observed in practice.
 *
 * No React/UI dependency — this file is pure validation logic.
 */

import {
  CONTENT_STATUSES,
  ICON_NAMES,
  INDUSTRY_SLUGS,
  SECTION_TYPES,
  SERVICE_CATEGORIES,
  SERVICE_SLUGS,
  type ContentStatus,
  type IconName,
  type IndustrySlug,
  type SectionType,
  type ServiceCategory,
  type ServiceSlug,
} from "../../types/shared";
import type { ServicePageConfig } from "../../types/service";

/** A single validation failure, with a path for locating it in the source object. */
export interface ValidationIssue {
  /** Dot/bracket path to the offending field, e.g. "$.sections[3].data.headline". */
  path: string;
  message: string;
}

export type ValidationResult =
  | { valid: true; config: ServicePageConfig; issues: [] }
  | { valid: false; config: null; issues: ValidationIssue[] };

// ---------------------------------------------------------------------------
// Primitive guards
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

// ---------------------------------------------------------------------------
// Reusable nested-shape validators
// ---------------------------------------------------------------------------

function validateCTALink(value: unknown, path: string, issues: ValidationIssue[]): void {
  if (!isPlainObject(value)) {
    issues.push({ path, message: "expected a CTALink object" });
    return;
  }
  if (!isNonEmptyString(value.label)) {
    issues.push({ path: `${path}.label`, message: "required non-empty string" });
  }
  if (!isNonEmptyString(value.href)) {
    issues.push({ path: `${path}.href`, message: "required non-empty string" });
  }
  if (!isOneOf(value.variant, ["primary", "secondary", "outline", "text"] as const)) {
    issues.push({ path: `${path}.variant`, message: "must be a valid ButtonVariant" });
  }
}

function validateIcon(value: unknown, path: string, issues: ValidationIssue[]): void {
  if (!isOneOf<IconName>(value, ICON_NAMES)) {
    issues.push({ path, message: "must be one of the curated IconName values" });
  }
}

/** Validates an array of objects, each requiring id/[label|title]/description/icon —
 * the shape shared by ChallengeItem, SolutionPillar, OutcomeItem, DeliverableItem.
 * `titleField` accounts for SolutionPillar using `title` while the others use `label`. */
function validateLabeledIconItems(
  items: unknown,
  path: string,
  issues: ValidationIssue[],
  options: { requireDescription: boolean; titleField?: "label" | "title" },
): void {
  const titleField = options.titleField ?? "label";
  if (!Array.isArray(items) || items.length === 0) {
    issues.push({ path, message: "required non-empty array" });
    return;
  }
  items.forEach((item, index) => {
    const itemPath = `${path}[${index}]`;
    if (!isPlainObject(item)) {
      issues.push({ path: itemPath, message: "must be an object" });
      return;
    }
    if (!isNonEmptyString(item.id)) issues.push({ path: `${itemPath}.id`, message: "required non-empty string" });
    if (!isNonEmptyString(item[titleField])) {
      issues.push({ path: `${itemPath}.${titleField}`, message: "required non-empty string" });
    }
    if (options.requireDescription && !isNonEmptyString(item.description)) {
      issues.push({ path: `${itemPath}.description`, message: "required non-empty string" });
    }
    if (item.icon !== undefined) validateIcon(item.icon, `${itemPath}.icon`, issues);
  });
}

// ---------------------------------------------------------------------------
// Section-level validation — one case per SectionType
// ---------------------------------------------------------------------------

function validateSectionData(type: SectionType, data: unknown, path: string, issues: ValidationIssue[]): void {
  if (!isPlainObject(data)) {
    issues.push({ path, message: "section data must be an object" });
    return;
  }

  switch (type) {
    case "utilityBar": {
      if (!Array.isArray(data.breadcrumb) || data.breadcrumb.length === 0) {
        issues.push({ path: `${path}.breadcrumb`, message: "required non-empty array" });
      }
      validateCTALink(data.stickyCta, `${path}.stickyCta`, issues);
      break;
    }
    case "hero": {
      if (!isNonEmptyString(data.eyebrow)) issues.push({ path: `${path}.eyebrow`, message: "required non-empty string" });
      if (!isNonEmptyString(data.headline)) issues.push({ path: `${path}.headline`, message: "required non-empty string" });
      if (!isNonEmptyString(data.subhead)) issues.push({ path: `${path}.subhead`, message: "required non-empty string" });
      validateCTALink(data.primaryCta, `${path}.primaryCta`, issues);
      break;
    }
    case "trustIndicators": {
      // Fully optional by design — this is a proof-optional section with no required fields.
      break;
    }
    case "businessChallenges": {
      if (!isNonEmptyString(data.heading)) issues.push({ path: `${path}.heading`, message: "required non-empty string" });
      validateLabeledIconItems(data.items, `${path}.items`, issues, { requireDescription: true });
      break;
    }
    case "ourSolution": {
      if (!isNonEmptyString(data.heading)) issues.push({ path: `${path}.heading`, message: "required non-empty string" });
      validateLabeledIconItems(data.pillars, `${path}.pillars`, issues, { requireDescription: true, titleField: "title" });
      break;
    }
    case "serviceOverview": {
      if (!isNonEmptyString(data.heading)) issues.push({ path: `${path}.heading`, message: "required non-empty string" });
      if (!isStringArray(data.paragraphs) || data.paragraphs.length === 0) {
        issues.push({ path: `${path}.paragraphs`, message: "required non-empty string array" });
      }
      break;
    }
    case "whySalesFluance": {
      if (!isNonEmptyString(data.heading)) issues.push({ path: `${path}.heading`, message: "required non-empty string" });
      if (!Array.isArray(data.rows) || data.rows.length === 0) {
        issues.push({ path: `${path}.rows`, message: "required non-empty array" });
      } else {
        data.rows.forEach((row: unknown, index: number) => {
          const rowPath = `${path}.rows[${index}]`;
          if (!isPlainObject(row)) {
            issues.push({ path: rowPath, message: "must be an object" });
            return;
          }
          if (!isNonEmptyString(row.dimension)) issues.push({ path: `${rowPath}.dimension`, message: "required non-empty string" });
          if (!isNonEmptyString(row.traditionalAgency)) issues.push({ path: `${rowPath}.traditionalAgency`, message: "required non-empty string" });
          if (!isNonEmptyString(row.salesFluance)) issues.push({ path: `${rowPath}.salesFluance`, message: "required non-empty string" });
        });
      }
      break;
    }
    case "businessOutcomes": {
      if (!isNonEmptyString(data.heading)) issues.push({ path: `${path}.heading`, message: "required non-empty string" });
      validateLabeledIconItems(data.outcomes, `${path}.outcomes`, issues, { requireDescription: true });
      break;
    }
    case "whoThisIsFor": {
      if (!isNonEmptyString(data.intro)) issues.push({ path: `${path}.intro`, message: "required non-empty string" });
      if (!Array.isArray(data.personas) || data.personas.length === 0) {
        issues.push({ path: `${path}.personas`, message: "required non-empty array" });
      }
      if (!isNonEmptyString(data.companySizeRange)) {
        issues.push({ path: `${path}.companySizeRange`, message: "required non-empty string" });
      }
      if (
        !Array.isArray(data.industries) ||
        data.industries.length === 0 ||
        !data.industries.every((industry: unknown) => isOneOf<IndustrySlug>(industry, INDUSTRY_SLUGS))
      ) {
        issues.push({ path: `${path}.industries`, message: "must be a non-empty array of valid IndustrySlug values" });
      }
      break;
    }
    case "serviceProcess": {
      if (!Array.isArray(data.steps) || data.steps.length === 0) {
        issues.push({ path: `${path}.steps`, message: "required non-empty array" });
      } else {
        data.steps.forEach((step: unknown, index: number) => {
          const stepPath = `${path}.steps[${index}]`;
          if (!isPlainObject(step)) {
            issues.push({ path: stepPath, message: "must be an object" });
            return;
          }
          if (typeof step.order !== "number") issues.push({ path: `${stepPath}.order`, message: "required number" });
          if (!isNonEmptyString(step.label)) issues.push({ path: `${stepPath}.label`, message: "required non-empty string" });
          if (!isNonEmptyString(step.description)) issues.push({ path: `${stepPath}.description`, message: "required non-empty string" });
        });
      }
      break;
    }
    case "deliverables": {
      validateLabeledIconItems(data.items, `${path}.items`, issues, { requireDescription: false });
      break;
    }
    case "technologyStack": {
      if (!Array.isArray(data.groups) || data.groups.length === 0) {
        issues.push({ path: `${path}.groups`, message: "required non-empty array" });
      }
      break;
    }
    case "industriesServed": {
      if (!Array.isArray(data.industries) || data.industries.length === 0) {
        issues.push({ path: `${path}.industries`, message: "required non-empty array" });
      } else {
        data.industries.forEach((industry: unknown, index: number) => {
          const industryPath = `${path}.industries[${index}]`;
          if (!isPlainObject(industry) || !isOneOf<IndustrySlug>(industry.slug, INDUSTRY_SLUGS)) {
            issues.push({ path: `${industryPath}.slug`, message: "must be a valid IndustrySlug" });
          }
        });
      }
      break;
    }
    case "successMetrics": {
      if (!Array.isArray(data.metrics) || data.metrics.length === 0) {
        issues.push({ path: `${path}.metrics`, message: "required non-empty array" });
      }
      break;
    }
    case "faqs": {
      if (!Array.isArray(data.items) || data.items.length === 0) {
        issues.push({ path: `${path}.items`, message: "required non-empty array" });
      } else {
        data.items.forEach((item: unknown, index: number) => {
          const itemPath = `${path}.items[${index}]`;
          if (!isPlainObject(item)) {
            issues.push({ path: itemPath, message: "must be an object" });
            return;
          }
          if (!isNonEmptyString(item.question)) issues.push({ path: `${itemPath}.question`, message: "required non-empty string" });
          if (!isNonEmptyString(item.answer)) issues.push({ path: `${itemPath}.answer`, message: "required non-empty string" });
        });
      }
      break;
    }
    case "relatedServices": {
      if (!Array.isArray(data.services) || data.services.length === 0) {
        issues.push({ path: `${path}.services`, message: "required non-empty array" });
      } else {
        data.services.forEach((ref: unknown, index: number) => {
          const refPath = `${path}.services[${index}]`;
          if (!isPlainObject(ref) || !isOneOf<ServiceSlug>(ref.slug, SERVICE_SLUGS)) {
            issues.push({ path: `${refPath}.slug`, message: "must be a valid ServiceSlug" });
          }
        });
      }
      break;
    }
    case "finalCta": {
      if (!isNonEmptyString(data.heading)) issues.push({ path: `${path}.heading`, message: "required non-empty string" });
      if (!isNonEmptyString(data.reassurance)) issues.push({ path: `${path}.reassurance`, message: "required non-empty string" });
      validateCTALink(data.primaryCta, `${path}.primaryCta`, issues);
      break;
    }
  }
}

// ---------------------------------------------------------------------------
// Top-level validation
// ---------------------------------------------------------------------------

export function validateServiceConfig(input: unknown): ValidationResult {
  const issues: ValidationIssue[] = [];

  if (!isPlainObject(input)) {
    return { valid: false, config: null, issues: [{ path: "$", message: "config must be an object" }] };
  }

  if (input.schemaVersion !== 1) {
    issues.push({ path: "$.schemaVersion", message: "must equal 1" });
  }
  if (!isOneOf<ServiceSlug>(input.slug, SERVICE_SLUGS)) {
    issues.push({ path: "$.slug", message: "must be a valid ServiceSlug" });
  }
  if (!isOneOf<ServiceCategory>(input.category, SERVICE_CATEGORIES)) {
    issues.push({ path: "$.category", message: "must be a valid ServiceCategory" });
  }
  if (!isOneOf<ContentStatus>(input.status, CONTENT_STATUSES)) {
    issues.push({ path: "$.status", message: "must be a valid ContentStatus" });
  }

  if (!isPlainObject(input.seo)) {
    issues.push({ path: "$.seo", message: "required object" });
  } else {
    if (!isNonEmptyString(input.seo.title)) issues.push({ path: "$.seo.title", message: "required non-empty string" });
    if (!isNonEmptyString(input.seo.description)) issues.push({ path: "$.seo.description", message: "required non-empty string" });
    if (!isNonEmptyString(input.seo.canonical)) issues.push({ path: "$.seo.canonical", message: "required non-empty string" });
  }

  if (!Array.isArray(input.sections) || input.sections.length === 0) {
    issues.push({ path: "$.sections", message: "required non-empty array" });
  } else {
    const seenIds = new Set<string>();
    const seenTypes = new Set<SectionType>();
    // SECTION_TYPES is defined in canonical, IA-approved order — comparing
    // each entry's index within it turns "is this page's section order
    // correct" into a simple monotonically-increasing-index check. Sections
    // may be omitted; they may never be reordered relative to one another.
    let lastCanonicalIndex = -1;

    input.sections.forEach((entry: unknown, index: number) => {
      const entryPath = `$.sections[${index}]`;
      if (!isPlainObject(entry)) {
        issues.push({ path: entryPath, message: "must be an object" });
        return;
      }

      if (!isNonEmptyString(entry.id)) {
        issues.push({ path: `${entryPath}.id`, message: "required non-empty string" });
      } else if (seenIds.has(entry.id)) {
        issues.push({ path: `${entryPath}.id`, message: `duplicate section id "${entry.id}"` });
      } else {
        seenIds.add(entry.id);
      }

      if (!isOneOf<SectionType>(entry.type, SECTION_TYPES)) {
        issues.push({ path: `${entryPath}.type`, message: "must be a valid SectionType" });
        return; // cannot validate `data` shape without a known section type
      }

      if (seenTypes.has(entry.type)) {
        issues.push({
          path: `${entryPath}.type`,
          message: `duplicate section type "${entry.type}" — each section type may appear at most once per page`,
        });
      }
      seenTypes.add(entry.type);

      const canonicalIndex = SECTION_TYPES.indexOf(entry.type);
      if (canonicalIndex <= lastCanonicalIndex) {
        issues.push({
          path: `${entryPath}.type`,
          message: `section "${entry.type}" is out of order relative to the approved Information Architecture`,
        });
      } else {
        lastCanonicalIndex = canonicalIndex;
      }

      validateSectionData(entry.type, entry.data, `${entryPath}.data`, issues);
    });
  }

  if (issues.length > 0) {
    return { valid: false, config: null, issues };
  }

  // Every required field has been checked above; safe to assert the shape.
  // Routed through `unknown` deliberately — this is the one, explicit,
  // fully-justified assertion in the content service, made only after every
  // required field has been checked field-by-field above.
  return { valid: true, config: input as unknown as ServicePageConfig, issues: [] };
}