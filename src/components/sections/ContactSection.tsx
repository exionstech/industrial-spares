import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { Reveal } from "@/components/ui/reveal";
import { CONTACT_ROUTE, IMAGES } from "@/lib/constants";

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-[68px] lg:scroll-mt-[92px] grid w-full grid-cols-1 lg:grid-cols-2"
    >
      {/*
       * The red panel bleeds to the left edge of the screen while its copy is
       * held in a half-page column pinned to the inside edge, so the text still
       * lands on the same margin as every other section.
       */}
      <div className="bg-brand-red-dark text-white">
        <Reveal className="ml-auto flex h-full w-full flex-col justify-between px-4 py-16 sm:px-8 lg:min-h-[70vh] lg:max-w-[720px] lg:py-[82px] lg:pr-16 lg:pl-[120px]">
          <div>
            <span className="block text-base text-white">Contact us</span>
            <h2 className="mt-4 max-w-[420px] font-medium text-4xl leading-[1.1] tracking-tight sm:text-5xl">
              Let&apos;s discuss your requirement.
            </h2>
          </div>

          <div className="mt-16 lg:mt-0">
            <p className="max-w-[430px] text-base text-white leading-[1.3] sm:text-2xl">
              Contact us for enquiries about our mechanical power transmission products and CNC
              machined components.
            </p>

            <Link
              href={CONTACT_ROUTE}
              className="group mt-11 flex w-[206px] items-center justify-between border-white/90 border-b pb-2 text-left text-lg text-white"
            >
              <span>Let&apos;s get in touch</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>

      {/* Photo panel */}
      <div className="relative min-h-[360px] bg-brand-dark lg:min-h-[70vh]">
        <Image
          src={IMAGES.contactWelder}
          alt="Welder finishing a fabricated assembly"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center"
          unoptimized
        />
      </div>
    </section>
  );
};
