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
    <div className="my-6 w-full max-w-4xl mx-auto">
      <ReactCompareSlider
        itemOne={<ReactCompareSliderImage src={beforeSrc} alt="До" />}
        itemTwo={<ReactCompareSliderImage src={afterSrc} alt="После" />}
      />
    </div>
  );
}