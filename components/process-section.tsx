"use client"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,   // ← This fixes the TypeScript error
    },
  },
}

export default function ProcessSection() {
const steps = [
  { number: "01", label: "Planning" },
  { number: "02", label: "SEO" },
  { number: "03", label: "Design & Dev" },
  { number: "04", label: "Optimization" },
  { number: "05", label: "Growth" },
]


  return (
    <section className="py-20 px-4 sm:px-2 lg:px-8 bg-blue-100">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
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

        {/* Horizontal line for desktop */}
        <div className="hidden md:block absolute top-1/2 left-8 right-8 h-0.5 bg-primary/10 -translate-y-1/2 z-0" />

        <div className="grid md:grid-cols-5 gap-10 md:gap-4 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative flex flex-col items-center"
            >
              <div className="w-full bg-gradient-to-b from-primary/5 to-transparent rounded-xl p-8 text-center border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <div className="text-5xl md:text-6xl font-black text-primary/30 mb-4 select-none">
                  {step.number}
                </div>
                <div className="text-2xl font-bold text-primary mb-2">{step.number}</div>
                <p className="font-semibold text-lg text-foreground">{step.label}</p>
              </div>

              {/* Connectors */}
              {index < steps.length - 1 && (
                <>
                  {/* Mobile vertical */}
                  <div className="md:hidden h-12 w-0.5 bg-primary/20 mx-auto mt-4" />
                  {/* Desktop horizontal arrow */}
                  <div className="hidden md:flex absolute top-1/2 -right-6 items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-orange-500 text-xl font-bold transform -translate-y-1/2 z-20">
                    →
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}