"use client";
import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import Link from 'next/link'

export default function ProgramCard({
  icon,
  title,
  description,
  href,
}: {
  icon: ReactNode
  title: string
  description: string
  href: string
}) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 4px 24px 0 rgba(16, 185, 129, 0.10)' }}
      className="bg-white border border-stone-200 rounded-lg p-5 flex flex-col gap-3 shadow-sm transition-all"
    >
      <div className="text-emerald-700">{icon}</div>
      <h3 className="font-semibold text-lg text-slate-900">{title}</h3>
      <p className="text-slate-700 text-sm flex-1">{description}</p>
      <Link
        href={href}
        className="text-teal-700 font-medium hover:underline mt-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded"
      >
        Learn More
      </Link>
    </motion.div>
  )
}
