'use client'

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";


const faqs = [
  {
    question: "What makes Shree Shakti Infratech the leading Bar Bending Machine Supplier in India?",
    answer:
      "Shree Shakti Infratech has been serving the construction industry since 2013 with ISO 9001:2013 certified products. As a trusted <strong>Bar Bending Machine Supplier in India</strong>, we combine precision engineering, premium-grade materials, and dedicated 24/7 customer support to ensure our machines deliver consistent performance on every project.",
  },
  {
    question: "What types of bar bending machines do you offer?",
    answer:
      "As a top <strong>Bar Bending Machine Supplier in India</strong>, we provide a complete range including manual, semi-automatic, and fully automatic models. These cater to small-scale contractors as well as large infrastructure companies, with bending capacities from 6mm to 42mm.",
  },
  {
    question: "Are your bar bending machines compliant with safety and quality standards?",
    answer:
      "Yes, every machine from our range meets Indian and international safety standards. Being a responsible <strong>Bar Bending Machine Supplier in India</strong>, we conduct rigorous quality checks before dispatch to ensure maximum operator safety and long-term durability.",
  },
  {
    question: "Do you offer nationwide delivery?",
    answer:
      "Absolutely. As a <strong>Bar Bending Machine Supplier in India</strong> with a wide service network, we deliver to all metro cities, tier-2 and tier-3 towns, and even remote project sites within the promised timeframe.",
  },
  {
    question: "What is the bending capacity of your machines?",
    answer:
      "Our machines, supplied as part of our <strong>Bar Bending Machine Supplier in India</strong> portfolio, can bend TMT bars ranging from 6mm to 42mm in diameter. We also offer models for higher capacities upon request.",
  },
  {
    question: "Do you provide installation and operator training?",
    answer:
      "Yes. Being a customer-focused <strong>Bar Bending Machine Supplier in India</strong>, we provide on-site installation and operator training so your team can use the machine safely and efficiently right from day one.",
  },
  {
    question: "What kind of warranty do your bar bending machines have?",
    answer:
      "Our machines come with a standard manufacturer’s warranty that covers defects in materials and workmanship. As a reliable <strong>Bar Bending Machine Supplier in India</strong>, we also offer extended warranty options for added peace of mind.",
  },
  {
    question: "How can I choose the right bar bending machine for my project?",
    answer:
      "We guide customers based on bar size, bending frequency, workload, and budget. Our team, as an experienced <strong>Bar Bending Machine Supplier in India</strong>, ensures you get a model that matches your exact project requirements.",
  },
  {
    question: "Do you stock spare parts for quick replacement?",
    answer:
      "Yes. We maintain a full inventory of genuine spare parts, ensuring that clients across India get fast replacements — one of the reasons why contractors choose us as their <strong>Bar Bending Machine Supplier in India</strong>.",
  },
  {
    question: "Can you customize bar bending machines?",
    answer:
      "Definitely. We understand that every project is unique, so as a flexible <strong>Bar Bending Machine Supplier in India</strong>, we offer customization options for bending speed, capacity, and operational features.",
  },
  {
    question: "How long is the delivery time?",
    answer:
      "Our standard delivery time is 3–7 working days depending on the location. As a committed <strong>Bar Bending Machine Supplier in India</strong>, we always work to meet urgent deadlines without compromising on quality.",
  },
  {
    question: "What payment options do you provide?",
    answer:
      "We accept bank transfers, UPI, cheques, and other convenient modes. Our transparent payment process is part of why we are regarded as a trustworthy <strong>Bar Bending Machine Supplier in India</strong>.",
  },
  {
    question: "Do you supply other construction machinery as well?",
    answer:
      "Yes. Apart from bar bending machines, we also supply bar cutting machines, concrete mixers, builder hoists, hanging platforms, and safety gear, making us a one-stop <strong>Bar Bending Machine Supplier in India</strong> for complete construction solutions.",
  },
  {
    question: "What kind of after-sales service do you provide?",
    answer:
      "We offer 24/7 after-sales support including maintenance, breakdown assistance, and technical guidance. This commitment sets us apart as a customer-first <strong>Bar Bending Machine Supplier in India</strong>.",
  },
  {
    question: "How can I request a quote for a bar bending machine?",
    answer:
      "Simply fill out our online inquiry form, call our sales team, or email us. As a responsive <strong>Bar Bending Machine Supplier in India</strong>, we provide customized quotes promptly so you can start your project without delays.",
  },
];



const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
 
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Heading */}
        <h2
          className="text-3xl  md:text-5xl font-bold md:my-12 mb-8"
       
        >
          Frequently Asked <span className="text-[#FAAC18]">Question's</span>
        </h2>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 pb-4"
            
           
            >
              {/* Question */}
              <button
                className="flex justify-between items-center w-full text-left font-semibold text-md md:text-lg"
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
      className="text-gray-600 leading-relaxed"
      dangerouslySetInnerHTML={{ __html: faq.answer }}
    />
              )}
            </div>
          ))}
        </div>
      </section>

  );
};

export default Faq;
