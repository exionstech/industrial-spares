import type React from "react";
import { Suspense } from "react";
import { RfqForm } from "@/components/contact/RfqForm";
import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { CONTACT_BENEFITS } from "@/lib/constants";
import { COUNTRY_NAMES } from "@/lib/countries";

export const RfqSection: React.FC = () => {
  return (
    <section className="bg-white py-16 lg:py-[100px]">
      <div className="mx-auto grid max-w-shell grid-cols-1 gap-12 px-4 sm:px-8 lg:grid-cols-[1fr_745px] lg:gap-[78px]">
        {/* Intro */}
        <Reveal>
          <SectionEyebrow>RFQ &amp; Procurement</SectionEyebrow>

          <h2 className="mt-4 max-w-[380px] font-medium text-3xl text-brand-dark leading-[1.2] tracking-tight">
            Tell us about your requirement.
          </h2>

          <p className="mt-7 max-w-[420px] text-[#4a4a4a] text-sm leading-[1.7]">
            Send us your requirements and our team will get back to you with the relevant
            information, pricing or technical guidance.
          </p>

          <div className="mt-9 max-w-[422px] border border-brand-line bg-[#f8f9fa] p-6">
            <h3 className="text-brand-red text-sm uppercase tracking-[0.08em]">
              Why Partner With Us?
            </h3>
            <ul className="mt-4 space-y-3.5">
              {CONTACT_BENEFITS.map((benefit) => (
                <li className="flex items-start gap-2.5" key={benefit}>
                  <span aria-hidden="true" className="text-brand-dark text-sm leading-[1.4]">
                    ✓
                  </span>
                  <span className="text-brand-dark text-sm leading-[1.4]">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* useSearchParams needs a Suspense boundary to keep the page static */}
        <Suspense
          fallback={<div className="min-h-[995px] border border-brand-line bg-[#f8f9fa]" />}
        >
          <RfqForm countries={COUNTRY_NAMES} />
        </Suspense>
      </div>
    </section>
  );
};
