# ADR-004

## Title

Decentralize Assessment Aggregate Boundaries

---

## Status

Proposed

---

## Source

Architecture Evolution

Aggregate Boundary Forensics

Assessment Aggregate Review

---

## Problem

The Assessment Aggregate currently acts as the transactional owner of:

- Observations
- Evidence
- Findings
- Recommendations
- Revenue Readiness
- Executive Decisions

Aggregate Forensics determined that these concepts do not share one common consistency boundary.

Several lifecycle transitions are sequential rather than atomic.

Maintaining all concepts inside one Aggregate increases transactional scope, coupling, and future scalability constraints.

---

## Evidence

Architectural Forensics demonstrated:

- Observations are immutable business facts.
- Evidence is created from verified Observations.
- Findings are derived from Evidence.
- Recommendations are generated from Findings.
- Executive Decisions are independent acts of executive judgment.

Each stage possesses an independent consistency boundary.

No business invariant requires all stages to change atomically within a single transaction.

---

## Decision

The Assessment Aggregate shall be decentralized.

Assessment remains the orchestration boundary of a commercial investigation.

Business consistency will be enforced through multiple specialized Aggregate Roots, each responsible for a single transactional boundary.

---

## Expected Aggregate Structure

Organization Aggregate

↓

Assessment Aggregate

↓

Evidence Aggregate

↓

Recommendation Aggregate

↓

Executive Decision Aggregate

Each Aggregate protects its own invariants while preserving complete business lineage through immutable references and Domain Events.

---

## Alternatives Considered

### Alternative A

Retain one monolithic Assessment Aggregate.

Rejected.

Reason:

Transactional scope exceeds required business invariants.

---

### Alternative B

Decompose into specialized Aggregates.

Accepted.

Reason:

Matches discovered consistency boundaries.

Reduces coupling.

Improves scalability.

Preserves explainability.

---

## Consequences

Positive

- Smaller transactional boundaries
- Independent scalability
- Improved concurrency
- Reduced coupling
- Clear Aggregate responsibilities
- Better future event-driven evolution

Negative

- Additional coordination through Domain Events
- More Aggregate references
- Increased architectural sophistication

Trade-off accepted.

---

## Affected Documents

Assessment Aggregate

Repositories

Domain Events

Domain Services

Architecture Vision

C4 Model

---

## Date

2026-07-12