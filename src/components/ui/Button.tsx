import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "blue"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? "span" : "button"
    
    // Base styles
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-arise-green disabled:pointer-events-none disabled:opacity-50"
    
    // Variant styles
    const variants = {
      default: "bg-[var(--color-arise-green)] text-white hover:bg-[#86b52c] shadow-sm",
      blue: "bg-[var(--color-arise-blue)] text-white hover:bg-[#10478a] shadow-sm",
      outline: "border-2 border-[var(--color-arise-blue)] text-[var(--color-arise-blue)] hover:bg-[var(--color-arise-blue)] hover:text-white bg-transparent",
      ghost: "hover:bg-gray-100 hover:text-[var(--color-arise-text)] text-[var(--color-arise-text)]",
      link: "text-[var(--color-arise-blue)] underline-offset-4 hover:underline",
    }
    
    // Size styles
    const sizes = {
      default: "h-11 px-6 py-2",
      sm: "h-9 rounded-md px-4 text-xs",
      lg: "h-14 rounded-xl px-8 text-base",
      icon: "h-11 w-11",
    }
    
    return (
      <Comp
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
