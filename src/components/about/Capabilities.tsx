import { Activity, Briefcase, Database, Settings, Shield, SlidersVertical } from "lucide-react";
import type React from "react";
import { Button } from "@/components/ui/button";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { CAPABILITIES } from "@/lib/constants";

const CAPABILITY_ICONS = {
  settings: Settings,
  sliders: SlidersVertical,
  toolbox: Briefcase,
  activity: Activity,
  shield: Shield,
  database: Database,
} as const;

export const Capabilities: React.FC = () => {
  return (
    <section className="bg-white py-20 lg:py-[120px]">
      <div className="mx-auto max-w-shell px-4 sm:px-8">
        <SectionEyebrow>Manufacturing Capabilities</SectionEyebrow>
        <h2 className="mt-3 font-medium text-3xl text-brand-dark tracking-tight">
          Precision built into every process.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((capability, index) => {
            const Icon = CAPABILITY_ICONS[capability.icon];
            return (
              <div
                className="border border-brand-line bg-white p-8 transition-colors hover:border-brand-red"
                key={capability.title}
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-[52px] w-[52px] items-center justify-center bg-brand-red/10">
                    <Icon className="h-5 w-5 text-brand-red" />
                  </span>
                  <span className="text-brand-muted text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-7 font-medium text-brand-dark text-lg">{capability.title}</h3>
                <p className="mt-2.5 text-brand-muted text-sm leading-[1.6]">
                  {capability.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-[790px] text-brand-muted text-base leading-[1.65]">
            These capabilities enable us to manufacture components with the accuracy, consistency
            and dimensional control required for demanding industrial applications.
          </p>
          <Button className="self-start" href="/#products" size="cta" variant="primary">
            Download Spec Sheet
          </Button>
        </div>
      </div>
    </section>
  );
};
