import type { Messages } from "./schema";

const messages = {
  header: {
    about: "Sobre mí",
    projects: "Proyectos",
    journal: "Blog",
    language: "Idioma",
    tagline: "Desarrollador full-stack y creador open source.",
  },
  home: {
    heroTitle:
      "Desarrollador full-stack: construyo cosas y publico en open source lo que merece quedarse.",
    heroDescription:
      "Este es el sitio personal de akazwz. Aquí reúno proyectos open source como smail y hostc, experimentos con IA y un diario de desarrollo en curso.",
    aboutCta: "Sobre mí",
    journalCta: "Leer el blog",
    focusBadge: "Enfoque",
    focusTitle: "Ingeniería, open source y exploración del edge.",
    latestBadge: "Escritura reciente",
    latestTitle: "Notas recientes sobre software, diseño y construcción con cuidado.",
    allPostsLabel: "Ver el blog",
    minuteReadLabel: "min de lectura",
    sections: [
      {
        title: "Open Source",
        summary:
          "Construyo y mantengo herramientas para la comunidad, desde servicios de correo temporal como smail hasta túneles edge como hostc.",
      },
      {
        title: "Full Stack y Edge",
        summary:
          "Creo aplicaciones web modernas con React y TypeScript, y las despliego globalmente con Cloudflare Workers.",
      },
      {
        title: "IA y Sistemas",
        summary:
          "Experimento con modelos de IA locales, sistemas backend prácticos y aplicaciones de escritorio multiplataforma.",
      },
    ],
  },
  about: {
    badge: "Sobre akazwz",
    title:
      "Construyo herramientas para desarrolladores, productos edge-native y software práctico que sigue siendo útil con el tiempo.",
    description:
      "La mayor parte de mi trabajo se mueve entre tooling open source, infraestructura web moderna y pequeños productos que resuelven problemas reales de workflow. Este sitio reúne esos proyectos, textos e ideas.",
    journalCta: "Leer el blog",
    homeCta: "Volver al inicio",
    highlightBadge: "Contexto de trabajo",
    highlightTitle:
      "El hilo conductor es simple: construir cosas útiles, mantener la pila entendible y compartir lo que realmente vale la pena reutilizar.",
    pointLabel: "Punto",
    sections: [
      {
        title: "Qué construyo",
        description:
          "Suelo trabajar en productos con sabor a infraestructura, herramientas para desarrolladores y aplicaciones full-stack que puedan salir rápido sin volverse frágiles.",
      },
      {
        title: "Foco actual",
        description:
          "Ahora mismo dedico la mayor parte de mi tiempo a Cloudflare Workers, servicios en Go, aplicaciones con React y TypeScript, workflows asistidos por IA e investigación sobre DNS, CDN y edge delivery.",
      },
      {
        title: "Cómo comparto",
        description:
          "La mayor parte del código va a GitHub. Las ideas más largas van al blog. Si quieres hablar de producto, tooling o sistemas edge, X suele ser la vía más rápida.",
      },
    ],
    points: [
      "Construyo y mantengo smail, un producto de correo temporal pensado para sentirse rápido, desechable y confiable.",
      "Creé hostc para hacer que los túneles de localhost sean más simples y más naturales dentro de un flujo edge-native.",
      "Sigo escribiendo servicios en Go y dedicando tiempo a investigar DNS, CDN y edge delivery, junto con IA local y productos de escritorio con Tauri.",
      "Uso este sitio como lugar para publicar proyectos, notas técnicas y la forma de pensar detrás de esos productos.",
    ],
  },
  projects: {
    badge: "Trabajo seleccionado",
    title: "Cosas que he construido, escrito o explorado a lo largo de los años.",
    description:
      "Una colección de herramientas open source, proyectos paralelos y experimentos. Algunos ya están en marcha, otros siguen evolucionando y otros nacieron para aprender algo nuevo.",
    archiveBadge: "Proyectos",
    archiveTitle: "Un archivo de lo que he creado.",
    entries: [
      {
        name: "smail",
        description:
          "Servicio de correo temporal que ofrece bandejas desechables para privacidad, pruebas y flujos rápidos.",
        link: "https://github.com/akazwz/smail",
        year: "2024",
        tags: ["TypeScript", "Fullstack", "900+ Stars"],
      },
      {
        name: "hostc",
        description:
          "De localhost al edge. Túneles edge seguros, rápidos y sin configuración, impulsados por Cloudflare Workers.",
        link: "https://github.com/akazwz/hostc",
        year: "2024",
        tags: ["TypeScript", "Cloudflare Workers", "CLI"],
      },
      {
        name: "openchat-monorepo",
        description:
          "Una aplicación moderna de chatbot con IA full-stack construida con React, Cloudflare Workers, Connect RPC y Tauri.",
        link: "https://github.com/akazwz/openchat-monorepo",
        year: "2023",
        tags: ["React", "Tauri", "RPC", "Cloudflare"],
      },
      {
        name: "workersai",
        description:
          "Plataforma full-stack de chat con IA construida sobre Cloudflare con Workers, Durable Objects, KV y AI Gateway.",
        link: "https://github.com/akazwz/workersai",
        year: "2023",
        tags: ["TypeScript", "AI", "Cloudflare Workers"],
      },
      {
        name: "openchat-go",
        description:
          "Un ejemplo pequeño y accesible de backend para aprender Golang mientras integras capacidades de IA.",
        link: "https://github.com/akazwz/openchat-go",
        year: "2023",
        tags: ["Go", "AI", "Backend"],
      },
      {
        name: "mlx-live",
        description:
          "Un ejemplo de asistente de voz local en tiempo real construido con MLX para explorar IA en el dispositivo sobre Apple Silicon.",
        link: "https://github.com/akazwz/mlx-live",
        year: "2024",
        tags: ["MLX", "AI", "Voice"],
      },
    ],
  },
  blogIndex: {
    badge: "Blog",
    title: "Notas y registro",
    description: "Notas sobre software, diseño y la idea de construir con más criterio.",
    latestBadge: "Último",
    featuredTitle: "Artículo destacado",
    moreBadge: "Más",
    previousEntriesTitle: "Entradas anteriores",
    writtenBy: "Por",
    minuteReadLabel: "min de lectura",
    minuteShortLabel: "min",
    footer: "Escrito despacio y con cuidado.",
    emptyTitle: "Todavía no hay artículos",
    emptyDescription: "La escritura llegará poco a poco.",
  },
  blogPost: {
    backToJournal: "← Volver al blog",
    minuteReadLabel: "min de lectura",
  },
  error: {
    message: "Vaya",
    unexpected: "Se produjo un error inesperado.",
    errorLabel: "Error",
    notFoundDetails: "No se pudo encontrar la página solicitada.",
  },
  meta: {
    home: {
      title: "Inicio | akazwz",
      description:
        "Sitio personal de akazwz sobre open source, experimentos técnicos y escritura continua.",
    },
    about: {
      title: "Sobre mí | akazwz",
      description: "Sobre akazwz, las áreas de foco de este sitio y el trabajo reunido aquí.",
    },
    projects: {
      title: "Proyectos | akazwz",
      description:
        "Productos, herramientas, experimentos y proyectos open source creados por akazwz.",
    },
    blog: {
      title: "Blog | akazwz",
      description: "Notas sobre software, diseño y una manera más contenida de construir cosas.",
    },
    blogPostNotFoundTitle: "Artículo no encontrado | akazwz",
  },
} as const satisfies Messages;

export default messages;
