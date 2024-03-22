"use client"
import React, {useEffect, useState} from "react";
import {InfiniteMovingCards} from "@/components/ui/infinite-moving-cards";

function ReviewSection() {
  const testimonials: Array<{ quote: string; name: string; title: string; }> = [
    {
      quote: "This course gave me the skills and confidence I needed to join a band. The instructors were patient and encouraging, and the lessons were clear and well-organized.",
      name: "Mira Kapoor ",
      title: "Piano Student",
    },
    {
      quote: "I never thought I could learn to play an instrument, but this course made it fun and accessible. Now I can express myself musically and it's incredibly rewarding.",
      name: "Aditya Singh",
      title: "Vocal Student",
    },
    {
      quote: "The flexible structure of this course allowed me to learn at my own pace. The instructors were always available to answer my questions and provide guidance.",
      name: "Priya Patel",
      title: "Violin Student ",
    },
    {
      quote: "The best part of this course was the supportive community I found. It's been amazing to connect with other students who share my passion for music.",
      name: "Rahul Sharma",
      title: "Music Production Student",
    },
    {
      quote: "This course opened my eyes to new genres and techniques. I've grown so much as a musician and I'm constantly discovering new ways to create music.",
      name: "Anika Desai",
      title: "Vocal Student",
    },

  ];

  return (

    <div
      className="h-[46rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="w-full h-full flex flex-col justify-evenly">
        <h1 className="md:text-5xl lg:text-5xl sm:text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h1>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

export default ReviewSection;