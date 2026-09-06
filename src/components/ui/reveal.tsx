"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /* Stagger sibling reveals, in milliseconds. */
  delay?: number;
  as?: "div" | "section" | "li";
}

/*
 * Fades and lifts content into place the first time it enters the viewport.
 * Anyone who has asked for reduced motion just gets the content, immediately.
 */
export const Reveal: React.FC<RevealProps> = ({ children, className, delay = 0, as = "div" }) => {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    /* Already in view on load (above the fold) - show without waiting. */
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as as React.ElementType;

  return (
    <Tag
      className={cn(
        "motion-safe:transition-[opacity,transform] motion-safe:duration-700 motion-safe:ease-out",
        shown ? "translate-y-0 opacity-100" : "motion-safe:translate-y-6 motion-safe:opacity-0",
        className,
      )}
      ref={ref}
      style={shown && delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
};
