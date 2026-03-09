import { notFound } from "next/navigation";
import { ImageWithSkeleton } from "@/components/ui/ImageWithSkeleton";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getProjects, getProjectById } from "@/lib/projects";
import { Button } from "@/components/ui/button";
import { IncludeImageCarousel } from "@/components/IncludeImageCarousel";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { FigmaEmbed } from "@/components/FigmaEmbed";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { ProcessStepImage } from "@/components/ProcessStepImage";
import { ProcessStepVideo } from "@/components/ProcessStepVideo";
import { cn } from "@/lib/utils";
import type { CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";
import { isLocale, Locale, locales } from "@/lib/i18n";

interface PageProps {
  params: Promise<{ locale: string; id: string }>;
}

const splitParagraphs = (text: string) =>
  text
    .split(/\r?\n\s*\r?\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

interface ParagraphStackProps {
  text: string;
  className?: string;
  paragraphClassName?: string;
  paragraphGap?: string;
  paragraphGapVar?: string;
}

const DEFAULT_PARAGRAPH_GAP = "clamp(0.75rem, 1vw, 1rem)";
const PARAGRAPH_GAP_VAR = "--project-paragraph-gap";

function ParagraphStack({
  text,
  className,
  paragraphClassName,
  paragraphGap = DEFAULT_PARAGRAPH_GAP,
  paragraphGapVar,
}: ParagraphStackProps) {
  const paragraphs = splitParagraphs(text);

  if (!paragraphs.length) {
    return null;
  }

  const gapStyle: CSSProperties = paragraphGapVar
    ? { gap: `var(${paragraphGapVar})` }
    : { gap: paragraphGap };

  return (
    <div
      className={cn(
        "flex flex-col text-muted-foreground leading-[1.4rem]",
        className,
      )}
      style={gapStyle}
    >
      {paragraphs.map((paragraph, index) => (
        <p
          key={`${index}-${paragraph}`}
          className={cn("whitespace-pre-line", paragraphClassName)}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}

interface ParagraphSectionProps {
  title: string;
  text: string;
  paragraphGap?: string;
  paragraphClassName?: string;
  className?: string;
  children?: ReactNode;
}

function ParagraphSection({
  title,
  text,
  paragraphGap = DEFAULT_PARAGRAPH_GAP,
  paragraphClassName,
  className,
  children,
}: ParagraphSectionProps) {
  const sectionStyle = {
    [PARAGRAPH_GAP_VAR]: paragraphGap,
  } as CSSProperties;

  return (
    <section className={cn("space-y-0", className)} style={sectionStyle}>
      <h2
        className="text-xl font-semibold tracking-tight text-foreground"
        style={{ marginBottom: `calc(var(${PARAGRAPH_GAP_VAR}) * 1.5)` }}
      >
        {title}
      </h2>
      <ParagraphStack
        text={text}
        paragraphGapVar={PARAGRAPH_GAP_VAR}
        paragraphClassName={paragraphClassName}
      />
      {children}
    </section>
  );
}

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    getProjects(locale).map((project) => ({
      locale,
      id: project.id,
    })),
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, id } = await params;

  if (!isLocale(locale)) {
    return {
      title: "Not found",
    };
  }

  const project = getProjectById(id, locale);

  if (!project) {
    return {
      title: locale === "en" ? "Project not found" : "Проект не найден",
    };
  }

  return {
    title:
      locale === "en"
        ? `${project.title} — Catherine Peregudova`
        : `${project.title} — Катерина Перегудова`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { locale, id } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const typedLocale = locale as Locale;
  const isEn = typedLocale === "en";
  const project = getProjectById(id, typedLocale);

  if (!project) {
    notFound();
  }

  const projects = getProjects(typedLocale);
  const currentIndex = projects.findIndex((p) => p.id === id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const figmaIframeSrc = project.figmaEmbedUrl
    ? project.figmaEmbedUrl.includes("/embed?")
      ? project.figmaEmbedUrl
      : `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(
          project.figmaEmbedUrl,
        )}`
    : "";

  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <RevealOnScroll delay={120}>
        <Link
          href={`/${typedLocale}`}
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          {isEn ? "All projects" : "Все проекты"}
        </Link>
      </RevealOnScroll>

      <RevealOnScroll delay={220}>
        <header className="mb-12">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              {project.role}
            </span>
            <span className="text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">{project.year}</span>
          </div>

          <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>

          <p className="text-lg text-muted-foreground">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/0 bg-white/6 px-3 py-1 text-sm font-medium text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>
      </RevealOnScroll>

      <RevealOnScroll delay={320}>
        <div className="relative mb-16 aspect-video overflow-hidden rounded-xl bg-muted">
          <ImageWithSkeleton
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className={project.id === "pixorion-ai" ? "object-cover" : "object-contain"}
            skeletonClassName="bg-white/10"
            priority
          />
        </div>
      </RevealOnScroll>

      <div className="space-y-16">
        <RevealOnScroll delay={120}>
          <ParagraphSection
            title={isEn ? "About the product" : "О продукте"}
            text={project.overview}
          >
            {project.id === "atom-ecosystem" && (
              <p className="mt-4 leading-[1.4rem] text-muted-foreground">
                {isEn
                  ? "All interface designs shown on this page were created by designers from my team: "
                  : "Все высоко детализированные интерфейсы, представленные на странице, были подготовлены дизайнерами моей команды. В том числе: "}
                <a
                  href="https://www.linkedin.com/in/artem-a-kolesnikov/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary transition-colors hover:opacity-80"
                >
                  {isEn ? "Artem Kolesnikov" : "Артёмом Колесниковым"}
                </a>{" "}
                {isEn ? "and " : "и "}
                <a
                  href="https://www.linkedin.com/in/lenngrowl/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary transition-colors hover:opacity-80"
                >
                  {isEn ? "Leonid Gavrilov" : "Леонидом Гавриловым"}
                </a>
                .
              </p>
            )}
          </ParagraphSection>
        </RevealOnScroll>

        <RevealOnScroll delay={160}>
          <ParagraphSection title={isEn ? "Problem" : "Проблема"} text={project.problem} />
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <ParagraphSection title={isEn ? "Solution" : "Решение"} text={project.solution} />
        </RevealOnScroll>
        {project.id === "KRU" && (
          <RevealOnScroll delay={240}>
            <figure className="overflow-hidden rounded-xl border border-white/0 bg-white/2 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_10px_30px_rgba(0,0,0,0.10)] backdrop-blur-md">
              <BeforeAfterSlider beforeSrc="/projects/before-1.png" afterSrc="/projects/after-1.png" />
              <p className="border-t border-white/10 px-4 py-3 text-sm italic text-muted-foreground">
                {isEn
                  ? "Left: before redesign. Right: after redesign."
                  : "Слева интерфейс до редизайна, справа — после"}
              </p>
            </figure>
          </RevealOnScroll>
        )}

        <RevealOnScroll delay={120}>
          <section>
            <h2 className="mb-6 text-xl font-semibold tracking-tight text-foreground">
              {isEn ? "Process" : "Процесс"}
            </h2>
            <ol className="space-y-6">
              {project.process.map((stepObj, index) => (
                <li key={index} className="flex flex-col gap-3">
                  <p className="text-md font-regular leading-[1.4rem] text-secondary-foreground">
                    {stepObj.step}
                  </p>

                  <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
                    {stepObj.detailes.map((item, i) => (
                      <li key={i} className="text-base leading-[1.4rem]">
                        {item}
                      </li>
                    ))}
                  </ul>

                  {(stepObj.video || stepObj.showImage !== false) && (
                    <figure className="overflow-hidden rounded-xl border border-white/0 bg-white/2 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_10px_30px_rgba(0,0,0,0.10)] backdrop-blur-md">
                      {stepObj.video ? (
                        <ProcessStepVideo
                          src={stepObj.video}
                          aspectRatio={stepObj.videoAspect ?? stepObj.imageAspect ?? "16/8"}
                          playbackRate={stepObj.videoPlaybackRate ?? 1.35}
                          frameVariant={stepObj.videoFrameVariant}
                        />
                      ) : stepObj.image ? (
                        <ProcessStepImage
                          src={stepObj.image}
                          alt={
                            stepObj.imageDescription ??
                            (isEn
                              ? `Illustration for step: ${stepObj.step}`
                              : `Иллюстрация к этапу: ${stepObj.step}`)
                          }
                          aspectRatio={stepObj.imageAspect ?? "16/8"}
                        />
                      ) : (
                        <div
                          className="relative w-full bg-linear-to-br from-primary/20 via-primary/8 to-transparent"
                          style={{ aspectRatio: stepObj.imageAspect ?? "16/8" }}
                        >
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_45%)]" />
                        </div>
                      )}

                      <p className="border-t border-white/10 px-4 py-3 text-sm italic text-muted-foreground">
                        {stepObj.videoDescription ??
                          stepObj.imageDescription ??
                          (isEn
                            ? `Illustration for step: ${stepObj.step}`
                            : `Иллюстрация к этапу: ${stepObj.step}`)}
                      </p>
                    </figure>
                  )}
                </li>
              ))}
            </ol>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delay={160}>
          <section>
            <h2 className="mb-6 text-xl font-semibold tracking-tight text-foreground">
              {project.id === "ux-framework"
                ? isEn
                  ? "Figma file"
                  : "Фигма-файл с фреймворком"
                : isEn
                  ? "Project gallery"
                  : "Галерея проекта"}
            </h2>
            {project.id === "ux-framework" ? (
              project.figmaEmbedUrl ? (
                <FigmaEmbed src={figmaIframeSrc} title={project.title} coverImage={project.image} />
              ) : (
                <div className="rounded-xl border border-white/0 bg-white/2 p-6 text-sm text-muted-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_10px_30px_rgba(0,0,0,0.10)] backdrop-blur-md">
                  {isEn
                    ? "Add `figmaEmbedUrl` for `ux-framework` in `lib/projects.ts` to render interactive Figma embed here."
                    : "Добавь `figmaEmbedUrl` для проекта `ux-framework` в `lib/projects.ts`, чтобы здесь отображался интерактивный Figma-файл."}
                </div>
              )
            ) : (
              <IncludeImageCarousel
                images={project.galleryImages}
                aspectRatio="16/9"
                imageClassName="object-contain object-center bg-black/20"
                lightboxClassName="gallery-lightbox"
              />
            )}
          </section>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <ParagraphSection
            title={isEn ? "Result" : "Результат"}
            text={project.result}
            paragraphClassName="text-sm leading-relaxed"
            className="space-y-6"
          >
            {project.resultMetrics && (
              <div className="grid gap-4 sm:grid-cols-3">
                {project.resultMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-lg border border-white/0 bg-white/2 p-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_10px_30px_rgba(0,0,0,0.10)] backdrop-blur-md"
                  >
                    <div className="mb-1 text-2xl font-bold text-primary">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>
            )}
          </ParagraphSection>
        </RevealOnScroll>
      </div>

      <RevealOnScroll delay={120}>
        <nav className="mt-20 border-t border-border/40 pt-10">
          <div className="flex flex-col justify-between gap-4 sm:flex-row">
            {prevProject ? (
              <Button asChild variant="outline" className="gap-2 bg-transparent">
                <Link href={`/${typedLocale}/projects/${prevProject.id}`}>
                  <ArrowLeft className="h-4 w-4" />
                  {prevProject.title}
                </Link>
              </Button>
            ) : (
              <div />
            )}

            {nextProject && (
              <Button asChild variant="outline" className="gap-2 bg-transparent">
                <Link href={`/${typedLocale}/projects/${nextProject.id}`}>
                  {nextProject.title}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </nav>
      </RevealOnScroll>
    </article>
  );
}
