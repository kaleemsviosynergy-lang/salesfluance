# Clean Architecture

## Status

Implementation Architecture v1.0

---

# Purpose

This document defines the architectural style adopted by the FLUANZ platform.

Its purpose is to establish the structural principles that govern software implementation while preserving the approved Domain Model and constitutional business architecture.

Clean Architecture is adopted to ensure that business rules remain independent of frameworks, infrastructure, databases, user interfaces, and external technologies.

---

# Why Clean Architecture

The FLUANZ platform represents a long-term commercial intelligence system.

Its business knowledge is expected to evolve over many years.

Technology will change.

Frameworks will change.

Programming languages may change.

Business truth must not.

Clean Architecture allows implementation technologies to evolve without forcing changes into the Domain Model.

---

# Architectural Objective

The objective of Clean Architecture is to ensure that the Domain remains the permanent center of the system.

Every implementation decision must strengthen this objective.

The architecture is designed to protect business knowledge from technological volatility.

---

# Fundamental Principle

The Domain is the most valuable asset of the platform.

Everything else exists to support it.

No implementation technology may become a dependency of the Domain.

---

# The Dependency Rule

Dependencies always point inward.

```
                 User Interface
                        │
                        ▼
                API / Presentation
                        │
                        ▼
                Application Layer
                        │
                        ▼
                  Domain Layer
```

The Domain depends on nothing.

Every outer layer depends upon the layers inside it.

No dependency points outward.

---

# Layer Overview

## Domain Layer

Contains business truth.

Includes:

- Entities
- Value Objects
- Aggregates
- Domain Services
- Repository Interfaces
- Domain Events

The Domain Layer contains no infrastructure concerns.

---

## Application Layer

Coordinates business use cases.

Responsibilities include:

- Executing application workflows
- Coordinating Aggregates
- Managing transactions
- Publishing Domain Events
- Invoking Repository interfaces

The Application Layer contains no infrastructure implementation.

---

## Infrastructure Layer

Provides technical capabilities.

Examples include:

- Database access
- Repository implementations
- External APIs
- Messaging systems
- Authentication providers
- File storage

Infrastructure supports the Domain.

It never defines business rules.

---

## API Layer

Provides external access to application capabilities.

Responsibilities include:

- Request handling
- Response formatting
- Authentication
- Authorization
- Validation
- API versioning

The API Layer contains no business logic.

---

## Composition Root

Creates the application.

Responsibilities include:

- Dependency Injection
- Service registration
- Configuration
- Application startup
- Environment composition

Business rules never originate here.

---

# Separation of Concerns

Each architectural layer owns one responsibility.

Business logic never appears in:

- Controllers
- Database models
- HTTP endpoints
- Infrastructure services

Business rules belong exclusively inside the Domain.

---

# Framework Independence

Frameworks are implementation tools.

Examples:

- ASP.NET
- FastAPI
- Spring Boot
- NestJS

The Domain must remain completely independent of these technologies.

Framework replacement must not require business redesign.

---

# Database Independence

The database is an implementation detail.

Aggregates are designed according to business consistency.

They are never designed around database tables.

Persistence adapts to the Domain.

The Domain never adapts to persistence.

---

# Testability

Clean Architecture enables independent testing.

The Domain can be validated without:

- Databases
- HTTP servers
- Message brokers
- Cloud services
- User interfaces

Business correctness should be provable in isolation.

---

# Relationship to Tactical DDD

Clean Architecture realizes the Tactical Domain Model.

Entities, Aggregates, Value Objects, Domain Services, Repositories, and Domain Events remain unchanged.

Implementation layers consume the Domain.

They never redefine it.

---

# Relationship to Architecture Governance

Every implementation decision must remain consistent with:

- Engineering Principles
- Architecture Decision Records
- Architecture Evolution
- Approved Domain Model v1.1

Architectural governance continues throughout implementation.

---

# Success Criteria

The Clean Architecture implementation is successful when:

- The Domain has zero infrastructure dependencies.
- Business rules remain framework independent.
- Layers remain properly separated.
- Dependencies follow the Dependency Rule.
- Technology can evolve independently.
- Business meaning remains unchanged.

---

# Constitutional References

Derived from:

- Founder Bible
- Engineering Principles
- Domain Model v1.1
- Implementation Architecture Constitution

---

# Closing Statement

Clean Architecture is the implementation strategy adopted by FLUANZ to ensure that business knowledge remains the permanent center of the system.

By enforcing strict dependency direction, layer separation, and framework independence, Clean Architecture preserves the integrity of the approved Domain Model while enabling the platform to evolve technologically without compromising its constitutional business principles.