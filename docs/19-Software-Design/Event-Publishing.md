# Event Publishing

## Status

Software Design v1.0

---

# Purpose

This document defines the Event Publishing strategy adopted by the FLUANZ platform.

Its purpose is to ensure that completed business facts are communicated throughout the platform in a consistent, reliable, and loosely coupled manner while preserving the constitutional integrity of the Domain Model.

Events communicate completed business facts.

They never initiate business intent.

---

# Why Event Publishing Exists

Business workflows often produce outcomes that affect multiple parts of the platform.

For example:

- An Assessment is completed.
- Evidence is forged.
- A Recommendation is generated.
- Revenue Readiness is calculated.
- An Executive Decision is recorded.

Multiple capabilities may need to react to these events.

Without Event Publishing:

- Components become tightly coupled.
- Workflows become difficult to extend.
- New features require modifications to existing code.

Event Publishing eliminates these problems.

---

# Constitutional Principle

Commands express business intent.

Events express completed business facts.

Business facts are immutable.

---

# Architectural Role

Domain Events originate inside the Domain Layer.

The Application Layer coordinates publication.

The Infrastructure Layer delivers events.

Each layer performs only its own responsibility.

---

# Event Lifecycle

```
Command

↓

Application Handler

↓

Aggregate

↓

Business State Changed

↓

Domain Event Created

↓

Repository Save

↓

Transaction Commit

↓

Event Publisher

↓

Subscribers
```

Events are published only after successful persistence.

---

# Event Categories

## Domain Events

Represent facts that occurred within the Domain.

Examples:

- AssessmentStarted
- EvidenceForged
- FindingDerived
- RecommendationGenerated
- RevenueReadinessCalculated
- ExecutiveDecisionRecorded

Domain Events never contain infrastructure concerns.

---

## Integration Events

Represent information shared with external systems.

Examples:

- CRM Notification
- Analytics Update
- Audit Export
- AI Processing Request

Integration Events are derived from Domain Events.

They are not the same thing.

---

# Event Publisher Responsibilities

The Event Publisher is responsible for:

- Collecting Domain Events
- Publishing events after successful transactions
- Invoking subscribers
- Supporting asynchronous execution
- Preserving delivery order where required

The Event Publisher never creates business events.

---

# Event Subscribers

Subscribers react to completed business facts.

Examples:

- Update read models
- Send notifications
- Trigger analytics
- Synchronize external systems
- Record audit information

Subscribers never modify the originating Aggregate.

---

# Event Flow

```
Assessment Aggregate

↓

AssessmentStarted

↓

Event Publisher

↓

Read Model Projection

↓

Notification Service

↓

Analytics Service

↓

CRM Integration
```

One event may have multiple independent subscribers.

---

# Transaction Rule

Events must never be published before the business transaction is successfully committed.

Incorrect:

```
Save Event

↓

Commit Transaction
```

Correct:

```
Commit Transaction

↓

Publish Events
```

Business truth must always precede communication.

---

# Event Immutability

Once created, a Domain Event is immutable.

Events represent historical facts.

Historical facts cannot change.

---

# Event Naming

Events use the past tense.

Examples:

- AssessmentStarted
- EvidenceForged
- RecommendationGenerated

Events describe what happened.

They never describe what should happen.

---

# Engineering Decision

## Decision

Adopt asynchronous event publication after transaction commit.

---

## Rationale

- Preserves Aggregate consistency.
- Prevents partial failures.
- Improves scalability.
- Enables independent subscribers.

---

## Alternatives Considered

### Immediate synchronous notifications

Rejected.

Reason:

Business transactions become tightly coupled to subscribers.

---

### Polling-based synchronization

Rejected.

Reason:

Increases latency and complexity.

---

# Dependency Rules

The Domain Layer defines events.

The Application Layer publishes events.

The Infrastructure Layer delivers events.

Subscribers remain independent.

No subscriber may introduce a reverse dependency into the Domain.

---

# Reliability

The Event Publishing mechanism should support:

- Retry policies
- Idempotent subscribers
- Dead-letter handling
- Delivery monitoring
- Failure logging

Operational failures must not corrupt business state.

---

# FLUANZ Implementation Example

```
StartAssessmentCommand

↓

Mediator

↓

StartAssessmentCommandHandler

↓

Assessment Aggregate

↓

AssessmentStarted

↓

Repository Save

↓

Commit Transaction

↓

Event Publisher

├── Update Assessment Projection
├── Notify Analytics
├── Send Executive Notification
└── Record Audit Entry
```

Each subscriber reacts independently.

The originating Aggregate remains unchanged.

---

# Anti-Patterns

The following are prohibited:

### Publishing before commit

Reason:

Subscribers may observe business state that was never committed.

---

### Business logic inside subscribers

Reason:

Business decisions belong inside the Domain.

Subscribers react.

They never decide.

---

### Cross-Aggregate modification inside subscribers

Reason:

Aggregate consistency must remain transactional.

Cross-Aggregate workflows belong to the Application Layer.

---

### Infrastructure events inside the Domain

Reason:

The Domain remains independent of messaging technologies.

---

# Success Criteria

Event Publishing is considered successful when:

- Events represent completed business facts.
- Publication occurs only after successful persistence.
- Subscribers remain loosely coupled.
- Domain Events remain immutable.
- External integrations remain isolated.
- Business consistency is preserved.

---

# Constitutional References

Derived from:

- Domain Events
- CQRS
- Mediator Pattern
- Repository Implementation
- Application Layer
- Domain Model v1.1
- Software Design Constitution

---

# Closing Statement

Event Publishing enables the FLUANZ platform to communicate completed business facts throughout the system while preserving Aggregate consistency, architectural independence, and long-term scalability.

By separating business execution from event propagation, FLUANZ ensures that new capabilities can be introduced without compromising the integrity of the approved Domain Model.