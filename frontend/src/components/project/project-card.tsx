import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project, Page } from "@/lib/notion";
import { SiGithub, SiZenn, SiQiita } from "react-icons/si";

type ProjectCardProps = {
  project: Project;
  projectPage: Page;
  techstackPages: Page[];
};

export const ProjectCard = ({
  project,
  projectPage,
  techstackPages,
}: ProjectCardProps) => {
  return (
    <Card
      className='
        p-0
        relative
        w-full
        max-w-[420px]
        overflow-hidden
        rounded-2xl
        border
        border-white/15
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-white/40
        gap-3
      '
    >
      <div className='relative aspect-[16/9] w-full pb-0'>
        {projectPage.imageFile && (
          <Image
            src={projectPage.imageFile}
            alt={project.title}
            fill
            className='object-cover'
          />
        )}
      </div>

      <div className='flex flex-col gap-3 px-6 py-3 bg-background'>
        <h2 className='text-3xl font-bold text-foreground'>{project.title}</h2>
        <div className='flex flex-col gap-3 py-3'>
          {projectPage.content && (
            <div className='prose prose-invert max-w-none text-sm'>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {projectPage.content}
              </ReactMarkdown>
            </div>
          )}

          <div className='flex flex-wrap gap-2 pt-2 pb-0'>
            {techstackPages.slice(0, 4).map((tag) => (
              <Badge
                key={tag.id}
                className='
                rounded-full
                bg-muted
                border
                border-white/15
                px-3
                py-1
                text-xs
                font-bold
              '
              >
                {tag.title}
              </Badge>
            ))}

            {techstackPages.length > 4 && (
              <Badge
                variant='outline'
                className='rounded-full text-xs border-white/20'
              >
                +{techstackPages.length - 4} more
              </Badge>
            )}
          </div>
          <div className='my-2 h-px w-full bg-white/10' />
          <div className='pt-0 flex items-center gap-4'>
            {project.github && (
              <Link
                href={project.github}
                target='_blank'
                className='
                inline-flex
                items-center
                gap-2
                text-white/80
                hover:text-white
                hover:underline
                text-sm
              '
              >
                <SiGithub />
                Source Code
              </Link>
            )}
            {project.zenn && (
              <Link
                href={project.zenn}
                target='_blank'
                className='
                inline-flex
                items-center
                gap-2
                text-white/80
                hover:text-white
                hover:underline
                text-sm
              '
              >
                <SiZenn />
                Zenn
              </Link>
            )}
            {project.qiita && (
              <Link
                href={project.zenn}
                target='_blank'
                className='
                inline-flex
                items-center
                gap-2
                text-white/80
                hover:text-white
                hover:underline
                text-sm
              '
              >
                <SiQiita />
                Qiita
              </Link>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};
