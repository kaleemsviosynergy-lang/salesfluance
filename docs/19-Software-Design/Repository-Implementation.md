# Repository Implementation

## Status

Software Design v1.0

---

# Purpose

This document defines the implementation strategy for Repository Interfaces within the FLUANZ platform.

Its purpose is to ensure that persistence faithfully supports the approved Domain Model while preserving Aggregate boundaries, business invariants, and architectural integrity.

Repositories provide persistence.

They never define business behavior.

---

# Why Repository Implementation Exists

The Domain Layer defines Repository Interfaces as contracts.

The Infrastructure Layer implements those contracts using persistence technologies.

Without a disciplined Repository strategy:

- Business logic leaks into persistence.
- Aggregates become database models.
- SQL dictates business structure.
- Repository implementations become generic CRUD utilities.

Repository Implementation exists to prevent these failures.

---

# Constitutional Principle

Repositories persist Aggregates.

They do not implement business rules.

The database adapts to the Domain.

The Domain never adapts to the database.

---

# Architectural Role

Repository Interfaces belong to the Domain Layer.

Repository Implementations belong to the Infrastructure Layer.

The Application Layer depends only on Repository Interfaces.

The Domain remains completely unaware of persistence technology.

---

# Primary Responsibilities

Repository Implementations own:

- Aggregate persistence
- Aggregate retrieval
- Transaction participation
- Optimistic concurrency support
- Persistence mapping
- Persistence optimization

Repositories never own business decisions.

---

# Aggregate-Centric Design

Each Repository exists for exactly one Aggregate Root.

Examples:

- OrganizationRepository
- AssessmentRepository
- EvidenceRepository
- RecommendationRepository
- ExecutiveDecisionRepository

Repositories never span multiple Aggregate Roots.

---

# Repository Responsibilities

A Repository is responsible for:

- Saving Aggregate state
- Loading Aggregate state
- Preserving Aggregate consistency
- Managing persistence mappings
- Participating in transactions

A Repository is NOT responsible for:

- Business validation
- Revenue Readiness calculations
- Recommendation generation
- Executive decision logic
- Cross-Aggregate workflows

---

# Repository Interface Example

```
IAssessmentRepository

Methods

- GetById()
- Save()
- Exists()
- Remove()
```

Interfaces describe business persistence requirements.

They never expose database details.

---

# Repository Implementation Example

```
SqlAssessmentRepository

Implements

IAssessmentRepository
```

The implementation may use:

- SQL
- Entity Framework
- Dapper
- PostgreSQL
- SQL Server

Technology remains an implementation detail.

---

# Aggregate Retrieval

Repositories retrieve complete Aggregate Roots.

Never partial business objects.

Example:

```
Assessment Aggregate

↓

AssessmentRepository

↓

Complete Aggregate
```

Business invariants require Aggregate completeness.

---

# Aggregate Persistence

Repositories persist the Aggregate as a consistency boundary.

Partial persistence is prohibited if it compromises Aggregate integrity.

---

# Query Separation

Repositories serve the Write Model.

Read Models belong to Query Handlers.

Repositories are not reporting engines.

Examples of prohibited Repository methods:

❌ GetExecutiveDashboard()

❌ GetRevenueCharts()

❌ GetMonthlyStatistics()

These belong to the Query side of CQRS.

---

# Transaction Participation

Repositories participate in Application transactions.

Example:

```
Begin Transaction

↓

Load Aggregate

↓

Execute Domain Behavior

↓

Save Aggregate

↓

Commit Transaction

↓

Publish Domain Events
```

Repositories do not own transaction boundaries.

---

# Persistence Mapping

Persistence mapping belongs exclusively to Infrastructure.

The Domain must never contain:

- ORM attributes
- Database annotations
- Table mappings
- Column mappings

Persistence models adapt to Domain objects.

---

# Optimistic Concurrency

Repositories should support optimistic concurrency where Aggregate consistency requires it.

Concurrency failures are resolved by the Application Layer according to business requirements.

The Domain remains unaware of persistence mechanisms.

---

# Dependency Rules

Repository Implementations may depend upon:

- Database providers
- ORM frameworks
- SQL libraries
- Mapping libraries

Repository Interfaces remain technology independent.

---

# Testing Strategy

Repository Interfaces are tested through:

- Domain unit tests
- Application tests using mocks

Repository Implementations are tested through:

- Integration tests
- Database tests
- Persistence verification

Business behavior remains independently testable.

---

# Anti-Patterns

The following Repository implementations are prohibited:

### Generic Repository

```
Repository<T>
```

Reason:

Business persistence is Aggregate-specific.

Generic repositories obscure business intent.

---

### CRUD Services

```
Save(object)

Update(object)

Delete(object)
```

Reason:

Repositories persist business concepts—not arbitrary objects.

---

### Business Logic in Repositories

Example:

```
GenerateRecommendation()

CalculateRevenueReadiness()

ApproveAssessment()
```

Reason:

Repositories persist.

They never decide.

---

### Cross-Aggregate Persistence

Example:

```
SaveAssessmentAndRecommendation()
```

Reason:

Each Aggregate owns its own consistency boundary.

Cross-Aggregate workflows belong to the Application Layer.

---

# FLUANZ Implementation Example

```
Application

↓

StartAssessmentCommandHandler

↓

IAssessmentRepository

↓

SqlAssessmentRepository

↓

PostgreSQL
```

The Application knows only the Repository Interface.

The Infrastructure knows the database.

The Domain knows neither.

---

# Success Criteria

Repository Implementation is considered successful when:

- Every Repository represents one Aggregate Root.
- Repository Interfaces remain technology independent.
- Persistence remains isolated within Infrastructure.
- Business logic never appears inside Repositories.
- Aggregate consistency is preserved.
- Read Models remain separated from Write Models.

---

# Constitutional References

Derived from:

- Domain Layer
- Infrastructure Layer
- CQRS
- Clean Architecture
- Dependency Rules
- Domain Model v1.1
- Software Design Constitution

---

# Closing Statement

Repository Implementation defines how Aggregate persistence is realized within the FLUANZ platform while preserving the constitutional independence of the Domain Model.

By treating Repositories as Aggregate persistence boundaries rather than generic database abstractions, FLUANZ ensures that business integrity remains protected regardless of persistence technology or infrastructure evolution.