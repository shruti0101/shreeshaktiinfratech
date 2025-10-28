"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/landingpage/Footer";



export const metadata = {
  title: "Contact Shree Shakti Infratech - No.1 bar bending Supplier",
  description: "Manufacturer of Steel Bar Bender Machine, Rebar Cutting Machine, Concrete Grinding Polishing Machine, Walk Behind Power Trowel, and Road Scarifier Machine offered by Shree Shakti Infratech, New Delhi, Delhi",
};

export default function Page() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/shreeshaktiinfratech@gmail.com",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
      // Hide message after 5 seconds
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[650px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/home/hero1.webp')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-yellow-600/40" />
          <Image
            className="hidden md:block absolute right-38 z-100 animate-bounce top-30"
            src="/home/round.webp"
            alt="Round Image"
            width={150}
            height={500}
          />
        </div>

        <div className="relative pt-18 z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-16">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
              Contact{" "}
              <span className="text-[#FAAC18] relative inline-block animate-pulse">
                Us
                <span className="absolute left-0 -bottom-2 w-full h-1 bg-[#FAAC18] rounded-full"></span>
              </span>
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-100 max-w-md mx-auto md:mx-0">
              Let’s build something amazing together. Reach out and we’ll get
              back to you right away.
            </p>
          </div>

          <div className="hidden md:block relative w-72 h-70 md:w-96 md:h-100">
            <div className="absolute inset-0 rounded-2xl border-4 border-[#FAAC18] animate-pulse" />
            <img
              src="/home/smog-gun.webp"
              alt="CTA Illustration"
              className="relative w-full h-full object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-10 px-6 md:px-20">
        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="flex bg-[#FAAC18] text-white p-6 rounded-md shadow-md flex-col items-center justify-center">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-2xl">
                <Phone />
              </span>
              <h3 className="font-bold text-lg">Phone Number</h3>
            </div>
            <p className="text-lg">+91 8826544443</p>
            <p className="text-lg">+91 9654243444</p>
          </div>

          <div className="bg-white border-2 border-[#FAAC18] text-center p-6 rounded-md shadow-md">
            <div className="flex items-center justify-center space-x-2 mb-2 text-[#FAAC18]">
              <span className="text-2xl">
                <Mail />
              </span>
              <h3 className="font-bold text-lg">Email Address</h3>
            </div>
            <p className="text-gray-800 text-lg">
              shreeshaktiinfratech@gmail.com
            </p>
          </div>

          <div className="bg-[#FAAC18] text-white p-6 rounded-md shadow-md flex flex-col items-center justify-center">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-2xl">📍</span>
              <h3 className="font-bold text-lg">Address</h3>
            </div>
            <p className="text-center">
              4A, S-Block, Vishwas Park,
              <br /> Raja Puri Main Road, Opp. Sec – 3,
              <br /> Dwarka, New Delhi – 110059
            </p>
          </div>
        </div>

        {/* Form + Map */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Get in Touch with Us
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                  className="border rounded-md px-4 py-2 w-full"
                />
                <input
                  type="tel"
                  name="phone"
                  required
                  maxLength={10}
                  pattern="[0-9]{10}"
                  placeholder="Phone No."
                  className="border rounded-md px-4 py-2 w-full"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="city"
                  placeholder="City / Location"
                  className="border rounded-md px-4 py-2 w-full"
                />
                <select
                  name="requirement"
                  className="border rounded-md px-4 py-2 w-full bg-[#FAAC18] text-white font-semibold"
                >
                  <option>Product Requirement</option>
                  <option>Bar Bending Machine</option>
                  <option>Concrete Mixer</option>
                  <option>Material Lifting</option>
                  <option>Safety Instruments</option>
                  <option>Trolley and Vibrator</option>
                  <option>Surveying Equipments</option>
                  <option>Lab Testing Equipments</option>
                  <option>Ride On Roller Machines</option>
                  <option>Anti Smog Gun</option>
                </select>
              </div>

              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                className="border rounded-md px-4 py-2 w-full"
              />
              <textarea
                name="message"
                placeholder="Message for us.."
                rows={4}
                className="border rounded-md px-4 py-2 w-full"
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-[#FAAC18] text-white px-6 py-3 rounded-md font-semibold w-full"
              >
                {loading ? "Sending..." : "Send"}
              </button>

              {status === "success" && (
                <p className="text-green-600 font-semibold mt-2">
                  Thank you! Your message has been sent.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 font-semibold mt-2">
                  Oops! Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>

          <div className="w-full h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d80271.47017799332!2d77.055914!3d28.607124!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ad4c9d93cfb%3A0xbced0bcc7aa415c0!2sShree%20Shakti%20Infratech!5e1!3m2!1sen!2sin!4v1756188371979!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-md shadow-md w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
