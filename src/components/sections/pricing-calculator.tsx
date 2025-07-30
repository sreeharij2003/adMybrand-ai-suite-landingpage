'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Calculator, Check, FileText, Mail, Users } from 'lucide-react'
import { useState } from 'react'

const PricingCalculator = () => {
  const [teamSize, setTeamSize] = useState(5)
  const [contentVolume, setContentVolume] = useState(1000)
  const [emailContacts, setEmailContacts] = useState(1000)
  const [isYearly, setIsYearly] = useState(false)

  // Calculate pricing based on usage
  const calculatePrice = () => {
    let basePrice = 29
    
    // Team size multiplier
    if (teamSize > 5) basePrice += (teamSize - 5) * 15
    
    // Content volume
    if (contentVolume > 1000) basePrice += Math.ceil((contentVolume - 1000) / 1000) * 10
    
    // Email contacts
    if (emailContacts > 500) basePrice += Math.ceil((emailContacts - 500) / 500) * 5
    
    return isYearly ? Math.round(basePrice * 10) : basePrice
  }

  const features = [
    'AI Content Generator',
    'Brand Voice Analysis',
    'Social Media Scheduler',
    'Email Marketing',
    'Analytics Dashboard',
    '24/7 Support'
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
            <Calculator className="w-4 h-4 mr-2" />
            Pricing Calculator
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Calculate your
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> perfect plan</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get a personalized quote based on your specific needs and usage requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calculator */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl h-full flex flex-col">
              <CardHeader>
                <h3 className="text-2xl font-bold text-white mb-2">Customize Your Plan</h3>
                <p className="text-gray-300">Adjust the sliders to match your requirements</p>
              </CardHeader>
              <CardContent className="space-y-8 flex-1">
                {/* Team Size */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-blue-400" />
                      <span className="text-white font-medium">Team Size</span>
                    </div>
                    <span className="text-blue-400 font-bold">{teamSize} users</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={teamSize}
                    onChange={(e) => setTeamSize(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>

                {/* Content Volume */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-purple-400" />
                      <span className="text-white font-medium">Content Volume</span>
                    </div>
                    <span className="text-purple-400 font-bold">{contentVolume.toLocaleString()} words/month</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="50000"
                    step="500"
                    value={contentVolume}
                    onChange={(e) => setContentVolume(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>

                {/* Email Contacts */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Mail className="w-5 h-5 text-green-400" />
                      <span className="text-white font-medium">Email Contacts</span>
                    </div>
                    <span className="text-green-400 font-bold">{emailContacts.toLocaleString()} contacts</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="100000"
                    step="100"
                    value={emailContacts}
                    onChange={(e) => setEmailContacts(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>

                {/* Billing Toggle */}
                <div className="flex items-center justify-center space-x-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-2">
                  <span className={`text-sm px-3 py-2 rounded-lg transition-all duration-300 ${
                    !isYearly ? 'text-white font-medium bg-white/10' : 'text-gray-400'
                  }`}>
                    Monthly
                  </span>
                  <motion.button
                    onClick={() => setIsYearly(!isYearly)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-300 ${
                      isYearly ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-white/20'
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span
                      className="inline-block h-4 w-4 transform rounded-full bg-white shadow-lg"
                      animate={{ x: isYearly ? 24 : 4 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  </motion.button>
                  <span className={`text-sm px-3 py-2 rounded-lg transition-all duration-300 ${
                    isYearly ? 'text-white font-medium bg-white/10' : 'text-gray-400'
                  }`}>
                    Yearly
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-white/20 rounded-2xl h-full flex flex-col">
              <CardHeader>
                <h3 className="text-2xl font-bold text-white mb-2">Your Custom Plan</h3>
                <p className="text-gray-300">Perfect for your specific requirements</p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="text-center mb-8">
                  <div className="text-6xl font-bold text-white mb-2">
                    ${calculatePrice()}
                    <span className="text-2xl text-gray-400">/{isYearly ? 'year' : 'month'}</span>
                  </div>
                  {isYearly && (
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      Save 20% annually
                    </Badge>
                  )}
                </div>

                <div className="space-y-3 mb-8 flex-1">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                    Start Your Custom Plan
                  </Button>

                  <p className="text-center text-gray-400 text-sm mt-4">
                    14-day free trial • No credit card required
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PricingCalculator
