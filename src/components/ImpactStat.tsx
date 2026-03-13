'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function ImpactStat({
  value,
  label,
  duration = 1.2,
}: {
  value: number
  label: string
  duration?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.7 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const end = value
    const increment = end / (duration * 60)
    let frame = 0

    function animate() {
      frame++
      const next = Math.min(Math.round(start + increment * frame), end)
      setDisplay(next)
      if (next < end) requestAnimationFrame(animate)
    }
    animate()
    // eslint-disable-next-line
  }, [isInView, value, duration])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <span className="text-3xl md:text-4xl font-extrabold text-emerald-700 tabular-nums">
        {display.toLocaleString()}
      </span>
      <span className="text-slate-700 text-sm text-center">{label}</span>
    </motion.div>
  )
}
