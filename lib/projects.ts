import type { Locale } from "@/lib/i18n";

export interface Project {
  id: string;
  title: string;
  description: string;
  company: string;
  role: string;
  year: string;
  image: string;
  tags: string[];
  overview: string;
  problem: string;
  solution: string;
  process: {
    step: string;
    detailes: string[];
    image?: string;
    imageDescription?: string;
    showImage?: boolean;
    imageAspect?: string;
    video?: string;
    videoDescription?: string;
    videoAspect?: string;
    videoPlaybackRate?: number;
    videoFrameVariant?: "wheel";
  }[];
  result: string;
  resultMetrics?: { label: string; value: string }[];
  galleryImages: string[];
  figmaEmbedUrl?: string;
}

const projectsByLocale: Record<Locale, Project[]> = {
  ru: [
    {
      id: "atom-ecosystem",
      title: "Атом Маркет",
      description:
        "Маркетплейс цифрового контента и кастомизаций для электромобиля Атом",
      company: "АО КАМА",
      role: "UX Designer & PM",
      year: "2024–2025",
      image: "/projects/atom-cover.jpg",
      tags: ["In-car ecosystem", "Marketplace", "B2C & B2B"],
      overview:
        "Маркет — это встроенная в экосистему электромобиля Атом витрина цифрового контента. \n\n Каталог включает в себя: игры, приложения, сервисные контракты, аудио-световые кастомизации. \n\n Поставщиками контента выступают сторонние разработчикки, внутренние департаменты и крупные партнёры посредством разрвития и адаптации своих, уже существующих сервисов, специально для Atom OS.",
      problem:
        "Atom OS спроектирована на базе Android, но «из коробки» практически пустая. Отсутствие привычных цифровых сервисов значительно снижает привлекательность электромобиля и потенциал монетизации.",
      solution:
        "Наполнить каталог контентом, наиболее востребованным для целевого пользователя — интеграции с популярными сервисами навигации и развлечений. \n\n Предложить уникальный опыт взаимодействия с автомобилем — кастомизации подсветки, звука, тем интерфейса. \n\n Закрыть практические запросы будущих владельцев — сервисные контракты, ассистент помощи водителю, управление парком (для delivery, taxi и carsharing).",
      process: [
        {
          step: "Исследование и анализ",
          detailes: [
            "Поиск и изучение цифровых экосистем в автомобильной индустрии",
            "Анализ специфики владения электромобилем",
            "Оценка технических возможностей системы и сложности реализации разных типов контента",
            "Сегментация целевой аудитории и формирование портретов пользователей для приоритизации типов контента",
          ],
          image: "/projects/CJM.png",
          imageDescription: "Customer Journey Map (CJM) владельца Атом",
        },
        {
          step: "Формирование структуры",
          detailes: [
            "Определение ключевых функций сервиса",
            "Формирование UX-артефактов для всех тачпоинтов",
            "Проектирование пользовательских сценариев",
            "Прототипирование низкодетализированных макетов",
          ],
          image: "/projects/Navmodel.png",
          imageDescription: "Пример UX-артефакта — навигационная модель",
        },
        {
          step: "Коммуникация с поставщиками контента",
          detailes: [
            "Переговоры с внешними и внутренними партнёрами, фиксация PRD под каждую интеграцию",
            "Организация и проведение хакатона для студентов ИТМО, наполнение каталога инди-играми от победителей",
            "Формирование единой спецификации интеграции партнёрских сервисов",
          ],
          showImage: false,
        },
        {
          step: "Сборка web-версии MVP",
          detailes: [
            "Формирование Roadmap продукта",
            "Управление кросс-функциональной командой",
            "Подготовка версии к релизу, составление чеклиста и написание сценариев пользовательского тестирования",
          ],
          showImage: false,
        },
        {
          step: "Тестирование и проверка гипотез",
          detailes: [
            "Включение сценария приобретения контента в сквозное тестирование цифровой экосистемы Атом",
            "Карточная сортировка для подбора нативных названий для разных типов цифрового контента",
          ],
          showImage: false,
          video: "/projects/ScreenCast.mp4",
          videoAspect: "16/9",
          videoPlaybackRate: 1.35,
          videoDescription:
            "Прототип витрины Маркета на экране в руле электромобиля (SWP)*",
          videoFrameVariant: "wheel",
        },
        {
          step: "Запуск и оптимизация",
          detailes: [
            "Запуск первого внутреннего релиза",
            "Анализ обратной связи и наполнение бэклога задачами на улучшение UX",
            "Публикация маркетинговой информации в официальных каналах Атома",
            "Выход на продуктовый комитет с демонстрацией MVP",
          ],
          showImage: false,
        },
      ],
      result:
        "Запущен первый релиз и собрана обратная связь от пользователей. 100% респондентов корректно ответили на вопросы о назначении сервиса, установка приложений не вызывала затруднений. Выявлены ключевые UX-барьеры навигации и управления, задачи помещены в бэклог. \n\n По итогам продуктового комитета концепция каталога цифрового контента была упрощена, развитие маркетплейса отложено на неопределённый срок.",
      resultMetrics: [
        { label: "Индекс удовлетворенности", value: "97%" },
        { label: "Наполнение каталога", value: "22 приложения" },
        { label: "Срок поставки MVP", value: "6 месяцев" },
      ],
      galleryImages: [
        "/gallery/Atom%20Market/atom_1.jpg",
        "/gallery/Atom%20Market/atom_2.png",
      ],
    },
    {
      id: "KRU",
      title: "Кодовое название «КРУ»",
      description:
        "Система удалённого мониторинга воздействия буровзрывных работ на окружающую среду",
      company: "Geosemantica",
      role: "Design lead",
      year: "2023",
      image: "/projects/gis-cover.jpg",
      tags: ["GIS", "Redesign", "Critical Dashboard"],
      overview:
        "Система КРУ — цифровая платформа мониторинга устойчивости бортов и отвалов на угольных разрезах. Она агрегирует данные с геотехнических датчиков и отображает состояние участков добычи в реальном времени. Продукт используется диспетчерами для контроля отклонений и экстренного реагирования с целью предотвращения аварий и сохранения жизни людей и техники",
      problem:
        "Существующая система мониторинга имела устаревший и перегруженный визуальный интерфейс: слишком контрастные цвета, разрозненное отображение данных и высокая зависимость от экспертных знаний. Это замедляло восприятие информации диспетчерами и повышало риск ошибок в критических ситуациях.",
      solution:
        "Выполнить редизайн системы с фокусом на читаемость, иерархию данных и снижение когнитивной нагрузки. После успешного редизайна — масштабировать продукт до уровня гео-информационной платформы мониторинга.",
      process: [
        {
          step: "Анализ и исследование",
          detailes: [
            "Аудит текущего интерфейса и выявление узких мест",
            "Погружение в специфику индустрии, сбор требований и описание пользовательских сценариев",
          ],
          showImage: false,
        },
        {
          step: "Редизайн текущего решения",
          detailes: [
            "Подбор новой цветовой гаммы для визуализации критических отклонений",
            "Проектирование логики вложенности и иерархии данных",
            "Оптимизация расположения элементов интерфейса для быстрого восприятия информации",
          ],
          showImage: false,
        },
        {
          step: "Разработка обновлённой версии продукта",
          detailes: [
            "Расширение функционала: отображение показателей на карте с привязкой к высокодетализированным орто-снимкам участков",
            "Проработка сценариев быстрого реагирования на инциденты",
            "Проектирование системы ведения отчётности",
          ],
          showImage: false,
        },
        {
          step: "Презентация решения и защита перед стейкхолдерами",
          detailes: [
            "Сборка кликабельных прототипов",
            "Проведение пользовательских тестов на диспетчерах",
          ],
          showImage: false,
        },
        {
          step: "Поставка решения",
          detailes: [
            "Создание единой дизайн-системы",
            "Написание спецификаций для разработчиков",
            "Поддержка разработки и внедрения решения в промышленную эксплуатацию",
          ],
          showImage: false,
        },
        {
          step: "Дизайн-надзор",
          detailes: [
            "Дизайн-тестирование продакш-версии",
            "Отладка UX-решений в сотрудничестве с командой разработчиков",
          ],
          showImage: false,
        },
      ],
      result:
        "Интерфейс стал более читаемым и целостным, снизился порог входа для работы с системой. Расширение до картографической платформы позволило диспетчерам быстрее оценивать обстановку на местности и оперативно инициировать действия при критических отклонениях.",
      resultMetrics: [
        { label: "Реакция диспетчера на инцедент", value: "< 15 сек." },
        { label: "Охват участков добычи предприятия", value: "100%" },
        { label: "Срок реализации рабочего решения", value: "7 мес." },
      ],
      galleryImages: [
        "/gallery/KRU/kru_1.png",
        "/gallery/KRU/kru_2.jpg",
        "/gallery/KRU/kru_3.png",
        "/gallery/KRU/kru_4.png",
        "/gallery/KRU/kru_5.png",
        "/gallery/KRU/kru_6.png",
      ],
    },
    {
      id: "ux-framework",
      title: "Авторский UX Framework",
      description: "Единая стратегия проектирования цифровых продуктов",
      company: "АО КАМА",
      role: "UX Strategist",
      year: "2024-2025",
      image: "/projects/framework-cover.jpg",
      tags: ["Product vision", "Design thinking", "Methodology"],
      overview:
        "Авторский UX-фреймворк — это системный подход к проектированию пользовательского опыта для сложных высоконагруженных продуктов. Он объединяет этапы анализа, проектирования, валидации и передачи в разработку, обеспечивая единый язык для команды и прозрачность решений. Фреймворк позволяет стандартизировать UX-процессы, ускорить принятие решений и повысить качество интерфейсов в разных продуктах и тачпоинтах.",
      problem:
        "В проектах с высокой сложностью и разными стейкхолдерами отсутствовал единый подход к принятию UX-решений и их аргументации.",
      solution:
        "Создать универсальную стратегию проектирования, которая позволит систематизировать работу разных команд, стандартизировать подходы и ускорить процесс принятия решений.",
      process: [
        {
          step: "Изучение проблемы",
          detailes: [
            "Анализ существующих UX-процессов в ключевых проектах",
            "Сбор требований команд разработки и продуктовых менеджеров",
            "Исследование подходов к систематизации UX в индустрии для высоконагруженных и мультиканальных продуктов",
          ],
          showImage: false,
        },
        {
          step: "Проектирование решения",
          detailes: [
            "Создание структуры фреймворка: этапы исследования, проектирования, валидации и передачи в разработку",
            "Создание шаблонов и написание инструкций для каджого артефакта",
          ],
          showImage: false,
        },
        {
          step: "Распространение",
          detailes: [
            "Внедрение фреймворка в нескольких реальных проектах, тестирование на удобство применения для дизайнеров и стейкхолдеров.",
            "Организация и проведение межкомандных воркшопов",
            "Сбор обратной связи и корректировка элементов фреймворка",
          ],
          showImage: false,
        },
        {
          step: "Интеграция в процессы",
          detailes: [
            "Обучение команды и интеграция фреймворка в ежедневные процессы разработки",
            "Поддержка единых стандартов UX и контроль за соблюдением фреймворка в новых проектах.",
          ],
          showImage: false,
        },
      ],
      result:
        "Снижение хаотичности в процессе проектирования и повышение прозрачности UX-решений для команды и бизнеса.",
      resultMetrics: [
        { label: "Время согласования решений сокращено", value: ">25%" },
        { label: "Скорость разработки увеличена", value: "х2" },
        { label: "Охват проектов единой стратегией", value: "75%" },
      ],
      galleryImages: ["/projects/ux-0.png", "/projects/ux-1.png", "/projects/ux-2.png"],
      figmaEmbedUrl:
        "https://www.figma.com/design/cGQi3D54OOc73CEjVejvh7/UX-Framework-by-Peregudova?node-id=0-1&t=XrQpng5umZg37r9k-1",
    },
    {
      id: "pixorion-ai",
      title: "Pixorion.ai",
      description:
        "Анализ и генерация карточек товаров с помощью ИИ для продавцов на маркетплейсах",
      company: "Pixorion.ai",
      role: "Product designer",
      year: "2025-2026",
      image: "/projects/pixorion-cover.jpg",
      tags: ["Web", "AI-Platform", "B2B"],
      overview:
        "Сервис одного окна для продавцов, который помогает увеличить видимость и конверсию своих товаров за счет использования методологий и автоматизированной генерации контента. \n\n Сервис включает в себя: \n- Анализ карточек товаров на маркетплейсах Wildberries, OZON, Я.Маркет \n- Выявление проблем, рекомендацию по улучшению, создание PDF-отчёта \n- Генерация оптимизированных названий и описаний товаров \n- Интеграция по API с личными кабинетами продавцов для авто-обновления \n- Гибкий инстурмент генерации медиа-контента с движком Nano Banano Pro",
      problem:
        "Продавцы на маркетплейсах сталкиваются с проблемой низкой видимости и конверсии своих товаров из-за некачественно подготовленных карточек. Создание привлекательного дизайна и текстового контента отнимают много времени, специалисты этих областей дорогие.",
      solution:
        "Разработать сервис, который автоматизирует анализ и оптимизацию карточек товаров с помощью ИИ, предоставляя единоличным продавцам, креативным агенствам и крупным брендам  удобные инструменты для улучшения своих предложений и увеличения продаж.",
      process: [
        {
          step: "Анализ рынка и потребностей пользователей",
          detailes: [
            "Исследование проблем продавцов на маркетплейсах",
            "Анализ существующих решений и выявление пробелов в функционале",
          ],
          showImage: false,
        },
        {
          step: "Проектирование MVP",
          detailes: [
            "Определение ключевых функций для первой версии продукта",
            "Создание прототипов и проведение пользовательского тестирования",
          ],
          showImage: false,
        },
        {
          step: "Разработка и запуск продукта",
          detailes: [
            "Работа с командой разработчиков над реализацией MVP",
            "Проведение бета-тестирования с реальными пользователями и сбор обратной связи",
          ],
          showImage: false,
        },
        {
          step: "Оптимизация и масштабирование",
          detailes: [
            "Анализ данных использования и оптимизация UX",
            "Добавление новых функций на основе обратной связи пользователей",
            "Расширение интеграций с маркетплейсами",
          ],
          showImage: false,
        },
      ],
      result:
        "Запуск MVP и сбор положительной обратной связи от пользователей. Выявление ключевых проблем в UX и их оптимизация для повышения удобства использования. Увеличение видимости и конверсии товаров у первых пользователей сервиса.",
      galleryImages: [
        "/gallery/Pixorion/pix_1.png",
        "/gallery/Pixorion/pix_2.png",
        "/gallery/Pixorion/pix_3.png",
        "/gallery/Pixorion/pix_4.png",
        "/gallery/Pixorion/pix_5.png",
        "/gallery/Pixorion/pix_6.png",
        "/gallery/Pixorion/pix_7.png",
        "/gallery/Pixorion/pix_8.png",
      ],
    },
  ],
  en: [
    {
      id: "atom-ecosystem",
      title: "Atom Market",
      description:
        "A marketplace of digital content and customizations for the Atom EV",
      company: "KAMA JSC",
      role: "UX Designer & PM",
      year: "2024–2025",
      image: "/projects/atom-cover.jpg",
      tags: ["In-car ecosystem", "Marketplace", "B2C & B2B"],
      overview:
        "The Market is a digital storefront integrated into the Atom electric vehicle ecosystem. \n\n The catalog includes games, apps, service contracts, and audio-light customizations. \n\n Content comes from external developers, internal teams, and major partners who adapt their existing services for Atom OS.",
      problem:
        "Atom OS is built on Android, but out of the box it is almost empty. The lack of familiar digital services significantly reduces vehicle appeal and monetization potential.",
      solution:
        "Populate the catalog with content users need most, including integrations with popular navigation and entertainment services. \n\n Deliver unique in-car experiences through lighting, sound, and UI theme customizations. \n\n Cover practical owner needs with service contracts, a driver-assistance assistant, and fleet management tools for delivery, taxi, and car-sharing.",
      process: [
        {
          step: "Research and analysis",
          detailes: [
            "Reviewed digital ecosystems in the automotive industry",
            "Analyzed EV ownership specifics",
            "Evaluated technical constraints and implementation complexity for different content types",
            "Segmented target audience and defined user profiles to prioritize content categories",
          ],
          image: "/projects/CJM.png",
          imageDescription: "Atom owner Customer Journey Map (CJM)",
        },
        {
          step: "Information architecture",
          detailes: [
            "Defined key service capabilities",
            "Prepared UX artifacts for all touchpoints",
            "Designed end-to-end user flows",
            "Built low-fidelity prototypes",
          ],
          image: "/projects/Navmodel.png",
          imageDescription: "Example UX artifact: navigation model",
        },
        {
          step: "Content supplier communication",
          detailes: [
            "Negotiated with internal and external partners and documented PRDs for each integration",
            "Organized an ITMO student hackathon and added indie games by winning teams",
            "Defined a single specification for partner service integrations",
          ],
          showImage: false,
        },
        {
          step: "MVP web version",
          detailes: [
            "Built the product roadmap",
            "Led a cross-functional team",
            "Prepared release checklists and user testing scenarios",
          ],
          showImage: false,
        },
        {
          step: "Testing and validation",
          detailes: [
            "Included content purchase flow in end-to-end testing of the Atom digital ecosystem",
            "Ran card sorting to define native names for digital content categories",
          ],
          showImage: false,
          video: "/projects/ScreenCast.mp4",
          videoAspect: "16/9",
          videoPlaybackRate: 1.35,
          videoDescription:
            "Prototype of the Market storefront on the steering wheel screen (SWP)*",
          videoFrameVariant: "wheel",
        },
        {
          step: "Launch and optimization",
          detailes: [
            "Launched the first internal release",
            "Analyzed feedback and expanded UX improvement backlog",
            "Published marketing communication in official Atom channels",
            "Presented MVP at product committee",
          ],
          showImage: false,
        },
      ],
      result:
        "The first release was launched and user feedback was collected. 100% of respondents correctly understood the service purpose, and app installation was frictionless. Key UX navigation and control barriers were identified and added to the backlog. \n\n After product committee review, the digital catalog concept was simplified and marketplace development was postponed indefinitely.",
      resultMetrics: [
        { label: "Satisfaction index", value: "97%" },
        { label: "Catalog size", value: "22 apps" },
        { label: "MVP delivery", value: "6 months" },
      ],
      galleryImages: [
        "/gallery/Atom%20Market/atom_1.jpg",
        "/gallery/Atom%20Market/atom_2.png",
      ],
    },
    {
      id: "KRU",
      title: "Codename: KRU",
      description:
        "A remote monitoring system for the environmental impact of blasting operations",
      company: "Geosemantica",
      role: "Design Lead",
      year: "2023",
      image: "/projects/gis-cover.jpg",
      tags: ["GIS", "Redesign", "Critical Dashboard"],
      overview:
        "KRU is a digital monitoring platform for slope and dump stability at open-pit coal mines. It aggregates geotechnical sensor data and shows site status in real time. Dispatchers use it to monitor deviations and respond quickly to prevent incidents and protect people and equipment.",
      problem:
        "The existing monitoring system had an outdated and overloaded interface with overly harsh colors, fragmented data display, and high dependence on expert knowledge. This slowed dispatcher perception and increased error risk in critical situations.",
      solution:
        "Redesign the system with a focus on readability, data hierarchy, and lower cognitive load. Then scale it into a geospatial monitoring platform.",
      process: [
        {
          step: "Audit and discovery",
          detailes: [
            "Audited the current UI and identified bottlenecks",
            "Collected requirements and mapped dispatcher workflows",
          ],
          showImage: false,
        },
        {
          step: "Redesign",
          detailes: [
            "Updated color system for critical deviation visualization",
            "Reworked nesting logic and data hierarchy",
            "Optimized interface layout for faster perception",
          ],
          showImage: false,
        },
        {
          step: "Platform development",
          detailes: [
            "Extended capabilities with map-based indicators linked to high-resolution orthophotos",
            "Designed incident response workflows",
            "Designed reporting workflows",
          ],
          showImage: false,
        },
        {
          step: "Validation with stakeholders",
          detailes: [
            "Built clickable prototypes",
            "Ran user testing with dispatchers",
          ],
          showImage: false,
        },
        {
          step: "Delivery",
          detailes: [
            "Built a unified design system",
            "Prepared developer specs",
            "Supported implementation and rollout",
          ],
          showImage: false,
        },
        {
          step: "Design QA",
          detailes: [
            "Tested production UX quality",
            "Polished UX solutions together with engineering",
          ],
          showImage: false,
        },
      ],
      result:
        "The interface became more readable and cohesive, lowering onboarding effort. Transition to a map platform helped dispatchers assess field conditions faster and trigger response actions sooner in critical cases.",
      resultMetrics: [
        { label: "Dispatcher incident response", value: "< 15 sec" },
        { label: "Mine area coverage", value: "100%" },
        { label: "Time to first working version", value: "7 months" },
      ],
      galleryImages: [
        "/gallery/KRU/kru_1.png",
        "/gallery/KRU/kru_2.jpg",
        "/gallery/KRU/kru_3.png",
        "/gallery/KRU/kru_4.png",
        "/gallery/KRU/kru_5.png",
        "/gallery/KRU/kru_6.png",
      ],
    },
    {
      id: "ux-framework",
      title: "Custom UX Framework",
      description: "A unified strategy for digital product design",
      company: "KAMA JSC",
      role: "UX Strategist",
      year: "2024-2025",
      image: "/projects/framework-cover.jpg",
      tags: ["Product vision", "Design thinking", "Methodology"],
      overview:
        "This custom UX framework is a systematic approach to designing user experience for complex, high-load products. It combines analysis, design, validation, and handoff stages to create a shared language and transparent decision-making across the team. The framework standardizes UX processes, speeds up decisions, and improves interface quality across products and touchpoints.",
      problem:
        "In complex projects with multiple stakeholders, there was no unified approach to making and defending UX decisions.",
      solution:
        "Create a universal design strategy that structures cross-team work, standardizes practices, and accelerates decision-making.",
      process: [
        {
          step: "Problem study",
          detailes: [
            "Analyzed existing UX workflows across key projects",
            "Collected requirements from engineering and product teams",
            "Researched UX systematization approaches for high-load, multi-channel products",
          ],
          showImage: false,
        },
        {
          step: "Solution design",
          detailes: [
            "Designed framework structure: research, design, validation, handoff",
            "Created templates and instructions for each artifact",
          ],
          showImage: false,
        },
        {
          step: "Rollout",
          detailes: [
            "Implemented the framework in real projects and validated usability for designers and stakeholders",
            "Ran cross-team workshops",
            "Collected feedback and refined framework elements",
          ],
          showImage: false,
        },
        {
          step: "Process integration",
          detailes: [
            "Trained teams and integrated framework into daily delivery",
            "Maintained UX standards and governance for new projects",
          ],
          showImage: false,
        },
      ],
      result:
        "Reduced design chaos and improved UX decision transparency for both team and business.",
      resultMetrics: [
        { label: "Decision approval time reduced", value: ">25%" },
        { label: "Delivery speed increase", value: "x2" },
        { label: "Projects covered by one strategy", value: "75%" },
      ],
      galleryImages: ["/projects/ux-0.png", "/projects/ux-1.png", "/projects/ux-2.png"],
      figmaEmbedUrl:
        "https://www.figma.com/design/cGQi3D54OOc73CEjVejvh7/UX-Framework-by-Peregudova?node-id=0-1&t=XrQpng5umZg37r9k-1",
    },
    {
      id: "pixorion-ai",
      title: "Pixorion.ai",
      description:
        "AI-powered analysis and generation of product cards for marketplace sellers",
      company: "Pixorion.ai",
      role: "Product Designer",
      year: "2025-2026",
      image: "/projects/pixorion-cover.jpg",
      tags: ["Web", "AI Platform", "B2B"],
      overview:
        "A one-stop platform for sellers that improves product visibility and conversion through automated content generation and optimization. \n\n The platform includes: \n- Product card analysis for Wildberries, OZON, and Yandex Market \n- Issue detection, improvement recommendations, and PDF reports \n- Optimized title and description generation \n- API integrations with seller accounts for automatic updates \n- A flexible media generation toolkit powered by Nano Banano Pro",
      problem:
        "Marketplace sellers often struggle with low visibility and conversion due to poorly prepared product cards. Creating strong visual and text content takes time, and specialists are expensive.",
      solution:
        "Build a service that automates analysis and optimization of product cards using AI, giving solo sellers, creative agencies, and enterprise brands practical tools to improve listing quality and grow sales.",
      process: [
        {
          step: "Market and user research",
          detailes: [
            "Studied key pain points for marketplace sellers",
            "Analyzed existing solutions and identified functional gaps",
          ],
          showImage: false,
        },
        {
          step: "MVP design",
          detailes: [
            "Defined first-release core capabilities",
            "Built prototypes and ran user testing",
          ],
          showImage: false,
        },
        {
          step: "Build and launch",
          detailes: [
            "Worked with engineering on MVP implementation",
            "Ran beta testing with real users and collected feedback",
          ],
          showImage: false,
        },
        {
          step: "Optimization and scaling",
          detailes: [
            "Analyzed usage data and optimized UX",
            "Added features based on feedback",
            "Expanded marketplace integrations",
          ],
          showImage: false,
        },
      ],
      result:
        "MVP launch with positive early feedback. Key UX issues were identified and improved, increasing usability. Early adopters reported better listing visibility and conversion.",
      galleryImages: [
        "/gallery/Pixorion/pix_1.png",
        "/gallery/Pixorion/pix_2.png",
        "/gallery/Pixorion/pix_3.png",
        "/gallery/Pixorion/pix_4.png",
        "/gallery/Pixorion/pix_5.png",
        "/gallery/Pixorion/pix_6.png",
        "/gallery/Pixorion/pix_7.png",
        "/gallery/Pixorion/pix_8.png",
      ],
    },
  ],
};

export function getProjects(locale: Locale): Project[] {
  return projectsByLocale[locale];
}

export function getProjectById(id: string, locale: Locale): Project | undefined {
  return getProjects(locale).find((project) => project.id === id);
}
