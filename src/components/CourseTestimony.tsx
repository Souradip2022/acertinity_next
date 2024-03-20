"use client";
import {StickyScroll} from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import React from "react";

function CourseTestimony() {
  const content: Array<{ title: string, description: string, content: React.ReactNode }> =
    [
      {
        title: "Structured Learning",
        description:
          "Clear and well-organized lessons for a step-by-step skill progression. " +
          "Variety of learning styles with interactive exercises, video demonstrations, and comprehensive written materials. " +
          "Tailored learning paths based on your interests, allowing focused tracks or broader exploration. ",
        content: (
          <div
            className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
            Collaborative Editing
          </div>
        )
      },
      {
        title: "Expert Guidance",
        description:
          "Experienced instructors with professional musician knowledge and passion to guide you. " +
          "Personalized feedback to refine technique, overcome challenges, and gain valuable insights. " +
          "Active online community for connection with other students, sharing experiences, and building a network.",
        content: (
          <div
            className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
            Version control
          </div>
        ),
      },
      {
        title: "Unlock Your Creativity",
        description: "Explore different genres to discover a world of musical styles and find inspiration. " +
          "Develop your unique voice to go beyond technical proficiency and express yourself creatively through music. " +
          "Compose your own music to gain skills and confidence in writing songs or musical pieces.",
        content: (
          <div
            className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
            Running out of content
          </div>
        ),
      },
      {
        title: "Beyond the Basics",
        description:
          "Go beyond just playing notes by learning music theory, ear training, improvisation techniques, and performance skills. " + "Regularly updated content to stay engaged with new lessons, exercises, and challenges added to the course. " +
          "Lifetime access to continue learning and revisiting course materials even after completing the program.",
        content: (
          <div
            className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
            Version control
          </div>
        ),
      },
      {
        title: "Flexible and Accessible",
        description:
          "Learn at your own pace to fit your learning into a busy schedule with a self-paced curriculum. " +
          "24/7 access to materials to review lessons and practice materials whenever and wherever you need them. " +
          "Multiple learning formats like text, video, or audio to cater to your learning preferences.",
        content: (
          <div
            className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
            Running out of content
          </div>
        ),
      }
    ];

  return (
    <div className="w-full h-[55rem] mb-6">
      <StickyScroll content={content}
                    contentClassName="overflow-hidden w-[400px] my-20 sticky right-[5%]"/>
    </div>
  );
}

export default CourseTestimony;
