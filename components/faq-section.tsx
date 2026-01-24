// 'use client'

// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { ChevronDown } from 'lucide-react'

// const faqs = [
//   {
//     id: 1,
//     question: 'What is SEO and why is it important for my business?',
//     answer: 'SEO (Search Engine Optimization) is the practice of optimizing your website to rank higher on Google and other search engines. It\'s crucial because 93% of online experiences start with a search engine, and higher rankings lead to more visibility, traffic, and sales for your business. Our SEO services in Rishikesh help local businesses and startups achieve top rankings for competitive keywords.'
//   },
//   {
//     id: 2,
//     question: 'How long does it take to see SEO results?',
//     answer: 'SEO is a long-term strategy. Most businesses start seeing measurable results within 3-6 months, with significant improvements typically visible after 6-12 months of consistent optimization work. Results depend on industry competitiveness and your current website state. We provide monthly reports tracking your progress.'
//   },
//   {
//     id: 3,
//     question: 'What does web development include?',
//     answer: 'Web development includes designing and building websites and web applications. Our services include front-end development (design and user interface), back-end development (server and database), responsive design for all devices, e-commerce functionality, security implementation, and ongoing maintenance and support.'
//   },
//   {
//     id: 4,
//     question: 'How much does a website development project cost?',
//     answer: 'Website costs vary based on complexity, features, and design requirements. Our packages range from ₹10,000 for basic starter websites to ₹30,000+ for premium solutions with advanced features. Custom projects are priced based on your specific requirements. We offer free consultations to provide accurate quotes for your needs.'
//   },
//   {
//     id: 5,
//     question: 'What is AI automation and how can it help my business?',
//     answer: 'AI automation uses intelligent systems to automate repetitive business processes, improve efficiency, and reduce operational costs. Applications include AI chatbots for customer support, workflow automation for internal processes, invoice and document processing, appointment scheduling, and data management. This frees your team to focus on strategic work.'
//   },
//   {
//     id: 6,
//     question: 'Do you provide support after the project is complete?',
//     answer: 'Yes! We provide comprehensive ongoing support and maintenance for all our projects. Our packages include free support periods (15-30 days), and we offer extended maintenance plans for long-term partnership. We\'re available 24/7 for critical issues and emergency support to ensure your systems run smoothly.'
//   },
//   {
//     id: 7,
//     question: 'What makes Devbhoomi Infotech different from other agencies?',
//     answer: 'We combine deep technical expertise with strategic business thinking. With 8 years of experience, 150+ successful projects, and 120+ happy clients, we deliver custom solutions tailored to your specific business goals. Our local presence in Rishikesh ensures personalized service and deep understanding of regional markets.'
//   },
//   {
//     id: 8,
//     question: 'Can you help improve my existing website\'s SEO?',
//     answer: 'Absolutely! We conduct comprehensive SEO audits of existing websites, identify optimization opportunities, and implement data-driven strategies. Our services include technical SEO fixes, on-page optimization, content strategy development, and strategic link building to improve your current rankings and organic traffic.'
//   },
//   {
//     id: 9,
//     question: 'What technologies do you use for web development?',
//     answer: 'We use modern, industry-standard technologies including Next.js, React, TypeScript, Node.js, and various databases. Our tech stack is carefully chosen based on project requirements to ensure scalability, high performance, security, and long-term maintainability of your digital solutions.'
//   },
//   {
//     id: 10,
//     question: 'How do you ensure my website is mobile-friendly?',
//     answer: 'All our websites are built with responsive design principles, ensuring perfect functionality and appearance on all devices—desktop, tablets, and smartphones. We thoroughly test across all devices and screen sizes, and use modern web standards and optimization techniques to guarantee an excellent user experience.'
//   },
//   {
//     id: 11,
//     question: 'Do you offer e-commerce website development?',
//     answer: 'Yes! We develop full-featured e-commerce websites with product catalogs, shopping carts, secure payment gateway integration (Stripe, PayPal, etc.), inventory management, and order tracking systems. We also implement SEO optimization specifically for e-commerce to maximize your online sales.'
//   },
//   {
//     id: 12,
//     question: 'What is your process for starting a new project?',
//     answer: 'We start with a free consultation to understand your goals, target audience, and business objectives. We conduct research, create a detailed proposal with timeline and costs, gather detailed requirements, design mockups for approval, develop the solution, test thoroughly, and deploy. We maintain open communication throughout the project.'
//   }
// ]

// export function FaqSection() {
//   const [openId, setOpenId] = useState<number | null>(null)

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.05,
//         delayChildren: 0.1,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 10 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.4,
//         ease: 'easeOut',
//       },
//     },
//   }

//   return (
//     <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
//       <motion.div
//         className="max-w-4xl mx-auto"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={containerVariants}
//       >
//         {/* Section Header */}
//         <motion.div variants={itemVariants} className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 dark:bg-blue-950/30 border border-blue-200/50 dark:border-blue-900/50 mb-6">
//             <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
//             <p className="text-sm font-medium text-blue-700 dark:text-blue-300">Got Questions?</p>
//           </div>
//           <h2 className="text-4xl md:text-4xl font-semibold text-foreground mb-4">
//             Frequently Asked Questions
//           </h2>
//           <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
//             Find answers to common questions about our services, pricing, and process. Can't find what you're looking for? Contact us directly.
//           </p>
//         </motion.div>

//         {/* FAQ Items */}
//         <motion.div
//           className="space-y-4"
//           variants={containerVariants}
//         >
//           {faqs.map((faq, index) => (
//             <motion.div
//               key={faq.id}
//               variants={itemVariants}
//               className="bg-card border border-border rounded-lg overflow-hidden"
//             >
//               <button
//                 onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
//                 className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary/50 transition-colors"
//                 aria-expanded={openId === faq.id}
//                 aria-controls={`faq-answer-${faq.id}`}
//               >
//                 <h3 className="text-lg font-semibold text-foreground text-left">
//                   {faq.question}
//                 </h3>
//                 <motion.div
//                   animate={{ rotate: openId === faq.id ? 180 : 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="flex-shrink-0 ml-4"
//                 >
//                   <ChevronDown className="w-5 h-5 text-foreground/60" />
//                 </motion.div>
//               </button>

//               <AnimatePresence>
//                 {openId === faq.id && (
//                   <motion.div
//                     id={`faq-answer-${faq.id}`}
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: 'auto' }}
//                     exit={{ opacity: 0, height: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="border-t border-border"
//                   >
//                     <p className="px-6 py-4 text-foreground/70 leading-relaxed">
//                       {faq.answer}
//                     </p>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* CTA at Bottom */}
//         <motion.div
//           variants={itemVariants}
//           className="mt-16 text-center bg-primary/5 border border-primary/20 rounded-lg p-8"
//         >
//           <h3 className="text-xl font-semibold text-foreground mb-3">
//             Still have questions?
//           </h3>
//           <p className="text-foreground/70 mb-6">
//             Our team is ready to help. Get in touch with us for a free consultation and personalized recommendations.
//           </p>
//           <a
//             href="mailto:contact@devbhoomiitech.com"
//             className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
//           >
//             Contact Us Today
//           </a>
//         </motion.div>
//       </motion.div>
//     </section>
//   )
// }
