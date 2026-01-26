import { projects } from "@/lib/projects"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="max-w-3xl">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <span className="text-balance leading-[1.7rem]"> Создаю продукты, которые работают незаметно </span>
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Продуктовый дизайнер с 2019 года. 
            Опираюсь на исследования и данные, помогаю повышать вовлечённость пользователей.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="gap-2">
              <a href="/resume.pdf" download>
                <Download className="h-4 w-4" />
                Скачать резюме
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
              <Link href="/about">
                Обо мне
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="mb-2 text-2xl font-semibold tracking-tight text-foreground">
              Избранные проекты
            </h2>
            <p className="text-muted-foreground">
              Подборка работ за последние годы
            </p>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  )
}
