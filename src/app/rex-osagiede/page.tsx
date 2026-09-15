import Image from "next/image"
import { AnimatedButton } from "@/components/ui/AnimatedButton"
import { Award, Stethoscope } from "lucide-react"

export const metadata = {
  title: "Rex Osagiede | Founder, Arise CSF",
  description: "Learn about Rex Osagiede, founder of Arise Community Support Foundation, and his decades-long dedication to education, healthcare, and community empowerment.",
}

export default function FounderPage() {
  return (
    <div className="flex flex-col w-full bg-[#f9f9fa] text-[#111111] font-sans selection:bg-[#1E4D97] selection:text-white pb-24 md:pb-32">
      
      {/* Hero Section */}
      <section className="w-full pt-12 sm:pt-16 md:pt-24 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tight text-[#111] leading-[1.1] mb-4">
                Rex Osagiede
              </h1>
              <p className="text-[#1E4D97] text-lg sm:text-xl font-normal tracking-wide">
                Founder, Arise Community Support Foundation
              </p>
            </div>
            
            <p className="text-gray-600 text-base sm:text-lg md:text-xl font-light leading-relaxed">
              A dedicated community builder and humanitarian, Rex Osagiede has spent nearly two decades bridging the gap between compassionate supporters and underserved communities across Nigeria.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-4 border-t border-gray-200">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#1E4D97] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">Founded in 2007</h4>
                  <p className="text-xs sm:text-sm text-gray-500 font-light leading-snug">
                    Started the Arise Education Scholarship Foundation for indigent students.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">Healthcare Leader</h4>
                  <p className="text-xs sm:text-sm text-gray-500 font-light leading-snug">
                    Spearheaded state-wide diabetes and hypertension screenings with Edo State MOH.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image: Founder Image Snapshot (9.jpg) */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="w-full relative aspect-square rounded-3xl overflow-hidden bg-gray-200 shadow-xl border-4 border-white">
              <Image 
                src="/images/diabetes-support/9.jpg" 
                alt="Rex Osagiede - Founder of Arise Community Support Foundation" 
                fill 
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

        </div>
      </section>

      {/* Story & Philosophy Section */}
      <section className="w-full py-16 sm:py-24 md:py-28 px-4 sm:px-8 md:px-12 lg:px-20 mt-12 sm:mt-16 bg-white rounded-3xl">
        <div className="w-full">
          
          {/* Quote Block */}
          <div className="w-full text-center mb-16 sm:mb-20">
            <span className="text-4xl sm:text-5xl font-serif text-[#1E4D97] leading-none block mb-3">&ldquo;</span>
            <blockquote className="text-2xl sm:text-3xl md:text-4xl text-[#111] font-medium leading-snug sm:leading-relaxed">
              True impact isn&apos;t measured by the resources you gather, but by the lives you touch and the communities you empower.
            </blockquote>
            <p className="text-sm font-medium text-gray-500 mt-4 tracking-wider uppercase">— Rex Osagiede</p>
          </div>

          {/* Narrative Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start w-full">
            <div className="lg:col-span-5">
              <span className="text-[#1E4D97] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2 block">
                The Founder&apos;s Journey
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#111] leading-snug">
                From Educational Scholarships to Unified Community Care
              </h2>
            </div>
            
            <div className="lg:col-span-7 text-gray-600 font-light leading-relaxed space-y-6 text-base sm:text-lg">
              <p>
                Rex Osagiede&apos;s journey began with a simple, unwavering conviction: every individual, regardless of their background or financial circumstances, deserves the dignity of opportunity and the security of health.
              </p>
              <p>
                Growing up, Rex witnessed firsthand the challenges faced by families in underserved communities. He saw bright, motivated children forced out of school for lack of basic tuition fees, and elderly community members suffering in silence from preventable conditions like diabetes and high blood pressure.
              </p>
              <p>
                Driven by compassion and purposeful action, Rex founded the <strong className="text-[#111] font-medium">Arise Education Scholarship Foundation</strong> in 2007. Over the ensuing years, he realized that education and community flourishing require holistic support. In 2026, these expanding efforts were unified into <strong className="text-[#111] font-medium">Arise Community Support Foundation (Arise CSF)</strong>—spanning education, state-partnered healthcare, youth leadership development, cultural heritage preservation, and senior citizen welfare.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Work Done for the NGO - Visual Impact Showcase (Using 2.jpg and 8.jpg) */}
      <section className="w-full py-16 sm:py-24 md:py-28 px-4 sm:px-8 md:px-12 lg:px-20 mt-12 sm:mt-16">
        <div className="w-full">
          
          <div className="text-center w-full mb-14 sm:mb-20">
            <span className="text-[#1E4D97] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 block">
              Leadership In Action
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#111] mb-4">
              Work on the Ground for the NGO
            </h2>
            <p className="text-gray-600 font-light text-base sm:text-lg leading-relaxed">
              Rex Osagiede&apos;s hands-on leadership brings together government ministries, clinical specialists, and grassroots volunteers to deliver life-saving care directly to the people.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 w-full">
            
            {/* Impact Item 1: 2.jpg - Ministry Partnership & Official Launch */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-6">
                <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-inner">
                  <Image 
                    src="/images/diabetes-support/2.jpg" 
                    alt="Rex Osagiede and Edo State Ministry of Health Partnership Launch" 
                    fill 
                    className="object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <span className="inline-block bg-blue-50 text-[#1E4D97] text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
                    Institutional Healthcare Partnership
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
                    Edo State Ministry of Health & Central Hospital Partnership
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed">
                    Spearheaded the official healthcare collaboration with the Edo State Ministry of Health and Central Hospital, establishing state-wide public awareness, free screenings, and clinical consultation channels for early detection of diabetes and hypertension.
                  </p>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-medium">
                <span>Public Health Initiative</span>
                <span className="text-[#1E4D97]">State-Wide Impact</span>
              </div>
            </div>

            {/* Impact Item 2: 8.jpg - Grassroots Patient Care & Community Outreach */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-6">
                <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-inner">
                  <Image 
                    src="/images/diabetes-support/8.jpg" 
                    alt="Direct community outreach, free medications, and patient screening" 
                    fill 
                    className="object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <span className="inline-block bg-emerald-50 text-emerald-800 text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
                    Direct Outreach & Medical Support
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
                    Free Screenings, Medication Delivery & Senior Care
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed">
                    Actively leading outreach teams on the ground across local communities—providing free blood sugar testing, vital signs monitoring, prescription medications, and nutritional guidance to hundreds of vulnerable beneficiaries and senior citizens.
                  </p>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-medium">
                <span>Direct Community Care</span>
                <span className="text-emerald-800">Free Patient Support</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Navigation CTA */}
      <section className="w-full pt-8 sm:pt-12 px-4 sm:px-8 md:px-12 lg:px-20 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <AnimatedButton href="/about" variant="secondary" hasArrow className="w-full sm:w-auto px-8 py-3.5">
            Back to About Us
          </AnimatedButton>
          <AnimatedButton href="/donation" variant="primary" hasArrow className="w-full sm:w-auto px-8 py-3.5">
            Support Our Initiatives
          </AnimatedButton>
        </div>
      </section>

    </div>
  )
}
