import { ReactNode } from 'react'
import { Key } from '../keyboard/keys/Key'

type SystemKeyProps = {
  className?: string
  children: ReactNode
}

const SystemKey = ({ className, children }: SystemKeyProps) => (
  <Key className={`bg-neutral-100 dark:bg-neutral-800 dark:text-white cursor-default ${className}`}>
    {children}
  </Key>
)

export { SystemKey }