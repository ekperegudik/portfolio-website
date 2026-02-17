"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

type ProcessStepVideoProps = {
  src: string;
  aspectRatio?: string;
  playbackRate?: number;
  frameVariant?: "wheel";
};

export function ProcessStepVideo({
  src,
  aspectRatio = "16/8",
  playbackRate = 1.5,
  frameVariant,
}: ProcessStepVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const applyRate = () => {
      video.defaultPlaybackRate = playbackRate;
      video.playbackRate = playbackRate;
    };

    applyRate();
    video.addEventListener("loadedmetadata", applyRate);

    return () => {
      video.removeEventListener("loadedmetadata", applyRate);
    };
  }, [playbackRate]);

  if (frameVariant === "wheel") {
    return (
      <div className="relative w-full overflow-hidden bg-black" style={{ aspectRatio: "1690 / 780" }}>
        <Image
          src="/projects/wheel.svg"
          alt="Руль автомобиля"
          fill
          className="object-contain"
          priority={false}
        />

        <div className="absolute left-[28.4%] top-[23.3%] h-[44.4%] w-[36.8%] overflow-hidden rounded-xl bg-black shadow-[0_8px_24px_rgba(0,0,0,0.45)]">
          <video
            ref={videoRef}
            src={src}
            className="h-full w-full object-contain"
            autoPlay={true} 
            muted
            loop
            playsInline
            controls={false}
            controlsList="nodownload noplaybackrate noremoteplayback"
            disablePictureInPicture
            disableRemotePlayback
            onContextMenu={(event) => event.preventDefault()}
            preload="metadata"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-white/8" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden bg-black" style={{ aspectRatio }}>
      <video
        ref={videoRef}
        src={src}
        className="h-full w-full object-contain"
        autoPlay
        muted
        loop
        playsInline
        controls
        controlsList="nodownload noplaybackrate noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        onContextMenu={(event) => event.preventDefault()}
        preload="metadata"
      />

      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
    </div>
  );
}
