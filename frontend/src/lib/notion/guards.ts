import type {
  DatabaseObjectResponse,
  PageObjectResponse,
  RichTextItemResponse,
  MentionRichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";

import type { NotionObject } from "./types";

export const isPage = (item: unknown): item is PageObjectResponse => {
  if (typeof item !== "object" || item === null) {
    return false;
  }

  const obj = item as NotionObject;

  if (obj.object === "page") {
    return true;
  }
  return false;
};

export const isDatabase = (item: unknown): item is DatabaseObjectResponse => {
  if (typeof item !== "object" || item === null) {
    return false;
  }

  const obj = item as NotionObject;

  if (obj.object === "database") {
    return true;
  }
  return false;
};

export const isPageMention = (
  item: RichTextItemResponse
): item is MentionRichTextItemResponse & {
  type: "mention";
  mention: { type: "page"; page: { id: string } };
} => {
  if (item.type === "mention" && item.mention.type === "page") {
    return true;
  }
  return false;
};
