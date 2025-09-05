"use client";
import React, { useState } from "react";

const categories = [
  { id: "bar-processing-machines", name: "Bar Processing Machines", image: "/products/automaticbarmachine.png" },
  { id: "concrete-mixers", name: "Concrete Mixers" },
  { id: "anti-fog-cannon-machine", name: "Anti-Fog Cannon Machine", image: "/products/asg2.webp" },
  { id: "lab-testing-equipment", name: "Lab Testing Equipment" },
  { id: "material-lifting-equipment", name: "Material Lifting Equipment" },
  { id: "safety-instrument", name: "Safety Instruments" },
  { id: "ride-on-roller-plate-compactor", name: "RIDE ON ROLLER / PLATE COMPACTOR" },
  { id: "surveying-instrument", name: "Surveying Instruments" },
  { id: "trolley-vibrator", name: "Trolley Vibrator" },
];

const Enquiry = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    await fetch("https://formsubmit.co/shreeshaktiinfratech@gmail.com", {
      method: "POST",
      body: formData,
    });

    setSubmitted(true);
    e.target.reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-[3000]">
      <div className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-lg relative overflow-hidden">
        {/* Decorative Header */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 h-20 w-full"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-black hover:text-red-500 transition text-2xl font-bold"
        >
          ✕
        </button>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
            Enquiry Form
          </h2>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* Hidden Inputs */}
            <input type="hidden" name="_sponsor" value="false" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Enquiry from Website" />
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
              placeholder="Your Name"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            {/* Phone */}
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            {/* Product Dropdown */}
            <select
              name="product"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
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
              placeholder="Your Message"
              rows="4"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-lg font-semibold py-3 rounded-lg shadow-md hover:from-yellow-500 hover:to-orange-500 hover:scale-[1.02] transition"
            >
              Submit Enquiry
            </button>
          </form>

          {submitted && (
            <p className="text-green-600 font-semibold text-center mt-4 animate-pulse">
              ✅ Thank you! Your enquiry has been submitted.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
