"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Productcategory = () => {
  const categories = [
    {
      name: "Bar Bending Machines",
      products: 30,
      img: "/home/productdesc/productdesc1.webp",
      hoverImg: "/steel.webp",
      link: "/products",
    },
    {
      name: "Concrete Mixers",
      products: 24,
      img: "/home/productdesc/productdesc2.webp",
      hoverImg: "/home/productdesc/actual/concrete.webp",
      link: "/products",
    },
    {
      name: "Trolly Vibrator",
      products: 21,
      img: "/home/productdesc/productdesc3.webp",
      hoverImg: "/home/productdesc/actual/trollyvibrator.webp",
      link: "/products",
    },
    {
      name: "Ride on Roller/ Plate Compactor",
      products: 26,
      img: "/home/productdesc/productdesc4.webp",
      hoverImg: "/home/productdesc/actual/rideoncollar.webp",
      link: "/products",
    },
    {
      name: "Material Lifting",
      products: 37,
      img: "/home/productdesc/productdesc5.webp",
      hoverImg: "/home/productdesc/actual/materiallifting.webp",
      link: "/products",
    },
    {
      name: "Lab Testing Equipments",
      products: 17,
      img: "/home/productdesc/productdesc6.webp",
      hoverImg: "/home/productdesc/actual/labtesting.webp",
      link: "/products",
    },
    {
      name: "Safety Instruments",
      products: 18,
      img: "/home/productdesc/productdesc7.webp",
      hoverImg: "/home/productdesc/actual/safetyinstrument.webp",
      link: "/products",
    },
    {
      name: "Surveying Instruments",
      products: 18,
      img: "/home/productdesc/productdesc8.webp",
      hoverImg: "/home/productdesc/actual/surveyinginstrument.webp",
      link: "/products",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="max-w-7xl mt-5 mx-auto mb-15 px-6 md:px-12">
      <h2 className="text-3xl md:text-5xl mb-8 md:mb-14 font-bold text-[#FAAC18] text-center ">
        Product Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {categories.map((cat, i) => (
          <Link
            key={i}
            href={cat.link}
            onClick={() => setActiveIndex(i)} // tap-to-toggle for mobile
            className="bg-[#EFEFEF] border-2 border-gray-800 hover:border-[#FAAC18] hover:scale-105 flex flex-col items-center justify-center p-2 text-center shadow-sm hover:shadow-md transition group"
          >
            {/* Image container */}
            <div className="w-32 h-32 flex items-center justify-center mb-3 relative">
              {/* Default Image */}
              <Image
                src={cat.img}
                alt={cat.name}
                width={200}
                height={100}
                className={`object-contain w-full h-full transition-opacity duration-300 ${
                  activeIndex === i ? "opacity-0" : "opacity-100 group-hover:opacity-0"
                }`}
              />
              {/* Hover Image */}
              <Image
                src={cat.hoverImg}
                alt={cat.name}
                width={400}
                height={200}
                className={`object-cover w-full h-full absolute top-0 left-0 transition-opacity duration-300 ${
                  activeIndex === i ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              />
            </div>

            <p className="font-medium">{cat.name}</p>
            <p className="text-[#FAAC18] text-sm">{cat.products} Products</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Productcategory;
