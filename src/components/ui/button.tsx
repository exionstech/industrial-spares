import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-3 whitespace-nowrap text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-brand-red text-white hover:bg-red-700 shadow-sm hover:shadow-md",
        primary: "bg-brand-red text-white hover:bg-red-700 shadow-sm hover:shadow-md",
        secondary: "bg-[#FDFBFA] text-gray-900 hover:bg-gray-100 border border-gray-200 shadow-sm",
        dark: "bg-brand-dark text-white hover:bg-black",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-5 py-3.5",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "px-8 py-4 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  showArrow?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, showArrow = true, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        <span>{children}</span>
        {showArrow && (
          <ArrowRight
            className={cn("w-4 h-4 transition-transform group-hover:translate-x-1", {
              "text-brand-orange":
                variant === "primary" || variant === "default" || variant === "secondary",
              "text-white": variant === "dark",
            })}
          />
        )}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
