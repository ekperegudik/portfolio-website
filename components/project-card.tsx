import Link from "next/link"
import { ImageWithSkeleton } from "@/components/ui/ImageWithSkeleton"
import type { Project } from "@/lib/projects"
import type { Locale } from "@/lib/i18n"

interface ProjectCardProps {
  project: Project
  locale: Locale
}

export function ProjectCard({ project, locale }: ProjectCardProps) {
  return (
    <Link href={`/${locale}/projects/${project.id}`} className="group block">
      <article className="flex h-full flex-col overflow-hidden rounded-lg border border-white/1 bg-white/2 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_10px_30px_rgba(0,0,0,0.10)] transition-all duration-300 hover:border-white/12 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_0_0_1px_rgba(255,255,255,0.08),0_14px_36px_rgba(0,0,0,0.16),0_0_28px_rgba(196,221,255,0.10)]">
        <div className="relative aspect-[16/10] overflow-hidden bg-background/10">
          <ImageWithSkeleton
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            skeletonClassName="bg-white/10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex flex-1 flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-wider text-primary">
                {project.role}
              </span>
              <span className="text-xs text-muted-foreground">{project.year}</span>
            </div>

            <h3 className="text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
              {project.title}
            </h3>

            <p className="flex-1 min-h-[2.8rem] text-sm leading-[1.4rem] text-muted-foreground">
              {project.description}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/0 bg-white/6 px-3 py-1 text-xs font-medium text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  )
}
