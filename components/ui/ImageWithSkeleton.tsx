"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

type ImageWithSkeletonProps = ImageProps & {
  skeletonClassName?: string;
};

export function ImageWithSkeleton({
  skeletonClassName,
  onLoad,
  ...props
}: ImageWithSkeletonProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Image
        {...props}
        onLoad={(event) => {
          setIsLoaded(true);
          onLoad?.(event);
        }}
      />

      {!isLoaded && (
        <Skeleton
          aria-hidden
          className={cn(
            "absolute inset-0 rounded-none bg-white/8",
            skeletonClassName,
          )}
        />
      )}
    </>
  );
}
