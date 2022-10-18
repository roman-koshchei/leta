import { ReactNode } from 'react'

interface RowProps {
  className?: string
  children: ReactNode
}

const Row = ({ className = 'gap-3 md:gap-5', children }: RowProps) => {
  return (
    <div className={`flex flex-auto h-16 ${className}`}>
      {children}
    </div>
  )
}

export { Row }