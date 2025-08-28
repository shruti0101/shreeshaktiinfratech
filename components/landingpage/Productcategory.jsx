"use client";
import React from "react";
import Image from "next/image";

const Productcategory = () => {
  const categories = [
    {
      name: "Bar Bending Machines",
      products: 9,
      img: "/home/productdesc/productdesc1.webp",
      hoverImg: "/steel.webp",
    },
    {
      name: "Concrete Mixers",
      products: 14,
      img: "/home/productdesc/productdesc2.webp",
      hoverImg: "/twoleg.webp",
    },
    {
      name: "Trolly Vibrator",
      products: 13,
      img: "/home/productdesc/productdesc3.webp",
      hoverImg: "/home/productdesc/actual/trollyvibrator.webp",
    },
    {
      name: "Ride on Roller/ Plate Compactor",
      products: 13,
      img: "/home/productdesc/productdesc4.webp",
      hoverImg: "/home/productdesc/actual/rideoncollar.webp",
    },
    {
      name: "Material Lifting",
      products: 6,
      img: "/home/productdesc/productdesc5.webp",
      hoverImg: "/home/productdesc/actual/materiallifting.webp",
    },
    {
      name: "Lab Testing Equipments",
      products: 10,
      img: "/home/productdesc/productdesc6.webp",
      hoverImg: "/home/productdesc/actual/labtesting.webp",
    },
    {
      name: "Safety Instruments",
      products: 8,
      img: "/home/productdesc/productdesc7.webp",
      hoverImg: "/home/productdesc/actual/safetyinstrument.webp",
    },
    {
      name: "Surveying Instruments",
      products: 5,
      img: "/home/productdesc/productdesc8.webp",
      hoverImg: "/home/productdesc/actual/surveyinginstrument.webp",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto mb-15 px-6 md:px-12">
      <h2 className="text-xl md:text-5xl mb-14 font-bold text-[#FAAC18] text-center ">
        Product Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="bg-[#EFEFEF] border-2 border-gray-800 hover:border-[#FAAC18] hover:scale-105 flex flex-col items-center justify-center p-2 text-center shadow-sm hover:shadow-md transition group"
          >
            {/* Image container with hover switch */}
            <div className="w-32 h-32 flex items-center justify-center mb-3 relative">
              {/* Default Image */}
              <Image
                src={cat.img}
                alt={cat.name}
                width={100}
                height={100}
                className="object-contain w-full h-full transition-opacity duration-300 group-hover:opacity-0"
              />
              {/* Hover Image */}
              <Image
                src={cat.hoverImg}
                alt={cat.name}
                width={100}
                height={100}
                className="object-contain w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>

            <p className="font-medium">{cat.name}</p>
            <p className="text-[#FAAC18] text-sm">{cat.products} Products</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productcategory;
