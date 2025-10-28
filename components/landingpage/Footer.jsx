"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Menu,
  Linkedin,
} from "lucide-react";
import { FaPhone } from "react-icons/fa";

const categories = [
  {
    id: "bar-processing-machines",
    name: "Bar Processing Machines",
    image: "/products/automaticbarmachine.png",
  },
  { id: "concrete-mixers", name: "Concrete Mixers" },
  {
    id: "anti-fog-cannon-machine",
    name: "Anti-Fog Cannon Machine",
    image: "/products/asg2.webp",
  },
  { id: "lab-testing-equipment", name: "Lab Testing Equipment" },
  { id: "material-lifting-equipment", name: "Material Lifting Equipment" },
  { id: "safety-instrument", name: "Safety Instruments" },
  {
    id: "ride-on-roller-plate-compactor",
    name: "RIDE ON ROLLER/ PLATE COMPACTOR",
  },
  { id: "surveying-instrument", name: "Surveying Instruments" },
  { id: "trolley-vibrator", name: "Trolley Vibrator" },
  { id: "air-quality-index", name: "Air Quality Index" },
];

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer
      style={{ backgroundImage: "url('/home/bg-footer.webp')" }}
      className="relative bg-cover bg-center text-gray-300 pt-12 pb-6"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-13">
        <div className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Column 1: Logo + About + Address + Social */}
            <div>
              <div className="relative inline-block mb-4">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={180}
                  height={50}
                  className="bg-white"
                />
                <span className="absolute -top-0 -right-0 text-xs font-bold text-black">
                  ®
                </span>
              </div>

              <p className="text-sm leading-relaxed">
                Welcome to Shree Shakti Infratech, a trusted name in the realm
                of construction machines since 2013. As an ISO 9001:2013
                certified company, our dedication to excellence is unparalleled.
              </p>

             <div className="flex items-start gap-4 mt-2 flex-1">
  <a
    href="tel:+918826544443"
    className="flex items-center gap-2"
  >
    <Phone className="w-5 h-5 text-[#FAAC18] hover:scale-110 transition-transform duration-200" />
    <h5 className="text-[16px] font-semibold underline">+918826544443</h5>
  </a>
  
