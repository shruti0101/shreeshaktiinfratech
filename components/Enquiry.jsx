"use client";
import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaIndustry,
  FaRegCommentDots,
} from "react-icons/fa";

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

const Enquiry = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://formsubmit.co/ajax/shreeshaktiinfratech@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }

    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-[3000]">
      <div className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-xl relative overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="bg-[#FFAC18] h-13 w-full flex items-center justify-between px-6">
          <h2 className="text-2xl font-bold text-white tracking-wide">
            📩 Enquiry Form
          </h2>
          <button
            onClick={onClose}
            className="text-white text-2xl hover:text-red-400 transition"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-4 bg-gradient-to-br from-gray-50 to-white">
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {/* Hidden fields */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_subject"
              value="New Enquiry from Website"
            />
            <input
              type="hidden"
              name="_next"
              value="https://barbendingmachinesupplier.com/thank-you"
            />

            {/* Name */}
            <div className="flex items-center border rounded-lg px-4 py-3 bg-white shadow-sm focus-within:ring-2 focus-within:ring-yellow-500">
              <FaUser className="text-gray-500 mr-3" />
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                required
                className="w-full focus:outline-none text-gray-700"
              />
            </div>

            {/* Email */}
            <div className="flex items-center border rounded-lg px-4 py-3 bg-white shadow-sm focus-within:ring-2 focus-within:ring-yellow-500">
              <FaEnvelope className="text-gray-500 mr-3" />
              <input
                type="email"
                name="email"
                placeholder="Your Business Email *"
                required
                className="w-full focus:outline-none text-gray-700"
              />
            </div>

            {/* Phone */}
            <div className="flex items-center border rounded-lg px-4 py-3 bg-white shadow-sm focus-within:ring-2 focus-within:ring-yellow-500">
              <FaPhone className="text-gray-500 mr-3" />
              <input
                type="tel"
                name="phone"
                pattern="[0-9]{10}"
                maxLength={10}
                placeholder="Your Phone"
                className="w-full focus:outline-none text-gray-700"
              />
            </div>

            {/* Product Dropdown */}
            <div className="flex items-center border rounded-lg px-4 py-3 bg-white shadow-sm focus-within:ring-2 focus-within:ring-yellow-500">
              <FaIndustry className="text-gray-500 mr-3" />
              <select
                name="product"
                required
                className="w-full bg-transparent focus:outline-none text-gray-700"
              >
                <option value="">Select Product *</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="flex items-start border rounded-lg px-4 py-3 bg-white shadow-sm focus-within:ring-2 focus-within:ring-yellow-500">
              <FaRegCommentDots className="text-gray-500 mt-1 mr-3" />
              <textarea
                name="message"
                placeholder="Your Message *"
                rows="4"
                required
                className="w-full focus:outline-none text-gray-700"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-lg font-semibold py-3 rounded-lg shadow-md hover:from-yellow-600 hover:to-orange-600 hover:scale-[1.02] transition"
            >
              🚀 Submit Enquiry
            </button>
          </form>

          {/* Status Message */}
          {status === "success" && (
            <p className="text-green-600 font-semibold text-center mt-5 animate-pulse">
              ✅ Thank you! Your enquiry has been submitted.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 font-semibold text-center mt-5 animate-pulse">
              ❌ Oops! Something went wrong. Please try again.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
