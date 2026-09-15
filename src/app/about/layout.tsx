import { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arisecsf.org';

export const metadata: Metadata = {
  title: "About Us | Our Mission, Vision & 19-Year Impact",
  description: "Discover Arise Community Support Foundation's 19-year mission: empowering Nigerian communities with educational scholarships, free healthcare, and elderly care.",
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: "About Arise CSF | Dedicated to Grassroots Impact Across Nigeria",
    description: "Discover Arise Community Support Foundation's 19-year mission: empowering Nigerian communities with educational scholarships, free healthcare, and elderly care.",
    url: `${siteUrl}/about`,
    images: [{ url: "/images/diabetes-support/2.jpg", width: 1200, height: 630, alt: "Arise CSF Ministry of Health Partnership" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Arise CSF | Dedicated to Grassroots Impact Across Nigeria",
    description: "Discover Arise Community Support Foundation's 19-year mission: empowering Nigerian communities with educational scholarships, free healthcare, and elderly care.",
    images: ["/images/diabetes-support/2.jpg"],
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
