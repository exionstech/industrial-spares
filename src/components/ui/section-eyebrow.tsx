import type React from "react";
import { cn } from "@/lib/utils";

interface SectionEyebrowProps {
  children: React.ReactNode;
  /* "muted" is the grey variant used for secondary headers. */
  tone?: "red" | "muted";
  className?: string;
}

/*
 * The short rule + small-caps label that opens a section. Shared so every
 * section across the site leads with the same dash, rather than a mix of
 * dashes, dots and bare labels.
 */
export const SectionEyebrow: React.FC<SectionEyebrowProps> = ({
  children,
  tone = "red",
  className,
}) => (
  <div className={cn("flex items-center gap-0 lg:gap-3", className)}>
    <span
      className={cn(
        "h-px w-0 flex-shrink-0 lg:w-5",
        tone === "red" ? "bg-brand-red" : "bg-brand-muted",
      )}
    />
    <span
      className={cn(
        "relative z-10 block whitespace-nowrap text-sm uppercase tracking-[0.14em]",
        tone === "red" ? "text-brand-red" : "text-brand-muted",
      )}
    >
      {children}
    </span>
  </div>
);
