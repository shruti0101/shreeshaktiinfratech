"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Whychoose from "@/components/landingpage/Whychoose";
import AOSWrapper from "@/components/aos/AOSWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/landingpage/Footer";
import Link from "next/link";
// ✅ Moved outside component to avoid re-creation on every render
const products = [
{
  id: 1,
  badge: "Best Seller",
  name: "Automatic Bar Bending Machine 32-40 MM",
  image: "/products/bpm/Automatic Bar Bender/1.webp",
  details: {
    "Bar Dimensions": "8mm to 32mm",
    "Model Name/Number": "SSI GW 42",
    "Max Bending Radius": "32MM",
    "Power Source": "Electric",
    "Max Bending Angle": "32",
    "Motor Speed": "2800",
    "Machine Weight": "270 KG",
    "TMT Bar Steel Dia.": "5 hp",
    "Gear Oil": "90 no.",
    "Voltage": "440 volt",
  },
},

{
  id: 5,
  badge: "New Arrival",
  name: "Anti-Fog Cannon Machine",
  image: "/products/asg/Anti-Fog-Cannon-Machine/1.webp",
  details: {
    "Model": "RB-700",
    "Throw Range": "25 metre",
    "Automation Grade": "Semi Automatic",
    "Material": "Mild Steel",
    "Mounting": "Trolley",
    "Water Pump Power": "2 HP",
    "Rotation Angle": "90°",
    "Elevation Angle": "60°",
    "Dimension (L x W x H)": "8x5x6",
    "Colour": "Yellow & Green"
  }
}
,
{
  id: 16,
  badge: "Best Seller",
  name: "Concrete Mixer",
  image: "/products/cm/CONCRETE MIXER/1.webp",
  details: {
    "Model": "SSI-MX-04",
    "Capacity": "10/7 Cft. / One Bag",
    "Motor": "5HP (Compton/Kirloskar)",
    "Pneumatic Wheels": "4pcs",
    "Engine": "6.5HP (Kirloskar)",
    "Special Feature": "Heavy Duty Along with Wheel",
    "Drum Size": "10mm-8mm-4mm",
    "Drum Capacity": "560 Ltr (Approx)"
  }
},
{
  id: 52,
  badge: "Hot Selling",
  name: "Ride On Roller",
  image: "/products/ror/RIDE ON ROLLER/1.webp",
  details: {
    "Model": "SSI-SMT-700",
    "Walking/Driving Speed": "0-4 Km/H",
    "Centrifugal Force": "25 KN",
    "Driving Motor": "Hydraulic",
    "Vibration Frequency": "70 HZ",
    "Water Tank Capacity": "15 L",
    "Weight": "700 Kg Approx",
    "Power Source": "Diesel Engine / Petrol Engine (Optional)",
    "Automation Grade": "Ride On Hydraulic Control",
    "Brand": "SSI"
  }
}





 
];

