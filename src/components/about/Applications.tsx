import {
  Bot,
  Box,
  Cog,
  Container,
  Cpu,
  Droplets,
  FileCode2,
  Forklift,
  Link2,
  Milk,
  MoveHorizontal,
  Printer,
  Shirt,
  Tractor,
  Utensils,
  Wrench,
} from "lucide-react";
import type React from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { APPLICATIONS, CONTACT_ROUTE } from "@/lib/constants";

const APPLICATION_ICONS = {
  conveyor: Container,
  package: Box,
  food: Utensils,
  forklift: Forklift,
  tractor: Tractor,
  cpu: Cpu,
  robot: Bot,
  wrench: Wrench,
  linear: MoveHorizontal,
  cog: Cog,
  chain: Link2,
  droplets: Droplets,
  textile: Shirt,
  printer: Printer,
  bottle: Milk,
  custom: FileCode2,
} as const;

export const Applications: React.FC = () => {
  return (
    <section className="bg-white pb-20 lg:pb-[120px]">
      <div className="mx-auto max-w-shell px-4 sm:px-8">
        <Reveal className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_580px] lg:gap-20">
          <div>
            <SectionEyebrow>Applications</SectionEyebrow>
            <h2 className="mt-3 max-w-[420px] font-medium text-3xl text-brand-dark leading-[1.25] tracking-tight">
              One component. Countless applications.
            </h2>
          </div>
          <p className="text-brand-dark text-base leading-[1.65] lg:pt-2">
            Shaft collars are simple, versatile mechanical components used wherever a shaft needs
            positioning, spacing, stopping, alignment, support or secure attachment of other
            components.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {APPLICATIONS.map((application) => {
            const Icon = APPLICATION_ICONS[application.icon];
            return (
              <div
                className="border border-brand-line bg-white p-6 transition-colors hover:border-brand-red"
                key={application.title}
              >
                <span className="flex h-11 w-11 items-center justify-center bg-brand-red/10">
                  <Icon className="h-[18px] w-[18px] text-brand-red" />
                </span>
                <h3 className="mt-6 text-base text-brand-dark">{application.title}</h3>
                <p className="mt-1.5 text-brand-muted text-sm leading-[1.55]">
                  {application.description}
                </p>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-brand-red text-sm tracking-[0.06em]">
          &amp; many more...
        </p>

        <div className="mt-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-[790px] text-brand-muted text-base leading-[1.65]">
            Industrial Spares manufactures shaft collars to suit standard and customised
            requirements, with options for different materials, dimensions, configurations and
            applications.
          </p>
          <Button
            className="w-fit max-w-full self-start px-4 text-xs sm:px-6 sm:text-sm"
            href={CONTACT_ROUTE}
            size="cta"
            variant="primary"
          >
            Discuss Your Requirement
          </Button>
        </div>
      </div>
    </section>
  );
};
