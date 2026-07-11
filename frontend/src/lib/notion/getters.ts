import type {
  PageObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { n2m } from "./client";
import { isPageMention } from "./guards";
import type { multiSelectItem, DateRange } from "./types";

export const getCheckbox = (
  page: PageObjectResponse,
  name: string
): boolean => {
  const prop = page.properties[name];
  if (!prop) return false;
  if (prop.type !== "checkbox") return false;
  return prop.checkbox;
};

export const getMultiSelectList = (
  page: PageObjectResponse,
  name: string
): multiSelectItem[] => {
  const prop = page.properties[name];
  if (!prop || prop.type !== "multi_select") return [];
  return prop.multi_select.map((v) => ({
    id: v.id,
    name: v.name,
  }));
};

export const getTitleObject = (
  page: PageObjectResponse,
  name: string
): RichTextItemResponse[] => {
  const prop = page.properties[name];
  if (!prop || prop.type !== "title") return [];
  return prop.title;
};

export const getMentionTitle = (
  page: PageObjectResponse,
  name: string
): string => {
  const texts = getTitleObject(page, name);
  const mention = texts.find(isPageMention);

  if (!mention) {
    return "";
  }

  return mention.mention.page.id;
};

export const getTitleName = (
  page: PageObjectResponse,
  name: string
): string => {
  const prop = getTitleObject(page, name);
  return prop.map((t) => t.plain_text).join("");
};

export const getPageContent = async (pageId: string) => {
  const mdBlocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdBlocks);
  return mdString.parent;
};

export const getCoverImageUrl = (page: PageObjectResponse): string => {
  const cover = page.cover;
  if (!cover) return "";

  if (cover.type === "file") {
    return cover.file.url;
  }

  if (cover.type === "external") {
    return cover.external.url;
  }

  return "";
};

export const getUrl = (page: PageObjectResponse, name: string): string => {
  const prop = page.properties[name];
  if (!prop || prop.type !== "url") return "";
  return prop.url ?? "";
};

export const getRelationIds = (
  page: PageObjectResponse,
  name: string
): string[] => {
  const prop = page.properties[name];
  if (!prop || prop.type !== "relation") return [];
  return prop.relation.map((r) => r.id);
};

export const getText = (page: PageObjectResponse, name: string): string => {
  const prop = page.properties[name];
  if (!prop || prop.type !== "rich_text") return "";
  return prop.rich_text.map((t) => t.plain_text).join("");
};

export const getDateRange = (
  page: PageObjectResponse,
  name: string
): DateRange => {
  const prop = page.properties[name];
  if (!prop || prop.type !== "date" || !prop.date?.start) {
    return {
      start: { year: 0, month: 0 },
      isValid: false,
    };
  }

  const startDate = new Date(prop.date.start);

  const result: DateRange = {
    start: {
      year: startDate.getFullYear(),
      month: startDate.getMonth() + 1,
    },
    isValid: true,
  };

  if (prop.date.end) {
    const endDate = new Date(prop.date.end);
    result.end = {
      year: endDate.getFullYear(),
      month: endDate.getMonth() + 1,
    };
  }

  return result;
};
