'use client'
import { useState } from 'react'
import Enquiry from '../Enquiry'
import { FaWhatsapp, FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa'

const Stickybutton = () => {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <>
      {/* Floating Social + Inquiry Section */}
    <div className="fixed top-[60%] right-0 z-50 flex flex-col items-center -translate-y-1/2">
  {/* Inquiry Button */}
  <button
    onClick={() => setIsFormOpen(true)}
    className="bg-[#FAAC18] text-white cursor-pointer font-semibold px-4 py-2 text-lg shadow-lg rounded-tl-md rounded-bl-md -rotate-90 origin-bottom-right hover:scale-105 transition mr-[-1px]"
  >
    Inquiry
  </button>
</div>


      {isFormOpen && (
        <Enquiry isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      )}
    </>
  )
}

export default Stickybutton
