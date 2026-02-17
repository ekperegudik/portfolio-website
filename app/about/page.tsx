import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, ArrowRight } from "lucide-react"
import { RevealOnScroll } from "@/components/RevealOnScroll"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Обо мне — Катерина Перегудова",
  description: "Я дизайнер UX, UI, продуктов, высоконагруженных интерфейсов, а также ящичка со специями на своей кухне. Структурирую и упорядочиваю всё, до чего могу дотянуться.",
}

const experience = [
  {
    role: "Старший UX дизайнер & Менеджер продукта Atom Market",
    company: <a href="https://atom.auto/" className="text-primary hover:underline">ATOM</a>,
    period: "Январь 2024 — Сентябрь 2025",
    description: "Проектирование логики мобильного приложения для дистанционного управления электромобилем АТОМ. Разработка маркетплейса цифрового контента, доступного с нескольких тачпоинтов: web, mobile, SWP, HUD, голосовой ассистент. Координация кросс-функциональной команды.",
  },
  {
    role: "Руководитель отдела дизайна",
    company: <a href="https://geosemantica.ru/" className="text-primary hover:underline">Геосемантика</a>,
    period: "Июль 2023 — Декабрь 2023",
    description: "Инициация и осуществление масштабного редизайна платформы мониторинга устойчивости горных пород для Кузбассразрезуголь. Проектирование GIS-интерфейсов с фокусом на промышленную безопасность. Создание и поддержка специализированной библиотеки компонентов.",
  },
  {
    role: "Ведущий дизайнер UX/UI",
    company: <a href="https://nedra.digital/" className="text-primary hover:underline">Nedra Digital</a>,
    period: "Март 2021 — Июль 2023",
    description: "Проектирование интерфейсов для многофункциональных платформ: аналитика данных, мониторинг KPI. Стандартизация паттернов корпоративного интерфейса.",
  },
  {
    role: "Дизайнер UX/UI",
    company: <a href="https://ds.gazprom-neft.ru/" className="text-primary hover:underline">Газпромнефть — Цифровые решения</a>,
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
    title: "Структурность",
    description: "Победить энтропию и боязнь белого листа мне помогают CJM, JTBD, информационные, функциональные и навигационные модели.",
  },
  {
    title: "Внимательность",
    description: "На доверие пользователей влияет не только удобство сценариев, но и чистый, аккуратный визуал. Мелочи создают общее впечатление.",
  },
  {
    title: "Интуитивность",
    description: "Превосходный дизайн остаётся незамеченным. Если пользователь задумался о работе дизайнера, значит есть к чему стремиться.",
  },
]

export default function AboutPage() {
  return (
    <div>
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
            <RevealOnScroll delay={120}>
              <div className="relative mx-auto w-[min(78vw,360px)] shrink-0 overflow-hidden rounded-2xl aspect-[3/4] lg:mx-0 lg:w-[340px]">
                <Image
                  src="/about/profile1.png"
                  alt="Катерина Перегудова"
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 340px, 78vw"
                  priority
                />
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={240} className="flex-1">
              <h1 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Приветствую!
              </h1>
              <p className="mb-4 leading-[1.4rem] text-muted-foreground">
                Я дизайнер UX, UI, продуктов, высоконагруженных интерфейсов, а также ящичка со специями на своей кухне. Структурирую и упорядочиваю всё, до чего могу дотянуться.
              </p>
              <p className="mb-8 leading-[1.4rem] text-muted-foreground">
                За 7 лет профессионального опыта "дотянулась" до нефтегазовой и угольной промышленностей, GIS-систем и travel-tech, проектировала дашборды для ТОП-менеджеров Газпромнефти и интерфейсы для электромобиля АТОМ. Люблю сложные задачи и нетривиальные решения.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="outline" className="gap-2 bg-transparent">
                  <a href="mailto:Katuush@mail.ru">
                    <Mail className="h-4 w-4" />
                    Написать мне
                  </a>
                </Button>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <section className="mb-20">
          <RevealOnScroll delay={120}>
            <h2 className="mb-8 text-2xl font-semibold tracking-tight text-foreground">
              Мой подход
            </h2>
          </RevealOnScroll>
          <div className="grid gap-6 sm:grid-cols-3">
            {approach.map((item, index) => (
              <RevealOnScroll key={item.title} delay={220 + index * 120}>
                <div className="rounded-xl border border-white/0 bg-white/2 p-6 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_10px_30px_rgba(0,0,0,0.10)]">
                  <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-[1.4rem] text-muted-foreground">{item.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <RevealOnScroll delay={120}>
            <h2 className="mb-8 text-2xl font-semibold tracking-tight text-foreground">
              Опыт работы
            </h2>
          </RevealOnScroll>
          <div className="space-y-12">
            {experience.map((job, index) => (
              <RevealOnScroll key={`${job.company}-${job.role}`} delay={220 + index * 140}>
                <div className="border-l border-white/10 pl-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                    <h3 className="font-semibold text-foreground">{job.role}</h3>
                    <span className="hidden text-muted-foreground sm:inline">•</span>
                    <span className="text-primary">{job.company}</span>
                  </div>
                  <p className="mb-4 mt-2 text-sm text-muted-foreground">{job.period}</p>
                  <p className="text-muted-foreground">{job.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <RevealOnScroll delay={120}>
            <h2 className="mb-8 text-2xl font-semibold tracking-tight text-foreground">
              Образование
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={240}>
            <div className="border-l border-white/10 pl-6">
              <h3 className="font-semibold text-foreground">Университет ИТМО, Компьютерные технологии в дизайне</h3>
              <p className="mb-2 text-sm text-muted-foreground">2015 — 2019, Санкт-Петербург</p>
              <p className="text-muted-foreground">
                В качестве дипломного проекта разработала <a href="https://ekperegudova.github.io/nordicdesign.github.io/index.html" className="text-primary hover:underline">онлайн-музей</a> по истории скандинавского дизайна с интерактивными 3D-моделями легендарных изделий.
              </p>
            </div>
          </RevealOnScroll>
        </section>

        <section className="mb-20">
          <RevealOnScroll delay={120}>
            <h2 className="mb-8 text-2xl font-semibold tracking-tight text-foreground">
              Навыки
            </h2>
          </RevealOnScroll>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <RevealOnScroll key={skill} delay={220 + index * 60}>
                <span className="rounded-full border border-white/0 bg-white/6 px-4 py-2 text-sm font-medium text-secondary-foreground">
                  {skill}
                </span>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        <RevealOnScroll delay={160}>
          <section className="rounded-xl border border-white/0 bg-white/2 p-8 text-center backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_10px_30px_rgba(0,0,0,0.10)]">
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              Будем на связи?
            </h2>
            <p className="mb-6 text-muted-foreground">
              Я всегда открыта для сотрудничества
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
        </RevealOnScroll>
      </div>
    </div>
  )
}
