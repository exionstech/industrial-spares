import Image from "next/image";
import type React from "react";
import { Button } from "@/components/ui/button";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { CONTACT_ROUTE } from "@/lib/constants";

export const Experience: React.FC = () => {
  return (
    <section className="bg-white py-20 lg:py-[120px]">
      <div className="mx-auto grid max-w-shell grid-cols-1 gap-12 px-4 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="order-1 lg:col-start-1 lg:row-start-1">
          <SectionEyebrow>Our Experience</SectionEyebrow>
          <h2 className="mt-3 max-w-[520px] font-medium text-3xl text-brand-dark leading-[1.25] tracking-tight">
            Three decades of engineering and international trade.
          </h2>
        </div>

        <div className="relative order-2 min-h-[320px] overflow-hidden bg-brand-dark lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:min-h-[560px]">
          <Image
            alt="Heavy engineering lathe cutting a component on the shop floor"
            className="object-cover object-center"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            src="/assets/about/heavy-engineering.jpg"
            unoptimized
          />
        </div>

        <div className="order-3 space-y-6 text-base text-brand-dark leading-[1.65] lg:col-start-1 lg:row-start-2">
          <p>
            With more than three decades of experience in mechanical engineering, manufacturing and
            international trade, Industrial Spares understands the requirements of overseas
            customers and the importance of quality, consistency, responsiveness and dependable
            delivery.
          </p>
          <p>
            Our experience in international markets, combined with our manufacturing capabilities in
            Kolkata, allows us to offer customers a reliable source for precision-engineered
            mechanical components.
          </p>
        </div>

        <div className="order-4 lg:col-start-1 lg:row-start-3">
          <Button href={CONTACT_ROUTE} size="cta" variant="primary">
            Request Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};
