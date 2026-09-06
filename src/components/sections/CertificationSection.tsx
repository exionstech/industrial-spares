import Image from "next/image";
import type React from "react";
import { Reveal } from "@/components/ui/reveal";
import { IMAGES } from "@/lib/constants";

/* Sized as a compact credential strip; the relative sizes are the design's. */
const BADGES = [
  { src: IMAGES.cert1, alt: "Make in India", width: 164, height: 168 },
  { src: IMAGES.cert2, alt: "ISO 9001 Certified Company", width: 105, height: 105 },
  { src: IMAGES.cert3, alt: "30 Years of Excellence", width: 134, height: 135 },
];

const WIDEST_BADGE = Math.max(...BADGES.map((badge) => badge.width));

export const CertificationSection: React.FC = () => {
  return (
    <section
      id="about"
      className="scroll-mt-[68px] lg:scroll-mt-[92px] bg-brand-bg-light pt-12 pb-14"
    >
      <Reveal className="mx-auto max-w-shell px-4 sm:px-8">
        {/* Credential badges, split by hairline rules */}
        <div className="grid grid-cols-3 divide-x divide-brand-line">
          {BADGES.map((badge) => (
            <div key={badge.alt} className="flex items-center justify-center px-3 py-6 sm:px-8">
              <Image
                src={badge.src}
                alt={badge.alt}
                width={badge.width}
                height={badge.height}
                className="h-auto object-contain"
                /* Percentage cap keeps the three badges in proportion once the
                   row is too narrow for their pixel widths. */
                style={{
                  width: badge.width,
                  maxWidth: `${((badge.width / WIDEST_BADGE) * 100).toFixed(1)}%`,
                }}
                unoptimized
              />
            </div>
          ))}
        </div>

        {/* Quality statement lead-in */}
        <p className="mx-auto mt-10 max-w-[900px] text-center text-brand-dark text-[15px] leading-[1.6] sm:text-base">
          ISO 9001:2015 certified. Manufacturing in Kolkata, India since 1993. Over 30 years of
          export experience delivering shaft collars, couplings and precision machined components
          worldwide.
        </p>
      </Reveal>
    </section>
  );
};
