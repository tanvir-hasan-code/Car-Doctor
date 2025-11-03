"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Banner() {
  const slides = [
    {
      id: 1,
      image: "/images/banner/1.jpg",
      title: "Expert Car Repair & Maintenance",
      desc: "Reliable, affordable, and professional car servicing you can trust.",
      btnText: "Book Appointment",
    },
    {
      id: 2,
      image: "/images/banner/2.jpg",
      title: "Your Car Deserves the Best Care",
      desc: "Oil changes, diagnostics, and complete vehicle checkups for all models.",
      btnText: "View Our Services",
    },
    {
      id: 3,
      image: "/images/banner/3.jpg",
      title: "Fast & Friendly Auto Repair Experts",
      desc: "Get back on the road quickly with our same-day repair service.",
      btnText: "Get Started",
    },
    {
      id: 4,
      image: "/images/banner/4.jpg",
      title: "Premium Car Detailing & Wash",
      desc: "Bring back your car’s showroom shine with our detailing experts.",
      btnText: "Book a Wash",
    },
    {
      id: 5,
      image: "/images/banner/5.jpg",
      title: "Genuine Parts, Guaranteed Service",
      desc: "We use only certified parts for long-lasting vehicle performance.",
      btnText: "Check Parts",
    },
    {
      id: 6,
      image: "/images/banner/6.jpg",
      title: "Trusted Mechanics, Transparent Pricing",
      desc: "No hidden costs, no surprises — just honest service every time.",
      btnText: "Contact Us",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="relative max-w-7xl mx-auto my-5 rounded-3xl overflow-hidden h-[50vh] md:h-[90vh] shadow-xl">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority
          />

          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent animate-gradient-move"></div>

          {/* Animated Text */}
          <div
            className={`absolute inset-0 flex flex-col justify-center px-10 md:px-24 text-white transition-all duration-700 ${
              index === currentIndex
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg animate-fade-in">
              {slide.title}
            </h2>
            <p className=" md:text-2xl mb-6 max-w-2xl drop-shadow-md animate-fade-in-delay">
              {slide.desc}
            </p>
            <button className="bg-red-500 w-fit btn btn-outline btn-xs md:btn-md hover:bg-red-600 px-8 py-3  rounded-md lg:text-lg font-semibold transition animate-fade-in-delay-2">
              {slide.btnText}
            </button>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/30 hover:bg-white/60 text-black p-3 rounded-full"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/30 hover:bg-white/60 text-black p-3 rounded-full"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              currentIndex === index ? "bg-red-500 scale-110" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
