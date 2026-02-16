import { projects } from "@/lib/projects"
import { ProjectCard } from "@/components/project-card"
import { RevealOnScroll } from "@/components/RevealOnScroll"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"
import Link from "next/link"


export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-aurora relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="hero-aurora-blob-a absolute left-[6%] top-[10%] h-[38vmax] w-[38vmax] rounded-full" />
          <div className="hero-aurora-blob-b absolute bottom-[2%] right-[2%] h-[34vmax] w-[34vmax] rounded-full" />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-44 bg-gradient-to-b from-transparent via-background/60 to-background" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <RevealOnScroll delay={260}>
              <h1 className="leading-[1.2] mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Сложные интерфейсы, интуитивное взаимодействие
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delay={520}>
              <p className="mb-8 text-lg leading-[1.8rem] text-muted-foreground sm:text-xl">
                Продуктовый дизайнер, 7 лет опыта.
                Начинала свою карьеру в компании Газпромнефть, создавая красивые и удобные аналитические дашборды. После проектировала облачные сервисы, B2B SaaS, Travel Tech и in-car продукты.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={760}>
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
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <RevealOnScroll delay={120}>
              <h2 className="mb-2 text-2xl font-semibold tracking-tight text-foreground">
                Последние работы
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={220}>
              <p className="text-muted-foreground">
                От интерфейсов до продуктовых решений
              </p>
            </RevealOnScroll>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project, index) => (
            <RevealOnScroll key={project.id} delay={320 + index * 120}>
              <ProjectCard project={project} />
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </div>
  )
}
