'use client'
import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent } from '@/components/ui/dailog'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, X, ArrowRight } from 'lucide-react'
import Link from 'next/link'

type Project = {
  _id: string
  title: string
  description: string
  image: string
  category: 'web' | 'automation' | 'seo'
  technologies: string[]
  liveLink?: string
  codeLink?: string
  challenge: string
  solution: string
}

const dummyProjects: Project[] = [
  {
    _id: '1',
    title: 'Yoga Retreat & Wellness Website And digital Solution',
    description:
      'Complete website solution for yoga retreats and wellness centers in Rishikesh. We design, develop, and optimize yoga websites with booking systems, blogs, and full SEO to help yoga businesses get more inquiries and retreat bookings.',
    image:
      '/images/yoga-wellness-website-template-dark-green.webp',
    category: 'web',
    technologies: [
      'Custom Website Development',
      'On-Page SEO',
      'Responsive & Mobile-Friendly Design',
      'Technical SEO (Speed, Indexing, Schema)',
      'Off-Page SEO & Backlinks',
      'Online Booking & Inquiry System',
      'Blog & Content Management',
    ],
    challenge:
      'Yoga retreat businesses in Rishikesh need websites that build trust, rank on Google, and convert visitors into bookings.',
    solution:
      'We delivered a complete A–Z website solution with calm design, fast performance, SEO-optimized content, Google-friendly structure, booking forms, and local SEO to attract yoga students searching in Rishikesh.',
  },
{
  _id: '2',
  title: 'School & College Website Development in Rishikesh',
  description:
    'Professional school and college website development services in Rishikesh. Ideal for schools, colleges, and educational institutions to showcase courses, admissions, faculty, campus life, and improve online visibility with SEO optimization.',
  image:
    'images/school-college-website-rishikesh.webp',
  category: 'web',
  technologies: [
    'Custom School & College Website',
    'Mobile-First Responsive Design',
    'Admissions & Inquiry Forms',
    'Courses & Departments Pages',
    'Faculty & Staff Management',
    'Gallery & Campus Showcase',
    'On-Page & Technical SEO',
    'Local SEO Optimization for Rishikesh',
  ],
  challenge:
    'Schools and colleges in Rishikesh face challenges in online visibility, student admissions, and building trust with parents due to outdated or non-optimized websites.',
  solution:
    'We developed a modern, SEO-optimized school and college website focused on admissions, academics, and campus life, with fast loading speed and local SEO targeting Rishikesh school and college searches.',
},

  {
    _id: '3',
    title: 'Hotel & Resort Booking Website And digital Solution',
    description:
      'Complete hotel and resort website solution for businesses in Rishikesh. Includes room pages, pricing, photo galleries, booking inquiries, and SEO to increase direct hotel bookings.',
    image:
      'images/devbhoomi-infotech-hotel-resort-website-rishikesh.webp',
    category: 'web',
    technologies: [
      'Custom Website Development',
      'Premium UI & Branding',
      'Room & Pricing Pages',
      'Booking & Inquiry Forms',
      'On-Page SEO',
      'Technical SEO & Speed Optimization',
      'Local SEO for Hotels',
    ],
    challenge:
      'Hotels in Rishikesh depend too much on third-party booking platforms and need more direct bookings.',
    solution:
      'We created a premium hotel website with fast loading pages, SEO-optimized room content, local search optimization, and clear booking calls-to-action to increase direct inquiries.',
  },
  {
    _id: '4',
    title: 'Custom SEO Blog & Content Dashboard System',
    description:
      'Fully custom SEO blog and content dashboard that connects with any website. Ideal for businesses in Rishikesh that want full control over blogs, SEO content, and website performance.',
    image:
      'images/custom-blog-editor-dashboard.webp',
    category: 'seo',
    technologies: [
      'Custom CMS & Dashboard',
      'Dynamic Content Management',
      'SEO Content Controls',
      'Schema & Structured Data',
      'Website Performance Optimization',
      'Scalable Architecture',
    ],
    challenge:
      'Businesses need SEO-friendly content management without slow and heavy CMS platforms.',
    solution:
      'We built a lightweight, fast, and scalable custom dashboard with SEO fields, schema automation, easy publishing, and seamless integration with any website.',
  },
  {
    _id: '5',
    title: 'Business Automation & AI Services And digital Solution',
    description:
      'Complete business automation and AI services in Rishikesh including lead automation, WhatsApp automation, email marketing, CRM automation, social media automation, and AI workflows.',
    image:
      'images/best-n8n-ai-workflow-services-in-rishikesh.webp',
    category: 'automation',
    technologies: [
      'AI-Based Automation',
      'Workflow Automation',
      'Business Process Automation',
      'Social Media Automation',
      'CRM & Lead Automation',
      'Email & WhatsApp Automation',
      'API & Tool Integrations',
    ],
    challenge:
      'Manual work like lead follow-ups, social media posting, and customer communication wastes time and money.',
    solution:
      'We delivered smart automation workflows using AI and automation tools to handle leads, messages, CRM updates, and marketing tasks automatically for businesses in Rishikesh.',
  },
]

