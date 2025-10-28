"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { ShieldCheck, Layers, Headphones } from "lucide-react";
import Link from "next/link";
export default function AboutSection() {
  return (
    <>
      <section className="relative bg-[#FFFAF1] overflow-hidden">
        <div className="max-w-7xl  mt-8 md:mt-0 mx-auto px-6 md:px-12  grid grid-cols-1 md:grid-cols-2  items-center">
          {/* Background Rectangle */}
          <Image
            src="/home/about-rect.webp"
            width={500}
            height={500}
            alt="Background rectangle"
            className="w-30 md:w-120 h-auto absolute right-0 top-0"
          />

          {/* Left Content */}
          <div className="relative">
            {/* About Us with blob behind */}
            <div>
              <img
                src="/shapebg.gif"
                alt="Background Shape"
                className="absolute -top-8 -left-8 md:-left-15 md:-top-13 -z-0 w-[100px] md:w-[150px]"
              />
              <span className="relative z-10 text-sm font-medium text-gray-600">
                About Us
              </span>
            </div>

            <h2 className="max-w-xl mr-7 md:mr-0 md:w-full relative text-xl md:text-4xl z-10 font-extrabold text-gray-900 leading-tight">
              Shree Shakti Infratech - India’s Leading{" "}
              <span className="text-[#FAAC18]">
                Bar Bending Machine Supplier
              </span>
            </h2>

            <p className="mt-4 text-gray-600 text-md md:text-lg max-w-xl">
              Founded in 2013,{" "}
              <span className="bold">Shree Shakti Infratech</span> is a trusted{" "}
              <span className="bold">Bar Bending Machine Supplier</span> and ISO
              9001:2013 certified company. We deliver high-quality construction
              machinery designed for durability, precision, and efficiency. With
              over 100 products, including
              <strong className="text-black"> Bar Cutting Machines</strong>,
              Concrete Mixers, Hoists, and Safety Equipment, we provide complete
              solutions backed by 24/7 service support. Committed to excellence,
              we help builders and contractors achieve success—one project at a
              time.
            </p>

            <p className="mt-2 text-gray-600 text-md md:text-lg max-w-xl">
              More than just a{" "}
              <strong className="text-black">
                Bar Bending Machine Supplier
              </strong>
              , we provide complete solutions with 24/7 service support and
              expert technical assistance. Our commitment as a reliable bar
              bending machine supplier is to help clients achieve success with
              quality machines, timely service, and long-term reliability.
            </p>

            {/* Button + Image together on mobile */}
            <div className="flex items-center gap-2 md:mt-4">
              <Link href="/about-us">
                <button className="group cursor-pointer flex items-center gap-2 bg-black text-white px-3 md:px-4 py-3 rounded-full transition-all duration-300 ease-out hover:bg-gray-900 hover:shadow-lg hover:shadow-black/30 hover:scale-105">
                  <span className="relative z-10">Learn More</span>
                  <ArrowRight
                    size={15}
                    className="bg-white w-4 h-4 md:w-6 md:h-6 text-black rounded-full transform transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </Link>

              <div className="block md:hidden">
                <Image
                  src="/home/aboutimg.webp"
                  alt="Rebar Machine"
                  width={100}
                  height={100}
                  className="w-50 h-auto"
                />
              </div>
            </div>
          </div>

          {/* Right Side image */}
          <div
            className="relative justify-center md:justify-end hidden md:flex"
         
          >
            <Image
              src="/home/aboutimg.webp"
              alt="Rebar Machine"
              width={800}
              height={400}
              className="relative z-10"
            />
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="hidden md:grid relative mx-auto mb-4 max-w-7xl grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {/* Card 1 */}
          <div
            className="group border border-gray-300 flex flex-col items-center text-center p-6 bg-white shadow rounded-lg transition-all duration-300 hover:bg-[#FAAC18]"
     
          >
            <div className="bg-yellow-300 flex items-center justify-center rounded-full w-12 h-12 mb-4 transition-all duration-300 group-hover:bg-black">
              <ShieldCheck
                size={22}
                className="transition duration-300 group-hover:invert group-hover:brightness-0 group-hover:contrast-200"
              />
            </div>
            <h3 className="font-bold text-lg mb-2 group-hover:text-white">
              ISO-Certified Quality
            </h3>
            <p className="text-gray-700 text-sm group-hover:text-white">
              Our machines meet strict quality standards to ensure durability
              and precision on every job.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="group border border-gray-300 flex flex-col items-center text-center p-6 bg-white shadow rounded-lg transition-all duration-300 hover:bg-[#FAAC18]"
      
          >
            <div className="bg-yellow-300 flex items-center justify-center rounded-full w-12 h-12 mb-4 transition-all duration-300 group-hover:bg-black">
              <Layers
                size={22}
                className="transition duration-300 group-hover:invert group-hover:brightness-0 group-hover:contrast-200"
              />
            </div>
            <h3 className="font-bold text-lg mb-2 group-hover:text-white">
              Extensive Product Range
            </h3>
            <p className="text-gray-700 text-sm group-hover:text-white">
              Choose from 120+ reliable machines designed to meet diverse rebar
              processing needs.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="group border border-gray-300 flex flex-col items-center text-center p-6 bg-white shadow rounded-lg transition-all duration-300 hover:bg-[#FAAC18]"
        
          >
            <div className="bg-yellow-300 flex items-center justify-center rounded-full w-12 h-12 mb-4 transition-all duration-300 group-hover:bg-black">
              <Headphones
                size={22}
                className="transition duration-300 group-hover:invert group-hover:brightness-0 group-hover:contrast-200"
              />
            </div>
            <h3 className="font-bold text-lg mb-2 group-hover:text-white">
              Customer Support
            </h3>
            <p className="text-gray-700 text-sm group-hover:text-white">
              Dedicated after-sales service and support to ensure maximum
              satisfaction.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
