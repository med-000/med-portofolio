export const PAGE_PROPERTIES = {
  id: "id",
  title: "title",
  content: "content",
} as const;

export const BLOG_PROPERTIES = {
  title: "title",
  public: "public",
  qiita: "qiita",
  zenn: "zenn",
} as const;

export const PROJECT_PROPERTIES = {
  title: "title",
  public: "public",
  summary: "summary",
  github: "github",
  zenn: "zenn",
  qiita: "qiita",
  techstack: "techstack",
} as const;

export const TIMELINE_PROPERTIES = {
  title: "title",
  public: "public",
  date: "date",
  techstack: "techstack",
};
export const TECHSTACK_PROPERTIES = {
  title: "title",
  public: "public",
  techstackType: "techstackType",
  projects: "projects",
  timeline: "timeline",
};
export const TECHSTACKTYPE_PROPERTIES = {
  title: "title",
  public: "public",
  techstack: "techstack",
};
