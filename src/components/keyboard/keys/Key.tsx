import { CSSProperties, forwardRef, MouseEventHandler, ReactNode, Ref } from 'react'

interface KeyProps {
  className?: string
  onClick?: MouseEventHandler

  children?: ReactNode
}

const Key = ({ className = '', onClick, children }: KeyProps) => {
  return (
    <div className={`flex-auto rounded ${className}`} onClick={onClick}>
      {children}
    </div >
  )
}

export { Key }