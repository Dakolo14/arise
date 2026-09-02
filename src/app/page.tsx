import { HeroSection } from "@/components/home/HeroSection"
import { WhoWeAre } from "@/components/home/WhoWeAre"
import { WhatWeDo } from "@/components/home/FocusAreas"
import { OurInitiatives } from "@/components/home/OurInitiatives"
import { CTASection } from "@/components/home/CTASection"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description: "Connecting caring hearts with lives in need through education, healthcare, youth leadership, and elderly support in Nigeria.",
}

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white">
      <HeroSection />
      <WhoWeAre />
      <WhatWeDo />
      <OurInitiatives />
      <CTASection />
    </div>
  )
}
