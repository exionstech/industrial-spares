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
}

/*
 * On narrow screens the full trail has nowhere to go but onto a second line
 * or off the edge of the screen, and a separate "back to X" line beneath it
 * only repeats what the trail already said - together that's what made this
 * bar feel congested. So mobile gets just a compact back link (the page
 * title right below already states where you are); the full breadcrumb
 * trail, with the same back arrow folded in, only appears from `sm` up
 * where it fits on one line.
 */
export const CatalogueNav: React.FC<CatalogueNavProps> = ({ crumbs }) => {
  const previous = crumbs.length > 1 ? crumbs[crumbs.length - 2] : undefined;
  const current = crumbs.at(-1);

  return (
    <div className="border-brand-line border-b bg-white pt-[68px] lg:pt-[92px]">
      <div className="mx-auto max-w-shell px-4 py-3.5 sm:px-8">
        <nav aria-label="Breadcrumb">
          {previous?.href ? (
            <Link
              className="group flex items-center gap-2 text-brand-dark uppercase tracking-[0.08em] transition-colors hover:text-brand-red sm:hidden"
              href={previous.href}
            >
              <ArrowLeft
                aria-hidden="true"
                className="h-4 w-4 flex-shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5"
              />
              {previous.name}
            </Link>
          ) : (
            current && (
              <span className="text-brand-dark uppercase tracking-[0.08em] sm:hidden">
                {current.name}
              </span>
            )
          )}

          <ol className="hidden items-center gap-2 overflow-x-auto whitespace-nowrap text-sm sm:flex [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {previous?.href && (
              <li className="flex flex-shrink-0 items-center">
                <Link
                  aria-label={`Back to ${previous.name}`}
                  className="group mr-1.5 flex items-center text-brand-dark transition-colors hover:text-brand-red"
                  href={previous.href}
                >
                  <ArrowLeft
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5"
                  />
                </Link>
              </li>
            )}
            {crumbs.map((crumb, index) => (
              <li className="flex flex-shrink-0 items-center gap-2" key={crumb.href ?? crumb.name}>
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
      </div>
    </div>
  );
};
