"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { categories, products } from "@/Data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/landingpage/Footer";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(false); // Loader state

  const tabs = [{ id: "all", name: "All Products" }, ...categories];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const handleCategoryChange = (categoryId) => {
    setLoading(true);
    setTimeout(() => {
      setActiveCategory(categoryId);
      setLoading(false);

      // ✅ Scroll to top when category changes
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  };

  const getCategoryName = () => {
    if (activeCategory === "all") return "All Products";
    const category = categories.find((c) => c.id === activeCategory);
    return category ? category.name : "Products";
  };

  return (
    <>
      <Navbar />

      {/* Banner */}
      <section className="relative w-full h-[400px] md:h-[550px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover flex items-center justify-center"
          style={{ backgroundImage: "url('/home/banner.webp')" }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <h1 className="px-10   text-center text-3xl md:text-7xl font-bold text-white z-10">
            {getCategoryName()}
          </h1>
        </div>
      </section>

      <section className="w-full px-5 py-6">
        {/* Tabs */}
        <div className="sticky  top-[90px] z-20 bg-white border-b">
          <div className="flex bg-[#FFFAF1] overflow-x-auto scrollbar-hide md:justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleCategoryChange(tab.id)}
                className={`relative px-2 py-6 text-sm md:text-base font-bold cursor-pointer transition 
                  ${
                    activeCategory === tab.id
                      ? "text-yellow-600"
                      : "text-black hover:text-yellow-600"
                  }`}
              >
                {tab.name}
                {activeCategory === tab.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-yellow-500 rounded-full"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Loader */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="border rounded-lg shadow bg-gray-200 animate-pulse h-80"
              ></div>
            ))}
          </div>
        ) : (
          <>
            {/* Product Grid */}
            <div className="grid grid-cols-1 md:mt-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden group flex flex-col"
                >
                  {/* Product Name */}
                  <div className="bg-white text-center px-3 py-4 min-h-[70px] flex items-center justify-center">
                    <h2 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-yellow-600 transition text-center">
                      {product.name}
                    </h2>
                  </div>

                  {/* Product Image */}
                  <div className="bg-white flex items-center justify-center p-4 h-56">
                    <Image
                      src={product.image.src}
                      alt="Bar Bending Machine Supplier"
                      width={300}
                      height={200}
                      className="object-contain max-h-full"
                    />
                  </div>

                  {/* Footer with Model No */}
                  <div className="bg-black text-white text-center py-2 text-sm md:text-base font-medium mt-auto">
                    Model No. - {product.model}
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </section>

      <Footer />
    </>
  );
}
