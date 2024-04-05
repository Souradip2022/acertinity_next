"use client";
import courseData from "../data/course_data.json";
import {BackgroundGradient} from "./ui/background-gradient";
import Link from "next/link";

interface Course {
  id: number,
  title: string,
  slug: string,
  description: string,
  price: number,
  instructor: string,
  isFeatured: boolean,
}

function SpecialisedCourses() {
  const allCourses: Array<Course> = courseData.courses.filter((course: Course) => course.isFeatured);

  return (
    <div className="p-12 bg-gray-900 h-fit w-full flex flex-col justify- items-center">
      <div>
        <h1 className="text-3xl text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h1>
        <p className=" lg:text-6xl my-5 leading-8 font-extrabold tracking-tight text-white sm:text-[50px]  text-[45px] box-border">Learn with the Best</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-16 sm:grid-cols-1 md:grid-cols-2 my-20">

        {allCourses.map((course: Course) => (
          <div key={course.id} className="flex w-[100%] h-[120%] py-6">
          <BackgroundGradient
            className="flex flex-col gap-8 rounded-[22px] relative  bg-white dark:bg-zinc-900  items-center justify-center h-full w-full flex-shrink"
            containerClassName="">
            <h1 className="text-2xl font-semibold tracking-tight">{course.title}</h1>
            <div className="text-center text-lg mx-3.5 ">{course.description}</div>
            <Link href={`/${course.slug}`}>
              <div className="text-xl font-bold">Learn More</div>
            </Link>
          </BackgroundGradient>
          </div>
        ))}
      </div>
    </div>

  );
}

export default SpecialisedCourses;