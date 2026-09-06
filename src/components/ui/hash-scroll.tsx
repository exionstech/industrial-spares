"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/*
 * Lands a cross-route anchor like /about#quality on the right section. The
 * browser's own hash restore fires before images settle, so a section far down
 * the page often ends up short of its mark; this re-runs once layout is up.
 */
export const HashScroll = () => {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) {
      return;
    }

    const scroll = () => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    /* Two frames, then a beat for late-loading media. */
    const raf = requestAnimationFrame(() => requestAnimationFrame(scroll));
    const timer = setTimeout(scroll, 350);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [pathname]);

  return null;
};
