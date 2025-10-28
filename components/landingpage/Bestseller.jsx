"use client";
import React, { useState, useEffect, lazy, Suspense } from "react";
import Link from "next/link";
// Lazy load Image from next/image
const Image = lazy(() => import("next/image"));

const products = [
{
  id: 1,
  badge: "Best Seller",
  name: "Automatic Bar Bending Machine 32-40 MM",
  image: "/products/bpm/Automatic Bar Bender/1.webp",
  details: {
    "Bar Dimensions": "8mm to 32mm",
    "Model Name/Number": "SSI GW 42",
    "Max Bending Radius": "32MM",
    "Power Source": "Electric",
    "Max Bending Angle": "32",
    "Motor Speed": "2800",
    "Machine Weight": "270 KG",
    "TMT Bar Steel Dia.": "5 hp",
    "Gear Oil": "90 no.",
    "Voltage": "440 volt",
  },
},

{
  id: 5,
  badge: "New Arrival",
  name: "Anti-Fog Cannon Machine",
  image: "/products/asg/Anti-Fog-Cannon-Machine/1.webp",
  details: {
    "Model": "RB-700",
    "Throw Range": "25 metre",
    "Automation Grade": "Semi Automatic",
    "Material": "Mild Steel",
    "Mounting": "Trolley",
    "Water Pump Power": "2 HP",
    "Rotation Angle": "90°",
    "Elevation Angle": "60°",
    "Dimension (L x W x H)": "8x5x6",
    "Colour": "Yellow & Green"
  }
}
,
{
  id: 16,
  badge: "Best Seller",
  name: "Concrete Mixer",
  image: "/products/cm/CONCRETE MIXER/1.webp",
  details: {
    "Model": "SSI-MX-04",
    "Capacity": "10/7 Cft. / One Bag",
    "Motor": "5HP (Compton/Kirloskar)",
    "Pneumatic Wheels": "4pcs",
    "Engine": "6.5HP (Kirloskar)",
    "Special Feature": "Heavy Duty Along with Wheel",
    "Drum Size": "10mm-8mm-4mm",
    "Drum Capacity": "560 Ltr (Approx)"
  }
},
{
  id: 52,
  badge: "Hot Selling",
  name: "Ride On Roller",
  image: "/products/ror/RIDE ON ROLLER/1.webp",
  details: {
    "Model": "SSI-SMT-700",
    "Walking/Driving Speed": "0-4 Km/H",
    "Centrifugal Force": "25 KN",
    "Driving Motor": "Hydraulic",
    "Vibration Frequency": "70 HZ",
    "Water Tank Capacity": "15 L",
    "Weight": "700 Kg Approx",
    "Power Source": "Diesel Engine / Petrol Engine (Optional)",
    "Automation Grade": "Ride On Hydraulic Control",
    "Brand": "SSI"
  }
}





 
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
      <h2 className="text-3xl md:mt-5 md:text-5xl font-bold text-center">
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
              className="object-contain "
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
        <div className="bg-black text-white p-4 md:p-6 rounded border-2 border-purple-600">
          <h2 className="text-2xl md:text-3xl font-bold mb-5 text-center">
            {product.name}
          </h2>

          <div className="grid grid-cols-2 gap-y-2 text-md">
            {Object.entries(product.details).map(([key, value]) => (
              <React.Fragment key={key}>
                <p>{key}</p>
                <p className="text-gray-300">{value}</p>
              </React.Fragment>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-8 justify-center">
         <Link href="/contact-us">
                   <button className="bg-[#FAAC18] cursor-pointer text-white font-semibold px-6 py-3 rounded hover:bg-[#e99b10] transition">
                  Inquire Now
                </button>
                </Link>
          
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCarousel;
