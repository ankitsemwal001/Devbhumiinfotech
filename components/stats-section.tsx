// 'use client'

// import { useEffect, useState } from 'react'
// import { motion } from 'framer-motion'

// function AnimatedCounter({ target, duration = 2 }: { target: number; duration?: number }) {
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     let start = 0
//     const increment = target / (duration * 60)

//     const timer = setInterval(() => {
//       start += increment
//       if (start >= target) {
//         setCount(target)
//         clearInterval(timer)
//       } else {
//         setCount(Math.floor(start))
//       }
//     }, 1000 / 60)

//     return () => clearInterval(timer)
//   }, [target, duration])

//   return <span className="text-4xl font-bold text-primary">{count}+</span>
// }

// export function StatsSection() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: 'easeOut',
//       },
//     },
//   }

//   return (
//     <section className="bg-secondary/900 py-16 px-4 sm:px-6 lg:px-8"> 
//       <motion.div
//         className="max-w-7xl mx-auto"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={containerVariants}
//       >
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           {[
//             { value: 150, label: 'Projects Delivered' },
//             { value: 120, label: 'Happy Clients' },
//             { value: 8, label: 'Years of Experience' },
//             { value: 75, label: 'Automation Solutions' },
//           ].map((stat, index) => (
//             <motion.div key={index} variants={itemVariants} className="text-center">
//               <AnimatedCounter target={stat.value} />
//               <p className="text-foreground/70 mt-3 font-medium">{stat.label}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   )
// }
