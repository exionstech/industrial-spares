# Industrial Spares Manufacturing Company

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Bun](https://img.shields.io/badge/Bun-1.3.14-orange?style=for-the-badge&logo=bun)](https://bun.sh/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Radix-black?style=for-the-badge)](https://ui.shadcn.com/)

An ISO 9001:2015 certified manufacturer & exporter of shaft collars, couplings, sprockets, valves, and precision CNC components based in Kolkata, India since 1993.

This repository is a pixel-perfect Next.js + Tailwind CSS clone of the company's Framer design, featuring a dynamic CSS-variable design system, shadcn/ui primitives, and AI-ready Ultracite/Biome tooling.

---

## 🚀 Quick Start

### Prerequisites
- [Bun](https://bun.sh/) (v1.3.0 or higher)

### Installation
```bash
# Clone the repository
git clone git@github-me:exionstech/industrial-spares.git
cd industrial-spares

# Install dependencies using Bun
bun install

# Start local development server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🛠 Available Scripts

- `bun run dev`: Start Next.js local development server
- `bun run build`: Build production Next.js bundle
- `bun run start`: Start production server
- `bun run lint`: Run Ultracite linter (`ultracite check`)
- `bun run format`: Run Ultracite auto-formatter & fixer (`ultracite fix`)

---

## 🏗 Architecture & Design System

- **CSS Variables**: Centralized HSL design tokens in `src/app/globals.css` bound to `tailwind.config.ts`.
- **UI Primitives**: Standard lowercased shadcn components in `src/components/ui/` (`button.tsx`, `badge.tsx`, `dialog.tsx`, `card.tsx`, `input.tsx`, `textarea.tsx`).
- **Feature Modals**: Interactive Request For Quote (RFQ) modal component in `src/components/modals/QuoteModal.tsx`.
- **Local Assets**: All high-resolution product photography, logos, and badges stored locally in `public/images/`.

For detailed architecture specs and phase logs, see:
- [`AGENTS.md`](AGENTS.md)
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)
- [`docs/EXECUTION_LOG.md`](docs/EXECUTION_LOG.md)
- [`docs/execution_docs/`](docs/execution_docs/)

---

## 📄 License

© INDUSTRIAL SPARES MANUFACTURING COMPANY. ALL RIGHTS RESERVED.
