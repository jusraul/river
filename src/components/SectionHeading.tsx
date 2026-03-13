"use client"
import { motion } from 'framer-motion'

export default function SectionHeading({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6 }}
      className={`text-2xl md:text-3xl font-bold text-emerald-700 mb-4 ${className}`}
    >
      {children}
    </motion.h2>
  )
}
