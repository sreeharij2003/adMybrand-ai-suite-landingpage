'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface AdvancedAnimationsProps {
  children: React.ReactNode
  animation?: 'fadeInUp' | 'slideInLeft' | 'slideInRight' | 'scaleIn' | 'rotateIn' | 'morphIn'
  delay?: number
  duration?: number
  trigger?: string
  className?: string
}

const AdvancedAnimations = ({ 
  children, 
  animation = 'fadeInUp', 
  delay = 0, 
  duration = 1,
  trigger,
  className = ''
}: AdvancedAnimationsProps) => {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const element = elementRef.current

    // Set initial state
    gsap.set(element, {
      opacity: 0,
      y: animation === 'fadeInUp' ? 50 : 0,
      x: animation === 'slideInLeft' ? -50 : animation === 'slideInRight' ? 50 : 0,
      scale: animation === 'scaleIn' ? 0.8 : 1,
      rotation: animation === 'rotateIn' ? -10 : 0,
    })

    // Create animation timeline
    const tl = gsap.timeline({
      scrollTrigger: trigger ? {
        trigger: trigger,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      } : {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    })

    // Add animations based on type
    switch (animation) {
      case 'fadeInUp':
        tl.to(element, {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power3.out"
        })
        break

      case 'slideInLeft':
        tl.to(element, {
          opacity: 1,
          x: 0,
          duration,
          delay,
          ease: "power3.out"
        })
        break

      case 'slideInRight':
        tl.to(element, {
          opacity: 1,
          x: 0,
          duration,
          delay,
          ease: "power3.out"
        })
        break

      case 'scaleIn':
        tl.to(element, {
          opacity: 1,
          scale: 1,
          duration,
          delay,
          ease: "back.out(1.7)"
        })
        break

      case 'rotateIn':
        tl.to(element, {
          opacity: 1,
          rotation: 0,
          duration,
          delay,
          ease: "power3.out"
        })
        break

      case 'morphIn':
        tl.to(element, {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration,
          delay,
          ease: "elastic.out(1, 0.3)"
        })
        break
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [animation, delay, duration, trigger])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}

// Particle animation component
export const ParticleField = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const particles: HTMLDivElement[] = []

    // Create particles
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div')
      particle.className = 'absolute w-1 h-1 bg-blue-400 rounded-full opacity-20'
      particle.style.left = Math.random() * 100 + '%'
      particle.style.top = Math.random() * 100 + '%'
      container.appendChild(particle)
      particles.push(particle)
    }

    // Animate particles
    particles.forEach((particle, index) => {
      gsap.to(particle, {
        x: `+=${Math.random() * 200 - 100}`,
        y: `+=${Math.random() * 200 - 100}`,
        opacity: Math.random() * 0.5 + 0.1,
        duration: Math.random() * 3 + 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.1
      })
    })

    return () => {
      particles.forEach(particle => particle.remove())
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none" />
}

// Text reveal animation
export const TextReveal = ({ children, className = '' }: { children: string, className?: string }) => {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!textRef.current) return

    const element = textRef.current
    const text = element.textContent || ''
    element.innerHTML = ''

    // Split text into spans
    text.split('').forEach((char, index) => {
      const span = document.createElement('span')
      span.textContent = char === ' ' ? '\u00A0' : char
      span.style.display = 'inline-block'
      span.style.opacity = '0'
      span.style.transform = 'translateY(50px)'
      element.appendChild(span)
    })

    const spans = element.querySelectorAll('span')

    // Animate each character
    gsap.to(spans, {
      opacity: 1,
      y: 0,
      duration: 0.05,
      stagger: 0.02,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    })
  }, [children])

  return <div ref={textRef} className={className}>{children}</div>
}

// Magnetic button effect
export const MagneticButton = ({ children, className = '', ...props }: any) => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!buttonRef.current) return

    const button = buttonRef.current

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      gsap.to(button, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: "power3.out"
      })
    }

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)"
      })
    }

    button.addEventListener('mousemove', handleMouseMove)
    button.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      button.removeEventListener('mousemove', handleMouseMove)
      button.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <button ref={buttonRef} className={className} {...props}>
      {children}
    </button>
  )
}

// Morphing shape background
export const MorphingShape = () => {
  const shapeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!shapeRef.current) return

    const shape = shapeRef.current

    gsap.to(shape, {
      borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    })

    gsap.to(shape, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none"
    })
  }, [])

  return (
    <div
      ref={shapeRef}
      className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"
      style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
    />
  )
}

export default AdvancedAnimations
