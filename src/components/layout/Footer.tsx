"use client"

import Image from "next/image"

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
              width={60}
              height={60}
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
          { label: 'fb', href: '#' },
          { label: 'in', href: '#' },
          { label: 'ig', href: '#' },
          { label: 'yt', href: '#' },
          { label: 'tk', href: '#' },
        ].map((s) => (
          <a key={s.label} href={s.href} className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors">
            <span className="text-white text-xs font-bold uppercase">{s.label}</span>
          </a>
        ))}
      </div>
      
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
    </footer>
  )
}
