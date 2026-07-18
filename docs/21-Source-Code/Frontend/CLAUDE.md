# FLUANZ Frontend Development Rules

## Technology Stack

- React 19
- Vite
- TypeScript
- Tailwind CSS v4
- shadcn/ui v4
- Base UI (@base-ui/react)

## UI Rules

IMPORTANT:

This project uses the latest shadcn/ui (Base UI).

DO NOT generate Radix UI components.

DO NOT generate code for older shadcn versions.

Always use components from:

src/components/ui

Never recreate existing UI components.

## Project Structure

src/
  components/
    ui/
  features/
    organizations/
      components/
      details/
      data/
      hooks/
      types/
  pages/
  layouts/

## Imports

Always use existing project aliases.

Example:

import { Button } from "@/components/ui/button";

Feature imports:

import { ReadinessScore } from "@/features/organizations/components/ReadinessScore";

Never assume folders exist.

Do not import from:

@/components/organizations

unless explicitly present.

## Existing Components

Already available:

- Button
- Card
- Avatar
- Badge
- Dropdown Menu
- Input
- Select
- Separator
- Skeleton
- Table
- Tabs (Base UI)

Always reuse them.

## Coding Style

- Functional Components
- TypeScript
- Named interfaces
- Strong typing
- No any
- Reusable components
- Enterprise architecture

Always match the existing project structure.