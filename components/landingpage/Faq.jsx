'use client'

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import AOSWrapper from "../aos/AOSWrapper";

const faqs = [
  {
    question:
      "What makes Shree Shakti Infratech the leading Bar Bending Machine Supplier in India?",
    answer:
      "Shree Shakti Infratech has been serving the construction industry since 2013 with ISO 9001:2013 certified products. As a trusted Bar Bending Machine Supplier in India, we combine precision engineering, premium-grade materials, and dedicated 24/7 customer support to ensure our machines deliver consistent performance on every project.",
  },
  {
    question: "What types of bar bending machines do you offer?",
    answer:
      "We provide a wide range of bar bending machines designed to meet diverse construction needs, from compact models to heavy-duty industrial machines.",
  },
  {
    question:
      "Are your bar bending machines compliant with safety and quality standards?",
    answer:
      "Yes, all our machines are ISO-certified and adhere to stringent safety and quality standards for reliable performance.",
  },
  {
    question: "Do you offer nationwide delivery?",
    answer: "Yes, we deliver across India with efficient logistics support.",
  },
  {
    question: "What is the bending capacity of your machines?",
    answer:
      "Our machines can handle various bar diameters, ensuring compatibility with small to large construction projects.",
  },
  {
    question: "Do you provide installation and operator training?",
    answer:
      "Yes. Being a customer-focused supplier, we provide on-site installation and operator training so your team can use the machine safely and efficiently from day one.",
  },
  {
    question: "What kind of warranty do your bar bending machines have?",
    answer:
      "We provide a standard warranty with options to extend coverage based on customer requirements.",
  },
  {
    question: "How can I choose the right bar bending machine for my project?",
    answer:
      "Our experts help you select the right model depending on your project size, bar specifications, and workload requirements.",
  },
  {
    question: "Do you stock spare parts for quick replacement?",
    answer:
      "Yes, we maintain a ready stock of essential spare parts for minimal downtime.",
  },
  {
    question: "Can you customize bar bending machines?",
    answer:
      "Yes, we can customize machines based on your specific construction requirements.",
  },
  {
    question: "How long is the delivery time?",
    answer:
      "Most orders are fulfilled within a few days, depending on location and availability.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AOSWrapper>
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Heading */}
        <h2
          className="text-5xl font-bold mb-7 md:mb-10"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          FAQ<span className="text-[#FAAC18]">'s</span>
        </h2>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 pb-4"
              data-aos="fade-up"
           
            >
              {/* Question */}
              <button
                className="flex justify-between items-center w-full text-left font-semibold text-sm md:text-lg"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-[#FAAC18]" />
                ) : (
                  <Plus className="w-5 h-5 text-[#FAAC18]" />
                )}
              </button>

              {/* Answer */}
              {openIndex === index && (
                <p
                  className="mt-3 text-gray-700 text-base leading-relaxed"
                  data-aos="fade-in"
                  data-aos-duration="600"
                >
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </AOSWrapper>
  );
};

export default Faq;
