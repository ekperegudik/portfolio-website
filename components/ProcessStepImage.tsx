"use client";

import { useState } from "react";
import { ImageWithSkeleton } from "@/components/ui/ImageWithSkeleton";
import { Expand } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";

type ProcessStepImageProps = {
  src: string;
  alt: string;
  aspectRatio?: string;
};

export function ProcessStepImage({
  src,
  alt,
  aspectRatio = "16/8",
}: ProcessStepImageProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block w-full cursor-pointer overflow-hidden bg-muted/20"
        style={{ aspectRatio }}
        aria-label="Открыть изображение этапа на весь экран"
      >
        <ImageWithSkeleton
          src={src}
          alt={alt}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          skeletonClassName="bg-white/10"
        />

        <div className="absolute inset-0 bg-linear-to-t from-background/35 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <span className="absolute right-3 top-3 inline-flex h-7 w-7 items-center justify-center rounded-full border border-border/70 bg-background/70 text-foreground/80 backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-background/85 group-hover:text-foreground">
          <Expand className="h-3.5 w-3.5" />
        </span>
      </button>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src, alt }]}
        plugins={[Zoom]}
        className="gallery-lightbox"
        toolbar={{ buttons: ["close"] }}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
        zoom={{
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 1.5,
          doubleTapDelay: 300,
          doubleClickDelay: 300,
          doubleClickMaxStops: 2,
          keyboardMoveDistance: 50,
          wheelZoomDistanceFactor: 100,
          pinchZoomDistanceFactor: 100,
          scrollToZoom: true,
        }}
      />
    </>
  );
}
