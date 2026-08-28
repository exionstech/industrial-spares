import Image from "next/image";
import type React from "react";
import { BRAND_INFO, IMAGES } from "@/lib/constants";

export const CertificationSection: React.FC = () => {
  return (
    <section
      id="about"
      className="bg-brand-bg-light py-16 px-4 sm:px-6 lg:px-8 border-y border-gray-200"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        {/* ISO & Certification Logos Container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16">
          <div className="relative w-72 sm:w-80 h-44 flex-shrink-0">
            <Image
              src={IMAGES.cert1}
              alt="ISO Certification Badge 1"
              fill
              className="object-contain"
              unoptimized
            />
          </div>

          <div className="hidden md:block w-px h-28 bg-gray-300"></div>

          <div className="relative w-48 sm:w-56 h-40 flex-shrink-0">
            <Image
              src={IMAGES.cert2}
              alt="ISO Certification Badge 2"
              fill
              className="object-contain"
              unoptimized
            />
          </div>

          <div className="hidden md:block w-px h-28 bg-gray-300"></div>

          <div className="relative w-56 sm:w-64 h-44 flex-shrink-0">
            <Image
              src={IMAGES.cert3}
              alt="ISO Certification Badge 3"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </div>

        {/* Quality statement banner text */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-base sm:text-lg md:text-xl font-medium text-gray-800 leading-relaxed">
            <span className="font-bold text-gray-900">{BRAND_INFO.iso}.</span> Manufacturing in
            Kolkata, India since 1993. Over 30 years of export experience delivering shaft collars,
            couplings and precision machined components worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};
