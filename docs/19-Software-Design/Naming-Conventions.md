# Naming Conventions

## Status

Software Design v1.0

---

# Purpose

Naming Conventions define the official language used throughout the FLUANZ codebase.

Its purpose is to ensure that every class, interface, method, event, command, repository, and project consistently reflects the approved Domain Model and Ubiquitous Language.

Naming improves communication.

It never invents new business concepts.

---

# Why Naming Conventions Exist

Software is read far more often than it is written.

Consistent naming:

- Improves readability
- Reduces ambiguity
- Reinforces the Domain Model
- Simplifies onboarding
- Prevents duplicate terminology
- Preserves architectural consistency

Naming is part of the architecture.

---

# Constitutional Principle

The Ubiquitous Language is the only source of truth.

Code must use the same language as the business.

Developers do not invent alternative terminology.

---

# General Rules

Every name should be:

- Business-oriented
- Intention-revealing
- Singular where appropriate
- Specific
- Consistent
- Easy to pronounce
- Easy to search

Avoid abbreviations unless they are universally understood.

---

# Project Names

Projects are named after architectural responsibility.

Examples:

- Fluanz.Domain
- Fluanz.Application
- Fluanz.Infrastructure
- Fluanz.API
- Fluanz.CompositionRoot

Never include technology names in project names.

Examples to avoid:

❌ Fluanz.SQL

❌ Fluanz.PostgreSQL

❌ Fluanz.FastAPI

---

# Aggregate Names

Aggregate Roots use singular nouns.

Examples:

- Assessment
- Organization
- Recommendation
- Evidence

Avoid suffixes such as:

❌ AssessmentData

❌ AssessmentEntity

---

# Entity Names

Entities represent business concepts.

Examples:

- Observation
- Finding
- ExecutiveDecision

Do not prefix with business layer names.

Examples to avoid:

❌ DomainAssessment

❌ BusinessEvidence

---

# Value Object Names

Value Objects describe business characteristics.

Examples:

- ConfidenceScore
- RevenueReadiness
- TimeWindow
- OrganizationIdentity

Names should communicate meaning rather than implementation.

---

# Repository Interfaces

Repository Interfaces begin with "I".

Examples:

- IAssessmentRepository
- IOrganizationRepository
- IRecommendationRepository

Repository implementations describe technology.

Examples:

- SqlAssessmentRepository
- PostgreSqlAssessmentRepository
- InMemoryAssessmentRepository

---

# Domain Services

Services describe business capability.

Examples:

- AssessmentService
- RecommendationService
- EvidenceEvaluationService

Avoid generic names.

Examples to avoid:

❌ HelperService

❌ CommonService

---

# Commands

Commands express intent.

Pattern:

```
Verb + Business Concept + Command
```

Examples:

- StartAssessmentCommand
- GenerateRecommendationCommand
- RecordExecutiveDecisionCommand

Commands always represent an action.

---

# Queries

Queries express information retrieval.

Pattern:

```
Get + Business Concept + Query
```

Examples:

- GetAssessmentQuery
- GetOrganizationReadinessQuery
- GetRecommendationHistoryQuery

Queries never modify business state.

---

# Command Handlers

Pattern:

```
Command Name + Handler
```

Examples:

- StartAssessmentCommandHandler
- GenerateRecommendationCommandHandler

---

# Query Handlers

Pattern:

```
Query Name + Handler
```

Examples:

- GetAssessmentQueryHandler
- GetOrganizationReadinessQueryHandler

---

# Domain Events

Events describe completed business facts.

Names use the past tense.

Examples:

- AssessmentStarted
- EvidenceForged
- FindingDerived
- RecommendationGenerated
- ExecutiveDecisionRecorded

Avoid technical event names.

Examples to avoid:

❌ AssessmentCreatedEvent

❌ SaveCompleted

---

# DTOs

DTO names describe their purpose.

Examples:

- AssessmentRequest
- RecommendationResponse
- OrganizationSummary

Avoid leaking Domain terminology into transport models.

---

# API Controllers

Controllers expose business capabilities.

Pattern:

```
Business Concept + Controller
```

Examples:

- AssessmentController
- OrganizationController
- RecommendationController

Controllers remain thin.

---

# Methods

Methods describe business behavior.

Examples:

- StartAssessment()
- GenerateRecommendation()
- RecordDecision()
- CalculateRevenueReadiness()

Avoid implementation-oriented names.

Examples:

❌ Execute()

❌ Process()

❌ HandleStuff()

---

# Variables

Variable names should express business meaning.

Good:

- assessment
- recommendation
- executiveDecision

Avoid:

- data
- value
- temp
- obj
- x

---

# Boolean Variables

Booleans answer a question.

Examples:

- isApproved
- hasEvidence
- canGenerateRecommendation
- isRevenueReady

---

# Constants

Constants use PascalCase.

Examples:

- MaximumAssessmentDuration
- DefaultConfidenceThreshold

Magic numbers are prohibited.

---

# Folder Names

Folders reflect architectural responsibility.

Examples:

- Aggregates
- Commands
- Repositories
- Controllers

Avoid generic folder names.

Examples:

❌ Misc

❌ Helpers

❌ Utils

---

# Acronyms

Use established acronyms consistently.

Examples:

- API
- DTO
- CQRS
- ADR

Avoid creating project-specific abbreviations.

---

# Forbidden Naming Patterns

The following names are prohibited:

- Manager
- Processor
- Utility
- Helper
- Common
- Stuff
- Temp
- Data
- Object

These names communicate implementation rather than responsibility.

---

# Naming Decision Rule

Before introducing a new name, ask:

1. Does it exist in the Ubiquitous Language?
2. Does it describe business intent?
3. Would a domain expert understand it?
4. Does it reveal responsibility?
5. Is it consistent with existing terminology?

If any answer is "No", choose a better name.

---

# Success Criteria

Naming Conventions are considered successful when:

- Business language and code language are identical.
- Every class reveals its responsibility.
- Naming remains consistent across projects.
- Engineers rarely need explanatory comments.
- The codebase reads like the Domain Model.

---

# Constitutional References

Derived from:

- Founder Bible
- Ubiquitous Language
- Domain Model v1.1
- Implementation Architecture
- Software Design Constitution

---

# Closing Statement

Naming Conventions establish the official engineering language of the FLUANZ platform.

By ensuring that every software artifact reflects the approved Domain Model and Ubiquitous Language, FLUANZ maintains architectural clarity, reduces cognitive complexity, and enables engineers and domain experts to communicate through a shared vocabulary.