import type React from "react";
import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

interface CatalogueLevelHeaderProps {
  eyebrow: string;
  title: string;
  /* Only the top level carries a line of supporting text. */
  supporting?: string;
  /* Structural count, e.g. "6 variants" - never a description. */
  meta?: string;
}

/* One header treatment shared by every catalogue level, so the levels feel like one browser. */
export const CatalogueLevelHeader: React.FC<CatalogueLevelHeaderProps> = ({
  eyebrow,
  title,
  supporting,
  meta,
}) => (
  <Reveal className="mx-auto max-w-shell px-4 pt-12 pb-10 sm:px-8 lg:pt-16 lg:pb-14">
    <SectionEyebrow>{eyebrow}</SectionEyebrow>
    <h1 className="mt-4 font-medium text-[32px] text-brand-dark leading-[1.05] tracking-[-0.03em] sm:text-5xl">
      {title}
    </h1>
    {supporting && (
      <p className="mt-5 max-w-[560px] text-[#4a4a4a] text-base leading-[1.6]">{supporting}</p>
    )}
    {meta && <p className="mt-5 text-brand-muted text-sm uppercase tracking-[0.14em]">{meta}</p>}
  </Reveal>
);
