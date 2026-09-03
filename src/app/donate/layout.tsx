import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Donate & Support Us",
  description: "Support Arise Community Support Foundation in Nigeria. Donate online or via direct bank transfer to fund education scholarships and free healthcare.",
  openGraph: {
    title: "Support Our Mission | Arise Community Support Foundation",
    description: "Connecting caring hearts with lives in need. Empower students, provide free healthcare, and care for seniors in Nigeria.",
    images: ["/arise-logo.jpg"],
  },
}

export default function DonateLayout({ children }: { children: React.ReactNode }) {
  return children
}
