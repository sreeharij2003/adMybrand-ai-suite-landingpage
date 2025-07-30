'use client'

import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { useEffect, useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "TechFlow Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "ADmyBRAND AI Suite transformed our marketing completely. We've seen a 300% increase in engagement and our content creation time has been cut by 80%. The AI understands our brand voice perfectly.",
    results: "300% engagement increase",
    logo: "🚀"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "CEO",
    company: "GrowthLab",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "The ROI we've achieved with ADmyBRAND is incredible. Our ad campaigns are now 10x more effective, and the automated optimization saves us countless hours every week.",
    results: "10x ad effectiveness",
    logo: "📈"
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Content Manager",
    company: "Creative Studios",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "As a small team, we needed something that could scale with us. ADmyBRAND's AI tools let us compete with much larger agencies. The quality of generated content is outstanding.",
    results: "5x content output",
    logo: "🎨"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Digital Marketing Lead",
    company: "E-commerce Plus",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "The email marketing automation alone has paid for itself. Our open rates increased by 150% and conversions by 200%. The AI personalization is game-changing.",
    results: "200% conversion increase",
    logo: "💼"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Brand Manager",
    company: "Fashion Forward",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "Managing multiple brand voices was a nightmare before ADmyBRAND. Now our AI maintains perfect consistency across all our brands while adapting to each unique style.",
    results: "Perfect brand consistency",
    logo: "👗"
  },
  {
    id: 6,
    name: "Alex Johnson",
    role: "Startup Founder",
    company: "InnovateTech",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "Starting with limited marketing budget, ADmyBRAND helped us achieve enterprise-level results. We've grown from 0 to 100K followers in just 6 months.",
    results: "0 to 100K followers",
    logo: "💡"
  }
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-white/10 text-white border-white/20 backdrop-blur-sm">
            Customer Success
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Loved by
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> marketing teams</span>
            <br />worldwide
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of businesses that have transformed their marketing with ADmyBRAND AI Suite.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative mb-12">
          <div 
            className="flex items-center justify-center"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-4xl"
              >
                <Card className="border border-white/10 shadow-2xl bg-white/5 backdrop-blur-md">
                  <CardContent className="p-8 md:p-12">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      {/* Quote Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center">
                          <Quote className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-center md:text-left">
                        {/* Stars */}
                        <div className="flex justify-center md:justify-start mb-4">
                          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>

                        {/* Quote */}
                        <blockquote className="text-xl md:text-2xl text-white mb-6 leading-relaxed">
                          "{testimonials[currentIndex].content}"
                        </blockquote>

                        {/* Results Badge */}
                        <Badge className="mb-6 bg-blue-500/20 text-blue-400 border-blue-500/30">
                          {testimonials[currentIndex].results}
                        </Badge>

                        {/* Author Info */}
                        <div className="flex items-center justify-center md:justify-start gap-4">
                          <Avatar
                            src={testimonials[currentIndex].avatar}
                            alt={testimonials[currentIndex].name}
                            size="lg"
                          />
                          <div>
                            <div className="font-semibold text-white">
                              {testimonials[currentIndex].name}
                            </div>
                            <div className="text-gray-300">
                              {testimonials[currentIndex].role}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                              <span>{testimonials[currentIndex].logo}</span>
                              {testimonials[currentIndex].company}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-purple-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">50K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">5M+</div>
            <div className="text-gray-600">Content Pieces</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
