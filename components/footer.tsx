import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/15 bg-background/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <span className="text-sm font-medium text-foreground">
              Катерина Перегудова
            </span>
            <span className="text-sm text-muted-foreground">
              Продуктовый дизайнер, которого вы заслужили
            </span>
          </div>

          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Проекты
            </Link>
            <Link
              href="/about"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Обо мне
            </Link>
            <Link
              href="/gallery"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Галерея
            </Link>
          </nav>
        </div>

        <div className="mt-8 border-t border-border/40 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Design & code by me. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
