import Link from "next/link";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { routes } from "@/lib/routes";

type BlogArticleProps = {
  title: string;
  pageId: string;
};

export const BlogArticle = ({ title, pageId }: BlogArticleProps) => {
  return (
    <article>
      <Card>
        <CardHeader className='p-4'>
          <CardTitle className='flex flex-row items-center gap-3'>
            {title}
          </CardTitle>
        </CardHeader>
        <Link href={routes.blog(pageId)}>
          <CardContent className='p-4 pt-0'>{title}</CardContent>
        </Link>
      </Card>
    </article>
  );
};
