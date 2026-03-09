"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { defaultLocale, isLocale, Locale, withLocalePath } from "@/lib/i18n";

export function Footer() {
  const pathname = usePathname();
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  const locale: Locale = isLocale(firstSegment) ? firstSegment : defaultLocale;
  const isEn = locale === "en";

  return (
    <footer className="border-t border-white/15 bg-background/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <span className="text-sm font-medium text-foreground">
              {isEn ? "Catherine Peregudova" : "Катерина Перегудова"}
            </span>
            <span className="text-sm text-muted-foreground">
              {isEn
                ? "Product designer focused on clear, useful interfaces"
                : "Продуктовый дизайнер, которого вы заслужили"}
            </span>
          </div>

          <nav className="flex items-center gap-6">
            <Link
              href={withLocalePath(locale, "/")}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {isEn ? "Projects" : "Проекты"}
            </Link>
            <Link
              href={withLocalePath(locale, "/about")}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {isEn ? "About" : "Обо мне"}
            </Link>
            <Link
              href={withLocalePath(locale, "/gallery")}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {isEn ? "Gallery" : "Галерея"}
            </Link>
          </nav>
        </div>

        <div className="mt-8 border-t border-border/40 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()}{" "}
            {isEn
              ? "Design & code by me. All rights reserved."
              : "Дизайн и код выполнены мной. Все права защищены."}
          </p>
        </div>
      </div>
    </footer>
  );
}
