# Composition Root

## Status

Implementation Architecture v1.0

---

# Purpose

The Composition Root is responsible for assembling the complete FLUANZ application.

Its purpose is to construct the runtime environment by wiring together the Domain, Application, Infrastructure, and API layers while preserving the constitutional boundaries established by the approved architecture.

The Composition Root creates the application.

It never defines business behavior.

---

# Why the Composition Root Exists

The FLUANZ platform is composed of multiple independent architectural layers.

These layers must remain unaware of each other's concrete implementations.

The Composition Root performs this assembly at application startup, ensuring that business components remain completely independent of implementation technologies.

Without a Composition Root:

- Dependencies become scattered.
- Infrastructure leaks into business logic.
- Components construct their own dependencies.
- Architectural boundaries gradually disappear.

The Composition Root exists to centralize application assembly.

---

# Constitutional Principle

Construction belongs in one place.

Business behavior belongs everywhere else.

The Composition Root performs object composition.

It never performs business orchestration.

---

# Primary Responsibilities

The Composition Root owns:

- Dependency Injection
- Service registration
- Module composition
- Application startup
- Environment configuration
- Infrastructure initialization
- External provider registration
- Application lifetime management

It never owns business policies.

---

# Composition Responsibilities

## Dependency Injection

Register all services required by the application.

Examples include:

- Application Services
- Repository implementations
- Infrastructure providers
- Messaging services
- AI provider adapters

The Domain Layer never participates in Dependency Injection.

---

## Module Registration

Compose independent architectural modules.

Examples:

- Domain Module
- Application Module
- Infrastructure Module
- API Module

Each module remains independently testable.

---

## Repository Wiring

Bind Repository interfaces to Infrastructure implementations.

Example:

```
IAssessmentRepository

↓

SqlAssessmentRepository
```

The Domain knows only the interface.

The Composition Root supplies the implementation.

---

## External Provider Registration

Register replaceable technical providers.

Examples:

- Database providers
- Email providers
- Authentication providers
- Cloud storage providers
- AI providers
- Message brokers

Provider selection remains an implementation decision.

---

## Configuration

Load application configuration.

Examples:

- Connection strings
- API keys
- Feature flags
- Environment settings
- Logging configuration

Configuration never enters the Domain Layer.

---

## Environment Initialization

Prepare the runtime environment.

Examples:

- Development
- Testing
- Staging
- Production

Business behavior remains identical across environments.

---

## Application Startup

Initialize the platform.

Responsibilities include:

- Service composition
- Infrastructure initialization
- Endpoint registration
- Middleware registration
- Background services
- Health monitoring

Startup remains separate from business execution.

---

# Dependency Flow

```
Composition Root

↓

API Layer

↓

Application Layer

↓

Domain Layer

↑

Infrastructure Layer
```

The Composition Root assembles dependencies.

It does not change dependency direction.

---

# What the Composition Root Must Never Contain

The Composition Root must never contain:

- Business rules
- Aggregate logic
- Revenue Readiness calculations
- Recommendation generation
- Executive decisions
- Commercial reasoning
- Repository queries
- Workflow orchestration

Business behavior begins only after application startup.

---

# Framework Ownership

Framework-specific code belongs exclusively inside the Composition Root and Infrastructure Layer.

Examples include:

- ASP.NET
- FastAPI
- Spring Boot
- NestJS
- Dependency Injection containers
- Configuration frameworks

Frameworks remain invisible to the Domain.

---

# Provider Replaceability

Every technical provider must be replaceable through configuration.

Examples:

```
IAIProvider

↓

OpenAIProvider

or

ClaudeProvider

or

FutureProvider
```

The Domain remains completely unaware of provider selection.

---

# Startup Sequence

```
Load Configuration

↓

Register Services

↓

Compose Modules

↓

Initialize Infrastructure

↓

Configure API

↓

Start Application
```

Business workflows begin only after successful application initialization.

---

# Package Organization

```
Composition Root

├── Dependency Injection
├── Service Registration
├── Module Configuration
├── Startup
├── Environment Configuration
├── Provider Registration
└── Application Bootstrap
```

Package organization reflects application composition rather than business concepts.

---

# Success Criteria

The Composition Root is considered successful when:

- Every dependency is resolved in one place.
- Framework knowledge remains isolated.
- Business layers remain independent.
- Infrastructure remains replaceable.
- Service registration remains centralized.
- The Domain remains completely unaware of application startup.

---

# Constitutional References

Derived from:

- Implementation Architecture
- Clean Architecture
- Layer Responsibilities
- Dependency Rules
- Domain Layer
- Application Layer
- Infrastructure Layer
- API Layer
- Domain Model v1.1

---

# Closing Statement

The Composition Root serves as the architectural assembly point of the FLUANZ platform.

By centralizing dependency composition, infrastructure registration, and application startup, it preserves the independence of every architectural layer while ensuring that business knowledge remains permanently isolated from implementation technologies.

The Composition Root completes the Implementation Architecture Constitution and authorizes the transition from architectural design to production engineering.