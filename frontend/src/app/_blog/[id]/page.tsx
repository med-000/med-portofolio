import { MainLayout } from "@/components/main/main-layout";
import { BlogContent } from "@/components/blog/blog-content";
import { getPages } from "@/lib/notion";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};
const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  const { title, content } = await getPages(id);
  return (
    <MainLayout>
      <BlogContent content={content} title={title} />
    </MainLayout>
  );
};

export default Page;
