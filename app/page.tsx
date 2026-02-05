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
          <h1 className="leading-[1.2] mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Сложные интерфейсы, интуитивное взаимодействие
          </h1>
          <p className="mb-8 text-lg leading-[1.8rem] text-muted-foreground sm:text-xl">
            Продуктовый дизайнер, 7 лет опыта. 
            Начинала свою карьеру в Газпромнефти, создавая красивые и удобные аналитические дашборды. После проектировала облачные сервисы, B2B SaaS, Travel Tech и in-car продукты.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="gap-2">
              <a href="https://disk.yandex.ru/i/ASC9Xzl24TqZUQ" target="_blank">
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
              Последние работы
            </h2>
            <p className="text-muted-foreground">
              От интерфейсов до продуктовых решений
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
