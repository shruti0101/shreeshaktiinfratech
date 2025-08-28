"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation"; // ✅ import hook

const Navbar = () => {
  const navItems = ["Home", "About Us", "Products", "Blogs", "Contact Us"];
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname(); // ✅ current URL

  // Convert nav item name to path
  const getPath = (item) => {
    if (item === "Home") return "/";
    return "/" + item.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <nav className="max-w-[1440px] mx-auto flex items-center justify-between bg-white py-3 px-5 md:px-10 shadow relative">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/logo.webp"
            alt="Company Logo"
            width={150}
            height={120}
            priority
          />
        </Link>
      </div>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex text-xl tracking-wide ml-70 space-x-8 font-medium text-[#3F2212]">
        {navItems.map((item, i) => {
          const path = getPath(item);
          const isActive = pathname === path;
          return (
            <li key={i} className="relative pb-2">
              <Link
                href={path}
                className={`transition relative 
                  after:content-[''] after:absolute after:left-0 after:-bottom-8 after:h-[3px] after:bg-[#FAAC18] 
                  after:transition-all after:duration-300 
                  ${
                    isActive
                      ? "after:w-full text-[#FAAC18]" // highlight
                      : "after:w-0 hover:after:w-full hover:text-[#FAAC18]"
                  }`}
              >
                {item}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Desktop Button */}
      <div className="hidden md:flex">
        <Link href="/contact-us">
          <button className="flex items-center gap-2 bg-[#FAAC18] font-bold text-lg cursor-pointer hover:bg-[#e99b10] text-white py-3 px-5 rounded transition duration-300">
            Request a Quote
            <Image src="/vector.png" alt="Arrow Icon" width={16} height={8} />
          </button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex items-center"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={28} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Side Panel Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex items-center justify-between p-5 border-b">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image src="/logo.webp" alt="Company Logo" width={120} height={80} />
          </Link>
          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>

        {/* Mobile Links */}
        <ul className="flex flex-col p-5 space-y-6 text-lg font-medium text-[#3F2212]">
          {navItems.map((item, i) => {
            const path = getPath(item);
            const isActive = pathname === path;
            return (
              <li key={i}>
                <Link
                  href={path}
                  className={`block ${
                    isActive ? "text-[#FAAC18]" : "hover:text-[#FAAC18]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            );
          })}
          <li>
            <Link href="/contact-us" onClick={() => setIsOpen(false)}>
              <button className="w-full flex justify-center items-center gap-2 bg-[#FAAC18] font-bold text-lg cursor-pointer hover:bg-[#e99b10] text-white py-3 px-5 rounded transition duration-300">
                Request a Quote
                <Image src="/vector.png" alt="Arrow Icon" width={16} height={8} />
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
