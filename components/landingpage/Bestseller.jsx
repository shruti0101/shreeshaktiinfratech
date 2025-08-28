"use client";
import React, { useState, useEffect, lazy, Suspense } from "react";

// Lazy load Image from next/image
const Image = lazy(() => import("next/image"));

const products = [
  {
    id: 1,
    badge: "Best Seller",
    name: "STEEL BAR BENDING MACHINE",
    image: "/steel.webp",
    details: {
      "Bending Range": "8mm to 32mm",
      "Motor Power": "3kw",
      "Motor Speed": "2800",
      Voltage: "380Volt",
      "Total Weight": "270 KG (Approx)",
    },
  },
  {
    id: 2,
    badge: "Hot Deal",
    name: "STEEL BAR CUTTING MACHINE",
    image: "/feature1.webp",
    details: {
      "Cutting Range": "6mm to 40mm",
      "Motor Power": "4kw",
      "Motor Speed": "2800",
      Voltage: "380Volt",
      "Total Weight": "300 KG (Approx)",
    },
  },
  {
    id: 3,
    badge: "New Arrival",
    name: "CONCRETE MIXER MACHINE",
    image: "/feature2.webp",
    details: {
      Capacity: "200 Litre",
      "Motor Power": "2kw",
      "Motor Speed": "1400",
      Voltage: "220Volt",
      "Total Weight": "180 KG (Approx)",
    },
  },
  {
    id: 4,
    badge: "New Arrival",
    name: "CONCRETE MIXER MACHINE",
    image: "/home/ctaimg1.webp",
    details: {
      Capacity: "200 Litre",
      "Motor Power": "2kw",
      "Motor Speed": "1400",
      Voltage: "220Volt",
      "Total Weight": "180 KG (Approx)",
    },
  },
];

const ProductCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const product = products[current];

  return (
    <>
      <h2 className="text-3xl md:mt-18 md:text-5xl font-bold text-center">
        Featured <span className="text-[#FAAC18]">Products</span>
      </h2>
      <div className=" max-w-sm text-sm md:text-xl  md:max-w-4xl leading-[1.5]  mx-auto mt-4 text-center text-gray-700">
        <p className="text-center  p-2 md:p-0">
          At <strong>Shree Shakti Infratech,</strong> we take pride in offering
          top-quality construction machinery that delivers durability,
          precision, and value for money.  As a trusted
          <strong> Bar Bending Machine Supplier,</strong> our featured range is
          carefully selected to meet the demanding needs of modern construction
          projects.
        </p>
      </div>
      <section className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center p-6 md:p-12 relative">
        {/* Left - Product Image */}

        <div className="relative flex justify-center">
          {/* Badge */}
          <span className="absolute top-4 left-4 bg-[#FAAC18] text-white text-sm font-semibold px-3 py-1 rounded">
            {product.badge}
          </span>

          <Suspense
            fallback={
              <div className="w-[400px] h-[400px] bg-gray-200 animate-pulse" />
            }
          >
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              priority={current === 0} // prioritize first image for better LCP
              className="object-contain transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
          </Suspense>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 bg-[#FAAC18] text-white w-8 h-8 flex items-center justify-center rounded-full shadow-md hover:bg-[#e99b10] transition"
          >
            &#10094;
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 bg-[#FAAC18] text-white w-8 h-8 flex items-center justify-center rounded-full shadow-md hover:bg-[#e99b10] transition"
          >
            &#10095;
          </button>
        </div>

        {/* Right - Product Details */}
        <div className="bg-black text-white p-4 md:p-8 rounded border-2 border-purple-600">
          <h2 className="text-2xl md:text-3xl font-bold mb-5 text-center">
            {product.name}
          </h2>

          <div className="grid grid-cols-2 gap-y-4 text-lg">
            {Object.entries(product.details).map(([key, value]) => (
              <React.Fragment key={key}>
                <p>{key}</p>
                <p className="text-gray-300">{value}</p>
              </React.Fragment>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-8 justify-center">
            <button className="cursor-pointer bg-[#FAAC18] text-white font-semibold px-6 py-3 rounded hover:bg-[#e99b10] transition">
              Inquiry
            </button>
            <button className="cursor-pointer border bg-white border-[#FAAC18] text-[#FAAC18] font-semibold px-6 py-3 rounded hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCarousel;
