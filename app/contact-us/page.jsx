'use client'

import Image from 'next/image'
import { Phone,Mail  } from 'lucide-react';



const page = () => {
  return (
    <div>
 




      {/* Hero Section */}
 <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
  {/* Background with parallax style */}
  <div
    className="absolute inset-0 bg-fixed bg-center bg-cover"
    style={{ backgroundImage: "url('/home/hero1.webp')" }}
  >
    
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-yellow-600/40" />
  
   <Image
              className="hidden md:block absolute  right-38 z-1000 animate-bounce top-10"
              src="/home/round.png"
              alt="Round Image"
              width={150}
              height={500}
            />
  
  </div>

  {/* Content Box */}
  <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-16">
    {/* Text Content */}
    <div className="text-center md:text-left">
      <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
        Transform Your <br />
        <span className="text-[#FAAC18] relative inline-block animate-pulse">
          Business
          <span className="absolute left-0 -bottom-2 w-full h-1 bg-[#FAAC18] rounded-full "></span>
        </span>
      </h2>
      <p className="mt-4 text-lg md:text-xl text-gray-100 max-w-md mx-auto md:mx-0">
        Let’s build something amazing together. Reach out and we’ll get back to you right away.
      </p>

    </div>

    {/* Right Side Image */}
    <div className="hidden md:block relative w-72 h-70 md:w-96 md:h-100">
      <div className="absolute inset-0 rounded-2xl border-4 border-[#FAAC18] animate-pulse" />
      <img
        src="/product.png"  
        alt="CTA Illustration"
        className="relative w-full h-full object-cover rounded-2xl shadow-xl"
      />
    </div>

    
  </div>
</section>


    <section className="bg-white py-10 px-6 md:px-20">
      {/* Top Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Phone */}
        <div className=" flex bg-[#FAAC18] text-white p-6 rounded-md shadow-md flex flex-col items-center justify-center">
            <div className='bg-white rounded-full p-5 absolute -top-10 left-0'></div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-2xl"><Phone /></span>
            <h3 className="font-bold text-lg">Phone Number</h3>
          </div>
          <p className="text-lg">+91 8826544443</p>
          <p className="text-lg">+91 9654243444</p>
        </div>

        {/* Email */}
        <div className="bg-[#fff] border-2 border-[#FAAC18] text-center p-6 rounded-md shadow-md">
          <div className="flex items-center justify-center space-x-2 mb-2 text-[#FAAC18]">
            <span className="text-2xl"><Mail /></span>
            <h3 className="font-bold text-lg">Email Address</h3>
          </div>
          <p className="text-gray-800 text-lg">shreeshaktiinfratech@gmail.com</p>
        </div>

        {/* Address */}
        <div className="bg-[#FAAC18] text-white p-6 rounded-md shadow-md flex flex-col items-center justify-center">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-2xl">📍</span>
            <h3 className="font-bold text-lg">Address</h3>
          </div>
          <p className="text-center">
            4A, S-Block, Vishwas Park,
            <br /> Raja Puri Main Road, Opp. Sec – 3,
            <br /> Dwarka, New Delhi – 110059
          </p>
        </div>
      </div>



      {/* Form + Map Section */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Get in Touch with Us
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="border rounded-md px-4 py-2 w-full"
              />
              <input
                type="text"
                placeholder="Phone No."
                className="border rounded-md px-4 py-2 w-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="City / Location"
                className="border rounded-md px-4 py-2 w-full"
              />
              <select className="border rounded-md px-4 py-2 w-full bg-[#FAAC18] text-white font-semibold">
                <option>Product Requirement</option>
                <option>Bar Bending Machine</option>
                <option>Bar Cutting Machine</option>
                <option>Concrete Mixer</option>
                <option>Hoist Machine</option>
              </select>
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="border rounded-md px-4 py-2 w-full"
            />
            <textarea
              placeholder="Message for us.."
              rows="4"
              className="border rounded-md px-4 py-2 w-full"
            />
            <button
              type="submit"
              className="bg-[#FAAC18] text-white px-6 py-3 rounded-md font-semibold w-full"
            >
              Send
            </button>
          </form>
        </div>


   
        

    {/* Google Map */}
<div className="w-full h-[400px]">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d80271.47017799332!2d77.055914!3d28.607124!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ad4c9d93cfb%3A0xbced0bcc7aa415c0!2sShree%20Shakti%20Infratech!5e1!3m2!1sen!2sin!4v1756188371979!5m2!1sen!2sin"
    width="600"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="rounded-md shadow-md w-full h-full"
  ></iframe>
</div>

      </div>

      
      

      <div className="relative hidden md:block">
        <Image
          src="/home/ctaimg1.webp"
          alt="Concrete Mixer"
          width={160}
          height={120}
          className="absolute -bottom-10 -left-15"
        />
      </div>

    </section>



    </div>
  )
}

export default page