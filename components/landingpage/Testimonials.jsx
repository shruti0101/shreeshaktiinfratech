"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Rajesh Sharma",
    text: "I recommend Shree Shakti Infratech to anyone looking for a trustworthy Bar Bending Machine Supplier in India. Their products have made our work faster and more efficient.",
    // img: "/client1.jpg",
    icon: "💬",
  },
  {
    name: "Arvind Yadav",
    text: "From consultation to installation, the process was seamless. As a Bar Bending Machine Supplier in India, they set a high benchmark for quality and service.",
    // img: "/client2.jpg",
    icon: "👏",
  },
  {
    name: "Imran Khan",
    text: "We have been sourcing our bar bending machines from Shree Shakti Infratech for the past 5 years. They stand out for product quality, timely delivery, and support.",
    // img: "/client3.jpg",
    icon: "💬",
  },
];

const ClientsSpeak = () => {
  return (
    <section className="max-w-full bg-[#666666] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left Section */}
      <div>
        <p className="text-white">Testimonials</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Our Clients <span className="text-[#FAAC18]">Speak</span>
        </h2>
        <p className="mt-6 text-lg text-white leading-relaxed">
          Discover how our bar bending machines have helped businesses achieve
          precision, efficiency, and lasting results — straight from the people
          who use them every day.
        </p>
        <button className="mt-7 group cursor-pointer flex items-center gap-2 bg-black text-white px-3 md:px-4 py-3 rounded-full transition-all duration-300 ease-out hover:bg-gray-900 hover:shadow-lg hover:shadow-black/30 hover:scale-105">
          <span className="relative z-10">Learn More</span>
          <ArrowRight
            size={15}
            className="bg-white w-4 h-4 md:w-6 md:h-6 text-black rounded-full transform transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>

      {/* Right Section (Infinite Auto Scroll Testimonials) */}
      <div className="hidden md:block relative h-[400px] overflow-hidden">
        <motion.div
          className="flex flex-col gap-6"
          animate={{ y: ["0%", "-50%"] }} // only scroll half (since we duplicated)
          transition={{
            repeat: Infinity,
            duration: 20, // slower scroll for smoothness
            ease: "linear",
          }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-gray-100 transition-all duration-300 p-4 border-l-5 border-yellow-300 hover:bg-[#FFFAF1] rounded-sm"
            >
              {/* <Image
                src={t.img}
                alt={t.name}
                width={60}
                height={60}
                className="rounded-full object-cover"
              /> */}
              <div>
                <h4 className="font-semibold text-lg">{t.name}</h4>
                <p className="text-sm text-gray-600">{t.text}</p>
              </div>
              <span className="ml-auto text-2xl">{t.icon}</span>
            </div>
          ))}
        </motion.div>
      </div>


<div className="block md:hidden relative h-auto w-full px-4  overflow-hidden">
  <motion.div
    className="flex flex-row gap-4"
    animate={{ x: ["0%", "-100%"] }} 
    transition={{
      repeat: Infinity,
      duration: 25, // smoother, slower scroll
      ease: "linear",
    }}
  >
    {[...testimonials, ...testimonials].map((t, i) => (
      <div
        key={i}
        className="flex flex-col justify-between min-w-[220px] max-w-[240px] bg-white shadow-md transition-all duration-300 p-3 border-l-4 border-yellow-400 hover:bg-[#FFFAF1] rounded-lg"
      >
        <div>
          <h4 className="font-semibold text-base">{t.name}</h4>
          <p className="text-sm text-gray-600 line-clamp-3">{t.text}</p>
        </div>
        <span className="ml-auto text-xl text-yellow-500">{t.icon}</span>
      </div>
    ))}
  </motion.div>
</div>

    </section>
  );
};

export default ClientsSpeak;
