"use client"
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export default function LocationCard({
  icon,
  title,
  description,
  image,
}: {
  icon: ReactNode
  title: string
  description: string
  image: string
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white border border-stone-200 rounded-lg overflow-hidden shadow-sm flex flex-col"
    >
      <div className="relative h-40 w-full">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <div className="text-teal-700 mb-1">{icon}</div>
        <h3 className="font-semibold text-lg text-slate-900">{title}</h3>
        <p className="text-slate-700 text-sm flex-1">{description}</p>
      </div>
    </motion.div>
  )
}
