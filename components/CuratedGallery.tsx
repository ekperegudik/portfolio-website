"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { ImageWithSkeleton } from "@/components/ui/ImageWithSkeleton";
import type { Locale } from "@/lib/i18n";

import "yet-another-react-lightbox/styles.css";

type SourceItem = {
  src: string;
  product: string;
  orientation: "portrait" | "landscape";
  alt: { ru: string; en: string };
  objectPosition?: string;
};

type GalleryItem = {
  src: string;
  product: string;
  alt: { ru: string; en: string };
  orientation: "portrait" | "landscape";
  objectPosition?: string;
};

const allItems: SourceItem[] = [
  { src: "/gallery/all-gallery/anatomy-1.png", product: "KRU", orientation: "landscape", alt: { ru: "Элемент UI спецификации", en: "UI specification element" }, objectPosition: "center top" },
  { src: "/gallery/all-gallery/anatomy-2.png", product: "KRU", orientation: "landscape", alt: { ru: "Элемент UI спецификации", en: "UI specification element" }, objectPosition: "center top" },
  { src: "/gallery/all-gallery/anatomy-3.png", product: "KRU", orientation: "portrait", alt: { ru: "Элемент UI спецификации", en: "UI specification element" }, objectPosition: "center top" },
  { src: "/gallery/all-gallery/buttons.png", product: "KRU", orientation: "landscape", alt: { ru: "Библиотека контролов и их состояний", en: "Сontrol library and states" }, objectPosition: "center" },
  { src: "/gallery/all-gallery/details.png", product: "KRU", orientation: "landscape", alt: { ru: "Элементы UI спецификации", en: "UI specification elements" }, objectPosition: "center top" },

  { src: "/gallery/all-gallery/file_1.png", product: "Atom Market", orientation: "portrait", alt: { ru: "low-fi wires atom mobile app", en: "low-fi wires atom mobile app" }, objectPosition: "center top" },
  { src: "/gallery/all-gallery/file_3.png", product: "Atom Market", orientation: "portrait", alt: { ru: "low-fi wires atom mobile app", en: "low-fi wires atom mobile app" }, objectPosition: "center top" },
  { src: "/gallery/all-gallery/file_4.png", product: "Atom Market", orientation: "portrait", alt: { ru: "low-fi wires atom mobile app", en: "low-fi wires atom mobile app" }, objectPosition: "center top" },
  { src: "/gallery/all-gallery/file_5.png", product: "Atom Market", orientation: "portrait", alt: { ru: "low-fi wires atom mobile app", en: "low-fi wires atom mobile app" }, objectPosition: "center top" },
  { src: "/gallery/all-gallery/file_6.png", product: "Atom Market", orientation: "portrait", alt: { ru: "low-fi wires atom mobile app", en: "low-fi wires atom mobile app" }, objectPosition: "center top" },

  { src: "/gallery/all-gallery/file_2.png", product: "Pixorion", orientation: "landscape", alt: { ru: "Анализ карточки товара", en: "product card analysis" }, objectPosition: "center" },
  { src: "/gallery/all-gallery/file_10.png", product: "Pixorion", orientation: "landscape", alt: { ru: "Каталог товаров", en: "product catalog" }, objectPosition: "center top" },
  { src: "/gallery/all-gallery/file_14.png", product: "Pixorion", orientation: "landscape", alt: { ru: "Генерация изображений", en: "image generation" }, objectPosition: "center" },
  { src: "/gallery/all-gallery/file_16.png", product: "Pixorion", orientation: "landscape", alt: { ru: "Сценарий публикации карточки", en: "product card publishing flow" }, objectPosition: "center" },

  { src: "/gallery/all-gallery/file_11.png", product: "Nedra", orientation: "landscape", alt: { ru: "Мониторинг ML-сервисов", en: "ML services monitoring" }, objectPosition: "center top" },
  { src: "/gallery/all-gallery/work-7.jpg", product: "Nedra", orientation: "landscape", alt: { ru: "FantoMask: welcome-экран сервиса", en: "FantoMask: service welcome screen" }, objectPosition: "center" },

  { src: "/gallery/all-gallery/file_12.png", product: "Novitravel", orientation: "portrait", alt: { ru: "Novitravel: страница мероприятия", en: "Novitravel: event page" }, objectPosition: "center top" },
  { src: "/gallery/all-gallery/file_13.png", product: "Novitravel", orientation: "portrait", alt: { ru: "Novitravel: страница туристической услуги", en: "Novitravel: tourist service page" }, objectPosition: "center top" },

  { src: "/gallery/all-gallery/file_17.png", product: "UX Framework", orientation: "landscape", alt: { ru: "UX Framework: навигационная модель", en: "UX Framework: navigation model" }, objectPosition: "center top" },

  { src: "/gallery/all-gallery/file_18.jpg", product: "Gazpromneft", orientation: "landscape", alt: { ru: "Газпромнефть: стратегическая карта", en: "Gazprom Neft: strategic map" }, objectPosition: "center" },
  { src: "/gallery/all-gallery/work-1.jpg", product: "Gazpromneft", orientation: "landscape", alt: { ru: "Газпромнефть: дашборд руководителя", en: "Gazprom Neft: executive dashboard" }, objectPosition: "center top" },

  { src: "/gallery/all-gallery/work-3.jpg", product: "Paclet", orientation: "landscape", alt: { ru: "Paclet: страница энергетического проекта", en: "Paclet: energy project page" }, objectPosition: "center top" },

  { src: "/gallery/all-gallery/file_8.png", product: "KRU", orientation: "landscape", alt: { ru: "Дашборд мониторинга", en: "Monitoring dashboard" }, objectPosition: "center top" },
];

