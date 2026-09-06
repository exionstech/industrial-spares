import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-3 whitespace-nowrap font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-brand-red text-white hover:bg-brand-red-dark",
        primary: "bg-brand-red text-white hover:bg-brand-red-dark",
        secondary: "bg-white text-brand-dark hover:bg-brand-bg-light border border-brand-line",
        dark: "bg-brand-dark text-white hover:bg-black",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-brand-red text-brand-red hover:bg-brand-red hover:text-white",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        /* Navbar CTA - 185x54, title case */
        nav: "h-[54px] px-5 text-sm",
        /* Section CTA - 44px tall, uppercase & tracked */
        cta: "h-11 px-6 text-sm uppercase tracking-[0.08em]",
        /* Footer CTA - 32px tall, uppercase & tracked */
        compact: "h-8 px-4 text-sm uppercase tracking-[0.08em]",
        default: "px-5 py-3.5 text-sm",
        sm: "h-9 px-3 text-xs",
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
  /* Renders the button as a link. Buttons that navigate should be anchors. */
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, showArrow = true, href, children, ...props },
    ref,
  ) => {
    const classes = cn("group", buttonVariants({ variant, size, className }));
    const content = (
      <>
        <span>{children}</span>
        {showArrow && (
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        )}
      </>
    );

    if (href) {
      return (
        <Link className={classes} href={href}>
          {content}
        </Link>
      );
    }

    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={classes} ref={ref} {...props}>
        {content}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