const categoryColors: Record<
  string,
  { bg: string; badge: string; text: string }
> = {
  ai: {
    bg: 'from-blue-50 to-blue-100/50',
    badge: 'bg-blue-100 text-blue-700 border-blue-200',
    text: 'text-blue-900',
  },
  web: {
    bg: 'from-orange-50 to-orange-100/50',
    badge: 'bg-orange-100 text-orange-700 border-orange-200',
    text: 'text-orange-900',
  },
  automation: {
    bg: 'from-blue-50 to-purple-100/50',
    badge: 'bg-blue-100 text-blue-700 border-blue-200',
    text: 'text-blue-900',
  },
  seo: {
    bg: 'from-orange-50 to-amber-100/50',
    badge: 'bg-orange-100 text-orange-700 border-orange-200',
    text: 'text-orange-900',
  },
}

function MasonryCard({
  project,
  index,
  onClick,
}: {
  project: Project
  index: number
  onClick: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const colors = categoryColors[project.category]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/80 cursor-pointer flex flex-col"
    >
      <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
        <Image
          src={project.image || '/placeholder.svg'}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-end justify-end p-6`}
        >
          <Button
            size="sm"
            className="gap-2 bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
            onClick={(e) => {
              e.stopPropagation()
              onClick()
            }}
          >
            View Details
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="p-5 md:p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <Badge className={`capitalize text-xs font-semibold ${colors.badge}`}>
            {project.category}
          </Badge>
          <div className="flex gap-1 flex-wrap justify-end">
            {project.technologies.slice(0, 2).map((tech) => (
              <span
                key={tech}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <h3
          className={`text-lg md:text-xl font-bold mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors ${colors.text}`}
        >
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2 flex-1">
          {project.description}
        </p>
      </div>
    </motion.div>
  )
}

function ProjectModal({
  project,
  isOpen,
  onClose,
}: {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}) {
  if (!project) return null
  const colors = categoryColors[project.category]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-11/12 max-w-4xl p-0 overflow-y-auto max-h-[90vh] bg-white rounded-3xl border-none shadow-2xl">
        {/* Image Section */}
        <div className="relative h-48 sm:h-64 md:h-96 overflow-hidden">
          <Image
            src={project.image || '/placeholder.svg'}
            alt={project.title}
            fill
            className="object-cover"
          />
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 bg-white hover:bg-gray-100 text-gray-900 rounded-full p-2 transition-all shadow-lg"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Optional subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Main Content - Title अब यहाँ */}
        <div className="p-4 sm:p-6 md:p-10 space-y-6 md:space-y-8">
          {/* Title + Category */}
          <div className="space-y-3">
            <Badge
              className={`capitalize text-sm font-semibold ${colors.badge} inline-block`}
            >
              {project.category}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 tracking-tight">
              {project.title}
            </h2>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-sm px-4 py-2"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Challenge & Solution */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                The Challenge
              </h4>
              <p className="text-gray-700 leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                The Solution
              </h4>
              <p className="text-gray-700 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
            {project.liveLink && (
              <Link
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button
                  size="lg"
                  className="w-full gap-2 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <ExternalLink className="h-5 w-5" />
                  View Live
                </Button>
              </Link>
            )}
            {/* अगर codeLink भी दिखाना हो तो यहाँ डाल सकते हो */}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function ProjectsSection() {
  const [filter, setFilter] = useState<string>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredProjects =
    filter === 'all'
      ? dummyProjects
      : dummyProjects.filter((p) => p.category === filter)

  const openModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <section id="projects" className="py-16 md:py-24 bg-blue-50">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/60 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/60 backdrop-blur-sm mb-6 mx-auto">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-600 dark:bg-blue-400" />
            </span>
            <p className="text-sm font-semibold tracking-wide text-blue-800 dark:text-blue-300">
              Our Projects
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-900">
            Industry-Specific Projects We Deliver End-to-End
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We build complete digital solutions tailored for real business industries — from idea to automation.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center flex-wrap gap-3 md:gap-4 mb-12 md:mb-16"
        >
          {['all', 'web', 'automation', 'seo'].map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter(cat)}
              className={`capitalize px-6 py-2 font-medium rounded-full transition-all ${
                filter === cat
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'border-2 border-gray-300 text-gray-700 hover:border-blue-600'
              }`}
            >
              {cat === 'all' ? 'All' : cat.toUpperCase()}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          {filteredProjects.length === 0 ? (
            <p className="text-center text-gray-500 text-xl font-medium py-20">
              No projects found in this category.
            </p>
          ) : (
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-6 auto-rows-max"
            >
              {filteredProjects.slice(0, 5).map((project, index) => {
                let desktopSpan = ''
                if (index === 0) {
                  desktopSpan = 'lg:col-span-2'
                } else if (index === 2) {
                  desktopSpan = 'lg:row-span-2'
                }
                return (
                  <div key={project._id} className={desktopSpan}>
                    <MasonryCard
                      project={project}
                      index={index}
                      onClick={() => openModal(project)}
                    />
                  </div>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>

        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  )
}