import { ArrowRight } from "lucide-react";
import type React from "react";
import { MAP_CARD } from "@/lib/constants";

export const MapSection: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-shell px-4 sm:px-8">
        <div className="relative h-[360px] overflow-hidden bg-[#e8eaed] sm:h-[440px] lg:h-[540px]">
          <iframe
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            src={MAP_CARD.embedUrl}
            title="Map showing the Industrial Spares manufacturing hub in Kolkata"
          />

          {/* Address card - pointer events kept off the map behind it */}
          {/* <div className="absolute top-6 left-6 w-[290px] bg-white p-7 shadow-lg sm:top-8 sm:left-8 sm:w-[340px] sm:p-8"> */}
          <p className="text-brand-red text-sm uppercase tracking-[0.08em]">{MAP_CARD.label}</p>
          <h3 className="mt-3 font-medium text-2xl text-brand-dark">{MAP_CARD.name}</h3>
          <p className="mt-3 text-[#4a4a4a] text-sm leading-[1.6]">
            {MAP_CARD.addressLines.map((line) => (
              <span className="block" key={line}>
                {line}
              </span>
            ))}
          </p>

          <a
            className="group mt-6 flex items-center gap-2 border-brand-line border-t pt-5 text-brand-red text-sm uppercase tracking-[0.08em]"
            href={MAP_CARD.directionsUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>Get Directions</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};
