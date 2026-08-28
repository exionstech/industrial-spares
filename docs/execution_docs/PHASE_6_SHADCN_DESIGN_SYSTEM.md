# Phase 6: Shadcn UI & Dynamic HSL Design System Integration

## Objective
Establish a centralized, CSS-variable-based dynamic design system using `globals.css`, `tailwind.config.ts`, `components.json`, and Radix-powered shadcn/ui components (`button.tsx`, `badge.tsx`, `dialog.tsx`, `card.tsx`, `input.tsx`, `textarea.tsx`).

## Key Implementation Actions
1. **Shadcn Configuration (`components.json`)**:
   - Initialized `components.json` with App Router schema, TypeScript, RSC, and aliases (`@/components`, `@/components/ui`, `@/lib/utils`).

2. **Dynamic CSS Variables (`globals.css`)**:
   - Configured HSL color tokens in `:root` and `.dark`:
     - `--primary`: `352 85% 43%` (`#C8102E` Brand Red)
     - `--brand-red-dark`: `358 97% 39%` (`#C2030D`)
     - `--brand-dark`: `0 0% 7%` (`#111111`)
     - `--brand-card-dark`: `0 0% 10%` (`#191919`)
     - `--brand-bg-light`: `0 0% 96%` (`#F5F5F5`)
     - `--brand-orange`: `20 100% 54%` (`#FF6613`)
     - Standard shadcn tokens: `--background`, `--foreground`, `--card`, `--border`, `--input`, `--ring`, `--radius`.

3. **Tailwind HSL Token Binding (`tailwind.config.ts`)**:
   - Mapped all Tailwind color utilities (`bg-brand-red`, `text-brand-dark`, `border-input`, `bg-background`, etc.) to `hsl(var(--...))` variables. Updating a CSS variable automatically updates all UI elements across the entire website.

4. **Shadcn UI Components**:
   - Created `src/lib/utils.ts` (`cn()` helper combining `clsx` and `tailwind-merge`).
   - Created lowercased shadcn primitive components in `src/components/ui/`:
     - `button.tsx`: CVA variant buttons with Radix Slot support.
     - `badge.tsx`: CVA badges supporting standard & pill selection variants.
     - `dialog.tsx`: Radix UI Dialog modal with backdrop blur & animation keyframes.
     - `card.tsx`: Card container, Header, Title, Content, Footer primitives.
     - `input.tsx`: Form input component.
     - `textarea.tsx`: Form textarea component.

5. **Refactored Application Components**:
   - Updated `QuoteModal.tsx` to use Radix `Dialog`, `Input`, `Textarea`, and `Button`.
   - Updated `Navbar.tsx`, `HeroSection.tsx`, and `ProductsSection.tsx` to import lowercased `@/components/ui/button` and `@/components/ui/badge`.

6. **Verification**:
   - `bun run build` completed successfully (`✓ Prerendered 4/4 static pages`, 0 errors).
