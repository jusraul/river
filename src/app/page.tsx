import Hero from '@/components/Hero'
import SectionHeading from '@/components/SectionHeading'
import ProgramCard from '@/components/ProgramCard'
import LocationCard from '@/components/LocationCard'
import ImpactStat from '@/components/ImpactStat'
import { Trash2, Waves, Leaf, BookOpen, Users, ShieldCheck } from 'lucide-react'
import PrimaryButton from '@/components/PrimaryButton'

export default function HomePage() {

  return (
    <>
      <Hero />

      {/* Donate with PayPal */}
      <div className="flex justify-center my-8">
        <form action="https://www.paypal.com/donate" method="post" target="_top">
          <input type="hidden" name="hosted_button_id" value="4WRYAH564AV4J" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>

      {/* Quick About */}
      <section className="max-w-4xl mx-auto px-4 py-12" id="about">
        <SectionHeading>What We Stand For</SectionHeading>
        <div className="space-y-4 text-slate-700 text-base">
          <p>
            Lower Withlacoochee River Keeper is a hands-on, field-based nonprofit dedicated to the measurable protection and restoration of Florida’s Lower Withlacoochee River and estuary. We believe in practical stewardship, not just advocacy—our work is rooted in action, data, and community participation.
          </p>
          <p>
            Our approach is inclusive and accessible, ensuring that everyone—including veterans and people with disabilities—can play a meaningful role in coastal conservation. By focusing on long-term site control and transparent, data-backed results, we’re building a stewardship model that’s both credible and scalable for Florida’s Nature Coast.
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-1">
            <li>Estuary protection through measurable action</li>
            <li>Practical, hands-on stewardship</li>
            <li>Inclusive participation for all</li>
            <li>Long-term conservation of the Gulf's ecosystem</li>
            <li>Data-backed credibility and transparency</li>
          </ul>
        </div>
      </section>

      {/* Our Programs */}
      <section className="max-w-7xl mx-auto px-4 py-12" id="programs">
        <SectionHeading>Our Programs</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProgramCard
            icon={<Trash2 className="h-7 w-7" />}
            title="Marine Debris Removal & Shoreline Cleanup"
            description="Organizing regular field cleanups to remove marine debris and litter from riverbanks, marshes, and estuarine shorelines. Every pound removed is tracked and reported for measurable impact."
            href="/programs#debris"
          />
          <ProgramCard
            icon={<Waves className="h-7 w-7" />}
            title="Water Quality Awareness & Monitoring"
            description="Monitoring dissolved oxygen, salinity, and other key water quality indicators to inform restoration and public health. Data is shared openly to build awareness and guide action."
            href="/programs#water"
          />
          <ProgramCard
            icon={<Leaf className="h-7 w-7" />}
            title="Habitat Restoration & Shoreline Resilience"
            description="Supporting oyster reef, living shoreline, and marsh restoration to improve habitat, buffer erosion, and increase estuarine resilience to storms and sea level rise."
            href="/programs#habitat"
          />
          <ProgramCard
            icon={<BookOpen className="h-7 w-7" />}
            title="Environmental Education & Public Awareness"
            description="Hosting field days, workshops, and educational events at the Withlacoochee Gulf Preserve to build environmental literacy and stewardship in the community."
            href="/programs#education"
          />
          <ProgramCard
            icon={<Users className="h-7 w-7" />}
            title="Inclusive Participation & Adaptive Stewardship"
            description="Designing programs and volunteer opportunities that are accessible to veterans and people with disabilities, ensuring everyone can contribute to conservation."
            href="/programs#inclusive"
          />
        </div>
      </section>

      {/* Our Hubs */}
      <section className="max-w-7xl mx-auto px-4 py-12" id="locations">
        <SectionHeading>Our Hubs</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      </section>

      {/* Impact Teaser */}
      <section className="max-w-7xl mx-auto px-4 py-12" id="impact">
        <SectionHeading className="text-center">Our Impact</SectionHeading>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          <ImpactStat value={3} label="Tons debris removed" />
          <ImpactStat value={280} label="Volunteer hours" />
          <ImpactStat value={4} label="Cleanups hosted" />
          <ImpactStat value={4} label="Inclusive events for veterans & disabilities" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="bg-gradient-to-r from-emerald-700 to-teal-600 rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to protect the estuary? Get involved today.
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <PrimaryButton asChild>
              <a href="/get-involved">Volunteer Today</a>
            </PrimaryButton>
            <PrimaryButton asChild variant="outline" className="text-white border-white hover:bg-white/10">
              <a href="/get-involved#donate">Donate Now</a>
            </PrimaryButton>
          </div>
        </div>
      </section>
    </>
  )
}
