'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Clock, Maximize, Play, TrendingUp, Users, Volume2 } from 'lucide-react'
import { useState } from 'react'

const DemoVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false)

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
              <div className="absolute inset-0 mt-14 bg-gradient-to-br from-blue-500 to-cyan-400">
                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm font-medium">
                  0:30
                </div>

                {/* Play Button */}
                {!isPlaying && (
                  <motion.button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-20 h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white transition-all duration-300 shadow-lg">
                      <Play className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" />
                    </div>
                  </motion.button>
                )}



                {/* Video Controls (when playing) */}
                {isPlaying && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-md rounded-lg p-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => setIsPlaying(false)}
                          className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                        >
                          <Play className="w-4 h-4 text-white" fill="currentColor" />
                        </button>
                        <span className="text-white text-sm">0:45 / 2:15</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Volume2 className="w-4 h-4 text-white" />
                        <Maximize className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className="mt-2 bg-white/20 rounded-full h-1">
                      <motion.div
                        className="bg-blue-400 h-1 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: "35%" }}
                        transition={{ duration: 2 }}
                      />
                    </div>
                  </motion.div>
                )}

                {/* Video Thumbnail Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="text-6xl mb-4"
                    >
                      🎬
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-2">ADmyBRAND Demo</h3>
                    <p className="text-gray-300">See the magic happen</p>
                  </div>
                </div>
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
              onClick={() => setIsPlaying(true)}
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
