"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductDetailClient({ product }) {
  // ✅ default hero image
  const [activeImage, setActiveImage] = useState(product.image);

  return (
    
    <section className="px-6 md:px-12 py-10 max-w-7xl mx-auto">
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
        <p className="text-lg text-gray-600">Model No.: {product.model}</p>
      </div>

      {/* Hero Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 items-start">
        {/* Left: Product Preview */}
        <div className="sticky top-20">
          <div className="w-full overflow-hidden rounded-xl shadow-xl border bg-white">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              width={600}
              height={400}
              className="object-contain w-full h-[400px] transition-transform duration-300 hover:scale-105"
              unoptimized
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-4 mt-4 overflow-x-auto">
            {[product.image, ...product.images].map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(img)}
                className={`w-20 h-20 rounded-lg border shadow-sm overflow-hidden flex-shrink-0 ${
                  activeImage.src === img.src
                    ? "ring-2 ring-yellow-500"
                    : "hover:ring-1 hover:ring-gray-400"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={100}
                  height={100}
                  className="object-contain w-full h-full"
                  unoptimized
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Specifications */}
        <div className="bg-white border rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Specifications</h2>
          <table className="w-full border-collapse text-sm md:text-base">
            <tbody>
              {product.specs?.map((spec, i) => (
                <tr
                  key={i}
                  className={`${i % 2 === 0 ? "bg-gray-50" : "bg-white"} border-b`}
                >
                  <td className="p-3 font-medium text-gray-700 w-1/3">{spec.label}</td>
                  <td className="p-3 text-gray-600">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Description */}
      <div className="mb-12 bg-white rounded-xl shadow-md border p-6">
        <h2 className="text-2xl font-semibold mb-4">Description</h2>
        <p className="text-gray-700 leading-relaxed">{product.description}</p>
      </div>

      {/* Image Gallery */}
      <div className="bg-white rounded-xl shadow-md border p-6">
        <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[product.image, ...product.images].map((img, i) => (
            <div key={i} className="overflow-hidden rounded-xl shadow-md border group">
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={300}
                className="object-contain w-full h-56 transform group-hover:scale-105 transition duration-300"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
