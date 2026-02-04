import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Галерея — Катерина Перегудова",
  description: "Галерея дизайн-работ: интерфейсы, компоненты, иллюстрации.",
}

const galleryItems = [
  {
    src: "/gallery/work-1.jpg",
    alt: "Дизайн мобильного приложения",
    category: "Mobile",
  },
  {
    src: "/gallery/work-2.jpg",
    alt: "Дашборд аналитики",
    category: "Dashboard",
  },
  {
    src: "/gallery/work-3.jpg",
    alt: "Компоненты дизайн-системы",
    category: "Design System",
  },
  {
    src: "/gallery/work-4.jpg",
    alt: "Лендинг продукта",
    category: "Landing",
  },
  {
    src: "/gallery/work-5.jpg",
    alt: "Интерфейс e-commerce",
    category: "E-commerce",
  },
  {
    src: "/gallery/work-6.jpg",
    alt: "Прототип приложения",
    category: "Prototype",
  },
  {
    src: "/gallery/work-7.jpg",
    alt: "UI компоненты",
    category: "UI Kit",
  },
  {
    src: "/gallery/work-8.jpg",
    alt: "Мобильный интерфейс",
    category: "Mobile",
  },
  {
    src: "/gallery/work-9.jpg",
    alt: "Веб-приложение",
    category: "Web App",
  },
  {
    src: "/gallery/work-10.jpg",
    alt: "Дизайн форм",
    category: "Forms",
  },
  {
    src: "/gallery/work-11.jpg",
    alt: "Навигация приложения",
    category: "Navigation",
  },
  {
    src: "/gallery/work-12.jpg",
    alt: "Карточки контента",
    category: "Cards",
  },
]

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      {/* Header */}
      <header className="mb-12">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Галерея
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Подборка работ из разных проектов: интерфейсы, компоненты, прототипы и концепции.
        </p>
      </header>

      {/* Gallery Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item, index) => (
          <div
            key={item.src}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-muted"
          >
            <Image
              src={item.src || "/placeholder.svg"}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-xs font-medium uppercase tracking-wider text-primary">
                {item.category}
              </span>
              <p className="mt-1 text-sm text-foreground">{item.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
