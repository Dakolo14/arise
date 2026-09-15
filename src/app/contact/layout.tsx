import { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arisecsf.org';

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch with Arise CSF in Benin City, Nigeria",
  description: "Connect with the Arise Community Support Foundation in Benin City, Nigeria. Contact us for partnerships, volunteer opportunities, donations, and inquiries.",
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact Arise CSF | Benin City, Edo State, Nigeria",
    description: "Connect with the Arise Community Support Foundation in Benin City, Nigeria. Contact us for partnerships, volunteer opportunities, donations, and inquiries.",
    url: `${siteUrl}/contact`,
    images: [{ url: "/og-image.png", width: 512, height: 512, alt: "Contact Arise CSF" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Arise CSF | Benin City, Edo State, Nigeria",
    description: "Connect with the Arise Community Support Foundation in Benin City, Nigeria. Contact us for partnerships, volunteer opportunities, donations, and inquiries.",
    images: ["/og-image.png"],
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
