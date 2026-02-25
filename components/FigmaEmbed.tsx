"use client";

import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { ImageWithSkeleton } from "@/components/ui/ImageWithSkeleton";

interface FigmaEmbedProps {
  src: string;
  title: string;
  coverImage: string;
}

export function FigmaEmbed({ src, title, coverImage }: FigmaEmbedProps) {
  const [showOverlay, setShowOverlay] = useState(true);
  const [fadeOverlay, setFadeOverlay] = useState(false);

  const handleLoad = () => {
    // Figma iframe often fires onLoad before its UI is fully ready.
    // Keep custom overlay a bit longer to hide the default Figma loader flash.
    window.setTimeout(() => {
      setFadeOverlay(true);
      window.setTimeout(() => {
        setShowOverlay(false);
      }, 700);
    }, 3500);
  };

  return (
    <div className="relative overflow-hidden rounded-xl border border-white/0 bg-white/2 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_10px_30px_rgba(0,0,0,0.10)]">
      {showOverlay && (
        <div
          className={`absolute inset-0 z-10 transition-opacity duration-700 ${
            fadeOverlay ? "opacity-0" : "opacity-100"
          }`}
        >
          <ImageWithSkeleton
            src={coverImage || "/placeholder.svg"}
            alt={`${title} cover`}
            fill
            className="object-cover"
            skeletonClassName="bg-background/50"
            priority
          />
          <div className="absolute inset-0 bg-background/60 p-5">
            <Skeleton className="h-full w-full rounded-lg bg-background/50" />
          </div>
        </div>
      )}

      <iframe
        title={`${title} Figma`}
        src={src}
        className="h-140 w-full"
        allowFullScreen
        onLoad={handleLoad}
      />
    </div>
  );
}
