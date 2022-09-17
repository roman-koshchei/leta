import { ReactNode } from 'react'

interface CenterProps {
  className?: string
  children: ReactNode
}

const Center = ({ className = '', children }: CenterProps) => {
  return (
    <div className={`flex flex-col justify-center items-center h-full ${className}`}>
      {children}
    </div>
  )
}

export { Center }