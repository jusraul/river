import Link from 'next/link'
import { Facebook, Instagram, Mail, MapPin } from 'lucide-react'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/locations', label: 'Locations' },
  { href: '/get-involved', label: 'Get Involved' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="relative mt-12 bg-gradient-to-t from-teal-100 via-stone-50 to-white border-t border-stone-200">
      <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col md:flex-row gap-8 md:gap-16">
        {/* Mission */}
        <div className="flex-1 min-w-[220px]">
          <h2 className="font-bold text-emerald-700 text-lg mb-2">Our Mission</h2>
          <p className="text-slate-700 text-sm">
            Our nonprofit exists to protect and restore the Lower Withlacoochee River and surrounding estuarine systems through measurable field-based action. We organize community cleanups, support habitat restoration and shoreline resilience efforts, build environmental awareness through public education and monitoring, and create inclusive stewardship opportunities for the public, including veterans and people with disabilities.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h2 className="font-bold text-emerald-700 text-lg mb-2">Quick Links</h2>
          <ul className="space-y-1">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-slate-700 hover:text-emerald-700 transition-colors text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact & Social */}
        <div>
          <h2 className="font-bold text-emerald-700 text-lg mb-2">Contact</h2>
          <ul className="text-slate-700 text-sm space-y-1">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-teal-600" />
              <a href="mailto:lowerwithlacoocheeriverkeeper@gmail.com" className="hover:underline">
                lowerwithlacoocheeriverkeeper@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-teal-600" />
              <span>One Tide Over Island, Yankeetown, FL 34439</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-4 w-4 text-teal-600 font-bold">📞</span>
              <span>352-464-4244</span>
            </li>
          </ul>
          <div className="flex gap-3 mt-3">
            <a href="#" aria-label="Facebook" className="hover:text-emerald-700">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-emerald-700">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-slate-600 py-4 border-t border-stone-200 bg-gradient-to-r from-teal-100/60 to-emerald-100/40">
        © 2026 Lower Withlacoochee River Keeper • Protecting Florida&apos;s Nature Coast
      </div>
    </footer>
  )
}
