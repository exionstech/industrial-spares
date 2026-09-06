import { Headset, Mail, Phone, Printer } from "lucide-react";
import type React from "react";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { CONTACT_CHANNELS, CONTACT_LOCATIONS } from "@/lib/constants";

const CHANNEL_ICONS = {
  mail: Mail,
  headset: Headset,
  phone: Phone,
  printer: Printer,
} as const;

export const LocationsSection: React.FC = () => {
  return (
    <section className="bg-[#f8f9fa] py-16 lg:py-[90px]">
      <div className="mx-auto max-w-shell px-4 sm:px-8">
        <SectionEyebrow>Our Locations</SectionEyebrow>

        <h2 className="mt-4 font-medium text-3xl text-brand-dark tracking-tight">
          Manufacturing from Kolkata. Serving global markets.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-[76px] lg:grid-cols-3 lg:gap-16">
          {/* Direct contact channels */}
          <ul className="space-y-4">
            {CONTACT_CHANNELS.map((channel) => {
              const Icon = CHANNEL_ICONS[channel.icon];
              return (
                <li className="flex items-center gap-3" key={channel.id}>
                  <span className="flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center border border-brand-line bg-white">
                    <Icon className="h-3.5 w-3.5 text-brand-red" />
                  </span>
                  <span className="text-brand-dark text-sm">{channel.label}:</span>
                  {channel.href ? (
                    <a
                      className="text-[#4a4a4a] text-sm transition-colors hover:text-brand-red"
                      href={channel.href}
                    >
                      {channel.value}
                    </a>
                  ) : (
                    <span className="text-[#4a4a4a] text-sm">{channel.value}</span>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Addresses */}
          {CONTACT_LOCATIONS.map((location) => (
            <div key={location.id}>
              <h3 className="font-medium text-brand-dark text-xl">{location.name}</h3>
              <p className="mt-3 max-w-[300px] text-[#4a4a4a] text-sm leading-[1.7]">
                {location.addressLines.map((line) => (
                  <span className="block" key={line}>
                    {line}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
