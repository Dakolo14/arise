import { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arisecsf.org';

export const metadata: Metadata = {
  title: "Support & Partner With Us | Arise Community Support Foundation",
  description: "Support Arise Community Support Foundation. Sponsor deserving students, donate healthcare supplies, support community programmes, or contribute to essential running costs.",
  alternates: {
    canonical: `${siteUrl}/donation`,
  },
  openGraph: {
    title: "Support & Partner With Us | Arise Community Support Foundation",
    description: "Every act of support can make a meaningful difference. Partner with Arise CSF to sponsor deserving students, provide healthcare supplies, support community programmes, or assist with operational costs.",
    url: `${siteUrl}/donation`,
    images: ["/images/diabetes-support/5.png"],
  },
}

export default function DonateLayout({ children }: { children: React.ReactNode }) {
  return children
}