const Page = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % products.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? products.length - 1 : prev - 1));

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const product = products[current];

  return (
    <>
      {/* Hero Section */}
    
<Navbar></Navbar>

  <AOSWrapper>
      <section className="relative w-full h-[400px] md:h-[650px] flex items-center justify-center overflow-hidden">
        {/* Background with parallax style */}
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/home/hero1.webp')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-yellow-600/40" />
          <Image
            className="hidden md:block absolute right-38 z-100 animate-bounce top-33"
            src="/home/round.webp"
            alt="Round Image"
            width={150}
            height={500}
          />
        </div>

        {/* Content Box */}
        <div className="relative pt-18 z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-16">
          {/* Text Content */}
          <div
            className="text-center md:text-left"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
              Transform Your <br />
              <span className="text-[#FAAC18] relative inline-block">
                Business
                <span className="absolute left-0 -bottom-2 w-full h-1 bg-[#FAAC18] rounded-full animate-pulse"></span>
              </span>
            </h2>
            <p
              className="mt-4 text-lg md:text-xl text-gray-100 max-w-md mx-auto md:mx-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              We empower companies with modern solutions that drive growth,
              efficiency, and results.
            </p>

            {/* CTA Button */}
            <div
              className="mt-6"
              data-aos="zoom-in"
              data-aos-delay="400"
              data-aos-duration="800"
            >
              <a
                href="#contact"
                className="px-6 py-3 bg-[#FAAC18] text-black font-semibold rounded-full shadow-lg hover:bg-yellow-400 transition transform hover:scale-105"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Right Side Image */}
          <div
            className="hidden md:block relative w-72 h-72 md:w-96 md:h-96"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="absolute inset-0 rounded-2xl border-4 border-[#FAAC18] animate-pulse" />
            <img
              src="/aboutus/bar-wending.webp"
              alt="CTA Illustration"
              className="relative w-full h-full object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>
    </AOSWrapper>







      {/* About Content */}
      <section className="mt-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <h1 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 text-center md:text-left">
            Shree Shakti Infratech
          </h1>
          <h3 className="text-[#FAAC18] md:ml-40 text-lg md:text-3xl font-semibold mb-6 text-center md:text-left">
            Your Trusted Bar Bending Machine Supplier in India
          </h3>
        </div>
      </section>

      {/* About Details */}
      <section className="bg-white mb-10 px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center md:justify-start">
            <Image
              src="/aboutus/imgstack.webp"
              alt="Bar Bending Machine"
              width={450}
              height={350}
              className="rounded-md md:ml-20 w-full max-w-[400px] h-auto"
            />
          </div>
          <div className="text-base md:text-lg leading-relaxed text-gray-700">
            <p>
              Since our inception in{" "}
              <strong>2013, Shree Shakti Infratech</strong> has been a renowned
              name in the construction machinery industry, delivering quality,
              durability, and unmatched service. As an{" "}
              <strong>ISO 9001:2013 certified company</strong>, we were founded
              with a clear vision — to bridge the gap between sophisticated
              customer demands and the limited product options available in the
              market.
            </p>
            <p className="mt-4">
              Today, we are recognized as a leading
              <strong> Bar Bending Machine Supplier in India</strong>, offering
              over <strong>100 high-standard products</strong> designed for
              superior performance and reliability.
            </p>
            <p className="mt-4">
              We believe that{" "}
              <strong>quality products and dependable service</strong> go hand
              in hand. That’s why we use only the{" "}
              <strong>best raw materials</strong>, follow
              <strong> rigorous quality checks</strong>, and ensure our machines
              are built to last in Indian climatic and working conditions.
            </p>
            <p className="mt-4">
              From{" "}
              <strong>
                Bar Cutting Machines, Bar Bending Machines, Hopper Mixers,
                Concrete Mixers, Hanging Platforms, Monkey Hoists, Builder
                Hoists, Digital Compression Testing Machines
              </strong>{" "}
              to <strong>Safety Jackets</strong>, our diverse product range
              caters to every construction need.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative h-[505px] md:h-[600px] w-full overflow-hidden">
        <Image
          src="/aboutus/vision.webp"
          alt="Our Vision"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 pt-10 md:pt-16">
          <h2 className="text-3xl mt-10 md:text-6xl font-extrabold text-white drop-shadow-lg text-center animate-fade-in">
            Our Vision
          </h2>
        </div>
        <Image
          width={100}
          height={100}
          src="/aboutus/comma.webp"
          alt="Quote Icon"
          className="absolute left-3 top-3 md:left-8 md:top-8 w-12 h-12 md:w-20 md:h-20"
        />
        <div className="relative z-10 mt-6 md:mt-8 mx-auto flex items-center justify-center px-4 md:px-10">
          <p className="text-base md:text-xl leading-relaxed text-center max-w-4xl text-white">
            At <span className="text-[#FAAC18]">Shree Shakti Infratech</span>,
            our vision is to set new benchmarks in the construction machinery
            sector by being the most trusted{" "}
            <span className="text-[#FAAC18]">
              Bar Bending Machine Supplier in India.
            </span>{" "}
            We aim to revolutionize the industry by delivering world-class
            machines that combine innovation, efficiency, and safety, enabling
            infrastructure development at a faster pace while maintaining
            uncompromising quality. Our goal is to be recognized not only for
            our products but also for our contribution to shaping a stronger,
            more advanced construction ecosystem in India and beyond.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative bg-[#fff8ee] py-16 px-6 md:px-20">
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Mission
          </h2>
          <p className="mt-6 text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Our mission is to empower construction{" "}
            <strong>
              professionals with high performance, durable, and reliable bar
              bending machines
            </strong>{" "}
            along with a comprehensive range of industrial equipment. As a
            leading <strong>Bar Bending Machine Supplier in India</strong>, we
            are committed to:
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-white shadow-md p-6 border-b-4 border-[#FAAC18] hover:shadow-lg transition">
              <p className="text-gray-600">
                Using the <strong>best raw materials</strong> and advanced
                manufacturing techniques to ensure long-lasting performance.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 border-b-4 border-[#FAAC18] hover:shadow-lg transition">
              <p className="text-gray-600">
                Providing <strong>over 100+ high-standard products</strong>, from
                bar cutting machines to concrete mixers, all under one roof.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 border-b-4 border-[#FAAC18] hover:shadow-lg transition">
              <p className="text-gray-600">
                Ensuring <strong>nationwide delivery</strong> and{" "}
                <strong>24/7 after-sales service</strong> for maximum customer
                satisfaction.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 border-b-4 border-[#FAAC18] hover:shadow-lg transition">
              <p className="text-gray-600">
                Maintaining strict adherence to{" "}
                <strong>ISO 9001:2013 quality standards</strong> in every product
                we manufacture.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 border-b-4 border-[#FAAC18] hover:shadow-lg transition">
              <p className="text-gray-600">
                Continuously innovating to meet the evolving needs of the
                construction industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Portfolio */}
      <section
        className="relative w-full overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/home/infa-bg.webp')" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-5 md:py-5">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-5xl font-bold">
              Our Product <span className="text-[#FAAC18]">Portfolio</span>
            </h2>
            <p className="text-lg md:text-xl mt-2">
              Delivering Quality, Durability & Innovation
            </p>
            <p className="text-gray-700 text-base md:text-lg mt-4">
              At Shree Shakti Infratech, a trusted Bar Bending Machine Supplier
              in India, we offer an extensive range of construction machinery and
              safety equipment designed to meet the toughest industry standards.
              Our product portfolio is carefully curated to ensure maximum
              performance, safety, and reliability for every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="relative flex justify-center">
              <span className="absolute top-4 left-4 bg-[#FAAC18] text-white text-sm font-semibold px-3 py-1 rounded">
                {product.badge}
              </span>
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                priority={current === 0}
                className="object-contain transition-transform duration-500 ease-in-out"
              />
              <button
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#FAAC18] text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#e99b10] transition"
              >
                &#10094;
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next Slide"
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#FAAC18] text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#e99b10] transition"
              >
                &#10095;
              </button>
            </div>

            <div className="bg-black text-white p-6 md:p-8 rounded-xl border-2 border-yellow-600 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold mb-5 text-center">
                {product.name}
              </h2>
              <div className="grid grid-cols-2 gap-y-2 text-base md:text-md">
                {Object.entries(product.details).map(([key, value]) => (
                  <React.Fragment key={key}>
                    <p>{key}</p>
                    <p className="text-gray-300">{value}</p>
                  </React.Fragment>
                ))}
              </div>
              <div className="flex gap-4 mt-8 justify-center">
                <Link href="/contact-us">
                   <button className="bg-[#FAAC18] cursor-pointer text-white font-semibold px-6 py-3 rounded hover:bg-[#e99b10] transition">
                  Inquire Now
                </button>
                </Link>
             
            
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <Whychoose />

      {/* Final CTA */}
      <section className="bg-[#fff8ee] py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Let’s Build Your Success –{" "}
            <span className="text-[#FAAC18]">Start Today!</span>
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Looking for a reliable <strong>Bar Bending Machine Supplier</strong>{" "}
            who delivers quality, durability, and unmatched service? At{" "}
            <strong>Shree Shakti Infratech</strong>, we’re here to equip your
            construction projects with world-class machinery that works as hard
            as you do.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Whether you need a single machine or a complete construction
            equipment solution, our experts are ready to guide you to the perfect
            choice — with fast delivery, competitive pricing, and full after-sales
            support.
          </p>
          <p className="text-xl font-bold text-gray-900">
            Don’t wait — get your project moving!
          </p>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
};

export default Page;
