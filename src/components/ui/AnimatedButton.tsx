import React from 'react'
import Link from 'next/link'

type Variant = 'primary' | 'secondary' | 'glass' | 'blue-glass'

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: Variant
  hasArrow?: boolean
  className?: string
  href?: string
}

export function AnimatedButton({ children, variant = 'primary', hasArrow = false, className = '', href, ...props }: AnimatedButtonProps) {
  const baseClasses = "relative overflow-hidden group inline-flex items-center gap-3 rounded-full font-medium transition-all shadow-xl hover:scale-105"
  
  // Define default colors
  let bgClass = ''
  let textClass = ''
  let hoverTextClass = ''
  let fillClass = ''
  let circleBorderClass = ''
  let hoverCircleBorderClass = ''

  if (variant === 'primary') {
    // Green bg -> White bg
    bgClass = 'bg-[#1E4D97] border border-[#1E4D97]'
    textClass = 'text-white'
    hoverTextClass = 'group-hover:text-[#1E4D97]'
    fillClass = 'bg-white'
    circleBorderClass = 'border-white/40'
    hoverCircleBorderClass = 'group-hover:border-[#1E4D97]/40'
  } else if (variant === 'secondary') {
    // White/Light Green bg -> Green bg
    bgClass = 'bg-[#E8EFF8] border border-transparent group-hover:border-[#1E4D97]'
    textClass = 'text-[#1E4D97]'
    hoverTextClass = 'group-hover:text-white'
    fillClass = 'bg-[#1E4D97]'
    circleBorderClass = 'border-[#1E4D97]/30'
    hoverCircleBorderClass = 'group-hover:border-white/30'
  } else if (variant === 'glass') {
    // Glass bg -> White bg
    bgClass = 'bg-[#E8EFF8]/20 backdrop-blur-md border border-white/20 group-hover:border-[#1E4D97]'
    textClass = 'text-white'
    hoverTextClass = 'group-hover:text-[#1E4D97]'
    fillClass = 'bg-white'
    circleBorderClass = 'border-white/40'
    hoverCircleBorderClass = 'group-hover:border-[#1E4D97]/40'
  } else if (variant === 'blue-glass') {
    // Blue glass bg -> White bg
    bgClass = 'bg-[#1E4D97]/40 backdrop-blur-md border border-[#1E4D97]/50 group-hover:border-[#1E4D97]'
    textClass = 'text-white'
    hoverTextClass = 'group-hover:text-[#1E4D97]'
    fillClass = 'bg-white'
    circleBorderClass = 'border-white/40'
    hoverCircleBorderClass = 'group-hover:border-[#1E4D97]/40'
  }

  const content = (
    <>
      {/* Fill sweep element */}
      <div className={`absolute inset-0 w-full h-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0 ${fillClass}`} />
      
      {/* Content wrapper */}
      <span className={`relative z-10 flex items-center gap-3 transition-colors duration-500 ${textClass} ${hoverTextClass}`}>
        {hasArrow && (
          <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full border transition-all duration-500 transform group-hover:translate-x-1 ${circleBorderClass} ${hoverCircleBorderClass}`}>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        )}
        <span className="transform transition-transform duration-500 group-hover:translate-x-0.5">{children}</span>
      </span>
    </>
  )

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${bgClass} ${className}`}>
        {content}
      </Link>
    )
  }

  return (
    <button className={`${baseClasses} ${bgClass} ${className}`} {...props}>
      {content}
    </button>
  )
}
