# Aggregates

## Status

Domain Model v1.0

---

# Purpose

Aggregates define the transactional consistency boundaries of the FLUANZ domain.

They ensure that related business concepts evolve together while protecting the invariants that preserve organizational truth.

Aggregates do not exist to group data.

They exist to guard business consistency.

---

# Definition

An Aggregate is a cluster of related domain objects that are treated as a single consistency boundary.

Every Aggregate is governed by one Aggregate Root.

Only the Aggregate Root may be accessed directly from outside the Aggregate.

---

# Why Aggregates Exist

The FLUANZ domain contains many related business concepts.

Not all concepts must change together.

Aggregates determine:

- Which concepts must remain consistent.
- Which business rules are always enforced.
- Which changes must occur atomically.
- Which changes may occur asynchronously.

Aggregates protect business truth while enabling scalable software architecture.

---

# Aggregate Root

Every Aggregate possesses exactly one Aggregate Root.

The Aggregate Root is responsible for:

- Protecting Aggregate invariants.
- Coordinating state changes.
- Controlling access to internal domain objects.
- Maintaining transactional consistency.

Internal objects must never be modified directly from outside the Aggregate.

---

# Aggregate Responsibilities

An Aggregate is responsible for:

- Enforcing business invariants.
- Maintaining consistency.
- Protecting domain integrity.
- Coordinating related state transitions.
- Defining transactional boundaries.

An Aggregate is not responsible for:

- User interface behavior.
- API communication.
- Database persistence.
- Infrastructure concerns.
- Cross-Aggregate orchestration.

---

# Aggregate Principles

## Principle 1

Every Aggregate protects one cohesive business capability.

---

## Principle 2

Every Aggregate has exactly one Aggregate Root.

---

## Principle 3

External systems communicate only with the Aggregate Root.

---

## Principle 4

Business invariants must always hold when an Aggregate transaction completes.

---

## Principle 5

Aggregates should be as small as possible while fully protecting business consistency.

Large Aggregates reduce scalability.

Small Aggregates improve autonomy.

---

## Principle 6

Aggregates do not reference other Aggregates directly.

Relationships across Aggregates occur through identity and domain events.

---

# Transaction Boundary

Every Aggregate defines one transactional consistency boundary.

Within that boundary:

- Changes succeed together.
- Changes fail together.
- Business invariants remain true.

Outside that boundary:

- Eventual consistency is preferred.
- Domain Events coordinate collaboration.
- Independent Aggregates remain autonomous.

---

# Invariants

Every Aggregate explicitly defines:

- What must always be true.
- What must never happen.
- What business rules cannot be violated.

Aggregates exist primarily to enforce these invariants.

---

# Aggregate Size

Aggregate boundaries are determined by business consistency rather than object relationships.

An Aggregate should never become a general-purpose container.

Concepts belong together only when they must change together.

---

# Relationship to Entities

Entities define business identity.

Aggregates define business consistency.

An Entity may exist inside an Aggregate.

Not every Entity becomes an Aggregate Root.

---

# Relationship to Value Objects

Value Objects describe business meaning.

Aggregates protect business behavior.

Value Objects remain immutable inside Aggregate boundaries.

---

# Relationship to Domain Services

Domain Services coordinate business processes involving multiple Aggregates.

They never bypass Aggregate invariants.

They orchestrate.

Aggregates protect.

---

# Relationship to Repositories

Repositories persist Aggregate Roots.

Repositories never expose internal Aggregate implementation details.

Each Aggregate possesses one Repository.

---

# Relationship to Domain Events

Aggregates publish Domain Events after successful state transitions.

Domain Events enable communication between independent Aggregates while preserving autonomy.

---

# Aggregate Discovery Method

Every Aggregate within FLUANZ is discovered using four questions:

## 1. Ownership

Who owns this business capability?

---

## 2. Consistency

What business rules must always remain true?

---

## 3. Transaction

What changes must succeed or fail together?

---

## 4. Boundary

What belongs inside this Aggregate?

Everything else belongs outside.

---

# Constitutional References

Derived from:

- DDD Workshops 01–10
- Core Domain Entities
- Value Objects

Aligned with:

- Founder Bible v1.0
- Engineering Principles v1.0
- Architecture Vision v1.0

---

# Closing Statement

Aggregates represent the behavioral boundaries of the FLUANZ domain.

They transform a collection of business concepts into a coherent, consistent system by enforcing invariants, protecting organizational truth, and defining the transactional rules that govern every state change.

Every future implementation of FLUANZ shall derive its transactional architecture from these Aggregate definitions rather than from infrastructure or database design.