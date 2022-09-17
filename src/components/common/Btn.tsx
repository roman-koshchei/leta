import { MouseEventHandler, ReactNode } from 'react'

interface BtnProps {
  onClick?: MouseEventHandler
  children?: ReactNode
}

const Btn = ({ onClick, children }: BtnProps) => {
  return (
    <div onClick={onClick} className='
    w-full text-lg md:text-xl rounded-md py-5 px-7
     text-white dark:text-neutral-900 bg-neutral-900 dark:bg-white
     hover:bg-neutral-800 dark:hover:bg-neutral-100 '
    >
      {children}
    </div>
  )
}

export { Btn }