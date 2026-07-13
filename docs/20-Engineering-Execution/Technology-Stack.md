# Technology Stack

## Status

Engineering Execution v1.0

---

# Purpose

Technology Stack defines the approved technologies used to implement the FLUANZ platform.

Its purpose is to standardize engineering decisions, ensure long-term maintainability, reduce implementation risk, and preserve the architectural principles established throughout the platform.

Technology serves the architecture.

It never defines the architecture.

---

# Why Technology Stack Exists

A modern software platform consists of many technology choices.

Without standardization:

- Teams use inconsistent libraries.
- Duplicate solutions emerge.
- Integration complexity increases.
- Long-term maintenance becomes expensive.

The Technology Stack establishes one approved implementation path.

---

# Constitutional Principle

Business determines Architecture.

Architecture determines Technology.

Technology never determines Business.

---

# Technology Selection Criteria

Every technology must satisfy the following principles:

- Mature
- Well documented
- Long-term support (LTS)
- Large ecosystem
- High community adoption
- Strong testing support
- Cloud friendly
- Replaceable where appropriate

Popularity alone is not sufficient.

---

# Backend

## Language

Python 3.13+

### Rationale

- Rapid development
- Excellent AI ecosystem
- Strong typing support
- Mature tooling
- Outstanding productivity

---

## Web Framework

FastAPI

### Rationale

- High performance
- Native async support
- OpenAPI generation
- Excellent dependency injection
- Modern Python ecosystem

---

## Data Validation

Pydantic

### Rationale

- Strong typing
- Runtime validation
- Excellent FastAPI integration

---

# Frontend

## Framework

React

### Rationale

- Large ecosystem
- Component architecture
- Excellent developer experience
- Enterprise adoption

---

## Language

TypeScript

### Rationale

- Static typing
- Improved maintainability
- Better tooling
- Reduced runtime errors

---

## UI Framework

Material UI

### Rationale

- Mature component library
- Accessibility
- Consistent design system
- Enterprise ready

---

# Database

## Primary Database

PostgreSQL

### Rationale

- ACID compliance
- Excellent performance
- JSON support
- Advanced indexing
- Enterprise reliability

---

## ORM

SQLAlchemy 2.x

### Rationale

- Mature
- Flexible
- Excellent PostgreSQL support
- Repository-friendly

---

# Caching

Redis

### Rationale

- High performance
- Session storage
- CQRS read optimization
- Distributed caching

---

# Messaging

RabbitMQ

### Rationale

- Reliable messaging
- Event-driven architecture
- Mature ecosystem

Future replacement remains possible.

---

# Authentication

JWT

OAuth 2.0

OpenID Connect

Identity Provider:

Microsoft Entra ID (preferred)

---

# AI Platform

Provider abstraction through:

IAIProvider

Supported Providers:

- OpenAI
- Anthropic Claude
- Azure OpenAI
- Future Providers

AI providers remain Infrastructure concerns.

---

# API

REST

OpenAPI

Swagger

Versioned endpoints

---

# Testing

Unit Testing

pytest

---

Integration Testing

pytest

Testcontainers

---

API Testing

HTTPX

---

Architecture Testing

Custom architectural validation

---

# Development Tools

Visual Studio Code

Git

GitHub

Docker Desktop

Postman

---

# CI/CD

GitHub Actions

Pipeline stages:

- Build
- Test
- Static Analysis
- Security Scan
- Docker Build
- Deploy

---

# Code Quality

Black

Ruff

MyPy

Bandit

Pre-commit Hooks

---

# Documentation

Markdown

Mermaid

OpenAPI

Architecture Decision Records

---

# Monitoring

OpenTelemetry

Prometheus

Grafana

Structured Logging

---

# Containerization

Docker

Docker Compose

Future:

Kubernetes

---

# Cloud

Initial Target

Microsoft Azure

Future Compatible

AWS

Google Cloud

---

# Secrets

Azure Key Vault

Environment Variables

Never store secrets in source control.

---

# Engineering Decision

## Decision

Adopt a modern Python-first technology stack optimized for Domain-Driven Design, AI integration, and enterprise scalability.

---

## Rationale

- Excellent AI ecosystem.
- High developer productivity.
- Strong typing.
- Mature tooling.
- Long-term maintainability.

---

## Alternatives Considered

### .NET

Excellent enterprise platform.

Rejected for MVP due to slower development velocity and AI ecosystem preference.

---

### Java / Spring

Highly scalable.

Rejected due to greater implementation complexity for the initial team size.

---

### Node.js

Strong ecosystem.

Rejected because Python provides superior support for AI workflows and data processing.

---

# Technology Independence

The approved architecture remains independent of:

- Database vendor
- AI provider
- Cloud provider
- Authentication provider

Technology replacements must not require Domain redesign.

---

# Success Criteria

The Technology Stack is considered successful when:

- Architecture remains independent.
- Development velocity is high.
- Production reliability is achieved.
- AI integration remains replaceable.
- Engineering productivity is maximized.

---

# Constitutional References

Derived from:

- Implementation Architecture
- Software Design
- AI Orchestration
- Repository Implementation
- Clean Architecture
- Domain Model v1.1

---

# Closing Statement

The approved Technology Stack provides a modern, scalable, and maintainable foundation for implementing the FLUANZ platform.

Every selected technology exists to realize the approved architecture while preserving Domain independence, engineering excellence, and long-term adaptability.

Technology is a tool.

The Domain remains the product.