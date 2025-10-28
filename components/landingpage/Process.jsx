"use client";
import React from "react";
import Link from "next/link";

  const steps = [
    {
      title: "Understanding Your Requirements in Detail",
      desc: "Our process begins with an in-depth consultation to fully understand your project scale, reinforcement bar specifications, site challenges, and operational needs. This helps us recommend the most suitable <strong class='text-black'>Bar Bending Machine Machine</strong> that matches your productivity goals and budget.",
    },
    {
      title: "Expert Consultation & Personalized Product Selection",
      desc: "With years of expertise as a  <strong class='text-black'>Bar Bending Machine Supplier in India</strong>, our technical team guides you through various models and configurations. We focus on efficiency, safety features, bending precision, and durability to ensure your investment delivers maximum output.",
    },
    {
      title: "Precision Manufacturing & Strict Quality Testing",
      desc: "Every machine is manufactured using high-grade raw materials and advanced engineering techniques. Before leaving our facility, each <strong class='text-black'>Bar Bending Machine</strong> undergoes rigorous ISO 9001:2013 quality checks, ensuring top-notch performance and long service life.",
    },

        {
      title: "Nationwide Quick & Secure Delivery",
      desc: "As a leading <strong class='text-black'>Bar Bending Machine Supplier in India</strong>, we ensure safe, timely delivery to any location across the country — whether it’s a metro city or a remote construction site. Our reliable logistics network minimizes downtime so your project stays on schedule.",
    },

      {
      title: "Professional Installation & Operator Training",
      desc: "Our service doesn’t end at delivery. We provide complete on-site installation, calibration, and hands-on training for your operators, ensuring they can run the <strong class='text-black'>Bar Bending Machine</strong> efficiently and safely from day one.",
    },

      {
      title: "Continuous After-Sales Support & Maintenance",
      desc: "Every machine is manufactured using high-grade raw materials and advanced engineering techniques. Before leaving our facility, each <strong class='text-black'>Bar Bending Machine</strong> undergoes rigorous ISO 9001:2013 quality checks, ensuring top-notch performance and long service life.",
    },

    

  
  ];

export default function ProcessSection() {
  return (
  


<>
  <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
      {/* Heading */}
      <div className="text-center mx-auto max-w-3xl mb-12">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Our Process –{" "}
          <span className="text-[#FAAC18]">
            Delivering Excellence Every Step of the Way
          </span>
        </h2>
        <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
          At <span className="font-bold">Shree Shakti Infratech</span>, we take pride in
          being a trusted <span className="font-bold">Bar Bending Machine Supplier in India</span> 
          that goes beyond just delivering machinery — we deliver complete construction 
          solutions. Our structured process ensures you get not only the right equipment 
          but also the best service and long-term value.
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch relative">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-[#FAAC18] text-black p-6 rounded-md shadow-md relative flex flex-col h-full"
          >
            <h3 className="font-bold mb-3">{step.title}</h3>
          
              <p
                className="text-black text-sm leading-relaxed group-hover:text-white/90"
                dangerouslySetInnerHTML={{ __html: step.desc }}
              />

            {/* Arrows */}
            {index < steps.length - 1 && (
              <>
                {/* Desktop Arrow (right side) */}
                <div className="hidden md:block absolute top-1/2 right-[-30px] transform -translate-y-1/2 text-2xl">
                  ➝
                </div>

                {/* Mobile Arrow (bottom center) */}
                <div className="block md:hidden absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 text-2xl">
                  ↓
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center">

<Link href="/contact-us">

        <button className="bg-[#fef3c7] text-xl border-2 my-10 cursor-pointer font-bold py-2 px-4 border-yellow-500 hover:underline hover:scale-105 transition-all duration-300 ease-out">
          Get Your Bar Bending Machine{" "}
          <span className="text-[#FAAC18]">Now! ➝</span>
        </button>
</Link>

      </div>
    </section>




</>

  );
}
