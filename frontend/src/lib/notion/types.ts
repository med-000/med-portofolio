export type NotionObject = {
  object: unknown;
};
export type multiSelectItem = {
  id: string;
  name: string;
};
export type Date = {
  year: number;
  month: number;
};

export type DateRange = {
  start: Date;
  end?: Date;
  isValid: boolean;
};
export type TimelineYearGroup = {
  year: number;
  timelines: Timeline[];
};
export type Page = {
  id: string;
  title: string;
  content: string;
  imageFile: string;
};
export type Blog = {
  id: string;
  title: string;
  mentionPageId: string;
  public: boolean;
  qiita: boolean;
  zenn: boolean;
};
export type Project = {
  id: string;
  title: string;
  public: boolean;
  summary: string;
  github: string;
  zenn: string;
  qiita: string;
  techstack: string[];
};
export type Timeline = {
  id: string;
  title: string;
  public: boolean;
  date: DateRange;
  techstack: string[];
};
export type Techstack = {
  id: string;
  title: string;
  public: boolean;
  techstackType: string[];
  projects: string[];
  timeline: string[];
};
export type TechstackType = {
  id: string;
  title: string;
  public: boolean;
  techstack: string[];
};
