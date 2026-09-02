import Image from "next/image"
import { AnimatedButton } from "@/components/ui/AnimatedButton"

export default function FounderPage() {
  return (
    <div className="flex flex-col w-full bg-[#f9f9fa] text-[#111111] font-sans selection:bg-[#1E4D97] selection:text-white">
      
      {/* Hero Section */}
      <section className="w-full pt-20 md:pt-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col gap-8">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#1E4D97] mb-2 bg-[#1E4D97]/10 w-fit px-4 py-2 rounded-full">
                ✦ Our Founder
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#111] leading-[1.1]">
                Rex Osagiede
              </h1>
              <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed">
                A visionary leader dedicated to bridging the gap between those who care and those in need, Rex has spent decades transforming communities from the ground up.
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-200 shadow-xl">
                {/* Image Placeholder */}
                <Image src="/images/igiogbe-support/7.JPG" alt="Rex Osagiede" fill className="object-cover" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="w-full py-24 md:py-32 px-6 bg-white mt-24">
        <div className="max-w-[800px] mx-auto">
          <article className="prose prose-lg prose-gray max-w-none text-gray-600 font-light leading-loose space-y-8">
            <p className="text-2xl text-[#111] font-medium leading-relaxed mb-12">
              "True impact isn't measured by the resources you gather, but by the lives you touch and the communities you empower."
            </p>

            <p>
              Rex Osagiede’s journey began with a simple, unwavering belief: every individual, regardless of their background, deserves the opportunity to thrive. Growing up, Rex witnessed firsthand the profound challenges faced by underserved communities. He saw the gaps in the system—where a lack of education limited futures, where inadequate healthcare shortened lives, and where the elderly were often forgotten.
            </p>
            
            <p>
              Driven by a deep sense of compassion and a desire to enact meaningful change, Rex founded the Arise Education Scholarship Foundation in 2007. What started as a focused initiative to provide scholarships to deserving children quickly grew. Rex realized that education, while critical, was only one piece of the puzzle. True community empowerment required a holistic approach.
            </p>

            <div className="relative aspect-video rounded-[2rem] overflow-hidden bg-gray-200 my-16 shadow-lg">
                {/* Image Placeholder */}
                <Image src="/images/diabetes-support/3.JPG" alt="Rex Osagiede in the community" fill className="object-cover" />
            </div>

            <p>
              Over the years, Rex expanded the foundation's reach, launching comprehensive healthcare initiatives, youth leadership programs, and dedicated support centers for senior citizens. In 2026, these efforts were unified under the Arise Community Support Foundation (Arise CSF), creating a robust network of care and empowerment.
            </p>

            <p>
              Today, Rex remains actively involved on the ground. He is known not just as a founder, but as a listener, a mentor, and a relentless advocate for the vulnerable. His leadership style is rooted in integrity and service, always prioritizing the needs of the community above all else. Under his guidance, Arise CSF continues to break new ground, proving that when caring hearts connect with lives in need, incredible transformations occur.
            </p>
          </article>

          <div className="mt-20 pt-10 border-t border-gray-100 flex justify-center">
            <AnimatedButton href="/about" variant="secondary" hasArrow className="px-8 py-3">
              Back to About Us
            </AnimatedButton>
          </div>
        </div>
      </section>

    </div>
  )
}
