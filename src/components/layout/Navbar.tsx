"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/ui/Logo"
import { SvgUnderline } from "@/components/ui/SvgUnderline"
import { AnimatedButton } from "@/components/ui/AnimatedButton"

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
  
  // Close menu when route changes
  React.useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white backdrop-blur supports-[backdrop-filter]:bg-white/95 border-b border-gray-100 shadow-sm">
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-16 h-24 flex items-center justify-between">
          
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
                href="/get-involved"
                className="px-8 py-2.5 shadow-none hover:shadow-lg"
              >
                Support Us
              </AnimatedButton>
            </div>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex xl:hidden items-center gap-4">
            <AnimatedButton 
              variant="primary"
              href="/get-involved"
              className="px-6 py-2 text-sm shadow-none"
            >
              Support Us
            </AnimatedButton>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 -mr-2 text-gray-600 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#589E47] rounded-md"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          id="mobile-menu"
          className="fixed inset-0 top-24 z-40 bg-white xl:hidden overflow-y-auto animate-in slide-in-from-top-2 duration-200"
        >
          <nav className="container mx-auto px-6 py-8 flex flex-col gap-6">
            <ul className="flex flex-col gap-4 text-lg font-medium text-gray-800">
              {NAV_LINKS.map((link) => (
                <li key={link.href} className="border-b border-gray-100 pb-4">
                  <Link 
                    href={link.href}
                    className={`flex items-center justify-between hover:text-[#1E4D97] transition-colors ${
                      pathname === link.href ? "text-[#1E4D97] font-semibold" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}
