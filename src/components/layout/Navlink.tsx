import Link from 'next/link'
import { ReactNode } from 'react'

interface NavlinkProps {
  href: string
  children: ReactNode
}

const Navlink = ({ href, children }: NavlinkProps) => {
  return (
    <Link href={href}>
      <div className='cursor-pointer'>
        {children}
      </div>
    </Link>
  )
}

export { Navlink }