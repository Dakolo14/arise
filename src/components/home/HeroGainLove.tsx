import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/Button"

export function HeroGainLove() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF8] py-16 lg:py-28">
      
      {/* Decorative Dots Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <div className="absolute top-[20%] left-[30%] w-3 h-3 rounded-full bg-orange-400"></div>
        <div className="absolute top-[40%] left-[10%] w-2 h-2 rounded-full bg-[var(--color-arise-blue)]"></div>
        <div className="absolute top-[70%] left-[40%] w-2 h-2 rounded-full bg-[var(--color-arise-green)]"></div>
        <div className="absolute top-[15%] right-[15%] w-2 h-2 rounded-full bg-red-400"></div>
        <div className="absolute bottom-[20%] right-[30%] w-3 h-3 rounded-full bg-[var(--color-arise-blue)]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col gap-8 max-w-xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-[var(--color-arise-text)] leading-[1.1] tracking-tight">
              Justice<br />begins where<br />inequality<br />ends
            </h1>
            
            <p className="text-lg text-[var(--color-arise-muted)] leading-relaxed max-w-md">
              We're building a world where everyone has the power to shape their lives and access the resources they need to thrive.
            </p>
            
            <div className="pt-2">
              <Button size="lg" className="h-14 px-10 bg-black text-white hover:bg-gray-800 rounded-full text-base tracking-wide" asChild>
                <Link href="#donate">Donate Now</Link>
              </Button>
            </div>
          </div>
          
          {/* Right Image with Mask */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[650px] flex items-center justify-center">
            
            {/* The SVG Masked Image Wrapper */}
            <div 
              className="relative w-[90%] h-[90%] overflow-hidden"
              style={{
                // A rough organic blob mimicking the map-like shape in the reference
                maskImage: 'url("data:image/svg+xml;utf8,<svg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'><path fill=\'%23000\' d=\'M47.7,-57.2C59.9,-46.8,66.6,-28.9,70.5,-10.1C74.4,8.8,75.4,28.6,65.8,42.5C56.3,56.4,36.1,64.4,15.7,68.9C-4.7,73.4,-25.3,74.4,-42.2,65.6C-59.2,56.7,-72.5,38,-77.1,17.4C-81.7,-3.2,-77.6,-25.6,-65.4,-41.8C-53.1,-58.1,-32.8,-68,-14,-72.1C4.7,-76.3,23.4,-74.6,47.7,-57.2Z\' transform=\'translate(100 100)\'/></svg>")',
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskImage: 'url("data:image/svg+xml;utf8,<svg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'><path fill=\'%23000\' d=\'M47.7,-57.2C59.9,-46.8,66.6,-28.9,70.5,-10.1C74.4,8.8,75.4,28.6,65.8,42.5C56.3,56.4,36.1,64.4,15.7,68.9C-4.7,73.4,-25.3,74.4,-42.2,65.6C-59.2,56.7,-72.5,38,-77.1,17.4C-81.7,-3.2,-77.6,-25.6,-65.4,-41.8C-53.1,-58.1,-32.8,-68,-14,-72.1C4.7,-76.3,23.4,-74.6,47.7,-57.2Z\' transform=\'translate(100 100)\'/></svg>")',
                WebkitMaskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
              }}
            >
              <Image 
                src="/images/hero-1.jpg"
                alt="Smiling community members"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  )
}
