import { ReactNode } from 'react'

interface KeyboardProps {
  className?: string
  gap?: string
  children: ReactNode
}

const Keyboard = ({ className, gap, children }: KeyboardProps) => {
  return (
    <div className='aspect-[282/52] md:aspect-[282/68] w-[70rem] md:w-[106.25rem]
    md:self-center'>
      <div className='flex flex-col gap-3 md:gap-5 h-full'>
        {children}
      </div>
    </div>
  )
}

export { Keyboard }