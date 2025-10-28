"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Rajesh Sharma",
    text: "We have been sourcing our bar bending machines from Shree Shakti Infratech for the past 5 years. As a <strong class='text-black'>Bar Bending Machine Supplier in India</strong> Bar Bending Machine Supplier in India, they stand out for their product quality, on-time delivery, and responsive service team. Their machines have never let us down on site.",
    // img: "/client1.jpg",
    icon: "💬",
  },
  {
    name: "Ananya Verma",
    text: "Shree Shakti Infratech is more than just a supplier — they are a reliable partner. The  bar bending machine we purchased works flawlessly even under heavy usage, and their after-sales support is excellent. Truly the best <strong class='text-black'>Bar Bending Machine Supplier in India</strong> we have worked with.",
    // img: "/client2.jpg",
    icon: "👏",
  },
  {
    name: "Imran Khan",
    text: "From the first inquiry to installation, the process was smooth and professional. The quality of their bar bending machines is unmatched, and the training provided to our team was a big plus. Highly recommend them as a trustworthy <strong class='text-black'>Bar Bending Machine Supplier in India</strong>.",
    // img: "/client3.jpg",
    icon: "💬",
  },

   {
    name: "Pooja Mehta",
    text: "From consultation to installation, the process was seamless. As a <strong class='text-black'>Bar Bending Machine Supplier in India</strong>, they set a high benchmark for quality and service",
    // img: "/client3.jpg",
    icon: "💬",
  },

   {
    name: "Arvind Yadav ",
    text: "I recommend Shree Shakti Infratech to anyone looking for a trustworthy <strong class='text-black'>Bar Bending Machine Supplier in India</strong>. Their products have made our work faster and more efficient",
    // img: "/client3.jpg",
    icon: "💬",
  },
];

const ClientsSpeak = () => {
  return (
    <section className="max-w-full bg-[#FFFAF1] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left Section */}
      <div>
        <p className="text-black">Testimonials</p>
        <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
          Our Clients <span className="text-[#FAAC18]">Speak</span>
        </h2>
        <p className="mt-6 text-lg text-black leading-relaxed">
          Discover how our bar bending machines have helped businesses achieve
          precision, efficiency, and lasting results — straight from the people
          who use them every day.
        </p>
     
      </div>

      {/* Right Section (Infinite Auto Scroll Testimonials) */}
    {/* Right Section (Infinite Auto Scroll Testimonials) */}
<div className="hidden md:block relative h-[400px] overflow-hidden">
  <motion.div
    className="flex flex-col gap-6"
    animate={{ y: ["0%", "-50%"] }}
    transition={{
      repeat: Infinity,
      duration: 20,
      ease: "linear",
    }}
  >
    {[...testimonials, ...testimonials].map((t, i) => (
      <div
        key={i}
        className="flex items-start gap-4 bg-gray-100 transition-all duration-300 p-4 border-l-5 border-yellow-300 hover:bg-[#FFFAF1] rounded-sm"
      >
        <div>
          <h4 className="font-semibold text-lg">{t.name}</h4>
          <p
            className="text-sm text-gray-600"
            dangerouslySetInnerHTML={{ __html: t.text }}
          />
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
            <p
                className="text-black text-sm leading-relaxed group-hover:text-white/90"
                dangerouslySetInnerHTML={{ __html: t.text }}
              />
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