const bySrc = new Map(allItems.map((item) => [item.src, item] as const));

const orderedSources = [
  "/gallery/all-gallery/file_8.png",
  "/gallery/all-gallery/file_12.png",
  "/gallery/all-gallery/file_2.png",
  "/gallery/all-gallery/file_18.jpg",
  "/gallery/all-gallery/file_1.png",
  "/gallery/all-gallery/file_11.png",
  "/gallery/all-gallery/work-3.jpg",
  "/gallery/all-gallery/file_10.png",
  "/gallery/all-gallery/anatomy-3.png",
  "/gallery/all-gallery/file_13.png",
  "/gallery/all-gallery/work-1.jpg",
  "/gallery/all-gallery/file_17.png",
  "/gallery/all-gallery/file_14.png",
  "/gallery/all-gallery/file_3.png",
  "/gallery/all-gallery/work-7.jpg",
  "/gallery/all-gallery/buttons.png",
  "/gallery/all-gallery/file_4.png",
  "/gallery/all-gallery/file_5.png",
  "/gallery/all-gallery/file_16.png",
  "/gallery/all-gallery/anatomy-1.png",
  "/gallery/all-gallery/file_6.png",
  "/gallery/all-gallery/details.png",
  "/gallery/all-gallery/anatomy-2.png",
] as const;

const orderedItems = orderedSources
  .map((src) => bySrc.get(src))
  .filter((item): item is SourceItem => Boolean(item));

const curatedItems: GalleryItem[] = orderedItems;

const imageDimensions: Record<string, { width: number; height: number }> = {
  "/gallery/all-gallery/anatomy-1.png": { width: 2220, height: 828 },
  "/gallery/all-gallery/anatomy-2.png": { width: 1865, height: 960 },
  "/gallery/all-gallery/anatomy-3.png": { width: 1902, height: 2013 },
  "/gallery/all-gallery/buttons.png": { width: 2996, height: 1592 },
  "/gallery/all-gallery/details.png": { width: 5301, height: 2541 },
  "/gallery/all-gallery/file_1.png": { width: 814, height: 1688 },
  "/gallery/all-gallery/file_2.png": { width: 1920, height: 1200 },
  "/gallery/all-gallery/file_3.png": { width: 814, height: 1688 },
  "/gallery/all-gallery/file_4.png": { width: 814, height: 1688 },
  "/gallery/all-gallery/file_5.png": { width: 814, height: 1688 },
  "/gallery/all-gallery/file_6.png": { width: 814, height: 1688 },
  "/gallery/all-gallery/file_8.png": { width: 7680, height: 4320 },
  "/gallery/all-gallery/file_10.png": { width: 1280, height: 797 },
  "/gallery/all-gallery/file_11.png": { width: 5760, height: 4080 },
  "/gallery/all-gallery/file_12.png": { width: 2208, height: 4851 },
  "/gallery/all-gallery/file_13.png": { width: 2250, height: 3638 },
  "/gallery/all-gallery/file_14.png": { width: 1920, height: 1200 },
  "/gallery/all-gallery/file_16.png": { width: 1280, height: 800 },
  "/gallery/all-gallery/file_17.png": { width: 1631, height: 1175 },
  "/gallery/all-gallery/file_18.jpg": { width: 1920, height: 940 },
  "/gallery/all-gallery/work-1.jpg": { width: 1920, height: 940 },
  "/gallery/all-gallery/work-3.jpg": { width: 1923, height: 1814 },
  "/gallery/all-gallery/work-7.jpg": { width: 1440, height: 1020 },
};

interface CuratedGalleryProps {
  locale: Locale;
}

export function CuratedGallery({ locale }: CuratedGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const slides = curatedItems.map((item) => ({
    src: item.src,
    alt: item.alt[locale],
  }));

  return (
    <>
      <div className="columns-1 gap-4 md:columns-2 md:gap-5 lg:columns-3 xl:columns-4">
        {curatedItems.map((item, index) => (
          (() => {
            const dim = imageDimensions[item.src];
            const frameAspect = dim ? `${dim.width} / ${dim.height}` : "16 / 9";

            return (
          <button
            key={item.src}
            type="button"
            className="group relative mb-4 inline-block w-full break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-white/4 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_16px_32px_rgba(0,0,0,0.14)] transition-all hover:border-white/25 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.24),0_20px_44px_rgba(0,0,0,0.20)] md:mb-5"
            style={{ aspectRatio: frameAspect }}
            onClick={() => setOpenIndex(index)}
            aria-label={item.alt[locale]}
          >
            <div className="absolute inset-0">
              <ImageWithSkeleton
                src={item.src}
                alt={item.alt[locale]}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
                skeletonClassName="bg-white/10"
                sizes="(min-width: 1024px) 35vw, (min-width: 768px) 45vw, 100vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/8 to-transparent opacity-80 transition-opacity group-hover:opacity-65" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
              <p className="max-w-[90%] text-sm font-medium leading-snug text-white/95 md:text-[0.95rem]">
                {item.alt[locale]}
              </p>
            </div>
          </button>
            );
          })()
        ))}
      </div>

      <Lightbox
        open={openIndex !== null}
        close={() => setOpenIndex(null)}
        index={openIndex ?? 0}
        slides={slides}
        plugins={[Zoom]}
        className="gallery-lightbox"
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
    </>
  );
}
