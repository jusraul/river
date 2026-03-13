import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

type Variant = 'default' | 'outline' | 'secondary'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: Variant
  className?: string
  children: React.ReactNode
}

const styles: Record<Variant, string> = {
  default:
    'bg-gradient-to-r from-emerald-700 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-500 focus-visible:ring-2 focus-visible:ring-emerald-600',
  outline:
    'border border-emerald-700 text-emerald-700 bg-white hover:bg-emerald-50 focus-visible:ring-2 focus-visible:ring-emerald-600',
  secondary:
    'bg-teal-600 text-white hover:bg-teal-700 focus-visible:ring-2 focus-visible:ring-teal-600',
}

const PrimaryButton = forwardRef<HTMLButtonElement, Props>(
  ({ asChild, variant = 'default', className, children, ...props }, ref) => {
    const classes = cn(
      'inline-flex items-center justify-center rounded px-5 py-2 font-semibold transition-colors focus:outline-none',
      styles[variant],
      className
    )
    if (asChild) {
      // For use with <Link> or other wrappers
      return (
        <span className={classes} tabIndex={0}>
          {children}
        </span>
      )
    }
    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  }
)
PrimaryButton.displayName = 'PrimaryButton'
export default PrimaryButton
