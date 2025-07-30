'use client'

import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import {
    BarChart3,
    Mail,
    MessageSquare,
    Monitor,
    PenTool,
    Zap
} from 'lucide-react'

const features = [
  {
    icon: PenTool,
    title: "Blog writer",
    description: "A Blog Writer AI tool helps generate high-quality and SEO-optimized blog content quickly and efficiently.",
    badge: "Most Popular",
    color: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-900/20 via-blue-800/10 to-cyan-900/20"
  },
  {
    icon: BarChart3,
    title: "Real-time analytics",
    description: "Get real-time marketing analytics to make smarter, faster decisions on the fly.",
    badge: "Analytics",
    color: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-900/20 via-purple-800/10 to-pink-900/20"
  },
  {
    icon: Zap,
    title: "AI-driven automation",
    description: "Streamline your marketing processes with AI that cuts down on manual work.",
    badge: "Automation",
    color: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-900/20 via-indigo-800/10 to-purple-900/20"
  },
  {
    icon: MessageSquare,
    title: "Brand Voice Analyzer",
    description: "Maintain consistent messaging across all platforms. Our AI learns your brand's unique voice and ensures every piece of content matches your style.",
    badge: "New",
    color: "from-teal-500 to-blue-500",
    bgGradient: "from-teal-900/20 via-teal-800/10 to-blue-900/20"
  },
  {
    icon: Mail,
    title: "Email Marketing AI",
    description: "Personalize email campaigns at scale. Generate subject lines, content, and send times that increase open rates and conversions.",
    badge: "Essential",
    color: "from-green-500 to-teal-500",
    bgGradient: "from-green-900/20 via-green-800/10 to-teal-900/20"
  },
  {
    icon: Monitor,
    title: "AI Ad Creation",
    description: "Generate high-converting ads for all platforms instantly. Create compelling visuals, copy, and targeting strategies that drive results and maximize ROI.",
    badge: "Creative",
    color: "from-pink-500 to-rose-500",
    bgGradient: "from-pink-900/20 via-pink-800/10 to-rose-900/20"
  }
]

const Features = () => {
  return (
    <section className="pt-8 pb-24 bg-black">
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
            Powerful Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything you need to
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> dominate marketing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our comprehensive AI suite provides all the tools you need to create, optimize, and scale your marketing efforts with unprecedented efficiency.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className={`relative h-full rounded-2xl border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden bg-gradient-to-br ${feature.bgGradient} backdrop-blur-xl hover:border-white/20`}>
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10 pointer-events-none" />
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative z-10 p-6 h-full flex flex-col">
                  {/* Header with Icon and Badge */}
                  <div className="flex items-start justify-between mb-6 gap-3">
                    <motion.div
                      className={`p-3 rounded-xl bg-gradient-to-br ${feature.color} shadow-lg flex-shrink-0`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <Badge className="text-xs bg-white/20 text-white border-white/30 backdrop-blur-sm px-3 py-1.5 rounded-full font-medium whitespace-nowrap">
                      {feature.badge}
                    </Badge>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                    {feature.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="text-blue-400 text-sm font-medium flex items-center">
                      Learn more
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.color} opacity-20 blur-xl`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Ready to transform your marketing with AI?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300"
            >
              View All Features
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
