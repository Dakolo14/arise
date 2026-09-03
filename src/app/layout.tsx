import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/ui/BackToTop";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://arisecsf.org'),
  title: {
    default: "Arise Community Support Foundation",
    template: "%s | Arise CSF"
  },
  description: "Connecting caring hearts with lives in need through education, healthcare, youth leadership, and elderly support.",
  keywords: ["Arise CSF", "Community Support", "Nigeria NGO", "Education Scholarship", "Diabetes Support", "Youth Leadership", "Igiogbe Center"],
  authors: [{ name: "Arise Community Support Foundation" }],
  creator: "Arise CSF",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://arisecsf.org",
    siteName: "Arise Community Support Foundation",
    title: "Arise Community Support Foundation",
    description: "Connecting caring hearts with lives in need through education, healthcare, youth leadership, and elderly support.",
    images: [
      {
        url: "/arise-logo.jpg",
        width: 800,
        height: 600,
        alt: "Arise Community Support Foundation Logo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arise Community Support Foundation",
    description: "Connecting caring hearts with lives in need through education, healthcare, youth leadership, and elderly support.",
    images: ["/arise-logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans text-gray-800">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              "name": "Arise Community Support Foundation",
              "url": "https://arisecsf.org",
              "logo": "https://arisecsf.org/arise-logo.jpg",
              "description": "Connecting caring hearts with lives in need through education, healthcare, youth leadership, and elderly support.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Benin City",
                "addressRegion": "Edo State",
                "addressCountry": "NG"
              }
            })
          }}
        />
        <Navbar />
        <main className="flex-1 w-full max-w-[1600px] mx-auto">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
