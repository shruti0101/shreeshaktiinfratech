"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
const images = [
  {
    id: 1,
    src: "/home/hero1.webp",
    title: "Bar Bending",
    subtitle: "Machine Supplier",
    description:
      "Explore our wide selection of Bar Bending Machine Supplier, including automatic, hydraulic, and manual models for all your steel-bending needs.",
  },
  {
    id: 2,
    src: "/home/hero2.webp",
    title: "Cutting Machines",
    subtitle: "Automatic & Manual",
    description:
      "High precision cutting machines available in automatic and manual versions for all industries.",
  },
  {
    id: 3,
    src: "/home/hero3.webp",
    title: "Hydraulic Machines",
    subtitle: "Heavy Duty",
    description:
      "Durable hydraulic machines built for heavy-duty applications with top efficiency.",
  },
  {
    id: 4,
    src: "/home/hero4.webp",
    title: "Construction Tools",
    subtitle: "Best in Market",
    description:
      "Quality construction tools designed for professional use in modern projects.",
  },
];

const AccordionHero = () => {
  const [active, setActive] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768); // < md
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // ✅ Mobile view → Swiper Carousel with autoplay
  if (isMobile) {
    return (
      <div className="h-[60vh] w-full">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000, // 3s delay
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {images.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative h-[60vh] w-full">
                <img
                  src={item.src}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 text-white">
                  <h2 className="text-4xl font-bold mb-2">{item.title}</h2>
                  <p className="text-3xl text-[#FAAC18] font-semibold">
                    {item.subtitle}
                  </p>
                  <p className="mt-4 max-w-md text-lg">{item.description}</p>

                  <div className="mt-6 flex gap-4">
                    <Link
                      href="/contact-us"
                      className="bg-white px-4 py-3 rounded-lg text-black font-semibold hover:text-[#FAAC18] transition text-lg cursor-pointer inline-block"
                    >
                      Request a Quote →
                    </Link>

                    <button className="bg-[#FAAC18] px-4 py-3 rounded-lg text-black font-semibold hover:bg-yellow-500 transition cursor-pointer">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }

  // ✅ Desktop view → Accordion effect
  return (
    <div className="flex h-[86vh] w-full overflow-hidden">
      {images.map((item) => (
        <div
          key={item.id}
          onClick={() => setActive(item.id)}
          className={`relative cursor-pointer transition-[flex] duration-700 ease-in-out
        ${active === item.id ? "flex-[4]" : "flex-[0.8]"}`}
        >
          <img
            src={item.src}
            alt={item.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className={`absolute inset-0 transition-colors duration-500 
        ${active === item.id ? "bg-black/10" : "bg-black/30"}`}
          />
          <div className="absolute top-6 left-6 z-20 text-white/70 text-5xl font-bold">
            {String(item.id).padStart(2, "0")}
          </div>
          <div
            className={`absolute inset-0 z-10 flex flex-col justify-center items-start px-10 text-white transition-all duration-700
          ${
            active === item.id
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-5 pointer-events-none"
          }`}
          >
            <p className="absolute text-lg text-[#FAAC18] -left-20 -rotate-90">
              GST No. 07BPIPM2937L1ZG
            </p>
            <div className="ml-10">
              <h2 className="text-4xl md:text-7xl font-bold mb-3">
                {active === item.id && item.id === 1 ? ( // only first image
                  <Typewriter
                    words={[
                      "Bar Bending Machine",
                      "Bar Cutting Machine",
                      "Rebar Processing Solutions",
                    ]}
                    loop={0} // 0 = infinite loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                ) : (
                  item.title
                )}
              </h2>
              <p className="text-3xl text-[#FAAC18] font-semibold">
                {item.subtitle}
              </p>
              <p className="mt-6 max-w-lg text-lg">{item.description}</p>
              <div className="mt-8 flex gap-4">
                <button className="bg-white px-4 py-3 rounded-lg text-black font-semibold hover:text-[#FAAC18] transition text-lg cursor-pointer">
                  Request a Quote →
                </button>
                <Link href="/contact-us" className="bg-[#FAAC18] px-4 py-3 rounded-lg text-black font-semibold hover:bg-yellow-500 transition cursor-pointer">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionHero;
