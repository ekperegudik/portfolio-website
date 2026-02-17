import type { Metadata } from "next"
import GalleryClient from "@/components/GalleryClient"
import { RevealOnScroll } from "@/components/RevealOnScroll"

export const metadata: Metadata = {
  title: "Галерея — Катерина Перегудова",
  description: "Галерея дизайн-работ: интерфейсы, компоненты, иллюстрации.",
}

export default function Page() {
  return (
    <RevealOnScroll delay={120}>
      <GalleryClient />
    </RevealOnScroll>
  )
}
