import { ArrowLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import type React from "react";

export interface Crumb {
  name: string;
  /* The current level is the one crumb without a link. */
  href?: string;
}

interface CatalogueNavProps {
  crumbs: Crumb[];
  /* Omitted at the top level, where there is nowhere to go back to. */
  back?: { name: string; href: string };
}

/*
 * Breadcrumb plus an explicit back action. Chevrons separate the crumbs rather
 * than slashes, so a level named "Solid / Set Collars" still reads as one step.
 */
export const CatalogueNav: React.FC<CatalogueNavProps> = ({ crumbs, back }) => (
  <div className="border-brand-line border-b bg-white pt-[68px] lg:pt-[92px]">
    <div className="mx-auto max-w-shell px-4 py-4 sm:px-8">
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
          {crumbs.map((crumb, index) => (
            <li className="flex items-center gap-x-2" key={crumb.href ?? crumb.name}>
              {index > 0 && (
                <ChevronRight aria-hidden="true" className="h-3.5 w-3.5 text-brand-line" />
              )}
              {crumb.href ? (
                <Link
                  className="text-brand-muted uppercase tracking-[0.08em] transition-colors hover:text-brand-red"
                  href={crumb.href}
                >
                  {crumb.name}
                </Link>
              ) : (
                <span aria-current="page" className="text-brand-dark uppercase tracking-[0.08em]">
                  {crumb.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {back && (
        <Link
          className="group mt-3 inline-flex items-center gap-2 text-brand-dark text-sm uppercase tracking-[0.08em] transition-colors hover:text-brand-red"
          href={back.href}
        >
          <ArrowLeft
            aria-hidden="true"
            className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1"
          />
          {back.name}
        </Link>
      )}
    </div>
  </div>
);
