import { Children, CSSProperties, MouseEventHandler, ReactNode } from 'react'

interface KeyProps {
  w?: string
  bg?: string
  border?: string
  className?: string
  style?: CSSProperties

  onClick?: MouseEventHandler

  children?: ReactNode
}

const Key = ({ className = '',
  style,
  onClick, children }: KeyProps) => {
  return (
    <div className={`flex-auto rounded ${className}`}
      onClick={onClick} style={style}>
      {children}
    </div >
  )
}

export { Key }