'use client'
import { useState } from 'react'
import Enquiry from '../Enquiry';

const Stickybutton = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
  <div className="fixed top-1/3 right-0 z-50 transform -translate-y-1/2">
  <button
    onClick={() => setIsFormOpen(true)}
    className="bg-[#FAAC18] text-white cursor-pointer font-semibold px-4 py-2 text-lg shadow-md rounded-tl-md rounded-bl-md -rotate-90 origin-bottom-right"
  >
    Inquiry
  </button>
</div>


      {isFormOpen && <Enquiry isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />}
    </>
  )
}

export default Stickybutton
