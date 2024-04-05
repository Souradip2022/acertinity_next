"use client"
import React, {useEffect, useState} from "react";
import {InfiniteMovingCards} from "@/components/ui/infinite-moving-cards";
import review_data from "@/data/review_data.json";

function ReviewSection() {
  const testimonials: Array<{ quote: string; name: string; title: string; }> = review_data.testimonials;

  return (
    <div
      className="h-[46rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="w-full h-full flex flex-col justify-evenly">
        <h1 className="md:text-5xl lg:text-5xl text-3xl font-bold text-center mb-8 z-10 px-5">Hear our Harmony: Voices of success</h1>
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