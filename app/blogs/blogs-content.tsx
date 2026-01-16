"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Search, ArrowRight, Calendar, User } from "lucide-react"

const allBlogs = [
  {
    id: 1,
    title: "Complete Guide to Technical SEO in 2026",
    excerpt:
      "Master the fundamentals of technical SEO and boost your website's search visibility with proven strategies.",
    category: "SEO",
    author: "Rajesh Kumar",
    date: "Jan 15, 2026",
    image: "/technical-seo-guide.jpg",
    slug: "technical-seo-2026",
  },
  {
    id: 2,
    title: "How AI Chatbots Transform Customer Support",
    excerpt:
      "Discover how intelligent chatbots can reduce support costs while improving customer satisfaction and response times.",
    category: "AI",
    author: "Priya Singh",
    date: "Jan 12, 2026",
    image: "/ai-chatbots-customer-support.jpg",
    slug: "ai-chatbots-customer-support",
  },
  {
    id: 3,
    title: "Building Scalable Web Applications",
    excerpt:
      "Best practices for architecting web applications that can scale with your business growth and user demands.",
    category: "Web Dev",
    author: "Amit Patel",
    date: "Jan 10, 2026",
    image: "/scalable-web-applications-architecture.jpg",
    slug: "scalable-web-applications",
  },
  {
    id: 4,
    title: "SEO Best Practices for E-commerce Sites",
    excerpt:
      "Comprehensive guide to optimizing your e-commerce website for search engines and driving qualified traffic.",
    category: "SEO",
    author: "Rajesh Kumar",
    date: "Jan 8, 2026",
    image: "/ecommerce-seo-optimization.jpg",
    slug: "ecommerce-seo-best-practices",
  },
  {
    id: 5,
    title: "Digital Marketing Trends to Watch in 2026",
    excerpt: "Stay ahead of the curve with insights into the most important digital marketing trends this year.",
    category: "Digital Marketing",
    author: "Neha Sharma",
    date: "Jan 5, 2026",
    image: "/digital-marketing-trends-2026.jpg",
    slug: "digital-marketing-trends-2026",
  },
  {
    id: 6,
    title: "Local SEO: Dominating Your Local Market",
    excerpt:
      "Strategies to improve your local SEO and ensure your business appears prominently in local search results.",
    category: "SEO",
    author: "Rajesh Kumar",
    date: "Jan 2, 2026",
    image: "/local-seo-domination.jpg",
    slug: "local-seo-guide",
  },
  {
    id: 7,
    title: "Why Performance Matters: Core Web Vitals Explained",
    excerpt: "Understanding Core Web Vitals and how they impact your search rankings and user experience.",
    category: "Technical SEO",
    author: "Amit Patel",
    date: "Dec 28, 2025",
    image: "/core-web-vitals-explained.jpg",
    slug: "core-web-vitals-explained",
  },
  {
    id: 8,
    title: "AI Content Generation: The Future of Content Marketing",
    excerpt: "Explore how AI is revolutionizing content creation and how to leverage it ethically and effectively.",
    category: "AI",
    author: "Priya Singh",
    date: "Dec 25, 2025",
    image: "/ai-content-generation.jpg",
    slug: "ai-content-generation-future",
  },
  {
    id: 9,
    title: "Mobile-First Design: Creating Responsive Web Experiences",
    excerpt:
      "Best practices for designing responsive websites that work seamlessly across all devices and screen sizes.",
    category: "Web Dev",
    author: "Amit Patel",
    date: "Dec 22, 2025",
    image: "/mobile-first-responsive-design.jpg",
    slug: "mobile-first-responsive-design",
  },
]

const categories = ["All", "SEO", "Web Dev", "AI", "Digital Marketing", "Technical SEO"]

export function BlogsContent() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredBlogs = allBlogs.filter((blog) => {
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
        ease: "easeOut",
      },
    },
  }

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen bg-background flex items-center justify-center pt-20 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance leading-tight"
          >
            Digital Insights & <span className="text-primary">Industry Trends</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Stay updated with the latest strategies, insights, and best practices in digital marketing, web development,
            and AI automation.
          </motion.p>

          {/* Search Bar */}
          <motion.div variants={itemVariants} className="max-w-lg mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground/40" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-6 py-3 bg-card border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Filter & Blogs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Category Filter */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Blog Grid */}
          {filteredBlogs.length > 0 ? (
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredBlogs.map((blog) => (
                <motion.article
                  key={blog.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
                >
                  {/* Image */}
                  <div className="h-48 overflow-hidden bg-muted">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={blog.image || "/placeholder.svg"}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category Badge */}
                    <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
                      {blog.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2">{blog.title}</h3>

                    {/* Excerpt */}
                    <p className="text-foreground/70 text-sm mb-4 line-clamp-2">{blog.excerpt}</p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-foreground/60 mb-6 pb-6 border-b border-border">
                      <div className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5" />
                        <span>{blog.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{blog.date}</span>
                      </div>
                    </div>

                    {/* Read More Link */}
                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <motion.div variants={itemVariants} className="text-center py-20">
              <p className="text-lg text-foreground/70 mb-4">No articles found matching your search.</p>
              <Button
                onClick={() => {
                  setSelectedCategory("All")
                  setSearchTerm("")
                }}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Clear Filters
              </Button>
            </motion.div>
          )}

          {/* Load More Button */}
          {filteredBlogs.length > 0 && (
            <motion.div variants={itemVariants} className="mt-16 text-center">
              <Button
                variant="outline"
                size="lg"
                className="border-2 text-base font-semibold hover:bg-primary/5 bg-transparent"
              >
                Load More Articles
              </Button>
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-6">
            Subscribe to Our Newsletter
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Get the latest insights, trends, and best practices delivered directly to your inbox.
          </motion.p>
          <motion.div variants={itemVariants} className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-8">Subscribe</Button>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
