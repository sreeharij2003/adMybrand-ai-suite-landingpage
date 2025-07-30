'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { BarChart3, Mail, Monitor, PenTool } from 'lucide-react'
import { useState } from 'react'

const FeatureShowcase = () => {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      id: 0,
      icon: Monitor,
      name: "AI Ad Creation",
      title: "Effortless, On-Brand AI Ads — In Minutes",
      description: "Turn any URL into stunning, brand-aligned video and image ads. Just paste your link, and Omneky instantly generates 5-10 ready-to-launch creatives tailored to your brand.",
      categories: ["General", "Announcements", "Discounts", "Lifestyle Visuals", "Product Launches", "Testimonial Ads", "With People"],
      mockupType: "ads",
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 1,
      icon: PenTool,
      name: "AI Content Generator",
      title: "Create Compelling Content — Instantly",
      description: "Generate blog posts, social media content, and marketing copy that converts. Our AI understands your brand voice and creates content that resonates with your audience.",
      categories: ["Blog Posts", "Social Media", "Email Copy", "Product Descriptions", "Headlines", "CTAs"],
      mockupType: "content",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      icon: Mail,
      name: "Email Marketing AI",
      title: "Personalized Email Campaigns — At Scale",
      description: "Create email campaigns that convert. Generate subject lines, content, and optimal send times that increase open rates and drive revenue.",
      categories: ["Welcome Series", "Product Updates", "Newsletters", "Promotional", "Abandoned Cart", "Re-engagement"],
      mockupType: "email",
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 3,
      icon: BarChart3,
      name: "Analytics Dashboard",
      title: "AI-Powered Marketing Insights — Real-Time",
      description: "Get deep insights into your marketing performance with AI-powered analytics that provide actionable recommendations to improve your ROI.",
      categories: ["Performance", "Audience", "Conversion", "Revenue", "Trends", "Predictions"],
      mockupType: "analytics",
      color: "from-yellow-500 to-orange-500"
    }
  ]

  const renderMockup = (feature) => {
    switch (feature.mockupType) {
      case 'ads':
        return (
          <div className="space-y-6">
            {/* Video Ad Preview */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-white/30">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-800">Video Ad Preview</h4>
                <Badge className="bg-red-100 text-red-600">Live Demo</Badge>
              </div>
              <div className="relative w-full h-48 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 rounded-lg overflow-hidden group cursor-pointer">
                {/* Video placeholder with play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                  </motion.div>
                </div>
                {/* Video content overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg mb-1">Transform Your Business</h3>
                  <p className="text-white/90 text-sm">AI-powered marketing that delivers results</p>
                </div>
                {/* Video duration */}
                <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded">0:30</div>
              </div>
            </div>

            {/* Static Ad Examples Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {/* Baby Food Ad */}
              <motion.div
                className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="relative w-full h-28 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg mb-3 overflow-hidden shadow-md">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="text-white font-bold text-sm block leading-tight">Meals Made For Your Baby</span>
                  </div>
                  <div className="absolute top-2 right-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white text-xs font-bold">$5</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-3 leading-relaxed">Custom nutrition for your child</p>
                <Button size="sm" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 text-xs">Learn More</Button>
              </motion.div>

              {/* Investment App Ad */}
              <motion.div
                className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="relative w-full h-28 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg mb-3 overflow-hidden shadow-md">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="text-white font-bold text-sm block leading-tight">Investing Made For You</span>
                  </div>
                  <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded font-medium">📈 +12.5%</div>
                </div>
                <p className="text-xs text-gray-600 mb-3 leading-relaxed">Simple, Easy-to-use app</p>
                <Button size="sm" className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 text-xs">Learn More</Button>
              </motion.div>

              {/* Pet Services Ad */}
              <motion.div
                className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="relative w-full h-28 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg mb-3 overflow-hidden shadow-md">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="text-white font-bold text-sm block leading-tight">Trusted by Local Pet Owners</span>
                  </div>
                  <div className="absolute top-2 right-2 bg-yellow-400 text-gray-800 text-xs px-1.5 py-0.5 rounded font-medium">🐕 4.9★</div>
                </div>
                <p className="text-xs text-gray-600 mb-3 leading-relaxed">Join happy pet families today</p>
                <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 text-xs">Learn More</Button>
              </motion.div>

              {/* Adventure/Clothing Ad */}
              <motion.div
                className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="relative w-full h-28 bg-gradient-to-br from-gray-800 to-yellow-500 rounded-lg mb-3 overflow-hidden shadow-md">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="text-white font-bold text-sm block leading-tight">Adventure Awaits</span>
                  </div>
                  <div className="absolute top-2 left-2 bg-yellow-400 text-gray-800 text-xs px-1.5 py-0.5 rounded font-bold">⚡ LIMITED</div>
                </div>
                <p className="text-xs text-gray-600 mb-3 leading-relaxed">Miss it, miss the journey</p>
                <Button size="sm" className="w-full bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 text-xs">Learn More</Button>
              </motion.div>
            </div>
          </div>
        )
      
      case 'content':
        return (
          <div className="space-y-6">
            {/* Content Generation Interface */}
            <div className="bg-white rounded-xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-800">AI Content Generator</h4>
                <Badge className="bg-green-100 text-green-600">Generating...</Badge>
              </div>

              {/* Input Section */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <label className="text-sm font-medium text-gray-700 block mb-2">Topic:</label>
                <div className="bg-white border rounded-lg p-3 text-sm text-gray-600">
                  "AI marketing trends for small businesses"
                </div>
              </div>

              {/* Generated Content */}
              <div className="space-y-4">
                <motion.div
                  className="border-l-4 border-blue-500 pl-4 bg-blue-50 p-3 rounded-r-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-800">Blog Post Title</h4>
                    <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">SEO Score: 95</span>
                  </div>
                  <p className="text-sm text-gray-700">"10 AI Marketing Trends That Will Transform Small Businesses in 2024"</p>
                </motion.div>

                <motion.div
                  className="border-l-4 border-green-500 pl-4 bg-green-50 p-3 rounded-r-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-800">Social Media Caption</h4>
                    <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">Engagement: High</span>
                  </div>
                  <p className="text-sm text-gray-700">"🚀 Ready to 10x your marketing results? AI is changing the game for small businesses! Here's what you need to know... #AIMarketing #SmallBusiness"</p>
                </motion.div>

                <motion.div
                  className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-3 rounded-r-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-800">Email Subject Line</h4>
                    <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded">Open Rate: 47%</span>
                  </div>
                  <p className="text-sm text-gray-700">"[Name], your competitors are using AI (are you?)"</p>
                </motion.div>
              </div>
            </div>
          </div>
        )
      
      case 'email':
        return (
          <div className="space-y-6">
            {/* Email Campaign Builder */}
            <div className="bg-white rounded-xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-800">Email Campaign Builder</h4>
                <Badge className="bg-blue-100 text-blue-600">AI Optimized</Badge>
              </div>

              {/* Email Preview */}
              <div className="border rounded-lg overflow-hidden mb-4">
                {/* Email Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">ADmyBRAND AI Suite</span>
                    <span className="text-xs bg-white/20 px-2 py-1 rounded">Premium</span>
                  </div>
                </div>

                {/* Email Content */}
                <div className="p-4 bg-gray-50">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Hi Sarah! 👋</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Your marketing campaigns could be performing 250% better with AI optimization...
                  </p>
                  <div className="bg-white p-3 rounded-lg border mb-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Your Current Performance:</span>
                      <span className="text-xs text-gray-500">Last 30 days</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      <div className="text-center">
                        <div className="text-lg font-bold text-red-600">2.3%</div>
                        <div className="text-xs text-gray-600">Open Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-orange-600">0.8%</div>
                        <div className="text-xs text-gray-600">Click Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-600">$1.2K</div>
                        <div className="text-xs text-gray-600">Revenue</div>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    Boost My Results with AI
                  </Button>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="text-lg font-bold text-green-600">47.8%</div>
                  <div className="text-xs text-gray-600">Predicted Open Rate</div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="text-lg font-bold text-blue-600">12.4%</div>
                  <div className="text-xs text-gray-600">Predicted Click Rate</div>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <div className="text-lg font-bold text-purple-600">$8.7K</div>
                  <div className="text-xs text-gray-600">Projected Revenue</div>
                </div>
              </div>
            </div>
          </div>
        )
      
      case 'analytics':
        return (
          <div className="space-y-6">
            {/* Analytics Dashboard */}
            <div className="bg-white rounded-xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-semibold text-gray-800">AI Analytics Dashboard</h4>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-600">Live Data</span>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <motion.div
                  className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="text-2xl font-bold text-green-600">+247%</div>
                  <div className="text-sm text-gray-600">Conversion Rate</div>
                  <div className="text-xs text-green-600 mt-1">↗ +12% this week</div>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="text-2xl font-bold text-blue-600">$127K</div>
                  <div className="text-sm text-gray-600">Revenue Generated</div>
                  <div className="text-xs text-blue-600 mt-1">↗ +34% this month</div>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="text-2xl font-bold text-purple-600">89%</div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                  <div className="text-xs text-purple-600 mt-1">↗ Optimized</div>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-xl border border-orange-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="text-2xl font-bold text-orange-600">15min</div>
                  <div className="text-sm text-gray-600">Setup Time</div>
                  <div className="text-xs text-orange-600 mt-1">⚡ Instant</div>
                </motion.div>
              </div>

              {/* Chart Placeholder */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-700">Performance Trend</span>
                  <span className="text-xs text-gray-500">Last 30 days</span>
                </div>
                <div className="h-32 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-lg flex items-end justify-between p-4">
                  {/* Simulated chart bars */}
                  {[40, 65, 45, 80, 60, 90, 75, 95].map((height, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-t from-blue-500 to-purple-500 rounded-t"
                      style={{ height: `${height}%`, width: '8%' }}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    />
                  ))}
                </div>
              </div>

              {/* AI Recommendations */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">AI</span>
                  </div>
                  <span className="text-sm font-medium text-blue-800">Smart Recommendations</span>
                </div>
                <p className="text-sm text-blue-700">
                  Increase your ad spend on Facebook by 23% and reduce Google Ads budget by 15% to optimize ROI.
                </p>
              </div>
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
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
            Feature Showcase
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See Our AI Tools
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> In Action</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience how our AI-powered features transform your marketing workflow with real examples and live demonstrations.
          </p>
        </motion.div>

        {/* Glass Morphism Wrapper */}
        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          {/* Glass effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-3xl pointer-events-none"></div>

          {/* Content */}
          <div className="relative z-10">
            {/* Feature Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {features.map((feature, index) => (
                <motion.button
                  key={feature.id}
                  onClick={() => setActiveFeature(index)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeFeature === index
                      ? 'bg-white text-black shadow-lg'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <feature.icon className="w-4 h-4" />
                  <span className="font-medium">{feature.name}</span>
                </motion.button>
              ))}
            </div>

            {/* Active Feature Display */}
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Feature Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {features[activeFeature].title}
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {features[activeFeature].description}
                  </p>
                </div>

                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                  Try Now for Free
                </Button>
              </div>

              {/* Feature Mockup */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative"
                >
                  {/* Glass Morphism Container */}
                  <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                    {/* Glass effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-3xl"></div>

                    {/* Content */}
                    <div className="relative z-10">
                      {renderMockup(features[activeFeature])}
                    </div>

                    {/* Additional glass shine effect */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-3xl opacity-50 pointer-events-none"></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Additional glass shine effect for wrapper */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl opacity-30 pointer-events-none"></div>
        </div>
      </div>
    </section>
  )
}

export default FeatureShowcase
