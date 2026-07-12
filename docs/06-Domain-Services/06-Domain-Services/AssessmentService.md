# Assessment Service

## Status

Domain Model v1.0

---

# Purpose

The Assessment Service coordinates the complete lifecycle of a commercial Assessment within the FLUANZ domain.

Its purpose is to orchestrate the business process of transforming a point-in-time commercial investigation into trustworthy executive intelligence while preserving the invariants of the Organization Aggregate and the Assessment Aggregate.

The Assessment Service coordinates investigations.

It does not own investigative state.

---

# Definition

Assessment Service is a stateless Domain Service responsible for coordinating business operations that span the Assessment lifecycle.

It ensures that every Assessment progresses through its defined stages while respecting Aggregate boundaries and business rules.

---

# Why This Service Exists

An Assessment involves multiple business operations that extend beyond the responsibility of a single Aggregate.

The Assessment Service coordinates these operations while allowing each Aggregate to maintain ownership of its own consistency rules.

Without this service, lifecycle coordination would become fragmented across multiple components.

---

# Business Responsibilities

The Assessment Service is responsible for:

- Initializing Assessments.
- Coordinating Observation collection.
- Initiating Evidence evaluation.
- Coordinating Finding generation.
- Coordinating Recommendation generation.
- Closing Assessments.
- Preserving Assessment lifecycle integrity.

The Assessment Service is not responsible for:

- Evaluating Evidence.
- Creating Findings.
- Calculating Revenue Readiness.
- Executing Executive Decisions.
- Persisting business data.
- Communicating with infrastructure.

---

# Business Operations

The Assessment Service coordinates operations such as:

- Start Assessment
- Validate Assessment Scope
- Establish Time Window
- Coordinate Observation Collection
- Transition to Evidence Evaluation
- Transition to Finding Discovery
- Transition to Recommendation Generation
- Close Assessment

These operations represent business coordination rather than business ownership.

---

# Business Rules

## Rule 1

An Assessment must always begin with a valid Organization.

---

## Rule 2

Every Assessment establishes an immutable Assessment Scope and Time Window before Observation collection begins.

---

## Rule 3

Evidence evaluation cannot begin until Observation collection satisfies Assessment requirements.

---

## Rule 4

Recommendation generation cannot occur until Findings have been established.

---

## Rule 5

An Assessment may only be closed when all investigative stages have completed successfully.

---

## Rule 6

Once closed, an Assessment becomes immutable.

No further investigative changes are permitted.

---

# Aggregate Collaboration

The Assessment Service coordinates:

Organization Aggregate

↓

Assessment Aggregate

↓

Evidence Evaluation Service

↓

Recommendation Service

↓

Revenue Readiness Calculation Service

Each Aggregate remains responsible for protecting its own invariants.

The Assessment Service coordinates their collaboration.

---

# Relationship to Assessment Aggregate

The Assessment Aggregate owns investigative consistency.

The Assessment Service coordinates investigative progression.

The Service never bypasses Aggregate rules.

---

# Relationship to Evidence Evaluation Service

When Observation collection reaches completion, the Assessment Service delegates Evidence evaluation to the Evidence Evaluation Service.

The Assessment Service does not evaluate Evidence itself.

---

# Relationship to Recommendation Service

After Findings have been established, the Assessment Service coordinates Recommendation generation through the Recommendation Service.

Recommendation creation remains an independent business capability.

---

# Relationship to Revenue Readiness Calculation Service

Once investigative reasoning is complete, the Assessment Service coordinates Revenue Readiness calculation.

The calculation itself belongs to the Revenue Readiness Calculation Service.

---

# Relationship to Domain Events

The Assessment Service may coordinate publication of events such as:

- AssessmentStarted
- AssessmentProgressed
- AssessmentCompleted
- AssessmentClosed

These events communicate completed business state transitions.

---

# Statelessness

The Assessment Service maintains no business state.

All business state remains within Aggregate Roots.

Every operation is deterministic based upon current Aggregate state.

---

# Constitutional References

Derived from:

- DDD Workshop 04 – Assessment Domain Discovery
- Assessment Aggregate
- Assessment Entity

Aligned with:

- Founder Bible v1.0
- Engineering Principles v1.0
- Domain Services Constitution

---

# Closing Statement

The Assessment Service is the lifecycle coordinator of the FLUANZ domain.

It orchestrates the progression of a commercial investigation from initialization through completion while preserving Aggregate boundaries, enforcing business sequencing, and ensuring that every Assessment produces trustworthy executive intelligence through a disciplined and deterministic investigative process.