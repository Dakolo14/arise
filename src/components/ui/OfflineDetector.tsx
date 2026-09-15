"use client"

import { useState, useEffect } from "react"
import { WifiOff, Wifi, RefreshCw, X } from "lucide-react"
import Link from "next/link"

export function OfflineDetector() {
  const [isOffline, setIsOffline] = useState(false)
  const [wasOffline, setWasOffline] = useState(false)
  const [isChecking, setIsChecking] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    // Set initial state
    setIsOffline(!navigator.onLine)

    const handleOnline = () => {
      setIsOffline(false)
      setWasOffline(true)
      setDismissed(false)
      // Auto-hide the "back online" confirmation toast after 4s
      const timer = setTimeout(() => {
        setWasOffline(false)
      }, 4000)
      return () => clearTimeout(timer)
    }

    const handleOffline = () => {
      setIsOffline(true)
      setWasOffline(false)
      setDismissed(false)
    }

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  const checkConnection = async () => {
    setIsChecking(true)
    try {
      // Ping a lightweight local asset with cache-busting
      const response = await fetch(`/favicon/favicon.ico?_t=${Date.now()}`, {
        method: "HEAD",
        cache: "no-store",
      })
      if (response.ok) {
        setIsOffline(false)
        setWasOffline(true)
        setTimeout(() => setWasOffline(false), 3500)
      } else {
        setIsOffline(true)
      }
    } catch {
      setIsOffline(true)
    } finally {
      setIsChecking(false)
    }
  }

  // Show "Back Online" alert
  if (wasOffline && !isOffline) {
    return (
      <div 
        role="status" 
        aria-live="polite"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-emerald-600 text-white px-5 py-3 rounded-2xl shadow-xl shadow-emerald-950/20 text-sm font-medium animate-in fade-in slide-in-from-bottom-4 duration-300"
      >
        <Wifi className="w-5 h-5 shrink-0" />
        <span>You are back online!</span>
      </div>
    )
  }

  // Show "Offline" alert
  if (isOffline && !dismissed) {
    return (
      <div 
        role="alert" 
        aria-live="assertive"
        className="fixed bottom-6 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 bg-[#0f172a] text-white p-4 rounded-2xl shadow-2xl border border-gray-700/60 animate-in fade-in slide-in-from-bottom-4 duration-300"
      >
        <div className="flex items-start gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
            <WifiOff className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-semibold text-white">No Internet Connection</h4>
            <p className="text-xs text-gray-300 font-light mt-0.5 leading-relaxed">
              You are currently browsing offline. Some real-time updates may be unavailable.
            </p>
            <div className="flex items-center gap-3 mt-3">
              <button
                type="button"
                onClick={checkConnection}
                disabled={isChecking}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-colors disabled:opacity-60 cursor-pointer"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isChecking ? "animate-spin" : ""}`} />
                {isChecking ? "Checking..." : "Retry"}
              </button>
              <Link
                href="/offline"
                className="text-xs text-blue-300 hover:text-blue-200 underline font-light"
              >
                Offline info
              </Link>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            aria-label="Dismiss offline banner"
            className="text-gray-400 hover:text-white transition-colors p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    )
  }

  return null
}
