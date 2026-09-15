import { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arisecsf.org';

export const metadata: Metadata = {
  title: "Our Initiatives | Healthcare, Education & Youth Leadership",
  description: "Explore Arise CSF's grassroots programs: Diabetes Support, Educational Scholarships, Youth Leadership, the Igiogbe Center, and Elderly Care across Nigeria.",
  alternates: {
    canonical: `${siteUrl}/initiatives`,
  },
  openGraph: {
    title: "Our Initiatives | Arise Community Support Foundation",
    description: "Explore Arise CSF's grassroots programs: Diabetes Support, Educational Scholarships, Youth Leadership, the Igiogbe Center, and Elderly Care across Nigeria.",
    url: `${siteUrl}/initiatives`,
    images: [{ url: "/images/diabetes-support/8.jpg", width: 1200, height: 630, alt: "Arise CSF Community Outreach" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Initiatives | Arise Community Support Foundation",
    description: "Explore Arise CSF's grassroots programs: Diabetes Support, Educational Scholarships, Youth Leadership, the Igiogbe Center, and Elderly Care across Nigeria.",
    images: ["/images/diabetes-support/8.jpg"],
  },
}

export default function InitiativesLayout({ children }: { children: React.ReactNode }) {
  return children
}
