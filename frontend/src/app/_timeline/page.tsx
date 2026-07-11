import { MainLayout } from "@/components/main/main-layout";
import { TimelineGroupYear } from "@/components/timeline/timeline-year-group";
import { getTimelinesByYear } from "@/lib/notion";

const Page = async () => {
  const timelinesByYear = await getTimelinesByYear();
  return (
    <MainLayout>
      <div className='min-h-screen m-5'>
        {timelinesByYear.map((group) => (
          <TimelineGroupYear
            key={group.year}
            year={group.year}
            timelines={group.timelines}
          ></TimelineGroupYear>
        ))}
      </div>
    </MainLayout>
  );
};

export default Page;
