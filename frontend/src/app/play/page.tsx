"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import { MainLayout } from "@/components/main/main-layout";
import { cn } from "@/lib/utils";

const getMilestoneSteps = (digits: number) => (digits === 10 ? [1, 5] : [1, 2, 5]);

const isMilestoneCount = (value: number) => {
  if (value < 10) return false;

  const digits = 10 ** Math.floor(Math.log10(value));
  const normalized = value / digits;

  return getMilestoneSteps(digits).includes(normalized);
};

const getGrowthLevel = (value: number) => {
  if (value < 10) return 0;

  let level = 0;
  let digits = 10;

  while (digits <= value * 10) {
    for (const step of getMilestoneSteps(digits)) {
      if (step * digits > value) {
        return level;
      }

      level += 1;
    }

    digits *= 10;
  }

  return level;
};

const PlayPage = () => {
  const [count, setCount] = useState(0);
  const isMilestone = isMilestoneCount(count);
  const growthLevel = getGrowthLevel(count);
  const countScale = Math.min(1 + growthLevel * 0.14, 2.8);

  return (
    <MainLayout>
      <section className='flex min-h-screen items-start justify-center px-[5vw] pt-[22vh] pb-10 sm:pb-16'>
        <div className='flex flex-col items-center gap-10'>
          <div
            key={count}
            className={cn(
              "font-oxanium text-7xl leading-none sm:text-8xl",
              isMilestone
                ? "animate-[count-pop-boost_320ms_ease-out]"
                : "animate-[count-pop_220ms_ease-out]",
            )}
            style={{ "--count-scale": countScale } as CSSProperties}
          >
            {count}
          </div>
          <button
            className='rounded-full border border-white/15 px-12 py-5 font-outfit text-2xl font-semibold text-white transition hover:border-white/35 hover:bg-white/5 sm:px-16 sm:py-6 sm:text-3xl'
            onClick={() => setCount((current) => current + 1)}
            type='button'
          >
            Push!!
          </button>
        </div>
      </section>
    </MainLayout>
  );
};

export default PlayPage;
