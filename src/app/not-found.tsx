import Link from "next/link"
import { Compass, Home, Heart, BookOpen, User, Mail, ArrowRight } from "lucide-react"

export default function NotFound() {
  const quickLinks = [
    { title: "Home", href: "/", icon: Home, desc: "Return to our main homepage" },
    { title: "Initiatives", href: "/initiatives", icon: BookOpen, desc: "Explore education, diabetes & youth programs" },
    { title: "Donate", href: "/donation", icon: Heart, desc: "Support grassroots empowerment in Nigeria" },
    { title: "About Us", href: "/about", icon: Compass, desc: "Learn about our mission, vision, and team" },
    { title: "Rex Osagiede", href: "/rex-osagiede", icon: User, desc: "Read about our founder's 19-year journey" },
    { title: "Contact Us", href: "/contact", icon: Mail, desc: "Get in touch with our team" },
  ]

  return (
    <div className="min-h-[85vh] bg-[#fcfcfd] text-[#111827] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="w-full max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Visual Badge / Number */}
        <div className="inline-flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-blue-50 text-[#1E4D97] font-semibold text-4xl sm:text-5xl shadow-sm border border-blue-100/80 mb-8 animate-in fade-in zoom-in duration-500">
          404
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#0f172a] mb-4">
          Page Not Found
        </h1>

        <p className="text-base sm:text-lg text-gray-600 font-light max-w-xl mx-auto leading-relaxed mb-10">
          The page you are looking for might have been moved, renamed, or is temporarily unavailable. Let&apos;s guide you back to where you want to go.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1E4D97] hover:bg-[#163a72] text-white font-medium text-sm transition-colors shadow-sm"
          >
            <Home className="w-4 h-4" />
            Back to Homepage
          </Link>
          <Link
            href="/donation"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm transition-colors shadow-sm"
          >
            <Heart className="w-4 h-4" />
            Support Our Mission
          </Link>
        </div>

        {/* Helpful Navigation Hub */}
        <div className="w-full text-left pt-10 border-t border-gray-200">
          <h2 className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-6 text-center">
            Popular Destinations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {quickLinks.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-200/70 hover:border-[#1E4D97]/30 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-gray-50 group-hover:bg-blue-50 text-gray-600 group-hover:text-[#1E4D97] flex items-center justify-center shrink-0 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-gray-900 group-hover:text-[#1E4D97] transition-colors">
                        {item.title}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#1E4D97] group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <p className="text-xs text-gray-500 font-light mt-1 line-clamp-1">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}
