import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function Button({ 
  children, 
  href, 
  onClick, 
  variant = 'primary',
  className = '' 
}: ButtonProps) {
  const baseStyles = 'inline-block px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center transform hover:scale-105'
  
  const variantStyles = {
    primary: 'bg-primary-green text-white hover:opacity-90 shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-neutral-dark border-2 border-neutral-dark hover:bg-neutral-dark hover:text-white hover:border-neutral-dark'
  }

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  )
}

