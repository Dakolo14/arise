"use client"

import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full bg-[#1E4D97] relative pt-24 pb-12 mt-32 text-white">
      {/* Silhouette image */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-[120px] w-full max-w-[480px] h-[120px] z-10 flex justify-center items-end pointer-events-none">
        <Image
          src="/footer-silhoutte.png"
          alt="Community Silhouette"
          width={480}
          height={120}
          className="w-auto h-full object-contain"
        />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* Column 1: Logo & Tagline */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/arise-logo.jpg"
              alt="Arise CSF"
              width={80}
              height={80}
              className="rounded-xl bg-white p-1"
            />
          </div>
          <p className="text-sm text-gray-300 font-light max-w-xs leading-relaxed">
            Connecting caring hearts with lives in need through education, healthcare, culture, leadership, and community support.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-6">
          <h4 className="text-[#7EB8D4] font-medium text-lg">Quick Links</h4>
          <ul className="flex flex-col gap-4 text-sm font-light text-gray-200">
            <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="/initiatives" className="hover:text-white transition-colors">Our Initiatives</a></li>
            <li><a href="/get-involved" className="hover:text-white transition-colors">Get Involved</a></li>
            <li><a href="/news-impact" className="hover:text-white transition-colors">News & Impact</a></li>
          </ul>
        </div>

        {/* Column 3: Our Initiatives */}
        <div className="flex flex-col gap-6">
          <h4 className="text-[#7EB8D4] font-medium text-lg">Our Initiatives</h4>
          <ul className="flex flex-col gap-4 text-sm font-light text-gray-200">
            <li><a href="/initiatives" className="hover:text-white transition-colors">Education Scholarship</a></li>
            <li><a href="/initiatives" className="hover:text-white transition-colors">Diabetes Support</a></li>
            <li><a href="/initiatives" className="hover:text-white transition-colors">Igiogbe Center</a></li>
            <li><a href="/initiatives" className="hover:text-white transition-colors">Youth & Leadership</a></li>
            <li><a href="/initiatives" className="hover:text-white transition-colors">Senior Citizens Support</a></li>
          </ul>
        </div>

        {/* Column 4: Get In Touch */}
        <div className="flex flex-col gap-6">
          <h4 className="text-[#7EB8D4] font-medium text-lg">Get In Touch</h4>
          <ul className="flex flex-col gap-6 text-sm font-light text-gray-200">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-white mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span>The Igiogbe, 10 Airport Road, Benin City, Edo State, Nigeria</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-white mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
              <span>+234 803 466 4190</span>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span>info@AriseCSF.org</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Social Icons */}
      <div className="w-full flex justify-center gap-4 mt-16 pt-8 border-t border-white/10">
        {[
          { label: 'Facebook', href: '#', svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
          { label: 'LinkedIn', href: '#', svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
          { label: 'Instagram', href: '#', svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
          { label: 'YouTube', href: '#', svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
          { label: 'Twitter', href: '#', svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.005 4.15H5.059z"/></svg> },
        ].map((s, i) => (
          <a key={i} href={s.href} aria-label={s.label} className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40 transition-colors">
            {s.svg}
          </a>
        ))}
      </div>
      
      {/* Sub-footer */}
      <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-16 mt-16 pt-8 pb-4 flex flex-col md:flex-row items-center justify-between text-sm text-[#E8EFF8]/70">
        <p>© {new Date().getFullYear()} Arise Community Support Foundation. All rights reserved.</p>
        <div className="flex items-center gap-6 mt-4 md:mt-0">
          <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
    </footer>
  )
}
