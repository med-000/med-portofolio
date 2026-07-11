import { MainLayout } from "@/components/main/main-layout";
import { BlogArticle } from "@/components/blog/blog-article";

import { getBlogs } from "@/lib/notion";

const Page = async () => {
  const blogs = await getBlogs();
  return (
    <MainLayout>
      <div className='min-h-screen flex flex-col gap-3'>
        <ul className='whitespace-pre-wrap text-sm'>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <BlogArticle title={blog.title} pageId={blog.mentionPageId} />
            </li>
          ))}
        </ul>
      </div>
    </MainLayout>
  );
};

export default Page;
