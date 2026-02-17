import { projects } from "@/lib/projects"
import { ProjectCard } from "@/components/project-card"
import { RevealOnScroll } from "@/components/RevealOnScroll"
import { AnimatedHeadline } from "@/components/AnimatedHeadline"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex min-h-[calc(100svh-4rem)] items-center py-16 sm:py-20">
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <RevealOnScroll delay={300}>
              <p className="mb-4 inline-flex rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground backdrop-blur">
                UX Designer & Product manager
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={300}>
              <AnimatedHeadline
                ariaLabel="Сложные интерфейсы, интуитивное взаимодействие"
                className="mb-4 text-4xl sm:text-5xl lg:text-6xl"
                segments={[
                  { text: "Сложные интерфейсы, " },
                  { text: "интуитивное взаимодействие", className: "text-primary" },
                ]}
              />
            </RevealOnScroll>
            <RevealOnScroll delay={1000}>
              <p className="mb-8 text-lg leading-[1.8rem] text-muted-foreground sm:text-xl">
                Аналитическое мышление, пытливый ум и 7 лет опыта.
                Работала в крупных компаниях и молодых стартапах. Проектировала Enterprise-платформы, интерфейсы GIS, in-car и AI-систем.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={2500}>
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
            <RevealOnScroll delay={60}>
              <h2 className="mb-2 text-2xl font-semibold tracking-tight text-foreground">
                Мои работы
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={110}>
              <p className="text-muted-foreground">
                Детальное описание продуктовых кейсов
              </p>
            </RevealOnScroll>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project, index) => (
            <RevealOnScroll key={project.id} delay={160 + index * 60}>
              <ProjectCard project={project} />
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </div>
  )
}
