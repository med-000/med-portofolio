import type { Timeline } from "@/lib/notion";
import { getPages } from "@/lib/notion";
import { TimelineCard } from "@/components/timeline/timeline-card";

type TimelineGroupYearProps = {
  year: number;
  timelines: Timeline[];
};

export const TimelineGroupYear = async ({
  year,
  timelines,
}: TimelineGroupYearProps) => {
  const timelinesWithRelations = await Promise.all(
    timelines.map(async (timeline) => {
      const timelinePage = await getPages(timeline.id);
      const relatedPages = await Promise.all(
        timeline.techstack.map((techstackId) => getPages(techstackId)),
      );

      return {
        timeline,
        timelinePage,
        relatedPages,
      };
    }),
  );

  return (
    <section>
      <ul className='flex flex-col gap-3'>
        <div className='text-3xl font-bold'>{year}</div>
        {timelinesWithRelations.map(
          ({ timeline, timelinePage, relatedPages }) => (
            <li key={timeline.id}>
              <TimelineCard
                timelineTitle={timeline.title}
                timelineDate={timeline.date}
                timelinePage={timelinePage}
                relatedPages={relatedPages}
              />
            </li>
          ),
        )}
      </ul>
    </section>
  );
};
