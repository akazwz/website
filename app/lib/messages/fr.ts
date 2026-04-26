import type { Messages } from "./schema";

const messages = {
  header: {
    about: "À propos",
    projects: "Projets",
    journal: "Journal",
    language: "Langue",
    tagline: "Développeur full-stack et créateur open source.",
  },
  home: {
    heroTitle:
      "Développeur full-stack, je construis sans cesse et je publie en open source ce qui mérite de durer.",
    heroDescription:
      "Bienvenue sur le site personnel de akazwz. J’y rassemble des projets open source comme smail et hostc, des expérimentations en IA et un journal de développement en continu.",
    aboutCta: "À propos",
    journalCta: "Lire le journal",
    focusBadge: "Axes",
    focusTitle: "Ingénierie, open source et exploration de l’edge.",
    latestBadge: "Derniers écrits",
    latestTitle: "Notes récentes sur le logiciel, le design et une construction plus attentive.",
    allPostsLabel: "Voir tous les articles",
    minuteReadLabel: "min de lecture",
    sections: [
      {
        title: "Open source",
        summary:
          "Je conçois et maintiens des outils pour la communauté, des services d’e-mail temporaire comme smail aux tunnels edge comme hostc.",
      },
      {
        title: "Full-stack et edge",
        summary:
          "Je crée des applications web modernes avec React et TypeScript, puis je les déploie globalement avec Cloudflare Workers.",
      },
      {
        title: "IA et systèmes",
        summary:
          "J’expérimente avec des modèles d’IA locaux, des backends pragmatiques et des applications desktop multiplateformes.",
      },
    ],
  },
  about: {
    badge: "À propos de akazwz",
    title:
      "Je construis des outils pour développeurs, des produits edge-native et des logiciels pratiques qui restent utiles dans la durée.",
    description:
      "Mon travail se situe surtout entre le tooling open source, l’infrastructure web moderne et de petits produits conçus pour résoudre de vrais problèmes de workflow. Ce site rassemble ces projets, ces textes et les idées qui les relient.",
    journalCta: "Lire le journal",
    homeCta: "Retour à l’accueil",
    highlightBadge: "Contexte de travail",
    highlightTitle:
      "Le fil conducteur est simple : construire des choses utiles, garder une stack compréhensible et partager ce qui mérite vraiment d’être réutilisé.",
    pointLabel: "Point",
    sections: [
      {
        title: "Ce que je construis",
        description:
          "Je travaille le plus souvent sur des produits proches de l’infrastructure, des outils pour développeurs et des applications full-stack capables de sortir vite sans devenir fragiles.",
      },
      {
        title: "Focales actuelles",
        description:
          "En ce moment, je passe surtout du temps sur Cloudflare Workers, des services en Go, des applications React et TypeScript, des workflows assistés par l’IA et des recherches autour du DNS, des CDN et de la distribution edge.",
      },
      {
        title: "Comment je partage",
        description:
          "La majorité du code va sur GitHub. Les réflexions plus longues vont dans le journal. Si vous voulez parler produit, tooling ou systèmes edge, X reste le moyen le plus rapide.",
      },
    ],
    points: [
      "Je construis et maintiens smail, un produit d’e-mail temporaire pensé pour être rapide, jetable et digne de confiance.",
      "J’ai créé hostc pour rendre les tunnels localhost plus simples et plus naturels dans un workflow edge-native.",
      "Je continue d’écrire des services en Go et de consacrer du temps à la recherche sur le DNS, les CDN et la distribution edge, tout en explorant l’IA locale et les produits desktop avec Tauri.",
      "J’utilise ce site comme espace pour publier des projets, des notes techniques et la manière dont ces produits prennent forme.",
    ],
  },
  projects: {
    badge: "Travaux choisis",
    title: "Des choses que j’ai construites, écrites ou explorées au fil des années.",
    description:
      "Une collection d’outils open source, de projets parallèles et d’expérimentations. Certains sont déjà en production, d’autres continuent d’évoluer, d’autres encore ont été faits pour apprendre.",
    archiveBadge: "Projets",
    archiveTitle: "Une archive de ce que j’ai créé.",
    entries: [
      {
        name: "smail",
        description:
          "Service d’e-mail temporaire qui fournit des boîtes jetables pour la confidentialité, les tests et les workflows rapides.",
        link: "https://github.com/akazwz/smail",
        year: "2024",
        tags: ["TypeScript", "Fullstack", "900+ Stars"],
      },
      {
        name: "hostc",
        description:
          "Du localhost vers l’edge. Des tunnels edge sécurisés, rapides et sans configuration, propulsés par Cloudflare Workers.",
        link: "https://github.com/akazwz/hostc",
        year: "2024",
        tags: ["TypeScript", "Cloudflare Workers", "CLI"],
      },
      {
        name: "openchat-monorepo",
        description:
          "Une application moderne de chatbot IA full-stack construite avec React, Cloudflare Workers, Connect RPC et Tauri.",
        link: "https://github.com/akazwz/openchat-monorepo",
        year: "2023",
        tags: ["React", "Tauri", "RPC", "Cloudflare"],
      },
      {
        name: "workersai",
        description:
          "Plateforme de chat IA full-stack construite sur Cloudflare avec Workers, Durable Objects, KV et AI Gateway.",
        link: "https://github.com/akazwz/workersai",
        year: "2023",
        tags: ["TypeScript", "AI", "Cloudflare Workers"],
      },
      {
        name: "openchat-go",
        description:
          "Un exemple backend simple et accessible pour apprendre Golang tout en intégrant des capacités d’IA.",
        link: "https://github.com/akazwz/openchat-go",
        year: "2023",
        tags: ["Go", "AI", "Backend"],
      },
      {
        name: "mlx-live",
        description:
          "Un exemple d’assistant vocal local en temps réel construit avec MLX pour explorer l’IA embarquée sur Apple Silicon.",
        link: "https://github.com/akazwz/mlx-live",
        year: "2024",
        tags: ["MLX", "AI", "Voice"],
      },
    ],
  },
  blogIndex: {
    badge: "Journal",
    title: "Notes et écrits",
    description: "Des notes sur le logiciel, le design et une manière plus mesurée de construire.",
    latestBadge: "Dernier",
    featuredTitle: "Article mis en avant",
    moreBadge: "Plus",
    previousEntriesTitle: "Entrées précédentes",
    writtenBy: "Par",
    minuteReadLabel: "min de lecture",
    minuteShortLabel: "min",
    footer: "Écrit lentement, avec soin.",
    emptyTitle: "Pas encore d’article",
    emptyDescription: "Les textes viendront progressivement.",
  },
  blogPost: {
    backToJournal: "← Retour au journal",
    minuteReadLabel: "min de lecture",
    returnToPosts: "← Retour à tous les articles",
  },
  error: {
    message: "Oups",
    unexpected: "Une erreur inattendue s'est produite.",
    errorLabel: "Erreur",
    notFoundDetails: "La page demandée est introuvable.",
  },
  meta: {
    home: {
      title: "Accueil | akazwz",
      description:
        "Site personnel de akazwz autour de l’open source, des expérimentations techniques et d’une écriture au long cours.",
    },
    about: {
      title: "À propos | akazwz",
      description: "À propos de akazwz, des axes du site et du travail rassemblé ici.",
    },
    projects: {
      title: "Projets | akazwz",
      description: "Produits, outils, expérimentations et projets open source créés par akazwz.",
    },
    blog: {
      title: "Journal | akazwz",
      description:
        "Des notes sur le logiciel, le design et une manière plus retenue de construire.",
    },
    blogPostNotFoundTitle: "Article introuvable | akazwz",
  },
} as const satisfies Messages;

export default messages;
