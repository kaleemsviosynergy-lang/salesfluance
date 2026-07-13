# Project Layout

## Status

Software Design v1.0

---

# Purpose

Project Layout defines the internal organization of every project within the FLUANZ solution.

Its purpose is to establish a consistent directory structure that reflects the approved architecture, improves discoverability, and enables predictable software development.

Project Layout organizes implementation.

It never changes architectural responsibility.

---

# Why Project Layout Exists

A well-structured solution can still become difficult to maintain if each project follows different organizational conventions.

Without a standard Project Layout:

- Files become difficult to locate.
- Similar components appear in multiple locations.
- Teams adopt inconsistent structures.
- Architectural responsibilities become blurred.

Project Layout eliminates these inconsistencies.

---

# Constitutional Principle

Every project follows a predictable internal structure.

Developers should never need to guess where code belongs.

---

# Design Objectives

The Project Layout is designed to:

- Improve discoverability
- Standardize implementation
- Preserve architectural boundaries
- Reduce onboarding time
- Support long-term maintainability
- Simplify navigation
- Encourage consistency

---

# Domain Project Layout

```
Domain

├── Aggregates
├── Entities
├── ValueObjects
├── DomainServices
├── DomainEvents
├── Repositories
├── Specifications
├── Exceptions
└── SharedKernel
```

The Domain Project is organized by business concepts.

---

# Application Project Layout

```
Application

├── Commands
│
├── Queries
│
├── Handlers
│
├── UseCases
│
├── Services
│
├── DTOs
│
├── Mappers
│
├── Validators
│
└── Behaviors
```

The Application Project is organized by application workflows.

---

# Infrastructure Project Layout

```
Infrastructure

├── Persistence
│   ├── Context
│   ├── Configurations
│   ├── Migrations
│   └── Repositories
│
├── Messaging
│
├── AI
│
├── Authentication
│
├── External
│
├── Storage
│
├── Logging
│
└── Monitoring
```

The Infrastructure Project is organized by technical capability.

---

# API Project Layout

```
API

├── Controllers
├── Requests
├── Responses
├── Middleware
├── Authentication
├── Authorization
├── Versioning
├── Filters
├── OpenAPI
└── Configuration
```

The API Project is organized by transport concerns.

---

# Composition Root Layout

```
CompositionRoot

├── DependencyInjection
├── Modules
├── Startup
├── Configuration
└── Bootstrap
```

The Composition Root is organized around application assembly.

---

# Test Project Layout

```
Tests

├── Domain
├── Application
├── Infrastructure
├── API
├── Integration
└── Shared
```

Every production project has a corresponding test project.

---

# Folder Design Rules

Every folder should:

- Represent one responsibility.
- Contain related components only.
- Avoid unnecessary nesting.
- Follow consistent naming.
- Support independent testing.

Folders are architectural boundaries—not storage containers.

---

# Growth Strategy

New folders may be introduced only when:

- A new architectural responsibility exists.
- Existing folders become overloaded.
- Architectural clarity is improved.

Folders must never be created for temporary convenience.

---

# Anti-Patterns

The following layouts are prohibited:

❌ Misc

❌ Helpers

❌ Utils

❌ Common

❌ Temp

❌ NewFolder

These names describe neither business responsibility nor architectural purpose.

---

# Package Organization Example

```
Fluanz.Domain

├── Aggregates
│   ├── Assessment
│   ├── Evidence
│   ├── Recommendation
│   └── Organization
│
├── Entities
│
├── ValueObjects
│
├── DomainServices
│
├── DomainEvents
│
└── Repositories
```

The package hierarchy mirrors the Domain Model.

---

# Success Criteria

The Project Layout is considered successful when:

- Every file has an obvious location.
- Folder names reflect architectural intent.
- New developers can navigate the solution quickly.
- Structural consistency is maintained.
- Architectural boundaries remain visible.

---

# Constitutional References

Derived from:

- Solution Structure
- Implementation Architecture
- Clean Architecture
- Layer Responsibilities
- Dependency Rules
- Software Design Constitution

---

# Closing Statement

Project Layout establishes the internal structure of every FLUANZ project, ensuring that the physical organization of source code faithfully reflects the approved architecture.

A predictable layout improves maintainability, reinforces architectural boundaries, and enables engineers to focus on business implementation rather than code organization.