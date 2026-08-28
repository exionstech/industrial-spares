import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "px-2.5 py-1 font-normal text-white bg-black/70 backdrop-blur-sm tracking-wide",
        dark: "px-2.5 py-1 font-normal text-white bg-black/70 backdrop-blur-sm tracking-wide",
        pill: "px-3.5 py-1.5 font-medium border bg-white text-gray-700 border-gray-300 hover:border-brand-red hover:text-brand-red cursor-pointer",
        pillActive:
          "px-3.5 py-1.5 font-medium border bg-brand-red text-white border-brand-red shadow-sm cursor-pointer",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground border border-gray-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  active?: boolean;
  onClick?: () => void;
}

function Badge({
  className,
  variant = "default",
  active = false,
  onClick,
  children,
  ...props
}: BadgeProps) {
  const computedVariant = variant === "pill" && active ? "pillActive" : variant;

  if (variant === "pill") {
    return (
      <button
        type="button"
        onClick={onClick}
        className={cn(badgeVariants({ variant: computedVariant, className }))}
      >
        {children}
      </button>
    );
  }

  return (
    <div className={cn(badgeVariants({ variant: computedVariant, className }))} {...props}>
      {children}
    </div>
  );
}

export { Badge, badgeVariants };
