'use client'
import { FaWhatsapp, FaInstagram, FaEnvelope, FaFacebookF } from 'react-icons/fa'

const SocialBar = () => {
  return (
    <div className=" fixed top-1/3 right-0 z-50 flex-col items-center space-y-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/+918826544443"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center w-44 translate-x-[130px] hover:translate-x-0 rounded-l-lg bg-white text-green-600 shadow-md border border-gray-200 transition-all duration-300"
      >
        <div className="flex items-center gap-3 px-4 py-3">
          <FaWhatsapp size={20} className="min-w-[20px]" />
          <span className="whitespace-nowrap text-sm font-medium">
            WhatsApp
          </span>
        </div>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/shree_shakti_infratech/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center w-44 translate-x-[130px] hover:translate-x-0 rounded-l-lg bg-white text-pink-600 shadow-md border border-gray-200 transition-all duration-300"
      >
        <div className="flex items-center gap-3 px-4 py-3">
          <FaInstagram size={20} className="min-w-[20px]" />
          <span className="whitespace-nowrap text-sm font-medium">
            Instagram
          </span>
        </div>
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/ShreeShaktiInfratech" 
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center w-44 translate-x-[130px] hover:translate-x-0 rounded-l-lg bg-white text-blue-600 shadow-md border border-gray-200 transition-all duration-300"
      >
        <div className="flex items-center gap-3 px-4 py-3">
          <FaFacebookF size={20} className="min-w-[20px]" />
          <span className="whitespace-nowrap text-sm font-medium">
            Facebook
          </span>
        </div>
      </a>

      {/* Email */}
      {/* <a
        href="mailto:shreeshaktiinfratech@gmail.com"
        className="group relative flex items-center w-44 translate-x-[130px] hover:translate-x-0 rounded-l-lg bg-white text-gray-700 shadow-md border border-gray-200 transition-all duration-300"
      >
        <div className="flex items-center gap-3 px-4 py-3">
          <FaEnvelope size={20} className="min-w-[20px]" />
          <span className="whitespace-nowrap text-sm font-medium">
            Email
          </span>
        </div>
      </a> */}
    </div>
  )
}

export default SocialBar
