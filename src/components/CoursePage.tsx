"use client";

import Image from "next/image";
import React from "react";
import {CardBody, CardContainer, CardItem} from "./ui/3d-card";
import Link from "next/link";
import courseData from "@/data/course_data.json"

function CoursePage() {
  let courses = courseData.courses;

  return (
    <div className="w-full h-fit flex flex-col justify-evenly items-center pt-16 gap-y-11">
      <h1 className="text-6xl font-bold ">All Courses ({courses.length})</h1>
      <div className="w-full flex flex-wrap justify-evenly items-center">
        {courses.map((Course) => (
          <CardContainer key={Course.id} className="inter-var gap-8 ">
            <CardBody
              className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[35rem] sm:h-fit lg:w-[45rem] h-auto rounded-xl p-6 border flex flex-col justify-evenly gap-5 ">
              <CardItem
                translateZ="50"
                className="text-3xl font-bold text-neutral-600 dark:text-white"
              >
                {Course.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-md w-3/4 mt-2 dark:text-neutral-300"
              >
                {Course.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={Course.image}
                  height="1000"
                  width="1000"
                  className=" sm:h-80  h-auto w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={"https://twitter.com/mannupaaji"}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-md font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-md font-bold"
                >
                  Sign up
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}

export default CoursePage;