import { PageHero } from "@/components/ui/PageHero"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Arise Community Support Foundation collects, uses, and protects your data.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col w-full bg-white pb-24">
      <PageHero 
        title="Privacy Policy"
        subtitle="Last Updated: September 2026"
        backgroundImage="/images/educational-support/2.jpg"
      />
      
      <section className="w-full pt-16 px-6">
        <div className="max-w-3xl mx-auto prose prose-blue text-gray-600">
          <h2>Introduction</h2>
          <p>
            At Arise Community Support Foundation ("we," "our," or "us"), we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and safeguard the information you provide to us when you visit our website, donate, or volunteer.
          </p>
          
          <h2>Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email address, phone number, and mailing address when you:
          </p>
          <ul>
            <li>Sign up for our newsletter</li>
            <li>Register as a volunteer</li>
            <li>Make a donation</li>
            <li>Contact us via our online forms</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul>
            <li>Process your donations and issue tax receipts</li>
            <li>Communicate with you about our programs, events, and impact</li>
            <li>Respond to your inquiries and support requests</li>
            <li>Improve our website and outreach efforts</li>
          </ul>

          <h2>Data Sharing and Security</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We implement appropriate technical and organizational security measures to protect your data from unauthorized access or disclosure.
          </p>

          <h2>Your Rights</h2>
          <p>
            You have the right to access, correct, or request the deletion of your personal information at any time. If you wish to unsubscribe from our communications, you can do so by clicking the "unsubscribe" link in any of our emails or by contacting us directly.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or how we handle your data, please reach out to us at:
            <br />
            <strong>Email:</strong> privacy@arisecsf.org
            <br />
            <strong>Address:</strong> Benin City, Edo State, Nigeria
          </p>

          <div className="mt-12 pt-8 border-t border-gray-100">
            <Link href="/" className="text-[#1E4D97] hover:underline font-medium">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
