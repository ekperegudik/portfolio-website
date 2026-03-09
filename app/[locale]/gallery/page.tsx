import type { Metadata } from "next";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { CuratedGallery } from "@/components/CuratedGallery";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return { title: "Not found" };
  }

  const isEn = locale === "en";

  return {
    title: isEn ? "Gallery — Catherine Peregudova" : "Галерея — Катерина Перегудова",
    description: isEn
      ? "Examples of work from different years and industries."
      : "Примеры работ разных лет и индустрий.",
  };
}

export default async function GalleryPage({ params }: PageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const typedLocale = locale as Locale;
  const isEn = typedLocale === "en";

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <header className="mb-10 md:mb-12">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {isEn ? "Gallery" : "Галерея"}
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {isEn
            ? "Examples of work from different years and industries."
            : "Примеры работ разных лет и индустрий."}
        </p>
      </header>

      <CuratedGallery locale={typedLocale} />
    </div>
  );
}
