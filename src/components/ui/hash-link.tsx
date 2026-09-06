"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";

interface HashLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  onNavigate?: () => void;
  "aria-current"?: "page";
}

/*
 * Next's Link updates the hash but does not scroll when the target is a
 * fragment on the route you are already viewing, so anchors like
 * /about#quality silently do nothing from /about. This handles that case
 * itself; every other navigation falls through to Link as normal.
 */
export const HashLink: React.FC<HashLinkProps> = ({
  href,
  className,
  children,
  onNavigate,
  "aria-current": ariaCurrent,
}) => {
  const pathname = usePathname();
  const [path, hash] = href.split("#");

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    onNavigate?.();

    if (!hash || (path || "/") !== pathname) {
      return;
    }

    const target = document.getElementById(hash);
    if (!target) {
      return;
    }

    event.preventDefault();
    /* scrollIntoView honours the section's scroll-margin-top. */
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${hash}`);
  };

  return (
    <Link aria-current={ariaCurrent} className={className} href={href} onClick={handleClick}>
      {children}
    </Link>
  );
};
