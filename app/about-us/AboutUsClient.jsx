"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Cta from "@/components/landingpage/Cta";
import Navbar from "@/components/Navbar";
import Footer from "@/components/landingpage/Footer";
import Link from "next/link";
import {
  Wrench,
  ShieldCheck,
  Layers,
  Home,
  Headphones,
  Truck,
} from "lucide-react";
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
      Voltage: "440 volt",
    },
  },

  {
    id: 5,
    badge: "New Arrival",
    name: "Anti-Fog Cannon Machine",
    image: "/products/asg/Anti-Fog-Cannon-Machine/1.webp",
    details: {
      Model: "RB-700",
      "Throw Range": "25 metre",
      "Automation Grade": "Semi Automatic",
      Material: "Mild Steel",
      Mounting: "Trolley",
      "Water Pump Power": "2 HP",
      "Rotation Angle": "90°",
      "Elevation Angle": "60°",
      "Dimension (L x W x H)": "8x5x6",
      Colour: "Yellow & Green",
    },
  },
  {
    id: 16,
    badge: "Best Seller",
    name: "Concrete Mixer",
    image: "/products/cm/CONCRETE MIXER/1.webp",
    details: {
      Model: "SSI-MX-04",
      Capacity: "10/7 Cft. / One Bag",
      Motor: "5HP (Compton/Kirloskar)",
      "Pneumatic Wheels": "4pcs",
      Engine: "6.5HP (Kirloskar)",
      "Special Feature": "Heavy Duty Along with Wheel",
      "Drum Size": "10mm-8mm-4mm",
      "Drum Capacity": "560 Ltr (Approx)",
    },
  },
  {
    id: 52,
    badge: "Hot Selling",
    name: "Ride On Roller",
    image: "/products/ror/RIDE ON ROLLER/1.webp",
    details: {
      Model: "SSI-SMT-700",
      "Walking/Driving Speed": "0-4 Km/H",
      "Centrifugal Force": "25 KN",
      "Driving Motor": "Hydraulic",
      "Vibration Frequency": "70 HZ",
      "Water Tank Capacity": "15 L",
      Weight: "700 Kg Approx",
      "Power Source": "Diesel Engine / Petrol Engine (Optional)",
      "Automation Grade": "Ride On Hydraulic Control",
      Brand: "SSI",
    },
  },
];

