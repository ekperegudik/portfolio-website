"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

interface IncludeImageCarouselProps {
  images: string[];
  aspectRatio?: string;
}

export function IncludeImageCarousel({
  images,
  aspectRatio = "16/9",
}: IncludeImageCarouselProps) {
  if (!images?.length) return null;

  return (
    <div className="relative my-8">
      <Carousel opts={{ loop: true }}>
        <CarouselPrevious />
        <CarouselContent className="gap-4">
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div
                className="relative w-full overflow-hidden rounded-lg"
                style={{ aspectRatio }}
              >
                <Image
                  src={src}
                  alt={`Изображение ${index + 1}`}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </div>
  );
}
