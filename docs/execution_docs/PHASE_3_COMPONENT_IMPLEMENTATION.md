# Phase 3: Component Implementation

## Objective
Build modular Next.js components matching the Framer workspace design pixel-for-pixel with interactive capabilities.

## Implemented Components
1. **`src/lib/constants.ts`**:
   - Centralized data store containing brand metadata, Framer CDN URLs, navigation links, core product details, bullet specifications, category items, and material filter tags.

2. **UI Base Components**:
   - `src/components/ui/Button.tsx`: Multi-variant button (`primary`, `secondary`, `dark`, `outline`) with hover animations and arrow indicators.
   - `src/components/ui/Badge.tsx`: Spec badges & material filter tags.
   - `src/components/ui/QuoteModal.tsx`: Request For Quote (RFQ) modal with backdrop blur, product pre-selection, input validation, and confirmation state.

3. **Layout & Page Sections**:
   - `src/components/layout/Navbar.tsx`: Fixed header with company logo, desktop nav, mobile hamburger drawer, and RFQ trigger.
   - `src/components/sections/HeroSection.tsx`: Full-bleed hero banner with background overlay, kicker badge, headline, and dual CTAs.
   - `src/components/sections/CertificationSection.tsx`: ISO 9001:2015 banner featuring 3 certification partner logos separated by vertical dividers.
   - `src/components/sections/ProductsSection.tsx`: Showcase cards for Shaft Collars and Couplings with floating badges, 4-column machine parts grid, and interactive material pill bar.
   - `src/components/sections/ValuePropositions.tsx`: 4-card dark feature grid with red top accent lines.
   - `src/components/sections/ContactSection.tsx`: Deep red CTA section with engineer image and modal trigger.
   - `src/components/layout/Footer.tsx`: 4-column footer with contact details, company links, and copyright text.
   - `src/app/page.tsx`: Assembled full Home page state.
