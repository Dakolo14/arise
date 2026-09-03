import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Donation & Giving",
  description: "Support Arise Community Support Foundation in Nigeria. Give online or via direct bank transfer to fund education scholarships, healthcare outreaches, and elderly care.",
  openGraph: {
    title: "Support Our Mission | Arise Community Support Foundation",
    description: "Every act of kindness creates hope. Donate to sponsor indigent students, provide free healthcare, and care for seniors in Nigeria.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Support Our Mission | Arise Community Support Foundation",
    description: "Every act of kindness creates hope. Donate to sponsor indigent students, provide free healthcare, and care for seniors in Nigeria.",
    images: ["/og-image.png"],
  },
}

export default function DonationLayout({ children }: { children: React.ReactNode }) {
  return children
}
