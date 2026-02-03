import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Mail, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Обо мне — Катерина Перегудова",
  description: "Дизайнер продукта с 7-летним опытом создания цифровых продуктов и взаимодействия с кросс-функциональными командами.",
}

const experience = [
  {
    role: "Старший продуктовый дизайнер и менеджер продукта",
    company: "ATOM",
    period: "Январь 2024 — Сентябрь 2025",
    description: "Создание цифровой экосистемы для электромобиля нового поколения. Руководство поиском и интеграцией IT-решений, координация кросс-функциональной команды из 15 специалистов.",
  },
  {
    role: "Руководитель отдела дизайна",
    company: "Геосемантика",
    period: "Июль 2023 — Декабрь 2023",
    description: "Руководство дизайном высоконагруженных корпоративных систем, включая GIS-платформы. Редизайн сложных интерфейсов, создание и поддержка UI Kit.",
  },
  {
    role: "Ведущий дизайнер UX/UI",
    company: "Недра Диджитал",
    period: "Март 2021 — Июль 2023",
    description: "Проектирование интерфейсов для многофункциональных платформ: аналитика, мониторинг KPI, big data. Стандартизация паттернов интерфейсов.",
  },
  {
    role: "Дизайнер UX/UI",
    company: "Газпромнефть — Цифровые решения",
    period: "Сентябрь 2019 — Март 2021",
    description: "Разработка интерфейсов внутренних корпоративных продуктов. Внедрение обновлённых методологий проектирования.",
  },
]

const skills = [
  "UX исследования",
  "Прототипирование",
  "Дизайн-мышление",
  "Пользовательские тестирования",
  "Дизайн-системы",
  "Информационная архитектура",
  "Figma",
  "Adobe CC",
  "Менторство",
  "Кросс-функциональное взаимодействие",
]

const approach = [
  {
    title: "Структура и логика",
    description: "Анализирую цели продукта: строю CJM, JTBD, инфо-функциональные модели и навигационные карты. Это помогает создавать понятную структуру и логичные пользовательские сценарии.",
  },
  {
    title: "Внимание к деталям",
    description: "Доверие пользователей формируется не только за счёт удобства сценариев, но и благодаря чистому, аккуратному визуалу. Стремлюсь к пиксельной точности и минимализму.",
  },
  {
    title: "Незаметный дизайн",
    description: "Считаю, что лучший дизайн — тот, который не отвлекает. Если пользователь достигает цели без лишних усилий и задержек, значит всё получилось.",
  },
]

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
          {/* Photo */}
          <div className="relative mx-auto h-64 w-64 shrink-0 overflow-hidden rounded-2xl bg-muted lg:mx-0">
            <Image
              src="/about/profile.jpg"
              alt="Катерина Перегудова"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Bio */}
          <div className="flex-1">
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Привет, я Катерина
            </h1>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              Старший продуктовый дизайнер с 7-летним опытом создания цифровых продуктов 
              и взаимодействия с кросс-функциональными командами.
            </p>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              Сильная экспертиза в UX и UI, опыт формирования продуктовых дорожных карт 
              и оптимизации рабочих процессов. В работе опираюсь на исследования и данные, 
              помогаю командам повышать вовлечённость пользователей и качество решений.
            </p>
            <p className="mb-8 text-sm text-muted-foreground">
              Санкт-Петербург, Россия
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild className="gap-2">
                <a href="/resume.pdf" download>
                  <Download className="h-4 w-4" />
                  Скачать резюме
                </a>
              </Button>
              <Button asChild variant="outline" className="gap-2 bg-transparent">
                <a href="mailto:Katuush@mail.ru">
                  <Mail className="h-4 w-4" />
                  Написать мне
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="mb-20">
        <h2 className="mb-8 text-2xl font-semibold tracking-tight text-foreground">
          Мой подход
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {approach.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border/40 bg-card p-6"
            >
              <h3 className="mb-3 font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-20">
        <h2 className="mb-8 text-2xl font-semibold tracking-tight text-foreground">
          Опыт работы
        </h2>
        <div className="space-y-8">
          {experience.map((job) => (
            <div
              key={`${job.company}-${job.role}`}
              className="border-l-2 border-border pl-6"
            >
              <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                <h3 className="font-semibold text-foreground">{job.role}</h3>
                <span className="hidden text-muted-foreground sm:inline">•</span>
                <span className="text-primary">{job.company}</span>
              </div>
              <p className="mb-2 text-sm text-muted-foreground">{job.period}</p>
              <p className="text-muted-foreground">{job.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-20">
        <h2 className="mb-8 text-2xl font-semibold tracking-tight text-foreground">
          Образование
        </h2>
        <div className="border-l-2 border-border pl-6">
          <h3 className="font-semibold text-foreground">Университет ИТМО, Санкт-Петербург</h3>
          <p className="mb-2 text-sm text-muted-foreground">2015 — 2019</p>
          <p className="text-muted-foreground">
            Диплом бакалавра по направлению «Компьютерная графика и дизайн»
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-20">
        <h2 className="mb-8 text-2xl font-semibold tracking-tight text-foreground">
          Навыки
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-xl border border-border/40 bg-card p-8 text-center">
        <h2 className="mb-3 text-xl font-semibold text-foreground">
          Хотите обсудить проект?
        </h2>
        <p className="mb-6 text-muted-foreground">
          Я всегда открыта для интересных предложений и сотрудничества
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild className="gap-2">
            <a href="mailto:Katuush@mail.ru">
              <Mail className="h-4 w-4" />
              Написать на почту
            </a>
          </Button>
          <Button asChild variant="outline" className="gap-2 bg-transparent">
            <Link href="/gallery">
              Посмотреть галерею
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
