import React, { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div
      className={`bg-[#e3edf8] bg-opacity-80 backdrop-blur-md border border-[#c3d6e9] rounded-2xl p-4 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}
