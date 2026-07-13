# Sprint 003 — Assessment Lifecycle

## Status

Engineering Execution v1.0

Sprint Status: Planned

Duration: 3 Weeks

Priority: Critical

---

# Sprint Goal

Implement the Assessment Aggregate and establish the commercial assessment lifecycle.

This Sprint transforms FLUANZ from an organizational management system into a commercial intelligence platform capable of executing structured business assessments.

---

# Why Sprint 003 Exists

Assessments represent the central business process of FLUANZ.

Every Observation, Evidence, Finding, Recommendation, Revenue Readiness calculation, and Executive Decision originates from an Assessment.

Without the Assessment Aggregate, the commercial reasoning pipeline cannot exist.

---

# Constitutional Principle

Commercial reasoning begins with an Assessment.

Every subsequent business capability derives from it.

---

# Sprint Objectives

Deliver:

- Assessment Aggregate
- Assessment lifecycle management
- Assessment state transitions
- Repository implementation
- CQRS Commands
- CQRS Queries
- REST API
- Database persistence
- Domain Events
- Automated testing

---

# Business Scope

Included:

- Start Assessment
- Retrieve Assessment
- Update Assessment
- Complete Assessment
- Archive Assessment

Deferred:

- Observation recording
- Evidence evaluation
- Finding derivation
- Recommendation generation
- Revenue Readiness calculation
- Executive Decisions

---

# Domain Deliverables

Implement:

Assessment Aggregate

Supporting Value Objects:

- AssessmentId
- AssessmentTitle
- AssessmentStatus
- AssessmentType
- AssessmentScope
- AssessmentPeriod
- AssessmentPriority

Business Rules:

- Assessment must belong to an Organization.
- Assessment begins in Draft state.
- Completed Assessments cannot return to Draft.
- Archived Assessments are immutable.

---

# Domain Events

Implement:

- AssessmentStarted
- AssessmentUpdated
- AssessmentCompleted
- AssessmentArchived

Events are published only after successful transaction commit.

---

# Repository

Interface:

- IAssessmentRepository

Implementation:

- SqlAssessmentRepository

Responsibilities:

- Persist Aggregate
- Retrieve Aggregate
- Optimistic concurrency
- Transaction participation

---

# Application Deliverables

Commands:

- StartAssessmentCommand
- UpdateAssessmentCommand
- CompleteAssessmentCommand
- ArchiveAssessmentCommand

Queries:

- GetAssessmentQuery
- ListAssessmentsQuery

Handlers:

- Command Handlers
- Query Handlers

DTOs:

- AssessmentRequest
- AssessmentResponse
- AssessmentSummary

---

# Infrastructure Deliverables

Implement:

- Assessment persistence mapping
- Database migration
- Repository implementation
- Event publishing integration
- Logging

---

# API Deliverables

Endpoints:

POST   /organizations/{organizationId}/assessments

GET    /organizations/{organizationId}/assessments

GET    /assessments/{assessmentId}

PUT    /assessments/{assessmentId}

POST   /assessments/{assessmentId}/complete

DELETE /assessments/{assessmentId}

Swagger documentation updated.

---

# Database Deliverables

Create:

Assessment table

Relationships:

- Organization → Assessments (1:N)

Indexes:

- OrganizationId
- Status
- CreatedDate

Include:

- Concurrency token
- Audit fields

---

# CQRS Flow

Command Example

StartAssessmentCommand

↓

Mediator

↓

StartAssessmentCommandHandler

↓

Assessment Aggregate

↓

AssessmentRepository

↓

AssessmentStarted Event

---

Query Example

GetAssessmentQuery

↓

Mediator

↓

Query Handler

↓

Read Projection

↓

AssessmentResponse

---

# Testing

Unit Tests

- Aggregate behavior
- State transitions
- Value Objects
- Domain Events

Integration Tests

- Repository
- API
- PostgreSQL

Architecture Tests

- Layer dependencies
- Repository boundaries
- CQRS compliance

---

# Out of Scope

The following remain deferred:

- Observation Aggregate
- Evidence Aggregate
- Finding Aggregate
- Recommendation Aggregate
- Revenue Readiness
- AI orchestration

---

# Acceptance Criteria

Sprint 003 is complete when:

- Assessments can be created.
- Assessments belong to Organizations.
- Assessment lifecycle rules are enforced.
- Domain Events are published.
- Repository persists Aggregate correctly.
- CQRS pipeline functions correctly.
- API endpoints are operational.
- Tests pass successfully.

---

# Definition of Done

Every completed feature must satisfy:

- Domain implemented
- Application implemented
- Infrastructure implemented
- API implemented
- Automated tests passing
- Documentation updated
- Code reviewed
- CI/CD passing

---

# Risks

Potential risks:

- Aggregate boundary violations
- Invalid lifecycle transitions
- Transaction inconsistencies
- Event publication failures

Mitigation:

All Assessment state changes occur exclusively through Aggregate methods.

---

# Sprint Success Metrics

Sprint 003 is successful when:

- Assessment becomes the central Aggregate of the platform.
- Organization → Assessment relationship is fully operational.
- Lifecycle transitions are enforced.
- Architecture remains constitutionally compliant.
- Commercial assessment workflow is established.

---

# Exit Criteria

Sprint 003 concludes when:

- Assessment lifecycle is fully operational.
- Organization and Assessment Aggregates work together.
- Platform is ready for Observation implementation.

Sprint 004 may begin immediately.

---

# Constitutional References

Derived from:

- Assessment Aggregate
- Domain Model v1.1
- CQRS
- Mediator Pattern
- Repository Implementation
- Event Publishing
- Engineering Execution

---

# Closing Statement

Sprint 003 establishes the Assessment lifecycle—the operational heart of the FLUANZ platform.

By delivering the first complete commercial assessment workflow, FLUANZ moves beyond organizational management and begins executing its core commercial intelligence methodology, providing the foundation for Observations, Evidence, Findings, Recommendations, Revenue Readiness, and Executive Decision-making in future Sprints.