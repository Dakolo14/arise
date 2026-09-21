import { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arisecsf.org';

export const metadata: Metadata = {
  title: "Support & Partner With Us | Arise Community Support Foundation",
  description: "Support Arise Community Support Foundation. Sponsor deserving students, donate healthcare supplies, support community programmes, or contribute to essential running costs.",
  alternates: {
    canonical: `${siteUrl}/donation`,
  },
  openGraph: {
    title: "Support & Partner With Us | Arise Community Support Foundation",
    description: "Every act of support can make a meaningful difference. Partner with Arise CSF to sponsor deserving students, provide healthcare supplies, support community programmes, or assist with operational costs.",
    url: `${siteUrl}/donation`,
    images: [{ url: "/images/diabetes-support/5.png", width: 1200, height: 630, alt: "Support & Partner With Arise CSF" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Support & Partner With Us | Arise Community Support Foundation",
    description: "Every act of support can make a meaningful difference. Partner with Arise CSF to sponsor deserving students, provide healthcare supplies, support community programmes, or assist with operational costs.",
    images: ["/images/diabetes-support/5.png"],
  },
}

const donationFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What programs can I support at Arise Community Support Foundation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Supporters can contribute to Education Scholarships for deserving students, Diabetes & Hypertension medical supplies and screening outreaches, Cultural Awareness & Community Programmes at The Igiogbe, Youth & Leadership Development, Senior Citizens Support, or Administrative & Operational Support to help sustain our running costs."
      }
    },
    {
      "@type": "Question",
      "name": "How do I make a contribution or discuss a partnership?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To protect donor security and coordinate personal support, we do not publish banking details publicly. Interested supporters should contact us directly via WhatsApp at +234 803 466 4190 or email at info@arisecsf.org to discuss their preferred area of support. We then share the relevant contribution or payment details privately."
      }
    },
    {
      "@type": "Question",
      "name": "Is Arise Community Support Foundation an officially registered NGO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Arise Community Support Foundation was established in 2007 and is registered with the Corporate Affairs Commission (CAC) of Nigeria. We have conducted community and healthcare outreaches in collaboration with the Federal Ministry of Health and community institutions."
      }
    },
    {
      "@type": "Question",
      "name": "Can individuals, businesses, and international organisations partner with Arise CSF?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We welcome individuals, families, businesses, and international diaspora organisations interested in supporting any of our focus areas or discussing custom partnership opportunities."
      }
    }
  ]
};

export default function DonationLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(donationFaqSchema) }}
      />
      {children}
    </>
  )
}
