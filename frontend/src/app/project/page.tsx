import { MainLayout } from "@/components/main/main-layout";
import { getProjects, getPages } from "@/lib/notion";
import { ProjectCard } from "@/components/project/project-card";

const Page = async () => {
  const projects = await getProjects();

  const projectsWithRelations = await Promise.all(
    projects.map(async (project) => {
      const projectPage = await getPages(project.id);

      const techstackPages = await Promise.all(
        project.techstack.map((techstackId) => getPages(techstackId)),
      );

      return {
        project,
        projectPage,
        techstackPages,
      };
    }),
  );

  return (
    <MainLayout>
      <div className='min-h-screen py-16'>
        <div className='mx-auto max-w-7xl px-6 flex flex-col gap-16'>
          <h1
            className='
          text-5xl
          sm:text-6xl
          font-bold
          tracking-tight
          text-center
        '
          >
            Projects
          </h1>

          <div
            className='
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
          justify-items-center
        '
          >
            {projectsWithRelations.map(
              ({ project, projectPage, techstackPages }) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  projectPage={projectPage}
                  techstackPages={techstackPages}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
