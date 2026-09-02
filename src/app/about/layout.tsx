import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the history, vision, and core values driving the Arise Community Support Foundation.",
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
