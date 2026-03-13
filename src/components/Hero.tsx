"use client"
import Image from 'next/image'
import PrimaryButton from './PrimaryButton'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        alt="Florida estuary marsh"
        fill
        className="object-cover object-center brightness-80"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative z-10 max-w-2xl mx-auto text-center px-4 py-16"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-3">
          Lower Withlacoochee River Keeper
        </h1>
        <p className="text-lg md:text-2xl text-emerald-100 font-medium mb-2">
          Turning concern into measurable field operations
        </p>
        <p className="text-white/90 text-base md:text-lg mb-6">
          Our nonprofit exists to protect and restore the Lower Withlacoochee River and surrounding estuarine systems through measurable field-based action. We organize community cleanups, support habitat restoration and shoreline resilience efforts, build environmental awareness through public education and monitoring, and create inclusive stewardship opportunities for the public, including veterans and people with disabilities. Operating primarily from the Withlacoochee Gulf Preserve and strategically integrating nearby controlled sites such as Tide Over Island, we are building a portable, scalable coastal stewardship model for Florida’s Nature Coast that combines environmental impact, public benefit, and long-term conservation strategy.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <PrimaryButton asChild>
            <Link href="/get-involved">Join a Cleanup</Link>
          </PrimaryButton>
          <PrimaryButton asChild variant="outline" className="text-white border-white hover:bg-white/10">
            <Link href="/about">Learn More</Link>
          </PrimaryButton>
        </div>
      </motion.div>
    </section>
  )
}
