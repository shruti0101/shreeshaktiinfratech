"use client";
import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  { src: "/products/asg/Anti-Fog-Cannon-Machine/1.webp", link: "/products/anti-fog-cannon-machine", name: "Anti Fog Cannon Machine" },
  { src: "/products/ror/RIDE ON ROLLER/1.webp", link: "/products/ride-on-roller", name: "Ride On Roller" },
  { src: "/products/bpm/Automatic Bar Bender/1.webp", link: "/products/bar-bending-machine", name: "Automatic Bar Bender" },
  { src: "/products/cm/CONCRETE MIXER/1.webp", link: "/products/concrete-mixer", name: "Concrete Mixer" },
  { src: "/products/lte/HOT AIR OVEN/1.webp", link: "/products/hot-air-oven", name: "Hot Air Oven" },
  { src: "/products/ml/MONKEY HOIST ( 200300 KG )/1.webp", link: "/products/monkey-hoist-200-300kg", name: "Monkey Hoist (200-300 KG)" },
];

const GallerySection = () => {
  return (
    <section className="relative py-12 px-6 md:px-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/home/gallerybg.webp')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-extrabold text-white drop-shadow-lg relative inline-block">
            Our Gallery
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-yellow-500 rounded-full"></span>
          </h2>
          <p className="mt-4 text-white text-lg">
            Explore our products & real-world installations
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="relative overflow-hidden group shadow-xl aspect-[6/6] block rounded-lg"
            >
              {/* Image */}
              <Image
                src={item.src}
                alt={item.name}
                fill
                className="bg-white object-contain transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center">
                <span className="text-white text-xl font-bold">{item.name}</span>
                <span className="text-yellow-400 mt-2 text-sm tracking-wide">
                  View Product
                </span>
              </div>

              {/* Product name always visible under image */}
              <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white text-center py-2 text-sm font-medium">
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
