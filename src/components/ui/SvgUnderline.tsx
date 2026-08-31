import React from 'react';

interface SvgUnderlineProps {
  className?: string;
}

export function SvgUnderline({ className = '' }: SvgUnderlineProps) {
  return (
    <svg
      className={`absolute left-0 -bottom-1 w-full h-3 z-0 pointer-events-none ${className}`}
      viewBox="0 0 200 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M2,8 C40,4 120,4 198,8"
        stroke="#7EB8D4"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M5,12 C50,9 130,9 195,12"
        stroke="#7EB8D4"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
