"use client";

import Image from "next/image";
import type React from "react";
import { useCallback, useEffect, useState } from "react";
import { HERO_SLIDES } from "@/lib/constants";

const SLIDE_INTERVAL_MS = 6000;

/* Navbar (92) + section padding (30 + 20) + pager block (44). */
const HERO_CHROME_PX = 186;

/*
 * The outgoing slide stays fully opaque one layer down while the incoming one
 * fades in over it - cross-fading both at once would dip through the dark
 * backing colour halfway through.
 */
export const HeroSection: React.FC = () => {
  const [slides, setSlides] = useState({ active: 0, previous: 0 });

  const goToSlide = useCallback((index: number) => {
    setSlides((current) =>
      current.active === index ? current : { active: index, previous: current.active },
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlides((current) => ({
        active: (current.active + 1) % HERO_SLIDES.length,
        previous: current.active,
      }));
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  const layerClass = (index: number) => {
    if (index === slides.active) {
      return "z-20 opacity-100 transition-opacity duration-700";
    }
    if (index === slides.previous) {
      return "z-10 opacity-100";
    }
    return "z-0 opacity-0";
  };

  return (
    <section
      id="home"
      className="scroll-mt-[68px] lg:scroll-mt-[92px] bg-white pt-0 pb-5 sm:pt-[110px]"
    >
      {/*
       * Photo band keeps its ~2.19:1 ratio until that would push the first
       * screen past the viewport; HERO_CHROME_PX is the navbar plus this
       * section's own padding and pager, so navbar + hero never exceed 100vh.
       */}
      {/* Hero runs wider than the rest of the page - viewport minus a small gutter,
          not the 1440 shell. */}
      <div className="w-full px-0 sm:px-8">
        <div
          className="relative h-[70vh] max-h-none min-h-0 w-full overflow-hidden bg-brand-dark sm:aspect-[2.19/1] sm:h-auto sm:max-h-[calc(100svh-var(--hero-chrome))] sm:min-h-[220px]"
          style={{ "--hero-chrome": `${HERO_CHROME_PX}px` } as React.CSSProperties}
        >
          {HERO_SLIDES.map((slide, index) => (
            <Image
              key={slide.id}
              src={slide.image}
              alt={slide.alt}
              fill
              sizes="100vw"
              priority={index === 0}
              /* Off-screen slides still decode up front so a rotation never flashes empty. */
              loading={index === 0 ? undefined : "eager"}
              className={`object-cover object-center ${layerClass(index)}`}
              unoptimized
            />
          ))}
        </div>
      </div>

      {/* Slide pager */}
      <div className="relative z-30 -mt-10 flex items-center justify-center gap-0.5 sm:mt-5 sm:gap-1">
        {HERO_SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => goToSlide(index)}
            aria-label={`Show slide ${index + 1}`}
            aria-current={index === slides.active}
            className="flex h-5 w-5 items-center justify-center sm:h-6 sm:w-6"
          >
            <span
              className={`rounded-full transition-all duration-200 ${
                index === slides.active
                  ? "h-2 w-2 bg-[#636363] sm:h-3 sm:w-3"
                  : "h-1.5 w-1.5 bg-[#d9d9d9] sm:h-2.5 sm:w-2.5"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
};
