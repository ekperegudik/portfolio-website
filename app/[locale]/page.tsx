import { getProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { AnimatedHeadline } from "@/components/AnimatedHeadline";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import Link from "next/link";
import { FaTelegramPlane, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { isLocale, locales } from "@/lib/i18n";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {
      title: "Not found",
    };
  }

  const isEn = locale === "en";

  return {
    title: isEn
      ? "Catherine Peregudova — Product Designer"
      : "Катерина Перегудова — Дизайнер продукта",
    description: isEn
      ? "Product design portfolio with 7 years of building digital products: UX/UI, design systems, and research."
      : "Портфолио продуктового дизайнера с 7-летним опытом создания цифровых продуктов. UX/UI экспертиза, дизайн-системы, исследования.",
  };
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const isEn = locale === "en";
  const projects = getProjects(locale);
  const resumeHref = isEn ? "/resume-peregudova-en.pdf" : "/resume-peregudova.pdf";
  const resumeFilename = isEn ? "resume-peregudova-en.pdf" : "resume-peregudova.pdf";

  return (
    <div>
      <section className="relative flex min-h-[calc(75svh-4rem)] items-center py-12 sm:py-16">
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <RevealOnScroll delay={100}>
              <p className="mb-4 inline-flex rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground backdrop-blur">
                {isEn ? "UX Designer & Product Manager" : "UX Designer & Product manager"}
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={140}>
              <AnimatedHeadline
                ariaLabel={
                  isEn
                    ? "Complex interfaces, intuitive interaction"
                    : "Сложные интерфейсы, интуитивное взаимодействие"
                }
                className="mb-4 text-4xl sm:text-5xl lg:text-6xl"
                segments={
                  isEn
                    ? [
                        { text: "Complex interfaces, " },
                        {
                          text: "intuitive interaction",
                          className: "text-primary",
                        },
                      ]
                    : [
                        { text: "Сложные интерфейсы, " },
                        {
                          text: "интуитивное взаимодействие",
                          className: "text-primary",
                        },
                      ]
                }
              />
            </RevealOnScroll>
            <RevealOnScroll delay={320}>
              <p className="mb-8 text-lg leading-[1.8rem] text-muted-foreground sm:text-xl">
                {isEn
                  ? "Analytical thinking, curiosity, and 7 years in product teams. Experience in large companies and startups. I design enterprise platforms, GIS interfaces, in-car products, and AI systems."
                  : "Аналитическое мышление, пытливость ума и 7 лет в продуктовой среде. Опыт в крупных компаниях и стартапах. Проектирование Enterprise-платформ, GIS-интерфейсов, in-car и AI систем."}
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={560}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="gap-2">
                  <a href={resumeHref} download={resumeFilename}>
                    <Download className="h-4 w-4" />
                    {isEn ? "Download CV" : "Скачать резюме"}
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
                  <Link href={`/${locale}/about`}>
                    {isEn ? "About" : "Обо мне"}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <RevealOnScroll delay={30}>
              <h2 className="mb-2 text-2xl font-semibold tracking-tight text-foreground">
                {isEn ? "My work" : "Мои работы"}
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={70}>
              <p className="text-muted-foreground">
                {isEn
                  ? "About the projects in detail"
                  : "Детальное описание продуктовых кейсов"}
              </p>
            </RevealOnScroll>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project, index) => (
            <RevealOnScroll key={project.id} delay={120 + index * 40}>
              <ProjectCard project={project} locale={locale} />
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <RevealOnScroll delay={160}>
          <section className="space-y-4 px-2 text-center">
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              {isEn ? "Let’s stay in touch" : "Будем на связи?"}
            </h2>
            <p className="mb-6 text-muted-foreground">
              {isEn ? "I am open to collaboration" : "Я всегда открыта для сотрудничества"}
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
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
          </section>
        </RevealOnScroll>
      </div>
    </div>
  );
}
