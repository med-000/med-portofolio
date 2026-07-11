import { isPage } from "./guards";

export const fetchPage = async (pageId: string) => {
  const res = await fetch(`https://api.notion.com/v1/pages/${pageId}`, {
    headers: {
      Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
      "Notion-Version": "2022-06-28",
    },
    next: {
      tags: [`notion-page-${pageId}`],
      revalidate: 1,
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch page: ${pageId}`);
  }

  const response = await res.json();

  if (!isPage(response)) {
    throw new Error("This page is a partial page");
  }

  return response;
};

export const fetchDB = async (databaseId: string) => {
  const res = await fetch(
    `https://api.notion.com/v1/databases/${databaseId}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filter: {
          property: "public",
          checkbox: {
            equals: true,
          },
        },
        sorts: [
          {
            timestamp: "created_time",
            direction: "descending",
          },
        ],
      }),
      next: {
        tags: [`notion-db-${databaseId}`],
        revalidate: 1,
      },
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch database: ${databaseId}`);
  }

  return (await res.json()).results;
};
