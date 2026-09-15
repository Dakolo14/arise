import { HeroSection } from "@/components/home/HeroSection"
import { WhoWeAre } from "@/components/home/WhoWeAre"
import { WhatWeDo } from "@/components/home/FocusAreas"
import { OurInitiatives } from "@/components/home/OurInitiatives"
import { CTASection } from "@/components/home/CTASection"
import { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arisecsf.org';

export const metadata: Metadata = {
  title: "Arise Community Support Foundation | Grassroots NGO in Nigeria",
  description: "Connecting caring hearts with lives in need through education scholarships, diabetes care, youth leadership, and elderly support across Nigeria since 2007.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Arise Community Support Foundation | Grassroots NGO in Nigeria",
    description: "Connecting caring hearts with lives in need through education scholarships, diabetes care, youth leadership, and elderly support across Nigeria since 2007.",
    url: siteUrl,
    images: [{ url: "/og-image.png", width: 512, height: 512, alt: "Arise CSF" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arise Community Support Foundation | Grassroots NGO in Nigeria",
    description: "Connecting caring hearts with lives in need through education scholarships, diabetes care, youth leadership, and elderly support across Nigeria since 2007.",
    images: ["/og-image.png"],
  },
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
