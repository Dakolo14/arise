import { BookOpen, Stethoscope, Briefcase, HeartHandshake } from "lucide-react"

const FEATURES = [
  {
    title: "Free Access",
    description: "A group of donors cover our operating costs so 100% of your money can fund projects.",
    icon: BookOpen,
  },
  {
    title: "Locals For Locals",
    description: "A group of donors cover our operating costs so 100% of your money can fund projects.",
    icon: Briefcase,
  },
  {
    title: "Real Impact",
    description: "A group of donors cover our operating costs so 100% of your money can fund projects.",
    icon: Stethoscope,
  },
  {
    title: "Safety Net",
    description: "A group of donors cover our operating costs so 100% of your money can fund projects.",
    icon: HeartHandshake,
  },
]

export function FeaturesGrid() {
  return (
    <section className="py-20 bg-[#FAFAF8]">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16">
          <p className="text-xs font-bold text-[var(--color-arise-amber)] uppercase tracking-widest mb-4">Who We Are</p>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-[var(--color-arise-text)] mb-4">Make a Difference</h2>
          <p className="text-sm text-[var(--color-arise-muted)] max-w-lg mx-auto">
            It's through mistakes that you actually can grow you get rid of everything that is not essential to make have to get bad.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, i) => (
            <div key={i} className="bg-white rounded-[2rem] rounded-tl-sm p-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mb-6 relative">
                <feature.icon className="w-7 h-7 text-[var(--color-arise-text)] relative z-10" />
                <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-amber-400 z-0"></div>
              </div>
              
              <h3 className="font-bold text-[var(--color-arise-text)] mb-4">{feature.title}</h3>
              <p className="text-xs leading-relaxed text-[var(--color-arise-muted)]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}
