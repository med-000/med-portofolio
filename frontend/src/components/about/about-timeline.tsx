import { TimelineGroupYear } from "@/components/timeline/timeline-year-group";
import { getTimelinesByYear } from "@/lib/notion";
import { Card } from "@/components/ui/card";

export const AboutTimeline = async () => {
  const timelinesByYear = await getTimelinesByYear();
  return (
    <section className='space-y-6 py-[1vw]'>
      <div className='flex items-center gap-4'>
        <span className='sm:text-4xl text-2xl font-semibold'>Timeline</span>
        <div className='flex-1 border-b-2' />
      </div>
      <div className='w-full items-center'>
        <div className='flex flex-col gap-10'>
          {timelinesByYear.map((group) => (
            <TimelineGroupYear
              key={group.year}
              year={group.year}
              timelines={group.timelines}
            ></TimelineGroupYear>
          ))}
        </div>
      </div>
    </section>
  );
};
