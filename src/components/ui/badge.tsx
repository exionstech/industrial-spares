import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@/lib/utils";

const badgeVariants = cva("inline-flex items-center whitespace-nowrap", {
  variants: {
    variant: {
      /* Tag chip floated over a product photo - black fill, hairline white keyline */
      default:
        "h-[27px] px-3 border border-white bg-brand-dark text-white text-xs uppercase tracking-[0.08em]",
      dark: "h-[27px] px-3 border border-white bg-brand-dark text-white text-xs uppercase tracking-[0.08em]",
      /* Outlined spec chip used by the materials strip */
      outline: "h-8 px-3.5 border border-brand-line bg-white text-brand-muted text-sm",
      secondary: "px-2.5 py-1 bg-secondary text-secondary-foreground text-xs",
      destructive: "px-2.5 py-1 bg-destructive text-destructive-foreground text-xs",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, children, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, className }))} {...props}>
      {children}
    </div>
  );
}

export { Badge, badgeVariants };
