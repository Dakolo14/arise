import { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arisecsf.org';

export const metadata: Metadata = {
  title: "News & Impact | Grassroots Field Outreaches & Updates",
  description: "Read field stories, project updates, and direct community impact from Arise Community Support Foundation's educational and healthcare programs across Nigeria.",
  alternates: {
    canonical: `${siteUrl}/news-impact`,
  },
  openGraph: {
    title: "News & Community Impact | Arise CSF Nigeria",
    description: "Read field stories, project updates, and direct community impact from Arise Community Support Foundation's educational and healthcare programs across Nigeria.",
    url: `${siteUrl}/news-impact`,
    images: [{ url: "/images/diabetes-support/2.jpg", width: 1200, height: 630, alt: "Arise CSF News & Impact" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "News & Community Impact | Arise CSF Nigeria",
    description: "Read field stories, project updates, and direct community impact from Arise Community Support Foundation's educational and healthcare programs across Nigeria.",
    images: ["/images/diabetes-support/2.jpg"],
  },
}

export default function NewsImpactLayout({ children }: { children: React.ReactNode }) {
  return children
}
