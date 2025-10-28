'use client'
import Link from 'next/link'
import React from 'react'


const Check = () => {
  return (

      <section className="hidden md:block relative w-full h-auto flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/home/hero4.webp')" }}
        ></div>

        {/* Overlay Shape (angled yellow) */}
        <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gray-200 clip-path-custom z-0"></div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-3 items-center">
          
          {/* Left Machine */}
          <div
            className="flex justify-center md:justify-end"
        
          >
            <img
              src="/feature2.webp"
              alt="Machine Left"
              className="w-[300px] md:w-[400px] drop-shadow-2xl relative z-20"
            />
          </div>

          {/* Center Text */}
          <div
            className="text-center md:text-left col-span-1 md:col-span-1 space-y-4 relative z-20"
     
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-snug">
            Bar Bending Machines & Anti Smog Guns You Can Trust
            </h2>
            <p className="text-lg md:text-2xl font-medium text-yellow-500">
            Engineered for precision steel bending and effective dust suppression
            </p>


            <Link href="/products">
                <button
              className="px-6 py-3 cursor-pointer bg-black text-white font-semibold rounded-2xl shadow-lg hover:bg-gray-900 transition"
         
            >
              Learn More
            </button>
            </Link>
        
          </div>

          {/* Right Machine */}
          <div
            className="flex justify-center md:justify-start"
    
          >
            <img
              src="/home/smog-gun.webp"
              alt="Machine Right"
              className="w-[300px] md:w-[400px] drop-shadow-2xl relative z-20"
            />
          </div>
        </div>

        {/* Custom Clip Path */}
        <style jsx>{`
          .clip-path-custom {
            clip-path: polygon(0 40%, 120% 0, 100% 100%, 0% 100%);
          }
        `}</style>
      </section>
 
  )
}

export default Check
