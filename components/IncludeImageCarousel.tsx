"use client";

import { ImageWithSkeleton } from "@/components/ui/ImageWithSkeleton";
import { Expand } from "lucide-react";
import { useEffect, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";

interface IncludeImageCarouselProps {
  images: string[];
  aspectRatio?: string;
  imageClassName?: string;
  lightboxClassName?: string;
}

export function IncludeImageCarousel({
  images,
  aspectRatio = "16/9",
  imageClassName = "object-cover object-top",
  lightboxClassName = "gallery-lightbox",
}: IncludeImageCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrent(api.selectedScrollSnap());

    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  if (!images?.length) return null;

  return (
    <div className="relative my-8">
      <Carousel opts={{ loop: true }} setApi={setApi}>
        <CarouselContent className="gap-4">
          {images.map((src, index) => (
            <CarouselItem key={src}>
              <button
                type="button"
                className="group relative block w-full overflow-hidden rounded-lg"
                style={{ aspectRatio }}
                onClick={() => setOpenIndex(index)}
                aria-label={`Открыть изображение ${index + 1} на весь экран`}
              >
                <ImageWithSkeleton
                  src={src}
                  alt={`Изображение ${index + 1}`}
                  fill
                  className={imageClassName}
                  skeletonClassName="bg-white/10"
                />

                <span className="absolute right-3 top-3 inline-flex h-7 w-7 items-center justify-center rounded-full border border-border/70 bg-background/70 text-foreground/80 backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-background/85 group-hover:text-foreground">
                  <Expand className="h-3.5 w-3.5" />
                </span>
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>

        {images.length > 1 && (
          <>
            <CarouselPrevious className="left-3 z-20 opacity-100" disabled={false} />
            <CarouselNext className="right-3 z-20 opacity-100" disabled={false} />
          </>
        )}
      </Carousel>

      {images.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {images.map((_, index) => {
            const isActive = index === current;

            return (
              <button
                key={index}
                type="button"
                aria-label={`Перейти к слайду ${index + 1}`}
                aria-current={isActive ? "true" : undefined}
                onClick={() => api?.scrollTo(index)}
                className={[
                  "h-2.5 w-2.5 rounded-full transition-all duration-200",
                  isActive
                    ? "bg-primary scale-110"
                    : "bg-muted-foreground/35 hover:bg-muted-foreground/55",
                ].join(" ")}
              />
            );
          })}
        </div>
      )}

      <Lightbox
        open={openIndex !== null}
        close={() => setOpenIndex(null)}
        index={openIndex ?? 0}
        slides={images.map((src, index) => ({
          src,
          alt: `Изображение ${index + 1}`,
        }))}
        plugins={[Zoom]}
        className={lightboxClassName}
        toolbar={{ buttons: ["close"] }}
        zoom={{
          maxZoomPixelRatio: 2.5,
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
    </div>
  );
}
