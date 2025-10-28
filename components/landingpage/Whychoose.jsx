import React from "react";
import Image from "next/image";
import Link from "next/link";
// import { ArrowRight } from "lucide-react";
import { 
  ShieldCheck, Wrench, Layers, Home, Headphones, Truck, Zap, Users 
} from "lucide-react";


const Whychoose = () => {
const features = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    title: "Proven Expertise Since 2013",
    desc: "With over a decade of experience, we understand the unique challenges of construction projects. Our team offers not only the best machines but also expert guidance to help you choose the right equipment for your specific needs.",
  },
  {
    icon: <Wrench className="w-6 h-6 text-white" />,
    title: "ISO 9001:2013 Certified Quality Standards",
    desc: "Every machine we supply — from bar bending machines to concrete mixers — undergoes rigorous quality checks. Our ISO certification is a testament to our commitment to delivering reliable, safe, and durable products.",
  },
  {
    icon: <Layers className="w-6 h-6 text-white" />,
    title: "Complete Product Range Under One Roof",
    desc: "We're not just a <strong class='text-black'>Bar Bending Machine Supplier</strong> — we offer 100+ construction solutions like bar cutting machines, concrete mixers, hoists, hanging platforms, and safety gear, giving you everything you need from one trusted source.",
  },
  {
    icon: <Home className="w-6 h-6 text-white" />,
    title: "Durability That Saves You Money",
    desc: "We design and source machines that last. Built from premium-grade raw materials and tested in real project conditions, our products minimize downtime and reduce maintenance costs.",
  },
  {
    icon: <Headphones className="w-6 h-6 text-white" />,
    title: "24/7 Dedicated Customer Support",
    desc: "Your work doesn’t stop, and neither do we. Our responsive support team is available around the clock to assist you with any queries, breakdowns, or spare part requirements.",
  },
  {
    icon: <Truck className="w-6 h-6 text-white" />,
    title: "Nationwide Delivery & Service Network",
    desc: "Whether you’re in a metro city or a remote construction site, we ensure timely delivery and prompt service across India.",
  },
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: "Commitment to Innovation & Safety",
    desc: "We stay ahead by adopting the latest technologies in machinery manufacturing. Each product is designed for maximum safety, ensuring that your team can work efficiently without compromise.",
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: "Trusted by Leading Builders & Contractors",
    desc: "Our reputation as a reliable <strong class='text-black'>Bar Bending Machine Supplier</strong> is built on long-term partnerships with top builders, contractors, and infrastructure companies who count on us for consistent quality and dependable service.",
  },
];

  return (
    <div>
      <section
        className="relative bg-fixed bg-center bg-cover mt-25 md:mt-0 md:py-15"
        style={{
          backgroundImage: "url('/home/whychoose/bg.webp')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content Wrapper */}
        <div className="relative max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
              Why Choose{" "}
              <span className="text-yellow-400">Shree Shakti Infratech?</span>
            </h2>

            <p className="text-base md:text-lg text-gray-200 leading-relaxed">
              Selecting the right partner for your construction machinery is a decision that impacts project timelines, safety, and overall quality. At{" "}
              <strong className="text-[#FFAC18]">Shree Shakti Infratech,</strong> we are more than just a{" "}
              <strong className="text-[#FFAC18]">Bar Bending Machine Supplier</strong> — we are a team committed to empowering your construction success. Here’s why we stand out:
            </p>

            {/* Button */}
            <div className="flex items-center gap-4">
              <Link href="/about-us">
                <button className="group relative overflow-hidden px-6 py-3 rounded-full bg-yellow-500 text-black font-semibold transition-all duration-300 hover:bg-yellow-400 hover:scale-105">
                  <span className="relative z-10">Learn More</span>
                  <div className="absolute inset-0 bg-yellow-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </button>
              </Link>

              {/* Mobile image */}
              <div className="block md:hidden">
                <Image
                  src="/home/whychooseimg.webp"
                  alt="Rebar Machine"
                  width={140}
                  height={120}
                  className=""
                />
              </div>
            </div>
          </div>

          {/* Right Image (Desktop only) */}
          <div className="hidden md:flex justify-center">
            <Image
              src="/home/whychooseimg.webp"
              alt="Why Choose Shree Shakti Infratech"
              width={700}
              height={500}
              className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto md:py-5 px-4 sm:px-6 lg:px-12">
        <div className="grid mb-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-sm p-3 bg-white/90 hover:bg-[#FAAC18] transition duration-300 group"
            >
              {/* Icon Box */}
              <div className="bg-[#FAAC18] group-hover:bg-white w-12 h-12 flex items-center justify-center rounded mb-4 transition duration-300">
                {React.cloneElement(feature.icon, {
                  className:
                    "text-white group-hover:text-black transition duration-300 w-6 h-6 ",
                })}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold mb-2 group-hover:text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p
                className="text-black text-sm leading-relaxed group-hover:text-white/90"
                dangerouslySetInnerHTML={{ __html: feature.desc }}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Whychoose;
