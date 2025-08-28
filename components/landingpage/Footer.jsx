"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Menu,
} from "lucide-react";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer
      style={{ backgroundImage: "url('/home/bg-footer.webp')" }}
      className="relative bg-cover bg-center text-gray-300 pt-12 pb-6"

    >
      
      <div className="max-w-7xl mx-auto px-6 md:px-22">
        {/* Logo + About + Address + Trust (Responsive) */}
        <div className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Column 1: Logo, About, Address, Social */}
            <div>
              <Image
                src="/logo.webp"
                alt="Logo"
                width={180}
                height={50}
                className="mb-4 bg-white"
              />
              <p className="text-sm leading-relaxed">
                Welcome to Shree Shakti Infratech, a trusted name in the realm
                of construction machines since 2013. As an ISO 9001:2013
                certified company, our dedication to excellence is unparalleled.
              </p>

              {/* Address */}
              <div className="flex items-start gap-2 mt-4 text-sm">
                <MapPin className="w-5 h-5 text-[#FAAC18]" />
                <p>
                  4A, S-Block, Vishwas Park, Raja Puri Main Road,
                  <br /> Opp. Sec – 3, Dwarka, New Delhi – 110059
                </p>
              </div>

              {/* Contact + Social */}
              <div className="flex gap-4 mt-4">
                <Mail className="w-5 h-5 text-[#FAAC18] hover:scale-110 transition-transform duration-200" />
                <Phone className="w-5 h-5 text-[#FAAC18] hover:scale-110 transition-transform duration-200" />
                <Facebook className="w-5 h-5 hover:text-[#FAAC18] cursor-pointer hover:scale-110 transition-transform duration-200" />
                <Instagram className="w-5 h-5 hover:text-[#FAAC18] cursor-pointer hover:scale-110 transition-transform duration-200" />
                <Youtube className="w-5 h-5 hover:text-[#FAAC18] cursor-pointer hover:scale-110 transition-transform duration-200" />
                <Twitter className="w-5 h-5 hover:text-[#FAAC18] cursor-pointer hover:scale-110 transition-transform duration-200" />
              </div>
            </div>

            {/* Column 2: About Us */}
            <div className="hidden md:mt-10 md:block md:ml-10">
              <h3 className="text-white font-semibold text-lg mb-4">About Us</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-[#FAAC18] cursor-pointer">ABOUT COMPANY</li>
                <li className="hover:text-[#FAAC18] cursor-pointer">OUR MISSION & VISION</li>
                <li className="hover:text-[#FAAC18] cursor-pointer">WHY CHOOSE US</li>
                <li className="hover:text-[#FAAC18] cursor-pointer">OUR VALUE</li>
                <li className="hover:text-[#FAAC18] cursor-pointer">CONTACT US</li>
              </ul>
            </div>

            {/* Column 3: Products */}
            <div className="hidden md:mt-10 md:block">
              <h3 className="text-white font-semibold text-lg mb-4">Products</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-[#FAAC18] cursor-pointer">BAR CUTTING MACHINE</li>
                <li className="hover:text-[#FAAC18] cursor-pointer">WALK BEHIND SINGLE DRUM</li>
                <li className="hover:text-[#FAAC18] cursor-pointer">WALK BEHIND DOUBLE DRUM</li>
                <li className="hover:text-[#FAAC18] cursor-pointer">RM 1050</li>
              </ul>
            </div>

            {/* Mobile Hamburger Accordion */}
            <div className="md:hidden space-y-4">
              {/* About Us */}
              <div>
                <button
                  onClick={() => toggleSection("about")}
                  className="flex justify-between items-center w-full text-white font-semibold py-2"
                >
                  About Us <Menu className="w-5 h-5" />
                </button>
                {openSection === "about" && (
                  <ul className="space-y-2 text-sm mt-2 pl-2">
                    <li className="hover:text-[#FAAC18] cursor-pointer">ABOUT COMPANY</li>
                    <li className="hover:text-[#FAAC18] cursor-pointer">OUR MISSION & VISION</li>
                    <li className="hover:text-[#FAAC18] cursor-pointer">WHY CHOOSE US</li>
                    <li className="hover:text-[#FAAC18] cursor-pointer">OUR VALUE</li>
                    <li className="hover:text-[#FAAC18] cursor-pointer">CONTACT US</li>
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
                  <ul className="space-y-2 text-sm mt-2 pl-2">
                    <li className="hover:text-[#FAAC18] cursor-pointer">BAR CUTTING MACHINE</li>
                    <li className="hover:text-[#FAAC18] cursor-pointer">WALK BEHIND SINGLE DRUM</li>
                    <li className="hover:text-[#FAAC18] cursor-pointer">WALK BEHIND DOUBLE DRUM</li>
                    <li className="hover:text-[#FAAC18] cursor-pointer">RM 1050</li>
                  </ul>
                )}
              </div>

              {/* Trust Certificate */}
              <div>
                <button
                  onClick={() => toggleSection("trust")}
                  className="flex justify-between items-center w-full text-white font-semibold py-2"
                >
                  Privacy Policy <Menu className="w-5 h-5" />
                </button>
                {openSection === "trust" && (
                  <ul className="space-y-2 text-sm mt-2 pl-2">
                    <li className="hover:text-[#FAAC18] cursor-pointer">BAR CUTTING MACHINE</li>
                    <li className="hover:text-[#FAAC18] cursor-pointer">WALK BEHIND SINGLE DRUM</li>
                    <li className="hover:text-[#FAAC18] cursor-pointer">WALK BEHIND DOUBLE DRUM</li>
                    <li className="hover:text-[#FAAC18] cursor-pointer">RM 1050</li>
                  </ul>
                )}
              </div>
            </div>

            {/* Column 4: Trust Certificate */}
            <div>
              <h3 className="text-[#FAAC18] font-semibold text-lg mb-4">Trust Elite Certificate</h3>
              <Image
                src="/home/trustseal.png"
                alt="Trust Elite"
                width={100}
                height={100}
                className="mb-4"
              />
              <p className="text-sm leading-relaxed">
                We are proud to present the Trust Elite Certificate of
                Excellence to Shree Anand and Balaji Co., recognizing their
                commitment to exceptional customer service, outstanding
                business practices, and a dedication to building trust with
                their customers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © 2022 Shree Shakti Infratech, All Rights Reserved. Managed and Developed By{" "}
        <a href="#" className="text-[#FAAC18] hover:underline">
          Promozione Branding Pvt Ltd.
        </a>
      </div>
    </footer>
  );
};

export default Footer;
