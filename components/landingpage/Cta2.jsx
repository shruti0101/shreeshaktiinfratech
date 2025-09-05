import React from "react";
import Link from "next/link";
const Cta2 = () => {
  return (
    <div>
      <section className="max-w-5xl mx-auto bg-white py-4 px-10 ">
        <div className="max-w-4xl text-center">
          <h2 className="text-lg md:text-4xl font-semibold">
            Ready to Power Your Project with the{" "}
            <span className="text-[#FAAC18]">
              Best Bar Bending Machine Supplier{" "}
            </span>{" "}
            in India?{" "}
          </h2>

          <p className="text-base py-4 md:p-7 md:text-xl text-[#2C2C2C]">
            At Shree Shakti Infratech, we don’t just supply machines — we
            deliver performance, reliability, and unmatched service. Whether you
            need a single bar bending machine or a complete construction
            equipment package, we’re here to help you work faster, safer, and
            smarter.
          </p>

          <p className="text-xl font-bold">
            <span className="text-[#FAAC18] ">Call Us Now</span> or <span className="text-[#FAAC18]">Request a Free Quote Today </span>{" "}
            and experience why we’re the preferred Bar Bending Machine Supplier
            in India for contractors nationwide.{" "}
          </p>

             {/* CTA Button */}
      <div className="flex justify-center">


        <Link href="/contact-us">
        
        <button className="bg-[#fef3c7] text-xl border-2 my-10 cursor-pointer font-bold py-2 px-4 border-yellow-500 hover:underline hover:scale-105 transition-all duration-300 ease-out">
        Get Free Consultation Today!{" "}
       
        </button>
        </Link>
      </div>
        </div>
      </section>
    </div>
  );
};

export default Cta2;