</div>


              {/* Address */}
              <div className="flex items-start gap-2 mt-4 text-sm">
                <MapPin className="w-10 h-10 text-[#FAAC18]" />
                <p>
                  4A, S-Block, Vishwas Park, Raja Puri Main Road, Opp. Sec – 3,
                  Dwarka, New Delhi – 110059
                </p>
              </div>

              {/* Contact + Social */}
              <div className="flex gap-4 mt-4">
                <a href="mailto:shreeshaktiinfratech@gmail.com">
                  <Mail className="w-5 h-5 text-[#FAAC18] hover:scale-110 transition-transform duration-200" />
                </a>
                <a href="tel:+911140050667">
                  <Phone className="w-5 h-5 text-[#FAAC18] hover:scale-110 transition-transform duration-200" />
                </a>
                <a
                  href="https://www.facebook.com/ShreeShaktiInfratech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-5 h-5 hover:text-[#FAAC18] cursor-pointer hover:scale-110 transition-transform duration-200" />
                </a>
                <a
                  href="https://www.instagram.com/shree_shakti_infratech/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5 hover:text-[#FAAC18] cursor-pointer hover:scale-110 transition-transform duration-200" />
                </a>
                <a
                  href="https://www.youtube.com/@ShreeShaktiInfratech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="w-5 h-5 hover:text-[#FAAC18] cursor-pointer hover:scale-110 transition-transform duration-200" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shree-shakti-infratech-248068265/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 hover:text-[#FAAC18] cursor-pointer hover:scale-110 transition-transform duration-200" />
                </a>
              </div>
            </div>

            {/* Column 2: About (Desktop) */}
            <div className="hidden  md:block md:ml-10">
              <h3 className="text-white font-semibold text-lg mb-4">About</h3>
              <ul className="space-y-2 text-sm text-white">
                <li>
                  <Link href="/" className="hover:text-[#FAAC18]">
                    HOME
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="hover:text-[#FAAC18]">
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="hover:text-[#FAAC18]">
                    BLOGS
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-[#FAAC18]">
                    PRODUCTS
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:text-[#FAAC18]">
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Products (Desktop) */}
            <div className="hidden  md:block">
              <h3 className="text-white font-semibold text-lg mb-4">
                Products
              </h3>
              <ul className="space-y-2 text-sm text-white uppercase">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <Link href={`/products`} className="hover:text-[#FAAC18]">
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Accordion */}
            <div className="md:hidden space-y-4 ">
              {/* About */}
              <div>
                <button
                  onClick={() => toggleSection("about")}
                  className="flex justify-between items-center w-full text-white font-semibold py-2"
                >
                  About <Menu className="w-5 h-5" />
                </button>
                {openSection === "about" && (
                  <ul className="space-y-2 text-sm mt-2 pl-2">
                    <li>
                      <Link href="/" className="hover:text-[#FAAC18]">
                        HOME
                      </Link>
                    </li>
                    <li>
                      <Link href="/about-us" className="hover:text-[#FAAC18]">
                        ABOUT US
                      </Link>
                    </li>
                    <li>
                      <Link href="/blogs" className="hover:text-[#FAAC18]">
                        BLOGS
                      </Link>
                    </li>
                    <li>
                      <Link href="/products" className="hover:text-[#FAAC18]">
                        PRODUCTS
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact-us" className="hover:text-[#FAAC18]">
                        CONTACT US
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              {/* Products */}
              <div>
                <button
                  onClick={() => toggleSection("products")}
                  className="flex justify-between items-center w-full text-white font-semibold py-2"
                >
                  Products <Menu className="w-5 h-5" />
                </button>
                {openSection === "products" && (
                  <ul className="space-y-2 text-sm mt-2 pl-2 uppercase">
                    {categories.map((cat) => (
                      <li key={cat.id}>
                        <Link
                          href={`/products`}
                          className="hover:text-[#FAAC18]"
                        >
                          {cat.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Privacy / Policy */}
              <div>
                <button
                  onClick={() => toggleSection("privacy")}
                  className="flex justify-between items-center w-full text-white font-semibold py-2"
                >
                  Privacy Policy <Menu className="w-5 h-5" />
                </button>
                {openSection === "privacy" && (
                  <ul className="space-y-2 text-sm mt-2 pl-2">
                    <li>
                      <Link
                        href="/privacy-policy"
                        className="hover:text-[#FAAC18]"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms" className="hover:text-[#FAAC18]">
                        Terms & Conditions
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </div>

            {/* Column 4: Trust Certificate */}
            <div>
              <h3 className="text-[#FAAC18] font-semibold text-lg mb-4">
                Trust Elite Certificate
              </h3>

              {/* Thumbnail Image */}
              <div
                className="cursor-pointer inline-block"
                onClick={() => setIsModalOpen(true)}
              >
                <Image
                  src="/home/trustseal.png"
                  alt="Trust Elite"
                  width={100}
                  height={100}
                  className="mb-4 rounded-lg hover:scale-105 transition-transform"
                />
              </div>

              <p className="text-sm leading-relaxed">
                We are proud to present the Trust Elite Certificate of
                Excellence to Shree Shakti Infratech, recognizing their
                commitment to exceptional customer service, outstanding business
                practices, and a dedication to building trust with their
                customers.
              </p>

              {/* Modal */}
              {isModalOpen && (
                <div className="fixed inset-0 bg-black/60 bg-opacity-30 flex items-center justify-center z-6000">
                  <div className="relative">
                    {/* Close Button */}
                    <button
                      className="absolute top-2 right-2 text-white text-2xl font-bold"
                      onClick={() => setIsModalOpen(false)}
                    >
                      ✕
                    </button>

                    {/* Full Certificate */}
                    <Image
                      src="/cert.webp" // full-size certificate
                      alt="Trust Elite Full"
                      width={800} // adjust as needed
                      height={500} // adjust as needed
                      className="max-w-[90vw] max-h-[80vh]  rounded-lg shadow-lg  "
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © 2025 Shree Shakti Infratech, All Rights Reserved. Managed and
        Developed By{" "}
        <a
          href="https://promozionebranding.com/"
          className="text-[#FAAC18] hover:underline"
        >
          Promozione Branding Pvt Ltd.
        </a>
      </div>
    </footer>
  );
};

export default Footer;
