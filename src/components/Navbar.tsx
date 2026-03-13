"use client"
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Leaf, Waves, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import PrimaryButton from './PrimaryButton'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/locations', label: 'Locations' },
  { href: '/get-involved', label: 'Get Involved' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={cn(
        'sticky top-0 z-50 w-full bg-white/90 backdrop-blur transition-shadow',
        scrolled ? 'shadow-sm' : ''
      )}
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 md:py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-emerald-700 text-lg md:text-xl" aria-label="Lower Withlacoochee River Keeper Home">
          {/* <Leaf className="h-6 w-6 text-teal-600" aria-hidden="true" /> */}
          <span className="hidden sm:inline">Lower Withlacoochee River Keeper</span>
          <span className="sm:hidden">LWRK</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-700 hover:text-emerald-700 transition-colors font-medium px-2 py-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <PrimaryButton
            asChild
            variant="outline"
            className="border-emerald-700 text-emerald-700 hover:bg-emerald-50"
          >
            <Link href="/get-involved">Volunteer Today</Link>
          </PrimaryButton>
          <PrimaryButton asChild>
            <a
              href="https://www.paypal.com/donate?hosted_button_id=4WRYAH564AV4J"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate Now
            </a>
          </PrimaryButton>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/40" onClick={() => setMobileOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-64 bg-white shadow-lg flex flex-col gap-2 p-6"
            onClick={(e) => e.stopPropagation()}
            role="menu"
            aria-label="Mobile navigation"
          >
            <button
              className="self-end mb-2 p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-lg text-slate-700 hover:text-emerald-700 py-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <PrimaryButton asChild className="mt-4">
              <Link href="/get-involved" onClick={() => setMobileOpen(false)}>
                Volunteer Today
              </Link>
            </PrimaryButton>
            <PrimaryButton asChild variant="secondary">
              <a
                href="https://www.paypal.com/donate?hosted_button_id=4WRYAH564AV4J"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
              >
                Donate Now
              </a>
            </PrimaryButton>
          </div>
        </div>
      )}
    </nav>
  )
}
