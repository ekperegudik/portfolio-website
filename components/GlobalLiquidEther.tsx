"use client";

import LiquidEther from "@/components/LiquidEther";

export function GlobalLiquidEther() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <LiquidEther
        colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
        mouseForce={10}
        cursorSize={100}
        isViscous = {false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo
        autoSpeed={0.4}
        autoIntensity={1.8}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
        color0="#7520bc"
        color1="#404a96"
        color2="#3e63ac"
      />
    </div>
  );
}
