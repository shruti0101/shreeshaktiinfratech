'use client'
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa'

const SocialBar = () => {
  return (
    <div className="hidden md:flex fixed top-1/3 right-0 z-50 flex-col items-center space-y-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/1234567890"
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
        href="https://instagram.com"
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

      {/* Email */}
      <a
        href="mailto:info@example.com"
        className="group relative flex items-center w-44 translate-x-[130px] hover:translate-x-0 rounded-l-lg bg-white text-gray-700 shadow-md border border-gray-200 transition-all duration-300"
      >
        <div className="flex items-center gap-3 px-4 py-3">
          <FaEnvelope size={20} className="min-w-[20px]" />
          <span className="whitespace-nowrap text-sm font-medium">
            Email
          </span>
        </div>
      </a>
    </div>
  )
}

export default SocialBar
