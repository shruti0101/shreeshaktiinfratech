'use client'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function AOSWrapper({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // global animation duration
      once: true, // run only once
      easing: 'ease-in-out',
    })
  }, [])

  return <>{children}</>
}
