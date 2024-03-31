import React from 'react';
import Link from "next/link";

function PageFooter() {
  return (
    <div className=" px-3.5 lg:px-10 md:px-7 sm:px-3.5 w-full flex flex-col justify-center items-center pb-20">
      <div
        className="h-fit w-[98%] grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 relative lg:left-[55px] gap-y-4">
        <div className="h-full w-full flex flex-col justify-evenly gap-7 p-3.5 opacity-90">
          <h1 className="text-3xl font-sans font-bold">About Us</h1>
          <div className="text-lg font-normal font-sans tracking-tight">Music School is a premier institution dedicated
            to teaching art and science of music. We nurture talent from the ground up, fostering a vibrant community of
            musicians.
          </div>
        </div>

        <div className="h-fit w-full gap-7 flex flex-col sm:pl-20 p-3.5 pl-16">
          <h1 className=" md:left-2 text-3xl font-sans font-bold">Quick Links</h1>
          <div className="h-fit w-fit flex flex-col gap-2 text-lg font-normal font-sans tracking-tight top-20 opacity-90">
            <Link href="/" className=" hover:opacity-[0.8]"><span>Home</span></Link>
            <Link href="/" className=" hover:opacity-[0.8]"><span>About</span></Link>
            <Link href="/courses" className=" hover:opacity-[0.8]"><span>Courses</span></Link>
            <Link href="/contact" className=" hover:opacity-[0.8]"><span>Contact</span></Link>
          </div>
        </div>

        <div className="h-fit w-full flex flex-col gap-7 p-3.5">
          <h1 className="text-3xl font-sans font-bold">Follow Us</h1>
          <div className="flex gap-3.5 w-full max-w-[100%] flex-wrap text-lg font-normal text-left font-sans tracking-tight opacity-90">
            <Link href="/" className=" hover:opacity-[0.8]"><span>Facebook</span></Link>
            <Link href="/" className=" hover:opacity-[0.8]"><span>Twitter</span></Link>
            <Link href="/" className=" hover:opacity-[0.8]"><span>Instagram</span></Link>
          </div>
        </div>

        <div className="h-fit w-full  gap-7 flex flex-col sm:p-3.5 pl-14 py-3.5">
          <h1 className="text-3xl font-sans font-bold ">Contact Us</h1>
          <div className="flex flex-col justify-center align-middle gap-1 flex-wrap
          text-lg font-normal font-sans tracking-tight  opacity-90">
            <span>Bhubaneswar, India</span>
            <span>Patia 100001</span>
            <span>music@musicschool.com</span>
            <span>Phone: (123) 456-7890</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageFooter;