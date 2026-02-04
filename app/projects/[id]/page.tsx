import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { projects, getProjectById } from "@/lib/projects"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    return {
      title: "Проект не найден",
    }
  }

  return {
    title: `${project.title} — Катерина Перегудова`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    notFound()
  }

  const currentIndex = projects.findIndex((p) => p.id === id)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      {/* Back Link */}
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Все проекты
      </Link>

      {/* Header */}
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
              className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Cover Image */}
      <div className="relative mb-16 aspect-[16/9] overflow-hidden rounded-xl bg-muted">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Sections */}
      <div className="space-y-16">
        {/* Обзор */}
        <section>
          <h2 className="mb-4 text-xl font-semibold tracking-tight text-foreground">
            Обзор
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            {project.overview}
          </p>
        </section>

        {/* Проблема */}
        <section>
          <h2 className="mb-4 text-xl font-semibold tracking-tight text-foreground">
            Проблема
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            {project.problem}
          </p>
        </section>

        {/* Решение */}
        <section>
          <h2 className="mb-4 text-xl font-semibold tracking-tight text-foreground">
            Решение
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            {project.solution}
          </p>
        </section>

        {/* Процесс */}
        <section>
          <h2 className="mb-6 text-xl font-semibold tracking-tight text-foreground">
            Процесс
          </h2>
          <ol className="space-y-6">
            {project.process.map((stepObj, index) => (
              <li key={index} className="flex flex-col gap-2">
                <span className="flex items-center gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                    {index + 1}
                  </span>
                  <span className="leading-none font-regular text-md text-secondary-foreground">
                    {stepObj.step}
                  </span>
                </span>
                <ul className="pl-12 list-disc space-y-1 text-muted-foreground">
                  {stepObj.detailes.map((item, i) => (
                    <li key={i} className="text-base leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        {/* Gallery */}
        <section>
          <h2 className="mb-6 text-xl font-semibold tracking-tight text-foreground">
            Галерея проекта
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {project.galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - изображение ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Результат */}
        <section>
          <h2 className="mb-4 text-xl font-semibold tracking-tight text-foreground">
            Результат
          </h2>
          <p className="mb-6 leading-relaxed text-muted-foreground">
            {project.result}
          </p>

          {project.resultMetrics && (
            <div className="grid gap-4 sm:grid-cols-3">
              {project.resultMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-lg border border-border/40 bg-card p-6 text-center"
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
      </div>

      {/* Navigation */}
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
    </article>
  )
}
