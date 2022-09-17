import { ReactNode } from 'react'

interface RowProps {
  className?: string
  children: ReactNode
}

const Row = ({ className, children }: RowProps) => {
  return (
    <div className={`flex flex-auto gap-3 md:gap-5 h-16 ${className}`}>
      {children}
    </div>
  )
}

export { Row }