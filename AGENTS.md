# AGENTS.md - Workspace Instructions & Context

Welcome to the **Industrial Spares Manufacturing Company** website repository.

## Overview
This codebase is a pixel-perfect Next.js + Tailwind CSS clone of the company's Framer workspace design. It represents an ISO 9001:2015 certified manufacturer & exporter of shaft collars, couplings, sprockets, valves, and precision CNC components based in Kolkata, India since 1993.

## Key Files & Structure
- `.agents/rules/project-rules.md`: Design system rules and coding conventions.
- `docs/ARCHITECTURE.md`: Detailed component breakdown and token specifications.
- `docs/EXECUTION_LOG.md`: Summary execution log of changes and verification steps.
- `docs/execution_docs/`: Phase-by-phase detailed execution documentation (`PHASE_1` through `PHASE_7`).
- `src/lib/constants.ts`: All Framer CDN asset URLs, section content, product details, and badges.
- `src/components/sections/`: Modular Next.js components for each section of the home page.
- `src/components/modals/QuoteModal.tsx`: Request For Quote (RFQ) modal component.
- `src/components/ui/`: Pure lowercased shadcn UI primitive components (`button.tsx`, `badge.tsx`, `dialog.tsx`, `card.tsx`, `input.tsx`, `textarea.tsx`).

## Commands
- `bun run dev`: Start local development server
- `bun run build`: Build production Next.js bundle
- `bun run lint`: Run Ultracite linter (`ultracite check`)
- `bun run format`: Run Ultracite auto-formatter & fixer (`ultracite fix`)
- `bun install`: Install project dependencies
