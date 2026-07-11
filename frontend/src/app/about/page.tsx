import Link from "next/link";
import { MainLayout } from "@/components/main/main-layout";
import { AboutMe } from "@/components/about/about-me";
import { AboutTechstack } from "@/components/about/about-techstack";
import { AboutTimeline } from "@/components/about/about-timeline";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Page = async () => {
  return (
    <MainLayout>
      <div className='min-h-screen py-5'>
        <div className='flex flex-col gap-5'>
          <div className='flex items-center gap-4 px-[5vw] py-[2vw]'>
            <span className='sm:text-5xl text-2xl font-bold'>About Me</span>
            <div className='flex-auto border-b-2'></div>
            <Breadcrumb>
              <BreadcrumbList className='sm:text-xl text-sm'>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href='/'>Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href='/about'>About</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className='mx-auto w-full max-w-4xl px-4 sm:px-6'>
            <AboutMe />
            <AboutTechstack />
            <AboutTimeline />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
