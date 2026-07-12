# Repositories

## Status

Domain Model v1.0

---

# Purpose

Repositories represent the persistence boundary of the FLUANZ domain.

Their purpose is to provide the ability to retrieve and preserve Aggregate Roots without exposing persistence technology to the Domain Model.

Repositories preserve business continuity.

They do not implement business logic.

---

# Definition

A Repository is a domain abstraction responsible for reconstructing and persisting Aggregate Roots.

Repositories provide access to business state.

They never define business behavior.

---

# Why Repositories Exist

Business concepts should remain independent of persistence technology.

The Domain Model must never depend upon:

- Databases
- ORM frameworks
- SQL
- NoSQL
- Cloud storage
- Infrastructure implementation

Repositories isolate these concerns while ensuring Aggregate integrity.

---

# Repository Responsibilities

A Repository is responsible for:

- Retrieving Aggregate Roots.
- Persisting Aggregate Roots.
- Reconstructing Aggregate state.
- Preserving Aggregate consistency.
- Supporting business continuity.

A Repository is not responsible for:

- Business rules.
- Aggregate invariants.
- Business calculations.
- Recommendation generation.
- Infrastructure configuration.
- User authentication.
- Logging.
- Messaging.

Business behavior belongs inside the Domain.

---

# Repository Principles

## Principle 1

Repositories exist only for Aggregate Roots.

Internal Entities are reconstructed as part of their Aggregate.

---

## Principle 2

Repositories never expose internal Aggregate implementation.

Only Aggregate Roots are retrieved or persisted.

---

## Principle 3

Repositories preserve Aggregate consistency.

Partial Aggregate persistence is prohibited.

---

## Principle 4

Repositories remain technology independent.

The Domain Model must never know how persistence is implemented.

---

## Principle 5

Repositories never contain business logic.

Business decisions belong inside Aggregates and Domain Services.

---

## Principle 6

Each Aggregate possesses one Repository.

Repository boundaries follow Aggregate boundaries.

---

# Repository Discovery Gate

Every proposed Repository must pass the following interrogation.

```
Business State
        │
        ▼
Is it an Aggregate Root?

        │
 YES
        ▼
Repository

        │
 NO
        ▼
Persist through its Aggregate

        │
Never directly persisted
```

If it is not an Aggregate Root, it does not receive a Repository.

---

# Repository Boundaries

Current FLUANZ Repositories:

- Organization Repository
- Assessment Repository

No Repository exists for:

- Observation
- Evidence
- Finding
- Recommendation
- Executive Decision

These business concepts are persisted through their owning Aggregate.

---

# Relationship to Aggregates

Aggregates define business consistency.

Repositories preserve Aggregate state.

Repositories never modify Aggregate invariants.

---

# Relationship to Domain Services

Domain Services coordinate business behavior.

Repositories retrieve and preserve Aggregate Roots required by those services.

Repositories never orchestrate business operations.

---

# Relationship to Domain Events

Repositories persist completed Aggregate state.

Domain Events communicate completed business facts after successful persistence.

Repositories do not publish business events.

---

# Technology Independence

Future implementations may use:

- Relational databases
- Document databases
- Event stores
- Distributed storage
- Cloud-native persistence

These implementation choices must never alter the business meaning of the Repository.

---

# Constitutional References

Derived from:

- Aggregate Model
- Domain Services
- Engineering Principles

Aligned with:

- Founder Bible v1.0
- Architecture Vision v1.0

---

# Closing Statement

Repositories are the persistence boundary of the FLUANZ domain.

They ensure that Aggregate Roots can be faithfully reconstructed and preserved while completely isolating the Domain Model from infrastructure and persistence technologies.

Every Repository exists to protect business continuity—not to expose implementation details.