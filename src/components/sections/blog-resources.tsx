'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { BookOpen, Clock, ArrowRight, Download, Video, FileText, Headphones } from 'lucide-react'

const BlogResources = () => {
  const blogPosts = [
    {
      title: "10 AI Marketing Strategies That Actually Work in 2024",
      excerpt: "Discover the latest AI marketing techniques that are driving real results for businesses worldwide.",
      category: "Strategy",
      readTime: "5 min read",
      image: "📊",
      date: "Dec 15, 2024"
    },
    {
      title: "How to Maintain Brand Voice with AI Content",
      excerpt: "Learn the secrets to keeping your brand's unique personality while scaling content with AI.",
      category: "Brand Voice",
      readTime: "7 min read",
      image: "🎯",
      date: "Dec 12, 2024"
    },
    {
      title: "ROI Calculator: Measuring AI Marketing Success",
      excerpt: "A comprehensive guide to tracking and measuring the return on investment of your AI marketing tools.",
      category: "Analytics",
      readTime: "6 min read",
      image: "📈",
      date: "Dec 10, 2024"
    }
  ]

  const resources = [
    {
      title: "AI Marketing Playbook",
      description: "Complete guide to implementing AI in your marketing strategy",
      type: "PDF Guide",
      icon: FileText,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Brand Voice Templates",
      description: "Ready-to-use templates for defining your brand voice",
      type: "Templates",
      icon: Download,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Webinar Series",
      description: "Weekly sessions on advanced AI marketing techniques",
      type: "Video",
      icon: Video,
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Marketing Podcast",
      description: "Expert interviews and industry insights",
      type: "Audio",
      icon: Headphones,
      color: "from-orange-500 to-red-500"
    }
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
            <BookOpen className="w-4 h-4 mr-2" />
            Resources & Insights
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Learn from the
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> experts</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay ahead of the curve with our latest insights, guides, and resources on AI marketing.
          </p>
        </motion.div>

        {/* Blog Posts */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8"
          >
            Latest Articles
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <Card className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300">
                  <CardContent className="p-0">
                    {/* Image/Icon */}
                    <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-6xl">
                      {post.image}
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs">
                          {post.category}
                        </Badge>
                        <div className="flex items-center gap-1 text-gray-400 text-sm">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h4>
                      
                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 text-xs">{post.date}</span>
                        <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10 backdrop-blur-md px-8 py-3 rounded-xl"
            >
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>

        {/* Resources */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8"
          >
            Free Resources
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <Card className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-r ${resource.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <resource.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <Badge className="mb-3 bg-white/10 text-white border-white/20 text-xs">
                      {resource.type}
                    </Badge>
                    
                    <h4 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {resource.title}
                    </h4>
                    
                    <p className="text-gray-400 text-sm mb-4">
                      {resource.description}
                    </p>
                    
                    <Button 
                      size="sm" 
                      className="bg-white/10 hover:bg-white/20 text-white border-white/20 rounded-lg"
                    >
                      Access Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-white/20 rounded-2xl">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                Stay Updated with AI Marketing Trends
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Get weekly insights, tips, and exclusive content delivered to your inbox. 
                Join 10,000+ marketers who trust our newsletter.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-md"
                />
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold">
                  Subscribe
                </Button>
              </div>
              
              <p className="text-gray-400 text-sm mt-4">
                No spam, unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogResources
