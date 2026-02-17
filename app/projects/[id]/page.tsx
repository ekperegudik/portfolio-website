import { notFound } from "next/navigation";
import { ImageWithSkeleton } from "@/components/ui/ImageWithSkeleton";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects, getProjectById } from "@/lib/projects";
import { Button } from "@/components/ui/button";
import { IncludeImageCarousel } from "@/components/IncludeImageCarousel";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { FigmaEmbed } from "@/components/FigmaEmbed";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { ProcessStepImage } from "@/components/ProcessStepImage";
import { ProcessStepVideo } from "@/components/ProcessStepVideo";
import type { Metadata } from "next";
interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: "Проект не найден",
    };
  }

  return {
    title: `${project.title} — Катерина Перегудова`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

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
      {/* Back Link */}
      <RevealOnScroll delay={120}>
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Все проекты
        </Link>
      </RevealOnScroll>

      {/* Header */}
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

      {/* Cover Image */}
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

      {/* Content Sections */}
      <div className="space-y-16">
        {/* Обзор */}
        <RevealOnScroll delay={120}>
          <section>
          <h2 className="mb-4 text-xl font-semibold tracking-tight text-foreground">
            О продукте
          </h2>
          <p className="whitespace-pre-line leading-[1.4rem] text-muted-foreground">
            {project.overview}
          </p>
          </section>
        </RevealOnScroll>

        {/* Проблема */}
        <RevealOnScroll delay={160}>
          <section>
          <h2 className="mb-4 text-xl font-semibold tracking-tight text-foreground">
            Проблема
          </h2>
          <p className="leading-[1.4rem] text-muted-foreground">
            {project.problem}
          </p>
          </section>
        </RevealOnScroll>

        {/* Решение */}
        <RevealOnScroll delay={200}>
          <section>
          <h2 className="mb-4 text-xl font-semibold tracking-tight text-foreground">
            Решение
          </h2>
          <p className="whitespace-pre-line leading-[1.4rem] text-muted-foreground">
            {project.solution}
          </p>
          </section>
        </RevealOnScroll>
        {project.id === "KRU" && (
          <RevealOnScroll delay={240}>
            <figure className="overflow-hidden rounded-xl border border-white/0 bg-white/2 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_10px_30px_rgba(0,0,0,0.10)]">
              <BeforeAfterSlider
                beforeSrc="/projects/before-1.png"
                afterSrc="/projects/after-1.png"
              />
              <p className="border-t border-white/10 px-4 py-3 text-sm italic text-muted-foreground">
                Слева интерфейс до редизайна, справа — после
              </p>
            </figure>
          </RevealOnScroll>
        )}

        {/* Процесс */}
        <RevealOnScroll delay={120}>
          <section>
          <h2 className="mb-6 text-xl font-semibold tracking-tight text-foreground">
            Процесс
          </h2>
          <ol className="space-y-6">
            {project.process.map((stepObj, index) => (
              <li key={index} className="flex flex-col gap-3">
                <p className="leading-[1.4rem] font-regular text-md text-secondary-foreground">
                  {stepObj.step}
                </p>

                <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
                  {stepObj.detailes.map((item, i) => (
                    <li key={i} className="leading-[1.4rem] text-base">
                      {item}
                    </li>
                  ))}
                </ul>

                {(stepObj.video || stepObj.showImage !== false) && (
                  <figure className="overflow-hidden rounded-xl border border-white/0 bg-white/2 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_10px_30px_rgba(0,0,0,0.10)]">
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
                        alt={stepObj.imageDescription ?? `Иллюстрация к этапу: ${stepObj.step}`}
                        aspectRatio={stepObj.imageAspect ?? "16/8"}
                      />
                    ) : (
                      <div className="relative w-full bg-linear-to-br from-primary/20 via-primary/8 to-transparent"
                        style={{ aspectRatio: stepObj.imageAspect ?? "16/8" }}>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_45%)]" />
                      </div>
                    )}

                    <p className="border-t border-white/10 px-4 py-3 text-sm italic text-muted-foreground">
                      {stepObj.videoDescription ?? stepObj.imageDescription ?? `Иллюстрация к этапу: ${stepObj.step}`}
                    </p>
                  </figure>
                )}
              </li>
            ))}
          </ol>
          </section>
        </RevealOnScroll>

        {/* Gallery */}
        <RevealOnScroll delay={160}>
          <section>
          <h2 className="mb-6 text-xl font-semibold tracking-tight text-foreground">
            {project.id === "ux-framework"
              ? "Фигма-файл с фреймворком"
              : "Галерея проекта"}
          </h2>
          {project.id === "ux-framework" ? (
            project.figmaEmbedUrl ? (
              <FigmaEmbed
                src={figmaIframeSrc}
                title={project.title}
                coverImage={project.image}
              />
            ) : (
              <div className="rounded-xl border border-white/0 bg-white/2 p-6 text-sm text-muted-foreground backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_10px_30px_rgba(0,0,0,0.10)]">
                Добавь `figmaEmbedUrl` для проекта `ux-framework` в{" "}
                <code>lib/projects.ts</code>, чтобы здесь отображался
                интерактивный Figma-файл.
              </div>
            )
          ) : (
            <IncludeImageCarousel
              images={project.galleryImages}
              aspectRatio="16/9"
              imageClassName={
                project.id === "pixorion-ai"
                  ? "object-cover object-top"
                  : "object-cover object-top"
              }
              lightboxClassName="gallery-lightbox"
            />
          )}
          </section>
        </RevealOnScroll>

        {/* Результат */}
        <RevealOnScroll delay={200}>
          <section>
          <h2 className="mb-4 text-xl font-semibold tracking-tight text-foreground">
            Результат
          </h2>
          <p className="whitespace-pre-line mb-6 leading-relaxed text-muted-foreground">
            {project.result}
          </p>

          {project.resultMetrics && (
            <div className="grid gap-4 sm:grid-cols-3">
              {project.resultMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-lg border border-white/0 bg-white/2 p-6 text-center backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_10px_30px_rgba(0,0,0,0.10)]"
                >
                  <div className="mb-1 text-2xl font-bold text-primary">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}
          </section>
        </RevealOnScroll>
      </div>

      {/* Navigation */}
      <RevealOnScroll delay={120}>
        <nav className="mt-20 border-t border-border/40 pt-10">
        <div className="flex flex-col justify-between gap-4 sm:flex-row">
          {prevProject ? (
            <Button asChild variant="outline" className="gap-2 bg-transparent">
              <Link href={`/projects/${prevProject.id}`}>
                <ArrowLeft className="h-4 w-4" />
                {prevProject.title}
              </Link>
            </Button>
          ) : (
            <div />
          )}

          {nextProject && (
            <Button asChild variant="outline" className="gap-2 bg-transparent">
              <Link href={`/projects/${nextProject.id}`}>
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
