# Layer Responsibilities

## Status

Implementation Architecture v1.0

---

# Purpose

This document defines the constitutional responsibilities of every implementation layer within the FLUANZ platform.

Its purpose is to ensure that every software component has a clearly defined architectural home, preventing responsibility leakage, architectural drift, and unnecessary coupling.

Each layer exists to perform one specific role.

No layer may assume the responsibilities of another.

---

# Why Layer Responsibilities Exist

Large software systems become difficult to maintain when responsibilities become blurred.

Business logic migrates into controllers.

Persistence rules leak into business objects.

Infrastructure decisions influence domain behavior.

Layer Responsibilities exist to prevent these failures.

Every implementation decision must answer one question:

> "Which layer owns this responsibility?"

---

# Constitutional Rule

Every software component belongs to exactly one implementation layer.

Responsibilities are never duplicated.

Responsibilities are never shared.

Responsibilities are never inferred.

---

# Layer Overview

```
            API Layer
                 │
                 ▼
        Application Layer
                 │
                 ▼
           Domain Layer
                 ▲
                 │
      Infrastructure Layer

Composition Root

(Application Startup)
```

---

# Domain Layer

## Primary Responsibility

Own business truth.

The Domain Layer contains the permanent business knowledge of FLUANZ.

It is completely independent of technology.

---

## Owns

- Entities
- Value Objects
- Aggregates
- Domain Services
- Repository Interfaces
- Domain Events
- Business Policies
- Business Invariants

---

## Must Never Contain

- HTTP logic
- Controllers
- Database code
- SQL
- ORM models
- Dependency Injection
- Authentication providers
- Logging frameworks
- Messaging implementations

---

# Application Layer

## Primary Responsibility

Coordinate business use cases.

The Application Layer orchestrates Domain objects to accomplish business workflows.

It does not create business rules.

---

## Owns

- Application Services
- Commands
- Queries
- Use Cases
- Workflow Coordination
- Transaction Boundaries
- Domain Event Dispatch
- Authorization Decisions

---

## Must Never Contain

- Business policies
- Entity validation
- SQL
- HTTP endpoints
- Infrastructure implementations

---

# Infrastructure Layer

## Primary Responsibility

Provide technical capabilities.

Infrastructure exists solely to support the Domain and Application layers.

---

## Owns

- Repository Implementations
- Database Access
- Message Brokers
- External API Clients
- Email Providers
- Authentication Providers
- File Storage
- Cloud Services

---

## Must Never Contain

- Business decisions
- Aggregate invariants
- Commercial reasoning
- Revenue Readiness logic
- Executive decision logic

---

# API Layer

## Primary Responsibility

Expose application capabilities.

The API Layer translates external requests into Application Layer interactions.

---

## Owns

- Controllers
- Request Models
- Response Models
- Authentication
- Authorization
- Validation
- Versioning
- Error Translation

---

## Must Never Contain

- Business logic
- Aggregate modification
- Repository access
- Domain calculations

---

# Composition Root

## Primary Responsibility

Assemble the application.

The Composition Root creates and wires together the complete implementation.

---

## Owns

- Dependency Injection
- Configuration
- Startup
- Service Registration
- Environment Initialization

---

## Must Never Contain

- Business logic
- Domain policies
- Commercial reasoning

---

# Responsibility Matrix

| Responsibility | Domain | Application | Infrastructure | API | Composition Root |
|---------------|:------:|:-----------:|:--------------:|:---:|:----------------:|
| Business Rules | ✅ | ❌ | ❌ | ❌ | ❌ |
| Business Invariants | ✅ | ❌ | ❌ | ❌ | ❌ |
| Use Case Coordination | ❌ | ✅ | ❌ | ❌ | ❌ |
| Transaction Management | ❌ | ✅ | ❌ | ❌ | ❌ |
| Repository Interfaces | ✅ | ❌ | ❌ | ❌ | ❌ |
| Repository Implementations | ❌ | ❌ | ✅ | ❌ | ❌ |
| Database Access | ❌ | ❌ | ✅ | ❌ | ❌ |
| External APIs | ❌ | ❌ | ✅ | ❌ | ❌ |
| HTTP Requests | ❌ | ❌ | ❌ | ✅ | ❌ |
| Dependency Injection | ❌ | ❌ | ❌ | ❌ | ✅ |

---

# Responsibility Violations

The following are constitutional violations:

- Business logic inside Controllers
- SQL inside the Domain Layer
- Infrastructure dependencies inside Entities
- Repository implementations inside the Domain
- Framework-specific code inside Aggregates
- Domain calculations inside the API Layer

Every violation weakens architectural integrity.

---

# Decision Rule

When implementing new functionality:

1. Identify the responsibility.
2. Locate the owning layer.
3. Implement only within that layer.
4. Preserve dependency direction.
5. Verify architectural compliance.

---

# Success Criteria

Layer Responsibilities are considered successful when:

- Every responsibility has exactly one owner.
- Layer boundaries remain clear.
- Business logic remains centralized within the Domain.
- Infrastructure remains replaceable.
- Dependencies remain disciplined.
- Implementation reflects the approved architecture.

---

# Constitutional References

Derived from:

- Implementation Architecture
- Clean Architecture
- Domain Model v1.1
- Engineering Principles
- Architecture Decision Records

---

# Closing Statement

Layer Responsibilities define the constitutional ownership of software behavior within the FLUANZ platform.

By assigning every responsibility to exactly one implementation layer, FLUANZ preserves architectural clarity, prevents responsibility leakage, and ensures that business knowledge remains protected from technological concerns throughout the lifetime of the platform.