import { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arisecsf.org';

export const metadata: Metadata = {
  title: "Donate & Support Us | Arise Community Support Foundation",
  description: "Donate to Arise CSF to fund scholarships, free diabetes testing, elderly care packages, and youth training. Give online or via secure Nigerian bank transfer.",
  alternates: {
    canonical: `${siteUrl}/donation`,
  },
  openGraph: {
    title: "Support Our Mission | Arise Community Support Foundation",
    description: "Connecting caring hearts with lives in need. Empower students, provide free healthcare, and care for seniors in Nigeria.",
    url: `${siteUrl}/donation`,
    images: ["/images/diabetes-support/5.png"],
  },
}

export default function DonateLayout({ children }: { children: React.ReactNode }) {
  return children
}
