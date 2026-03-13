import SectionHeading from '@/components/SectionHeading'
import ProgramCard from '@/components/ProgramCard'
import { Trash2, Waves, Leaf, BookOpen, Users, ShieldCheck } from 'lucide-react'

export const metadata = {
  title: 'Programs | Lower Withlacoochee River Keeper',
  description:
    'Explore our hands-on programs: marine debris removal, water quality monitoring, habitat restoration, education, inclusive stewardship, and long-term conservation.',
}

const programs = [
  {
    icon: <Trash2 className="h-7 w-7" />, title: 'Marine Debris Removal & Shoreline Cleanup',
    description: 'Organizing regular field cleanups to remove marine debris and litter from riverbanks, marshes, and estuarine shorelines. Every pound removed is tracked and reported for measurable impact.',
    id: 'debris',
  },
  {
    icon: <Waves className="h-7 w-7" />, title: 'Water Quality Awareness & Monitoring',
    description: 'Monitoring dissolved oxygen, salinity, and other key water quality indicators to inform restoration and public health. Data is shared openly to build awareness and guide action.',
    id: 'water',
  },
  {
    icon: <Leaf className="h-7 w-7" />, title: 'Habitat Restoration & Shoreline Resilience',
    description: 'Supporting oyster reef, living shoreline, and marsh restoration to improve habitat, buffer erosion, and increase estuarine resilience to storms and sea level rise.',
    id: 'habitat',
  },
  {
    icon: <BookOpen className="h-7 w-7" />, title: 'Environmental Education & Public Awareness',
    description: 'Hosting field days, workshops, and educational events at the Withlacoochee Gulf Preserve to build environmental literacy and stewardship in the community.',
    id: 'education',
  },
  {
    icon: <Users className="h-7 w-7" />, title: 'Inclusive Participation & Adaptive Stewardship',
    description: 'Designing programs and volunteer opportunities that are accessible to veterans and people with disabilities, ensuring everyone can contribute to conservation.',
    id: 'inclusive',
  },
  {
    icon: <ShieldCheck className="h-7 w-7" />, title: "Long-Term Conservation of the Gulf's Ecosystem",
    description: "Securing and managing key sites like Tide Over Island for restoration, logistics, and long-term stewardship. Our focus is on the long-term conservation of the Gulf's ecosystem, ensuring lasting impact for the estuary.",
    id: 'conservation',
  },
]

export default function ProgramsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <SectionHeading>Our Programs</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((p) => (
          <ProgramCard
            key={p.id}
            icon={p.icon}
            title={p.title}
            description={p.description}
            href={`#${p.id}`}
          />
        ))}
      </div>
      <div className="mt-12 space-y-10">
        <section id="debris">
          <h3 className="font-bold text-emerald-700 mb-2">Marine Debris Removal & Shoreline Cleanup</h3>
          <p className="text-slate-700">We coordinate hands-on cleanups targeting marine debris and litter along the river, marsh, and estuarine shorelines. Every cleanup is tracked, with debris removed measured and reported. Volunteers of all abilities are welcome, and we provide all necessary equipment and safety training.</p>
        </section>
        <section id="water">
          <h3 className="font-bold text-emerald-700 mb-2">Water Quality Awareness & Monitoring</h3>
          <p className="text-slate-700">Our team monitors dissolved oxygen, salinity, and other water quality indicators to inform restoration and public health. We share our data openly to build awareness and guide local action, and we welcome community scientists to participate in monitoring efforts.</p>
        </section>
        <section id="habitat">
          <h3 className="font-bold text-emerald-700 mb-2">Habitat Restoration & Shoreline Resilience</h3>
          <p className="text-slate-700">We support oyster reef, living shoreline, and marsh restoration projects to improve habitat, buffer erosion, and increase estuarine resilience to storms and sea level rise. Our restoration work is science-based and community-driven.</p>
        </section>
        <section id="education">
          <h3 className="font-bold text-emerald-700 mb-2">Environmental Education & Public Awareness</h3>
          <p className="text-slate-700">We host field days, workshops, and educational events at the Withlacoochee Gulf Preserve and in the community to build environmental literacy and stewardship. Our programs are accessible and designed for all ages and abilities.</p>
        </section>
        <section id="inclusive">
          <h3 className="font-bold text-emerald-700 mb-2">Inclusive Participation & Adaptive Stewardship</h3>
          <p className="text-slate-700">We design volunteer opportunities and programs that are accessible to veterans and people with disabilities, ensuring everyone can play a meaningful role in conservation. Adaptive equipment and support are available for inclusive participation.</p>
        </section>
        <section id="conservation">
          <h3 className="font-bold text-emerald-700 mb-2">Long-Term Conservation of the Gulf's Ecosystem</h3>
          <p className="text-slate-700">We secure and manage key sites like Tide Over Island for restoration, logistics, and long-term stewardship. Our focus is on the long-term conservation of the Gulf's ecosystem, ensuring our work is lasting and impactful for the estuary and community.</p>
        </section>
      </div>
    </main>
  )
}
