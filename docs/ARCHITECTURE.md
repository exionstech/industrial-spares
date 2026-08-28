# Project Architecture & Design System

## Technical Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript 5+
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion

## Component Breakdown

```
[Page: src/app/page.tsx]
 ├── Navbar (src/components/layout/Navbar.tsx)
 │    ├── Brand Logo
 │    ├── Navigation Links (Home, About us, Products, Quality)
 │    ├── Request Quote CTA
 │    └── Mobile Slide-Over Drawer
 ├── HeroSection (src/components/sections/HeroSection.tsx)
 │    ├── Background Hero Image (WvGdIGyATWIlEz7kZUiQLgQ1U.png)
 │    ├── Headline: "Wherever you are, we deliver."
 │    ├── Subtitle: "30+ years of export experience..."
 │    └── Dual Action CTAs (Explore Products / Request Quote)
 ├── CertificationSection (src/components/sections/CertificationSection.tsx)
 │    ├── Certification Partner Badges (3 logos)
 │    └── Quality Assurance Statement
 ├── ProductsSection (src/components/sections/ProductsSection.tsx)
 │    ├── Shaft Collars Featured Card + Spec Pills
 │    ├── Couplings Featured Card + Spec Pills
 │    ├── Other Machine Parts Grid (CNC Components, Sprockets, Valves, Parts)
 │    └── Materials Filter Pills (Black Oxide, Mild Steel, Stainless Steel, Aluminium, Plastic)
 ├── ValuePropositions (src/components/sections/ValuePropositions.tsx)
 │    └── 4-Card Dark Grid (Consistent Quality, On-Time Delivery, Imported Fasteners, Laser Marking)
 ├── ContactSection (src/components/sections/ContactSection.tsx)
 │    ├── Deep Red Banner background (#C2030D)
 │    ├── "Let's discuss your requirement." Headline
 │    └── Engineer Portrait (ctUfi20e5c3UghihvWBXApxVG6c.png)
 ├── QuoteModal (src/components/modals/QuoteModal.tsx)
 │    └── Interactive RFQ Form Modal (built on Radix Dialog & shadcn primitives)
 ├── UI Primitives (src/components/ui/)
 │    ├── button.tsx (Radix Slot + CVA)
 │    ├── badge.tsx (CVA spec & pill variants)
 │    ├── dialog.tsx (Radix Dialog primitive)
 │    ├── card.tsx (Card container primitives)
 │    ├── input.tsx (Form input primitive)
 │    └── textarea.tsx (Form textarea primitive)
 └── Footer (src/components/layout/Footer.tsx)

      ├── Brand Intro & Certification Tagline
      ├── Company Navigation
      ├── Products Directory
      └── Contact Info & Copyright
```

## Theme Tokens & Colors
- `brand-red`: `#C8102E`
- `brand-red-dark`: `#C2030D`
- `brand-dark`: `#111111`
- `brand-card-dark`: `#191919`
- `brand-bg-light`: `#F5F5F5`
- `brand-orange`: `#FF6613`
