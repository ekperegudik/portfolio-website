"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Download, Menu, X } from "lucide-react"
import { useState } from "react"
import {
  defaultLocale,
  isLocale,
  Locale,
  stripLocaleFromPathname,
  withLocalePath,
} from "@/lib/i18n"

const labels = {
  ru: {
    brand: "Катерина Перегудова",
    projects: "Проекты",
    about: "Обо мне",
    gallery: "Галерея",
    resume: "Резюме",
  },
  en: {
    brand: "Catherine Peregudova",
    projects: "Projects",
    about: "About",
    gallery: "Gallery",
    resume: "CV",
  },
} as const;

interface LanguageSwitcherProps {
  locale: Locale;
  basePath: string;
  onNavigate?: () => void;
}

function LanguageSwitcher({ locale, basePath, onNavigate }: LanguageSwitcherProps) {
  const options: { code: Locale; label: string }[] = [
    { code: "ru", label: "RU" },
    { code: "en", label: "EN" },
  ];

  return (
    <div
      className="inline-flex items-center rounded-full border border-white/20 bg-white/8 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]"
      role="navigation"
      aria-label="Language switcher"
    >
      {options.map((option) => {
        const isActive = option.code === locale;

        return (
          <Link
            key={option.code}
            href={withLocalePath(option.code, basePath)}
            onClick={onNavigate}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider transition-colors",
              isActive
                ? "bg-white text-black shadow-sm"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {option.label}
          </Link>
        );
      })}
    </div>
  );
}

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  const locale: Locale = isLocale(firstSegment) ? firstSegment : defaultLocale;
  const localizedPathname = withLocalePath(locale, pathname);
  const basePath = stripLocaleFromPathname(pathname);
  const copy = labels[locale];
  const resumeHref = locale === "en" ? "/resume-peregudova-en.pdf" : "/resume-peregudova.pdf";
  const resumeFilename = locale === "en" ? "resume-peregudova-en.pdf" : "resume-peregudova.pdf";

  const navigation = [
    { name: copy.projects, href: withLocalePath(locale, "/") },
    { name: copy.about, href: withLocalePath(locale, "/about") },
    { name: copy.gallery, href: withLocalePath(locale, "/gallery") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/15 bg-background/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link 
          href={withLocalePath(locale, "/")}
          className="text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-primary"
        >
          {copy.brand}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
                className={cn(
                "text-sm font-medium transition-colors hover:text-foreground",
                localizedPathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher locale={locale} basePath={basePath} />
          <Button asChild size="sm" className="gap-2">
            <a href={resumeHref} download={resumeFilename}>
              <Download className="h-4 w-4" />
              {copy.resume}
            </a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-white/15 bg-background/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] md:hidden">
          <nav className="flex flex-col px-4 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "py-3 text-base font-medium transition-colors hover:text-foreground",
                  localizedPathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Язык / Language
              </p>
              <LanguageSwitcher
                locale={locale}
                basePath={basePath}
                onNavigate={() => setMobileMenuOpen(false)}
              />
            </div>
            <Button asChild size="sm" className="mt-4 gap-2">
              <a href={resumeHref} download={resumeFilename}>
                <Download className="h-4 w-4" />
                {copy.resume}
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
