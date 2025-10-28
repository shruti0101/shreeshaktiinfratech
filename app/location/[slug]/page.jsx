"use client";

import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

import { useParams } from "next/navigation";
import Link from "next/link";

import OnClickPop from "@/components/OnClickPop";
import { locationProductCardData } from "@/components/static/data";
import Cta2 from "@/components/landingpage/Cta2";
import AccordionHero from "@/components/landingpage/Hero";

const page = ({ heading, heading2 }) => {
  const params = useParams();
  const [openFaq, setOpenFaq] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const faqs = [
    {
      q: `1. What types of bar bending machines do you supply in ${params.slug}?`,
      a: (
        <div>
          <p className="mb-2">
            At Shree Shakti Infratech, we provide a wide range of bar bending
            machines in Delhi to meet the needs of small contractors,
            residential developers, and large infrastructure projects. Our range
            includes:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Light-duty machines – up to 25mm, for small projects.</li>
            <li>Semi-automatic machines – for mid-sized projects.</li>
            <li>Fully automatic machines – for high-volume construction.</li>
          </ul>
          <p className="mt-2">
            All machines are designed for accuracy, durability, and ease of
            operation.
          </p>
        </div>
      ),
    },
    {
      q: `2. Can your machines handle all sizes of TMT bars?`,
      a: (
        <div>
          <p className="mb-2">
            Yes. Our machines can bend TMT bars ranging from 8mm to 40mm in
            diameter. They offer adjustable bending angles to ensure precise
            shaping for different structural requirements, reducing waste and
            saving time.
          </p>
        </div>
      ),
    },
    {
      q: `3. How quickly can I get a bar bending machine in ${params.slug}?`,
      a: (
        <div>
          <p className="mb-2">
            Most machines are in stock. We can arrange delivery across{" "}
            {params.slug} and NCR within 24–72 hours. On-site setup and
            installation are available so your team can start immediately.
          </p>
        </div>
      ),
    },
    {
      q: `4. Do you offer installation, training, and after-sales support?`,
      a: (
        <div>
          <p className="mb-2">Yes. Our support includes:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>On-site installation</li>
            <li>Operator training</li>
            <li>Maintenance guidance</li>
            <li>Spare parts availability</li>
          </ul>
        </div>
      ),
    },
    {
      q: `5. Are Shree Shakti Infratech machines reliable for heavy-duty projects?`,
      a: (
        <div>
          <p className="mb-2">
            Yes. Machines are built with premium materials and strict quality
            checks to withstand heavy-duty operations for bridges, metro rail,
            and high-rise projects. They deliver consistent performance and
            durability.
          </p>
        </div>
      ),
    },
    {
      q: `6. What is the price range of your bar bending machines in ${params.slug}?`,
      a: (
        <div>
          <p className="mb-2">
            Prices vary by model, capacity, and features. We offer
            cost-effective solutions across:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Light-duty models</li>
            <li>Semi-automatic models</li>
            <li>Fully automatic models</li>
          </ul>
          <p className="mt-2">Contact us for a customised quote.</p>
        </div>
      ),
    },
    {
      q: `7. Why should I choose Shree Shakti Infratech as my bar bending machine supplier in ${params.slug}?`,
      a: (
        <div>
          <p className="mb-2">Key reasons:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Wide range of machines for every project size</li>
            <li>High-quality, precision-engineered equipment</li>
            <li>Competitive pricing and flexible payment options</li>
            <li>Fast delivery across Delhi and NCR</li>
            <li>
              Dedicated after-sales support (installation, training,
              maintenance)
            </li>
          </ul>
        </div>
      ),
    },
  ];

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };
  return (
    <div className="">
     <AccordionHero/>

      <h1 className="mt-5 text-2xl px-2 font-bold text-center md:text-4xl mb-5 lg:mt-20">
        Bar Bending Machine Supplier in{" "}
        <span className="capitalize">{params?.slug}</span>
      </h1>
      <p className="px-2 md:px-10 my-5 lg:px-20 lg:text-lg">
        Welcome to <span className="font-bold"> Shree Shakti Infratech</span>, a
        dependable name for{" "}
        <span className="font-bold">
          Bar Bending Machine Supplier in{" "}
          <span className="capitalize">{params?.slug}</span>.
        </span>{" "}
        We are a transformative maker and supplier, providing brilliant
        solutions that change the landscape of quality, efficiency, and
        reliability in today's construction. Experience ensures you are using
        equipment that will not only enhance productivity, but will also help
        you finish projects quicker, cheaper, and with durability.
      </p>
      <p className="px-2 md:px-10 lg:px-20 lg:text-lg my-3">
        At <span className="font-bold"> Shree Shakti Infratech</span> we know
        good projects start with good equipment. Our machines are engineered to
        precision and innovation, considering all aspects from steel
        reinforcement to advanced concrete solutions, to optimize contentment
        with modern construction builders and contractors.
      </p>

      {/* card section that show product  */}
      <section className="px-2 grid grid-cols-1 md:grid-cols-2 md:px-14 md:gap-5 md:mt-10 lg:grid-cols-4 lg:mb-14 ">
        {locationProductCardData?.map(
          ({ productImage, productName, productDetailsLink }, idx) => (
            <div
              key={idx}
              className="flex rounded-2xl overflow-hidden flex-col mx-5 justify-center"
            >
              <img
                src={productImage}
                alt={productName}
                className="w-[80vw] h-auto md:w-[30vw] md:h-[30vh]"
              />

              <p className="font-bold text-xl my-2">{productName}</p>

              <div className="flex flex-row justify-between items-center my-5">
                <Link
                  href={productDetailsLink}
                  className="bg-cyan-800 px-2 py-1 text-white rounded-lg hover:bg-cyan-900"
                >
                  View Details
                </Link>
                <button
                  onClick={() => setIsOpen(true)}
                  className="bg-gray-800 px-2 py-1 text-white rounded-lg hover:bg-gray-900"
                >
                  Enquiry Now
                </button>
              </div>
            </div>
          )
        )}
        <OnClickPop isOpen={isOpen} setIsOpen={setIsOpen} />
      </section>

      {/* other heading  */}

      <section className="my-10">
        <h2 className="mt-5 text-2xl px-2 font-bold text-center md:text-3xl mb-5">
          Go with Shree Shakti Infratech – Bar Bending Machine Supplier in{" "}
          <span className="capitalize">{params?.slug}</span>
        </h2>

        <p className="px-2 md:px-10 my-5 lg:px-20 lg:text-lg">
          If you're looking for{" "}
          <span className="font-bold capitalize">
            Bar Bending Machine Supplier in {params?.slug}, Shree Shakti
            Infratech
          </span>{" "}
          is an experienced supplier you can trust as a firm that works within
          the construction industry and the infrastructure industry. We provide
          reliable, high-performance machines, and with the backing of
          exceptional service and support anywhere in{" "}
          <span className="capitalize">{params?.slug}</span>.
        </p>

        <h3 className="mt-5 text-xl px-2 font-bold text-center md:text-3xl mb-5 lg:mt-10">
          Complete Range of Bar Bending Machines in{" "}
          <span className="capitalize">{params?.slug}</span>
        </h3>
        <p className="px-2 md:px-10 my-5 lg:px-20 lg:text-lg lg:mb-10">
          As a company that sells{" "}
          <span className="font-bold capitalize">
            Bar Bending Machine Supplier in {params?.slug}
          </span>
          , we are a trusted supplier and a full range of machine models — from
          small bar bending machines for small job sites to heavy-duty
          industrial machines to support larger construction projects. Matt:
          instead of "machines designed for precision and speed; I propose real
          modeling that handles different bar TMT bar sizes, bending capacities,
          precision and speed.{" "}
        </p>

        <h3 className="mt-5 text-xl px-2 font-bold text-center md:text-3xl mb-5 lg:mt-10">
          {heading2 || "Superior Price and Durability"}
        </h3>
        <p className="px-2 md:px-10 my-5 lg:px-20 lg:text-lg lg:mb-10">
          At{" "}
          <span className="font-bold capitalize">
            Shree Shakti Infratech {params?.slug}
          </span>
          , each and every model is built with high quality materials, undergo
          strict quality checks. Our bar bender is built to last and experiences
          long-term strength to allow everyone at every project site a smooth
          and safe experience with our built products.{" "}
        </p>

        <h3 className="mt-5 text-xl px-2 font-bold text-center md:text-3xl mb-5 lg:mt-10">
          {heading2 || "Best Price Range Bar Bending Machine Supplier"}
        </h3>
        <p className="px-2 md:px-10 my-5 lg:px-20 lg:text-lg lg:mb-10">
          Here's the part where we sell our products: we provide{" "}
          <span className="font-bold">Bar Bending Machine Supplier</span> at the
          best price point, providing high value and performance without
          sacrificing durability. Insite of our transparency and cost-effective
          approach, we are selected over our competition by our contractors and
          builders.{" "}
        </p>
      </section>

      {/* cta  */}
      <div>
        <section className="max-w-5xl mx-auto bg-white py-4 px-10 ">
          <div className="max-w-4xl text-center">
            <h2 className="text-lg md:text-4xl font-semibold">
              Ready to Power Your Project with the{" "}
              <span className="text-[#FAAC18]">
                Best Bar Bending Machine Supplier{" "}
              </span>{" "}
              in India?{" "}
            </h2>

            <p className="text-base py-4 md:p-7 md:text-xl text-[#2C2C2C]">
              At Shree Shakti Infratech, we don’t just supply machines — we
              deliver performance, reliability, and unmatched service. Whether
              you need a single bar bending machine or a complete construction
              equipment package, we’re here to help you work faster, safer, and
              smarter.
            </p>

            <p className="text-xl font-bold">
              <span className="text-[#FAAC18] ">Call Us Now</span> or{" "}
              <span className="text-[#FAAC18]">
                Request a Free Quote Today{" "}
              </span>{" "}
              and experience why we’re the preferred Bar Bending Machine
              Supplier in India for contractors nationwide.{" "}
            </p>

            {/* CTA Button */}
            <div className="flex justify-center">
              <button
                onClick={() => setIsOpen(true)}
                className="bg-[#fef3c7] text-xl border-2 my-10 cursor-pointer font-bold py-2 px-4 border-yellow-500 hover:underline hover:scale-105 transition-all duration-300 ease-out"
              >
                Get Free Consultation Today!{" "}
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* <div className="bg-orange-100 my-20 mx-5 px-5 py-2 flex items-center justify-between md:mx-20 lg:w-[50vw] lg:mx-auto">
        <img src="/location/hand-shake.png" alt="" className="h-20 w-auto" />
        <div className="hidden md:block uppercase lg:text-xl">
          Inviting application for <br />{" "}
          <span className="font-bold">dealer partners</span>
        </div>
        <button className="font-bold text-white bg-orange-400 px-5 py-2 rounded-sm">
          Know more
        </button>
      </div> */}

      {/* faq  */}
      <section className="px-2 md:px-10 lg:px-20 my-10">
        <h2 className="text-2xl font-bold text-center mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((f, idx) => (
            <div key={idx} className="bg-white shadow-sm rounded-md p-4">
              <div
                onClick={() => toggleFaq(idx)}
                className="flex justify-between items-center cursor-pointer"
              >
                <h3 className="font-semibold">{f.q}</h3>
                {openFaq === idx ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </div>
              <div
                className={`mt-3 text-sm lg:text-base transition-all duration-300 ${
                  openFaq === idx ? "block opacity-100" : "hidden opacity-0"
                }`}
              >
                {f.a}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
