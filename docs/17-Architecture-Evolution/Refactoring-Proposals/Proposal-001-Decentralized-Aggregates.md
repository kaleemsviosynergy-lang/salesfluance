# Proposal-001

# Decentralized Aggregate Architecture

## Status

Proposed

---

# Purpose

This proposal defines the architectural evolution required to decentralize the current Assessment Aggregate into multiple specialized Aggregate Roots.

Its purpose is to improve transactional consistency, scalability, concurrency, and long-term maintainability while preserving the constitutional business truths established during Domain Discovery.

This proposal implements ADR-004.

---

# Background

Architecture Review 01 and Aggregate Boundary Forensics concluded that the current Assessment Aggregate carries responsibilities that belong to multiple independent consistency boundaries.

The existing model successfully represents business truth but groups several business capabilities within one Aggregate Root.

This proposal introduces specialized Aggregate Roots while preserving complete business lineage.

---

# Current Architecture

```
Organization Aggregate

↓

Assessment Aggregate

├── Assessment
├── Observation
├── Evidence
├── Finding
├── Recommendation
└── Executive Decision
```

Current characteristics:

- Large transactional boundary
- Broad Aggregate responsibility
- Increasing coordination complexity
- Limited scalability
- High coupling

---

# Proposed Architecture

```
Organization Aggregate
        │
        ▼
Assessment Aggregate
        │
        ├──────────────┐
        │              │
        ▼              ▼

Evidence Aggregate   Recommendation Aggregate
        │                    │
        └──────────────┐     │
                       ▼     ▼

            Executive Decision Aggregate
```

Each Aggregate protects a single business consistency boundary.

---

# Aggregate Responsibilities

## Organization Aggregate

Owns organizational identity and business ownership.

---

## Assessment Aggregate

Owns the lifecycle of a commercial investigation.

Responsibilities:

- Assessment creation
- Assessment status
- Assessment scope
- Time window
- Investigation lifecycle

---

## Evidence Aggregate

Owns business proof.

Responsibilities:

- Observation verification
- Evidence creation
- Evidence integrity
- Evidence lineage

---

## Recommendation Aggregate

Owns executive guidance.

Responsibilities:

- Finding interpretation
- Recommendation generation
- Recommendation prioritization
- Recommendation validity

---

## Executive Decision Aggregate

Owns executive commitment.

Responsibilities:

- Decision recording
- Decision rationale
- Executive accountability
- Decision history

---

# Transaction Boundaries

## Assessment Aggregate

Must guarantee:

- Assessment creation
- Assessment completion
- Assessment lifecycle consistency

---

## Evidence Aggregate

Must guarantee:

- Evidence integrity
- Observation lineage
- Evidence immutability

---

## Recommendation Aggregate

Must guarantee:

- Recommendation consistency
- Priority calculation
- Recommendation explainability

---

## Executive Decision Aggregate

Must guarantee:

- Decision integrity
- Executive ownership
- Decision immutability

No cross-Aggregate transaction is required.

---

# Aggregate Relationships

Assessment initiates the investigation.

↓

Evidence establishes business proof.

↓

Recommendation provides executive guidance.

↓

Executive Decision records organizational commitment.

Business lineage remains complete through immutable references and Domain Events.

---

# Domain Event Evolution

The existing Domain Events remain valid.

Assessment Started

↓

Evidence Forged

↓

Finding Derived

↓

Recommendation Generated

↓

Revenue Readiness Calculated

↓

Executive Decision Recorded

No business meaning changes.

Only Aggregate ownership changes.

---

# Repository Evolution

Current:

- Organization Repository
- Assessment Repository

Proposed:

- Organization Repository
- Assessment Repository
- Evidence Repository
- Recommendation Repository
- Executive Decision Repository

Each Repository corresponds to one Aggregate Root.

---

# Domain Service Evolution

Assessment Service

Coordinates Assessment lifecycle.

---

Evidence Evaluation Service

Coordinates Evidence Aggregate.

---

Recommendation Service

Coordinates Recommendation Aggregate.

---

Revenue Readiness Calculation Service

Consumes completed outputs from multiple Aggregates.

No Domain Service owns Aggregate state.

---

# Consistency Model

Within an Aggregate:

Strong consistency.

Across Aggregates:

Event-driven consistency.

Business lineage remains fully traceable.

---

# Scalability Benefits

Expected improvements:

- Smaller Aggregate Roots
- Reduced transactional contention
- Improved concurrency
- Independent scalability
- Better separation of concerns
- Lower coupling
- Improved maintainability

---

# Migration Strategy

Phase 1

Introduce new Aggregate definitions.

↓

Phase 2

Introduce new Repositories.

↓

Phase 3

Move Aggregate ownership.

↓

Phase 4

Update Domain Services.

↓

Phase 5

Validate Domain Events.

↓

Phase 6

Retire monolithic Assessment Aggregate.

---

# Risks

Potential risks:

- Increased architectural complexity
- More Aggregate coordination
- Additional Repository interfaces
- Eventual consistency considerations

These risks are accepted because they improve long-term structural integrity.

---

# Success Criteria

The proposal is considered successful when:

- Every Aggregate protects one consistency boundary.
- Aggregate responsibilities are singular.
- Business lineage remains intact.
- Executive explainability is preserved.
- Revenue Readiness remains fully traceable.
- No constitutional principles are violated.

---

# Constitutional References

Implements:

ADR-004

Derived from:

Aggregate Boundary Forensics

Architecture Review 01

Engineering Principles

Architecture Evolution Constitution

---

# Closing Statement

This proposal evolves the FLUANZ architecture from a centralized transactional model toward a decentralized Aggregate architecture that more accurately reflects the independent business consistency boundaries discovered during Aggregate Forensics.

The proposal preserves every constitutional business truth established during Domain Discovery while improving scalability, maintainability, and long-term architectural resilience.