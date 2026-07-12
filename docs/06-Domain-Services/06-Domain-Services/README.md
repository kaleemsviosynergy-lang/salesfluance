# Domain Services

## Status

Domain Model v1.0

---

# Purpose

Domain Services represent business operations that coordinate multiple Aggregates while preserving the business invariants of the FLUANZ domain.

Their purpose is to execute business behavior that cannot naturally belong to a single Entity, Value Object, or Aggregate.

Domain Services orchestrate.

They do not own business state.

---

# Definition

A Domain Service is a stateless business component that performs a domain operation requiring collaboration between multiple business concepts.

A Domain Service contains business behavior.

It never becomes the owner of business data.

---

# Why Domain Services Exist

Most business behavior belongs inside Entities and Aggregates.

However, some business operations naturally span multiple Aggregates while still representing pure business logic.

Domain Services exist only for these operations.

They prevent business rules from leaking into infrastructure, application services, or user interfaces.

---

# Domain Service Responsibilities

A Domain Service is responsible for:

- Coordinating multiple Aggregates.
- Executing business policies.
- Preserving domain invariants.
- Producing deterministic business outcomes.
- Encapsulating reusable business operations.

A Domain Service is not responsible for:

- Persisting data.
- User interface behavior.
- Infrastructure integration.
- API communication.
- Authentication.
- Authorization.
- Logging.
- Notification delivery.

These concerns belong outside the Domain Model.

---

# Domain Service Principles

## Principle 1

Business behavior belongs inside an Aggregate whenever possible.

Only behavior that cannot naturally belong to one Aggregate may become a Domain Service.

---

## Principle 2

Every Domain Service must represent a business capability.

It must never represent a technical capability.

---

## Principle 3

Domain Services are stateless.

They coordinate business behavior but do not retain business state.

---

## Principle 4

Domain Services protect business rules.

They never bypass Aggregate invariants.

---

## Principle 5

Domain Services communicate with Aggregates through Aggregate Roots.

Internal Aggregate objects remain encapsulated.

---

## Principle 6

Domain Services may publish Domain Events after successful business operations.

They do not manage event delivery.

---

# Domain Service Discovery Gate

Every proposed Domain Service must pass the following interrogation.

```
Business Operation
        │
        ▼
Can one Aggregate perform it?

        │
 YES
        ▼
Keep it inside the Aggregate.

        │
 NO
        ▼
Does it coordinate multiple Aggregates
while enforcing business rules?

        │
 YES
        ▼
Domain Service

        │
 NO
        ▼
Application Service
or Infrastructure Service
```

If the operation fails this gate, it is not a Domain Service.

---

# Relationship to Aggregates

Aggregates own business consistency.

Domain Services coordinate multiple Aggregates.

Domain Services never become Aggregate substitutes.

---

# Relationship to Repositories

Repositories retrieve and persist Aggregate Roots.

Domain Services invoke Repositories only to obtain Aggregates required for business operations.

Repository behavior remains isolated from business logic.

---

# Relationship to Domain Events

Domain Services may produce Domain Events after successful business operations.

Domain Events communicate completed business facts.

Domain Services do not consume infrastructure events directly.

---

# Relationship to Application Layer

Application Services coordinate user requests.

Domain Services coordinate business behavior.

The Application Layer invokes Domain Services.

Domain Services invoke Aggregates.

---

# FLUANZ Domain Services

The current FLUANZ Domain Model defines the following Domain Services:

- Assessment Service
- Evidence Evaluation Service
- Recommendation Service
- Revenue Readiness Calculation Service

Additional Domain Services require constitutional justification before introduction.

---

# Constitutional References

Derived from:

- DDD Workshops 01–10
- Core Domain Entities
- Value Objects
- Aggregate Model

Aligned with:

- Founder Bible v1.0
- Engineering Principles v1.0
- Architecture Vision v1.0

---

# Closing Statement

Domain Services represent the operational behavior of the FLUANZ domain.

They coordinate business capabilities that span multiple Aggregates while preserving domain integrity, enforcing business policies, and protecting the architectural boundaries established throughout the Tactical Domain Model.

Every Domain Service must exist because the business requires it—not because the implementation finds it convenient.