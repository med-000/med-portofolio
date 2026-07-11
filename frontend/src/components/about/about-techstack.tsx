import { getTechstacks, getPages, getTechstackTypes } from "@/lib/notion";
import { Card } from "@/components/ui/card";

export const AboutTechstack = async () => {
  const techstacks = await getTechstacks();
  const techstackTypes = await getTechstackTypes();

  const publicTechstackIds = new Set(
    techstacks
      .filter((techstack) => techstack.public === true)
      .map((techstack) => techstack.id),
  );

  const techstackTypesWithRelations = await Promise.all(
    techstackTypes.map(async (techstackType) => {
      const techstackTypePage = await getPages(techstackType.id);

      const techstackPages = (
        await Promise.all(
          techstackType.techstack.map((techstackId) => getPages(techstackId)),
        )
      ).filter((page) => publicTechstackIds.has(page.id));

      return {
        techstackType,
        techstackTypePage,
        techstackPages,
      };
    }),
  );
  return (
    <section className='space-y-6 py-[1vw]'>
      <div className='flex items-center gap-4'>
        <span className='sm:text-4xl text-2xl font-semibold'>Techstack</span>
        <div className='flex-1 border-b' />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
        {techstackTypesWithRelations.map(
          ({ techstackType, techstackPages }) => (
            <Card className='w-full py-4' key={techstackType.id}>
              <div className='sm:text-3xl text-2xl font-bold text-center mb-3'>
                {techstackType.title}
              </div>

              <div className='flex flex-row flex-wrap sm:flex-col sm:flex-nowrap justify-center sm:justify-start gap-3 px-4'>
                {techstackPages.map((techstack) => (
                  <div key={techstack.id} className='flex items-center gap-2'>
                    <img
                      className='size-10 shrink-0'
                      src={`https://skillicons.dev/icons?i=${techstack.content}`}
                      alt={techstack.title}
                    />
                    <span className='hidden sm:inline text-lg font-semibold'>
                      {techstack.title}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ),
        )}
      </div>
    </section>
  );
};
