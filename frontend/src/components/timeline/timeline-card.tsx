import type { DateRange, Page } from "@/lib/notion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
type TimelineCardProps = {
  timelineTitle: string;
  timelineDate: DateRange;
  timelinePage: Page;
  relatedPages: Page[];
};

export const TimelineCard = async ({
  timelineTitle,
  timelineDate,
  timelinePage,
  relatedPages,
}: TimelineCardProps) => {
  return (
    <Card
      className='
    flex flex-col gap-6 p-4
    transition duration-200 ease-out
    hover:-translate-y-1 hover:shadow-lg
    hover:border-foreground/15
    motion-reduce:transform-none motion-reduce:transition-none
  '
    >
      <div className='flex justify-between p-0'>
        <div className='text-xl sm:text-2xl font-bold '>{timelineTitle}</div>
        <div className='font-bold'>
          {timelineDate.start.month}
          {timelineDate.end && <>〜{timelineDate.end.month}</>}月
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='text-sm sm:text-lg'>{timelinePage.content}</div>
        <div className='flex gap-3'>
          {relatedPages.map((tag) => (
            // <img
            //   key={tag.id}
            //   className='size-7'
            //   src={`https://skillicons.dev/icons?i=${tag.content}`}
            //   alt={tag.title}
            // />
            <Badge
              key={tag.id}
              variant='outline'
              className='font-bold border border-white/70 px-3 py-1'
            >
              <span>{tag.title}</span>
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};
{
}
