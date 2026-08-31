import Image from "next/image"
import Link from "next/link"
import { Plus } from "lucide-react"

const CAMPAIGNS = [
  {
    title: "Youth In Action Against Poverty",
    raised: "$5,000",
    percentage: "100%",
    target: "$5,000",
    description: "Empowering the next generation through comprehensive education and skill acquisition programs.",
    image: "/images/hero-1.jpg"
  },
  {
    title: "Clean Water Access Initiative",
    raised: "$3,000",
    percentage: "60%",
    target: "$5,000",
    description: "Providing sustainable and safe drinking water to rural communities across Edo State.",
    image: "/images/hero-1.jpg"
  },
  {
    title: "Senior Citizens Health Support",
    raised: "$4,500",
    percentage: "90%",
    target: "$5,000",
    description: "Delivering free medications and health screenings to the elderly in marginalized areas.",
    image: "/images/hero-1.jpg"
  }
]

export function CampaignsGrid() {
  return (
    <section className="py-20 bg-[#FAFAF8]">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        
        <div className="text-center mb-16">
          <p className="text-xs font-bold text-[var(--color-arise-amber)] uppercase tracking-widest mb-4">We Need Your Help</p>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-[var(--color-arise-text)] mb-4">Featured Campaigns</h2>
          <p className="text-sm text-[var(--color-arise-muted)] max-w-lg mx-auto">
            It's through your generous support that we can continue funding these essential projects and bringing hope to those in need.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CAMPAIGNS.map((campaign, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col">
              
              <div className="relative h-56 w-full">
                <Image 
                  src={campaign.image}
                  alt={campaign.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-1 relative">
                
                {/* Stats Row */}
                <div className="flex items-end justify-between border-b border-gray-100 pb-4 mb-4">
                  <div className="text-center">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Raised</p>
                    <p className="text-sm font-bold text-[var(--color-arise-text)]">{campaign.raised}</p>
                  </div>
                  <div className="text-center pb-1">
                    <p className="text-3xl font-bold text-[var(--color-arise-text)] leading-none">{campaign.percentage}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Target</p>
                    <p className="text-sm font-bold text-[var(--color-arise-text)]">{campaign.target}</p>
                  </div>
                </div>
                
                <h3 className="font-bold text-[var(--color-arise-text)] text-lg mb-3">{campaign.title}</h3>
                
                <p className="text-sm text-[var(--color-arise-muted)] leading-relaxed mb-6">
                  {campaign.description}
                </p>
                
                {/* Action Button */}
                <div className="mt-auto absolute -bottom-1 -right-1">
                  <Link 
                    href="#donate" 
                    className="flex items-center justify-center w-12 h-12 bg-[var(--color-arise-amber)] text-white rounded-tl-xl rounded-br-xl hover:bg-orange-500 transition-colors"
                    aria-label={`Donate to ${campaign.title}`}
                  >
                    <Plus className="w-5 h-5" />
                  </Link>
                </div>
                
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}
