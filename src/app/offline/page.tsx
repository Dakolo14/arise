"use client"

import { useState } from "react"
import Link from "next/link"
import { WifiOff, RefreshCw, Phone, Mail, MapPin, ArrowLeft, CheckCircle2 } from "lucide-react"

export default function OfflinePage() {
  const [isChecking, setIsChecking] = useState(false)
  const [statusMessage, setStatusMessage] = useState<string | null>(null)

  const handleRetry = async () => {
    setIsChecking(true)
    setStatusMessage(null)
    try {
      const res = await fetch(`/favicon/favicon.ico?_t=${Date.now()}`, {
        method: "HEAD",
        cache: "no-store",
      })
      if (res.ok) {
        setStatusMessage("Connection restored! Redirecting to home...")
        setTimeout(() => {
          window.location.href = "/"
        }, 1200)
      } else {
        setStatusMessage("Still offline. Please check your network cables or Wi-Fi.")
      }
    } catch {
      setStatusMessage("Still offline. Please check your network connection.")
    } finally {
      setIsChecking(false)
    }
  }

  return (
    <div className="min-h-[80vh] bg-[#fcfcfd] text-[#111827] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="w-full max-w-2xl mx-auto text-center flex flex-col items-center">
        
        {/* Offline Badge */}
        <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-amber-50 text-amber-600 shadow-sm border border-amber-200/70 mb-8 animate-in fade-in zoom-in duration-500">
          <WifiOff className="w-10 h-10 sm:w-12 sm:h-12" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#0f172a] mb-4">
          No Internet Connection
        </h1>

        <p className="text-base sm:text-lg text-gray-600 font-light max-w-lg mx-auto leading-relaxed mb-8">
          It looks like your device is disconnected from the internet. Please check your network settings and try again.
        </p>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 w-full sm:w-auto">
          <button
            type="button"
            onClick={handleRetry}
            disabled={isChecking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#1E4D97] hover:bg-[#163a72] text-white font-medium text-sm transition-colors shadow-sm disabled:opacity-60 cursor-pointer"
          >
            <RefreshCw className={`w-4 h-4 ${isChecking ? "animate-spin" : ""}`} />
            {isChecking ? "Checking Connection..." : "Try Reconnecting"}
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        {statusMessage && (
          <div className="mb-8 p-3.5 rounded-xl bg-blue-50 border border-blue-100 text-[#1E4D97] text-sm font-medium animate-in fade-in">
            {statusMessage}
          </div>
        )}

        {/* Offline Contact Card */}
        <div className="w-full text-left bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
          <h2 className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-4 text-center sm:text-left">
            Need Immediate Assistance? Contact Us Directly
          </h2>
          <p className="text-sm text-gray-600 font-light mb-6">
            If you need urgent support regarding our community healthcare outreach, diabetes care, or educational scholarship programs, you can reach our foundation coordinators directly via telephone:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
              <Phone className="w-4 h-4 text-[#1E4D97] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs text-gray-500 font-normal block">Direct Call & WhatsApp</span>
                <a href="tel:+2348033443823" className="font-semibold text-gray-900 hover:text-[#1E4D97] transition-colors">
                  +234 803 344 3823
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
              <Phone className="w-4 h-4 text-[#1E4D97] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs text-gray-500 font-normal block">Support Line</span>
                <a href="tel:+2348023385227" className="font-semibold text-gray-900 hover:text-[#1E4D97] transition-colors">
                  +234 802 338 5227
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
              <Mail className="w-4 h-4 text-[#1E4D97] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs text-gray-500 font-normal block">Official Email</span>
                <a href="mailto:info@arisecsf.org" className="font-semibold text-gray-900 hover:text-[#1E4D97] transition-colors">
                  info@arisecsf.org
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
              <MapPin className="w-4 h-4 text-[#1E4D97] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs text-gray-500 font-normal block">Headquarters</span>
                <span className="font-medium text-gray-800 text-xs leading-snug">
                  Benin City, Edo State, Nigeria
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
