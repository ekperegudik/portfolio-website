"use client"

import Image from "next/image"
import { useState } from "react"

import Lightbox from "yet-another-react-lightbox"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"

import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/thumbnails.css"

const galleryItems = [
    {
        src: "/gallery/work-1.jpg",
        alt: "Дизайн мобильного приложения",
        category: "Mobile",
    },
    {
        src: "/gallery/work-2.jpg",
        alt: "Дизайн мобильного приложения",
        category: "Mobile",
    },
    {
        src: "/gallery/work-3.jpg",
        alt: "Дизайн мобильного приложения",
        category: "Mobile",
    },
    {
        src: "/gallery/work-9.png",
        alt: "Каталог товаров",
        category: "Pixorion.ai",
    },

]

export default function GalleryClient() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const slides = galleryItems.map(item => ({
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
                    Подборка работ из разных проектов: интерфейсы, компоненты, прототипы и концепции.
                </p>
            </header>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {galleryItems.map((item, index) => (
                    <div
                        key={item.src}
                        className="group relative aspect-[16/9] overflow-hidden rounded-lg bg-muted cursor-zoom-in"
                        onClick={() => {
                            console.log("clicked", index)
                            setOpenIndex(index)
                        }}
                    >
                        <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                        <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <span className="text-xs font-medium uppercase tracking-wider text-primary">
                                {item.category}
                            </span>
                            <p className="mt-1 text-sm">
                                {item.alt}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <Lightbox
                open={openIndex !== null}
                slides={slides}
                index={openIndex ?? 0}
                close={() => setOpenIndex(null)}
                plugins={[Thumbnails]}
            />
        </div>
    )

}