"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProductDetailClient({ product, relatedProducts = [] }) {
  const [activeImage, setActiveImage] = useState(product.image);

  // zoom states
  const [isZoomed, setIsZoomed] = useState(false);
  const [origin, setOrigin] = useState("50% 50%");

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setOrigin(`${x}% ${y}%`);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[400px] flex items-center justify-center overflow-hidden mb-8">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover flex flex-col items-center justify-center text-center"
          style={{ backgroundImage: "url('/home/bg-footer.webp')" }}
        >
          <h1 className="text-white text-6xl font-bold">{product.name}</h1>
          <p className="text-lg text-white mt-2">Model No.: {product.model}</p>
        </div>
      </section>

      {/* Product Details */}
      <section className="md:px-6  py-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 items-start">
          {/* Left: Product Preview with zoom */}
          <div className="sticky top-20">
            <div className="w-full h-[400px] rounded-xl shadow-xl border bg-white overflow-hidden">
              <div
                className="relative h-[400px] overflow-hidden cursor-zoom-in"
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
                onMouseMove={handleMouseMove}
              >
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  width={600}
                  height={400}
                  unoptimized
                  className="object-contain w-full h-full will-change-transform transition-transform duration-100 ease-linear"
                  style={{
                    transformOrigin: origin,
                    transform: isZoomed ? "scale(2)" : "scale(1)",
                  }}
                />
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 mt-4 overflow-x-auto">
              {[product.image, ...(product.images || [])].map((img, i) => (
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
                    unoptimized
                    className="object-contain w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Specifications */}
         <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6">
  <h2 className="text-2xl font-semibold mb-4 text-white bg-gradient-to-r from-yellow-500 to-yellow-600 p-4 rounded-lg shadow">
    Specifications
  </h2>

  <table className="w-full border-collapse text-sm md:text-base">
    <tbody>
      {product.specs?.map((spec, i) => (
        <tr
          key={i}
          className={`${
            i % 2 === 0 ? "bg-gray-50" : "bg-white"
          } border-b`}
        >
          <td className="p-3 font-medium text-gray-800 w-1/3">
            {spec.label}
          </td>
          <td className="p-3 text-gray-600">{spec.value}</td>
        </tr>
      ))}
    </tbody>
  </table>

  <p className="mt-4 font-bold text-gray-900 text-lg">
    Sizes Available: {product.size}
  </p>

  <p className="mt-2 text-gray-600">
    For more information about the product, please contact us.
  </p>

  <div className="flex gap-4 mt-8">
    {/* Enquire Now */}
    <Link
      href={`/contact?product=${encodeURIComponent(product.name)}`}
      className="flex-1 text-center px-4 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg shadow hover:from-yellow-600 hover:to-yellow-700 transition font-semibold"
    >
      Enquire Now
    </Link>

    {/* WhatsApp Now */}
    <a
      href={`https://wa.me/919999999999?text=Hello, I am interested in ${encodeURIComponent(
        product.name
      )} (Model: ${product.model}). Please provide more details.`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 text-center px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg shadow hover:from-green-600 hover:to-green-700 transition font-semibold"
    >
      WhatsApp Now
    </a>
  </div>
</div>

        </div>

        {/* ✅ Description + Form Side by Side */}
        <div className=" flex flex-col md:flex-row    gap-5 mb-12">
 
{/* ✅ Enquiry Form (Sticky + Attractive Design) */}
<div className="md:sticky  md:top-24 w-full md:w-96 bg-yellow-100 text-black rounded-2xl shadow-2xl p-5 ">
  <h2 className="text-3xl font-bold text-black mb-6 text-center">
    Enquire <span className="text-yellow-400">Now</span>
  </h2>

  <form
    action="https://formsubmit.co/your@email.com"
    method="POST"
    className="space-y-4 text-white"
  >
    {/* FormSubmit Hidden Config */}
    <input
      type="hidden"
      name="_subject"
      value={`Inquiry for ${product.name} (Model: ${product.model})`}
    />
    <input
      type="hidden"
      name="_next"
      value="https://yourdomain.com/thank-you"
    />
    <input type="hidden" name="_captcha" value="false" />
    <input type="hidden" name="product" value={`${product.name} - ${product.model}`} />
    <input type="hidden" name="_template" value="table" />
    <input type="hidden" name="_autoresponse" value="Thank you for your inquiry! We will get back to you shortly." />
    <input type="hidden" name="_cc" value="your@email.com" />

    {/* Name */}
    <div>
      <input
        type="text"
        name="name"
        required
        placeholder="Your Name"
        className="w-full bg-[#FFFAF1] px-4 py-2 border rounded-lg text-black text-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
      />
    </div>

    {/* Email */}
    <div>
      <input
        type="email"
        name="email"
        required
        placeholder="Your Email"
        className="w-full px-4 py-2 bg-[#FFFAF1] text-black border rounded-lg  text-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
      />
    </div>

    {/* Phone */}
    <div>
      <input
        type="text"
        name="phone"
        placeholder="Mobile Number"
        className="w-full px-4 py-2 bg-[#FFFAF1] text-black border rounded-lg  text-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
      />
    </div>

    {/* Place */}
    <div>
      <input
        type="text"
        name="place"
        placeholder="Place"
        className="w-full px-4 py-2 bg-[#FFFAF1] text-black border rounded-lg  text-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
      />
    </div>

    {/* Message */}
    <div>
      <textarea
        name="message"
        rows="4"
        placeholder="Your Message"
        className="w-full px-4 py-2 bg-[#FFFAF1] text-black border rounded-lg  text-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
      ></textarea>
    </div>

    {/* Submit */}
    <button
      type="submit"
      className="w-full cursor-pointer py-3 rounded-lg bg-black text-white font-semibold text-lg hover:bg-gray-800 transition transform hover:scale-105 shadow-md"
    >
      Send Inquiry
    </button>
  </form>
</div>



          {/* Right: Description */}
       <div className="bg-gray-100 w-full rounded-xl shadow-md border p-6">
  <h2 className="text-2xl font-semibold mb-4">Description</h2>
{product.description.map((block, i) => {
  if (block.type === "h2") return <h2 key={i} className="text-xl font-bold mt-4">{block.text}</h2>;
  if (block.type === "p") return <p key={i} dangerouslySetInnerHTML={{ __html: block.text }} className="mb-2" />;
  if (block.type === "ul") return (
    <ul key={i} className="list-disc ml-6 mb-2">
      {block.items.map((item, j) => (
        <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
      ))}
    </ul>
  );
})}

</div>

        </div>

        {/* Related Products */}
        {relatedProducts && relatedProducts.length > 0 && (
          <div className=" rounded-xl   p-6">
            <h2 className="text-4xl text-gray-800 font-semibold mb-6">Related Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((item) => (
                <Link
                  key={item.slug}
                  href={`/products/${item.slug}`}
                  className="group block border rounded-xl shadow hover:shadow-lg transition p-4 text-center"
                >
                  <div className="w-full h-40 flex items-center justify-center overflow-hidden">
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      width={200}
                      height={150}
                      unoptimized
                      className="object-contain max-h-full group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Model No.: {item.model}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
