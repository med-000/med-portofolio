import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

export const AboutMe = () => {
  return (
    <section className='space-y-6 py-[1vw]' id='Profile'>
      <div className='flex items-center gap-4'>
        <span className='sm:text-4xl text-2xl font-semibold'>Profile</span>
        <div className='flex-1 border-b-2' />
      </div>

      <div className='flex justify-center'>
        <Card className='w-full p-8'>
          <div className='flex flex-col md:flex-row gap-10 items-center'>
            <div className='flex-1 flex flex-col gap-6 order-1'>
              <h2 className='sm:text-6xl sm:text-left text-center text-5xl font-bold'>
                Riki Maeda
              </h2>

              <div className='flex justify-center md:hidden'>
                <Avatar className='size-32'>
                  <AvatarImage
                    src='/images/icons/med_icon.png'
                    alt='med avatar'
                  />
                  <AvatarFallback>med</AvatarFallback>
                </Avatar>
              </div>

              <ul className='space-y-1 sm:text-xl text-lg sm:text-left text-center font-semibold text-foreground/90'>
                <li>2005年5月9日生まれ</li>
                <li>med-000</li>
                <li>東京電機大学</li>
              </ul>

              {/* <p className='sm:text-xl text-lg leading-relaxed'>
                大学入学をきっかけにプログラミングへ興味を持ち、
                Web開発・インフラ・インターネットの領域を中心に学習しています。
              </p>

              <p className='sm:text-xl text-lg leading-relaxed'>
                フルスタックおよびインフラエンジニアを目指し、
                インターンやプロダクト開発に取り組んでいます。
              </p> */}
            </div>

            <div className='hidden md:flex justify-center order-2'>
              <Avatar className='size-48 shrink-0'>
                <AvatarImage
                  src='/images/icons/med_icon.png'
                  alt='med avatar'
                />
                <AvatarFallback>med</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
