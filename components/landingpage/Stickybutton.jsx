'use client'
// import { useState } from 'react'
// import Enquire from './Enquire'
const Stickybutton = () => {
    // const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <>
      {/* {isFormOpen && <Enquire isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />} */}
      <div className="fixed z-50 right-0 top-1/4 flex flex-col items-center gap-2 z-20">
        <button  className="bg-[#FAAC18] text-white font-semibold px-3 py-5 text-lg shadow-md">
       Inquiry
      </button>
    </div>
  
  </>
  )
}
// onClick={() => setIsFormOpen(true)}
export default Stickybutton
