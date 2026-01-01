import { ReactNode, CSSProperties } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  style?: CSSProperties
}

export default function Card({ children, className = '', hover = true, style }: CardProps) {
  const baseStyles = 'bg-white p-8 rounded-lg border border-gray-200'
  const hoverStyles = hover ? 'hover:shadow-lg transition-shadow duration-300' : ''
  const combinedClassName = `${baseStyles} ${hoverStyles} ${className}`

  return (
    <div className={combinedClassName} style={style}>
      {children}
    </div>
  )
}

