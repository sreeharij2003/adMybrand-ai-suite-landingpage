'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: "How does ADmyBRAND AI understand my brand voice?",
    answer: "Our AI analyzes your existing content, brand guidelines, and communication style to create a unique brand voice profile. It learns from your tone, vocabulary, messaging patterns, and values to ensure all generated content maintains consistency with your brand identity."
  },
  {
    question: "Can I integrate ADmyBRAND with my existing marketing tools?",
    answer: "Yes! ADmyBRAND integrates with over 100+ popular marketing tools including HubSpot, Salesforce, Mailchimp, Hootsuite, Google Analytics, Facebook Ads Manager, and many more. We also provide API access for custom integrations."
  },
  {
    question: "What kind of content can the AI generate?",
    answer: "Our AI can create blog posts, social media content, email campaigns, ad copy, product descriptions, press releases, video scripts, landing page copy, and much more. It adapts to different formats, lengths, and platforms while maintaining your brand voice."
  },
  {
    question: "How accurate is the AI-generated content?",
    answer: "Our AI achieves 95%+ accuracy in brand voice matching and content quality. All content goes through multiple AI validation layers, and you always have full editorial control. The AI learns and improves from your feedback and edits."
  },
  {
    question: "Is my data secure with ADmyBRAND?",
    answer: "Absolutely. We use enterprise-grade security with SOC 2 Type II compliance, end-to-end encryption, and GDPR compliance. Your data is never used to train models for other customers, and you maintain full ownership of all content and data."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time with no cancellation fees. Your account will remain active until the end of your current billing period, and you'll retain access to all your generated content and data."
  },
  {
    question: "Do you offer custom AI training for enterprise clients?",
    answer: "Yes! Our Enterprise plan includes custom AI model training specifically for your brand, industry, and use cases. We can train the AI on your proprietary data, create custom workflows, and provide dedicated support for implementation."
  },
  {
    question: "How quickly can I see results with ADmyBRAND?",
    answer: "Most customers see immediate improvements in content creation speed (80% faster) and start seeing engagement improvements within the first week. Full ROI optimization typically occurs within 30-60 days as the AI learns and optimizes your campaigns."
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-white/10 text-white border-white/20 backdrop-blur-sm">
            <HelpCircle className="w-4 h-4 mr-2" />
            FAQ
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently asked
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> questions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about ADmyBRAND AI Suite. Can't find the answer you're looking for?
            <span className="text-blue-400 font-medium"> Contact our support team.</span>
          </p>
        </motion.div>

        {/* FAQ Items - Compact Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="border border-white/10 hover:border-white/20 transition-colors duration-300 bg-white/5 backdrop-blur-md hover:bg-white/10 h-full">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-white pr-3 leading-tight">
                        {faq.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4">
                          <p className="text-gray-300 leading-relaxed text-sm">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
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
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our support team is available 24/7 to help you get the most out of ADmyBRAND AI Suite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contact Support
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
