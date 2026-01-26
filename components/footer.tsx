import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <span className="text-sm font-medium text-foreground">
              Катерина Перегудова
            </span>
            <span className="text-sm text-muted-foreground">
              Дизайнер продукта
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

          <div className="flex items-center gap-4">
            <a
              href="mailto:Katuush@mail.ru"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Katuush@mail.ru
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Катерина Перегудова. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
