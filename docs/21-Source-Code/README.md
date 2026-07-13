# FLUANZ Source Code

## Status

Production Engineering Workspace v1.0

---

# Purpose

This directory contains the production implementation of the FLUANZ platform.

Unlike the `/docs` directory, which defines the business, architecture, and engineering constitution of FLUANZ, this workspace contains the executable software that realizes those specifications.

Every source file in this directory must faithfully implement the approved architecture.

---

# Engineering Philosophy

FLUANZ follows an Architecture-First engineering approach.

The implementation order is intentional:

```
Business Vision

↓

Domain Model

↓

Architecture

↓

Software Design

↓

Engineering Execution

↓

Production Code
```

Production code is the final expression of the approved architecture.

It does not redefine it.

---

# Directory Structure

```
21-Source-Code/

├── Backend/
│
├── Frontend/
│
├── Infrastructure/
│
├── DevOps/
│
├── README.md
│
└── Setup-Guide.md
```

Each directory owns a specific engineering responsibility.

---

# Backend

Responsible for:

- Domain implementation
- Application Layer
- Infrastructure Layer
- API Layer
- CQRS
- Domain Events
- Repository implementations
- AI orchestration
- Business logic

The Backend implements the commercial reasoning engine.

---

# Frontend

Responsible for:

- User Interface
- Executive Dashboard
- Assessment workflows
- Authentication experience
- API integration
- User interactions

The Frontend presents business knowledge.

It never owns business rules.

---

# Infrastructure

Responsible for:

- Database
- Docker
- Monitoring
- Scripts
- Local development infrastructure

Infrastructure supports the application.

It never defines the Domain.

---

# DevOps

Responsible for:

- CI/CD pipelines
- Deployment
- Environment configuration
- Release automation
- Operational tooling

DevOps ensures reliable software delivery.

---

# Engineering Rules

Every implementation must comply with:

- Clean Architecture
- Domain-Driven Design
- CQRS
- Mediator Pattern
- Repository Pattern
- Dependency Rules
- Coding Standards

Architectural shortcuts are prohibited.

---

# Development Workflow

Every feature follows the same lifecycle.

```
Business Requirement

↓

Approved Architecture

↓

Sprint Planning

↓

Implementation

↓

Testing

↓

Code Review

↓

Integration

↓

Release
```

Every implementation must remain traceable to the approved Domain Model.

---

# Quality Gates

Before code is merged:

- Architecture remains compliant.
- Tests pass.
- Documentation is updated.
- Code review is completed.
- CI/CD pipeline succeeds.

No code bypasses these quality gates.

---

# Guiding Principles

- Business drives implementation.
- The Domain is the source of truth.
- Architecture takes precedence over convenience.
- Technology serves the business.
- AI assists engineering—it does not replace engineering judgment.
- Simplicity is preferred over unnecessary complexity.

---

# Relationship to Documentation

The `/docs` directory defines **what** FLUANZ is.

The `/21-Source-Code` directory defines **how** FLUANZ is implemented.

If implementation and documentation ever disagree:

The documentation is reviewed first.

The architecture is never silently changed through code.

---

# Success Criteria

The Source Code workspace is considered successful when:

- Every implementation reflects the approved architecture.
- Business rules remain inside the Domain Layer.
- The platform remains maintainable.
- Development progresses incrementally.
- Production software faithfully realizes the FLUANZ vision.

---

# Constitutional References

Derived from:

- Founder Bible
- Domain Model v1.1
- Architecture Reviews
- Software Design
- Engineering Execution

---

# Closing Statement

This directory represents the transition from architectural design to production engineering.

Every component developed within this workspace contributes to the realization of the FLUANZ platform.

The objective is not merely to write software, but to implement a commercial intelligence platform whose code faithfully embodies its approved business model, architectural principles, and engineering standards.

The blueprint is complete.

Construction begins here.