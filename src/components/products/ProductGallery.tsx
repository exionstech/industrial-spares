"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import type React from "react";
import { useState } from "react";
import type { ProductMedia } from "@/lib/constants";

interface ProductGalleryProps {
  media: ProductMedia[];
  productName: string;
}

/*
 * Handles whatever a product happens to have: a single still, several stills,
 * video, or a mix. The thumbnail rail only appears when there is more than one
 * item, so a one-image product still looks deliberate.
 */
export const ProductGallery: React.FC<ProductGalleryProps> = ({ media, productName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = media[activeIndex] ?? media[0];
  const hasRail = media.length > 1;

  return (
    <div className={hasRail ? "flex flex-col-reverse gap-4 sm:flex-row" : ""}>
      {hasRail && (
        <div className="flex flex-row gap-3 overflow-x-auto sm:w-[88px] sm:flex-shrink-0 sm:flex-col sm:overflow-visible">
          {media.map((item, index) => {
            const isActive = index === activeIndex;
            const thumbSrc = item.type === "video" ? item.poster : item.src;
            return (
              <button
                aria-current={isActive}
                aria-label={`${productName} - ${item.type} ${index + 1}`}
                className={`relative aspect-square w-[72px] flex-shrink-0 overflow-hidden border bg-[#fafafa] transition-colors sm:w-full ${
                  isActive ? "border-brand-red" : "border-brand-line hover:border-brand-muted"
                }`}
                key={item.src}
                onClick={() => setActiveIndex(index)}
                type="button"
              >
                {thumbSrc ? (
                  <Image
                    alt=""
                    className="object-contain p-2"
                    fill
                    sizes="88px"
                    src={thumbSrc}
                    unoptimized
                  />
                ) : (
                  <span className="absolute inset-0 bg-brand-dark" />
                )}

                {item.type === "video" && (
                  <span className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-brand-red">
                    <Play className="h-3 w-3 translate-x-[1px] fill-white text-white" />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}

      <div className="relative aspect-square w-full min-w-0 flex-1 border border-brand-line bg-[#fafafa]">
        {active.type === "video" ? (
          // biome-ignore lint/a11y/useMediaCaption: product footage has no caption track
          <video
            className="h-full w-full bg-black object-contain"
            controls
            key={active.src}
            playsInline
            poster={active.poster}
            src={active.src}
          />
        ) : (
          <Image
            alt={productName}
            className="object-contain p-12"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            src={active.src}
            unoptimized
          />
        )}
      </div>
    </div>
  );
};
