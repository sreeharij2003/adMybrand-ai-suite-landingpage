'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const LogoSlider = () => {
  const [isPaused, setIsPaused] = useState(false)

  // AI Marketing and Tech companies
  const logos = [
    { name: 'HubSpot', style: 'normal', weight: 'semibold' },
    { name: 'Mailchimp', style: 'normal', weight: 'medium' },
    { name: 'Salesforce', style: 'normal', weight: 'bold' },
    { name: 'Marketo', style: 'normal', weight: 'medium' },
    { name: 'Hootsuite', style: 'italic', weight: 'light' },
    { name: 'Buffer', style: 'normal', weight: 'semibold' },
    { name: 'Canva', style: 'normal', weight: 'bold' },
    { name: 'Klaviyo', style: 'normal', weight: 'medium' },
    { name: 'Jasper', style: 'italic', weight: 'normal' },
    { name: 'Copy.ai', style: 'normal', weight: 'semibold' },
    { name: 'Drift', style: 'normal', weight: 'bold' },
    { name: 'Intercom', style: 'normal', weight: 'medium' },
  ]

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos]

  return (
    <section className="py-4 bg-black">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">


        {/* Logo Slider Container */}
        <div className="relative overflow-hidden py-8">
          {/* Enhanced gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent" />
          
          {/* Scrolling logos */}
          <motion.div
            className="flex items-center gap-16 md:gap-20 lg:gap-24"
            animate={isPaused ? {} : {
              x: [0, -50 + '%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            style={{
              width: `${duplicatedLogos.length * 240}px`,
            }}
            onHoverStart={() => setIsPaused(true)}
            onHoverEnd={() => setIsPaused(false)}
          >
            {duplicatedLogos.map((logo, index) => (
              <motion.div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 w-40 h-20 md:w-48 md:h-24 flex items-center justify-center"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Glassmorphism logo container */}
                <div className="relative w-full h-full flex items-center justify-center group cursor-pointer">
                  {/* Glassmorphism background - always visible */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl group-hover:shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-500" />

                  {/* Inner glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Subtle border highlight */}
                  <div className="absolute inset-0 rounded-2xl border border-gradient-to-br from-blue-400/30 via-transparent to-purple-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Logo text */}
                  <span
                    className={`
                      relative z-10 text-gray-300 text-base md:text-lg
                      group-hover:text-white transition-all duration-500
                      whitespace-nowrap tracking-wide px-4 py-2
                      ${logo.style === 'italic' ? 'italic' : ''}
                      ${logo.weight === 'light' ? 'font-light' : ''}
                      ${logo.weight === 'normal' ? 'font-normal' : ''}
                      ${logo.weight === 'medium' ? 'font-medium' : ''}
                      ${logo.weight === 'semibold' ? 'font-semibold' : ''}
                      ${logo.weight === 'bold' ? 'font-bold' : ''}
                      ${logo.weight === 'black' ? 'font-black' : ''}
                    `}
                    style={{
                      filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
                      transition: 'all 0.5s ease',
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.filter = 'drop-shadow(0 0 12px rgba(59, 130, 246, 0.8)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.filter = 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))';
                    }}
                  >
                    {logo.name}
                  </span>
                </div>

                {/* Uncomment this when you have actual logo images */}
                {/*
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                />
                */}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LogoSlider
