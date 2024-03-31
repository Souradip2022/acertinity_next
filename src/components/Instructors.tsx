"use client";
import React from "react";
import {WavyBackground} from "./ui/wavy-background";
import {AnimatedTooltip} from "@/components/ui/animated-tooltip";
import instructorData from "@/data/instructors_data.json";

interface Instructor {
  id: number,
  name: string,
  designation: string,
  image: string
}

function Instructors() {

  const instructors: Array<Instructor> = instructorData.instructors;

  return (
    <WavyBackground className="w-full mx-auto h-full">
      <div className="flex flex-col h-full w-full justify-around items-center relative top-16">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white font-bold inter-var text-center">
          Meet Our Instructors
        </p>
        <p
          className="text-xl mx-8  md:text-2xl lg:text-2xl sm:text-xl  text-white font-normal inter-var text-center relative bottom-[20%]">
          Discover the talented professionals who will guide your musical journey
        </p>
        <div className="flex items-center justify-center w-full  h-fit  relative bottom-[30%]">
          <AnimatedTooltip
            items={instructors}/>
        </div>

      </div>
    </WavyBackground>

  );
}

export default Instructors;