import { ImageWithSkeleton } from "@/components/ui/ImageWithSkeleton";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import type { Metadata } from "next";
import { FaTelegramPlane, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { isLocale, locales } from "@/lib/i18n";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const skills = [
  "Figma",
  "UX Research",
  "User testing",
  "Design systems",
  "Prototyping",
  "Interaction design",
  "AI-assisted design",
  "Design strategy",
  "Leading cross-functional teams",
  "and more...",
];

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return { title: "Not found" };
  }

  const isEn = locale === "en";

  return {
    title: isEn ? "About — Catherine Peregudova" : "Обо мне — Катерина Перегудова",
    description: isEn
      ? "UX/UI and product designer for complex interfaces."
      : "Я дизайнер UX, UI, продуктов, высоконагруженных интерфейсов.",
  };
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const isEn = locale === "en";

  const approach = isEn
    ? [
        {
          title: "Systems thinking",
          description:
            "I rely on CJM, JTBD, and information/functional/navigation models to reduce entropy and move confidently from a blank page.",
        },
        {
          title: "Attention to detail",
          description:
            "User trust depends not only on flow usability but also on clean visual quality. Small details shape the whole experience.",
        },
        {
          title: "Intuitive design",
          description:
            "Great design stays invisible. If a user notices the designer first, the product still has room to improve.",
        },
      ]
    : [
        {
          title: "Системный подход",
          description:
            "Победить энтропию и боязнь белого листа мне помогают CJM, JTBD, информационные, функциональные и навигационные модели.",
        },
        {
          title: "Внимание к деталям",
          description:
            "На доверие пользователей влияет не только удобство сценариев, но и чистый, аккуратный визуал. Мелочи создают общее впечатление.",
        },
        {
          title: "Интуитивный дизайн",
          description:
            "Превосходный дизайн остаётся незамеченным. Если пользователь задумался о работе дизайнера, значит есть к чему стремиться.",
        },
      ];

  const experience = isEn
    ? [
        {
          role: "Senior UX Designer & Product Manager, Atom Market",
          companyName: "ATOM",
          companyUrl: "https://atom.auto/",
          period: "January 2024 — September 2025",
          description:
            "Designed mobile app logic for remote EV control. Led design of a digital content marketplace across web, mobile, SWP, HUD, and voice assistant touchpoints. Coordinated a cross-functional team.",
        },
        {
          role: "Head of Design",
          companyName: "Geosemantica",
          companyUrl: "https://geosemantica.ru/",
          period: "July 2023 — December 2023",
          description:
            "Initiated and delivered a major redesign of an industrial geotechnical monitoring platform. Designed GIS interfaces focused on operational safety and built a specialized component library.",
        },
        {
          role: "Lead UX/UI Designer",
          companyName: "Nedra Digital",
          companyUrl: "https://nedra.digital/",
          period: "March 2021 — July 2023",
          description:
            "Designed interfaces for multifunctional data and KPI monitoring platforms. Standardized enterprise UI patterns.",
        },
        {
          role: "UX/UI Designer",
          companyName: "Gazprom Neft — Digital Solutions",
          companyUrl: "https://ds.gazprom-neft.ru/",
          period: "September 2019 — March 2021",
          description:
            "Designed internal enterprise products and introduced improved design methodologies.",
        },
      ]
    : [
        {
          role: "Старший UX дизайнер & Менеджер продукта Atom Market",
          companyName: "ATOM",
          companyUrl: "https://atom.auto/",
          period: "Январь 2024 — Сентябрь 2025",
          description:
            "Проектирование логики мобильного приложения для дистанционного управления электромобилем АТОМ. Разработка маркетплейса цифрового контента, доступного с нескольких тачпоинтов: web, mobile, SWP, HUD, голосовой ассистент. Координация кросс-функциональной команды.",
        },
        {
          role: "Руководитель отдела дизайна",
          companyName: "Геосемантика",
          companyUrl: "https://geosemantica.ru/",
          period: "Июль 2023 — Декабрь 2023",
          description:
            "Инициация и осуществление масштабного редизайна платформы мониторинга устойчивости горных пород для Кузбассразрезуголь. Проектирование GIS-интерфейсов с фокусом на промышленную безопасность. Создание и поддержка специализированной библиотеки компонентов.",
        },
        {
          role: "Ведущий дизайнер UX/UI",
          companyName: "Nedra Digital",
          companyUrl: "https://nedra.digital/",
          period: "Март 2021 — Июль 2023",
          description:
            "Проектирование интерфейсов для многофункциональных платформ: аналитика данных, мониторинг KPI. Стандартизация паттернов корпоративного интерфейса.",
        },
        {
          role: "Дизайнер UX/UI",
          companyName: "Газпромнефть — Цифровые решения",
          companyUrl: "https://ds.gazprom-neft.ru/",
          period: "Сентябрь 2019 — Март 2021",
          description:
            "Разработка интерфейсов внутренних корпоративных продуктов. Внедрение обновлённых методологий проектирования.",
        },
      ];

  return (
    <div>
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
            <RevealOnScroll delay={120}>
              <div className="relative mx-auto aspect-[3/4] w-[min(78vw,360px)] shrink-0 overflow-hidden rounded-2xl lg:mx-0 lg:w-[340px]">
                <ImageWithSkeleton
                  src="/about/ava.png"
                  alt={isEn ? "Catherine Peregudova" : "Катерина Перегудова"}
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 340px, 78vw"
                  skeletonClassName="bg-white/10"
                  priority
                />
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={240} className="flex-1">
              <h1 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {isEn ? "Hello!" : "Приветствую!"}
              </h1>
              <p className="mb-4 leading-[1.4rem] text-muted-foreground">
                {isEn
                  ? "I am a UX/UI and product designer focused on complex interfaces. I like bringing structure and clarity to complex systems."
                  : "Я дизайнер UX, UI, продуктов, высоконагруженных интерфейсов, а также ящичка со специями на своей кухне. Структурирую и упорядочиваю всё, до чего могу дотянуться."}
              </p>
              <p className="mb-8 leading-[1.4rem] text-muted-foreground">
                {isEn
                  ? "Over the past 7 years, I have worked in oil and gas, coal mining, GIS systems, and travel tech. I designed dashboards for top management at Gazprom Neft and interfaces for the Atom EV. I enjoy complex challenges and practical solutions."
                  : "За 7 лет профессионального опыта дотянулась до нефтегазовой и угольной промышленностей, GIS-систем и travel-tech, проектировала дашборды для ТОП-менеджеров ПАО Газпромнефть и интерфейсы для электромобиля АТОМ. Люблю сложные задачи и нетривиальные решения."}
              </p>
              <div className="flex flex-row flex-wrap items-center gap-3">
                <a
                  href="https://t.me/ekperegudova"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-foreground transition hover:bg-white/10"
                >
                  <FaTelegramPlane className="h-4 w-4" />
                  Telegram
                </a>

                <a
                  href="https://linkedin.com/in/ekperegudova"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-foreground transition hover:bg-white/10"
                >
                  <FaLinkedin className="h-4 w-4" />
                  LinkedIn
                </a>

                <a
                  href="mailto:Katuush@mail.ru"
                  className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-foreground transition hover:bg-white/10"
                >
                  <MdEmail className="h-4 w-4" />
                  Email
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <section className="mb-20">
          <RevealOnScroll delay={120}>
            <h2 className="mb-8 text-2xl font-semibold tracking-tight text-foreground">
              {isEn ? "Design principles" : "Принципы проектирования"}
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
              {isEn ? "Work experience" : "Опыт работы"}
            </h2>
          </RevealOnScroll>
          <div className="space-y-12">
            {experience.map((job, index) => (
              <RevealOnScroll key={`${job.companyName}-${job.role}`} delay={220 + index * 140}>
                <div className="border-l border-white/10 pl-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                    <h3 className="font-semibold text-foreground">{job.role}</h3>
                    <span className="hidden text-muted-foreground sm:inline">•</span>
                    <a href={job.companyUrl} className="text-primary hover:underline">
                      {job.companyName}
                    </a>
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
              {isEn ? "Education" : "Образование"}
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={240}>
            <div className="border-l border-white/10 pl-6">
              <h3 className="font-semibold text-foreground">
                {isEn
                  ? "ITMO University, Computer Technologies in Design"
                  : "Университет ИТМО, Компьютерные технологии в дизайне"}
              </h3>
              <p className="mb-2 text-sm text-muted-foreground">
                {isEn ? "2015 — 2019, Saint Petersburg" : "2015 — 2019, Санкт-Петербург"}
              </p>
              <p className="text-muted-foreground">
                {isEn
                  ? "As my diploma project, I created an "
                  : "В качестве дипломного проекта разработала "}
                <a
                  href="https://ekperegudova.github.io/nordicdesign.github.io/index.html"
                  className="text-primary hover:underline"
                >
                  {isEn ? "online museum" : "онлайн-музей"}
                </a>{" "}
                {isEn
                  ? "about Scandinavian design history with interactive 3D models of iconic objects."
                  : "по истории скандинавского дизайна с интерактивными 3D-моделями легендарных изделий."}
              </p>
            </div>
          </RevealOnScroll>
        </section>

        <section className="mb-20">
          <RevealOnScroll delay={120}>
            <h2 className="mb-8 text-2xl font-semibold tracking-tight text-foreground">
              {isEn ? "Skills" : "Навыки"}
            </h2>
          </RevealOnScroll>
          <div className="flex flex-wrap justify-center gap-2 sm:justify-start sm:gap-2">
            {skills.map((skill, index) => (
              <RevealOnScroll key={skill} delay={220 + index * 60} className="inline-flex">
                <span className="rounded-full border border-white/0 bg-white/6 px-4 py-2 text-sm font-medium text-secondary-foreground">
                  {skill}
                </span>
              </RevealOnScroll>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
