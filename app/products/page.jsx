"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { categories, products } from "@/Data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/landingpage/Footer";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(12);
  
  const tabRefs = useRef({});

  const tabs = [{ id: "all", name: "All Products" }, ...categories];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  useEffect(() => {
    const currentTab = tabRefs.current[activeCategory];
    if (currentTab) {
      setIndicatorStyle({
        left: currentTab.offsetLeft,
        width: currentTab.offsetWidth,
      });
    }
  }, [activeCategory]);

  return (
    <>

    <Navbar></Navbar>
      <section className="relative w-full h-[400px] md:h-[450px] flex items-center justify-center overflow-hidden">
        {/* Background with parallax style */}
        {/* Background with parallax style */}

        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover flex items-center justify-center"
          style={{ backgroundImage: "url('/home/hero1.webp')" }}
        >
          <h1 className="text-7xl font-bold text-white z-10">Products</h1>
        </div>
      </section>

      
    <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FEF3C7" fill-opacity="1" d="M0,192L360,32L720,160L1080,96L1440,192L1440,0L1080,0L720,0L360,0L0,0Z"></path></svg>

      <section className="px-6 py-10">
        {/* Filter Bar */}
        <div className="relative w-full overflow-x-auto">
          <div className="relative flex space-x-2 bg-gray-100 rounded-xl p-2">
            {[{ id: "all", name: "All Products" }, ...categories].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`relative text-xl z-10 px-5 py-2  font-medium rounded-lg transition-all duration-300
          ${
            activeCategory === tab.id
              ? "text-white"
              : "text-gray-700 hover:text-gray-900"
          }`}
              >
                {tab.name}
                {activeCategory === tab.id && (
                  <span className="absolute  inset-0 -z-10 rounded-lg bg-yellow-500 shadow-md transition-all duration-300" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 mt-25 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          {filteredProducts.slice(0, visibleCount).map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden group"
            >
              {/* Product Name on Top */}
              <div className="bg-white text-center py-3 px-2">
                <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-yellow-600 transition">
                  {product.name}
                </h2>
              </div>

              {/* Product Image */}
              <div className="bg-white flex items-center justify-center p-4 h-56">
                <Image
                  src={product.image.src}
                  alt={product.image.alt}
                  width={300}
                  height={200}
                  className="object-contain max-h-full"
               
                />
              </div>

              {/* Black Footer with Model No */}
              <div className="bg-black text-xl text-white text-center py-2 text-sm font-medium">
                Model No. - {product.model}
              </div>
            </Link>
          ))}
        </div>

        {/* View More Button */}
        {visibleCount < filteredProducts.length && (
          <div className="text-center mt-8">
            <button
              onClick={() => setVisibleCount((prev) => prev + 12)}
              className="px-6 py-3 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition"
            >
              View More
            </button>
          </div>
        )}
      </section>

      <Footer></Footer>
    </>
  );
}
