
import SectionHeading from '@/components/SectionHeading'
import GoogleMap from '@/components/GoogleMap'

export const metadata = {
  title: 'Contact | Lower Withlacoochee River Keeper',
  description:
    'Contact us for more information, partnership, or media inquiries. Email, phone, and map placeholder.',
}

export default function ContactPage() {
  return (
    <main className="max-w-xl mx-auto px-4 py-12">
      <SectionHeading>Contact Us</SectionHeading>
      <p className="text-slate-700 mb-6">Have a question, want to partner, or need more information? Reach out and we’ll get back to you soon.</p>
      <form className="space-y-3 mb-8">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
          <input id="name" name="name" type="text" required className="mt-1 block w-full rounded border-stone-300 focus:ring-emerald-600 focus:border-emerald-600" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
          <input id="email" name="email" type="email" required className="mt-1 block w-full rounded border-stone-300 focus:ring-emerald-600 focus:border-emerald-600" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
          <textarea id="message" name="message" rows={4} required className="mt-1 block w-full rounded border-stone-300 focus:ring-emerald-600 focus:border-emerald-600" />
        </div>
        <button type="submit" className="bg-emerald-700 text-white px-5 py-2 rounded font-semibold hover:bg-emerald-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600">Send Message</button>
      </form>
      <div className="mb-6">
        <h3 className="font-bold text-emerald-700 mb-1">Email</h3>
        <a href="mailto:lowerwithlacoocheeriverkeeper@gmail.com" className="text-teal-700 hover:underline">lowerwithlacoocheeriverkeeper@gmail.com</a>
      </div>
      <div className="mb-6">
        <h3 className="font-bold text-emerald-700 mb-1">Phone</h3>
        <span className="text-slate-700">352-464-4244</span>
      </div>
      <div className="mb-6">
        <h3 className="font-bold text-emerald-700 mb-1">Address</h3>
        <span className="text-slate-700">One Tide Over Island, Yankeetown, FL 34439</span>
      </div>
      <div className="mb-6">
        <h3 className="font-bold text-emerald-700 mb-1">Map</h3>
        <GoogleMap
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}
          center={{ lat: 29.0007, lng: -82.7266 }}
          zoom={13}
        />
      </div>
      {/* Location map removed as requested */}
    </main>
  )
}