const features = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    title: "Proven Expertise Since 2013",
    desc: "With over a decade of experience, we understand the unique challenges of construction projects. Our team offers not only the best machines but also expert guidance to help you choose the right equipment for your specific needs.",
  },
  {
    icon: <Wrench className="w-6 h-6 text-white" />,
    title: "ISO 9001:2013 Certified Quality Standards",
    desc: "Every product we supply, from bar bending machines to safety gear, undergoes rigorous quality checks to meet global ISO standards, ensuring unmatched durability and performance.",
  },
  {
    icon: <Layers className="w-6 h-6 text-white" />,
    title: "Wide Range of Construction Solutions ",
    desc: "Beyond being a <strong class='text-black'>Bar Bending Machine Supplier </strong>, we offer over 100+ products including bar cutting machines, concrete mixers, builder hoists, monkey hoists, hanging platforms, and safety equipment – all under one roof.",
  },
  {
    icon: <Home className="w-6 h-6 text-white" />,
    title: "Product Durability & Performance ",
    desc: "Our machines are built with premium-grade materials to withstand tough working conditions, ensuring smooth operation and a longer lifespan.",
  },
  {
    icon: <Headphones className="w-6 h-6 text-white" />,
    title: "24/7 Dedicated Customer Support",
    desc: "Our dedicated support team is available round-the-clock to provide assistance, answer queries, and offer after-sales service for your peace of mind.",
  },
  {
    icon: <Truck className="w-6 h-6 text-white" />,
    title: "Nationwide Delivery & Service Network",
    desc: "Whether your site is in a metro city or a remote location, we ensure fast and secure delivery anywhere in India, along with exports to 15+ countries.",
  },

  {
    icon: <Truck className="w-6 h-6 text-white" />,
    title: "Commitment to Innovation & Safety ",
    desc: "We stay ahead by adopting the latest technologies in machinery manufacturing. Each product is designed for maximum safety, ensuring that your team can work efficiently without compromise.",
  },

  {
    icon: <Truck className="w-6 h-6 text-white" />,
    title: "Trusted by Leading Builders & Contractors ",
    desc: "Our reputation as a reliable <strong class='text-black'>Bar Bending Machine Supplier</strong> is built on long-term partnerships with top builders, contractors, and infrastructure companies who count on us for consistent quality and dependable service.",
  },
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
          
              >
                We empower companies with modern solutions that drive growth,
                efficiency, and results.
              </p>

           
            </div>

            {/* Right Side Image */}
            <div
              className="hidden md:block relative w-72 h-72 md:w-96 md:h-96"
         
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
<section className="bg-white mb-10 px-4 md:px-20 ">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
    {/* Image */}
    <div className="flex justify-center md:justify-start">
      <Image
        src="/aboutus/imgstack.webp"
        alt="Bar Bending Machine"
        width={450}
        height={350}
        className="rounded-md w-full max-w-[520px] h-auto"
      />
    </div>

    {/* Text */}
    <div className="text-base  md:text-lg leading-relaxed text-gray-700 space-y-4">
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
      <p>
        Today, we are recognized as a leading
        <strong> Bar Bending Machine Supplier in India</strong>, offering
        over <strong>100 high-standard products</strong> designed for
        superior performance and reliability.
      </p>
      <p>
        We believe that{" "}
        <strong>quality products and dependable service</strong> go hand
        in hand. That’s why we use only the{" "}
        <strong>best raw materials</strong>, follow
        <strong> rigorous quality checks</strong>, and ensure our machines
        are built to last in Indian climatic and working conditions.
      </p>
      <p>
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
                Providing <strong>over 100+ high-standard products</strong>,
                from bar cutting machines to concrete mixers, all under one
                roof.
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
                <strong>ISO 9001:2013 quality standards</strong> in every
                product we manufacture.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 border-b-4 border-[#FAAC18] hover:shadow-lg transition">
              <p className="text-gray-600">
                Continuously innovating to meet the evolving needs of the
                construction industry.
              </p>
            </div>
          </div>
          <p className="mt-6 text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            With every machine we deliver, our mission is to help our clients{" "}
            <strong className="text-black">
              build faster, safer, and smarter,
            </strong>{" "}
            making Shree Shakti Infratech the first choice for anyone seeking a{" "}
            <strong className="text-black">
              reliable Bar Bending Machine Supplier in India
            </strong>
          </p>
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
              At <strong className="text-black">Shree Shakti Infratech,</strong>{" "}
              a trusted{" "}
              <strong className="text-black">
                Bar Bending Machine Supplier
              </strong>{" "}
              in India, we offer an extensive range of construction machinery
              and safety equipment designed to meet the toughest industry
              standards. Our product portfolio is carefully curated to ensure
              maximum performance, safety, and reliability for every project.
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
      <div>
        <section
          className="relative bg-fixed bg-center bg-cover mt-25 md:mt-0 md:py-15"
          style={{
            backgroundImage: "url('/home/whychoose/bg.webp')",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Content Wrapper */}
          <div className="relative max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-3xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
                Why Choose{" "}
                <span className="text-yellow-400">Shree Shakti Infratech?</span>
              </h2>

              <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                When you choose{" "}
                <strong className="text-[#FFAC18]">
                  Shree Shakti Infratech,{" "}
                </strong>{" "}
                you’re partnering with a{" "}
                <strong className="text-[#FFAC18]">
                  Bar Bending Machine Supplier in India
                </strong>{" "}
                that values quality, reliability, and customer satisfaction
                above all else. Our commitment to excellence has helped us
                become a preferred choice for construction companies across
                India and abroad.
              </p>

              {/* Button */}
              <div className="flex items-center gap-4">
            

                {/* Mobile image */}
                <div className="block md:hidden">
                  <Image
                    src="/home/whychooseimg.webp"
                    alt="Rebar Machine"
                    width={140}
                    height={120}
                    className=""
                  />
                </div>
              </div>
            </div>

            {/* Right Image (Desktop only) */}
            <div className="hidden md:flex justify-center">
              <Image
                src="/home/whychooseimg.webp"
                alt="Why Choose Shree Shakti Infratech"
                width={700}
                height={500}
                className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto md:py-5 px-4 sm:px-6 lg:px-12">
          <div className="grid mb-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="border rounded-lg shadow-sm p-3 bg-white/90 hover:bg-[#FAAC18] transition duration-300 group"
              >
                {/* Icon Box */}
                <div className="bg-[#FAAC18] group-hover:bg-white w-12 h-12 flex items-center justify-center rounded mb-4 transition duration-300">
                  {React.cloneElement(feature.icon, {
                    className:
                      "text-white group-hover:text-black transition duration-300 w-6 h-6 ",
                  })}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-2 group-hover:text-white">
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className="text-black text-sm leading-relaxed group-hover:text-white/90"
                  dangerouslySetInnerHTML={{ __html: feature.desc }}
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Final CTA */}
     <Cta>

     </Cta>

      <Footer></Footer>
    </>
  );
};

export default Page;
