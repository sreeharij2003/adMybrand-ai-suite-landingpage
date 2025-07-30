'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Check, Crown, Star, Zap } from 'lucide-react'
import { useState } from 'react'

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small businesses and entrepreneurs",
    monthlyPrice: 29,
    yearlyPrice: 290,
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
    features: [
      "AI Content Generator (1,000 words/month)",
      "Basic Brand Voice Analysis",
      "Social Media Scheduler (3 platforms)",
      "Email Marketing (500 contacts)",
      "Basic Analytics Dashboard",
      "24/7 Email Support"
    ],
    limitations: [
      "Limited to 3 social platforms",
      "Basic templates only",
      "Standard support"
    ]
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses and marketing teams",
    monthlyPrice: 79,
    yearlyPrice: 790,
    icon: Star,
    color: "from-purple-500 to-pink-500",
    popular: true,
    features: [
      "AI Content Generator (10,000 words/month)",
      "Advanced Brand Voice Analysis",
      "Social Media Manager (All platforms)",
      "Email Marketing (5,000 contacts)",
      "Ad Campaign Optimizer",
      "SEO Content Optimization",
      "Advanced Analytics & Insights",
      "Priority Support",
      "Custom Templates",
      "A/B Testing Tools"
    ],
    limitations: []
  },
  {
    name: "Enterprise",
    description: "For large organizations with advanced needs",
    monthlyPrice: 199,
    yearlyPrice: 1990,
    icon: Crown,
    color: "from-orange-500 to-red-500",
    features: [
      "Unlimited AI Content Generation",
      "Custom Brand Voice Training",
      "Multi-brand Management",
      "Unlimited Email Marketing",
      "Advanced Ad Campaign AI",
      "White-label Solutions",
      "Custom Integrations",
      "Dedicated Account Manager",
      "Custom Analytics Reports",
      "API Access",
      "Team Collaboration Tools",
      "Advanced Security Features"
    ],
    limitations: []
  }
]

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        {/* Glass Morphism Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl"
        >
          {/* Gradient overlay for extra glass effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="relative z-10 text-center mb-16">
            <Badge className="mb-4 bg-white/10 text-white border-white/20 backdrop-blur-sm">
              Simple Pricing
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose the perfect plan for
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> your business</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Start free and scale as you grow. All plans include our core AI features with no hidden fees.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-2 max-w-md mx-auto">
              <span className={`text-sm px-4 py-2 rounded-xl transition-all duration-300 ${
                !isYearly
                  ? 'text-white font-medium bg-white/10 shadow-lg'
                  : 'text-gray-400 hover:text-gray-300'
              }`}>
                Monthly
              </span>
              <motion.button
                onClick={() => setIsYearly(!isYearly)}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-all duration-300 ${
                  isYearly
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/25'
                    : 'bg-white/20 hover:bg-white/30'
                }`}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.span
                  className="inline-block h-6 w-6 transform rounded-full bg-white shadow-lg"
                  animate={{ x: isYearly ? 28 : 4 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </motion.button>
              <span className={`text-sm px-4 py-2 rounded-xl transition-all duration-300 ${
                isYearly
                  ? 'text-white font-medium bg-white/10 shadow-lg'
                  : 'text-gray-400 hover:text-gray-300'
              }`}>
                Yearly
              </span>
              {isYearly && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="ml-2"
                >
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-3 py-1">
                      Save 20%
                    </Badge>
                  </motion.div>
                )}
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`relative ${plan.popular ? 'scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="px-4 py-1 bg-blue-500/20 text-blue-400 border-blue-500/30">
                    Most Popular
                  </Badge>
                </div>
              )}

              <Card className={`h-full ${plan.popular ? 'border-white/20 shadow-xl bg-white/10' : 'border-white/10 shadow-lg bg-white/5'} backdrop-blur-md hover:shadow-xl hover:bg-white/15 transition-all duration-300`}>
                <CardHeader className="text-center pb-8">
                  <div className="inline-flex p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 mx-auto mb-4">
                    <plan.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  <p className="text-gray-300 mt-2">{plan.description}</p>

                  <div className="mt-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">
                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-400 ml-1">
                        /{isYearly ? 'year' : 'month'}
                      </span>
                    </div>
                    {isYearly && (
                      <p className="text-sm text-green-400 mt-1">
                        Save ${(plan.monthlyPrice * 12) - plan.yearlyPrice} per year
                      </p>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <Button
                    className={`w-full mb-6 ${plan.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-white/10 hover:bg-white/20 text-white border-white/20'}`}
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                  </Button>

                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

          {/* FAQ Section */}
          <div className="relative z-10 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Questions about pricing?
            </h3>
            <p className="text-gray-300 mb-6">
              Our team is here to help you find the perfect plan for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                View FAQ
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Contact Sales
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
