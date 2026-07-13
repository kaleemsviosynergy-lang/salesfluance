# Mediator Pattern

## Status

Software Design v1.0

---

# Purpose

This document defines the Mediator Pattern adopted by the FLUANZ platform.

Its purpose is to centralize request dispatching, reduce coupling between architectural layers, and provide a consistent execution pipeline for Commands and Queries.

The Mediator coordinates communication.

It never owns business behavior.

---

# Why the Mediator Pattern Exists

Without a Mediator, external interfaces become tightly coupled to internal application components.

Controllers begin referencing multiple Application Services.

Dependencies multiply.

Testing becomes increasingly difficult.

The Mediator eliminates these problems by introducing a single execution entry point.

---

# Constitutional Principle

Every business request enters the platform through one gateway.

The Mediator dispatches.

The Application executes.

The Domain decides.

---

# Architectural Role

The Mediator belongs exclusively to the Application Layer.

It serves as the execution hub for:

- Commands
- Queries

The Mediator never contains business rules.

---

# Request Flow

```
Client

↓

API Controller

↓

Mediator

↓

Command / Query Handler

↓

Application Service

↓

Aggregate

↓

Repository

↓

Domain Events

↓

Response
```

The API communicates only with the Mediator.

---

# Why FLUANZ Uses a Mediator

FLUANZ executes hundreds of business capabilities.

Without a Mediator:

```
AssessmentController

↓

AssessmentService

↓

RecommendationService

↓

EvidenceService

↓

ExecutiveDecisionService
```

Controllers become tightly coupled.

With a Mediator:

```
AssessmentController

↓

Mediator

↓

StartAssessmentCommandHandler
```

Controllers remain independent of implementation.

---

# Responsibilities

The Mediator is responsible for:

- Request dispatch
- Handler resolution
- Pipeline execution
- Cross-cutting behaviors
- Response delivery

The Mediator is NOT responsible for:

- Business rules
- Aggregate modification
- Persistence
- Validation of business invariants

---

# Commands

Commands enter through the Mediator.

Example:

```
StartAssessmentCommand

↓

Mediator

↓

StartAssessmentCommandHandler
```

Only one Handler processes each Command.

---

# Queries

Queries follow the same execution path.

Example:

```
GetAssessmentSummaryQuery

↓

Mediator

↓

GetAssessmentSummaryQueryHandler
```

Queries never modify business state.

---

# Pipeline Behaviors

The Mediator executes reusable behaviors before and after the Handler.

Examples include:

- Authorization
- Logging
- Validation
- Performance measurement
- Auditing
- Exception handling

Business behavior remains inside the Handler and Domain.

---

# Handler Responsibilities

Handlers are responsible for:

- Loading Aggregates
- Coordinating Application workflows
- Invoking Domain behavior
- Persisting changes
- Returning execution results

Handlers remain focused on one request.

---

# Dependency Reduction

Without Mediator:

```
Controller

├── AssessmentService
├── RecommendationService
├── EvidenceService
├── Repository
└── Logger
```

With Mediator:

```
Controller

↓

Mediator
```

The Controller has one dependency.

---

# FLUANZ Implementation Example

### Command

```
StartAssessmentCommand
```

↓

```
Mediator.Send()
```

↓

```
StartAssessmentCommandHandler
```

↓

```
AssessmentService
```

↓

```
Assessment Aggregate
```

↓

```
AssessmentRepository
```

↓

```
AssessmentStarted
```

---

### Query

```
GetOrganizationReadinessQuery
```

↓

```
Mediator.Send()
```

↓

```
GetOrganizationReadinessQueryHandler
```

↓

```
Read Model
```

↓

```
OrganizationReadinessResponse
```

---

# Dependency Rules

The API Layer depends only on:

- IMediator

The API never references:

- Command Handlers
- Query Handlers
- Repository implementations
- Domain Services

The Mediator protects architectural boundaries.

---

# Error Handling

Exceptions raised by Handlers propagate through the Mediator pipeline.

The API Layer translates them into protocol-specific responses.

Business meaning remains unchanged.

---

# Testability

The Mediator enables:

- Independent Handler testing
- Pipeline testing
- Controller testing through a single dependency
- Mock request execution

Business correctness remains independently verifiable.

---

# Benefits

The Mediator Pattern provides:

- Loose coupling
- Centralized request handling
- Consistent execution flow
- Simplified testing
- Extensible pipelines
- Cleaner controllers
- Improved maintainability

---

# What the Mediator Does Not Do

The Mediator does NOT:

- Replace the Domain
- Execute business policies
- Modify Aggregates
- Persist data
- Calculate Revenue Readiness

Its responsibility is dispatch.

Nothing more.

---

# Success Criteria

The Mediator Pattern is considered successful when:

- Controllers depend only on the Mediator.
- Every Command has exactly one Handler.
- Every Query has exactly one Handler.
- Pipeline behaviors remain reusable.
- Business logic remains outside the Mediator.
- Architectural coupling is minimized.

---

# Constitutional References

Derived from:

- CQRS
- Application Layer
- Dependency Rules
- Clean Architecture
- Software Design Constitution

---

# Closing Statement

The Mediator Pattern serves as the execution gateway of the FLUANZ platform.

By centralizing request dispatch and isolating controllers from application implementation, it preserves architectural boundaries, reduces coupling, and enables a consistent execution pipeline that faithfully realizes the approved Domain Model.