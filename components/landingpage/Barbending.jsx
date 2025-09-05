import React from "react";
import Image from "next/image";
const Barbending = () => {
  return (
    <div>
      <section className="bg-[#FFFAF1]   relative  h-full">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
          {/* Background Rectangle */}
          <Image
            src="/home/about-rect.webp"
            width={600}
            height={200}
            alt="Background rectangle"
            className="w-30 z-10 md:w-120 h-auto absolute right-0 top-0"
          />
          <h3 className="max-w-2xl leading-[1.3] font-bold mb-3 text-3xl md:text-5xl">
            Bar Bending Machine{" "}
            <span className="text-[#FAAC18] ">Supplier in India</span>{" "}
          </h3>

          <div className="text-gray-700 text-xl max-w-3xl">
            <p className="mb-5">
              As a leading{" "}
              <strong>
                {" "}
                Bar Bending Machine Supplier in India, Shree Shakti Infratech
              </strong>{" "}
              provides robust, precision-engineered machines designed to meet
              the demands of modern construction projects. Our bar bending
              machines deliver accurate bends, faster operations, and reduced
              manual effort, making them the preferred choice for contractors
              across the country.
            </p>

            <p className="mb-5">
              At <strong>Shree Shakti Infratech,</strong> we take pride in being
              a <strong>Bar Bending Machine Supplier in India</strong> that
              offers products manufactured from premium-grade materials and
              tested under strict ISO 9001:2013 quality standards. Each machine
              is built for long-term durability, minimal maintenance, and
              reliable performance on residential, commercial, and
              infrastructure sites.
            </p>

            <p className="mb-5">
              When you choose us as your{" "}
              <strong>Bar Bending Machine Supplier in India,</strong>
              you get more than just equipment — you get nationwide delivery,
              24/7 customer support, and expert technical assistance. We are
              committed to delivering complete bending solutions that help you
              work faster, safer, and more efficiently.
            </p>
          </div>

          <h3 className="text-xl md:text-3xl max-w-4xl"> <span className="text-[#FAAC18]">Shree Shakti Infratech</span>  – The Name You Can Trust as Your <span className="text-[#FAAC18]"> Bar Bending Machine Supplier in
India.</span></h3>

 
     {/* Left Side - Image */}
           <div className="hidden md:block absolute bottom-6 right-8">
             <Image
               src="/home/ctaimg1.webp"
               alt="Construction Equipment"
               width={400}
               height={400}
               className="object-contain"
             />
           </div>
        </div>
      </section>
    </div>
  );
};

export default Barbending;
