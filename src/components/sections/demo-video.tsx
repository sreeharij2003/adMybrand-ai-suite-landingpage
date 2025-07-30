'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Clock, Play, TrendingUp, Users } from 'lucide-react'
import { useRef, useState } from 'react'

const DemoVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const stats = [
    { icon: Clock, value: '2 min', label: 'Quick Setup' },
    { icon: Users, value: '50K+', label: 'Happy Users' },
    { icon: TrendingUp, value: '300%', label: 'ROI Increase' }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-white/10 text-white border-white/20 backdrop-blur-sm">
            <Play className="w-4 h-4 mr-2" />
            Product Demo
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See ADmyBRAND in
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> action</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch how our AI-powered marketing suite transforms your workflow in just 2 minutes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-white border-2 border-gray-200 shadow-2xl">
              {/* Video Header */}
              <div className="absolute top-0 left-0 right-0 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between z-10">
                <h3 className="text-gray-800 font-semibold">Video Ad Preview</h3>
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Live Demo
                </div>
              </div>

              {/* Video Content */}
              <div className="absolute inset-0 mt-14">
                {/* Actual Video Element */}
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  controls={isPlaying}
                  poster="/ai-marketing-background-clean.jpg"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                  preload="metadata"
                >
                  <source src="/demo-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Play Button Overlay */}
                {!isPlaying && (
                  <motion.button
                    onClick={() => {
                      setIsPlaying(true)
                      videoRef.current?.play()
                    }}
                    className="absolute inset-0 flex items-center justify-center group bg-black/20"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-20 h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white transition-all duration-300 shadow-lg">
                      <Play className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" />
                    </div>
                  </motion.button>
                )}

                {/* Video Info Overlay */}
                {!isPlaying && (
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/70 backdrop-blur-md rounded-lg p-4">
                      <h3 className="text-white font-semibold mb-1">ADmyBRAND AI Suite Demo</h3>
                      <p className="text-gray-300 text-sm">See how our AI transforms your marketing workflow</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                LIVE
              </motion.div>
            </div>
          </motion.div>

          {/* Stats & Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Stats */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">Why Choose ADmyBRAND?</h3>
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-white mb-3">Ready to get started?</h4>
              <p className="text-gray-300 mb-4 text-sm">
                Join thousands of businesses already using ADmyBRAND to scale their marketing.
              </p>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-300">
                Start Free Trial
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Video Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "AI Content Creation",
              description: "Watch how our AI generates high-quality content in seconds",
              time: "0:30"
            },
            {
              title: "Brand Voice Analysis",
              description: "See how we maintain your unique brand voice across all content",
              time: "1:15"
            },
            {
              title: "Campaign Optimization",
              description: "Learn how our AI optimizes your campaigns for maximum ROI",
              time: "1:45"
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              onClick={() => {
                setIsPlaying(true)
                videoRef.current?.play()
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-white">{feature.title}</h4>
                <span className="text-blue-400 text-sm font-medium">{feature.time}</span>
              </div>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default DemoVideo
