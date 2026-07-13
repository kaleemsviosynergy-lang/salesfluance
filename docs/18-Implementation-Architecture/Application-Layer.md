# Application Layer

## Status

Implementation Architecture v1.0

---

# Purpose

The Application Layer coordinates the execution of business capabilities within the FLUANZ platform.

Its purpose is to orchestrate Domain behavior, execute business use cases, manage application workflows, and coordinate interactions between Aggregates while preserving the integrity of the Domain Layer.

The Application Layer coordinates business behavior.

It never owns business truth.

---

# Why the Application Layer Exists

The Domain Layer defines business knowledge.

The Application Layer applies that knowledge to accomplish business objectives.

It translates external requests into executable business workflows while ensuring that every operation respects the constitutional boundaries of the Domain.

Without the Application Layer:

- Controllers become orchestration engines.
- Business workflows become fragmented.
- Transactions become inconsistent.
- Application behavior becomes tightly coupled to infrastructure.

The Application Layer exists to prevent these failures.

---

# Constitutional Principle

The Application Layer coordinates.

The Domain Layer decides.

The Application Layer never introduces business policies.

---

# Primary Responsibilities

The Application Layer owns:

- Application Use Cases
- Workflow orchestration
- Aggregate coordination
- Transaction boundaries
- Command handling
- Query handling
- Authorization decisions
- Domain Event publication
- Repository coordination

The Application Layer never owns business invariants.

---

# Application Components

The Application Layer contains the following architectural elements.

---

## Use Cases

Represent complete business capabilities.

Examples include:

- Start Assessment
- Evaluate Evidence
- Generate Recommendation
- Calculate Revenue Readiness
- Record Executive Decision

A Use Case coordinates Domain behavior to achieve a business objective.

---

## Commands

Represent requests that modify business state.

Examples:

- StartAssessmentCommand
- CreateEvidenceCommand
- GenerateRecommendationCommand
- RecordExecutiveDecisionCommand

Commands express intent.

They contain no business logic.

---

## Command Handlers

Execute Commands.

Responsibilities include:

- Validate application input
- Load Aggregates
- Coordinate Domain behavior
- Persist changes
- Publish Domain Events

Command Handlers never implement business policies.

---

## Queries

Represent requests for business information.

Queries never modify business state.

Examples:

- GetAssessment
- GetOrganizationReadiness
- GetRecommendations
- GetExecutiveDecisionHistory

---

## Query Handlers

Retrieve information required by the application.

Responsibilities include:

- Read optimization
- Projection retrieval
- DTO construction
- View model creation

Queries never change the Domain.

---

## Application Services

Coordinate multiple Domain objects when a complete workflow spans several Aggregates.

Examples:

- Assessment Workflow
- Recommendation Workflow
- Executive Decision Workflow

Application Services orchestrate.

They never own business rules.

---

# Transaction Management

The Application Layer defines transactional boundaries.

Responsibilities include:

- Begin transaction
- Execute Domain behavior
- Persist Aggregate changes
- Publish Domain Events
- Commit transaction

Transactions never extend into presentation concerns.

---

# Aggregate Coordination

The Application Layer coordinates interactions between Aggregates.

Example:

```
Assessment Aggregate

↓

Evidence Aggregate

↓

Recommendation Aggregate

↓

Executive Decision Aggregate
```

Each Aggregate protects its own consistency.

The Application Layer coordinates the workflow between them.

---

# Repository Usage

The Application Layer depends upon Repository interfaces defined by the Domain.

Example:

```
Application

↓

IAssessmentRepository

↓

Infrastructure Implementation
```

Repository implementations remain invisible to the Application Layer.

---

# Domain Event Coordination

After successful completion of a transaction:

- Domain Events are collected.
- Events are dispatched.
- External integrations may react.

The Application Layer coordinates publication.

The Domain Layer defines the events.

---

# Validation

The Application Layer performs application validation.

Examples include:

- Required input
- Authorization
- Request completeness
- Command consistency

Business validation remains inside the Domain.

---

# What the Application Layer Must Never Contain

The Application Layer must never contain:

- Business policies
- Aggregate invariants
- SQL
- Database implementations
- HTTP endpoints
- Controllers
- ORM mappings
- Framework-specific infrastructure
- Business calculations
- Revenue Readiness algorithms

Those responsibilities belong elsewhere.

---

# Dependency Rules

The Application Layer may depend upon:

- Domain Layer

The Application Layer must never depend upon:

- API implementations
- Database implementations
- Messaging technologies
- Cloud SDKs

Infrastructure dependencies remain abstract.

---

# Relationship to Other Layers

## Domain Layer

Provides business behavior.

The Application Layer coordinates it.

---

## Infrastructure Layer

Provides technical implementations required by Application workflows.

---

## API Layer

Receives external requests.

Delegates execution to Application Use Cases.

---

## Composition Root

Creates Application Services through Dependency Injection.

---

# Package Organization

```
Application

├── Commands
├── Command Handlers
├── Queries
├── Query Handlers
├── Use Cases
├── Application Services
├── DTOs
├── Mappers
└── Behaviors
```

Package organization reflects application workflows rather than technical frameworks.

---

# Success Criteria

The Application Layer is considered successful when:

- Business workflows remain coordinated.
- Aggregate boundaries remain respected.
- Transactions remain consistent.
- Domain rules remain inside the Domain.
- Infrastructure remains abstract.
- Use Cases remain independently testable.

---

# Constitutional References

Derived from:

- Implementation Architecture
- Clean Architecture
- Layer Responsibilities
- Dependency Rules
- Domain Layer
- Domain Model v1.1

---

# Closing Statement

The Application Layer serves as the orchestration engine of the FLUANZ platform.

It coordinates business capabilities, manages application workflows, and enables interaction between Aggregates while preserving the constitutional independence of the Domain Layer.

Its responsibility is not to define business truth, but to faithfully execute it.