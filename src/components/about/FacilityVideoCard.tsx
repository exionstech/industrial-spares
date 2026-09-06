"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Play, X } from "lucide-react";
import Image from "next/image";
import type React from "react";
import { useState } from "react";

interface FacilityVideoCardProps {
  image: string;
  videoUrl: string;
  title: string;
  description: string;
}

export const FacilityVideoCard: React.FC<FacilityVideoCardProps> = ({
  image,
  videoUrl,
  title,
  description,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <figure>
      <DialogPrimitive.Root onOpenChange={setIsOpen} open={isOpen}>
        <DialogPrimitive.Trigger asChild>
          <button
            aria-label={`Play ${title}`}
            className="group relative block aspect-[596/340] w-full overflow-hidden bg-brand-dark"
            type="button"
          >
            <Image
              alt={title}
              className="object-cover object-center"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              src={image}
              unoptimized
            />
            <span className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-brand-red shadow-lg transition-transform duration-200 group-hover:scale-110">
              <Play className="h-5 w-5 translate-x-[1px] fill-white text-white" />
            </span>
          </button>
        </DialogPrimitive.Trigger>

        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80" />
          <DialogPrimitive.Content className="-translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 z-50 w-[calc(100vw-2rem)] max-w-3xl focus:outline-none">
            <DialogPrimitive.Title className="sr-only">{title}</DialogPrimitive.Title>
            <DialogPrimitive.Description className="sr-only">
              {description}
            </DialogPrimitive.Description>

            <DialogPrimitive.Close
              aria-label="Close video"
              className="-top-11 absolute right-0 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </DialogPrimitive.Close>

            {/* Mounted only while open, so closing stops playback */}
            {isOpen && (
              // biome-ignore lint/a11y/useMediaCaption: placeholder stock footage has no caption track yet
              <video
                autoPlay
                className="aspect-video w-full bg-black"
                controls
                playsInline
                src={videoUrl}
              />
            )}
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>

      <figcaption className="mt-5">
        <h3 className="font-medium text-brand-dark text-lg">{title}</h3>
        <p className="mt-2 text-brand-muted text-sm leading-[1.6]">{description}</p>
      </figcaption>
    </figure>
  );
};
