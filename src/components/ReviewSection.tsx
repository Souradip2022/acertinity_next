"use client"
import React, {useEffect, useState} from "react";
import {InfiniteMovingCards} from "@/components/ui/infinite-moving-cards";

function ReviewSection() {
  const testimonials: Array<{ quote: string; name: string; title: string; }> = [
    {
      quote: "This course gave me the skills and confidence I needed to join a band. The instructors were patient and encouraging, and the lessons were clear and well-organized.",
      name: "Mira Kapoor ",
      title: "",
    },
    {
      quote: "I never thought I could learn to play an instrument, but this course made it fun and accessible. Now I can express myself musically and it's incredibly rewarding.",
      name: "Aditya Singh",
      title: "",
    },
    {
      quote: "The flexible structure of this course allowed me to learn at my own pace. The instructors were always available to answer my questions and provide guidance.",
      name: "Priya Patel",
      title: "",
    },
    {
      quote: "The best part of this course was the supportive community I found. It's been amazing to connect with other students who share my passion for music.",
      name: "Rahul Sharma",
      title: "",
    },
    {
      quote: "This course opened my eyes to new genres and techniques. I've grown so much as a musician and I'm constantly discovering new ways to create music.",
      name: "Anika Desai",
      title: "",
    },

  ];

  return (
    <div
      className="h-[55rem] w-full rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden left-0 right-0">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

export default ReviewSection;