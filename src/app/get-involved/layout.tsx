import { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arisecsf.org';

export const metadata: Metadata = {
  title: "Get Involved | Volunteer, Partner & Sponsor With Arise CSF",
  description: "Join Arise CSF as a volunteer, donor, or strategic partner. Together, we can sponsor indigent students, provide essential healthcare, and uplift communities.",
  alternates: {
    canonical: `${siteUrl}/get-involved`,
  },
  openGraph: {
    title: "Get Involved with Arise CSF | Volunteer, Partner, Sponsor",
    description: "Join Arise CSF as a volunteer, donor, or strategic partner. Together, we can sponsor indigent students, provide essential healthcare, and uplift communities.",
    url: `${siteUrl}/get-involved`,
    images: [{ url: "/images/diabetes-support/8.jpg", width: 1200, height: 630, alt: "Volunteer with Arise CSF" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Involved with Arise CSF | Volunteer, Partner, Sponsor",
    description: "Join Arise CSF as a volunteer, donor, or strategic partner. Together, we can sponsor indigent students, provide essential healthcare, and uplift communities.",
    images: ["/images/diabetes-support/8.jpg"],
  },
}

export default function GetInvolvedLayout({ children }: { children: React.ReactNode }) {
  return children
}
