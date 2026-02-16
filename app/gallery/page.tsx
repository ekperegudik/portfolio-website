import type { Metadata } from "next"
import GalleryClient from "../../components/GalleryClient"

export const metadata: Metadata = {
  title: "Галерея — Катерина Перегудова",
  description: "Галерея дизайн-работ: интерфейсы, компоненты, иллюстрации.",
}

export default function Page() {
  return <GalleryClient />
}