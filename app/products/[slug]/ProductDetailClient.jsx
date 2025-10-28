"use client";
import Enquiry from "@/components/Enquiry";
import Footer from "@/components/landingpage/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function ProductDetailClient({ product, relatedProducts = [] }) {

    
  const [activeImage, setActiveImage] = useState(product.image);
  const [showPopup, setShowPopup] = useState(false);
  const [status, setStatus] = useState("");
  // zoom states
  const [isZoomed, setIsZoomed] = useState(false);
  const [origin, setOrigin] = useState("50% 50%");

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setOrigin(`${x}% ${y}%`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);

    try {
      const res = await fetch(
        "https://formsubmit.co/shreeshaktiinfratech@gmail.com",
        {
          method: "POST",
          body: formData,
        }
      );

      if (res.ok) {
        setStatus("✅ Thank you! Your message has been sent.");
        e.target.reset(); // clear form
      } else {
        setStatus("❌ Oops! Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("❌ Failed to send. Please check your connection.");
    }
  };

  return (
    <>
      {/* ✅ Hero Section */}
      <Navbar />
      <section className="relative w-full h-[280px] md:h-[550px] flex items-center justify-center overflow-hidden ">
        <div
          className="absolute inset-0  md:bg-fixed bg-center bg-cover flex flex-col items-center justify-center text-center "
          style={{ backgroundImage: "url('/home/banner.webp')" }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <h1 className="max-w-2xl mt-20 text-white z-100 text-3xl md:text-6xl font-bold">
            {product.name}
          </h1>
          <p className="text-base z-100 md:text-lg text-white mt-2">
          Brand: SSI
          </p>
        </div>
      </section>

      {/* ✅ Product Details */}
      <section className="px-4 md:px-6 py-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-start">
          {/* Product Preview */}

          <div className="sticky md:top-30 md:px-10">
            <div className="w-full  md:w-[500px] bg-yellow-50 h-[300px] md:h-[450px] rounded-xl shadow-xl border bg-white overflow-hidden">
              <div
                className="relative w-full h-full overflow-hidden cursor-zoom-in"
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
                onMouseMove={handleMouseMove}
              >
                {activeImage.isVideo ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={
                      activeImage.src.includes("youtu.be")
                        ? `https://www.youtube.com/embed/${
                            activeImage.src.split("youtu.be/")[1].split("?")[0]
                          }`
                        : activeImage.src.replace("watch?v=", "embed/")
                    }
                    title={product.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                ) : (
                  <Image
                    src={activeImage.src}
                    alt="paper cup making machine"
                    width={600}
                    height={400}
                    unoptimized
                    className="object-contain w-full h-full transition-transform duration-100 ease-linear"
                    style={{
                      transformOrigin: origin,
                      transform: isZoomed ? "scale(1.5)" : "scale(1)",
                    }}
                  />
                )}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
              {[product.image, ...(product.images || [])].map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(img)}
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-lg border shadow-sm overflow-hidden flex-shrink-0 ${
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

              {/* ✅ Video Thumbnail */}
              {product.videoUrl && (
                <button
                  onClick={() => {
                    let videoSrc = product.videoUrl;

                    // Convert to embed format
                    if (videoSrc.includes("youtu.be/")) {
                      videoSrc = `https://www.youtube.com/embed/${
                        videoSrc.split("youtu.be/")[1].split("?")[0]
                      }`;
                    } else if (videoSrc.includes("watch?v=")) {
                      videoSrc = videoSrc
                        .replace("watch?v=", "embed/")
                        .split("&")[0];
                    }

                    setActiveImage({
                      src: videoSrc,
                      alt: `${product.name} Video`,
                      isVideo: true,
                    });
                  }}
                  className={`relative w-16 h-16 md:w-20 md:h-20 rounded-lg border shadow-sm overflow-hidden flex-shrink-0 ${
                    activeImage.isVideo ? "ring-2 ring-yellow-500" : ""
                  }`}
                >
                  {/* ✅ Show YouTube thumbnail instead of black box */}
                  <Image
                    src={`https://img.youtube.com/vi/${
                      product.videoUrl.split("youtu.be/")[1]?.split("?")[0] ||
                      product.videoUrl.split("v=")[1]?.split("&")[0]
                    }/hqdefault.jpg`}
                    alt={`${product.name} Video Thumbnail`}
                    width={100}
                    height={100}
                    unoptimized
                    className="object-cover w-full h-full"
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-white text-xl bg-black/40">
                    ▶
                  </span>
                </button>
              )}
            </div>
          </div>

          {/* Specifications */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white bg-gradient-to-r from-yellow-500 to-yellow-600 p-3 rounded-lg shadow">
              Specifications
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm md:text-base">
                <tbody>
                  {product.specs?.map((spec, i) => (
                    <tr
                      key={i}
                      className={`${
                        i % 2 === 0 ? "bg-gray-50" : "bg-white"
                      } border-b`}
                    >
                      <td className="p-2 md:p-3 font-medium text-gray-800 w-1/3 text-sm md:text-lg">
                        {spec.label}
                      </td>
                      <td className="p-2 md:p-3 text-gray-600 text-sm md:text-lg">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 font-bold text-gray-900 text-base md:text-lg">
              Sizes Available: {product.size}
            </p>
            <p className="mt-2 text-gray-600 text-sm md:text-base">
              For more information about the product, please contact us.
            </p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4 mt-6">
              <button
                onClick={() => setShowPopup(true)}
                className="flex-1 cursor-pointer text-center px-4 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg shadow hover:from-yellow-600 hover:to-yellow-700 transition font-semibold"
              >
                Enquire Now
              </button>
              <a
                href={`https://wa.me/+918826544443?text=Hello, I am interested in ${encodeURIComponent(
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

        {/* ✅ Form + Description */}
        <div className="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-6 mb-12">
          {/* Sidebar Form */}
          <div className="md:sticky md:top-24 h-fit w-full bg-yellow-100 text-black rounded-2xl shadow-2xl p-5">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
              Enquiry Now
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot for bots */}
              <input type="text" name="_honey" style={{ display: "none" }} />
              {/* Disable captcha */}
              <input type="hidden" name="_captcha" value="false" />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-2 md:p-3 rounded-md border focus:ring-2 focus:ring-yellow-500 text-sm md:text-base"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-2 md:p-3 rounded-md border focus:ring-2 focus:ring-yellow-500 text-sm md:text-base"
              />
              <input
                type="tel"
                name="phone"
                maxLength={10}
                pattern="[0-9]{10}"
                placeholder="Your Phone"
                required
                className="w-full p-2 md:p-3 rounded-md border focus:ring-2 focus:ring-yellow-500 text-sm md:text-base"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full p-2 md:p-3 rounded-md border focus:ring-2 focus:ring-yellow-500 text-sm md:text-base"
              />

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 md:py-3 rounded-lg shadow-lg transition duration-200 text-sm md:text-base"
              >
                Submit
              </button>

              {status && (
                <p className="text-center mt-3 text-sm md:text-base">
                  {status}
                </p>
              )}
            </form>
          </div>

          {/* Description */}
          <div className="bg-gray-100 w-full rounded-xl shadow-md border">
            <h2 className="text-2xl md:text-3xl text-center font-semibold mb-5 text-white bg-gradient-to-r from-yellow-500 to-yellow-600 p-3 rounded-lg shadow">
              Product Description
            </h2>
            <div className="p-4 md:p-6 text-sm md:text-base leading-relaxed">
              {product.description.map((block, i) => {
                if (block.type === "h2")
                  return (
                    <h2
                      key={i}
                      className="text-xl md:text-3xl font-bold mt-4 mb-4"
                    >
                      {block.text}
                    </h2>
                  );
                if (block.type === "p")
                  return (
                    <p
                      key={i}
                      dangerouslySetInnerHTML={{ __html: block.text }}
                      className="mb-3"
                    />
                  );
                if (block.type === "ul")
                  return (
                    <ul
                      key={i}
                      className="list-disc ml-6 text-sm md:text-lg mb-4"
                    >
                      {block.items.map((item, j) => (
                        <li
                          className="mb-2 md:mb-4"
                          key={j}
                          dangerouslySetInnerHTML={{ __html: item }}
                        />
                      ))}
                    </ul>
                  );
              })}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts?.length > 0 && (
          <div className="p-4 md:p-6">
            <h2 className="text-2xl md:text-4xl text-gray-800 font-semibold mb-6">
              Related Products
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((item) => (
                <a
                  key={item.slug}
                  href={`/products/${item.slug}`}
                  className="group block border rounded-xl shadow hover:shadow-lg transition p-3 md:p-4 text-center"
                >
                  <div className="w-full h-28 md:h-40 flex items-center justify-center overflow-hidden">
                    <Image
                      src={item.image.src}
                      alt="Bar Bending Machine Supplier"
                      width={200}
                      height={150}
                      unoptimized
                      className="object-contain max-h-full group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <h3 className="mt-3 md:mt-4 text-base md:text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500">
                    Model No.: {item.model}
                  </p>
                </a>
              ))}

              
            </div>
          </div>
        )}
<div className="flex justify-center items-center my-4">
  <Link href="/products">
    <button
      className="px-8 py-3 cursor-pointer bg-gradient-to-r from-amber-500 to-red-500 
      text-white text-lg font-medium rounded-full 
      shadow-md hover:shadow-lg 
      hover:brightness-110 transition-all duration-300"
    >
      Explore More
    </button>
  </Link>
</div>


      </section>

      <Footer />

      {/* Popup Enquiry */}
      {showPopup && (
        <Enquiry isOpen={showPopup} onClose={() => setShowPopup(false)} />
      )}
    </>
  );
}
