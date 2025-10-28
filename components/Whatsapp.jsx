// WhatsAppChat.jsx
'use client'
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  return (
    <a
      href="https://wa.me/+918826544443"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with Shree Shakti Infratech"
      className="block md:hidden fixed bottom-5 right-1 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default Whatsapp;
