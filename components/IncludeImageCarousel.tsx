"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"; // путь к твоему компоненту

interface IncludeImageCarouselProps {
  images: string[]; // массив путей к изображениям
  aspectRatio: '16/9';
}

export function IncludeImageCarousel({
  images,
  aspectRatio = "16/9",
}: IncludeImageCarouselProps) {
  return (
    <div className="relative my-8">
      <Carousel opts={{ loop: true }}>
        <CarouselPrevious />
        <CarouselContent className="gap-4">
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div className={`relative w-full aspect-[${aspectRatio}] overflow-hidden rounded-lg`}>
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
