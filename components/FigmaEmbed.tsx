"use client";

import { useState } from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

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
    <div className="relative overflow-hidden rounded-xl border border-border/40 bg-card">
      {showOverlay && (
        <div
          className={`absolute inset-0 z-10 transition-opacity duration-700 ${
            fadeOverlay ? "opacity-0" : "opacity-100"
          }`}
        >
          <Image
            src={coverImage || "/placeholder.svg"}
            alt={`${title} cover`}
            fill
            className="object-cover"
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
        className="h-[560px] w-full"
        allowFullScreen
        onLoad={handleLoad}
      />
    </div>
  );
}
