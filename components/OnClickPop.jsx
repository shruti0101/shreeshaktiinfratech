"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function OnClickPop({ isOpen, setIsOpen,onClose }) {


  const categories = [
    { id: "bar-processing-machines", name: "Bar Processing Machines" },
    { id: "concrete-mixers", name: "Concrete Mixers" },
    { id: "anti-fog-cannon-machine", name: "Anti-Fog Cannon Machine" },
    { id: "lab-testing-equipment", name: "Lab Testing Equipment" },
    { id: "material-lifting-equipment", name: "Material Lifting Equipment" },
    { id: "safety-instrument", name: "Safety Instruments" },
    {
      id: "ride-on-roller-plate-compactor",
      name: "RIDE ON ROLLER / PLATE COMPACTOR",
    },
    { id: "surveying-instrument", name: "Surveying Instruments" },
    { id: "trolley-vibrator", name: "Trolley Vibrator" },
  ];

  if (!isOpen) return null;

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[3000] overflow-y-auto">
      <div className="relative bg-white max-w-xs  md:max-w-lg  p-5 sm:p-10 rounded-lg shadow-lg ">
        {/* Small Icon (Top-left) */}
        <Image
          src="/home/form.webp"
          alt="Popup Image"
          width={63}
          height={55}
          className="hidden md:block absolute left-0 top-0 bottom-0 z-100  "
        />

        {/* Close button */}
        <button
          className="absolute cursor-pointer top-3 right-3 text-gray-600 hover:text-black"
          onClick={handleClose}
        >
          ✕
        </button>

        {/* Form Heading */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold  text-center">
          Get Your <span className="text-[#FAAC18]">Free Quote Today!</span>
        </h2>
        <p className="text-xs  sm:text-sm text-black mb-4 text-center z-200">
          Looking for a reliable <b>Bar Bending Machine</b> or other
          construction equipment? Tell us your requirement and get the best
          price quote, fast and hassle-free.
        </p>

        {/* Form */}
        <form
          action="https://formsubmit.co/shreeshaktiinfratech@gmail.com"
          method="POST"
          className="space-y-2 md:ml-3"
        >
          <input type="hidden" name="_sponsor" value="false" />
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_subject"
            value="New Enquiry from Website"
          />
          <input type="hidden" name="_nosponsor" value="false" />
          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you for reaching out! We will get back to you shortly."
          />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_cc" value="shrutiguptabhu@gmail.com" />

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full p-3 rounded-md bg-[#FFF3E0] border border-gray-300 text-sm sm:text-base"
          />

          {/* Mobile */}
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile No."
            required
            className="w-full p-3 rounded-md bg-[#FFF3E0] border border-gray-300 text-sm sm:text-base"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full p-3 rounded-md bg-[#FFF3E0] border border-gray-300 text-sm sm:text-base"
          />

          {/* Select Machine */}
          <select
            name="machine"
            required
            className="w-full p-3 rounded-md bg-[#FAAC18] border border-gray-300 text-sm sm:text-base"
          >
            <option value="">Select Product</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Message for us..."
            rows="3"
            className="w-full p-3 rounded-md bg-[#FFF3E0] border border-gray-300 text-sm sm:text-base"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full cursor-pointer py-3 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition text-sm sm:text-base"
          >
            Send My Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}
