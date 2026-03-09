export const locales = ["ru", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ru";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "ru" ? "en" : "ru";
}

export function stripLocaleFromPathname(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (!segments.length) {
    return "/";
  }

  if (isLocale(segments[0])) {
    const nextPath = `/${segments.slice(1).join("/")}`;
    return nextPath === "/" ? "/" : nextPath;
  }

  return pathname || "/";
}

export function withLocalePath(locale: Locale, pathname: string): string {
  const normalized = stripLocaleFromPathname(pathname);
  return normalized === "/" ? `/${locale}` : `/${locale}${normalized}`;
}
