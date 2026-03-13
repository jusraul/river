import SectionHeading from '@/components/SectionHeading'

export const metadata = {
  title: 'About | Lower Withlacoochee River Keeper',
  description:
    'Our mission is to protect, restore, and steward the Lower Withlacoochee River and surrounding estuarine systems through hands-on environmental action, habitat restoration, water quality awareness, and inclusive community participation.',
}

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <SectionHeading>Board Members</SectionHeading>
      <ul className="list-disc pl-6 text-slate-700 mb-8 space-y-1">
        <li>Kenneth Raulerson – CEO</li>
        <li>Carl Zervis – President</li>
        <li>Laurence Neace – Secretary</li>
        <li>Carla Chaffin – Treasurer</li>
        <li>Justin Raulerson – Operations Director</li>
      </ul>
      <SectionHeading>About Us</SectionHeading>
      <h3 className="font-semibold text-emerald-700 mb-2">Mission Statement</h3>
      <p className="text-slate-700 mb-6">
        Our mission is to protect, restore, and steward the Lower Withlacoochee River and surrounding estuarine systems through hands-on environmental action, habitat restoration, water quality awareness, and inclusive community participation. We are committed to building a practical, measurable stewardship model that improves ecological health, reduces marine debris, supports shoreline resilience, protects wildlife habitat, and creates meaningful access to nature for the public, including veterans and people with disabilities.
      </p>
      <h3 className="font-semibold text-emerald-700 mb-2">What We Stand For</h3>
      <ul className="list-disc pl-6 text-slate-700 mb-6 space-y-1">
        <li>Estuary protection through measurable action</li>
        <li>Practical, hands-on stewardship</li>
        <li>Inclusive participation for all</li>
        <li>Long-term conservation of the Gulf's ecosystem</li>
        <li>Data-backed credibility and transparency</li>
      </ul>
      <h3 className="font-semibold text-emerald-700 mb-2">Geographic Focus</h3>
      <p className="text-slate-700 mb-6">
        We focus on the Lower Withlacoochee River estuary and Florida’s Nature Coast, operating primarily from the Withlacoochee Gulf Preserve (public hub for education and events) and Tide Over Island (strategic base for restoration and logistics).
      </p>
      <h3 className="font-semibold text-emerald-700 mb-2">Why It Matters</h3>
      <p className="text-slate-700">
        The Lower Withlacoochee estuary is a vital, biodiverse ecosystem facing threats from marine debris, habitat loss, and water quality decline. Our work ensures this unique coastal environment is protected and accessible for future generations.
      </p>
    </main>
  )
}
