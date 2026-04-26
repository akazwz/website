import type { Messages } from "./schema";

const messages = {
  header: {
    about: "概要",
    projects: "プロジェクト",
    journal: "ブログ",
    language: "言語",
    tagline: "フルスタック開発者兼オープンソース制作者。",
  },
  home: {
    heroTitle: "フルスタック開発者として、作り続け、良いものはオープンソースにしています。",
    heroDescription:
      "akazwz の個人サイトへようこそ。smail や hostc のようなオープンソースプロジェクト、AI の実験、継続的な開発ジャーナルをまとめています。",
    aboutCta: "概要",
    journalCta: "ジャーナルを読む",
    focusBadge: "注力領域",
    focusTitle: "エンジニアリング、オープンソース、そしてエッジの探究。",
    latestBadge: "最近の文章",
    latestTitle: "ソフトウェア、デザイン、そして丁寧なものづくりについての最近の記録。",
    allPostsLabel: "すべての記事を見る",
    minuteReadLabel: "分で読めます",
    sections: [
      {
        title: "オープンソース",
        summary:
          "smail のような一時メールサービスから hostc のようなエッジトンネルまで、コミュニティ向けの道具を作り続けています。",
      },
      {
        title: "フルスタックとエッジ",
        summary:
          "React と TypeScript でモダンな Web アプリを作り、Cloudflare Workers で世界に届けています。",
      },
      {
        title: "AI とシステム",
        summary:
          "ローカル AI モデル、実用的なバックエンドシステム、クロスプラットフォームのデスクトップアプリを試しています。",
      },
    ],
  },
  about: {
    badge: "akazwz について",
    title:
      "開発者向けツール、エッジネイティブなプロダクト、そして長く役に立つ実用的なソフトウェアを作っています。",
    description:
      "仕事の多くは、オープンソースのツール、モダンな Web インフラ、そして実際のワークフローの問題を解く小さなプロダクトの間にあります。このサイトは、そのプロジェクトや文章、考え方をまとめる場所です。",
    journalCta: "ジャーナルを読む",
    homeCta: "ホームに戻る",
    highlightBadge: "仕事の文脈",
    highlightTitle:
      "軸はシンプルです。役に立つものを作り、スタックを理解しやすく保ち、再利用する価値のあるものは共有すること。",
    pointLabel: "ポイント",
    sections: [
      {
        title: "作っているもの",
        description:
          "インフラ寄りのプロダクト、開発者ツール、そして素早く出せても壊れにくいフルスタックアプリに取り組むことが多いです。",
      },
      {
        title: "関心領域",
        description:
          "最近は Cloudflare Workers、Go サービス、React と TypeScript のアプリ、AI を組み込んだワークフロー、そして DNS・CDN・エッジ配信まわりの調査に多くの時間を使っています。",
      },
      {
        title: "発信のしかた",
        description:
          "コードの大半は GitHub に置き、少し長い考えはジャーナルに書いています。プロダクト、ツール、エッジシステムの話なら X がいちばん早いです。",
      },
    ],
    points: [
      "smail を作り、速度と一時利用のしやすさ、信頼感のある体験を意識して改善し続けています。",
      "hostc を通じて、localhost トンネルをもっとシンプルでエッジネイティブなものにしようとしています。",
      "引き続き Go サービスを書きつつ、DNS・CDN・エッジ配信の仕組みも調べています。その上で、ローカル AI や Tauri 製デスクトップ製品も試しています。",
      "このサイトを、プロジェクト、技術メモ、プロダクト設計の考え方をまとめる場所として使っています。",
    ],
  },
  projects: {
    badge: "代表的な仕事",
    title: "これまでに作ったもの、書いたもの、そして本気で試してきたもの。",
    description:
      "ここにはオープンソースの道具、個人プロジェクト、実験的な取り組みをまとめています。すでに動いているものも、進行中のものも、学ぶために作ったものもあります。",
    archiveBadge: "プロジェクト",
    archiveTitle: "これまでの制作一覧。",
    entries: [
      {
        name: "smail",
        description:
          "プライバシー保護やテスト、ちょっとした作業に使える使い捨て受信箱を提供する一時メールサービス。",
        link: "https://github.com/akazwz/smail",
        year: "2024",
        tags: ["TypeScript", "Fullstack", "900+ Stars"],
      },
      {
        name: "hostc",
        description:
          "localhost をエッジへ。Cloudflare Workers を基盤にした、安全で高速、ゼロ設定のエッジトンネル。",
        link: "https://github.com/akazwz/hostc",
        year: "2024",
        tags: ["TypeScript", "Cloudflare Workers", "CLI"],
      },
      {
        name: "openchat-monorepo",
        description:
          "React、Cloudflare Workers、Connect RPC、Tauri で構成したモダンなフルスタック AI チャットアプリ。",
        link: "https://github.com/akazwz/openchat-monorepo",
        year: "2023",
        tags: ["React", "Tauri", "RPC", "Cloudflare"],
      },
      {
        name: "workersai",
        description:
          "Workers、Durable Objects、KV、AI Gateway を使って Cloudflare 上に構築したフルスタック AI チャット基盤。",
        link: "https://github.com/akazwz/workersai",
        year: "2023",
        tags: ["TypeScript", "AI", "Cloudflare Workers"],
      },
      {
        name: "openchat-go",
        description: "AI 機能を組み込みながら Golang を学べる、小さく扱いやすいバックエンド例。",
        link: "https://github.com/akazwz/openchat-go",
        year: "2023",
        tags: ["Go", "AI", "Backend"],
      },
      {
        name: "mlx-live",
        description:
          "Apple Silicon 上のオンデバイス AI を試すために MLX で作った、ローカルのリアルタイム音声アシスタント例。",
        link: "https://github.com/akazwz/mlx-live",
        year: "2024",
        tags: ["MLX", "AI", "Voice"],
      },
    ],
  },
  blogIndex: {
    badge: "ジャーナル",
    title: "記録と文章",
    description: "ソフトウェア、デザイン、そして節度あるものづくりについてのメモ。",
    latestBadge: "最新",
    featuredTitle: "注目の記事",
    moreBadge: "さらに読む",
    previousEntriesTitle: "これまでの記録",
    writtenBy: "著者",
    minuteReadLabel: "分で読めます",
    minuteShortLabel: "分",
    footer: "時間をかけて、丁寧に書いています。",
    emptyTitle: "まだ記事がありません",
    emptyDescription: "これから少しずつ増やしていきます。",
  },
  blogPost: {
    backToJournal: "← ジャーナルに戻る",
    minuteReadLabel: "分で読めます",
    returnToPosts: "← すべての記事に戻る",
  },
  error: {
    message: "問題が発生しました",
    unexpected: "予期しないエラーが発生しました。",
    errorLabel: "エラー",
    notFoundDetails: "お探しのページは見つかりませんでした。",
  },
  meta: {
    home: {
      title: "ホーム | akazwz",
      description: "akazwz の個人サイト。オープンソース、技術実験、継続的な文章をまとめています。",
    },
    about: {
      title: "概要 | akazwz",
      description: "akazwz、このサイトの関心領域、そしてここに集めた仕事について。",
    },
    projects: {
      title: "プロジェクト | akazwz",
      description: "akazwz が作ってきたプロダクト、ツール、実験、オープンソースの一覧。",
    },
    blog: {
      title: "ブログ | akazwz",
      description: "ソフトウェア、デザイン、そして節度あるものづくりについてのメモ。",
    },
    blogPostNotFoundTitle: "記事が見つかりません | akazwz",
  },
} as const satisfies Messages;

export default messages;
