"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { AnimatedButton } from "@/components/ui/AnimatedButton"

const Player = dynamic(() => import("@lottiefiles/react-lottie-player").then(mod => mod.Player), { ssr: false })

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-white px-6 text-center pt-24 pb-16">
      {/* Lottie Animation */}
      <div className="w-full max-w-[250px] md:max-w-[350px] h-[200px] md:h-[250px] flex items-center justify-center mb-4">
        <Player
          autoplay
          loop
          src="/animations/404.json"
          style={{ height: '100%', width: '100%' }}
        />
      </div>

      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-800 mb-6 mt-4">
        Oops! You seem to be lost.
      </h1>
      
      <p className="text-lg text-gray-500 font-light max-w-lg mb-10 leading-relaxed">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let&apos;s get you back on track!
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link href="/" className="px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full font-medium transition-colors">
          Back to Home
        </Link>
        <AnimatedButton href="/donation" hasArrow className="px-8 py-4">
          Support Our Cause
        </AnimatedButton>
      </div>
    </div>
  )
}
