import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/Button"

export function AboutOrganic() {
  return (
    <section className="py-20 bg-[#FAFAF8] relative overflow-hidden">
      
      {/* Decorative dots */}
      <div className="absolute top-[30%] left-[10%] w-3 h-3 rounded-full bg-orange-400 opacity-60"></div>
      <div className="absolute bottom-[20%] right-[30%] w-2 h-2 rounded-full bg-[var(--color-arise-green)] opacity-60"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Intersecting Circular Photos */}
          <div className="relative flex items-center justify-center min-h-[450px]">
            {/* Main large circle */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl z-10 border-8 border-white">
              <Image 
                src="/images/hero-1.jpg"
                alt="Main impact image"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Top right smaller circle */}
            <div className="absolute top-4 right-8 md:right-16 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-xl z-20 border-4 border-white">
              <Image 
                src="/images/hero-1.jpg"
                alt="Secondary impact image"
                fill
                className="object-cover object-left"
              />
            </div>
            
            {/* Bottom left smaller circle */}
            <div className="absolute bottom-4 left-8 md:left-16 w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg z-20 border-4 border-white">
              <Image 
                src="/images/hero-1.jpg"
                alt="Tertiary impact image"
                fill
                className="object-cover object-right"
              />
            </div>
          </div>
          
          {/* Right Column: Text and CTAs */}
          <div className="flex flex-col gap-6 lg:pl-8">
            <p className="text-xs font-bold text-[var(--color-arise-amber)] uppercase tracking-widest">About Us</p>
            
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-[var(--color-arise-text)] leading-[1.1] tracking-tight">
              Changing Lives with<br />Knowledge
            </h2>
            
            <p className="text-sm font-semibold text-[var(--color-arise-text)] max-w-md">
              Our promise that your giving is doing what it's supposed to: changing lives.
            </p>
            
            <p className="text-sm text-[var(--color-arise-muted)] leading-relaxed max-w-lg">
              Today, we will work to deliver life-saving aid to millions of people living on the edge of survival. Tomorrow, when the crisis subsides, we will work alongside community members to restore job opportunities, healthcare, and education.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
              <Button size="lg" className="h-12 px-8 bg-black text-white hover:bg-gray-800 rounded-full text-sm font-bold tracking-wide" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
              
              <button className="group flex items-center gap-3 text-sm font-bold text-[var(--color-arise-text)] hover:text-[var(--color-arise-green)] transition-colors">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-arise-green)] text-white shadow-md group-hover:scale-105 transition-transform">
                  <Play className="w-4 h-4 ml-0.5 fill-current" />
                </span>
                Watch Video
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
