import { MainLayout } from "@/components/main/main-layout";

const Home = () => {
  return (
    <MainLayout>
      <section className='min-h-screen flex flex-col items-center gap-5 pt-[25vh]'>
        <h1 className='text-6xl sm:text-7xl font-bold'>Explore me .</h1>
        <a
          className='text-xl group inline-flex items-center gap-2 transition'
          href='/about'
        >
          Launch med
          <span className='transition-transform group-hover:translate-x-1'>
            →
          </span>
        </a>
      </section>
    </MainLayout>
  );
};

export default Home;
