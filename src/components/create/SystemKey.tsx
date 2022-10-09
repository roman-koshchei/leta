import { ReactNode } from 'react'
import { Key } from '../keyboard/keys/Key'

type SystemKeyProps = {
  className?: string
  children: ReactNode
}

const SystemKey = ({ className, children }: SystemKeyProps) => {
  return (
    <Key className={`bg-neutral-100 flex justify-center items-center ${className}`}>
      {children}
    </Key>
  )
}

export { SystemKey }