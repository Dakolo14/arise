"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronRight, Heart, Mail, MapPin } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Logo } from "@/components/ui/Logo"
import { SvgUnderline } from "@/components/ui/SvgUnderline"
import { AnimatedButton } from "@/components/ui/AnimatedButton"
import { useDonationModal } from "@/context/DonationContext"

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Initiatives", href: "/initiatives" },
  { name: "Get Involved", href: "/get-involved" },
  { name: "News & Impact", href: "/news-impact" },
  { name: "Contact Us", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()
  const { openDonationModal } = useDonationModal()
  
  // Close menu when route changes
  React.useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100/80">
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-16 h-20 md:h-24 flex items-center justify-between">
          
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-8 2xl:gap-10">
            <ul className="flex items-center gap-8 text-[15px] font-medium text-gray-700">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href} className="relative group">
                    <Link 
                      href={link.href}
                      className={`flex items-center gap-1 py-2 hover:text-[#1E4D97] transition-colors ${
                        isActive ? "text-[#1E4D97] font-semibold" : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                    {isActive && (
                      <SvgUnderline className="text-[#7EB8D4] w-[120%] -left-[10%] bottom-0 opacity-80" />
                    )}
                  </li>
                )
              })}
            </ul>
            <div className="flex items-center ml-2">
              <AnimatedButton 
                variant="primary"
                onClick={() => openDonationModal()}
                className="px-8 py-2.5 shadow-none hover:shadow-lg cursor-pointer"
              >
                Support Us
              </AnimatedButton>
            </div>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex xl:hidden items-center gap-3">
            <AnimatedButton 
              variant="primary"
              onClick={() => openDonationModal()}
              className="px-4 sm:px-6 py-2 text-xs sm:text-sm shadow-none cursor-pointer"
            >
              Support Us
            </AnimatedButton>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 -mr-1 text-gray-700 hover:text-[#1E4D97] hover:bg-gray-100 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4D97]"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 top-20 md:top-24 z-40 bg-white xl:hidden flex flex-col justify-between overflow-y-auto"
          >
            <div className="px-6 py-6 flex flex-col gap-6">
              <nav aria-label="Mobile Navigation">
                <ul className="flex flex-col gap-2">
                  {NAV_LINKS.map((link, idx) => {
                    const isActive = pathname === link.href
                    return (
                      <motion.li 
                        key={link.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.04, duration: 0.2 }}
                      >
                        <Link 
                          href={link.href}
                          className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-medium transition-all ${
                            isActive 
                              ? "bg-[#1E4D97]/10 text-[#1E4D97] font-semibold" 
                              : "text-gray-800 hover:bg-gray-50 hover:text-[#1E4D97]"
                          }`}
                        >
                          <span>{link.name}</span>
                          <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? "text-[#1E4D97] translate-x-0.5" : "text-gray-400"}`} />
                        </Link>
                      </motion.li>
                    )
                  })}
                </ul>
              </nav>

              {/* Call to Action Card in Drawer */}
              <div className="p-5 rounded-3xl bg-gradient-to-br from-[#E8EFF8] to-white border border-[#1E4D97]/15 shadow-sm mt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#1E4D97] uppercase tracking-wider mb-2">
                  <Heart className="w-3.5 h-3.5 text-[#589E47]" />
                  <span>Make a Difference</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Every contribution empowers young leaders, sponsors scholarships, and provides free healthcare in Nigeria.
                </p>
                <AnimatedButton 
                  variant="primary" 
                  onClick={() => {
                    setIsOpen(false)
                    openDonationModal()
                  }}
                  className="w-full justify-center py-3 text-sm shadow-md cursor-pointer"
                >
                  Donate & Support Us
                </AnimatedButton>
              </div>
            </div>

            {/* Quick Footer in Mobile Drawer */}
            <div className="px-6 py-6 border-t border-gray-100 bg-gray-50/70 text-xs text-gray-500 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#1E4D97]" />
                <span>Benin City, Edo State, Nigeria</span>
              </div>
              <p className="text-[11px] text-gray-400 mt-1">
                &copy; {new Date().getFullYear()} Arise Community Support Foundation.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
