import { CircleCheck } from "lucide-react";
import Image from "next/image";
import type React from "react";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

export const QualityInspection: React.FC = () => {
  return (
    <section
      className="scroll-mt-[68px] lg:scroll-mt-[92px] border-brand-line border-y bg-brand-bg-light py-20 lg:py-[120px]"
      id="quality"
    >
      <div className="mx-auto grid max-w-shell grid-cols-1 gap-12 px-4 sm:px-8 lg:grid-cols-[460px_1fr] lg:gap-20">
        <div className="relative order-2 hidden aspect-[460/658] w-full max-w-[460px] overflow-hidden bg-white shadow-sm lg:order-1 lg:block">
          <Image
            alt="ISO 9001 certificate of registration for Industrial Spares Manufacturing Co."
            className="object-contain"
            fill
            sizes="(max-width: 1024px) 100vw, 460px"
            src="/assets/about/iso-certificate.jpg"
            unoptimized
          />
        </div>

        <div className="order-1 lg:order-2 lg:pt-[110px]">
          <SectionEyebrow>Quality &amp; Inspection</SectionEyebrow>
          <h2 className="mt-3 font-medium text-3xl text-brand-dark tracking-tight">
            Quality is part of the process.
          </h2>

          <div className="relative mt-8 aspect-[460/658] w-full overflow-hidden bg-white shadow-sm lg:hidden">
            <Image
              alt="ISO 9001 certificate of registration for Industrial Spares Manufacturing Co."
              className="object-contain"
              fill
              sizes="100vw"
              src="/assets/about/iso-certificate.jpg"
              unoptimized
            />
          </div>

          <p className="mt-8 text-brand-dark text-lg leading-[1.55]">
            Quality has been an integral part of our manufacturing philosophy from the beginning.
            Our dedicated inspection and quality-control processes ensure that components are
            manufactured and checked against the required specifications and customer requirements.
          </p>

          <p className="mt-6 text-base text-brand-muted leading-[1.65]">
            We operate under an ISO 9001 quality management system, with an emphasis on continual
            improvement, process control and customer satisfaction.
          </p>

          <div className="mt-10 flex items-center gap-3">
            <CircleCheck className="h-6 w-6 flex-shrink-0 fill-brand-red text-white" />
            <span className="text-brand-dark text-sm">
              ISO 9001:2015 Certified Management System
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
