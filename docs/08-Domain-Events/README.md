# Domain Events

## Status

Domain Model v1.0

---

# Purpose

Domain Events represent completed business facts within the FLUANZ domain.

Their purpose is to communicate that a meaningful business transition has occurred while preserving business history, enabling collaboration between bounded contexts, and maintaining complete auditability.

Domain Events describe the past.

They never describe intentions or requests.

---

# Definition

A Domain Event is an immutable business fact that records the successful completion of a significant business occurrence.

A Domain Event represents something that has already happened.

It cannot be modified once published.

---

# Why Domain Events Exist

Business operations change the state of the domain.

Other parts of the domain may need to react to those completed business changes.

Domain Events communicate these completed business facts without creating direct dependencies between business capabilities.

They preserve the historical timeline of the business.

---

# Domain Event Responsibilities

A Domain Event is responsible for:

- Recording completed business facts.
- Preserving business history.
- Communicating significant state transitions.
- Supporting business traceability.
- Enabling loose collaboration between bounded contexts.

A Domain Event is not responsible for:

- Executing business logic.
- Initiating business operations.
- Performing calculations.
- Persisting Aggregate state.
- Coordinating workflows.
- Infrastructure messaging.

Business behavior belongs elsewhere.

---

# Domain Event Principles

## Principle 1

A Domain Event always represents something that has already happened.

Events are expressed in the past tense.

---

## Principle 2

Domain Events are immutable.

Published events can never be modified.

---

## Principle 3

A Domain Event must originate from a completed business transition.

Failed business operations never produce Domain Events.

---

## Principle 4

Domain Events communicate business meaning.

They never expose technical implementation details.

---

## Principle 5

Every Domain Event must preserve business lineage.

The originating Aggregate and business context must always be traceable.

---

## Principle 6

Domain Events are independent of infrastructure.

Publishing mechanisms are implementation concerns.

The business meaning of an event remains unchanged regardless of delivery technology.

---

# Domain Event Discovery Gate

Every proposed Domain Event must pass the following interrogation.

```
Business Transition
        │
        ▼
Has the business operation completed?

        │
 NO
        ▼
Not a Domain Event

        │
 YES
        ▼
Is the transition
business significant?

        │
 NO
        ▼
Internal implementation detail

        │
 YES
        ▼
Domain Event
```

If the business cannot truthfully say:

"It has happened."

Then it is not a Domain Event.

---

# Relationship to Aggregates

Aggregates produce Domain Events after successfully completing business transitions.

Aggregates protect consistency.

Domain Events communicate completed business facts.

---

# Relationship to Domain Services

Domain Services coordinate business operations.

Successful completion of those operations may result in one or more Domain Events.

Domain Services do not become the owners of Domain Events.

---

# Relationship to Repositories

Repositories preserve Aggregate state.

After successful persistence, completed business transitions may be communicated through Domain Events.

Repositories never define business meaning.

---

# Current FLUANZ Domain Events

The current FLUANZ Domain Model defines:

- Assessment Started
- Evidence Forged
- Finding Derived
- Recommendation Generated
- Revenue Readiness Calculated
- Executive Decision Recorded

Additional Domain Events require constitutional justification before introduction.

---

# Technology Independence

Domain Events describe business facts.

Future implementations may publish these events through:

- Message Brokers
- Event Streams
- Service Buses
- Event Stores
- Cloud Messaging Platforms

These implementation choices never change the business meaning of the event.

---

# Constitutional References

Derived from:

- DDD Workshops 01–10
- Aggregate Model
- Domain Services
- Repository Constitution

Aligned with:

- Founder Bible v1.0
- Engineering Principles v1.0
- Architecture Vision v1.0

---

# Closing Statement

Domain Events represent the historical memory of the FLUANZ domain.

They communicate completed business facts, preserve complete business lineage, and enable independent business capabilities to collaborate without compromising Aggregate boundaries or business integrity.

Every Domain Event exists because something meaningful has happened—not because the software needs to send a message.