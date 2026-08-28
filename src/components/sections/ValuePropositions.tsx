import type React from "react";
import { VALUE_PROPOSITIONS } from "@/lib/constants";

export const ValuePropositions: React.FC = () => {
  return (
    <section id="quality" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            What we deliver
          </h2>
          <p className="text-base text-gray-600 font-medium">Our commitment to every order</p>
        </div>

        {/* 2x2 Dark Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {VALUE_PROPOSITIONS.map((vp) => (
            <div
              key={vp.title}
              className="bg-brand-card-dark text-white p-8 sm:p-10 rounded-lg shadow-lg border border-gray-800 space-y-4 hover:border-brand-red/50 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Red Accent Bar */}
              <div className="w-10 h-1 bg-brand-red rounded-full transition-all group-hover:w-16 duration-300" />
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                {vp.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{vp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
