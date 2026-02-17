import type { Metadata } from "next"
import GalleryClient from "@/components/GalleryClient"
import { RevealOnScroll } from "@/components/RevealOnScroll"

export const metadata: Metadata = {
  title: "Галерея — Катерина Перегудова",
  description: "Коллекция разработанных интерфейсов и UI-компонентов.",
}

export default function Page() {
  return (
    <RevealOnScroll delay={120}>
      <GalleryClient />
    </RevealOnScroll>
  )
}
