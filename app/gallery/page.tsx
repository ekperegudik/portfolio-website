import type { Metadata } from "next";
// import GalleryClient from "@/components/GalleryClient"
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { ImageWithSkeleton } from "@/components/ui/ImageWithSkeleton";

export const metadata: Metadata = {
  title: "Галерея — Катерина Перегудова",
  description: "Коллекция разработанных интерфейсов и UI-компонентов.",
};

export default function Page() {
  const showGallery = false; // переключатель для скрытия/показа галереи

  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <RevealOnScroll delay={120}>
        <h1 className="mb-4 text-3xl font-bold">Галерея</h1>
        <p className="text-muted-foreground mb-8">
          Коллекция разработанных интерфейсов и UI-компонентов.
        </p>
      </RevealOnScroll>

      {showGallery ? (
        // Галерея (скрыта пока showGallery = false)
        <div className="hidden">{/* <GalleryClient /> */}</div>
      ) : (
        <RevealOnScroll delay={240}>
          <div className="flex flex-col items-center justify-center gap-6 rounded-xl border border-white/0 bg-white/0 p-16 text-center backdrop-blur-md">
            <div className="relative h-40 w-40 rounded-xl">
              <ImageWithSkeleton
                src="/projects/memes.jpg"
                alt="Under construction"
                fill
                sizes="10rem"
                className="rounded-xl object-cover"
                skeletonClassName="bg-white/10"
              />
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-md">
              Никак не выберу лучшие! В любом случае, скоро здесь появится много
              интересного. Следите за обновлениями.
            </p>
          </div>
        </RevealOnScroll>
      )}
    </div>
  );
}
