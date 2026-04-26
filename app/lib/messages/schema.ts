export type HeaderMessages = {
  about: string;
  projects: string;
  journal: string;
  language: string;
  tagline: string;
};

export type HomeMessages = {
  heroTitle: string;
  heroDescription: string;
  aboutCta: string;
  journalCta: string;
  focusBadge: string;
  focusTitle: string;
  latestBadge: string;
  latestTitle: string;
  allPostsLabel: string;
  minuteReadLabel: string;
  sections: readonly {
    title: string;
    summary: string;
  }[];
};

export type AboutMessages = {
  badge: string;
  title: string;
  description: string;
  journalCta: string;
  homeCta: string;
  highlightBadge: string;
  highlightTitle: string;
  pointLabel: string;
  sections: readonly {
    title: string;
    description: string;
  }[];
  points: readonly string[];
};

export type ProjectEntry = {
  name: string;
  description: string;
  link: string;
  year: string;
  tags: readonly string[];
};

export type ProjectsMessages = {
  badge: string;
  title: string;
  description: string;
  archiveBadge: string;
  archiveTitle: string;
  entries: readonly ProjectEntry[];
};

export type BlogIndexMessages = {
  badge: string;
  title: string;
  description: string;
  latestBadge: string;
  featuredTitle: string;
  moreBadge: string;
  previousEntriesTitle: string;
  writtenBy: string;
  minuteReadLabel: string;
  minuteShortLabel: string;
  footer: string;
  emptyTitle: string;
  emptyDescription: string;
};

export type BlogPostMessages = {
  backToJournal: string;
  minuteReadLabel: string;
  returnToPosts: string;
};

export type ErrorMessages = {
  message: string;
  unexpected: string;
  errorLabel: string;
  notFoundDetails: string;
};

export type PageMeta = {
  title: string;
  description: string;
};

export type MetaMessages = {
  home: PageMeta;
  about: PageMeta;
  projects: PageMeta;
  blog: PageMeta;
  blogPostNotFoundTitle: string;
};

export type Messages = {
  header: HeaderMessages;
  home: HomeMessages;
  about: AboutMessages;
  projects: ProjectsMessages;
  blogIndex: BlogIndexMessages;
  blogPost: BlogPostMessages;
  error: ErrorMessages;
  meta: MetaMessages;
};
