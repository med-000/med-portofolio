import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Card } from "@/components/ui/card";

type BlogContentProps = {
  title: string;
  content: string;
};

export const BlogContent = ({ title, content }: BlogContentProps) => {
  return (
    <div className='mx-auto my-8 flex max-w-4xl flex-col gap-4'>
      <h1 className='text-center font-bold text-2xl'>{title}</h1>
      <Card className='prose-markdown max-w-none p-8'>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </Card>
    </div>
  );
};
