"use client"
import {HoverEffect} from "./ui/card-hover-effect";
import React from 'react';

interface Webinars {
  title: string,
  description: string,
  link: string;
}

function UpcomingWebinars() {
  const upcomingWebinars: Array<Webinars> = [
    {
      title: "Mastering the Art of Songwriting",
      description: "Unlock the secrets of crafting compelling lyrics and melodies. Learn from experienced songwriters about structure, storytelling, and emotional connection in music.",
      link: "/",
    },
    {
      title: "Music Production Fundamentals for Beginners",
      description: "Demystify the world of digital audio workstations (DAWs) and explore the basics of recording, editing, and mixing your music. No prior experience required!",
      link: "/",
    },
    {
      title: "Vocal Techniques for All Levels",
      description: "Whether you're a beginner or a seasoned singer, refine your vocal control, develop your range, and discover healthy singing practices in this interactive webinar.",
      link: "/",
    },
    {
      title: "The Essential Guide to Music Theory",
      description: "Gain a solid foundation in music theory, including scales, chords, harmony, and notation. Learn how to analyze music and improve your improvisation skills.",
      link: "/",
    },
    {
      title: "From Hobbyist to Pro: Building a Successful Music Career",
      description: "Get insights from industry professionals on navigating the music industry. Explore marketing strategies, building your online presence, and finding your unique musical niche.",
      link: "/",
    },
    {
      title: "The Power of Collaboration: Creating Music with Others",
      description: "Discover the joy and inspiration of collaborative music creation. Learn effective communication techniques and explore different approaches to making music together.",
      link: "/",
    }
  ];

  return (
    <div className="p-16 bg-gray-900 h-fit w-full flex flex-col justify- items-center">
      <div>
        <h1 className="text-2xl text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h1>
        <p className=" lg:text-6xl my-5 leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Enhance Your Musical Journey
        </p>

        <div className="w-full h-[100%] mx-auto px-6">
          <HoverEffect items={upcomingWebinars}/>
        </div>

        <button className="mt-12 p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent text-2xl font-sans font-normal">
            View all webinars
          </div>
        </button>
      </div>
    </div>
  );
}

export default UpcomingWebinars;