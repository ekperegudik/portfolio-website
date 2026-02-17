"use client";

import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
}: {
  beforeSrc: string;
  afterSrc: string;
}) {
  return (
    <div className="w-full">
      <ReactCompareSlider
        itemOne={<ReactCompareSliderImage src={beforeSrc} alt="До" />}
        itemTwo={<ReactCompareSliderImage src={afterSrc} alt="После" />}
      />
    </div>
  );
}