# FLUANZ Development Setup Guide

## Status

Production Engineering Workspace v1.0

---

# Purpose

This guide describes how to prepare a local development environment for the FLUANZ platform.

Its objective is to ensure that every engineer can build, run, and contribute to the platform using a consistent and repeatable setup process.

---

# Supported Operating Systems

- Windows 11
- Ubuntu 24.04 LTS
- macOS (Apple Silicon and Intel)

---

# Required Software

Install the following before starting development.

## Git

Latest stable version

Verify:

```bash
git --version
```

---

## Python

Version:

```
Python 3.13+
```

Verify:

```bash
python --version
```

---

## Node.js

Current LTS Version

Verify:

```bash
node --version
npm --version
```

---

## Visual Studio Code

Recommended Extensions:

- Python
- Pylance
- Docker
- GitLens
- ESLint
- Prettier
- Material Icon Theme
- Markdown All in One

---

## Docker Desktop

Verify:

```bash
docker --version
docker compose version
```

---

## PostgreSQL

Local installation is optional.

Development uses Docker.

---

# Clone Repository

```bash
git clone <repository-url>

cd SalesFluance
```

---

# Repository Structure

```
21-Source-Code/

Backend/
Frontend/
Infrastructure/
DevOps/
```

---

# Backend Setup

Navigate to:

```bash
cd 21-Source-Code/Backend
```

Create virtual environment:

Windows

```bash
python -m venv .venv
```

Linux/macOS

```bash
python3 -m venv .venv
```

Activate

Windows

```bash
.venv\Scripts\activate
```

Linux/macOS

```bash
source .venv/bin/activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Verify

```bash
python --version
pip list
```

---

# Frontend Setup

Navigate

```bash
cd 21-Source-Code/Frontend
```

Install packages

```bash
npm install
```

Verify

```bash
npm list
```

---

# Infrastructure Setup

Navigate

```bash
cd 21-Source-Code/Infrastructure/docker
```

Start services

```bash
docker compose up -d
```

Verify

```bash
docker ps
```

Expected services:

- PostgreSQL
- Backend
- Frontend

---

# Database

Connection

```
Host:

localhost

Port:

5432

Database:

fluanz

Username:

postgres

Password:

Configured through environment variables
```

---

# Environment Variables

Backend

```
.env
```

Example

```text
APP_ENV=Development

DATABASE_URL=

JWT_SECRET=

OPENAI_API_KEY=

ANTHROPIC_API_KEY=
```

Never commit environment files.

---

# Running Backend

Navigate

```bash
cd 21-Source-Code/Backend
```

Run

```bash
uvicorn app.main:app --reload
```

Expected

```
http://localhost:8000
```

Swagger

```
http://localhost:8000/docs
```

Health Endpoint

```
http://localhost:8000/health
```

---

# Running Frontend

Navigate

```bash
cd 21-Source-Code/Frontend
```

Run

```bash
npm run dev
```

Expected

```
http://localhost:5173
```

---

# Running Tests

Backend

```bash
pytest
```

Frontend

```bash
npm test
```

---

# Code Quality

Run formatting

```bash
black .
```

Lint

```bash
ruff check .
```

Type checking

```bash
mypy .
```

---

# Git Workflow

Create branch

```bash
git checkout -b feature/<feature-name>
```

Commit

```bash
git add .

git commit -m "feat: description"
```

Push

```bash
git push origin feature/<feature-name>
```

---

# Troubleshooting

Docker not running

Start Docker Desktop.

---

Backend will not start

Verify:

- Virtual environment activated
- Dependencies installed
- Environment variables configured

---

Frontend will not start

Verify

```bash
npm install
```

completed successfully.

---

Database connection fails

Verify

```bash
docker ps
```

PostgreSQL container is running.

---

# Definition of Ready

A development environment is considered ready when:

- Repository cloned.
- Backend dependencies installed.
- Frontend dependencies installed.
- Docker services running.
- PostgreSQL available.
- Backend starts successfully.
- Frontend starts successfully.
- Swagger accessible.
- Health endpoint returns "Healthy".

---

# Constitutional References

Derived from:

- Technology Stack
- Engineering Execution
- Sprint 001
- Coding Standards

---

# Closing Statement

This guide provides the standard process for preparing a FLUANZ development environment.

Every engineer should be able to follow these steps and obtain a consistent local setup capable of building, testing, and running the platform while preserving the approved engineering standards.