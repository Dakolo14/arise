import { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arisecsf.org';

export const metadata: Metadata = {
  title: "Donate & Support | Fund Healthcare, Scholarships & Elderly Welfare",
  description: "Donate to Arise CSF to fund scholarships, free diabetes testing, elderly care packages, and youth training. Give online or via secure Nigerian bank transfer.",
  alternates: {
    canonical: `${siteUrl}/donation`,
  },
  openGraph: {
    title: "Support Our Mission | Arise Community Support Foundation",
    description: "Every act of kindness creates hope. Donate to sponsor indigent students, provide free healthcare, and care for seniors in Nigeria.",
    url: `${siteUrl}/donation`,
    images: [{ url: "/images/diabetes-support/5.png", width: 1200, height: 630, alt: "Support Arise CSF" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Support Our Mission | Arise Community Support Foundation",
    description: "Every act of kindness creates hope. Donate to sponsor indigent students, provide free healthcare, and care for seniors in Nigeria.",
    images: ["/images/diabetes-support/5.png"],
  },
}

const donationFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What programs do donations to Arise CSF support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your donations directly fund secondary and university education scholarships for indigent students, free diabetes screening and medication outreaches, vocational training at the Igiogbe Youth Center, and healthcare support for senior citizens in Nigeria."
      }
    },
    {
      "@type": "Question",
      "name": "Can I donate to Arise CSF via Nigerian bank transfer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Arise Community Support Foundation accepts direct bank deposits and internet transfers into our official corporate bank accounts with First Bank of Nigeria and Zenith Bank."
      }
    },
    {
      "@type": "Question",
      "name": "Is Arise Community Support Foundation a verified NGO in Nigeria?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Arise Community Support Foundation was established in 2007 and is registered with the Corporate Affairs Commission (CAC) of Nigeria. We have conducted medical outreaches in official partnership with the Federal Ministry of Health and Edo State institutions."
      }
    },
    {
      "@type": "Question",
      "name": "Can donors outside Nigeria contribute?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. International donors and members of the Nigerian diaspora can support our cause via international wire transfer, online donation payment gateways, or by contacting our team directly at info@arisecsf.org."
      }
    },
    {
      "@type": "Question",
      "name": "How does Arise CSF ensure transparent financial stewardship?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We maintain meticulous accounting, project-by-project documentation, photo receipts of educational materials and medical shipments, and publish regular impact stories showing exact beneficiary outcomes."
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
