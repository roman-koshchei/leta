import { type } from 'os'
import { MouseEventHandler, ReactNode } from 'react'
type ButtonProps = {
  className?: string          // additional styles
  // disabled?: boolean

  onClick?: MouseEventHandler
  children?: ReactNode
}

const sharedButtonStyle = 'text-lg rounded select-none'

//px-7
const FilledButton = ({ className = 'py-3 px-5', onClick, children }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`${className} ${sharedButtonStyle}
     text-white bg-neutral-900 hover:bg-neutral-800
     dark:text-neutral-900 dark:bg-white dark:hover:bg-neutral-100 
     `}
    >
      {children}
    </button>
  )
}

//px-7
const OutlinedButton = ({ className = 'py-3 px-5', onClick, children }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`${className} ${sharedButtonStyle} border-2
     text-neutral-900 bg-white hover:bg-neutral-100 border-neutral-900
     dark:text-white dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-white
     `}
    >
      {children}
    </button>
  )
}

const TextButton = ({ className = 'py-3 px-5', onClick, children }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`${className} ${sharedButtonStyle}
      text-neutral-900 hover:bg-neutral-100
      dark:text-white dark:hover:bg-neutral-800
    `}
    >
      {children}
    </button>
  )
}

export { OutlinedButton, FilledButton, TextButton, sharedButtonStyle }
export type { ButtonProps }