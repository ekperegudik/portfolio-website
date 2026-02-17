"use client"

import Image from "next/image"
import { useState } from "react"

import Lightbox from "yet-another-react-lightbox"
import Zoom from "yet-another-react-lightbox/plugins/zoom"

import "yet-another-react-lightbox/styles.css"

const galleryItems = [
  {
    src: "/gallery/work-1.jpg",
    alt: "Цифровой дашборд ПАО Газпромнефть",
  },
  {
    src: "/gallery/work-2.jpg",
    alt: "Цифровой дашборд ПАО Газпромнефть",
  },
  {
    src: "/gallery/work-3.jpg",
    alt: "Paclet system",
  },
  {
    src: "/gallery/work-9.png",
    alt: "AI ассиcтент для продавцов WB, OZON",
  },
]

export default function GalleryClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const slides = galleryItems.map((item) => ({
    src: item.src,
    alt: item.alt,
  }))

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <header className="mb-12">
        <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Галерея
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Подборка работ из разных проектов
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item, index) => (
          <div
            key={item.src}
            className="group relative aspect-video cursor-pointer overflow-hidden rounded-lg bg-muted"
            onClick={() => {
              setOpenIndex(index)
            }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-background/95 via-background/45 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="mt-2 text-sm text-foreground">{item.alt}</p>
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        open={openIndex !== null}
        slides={slides}
        index={openIndex ?? 0}
        close={() => setOpenIndex(null)}
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
    </div>
  )
}
