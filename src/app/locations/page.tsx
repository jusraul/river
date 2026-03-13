import SectionHeading from '@/components/SectionHeading'
import LocationCard from '@/components/LocationCard'
import { Waves, ShieldCheck } from 'lucide-react'
import GoogleMap from '@/components/GoogleMap'

export const metadata = {
  title: 'Locations | Lower Withlacoochee River Keeper',
  description:
    'Explore our two-hub model: Withlacoochee Gulf Preserve (public education/events) and Tide Over Island (restoration/logistics base).',
}

export default function LocationsPage() {
  // Google Map removed as requested

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <SectionHeading>Our Hubs & Locations</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <LocationCard
          icon={<Waves className="h-6 w-6" />}
          title="Withlacoochee Gulf Preserve"
          description="Our public-facing hub for education, events, and volunteer action. Features an accessible boardwalk, observation tower, and hands-on learning opportunities for all ages and abilities."
        />
        <LocationCard
          icon={<ShieldCheck className="h-6 w-6" />}
          title="Tide Over Island"
          description="A controlled site for logistics, restoration, and long-term field operations. Provides a secure base for impactful stewardship and conservation projects."
        />
      </div>
      <div className="space-y-8">
        <section>
          <h3 className="font-bold text-emerald-700 mb-2">Withlacoochee Gulf Preserve (WGP)</h3>
          <p className="text-slate-700">WGP is our public hub for education, events, and volunteer action. The preserve features an accessible boardwalk, observation tower, and hands-on learning opportunities for all ages and abilities. It is the heart of our community engagement and environmental education efforts.</p>
        </section>
        <section>
          <h3 className="font-bold text-emerald-700 mb-2">Tide Over Island</h3>
          <p className="text-slate-700">Tide Over Island is a controlled site used for restoration, logistics, and long-term field operations. It provides a secure base for impactful stewardship and conservation projects, supporting our mission of lasting estuarine health.</p>
        </section>
      </div>
    </main>
  )
}
