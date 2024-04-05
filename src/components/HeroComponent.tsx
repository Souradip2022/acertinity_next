import React from 'react';
import Link from "next/link";
import {Spotlight} from "@/components/ui/Spotlight";
import {Button} from "@/components/ui/moving-border";

function HeroComponent() {
  return (
    <div className="w-full py-60 px-10 relative gap-6 overflow-hidden flex  justify-center items-center">
      <Spotlight
        className="top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="w-[1200px] flex flex-col justify-center items-center text-center gap-8">
        <h1
          className="text-6xl sm:text-8xl font-extrabold relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Master
          the art of music</h1>
        <p className="m-4 text px-7 font-normal text-[1.6rem] text-neutral-300 -tracking-wide ">Dive into our
          comprehensive music courses and transform your musical journey today. Whether you are beginner or
          looking to refine your skills, join us to unlock your true potential
        </p>
        <Link href="/courses">

          <Button
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 p-3 text-xl box-border ">Explore
            courses
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroComponent;