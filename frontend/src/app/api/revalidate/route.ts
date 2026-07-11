import { revalidateTag } from "next/cache";

export async function POST(req: Request) {
  const { databaseId } = await req.json();

  revalidateTag(`notion-db-${databaseId}`, {});

  return Response.json({ ok: true });
}
