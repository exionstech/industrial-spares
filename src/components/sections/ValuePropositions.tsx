"use client";

import type React from "react";
import { useCallback, useRef, useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { VALUE_PROPOSITIONS } from "@/lib/constants";

/*
 * Below md the four cards become a swipeable, snap-scrolling carousel with a
 * dot pager; from md up they lay out as the 2x2 grid.
 */
export const ValuePropositions: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);

  /* Distance between two slides, gap included - read from the DOM so the
     value stays right whatever the gap or card width resolves to. */
  const getStep = (track: HTMLDivElement) => {
    const [first, second] = Array.from(track.children) as HTMLElement[];
    if (!second) {
      return track.clientWidth;
    }
    return second.offsetLeft - first.offsetLeft;
  };

  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }
    setActiveCard(Math.round(track.scrollLeft / getStep(track)));
  }, []);

  const goToCard = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) {
      return;
    }
    /* Plain assignment rather than scrollTo({behavior:"smooth"}): smooth
       scrolling is a no-op wherever the user or the browser has motion turned
       down, which would leave the pager doing nothing. */
    track.scrollLeft = index * getStep(track);
    /* Set it here too rather than waiting on the scroll event, so the pager
       stays in step even if the scroll lands without firing one. */
    setActiveCard(index);
  }, []);

  return (
    <section id="quality" className="scroll-mt-[68px] lg:scroll-mt-[92px] bg-white pt-20 pb-20">
      <div className="mx-auto max-w-shell px-4 sm:px-8">
        {/* Section header */}
        <Reveal className="text-center">
          <h2 className="font-medium text-4xl text-brand-dark tracking-tight sm:text-5xl">
            What we deliver
          </h2>
          <p className="mt-4 text-[15px] text-brand-muted">Our commitment to every order</p>
        </Reveal>

        {/* Carousel on mobile, 2x2 grid from md up */}
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto md:grid md:grid-cols-2 md:snap-none md:overflow-visible"
        >
          {VALUE_PROPOSITIONS.map((vp) => (
            <div
              key={vp.title}
              className="w-full shrink-0 snap-center bg-brand-card-dark p-8 md:w-auto md:shrink sm:px-[33px] sm:py-9"
            >
              <div className="h-[3px] w-10 bg-brand-red" />
              <h3 className="mt-6 font-medium text-lg text-white">{vp.title}</h3>
              <p className="mt-4 text-brand-on-dark text-[15px] leading-[1.7]">{vp.description}</p>
            </div>
          ))}
        </div>

        {/* Pager - carousel only */}
        <div className="mt-4 flex items-center justify-center gap-1 md:hidden">
          {VALUE_PROPOSITIONS.map((vp, index) => (
            <button
              key={vp.title}
              type="button"
              onClick={() => goToCard(index)}
              aria-label={`Show ${vp.title}`}
              aria-current={index === activeCard}
              className="flex h-6 w-6 items-center justify-center"
            >
              <span
                className={`rounded-full transition-all duration-200 ${
                  index === activeCard ? "h-3 w-3 bg-[#636363]" : "h-2.5 w-2.5 bg-[#d9d9d9]"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
