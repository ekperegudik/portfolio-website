import type { Metadata } from "next";
import styles from "./backgrounds.module.css";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Background Playground — Катерина Перегудова",
  description: "Демо анимированных фоновых решений для портфолио.",
};

type BackgroundPreviewProps = {
  title: string;
  subtitle: string;
  className: string;
  badge: string;
};

function BackgroundPreview({
  title,
  subtitle,
  className,
  badge,
}: BackgroundPreviewProps) {
  return (
    <article className="space-y-4">
      <div className={`relative h-75 overflow-hidden rounded-2xl border border-border/50 bg-card ${className}`}>
        <div className="absolute inset-0 z-10 bg-linear-to-b from-background/10 via-transparent to-background/70" />
        <div className="absolute inset-x-0 bottom-0 z-20 p-6">
          <p className="mb-2 inline-flex rounded-full border border-border/50 bg-background/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm">
            {badge}
          </p>
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </div>
    </article>
  );
}

export default function BackgroundsPlaygroundPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <header className="mb-12 max-w-3xl">
        <RevealOnScroll delay={120}>
          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Playground: Фоновые Анимации
          </h1>
        </RevealOnScroll>
        <RevealOnScroll delay={240}>
          <p className="text-muted-foreground">
            Три направления для фона с глубиной. Открывай эту страницу и
            выбирай вариант, который лучше поддерживает контент.
          </p>
        </RevealOnScroll>
      </header>

      <div className="grid gap-8 lg:grid-cols-2">
        <RevealOnScroll delay={160}>
          <BackgroundPreview
            className={styles.aurora}
            badge="Aurora + Grain"
            title="Мягкая глубина с плавающими слоями"
            subtitle="Ненавязчивый, атмосферный, хорошо для landing и hero-блоков."
          />
        </RevealOnScroll>

        <RevealOnScroll delay={280}>
          <BackgroundPreview
            className={styles.mesh}
            badge="Mesh + Spotlight"
            title="Динамический градиентный холст"
            subtitle="Более модный и выразительный стиль, подходит для акцентных страниц."
          />
        </RevealOnScroll>

        <div className="lg:col-span-2">
          <RevealOnScroll delay={360}>
            <BackgroundPreview
              className={styles.gridFog}
              badge="Grid + Fog"
              title="Техничная сетка с глубиной"
              subtitle="Сдержанный продуктовый вайб, подходит для кейсов и data-интерфейсов."
            />
          </RevealOnScroll>
        </div>
      </div>

      <RevealOnScroll delay={240}>
        <p className="mt-10 text-sm text-muted-foreground">
          URL для просмотра: <code>/playground/backgrounds</code>
        </p>
      </RevealOnScroll>
    </div>
  );
}
