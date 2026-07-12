# Organization Aggregate

## Status

Domain Model v1.0

---

# Purpose

The Organization Aggregate is the supreme consistency boundary of the FLUANZ domain.

It represents the complete commercial sovereignty of a single Organization and protects every business artifact that belongs to that Organization.

Every Assessment, Observation, Evidence, Finding, Recommendation, and Executive Decision ultimately exists within the boundary of one Organization Aggregate.

The Organization Aggregate establishes ownership.

It protects commercial sovereignty.

---

# Aggregate Root

Organization

The Organization Entity is the Aggregate Root.

All external interactions with organizational business state occur through the Organization Aggregate Root.

No external process may directly modify internal business objects.

---

# Why This Aggregate Exists

Organizations are the primary ownership boundary of FLUANZ.

Every commercial investigation belongs to one Organization.

Every business conclusion belongs to one Organization.

Every executive decision belongs to one Organization.

Cross-organizational business ownership is never permitted.

---

# Aggregate Boundary

## Inside the Aggregate

The Organization Aggregate governs:

- Organization
- Organization Identity
- Assessments
- Executive Decisions

The Organization Aggregate owns these concepts.

It establishes their business ownership.

---

## Outside the Aggregate

Outside this Aggregate are:

- Other Organizations
- Platform infrastructure
- Authentication systems
- Notification systems
- External CRM systems
- External marketing platforms

These systems may communicate with the Aggregate.

They never become part of it.

---

# Business Responsibilities

The Organization Aggregate is responsible for:

- Protecting tenant isolation.
- Establishing business ownership.
- Governing organizational lifecycle.
- Protecting organizational invariants.
- Serving as the root consistency boundary.

The Organization Aggregate does not:

- Execute Assessments.
- Generate Findings.
- Produce Recommendations.
- Coordinate infrastructure.
- Perform integrations.

---

# Aggregate Invariants

The following business rules must always remain true.

## Invariant 1

Every Assessment belongs to exactly one Organization.

---

## Invariant 2

Every Executive Decision belongs to exactly one Organization.

---

## Invariant 3

No business artifact may belong to multiple Organizations.

---

## Invariant 4

Organization Identity is immutable.

---

## Invariant 5

Organizational ownership cannot change after business artifacts are created.

Historical ownership is permanent.

---

## Invariant 6

Organization isolation must never be violated.

Commercial data cannot leak across Organization boundaries.

---

# Transaction Boundary

The Organization Aggregate protects transactions involving:

- Organization creation.
- Organizational ownership.
- Assessment ownership.
- Executive Decision ownership.

These changes must remain consistent.

Business operations occurring inside individual Assessments belong to the Assessment Aggregate.

---

# Relationship to Assessment Aggregate

The Organization Aggregate owns Assessments.

The Assessment Aggregate governs investigative behavior.

Organization

↓

Assessment Aggregate

Ownership flows downward.

Behavior remains localized.

---

# Relationship to Domain Events

The Organization Aggregate may publish events such as:

- OrganizationCreated
- OrganizationActivated
- OrganizationArchived

These events communicate organizational lifecycle changes.

---

# Relationship to Repositories

One Organization Aggregate is persisted through one Organization Repository.

Repositories expose only the Aggregate Root.

Internal implementation remains encapsulated.

---

# Aggregate Size

The Organization Aggregate intentionally remains small.

It protects ownership.

It does not absorb investigative behavior.

Assessment logic belongs inside the Assessment Aggregate.

---

# Aggregate Collaboration

The Organization Aggregate collaborates with:

- Assessment Aggregate
- Domain Services
- Organization Repository

Communication occurs through Aggregate Roots and Domain Events.

Direct internal object access is prohibited.

---

# Constitutional References

Derived from:

- DDD Workshop 03 – Organization Domain Discovery
- Organization Entity
- Organization Identity Value Object

Aligned with:

- Founder Bible v1.0
- Engineering Principles v1.0
- Architecture Vision v1.0

---

# Closing Statement

The Organization Aggregate is the supreme consistency boundary of the FLUANZ domain.

It establishes organizational ownership, protects tenant isolation, and guarantees that every business artifact remains permanently associated with one and only one Organization.

All other Aggregates operate beneath this boundary, ensuring that commercial sovereignty remains the highest architectural invariant of the platform.