# Project Rules & Guidelines - Industrial Spares Next.js App

## Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Package Manager**: Bun (`bun`)
- **Styling**: Tailwind CSS with custom theme colors
- **Typography**: Inter (Google Fonts via Next.js `next/font/google`)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Language**: TypeScript (Strict Mode)


## Design System Tokens
- `brand-red`: `#C8102E` (Primary accent & call-to-action buttons)
- `brand-red-dark`: `#C2030D` (Deep section red)
- `brand-dark`: `#111111` (Dark background & footer)
- `brand-card-dark`: `#191919` (Value proposition card background)
- `brand-bg-light`: `#F5F5F5` (Certification & product section background)
- `brand-accent-orange`: `#FF6613` (Kicker arrow accent)

## Coding Standards
1. Use functional components with explicit TypeScript prop interfaces.
2. Store static text, product arrays, and Framer image URLs in `src/lib/constants.ts`.
3. Use `next/image` or styled unoptimized img tags for external Framer CDN URLs (`framerusercontent.com`).
4. Ensure full responsive design (Desktop 1440px+, Laptop 1024px, Tablet 768px, Mobile <768px).
5. Maintain accessible forms with client-side validation and modal management.
