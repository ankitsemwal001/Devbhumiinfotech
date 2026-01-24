"use client"
import { motion } from "framer-motion"
import { Search, Target, Palette, Zap, Rocket } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,   // Fixed here
    },
  },
}

const lineVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: "easeInOut" as const,   // Fixed here
    },
  },
}

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      label: "Planning",
      description: "Understanding your vision & goals",
      icon: Search,
      gradient: "from-purple-500 to-pink-500",
      glow: "shadow-purple-500/50",
    },
    {
      number: "02",
      label: "Strategy",
      description: "Crafting the perfect roadmap",
      icon: Target,
      gradient: "from-blue-500 to-cyan-500",
      glow: "shadow-blue-500/50",
    },
    {
      number: "03",
      label: "Design & Build",
      description: "Bringing ideas to life",
      icon: Palette,
      gradient: "from-green-500 to-emerald-500",
      glow: "shadow-green-500/50",
    },
    {
      number: "04",
      label: "SEO",
      description: "Optimizing for growth",
      icon: Zap,
      gradient: "from-yellow-500 to-orange-500",
      glow: "shadow-yellow-500/50",
    },
    {
      number: "05",
      label: "Launch & Scale",
      description: "Taking you to the moon",
      icon: Rocket,
      gradient: "from-red-500 to-pink-500",
      glow: "shadow-red-500/50",
    },
  ]

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-primary/5 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary border border-primary/20">
              Our Process
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-5xl font-semibold bg-gradient-to-r from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent mb-6">
            How We Work
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A proven methodology designed to deliver exceptional results at every stage of your journey
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-5 gap-6 md:gap-4 relative">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <motion.div
                    variants={lineVariants}
                    className="hidden md:block absolute top-20 left-[calc(100%-1rem)] w-[calc(100%-2rem)] h-1 z-0"
                    style={{ transformOrigin: "left" }}
                  >
                    <div className={`h-full bg-gradient-to-r ${step.gradient} opacity-30 rounded-full`}></div>
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${step.gradient} rounded-full`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 1 + index * 0.2 }}
                      style={{ transformOrigin: "left" }}
                    ></motion.div>
                  </motion.div>
                )}

                {/* Card */}
                <motion.div
                  className="relative h-full"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" as const }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${step.glow}`}></div>
                  
                  <div className="relative bg-card/80 backdrop-blur-sm border-2 border-border/50 group-hover:border-primary/50 rounded-2xl p-6 h-full transition-all duration-300 shadow-lg group-hover:shadow-2xl">
                    {/* Icon Circle */}
                    <motion.div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg group-hover:shadow-2xl`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Number Badge */}
                    <motion.div
                      className="text-center mb-3"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className={`text-5xl font-bold bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent`}>
                        {step.number}
                      </span>
                    </motion.div>

                    {/* Label */}
                    <h3 className="text-lg font-bold text-foreground text-center mb-2 group-hover:text-primary transition-colors">
                      {step.label}
                    </h3>

                    {/* Description */}
                    <motion.p
                      className="text-sm text-muted-foreground text-center leading-relaxed"
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {step.description}
                    </motion.p>

                    {/* Progress Indicator */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.5 }}
                    ></motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

      </motion.div>
    </section>
  )
}