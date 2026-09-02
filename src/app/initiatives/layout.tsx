import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Initiatives",
  description: "Discover our core programs: Education Scholarships, Diabetes Support, Igiogbe Center, Youth Leadership, and Senior Citizens Care.",
}

export default function InitiativesLayout({ children }: { children: React.ReactNode }) {
  return children
}
