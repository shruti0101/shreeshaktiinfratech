"use client";
import React from "react";
import Image from "next/image";

const Cta = () => {
  return (
    <>
   

      <section className="relative bg-white py-3 md:py-10 px-4 md:px-12">
      
        <Image
          src="/home/ctagif.gif"
          alt="CTA Animation"
          width={300}
          height={200}
          className="hidden md:block absolute -left-20 top-0"
        />
      
        {/* Heading */}
        <div className="flex items-center justify-center text-center mb-8">
          <p className="max-w-4xl font-semibold text-lg md:text-3xl leading-snug">
            Apne Construction Projects ko Upgrade karein – High-Quality Bar
            Bending Machine aur Construction Equipment ke saath!
            <br />
            <span className="text-[#FAAC18]">
              Aaj hi Contact karein aur Best Deals paayein
            </span>
          </p>
        </div>

        {/* Grid Layout */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Image */}
          <div className="absolute -bottom-23 -left-5 w-45 md:w-auto  md:relative md:bottom-auto md:left-auto">
            <Image
              src="/home/ctaimg1.webp"
              alt="Construction Equipment"
              width={500}
              height={400}
              className="object-contain"
            />
          </div>

          {/* Right Side - Form */}
          <div className="bg-white shadow-md border border-gray-200 rounded-lg p-3 md:p-6">
            <form
              action="https://formsubmit.co/YOUR_EMAIL_HERE"
              method="POST"
              className="space-y-2 md:space-y-4"
            >
              {/* Disable captcha (optional) */}
              <input type="hidden" name="_captcha" value="false" />
              {/* Redirect after submission */}
              <input
                type="hidden"
                name="_next"
                value="https://yourdomain.com/thank-you"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone No."
                  required
                  className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="city"
                  placeholder="City / Location"
                  required
                  className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <select
                  name="requirement"
                  required
                  className="w-full bg-[#FAAC18] border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 hover:bg-yellow-500"
                >
                  <option value="">Product Requirement</option>
                  <option value="Bar Bending Machine">
                    Bar Bending Machine
                  </option>
                  <option value="Concrete Mixer">Concrete Mixer</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <textarea
                rows={4}
                name="message"
                placeholder="Message for us.."
                className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#FAAC18] text-white font-semibold py-3 rounded-md hover:bg-yellow-500 transition duration-300"
              >
                Get Free Consultation Today!
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;
