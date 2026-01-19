'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

export function BlogSection() {
  const blogs = [
    {
      category: 'SEO',
      title: 'Complete Guide to Technical SEO in 2026',
      excerpt: 'Master the fundamentals of technical SEO and boost your website\'s search visibility.',
      image: '/technical-seo-guide.jpg',
    },
    {
      category: 'AI',
      title: 'How AI Chatbots Transform Customer Support',
      excerpt: 'Discover how intelligent chatbots can reduce support costs while improving customer satisfaction.',
      image: '/ai-chatbots-customer-support.jpg',
    },
    {
      category: 'Web Dev',
      title: 'Building Scalable Web Applications',
      excerpt: 'Best practices for architecting web applications that can scale with your business growth.',
      image: '/scalable-web-applications-architecture.jpg',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Latest Insights</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Stay updated with the latest trends and best practices in digital marketing and development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="h-48 overflow-hidden bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={blog.image || '/placeholder.svg'}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
                  {blog.category}
                </span>
                <h3 className="text-lg font-bold text-foreground mb-2">{blog.title}</h3>
                <p className="text-foreground/70 mb-4">{blog.excerpt}</p>
                <Link
                  href="/blogs"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 text-base font-semibold hover:bg-primary/5 bg-transparent"
          >
            <Link href="/blogs">View All Articles</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
