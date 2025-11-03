import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto my-16 px-4  md:px-0 flex flex-col md:flex-row items-center gap-10">
      {/* Left Images */}
      <div className="flex-1 flex flex-col gap-6 relative">
        {/* Top Image */}
        <div className="relative  w-80 mr-16 md:w-10/12 lg:w-10/12 h-80 lg:h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/images/about_us/person.jpg"
            alt="Person"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Bottom Image */}
        <div className="h-60 w-72 lg:h-[300px] rounded-lg overflow-hidden border-10 border-white absolute top-40 left-24 md:left-40  md:w-7/12 lg:w-3/4 ">
          <Image
            src="/images/about_us/parts.jpg"
            alt="Parts"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Right Text */}
      <div className="flex-1 flex flex-col justify-center gap-4">
        <p className="text-red-500 font-bold uppercase">About Us</p>
        <h1 className="text-4xl md:text-2xl lg:text-5xl font-bold leading-snug">
          We are qualified & of experience in this field
        </h1>
        <p className="text-gray-700 md:text-xs lg:text-base">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected humour,
          or randomised words which look even slightly believable.
        </p>
        <p className="text-gray-700 md:text-xs lg:text-base">
          The majority have suffered alteration in some form, by injected humour,
          or randomised words which look even slightly believable.
        </p>
        <button className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold btn btn-md md:btn-xs lg:btn-md px-6 py-3 rounded-md w-max">
          Get More Info
        </button>
      </div>
    </div>
  );
}
