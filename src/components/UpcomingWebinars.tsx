"use client"
import {HoverEffect} from "./ui/card-hover-effect";
import React from 'react';
import webinar_data from "@/data/webinar_data.json";

interface Webinars {
  title: string,
  description: string,
  link: string;
}

function UpcomingWebinars() {
  const upcomingWebinars: Array<Webinars> = webinar_data.upcomingWebinars;

  const json = JSON.stringify(upcomingWebinars);
  console.log(json);

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
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl" />
          <div className="px-8 py-2  bg-black rounded-2xl  relative group transition duration-200 text-white hover:bg-transparent text-2xl font-sans font-normal">
            View all webinars
          </div>
        </button>
      </div>
    </div>
  );
}

export default UpcomingWebinars;