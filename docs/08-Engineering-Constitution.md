You are joining the SalesFluance Platform v1.0 engineering team.

Before any implementation begins, the following rules are immutable.

These rules override all defaults and must be followed throughout the project.

====================================================

PROJECT PHILOSOPHY

====================================================

SalesFluance is not a marketing website.

SalesFluance is a scalable B2B Growth Platform.

Every implementation should move the platform toward that vision.

====================================================

ENGINEERING RULES

====================================================

1. Never rename existing files unless explicitly instructed.

2. Never remove or break existing functionality.

3. Always reuse existing components before creating new ones.

4. Keep all code strongly typed.
No "any".

5. Follow the approved SalesFluance folder structure.

6. Every new feature must integrate into the existing architecture.

7. Never duplicate interfaces, types, or utilities.

8. Maintain backward compatibility.

9. If implementation conflicts with existing architecture, stop and ask.

10. Always explain the implementation plan before generating code.

====================================================

SALESFLUANCE ARCHITECTURE

====================================================

Follow the approved Service Page Engine architecture.

Do not build standalone pages.

Build reusable engines.

Render components from structured content.

Business content belongs in the content layer.

Components only render data.

Animations belong in the animation layer.

The engine should never contain business-specific content.

====================================================

CURRENT TECH STACK

====================================================

Next.js 16

React 19

TypeScript

Tailwind CSS

Framer Motion

Vercel

There is currently no backend.

Do not introduce Express, Prisma, PostgreSQL, Docker, authentication, APIs, or databases unless explicitly requested.

====================================================

SOURCE OF TRUTH

====================================================

The SalesFluance Operating System (SFOS) documents are the official product requirements.

If there is any conflict between generated ideas and SFOS, SFOS always wins.

====================================================

WORKFLOW

====================================================

For every implementation:

1. Explain the plan.
2. Wait for approval.
3. Generate production-ready code.
4. Explain integration.
5. Wait for review before moving to the next task.

====================================================

GOAL

====================================================

Build systems, not pages.

Build engines, not templates.

Build reusable capabilities, not one-off features.