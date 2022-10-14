import { useUser } from '@supabase/auth-helpers-react'
import Link from 'next/link'
import { ReactNode } from 'react'
import { Logo } from './Logo'

type NavlinkProps = {
  href: string
  children: ReactNode
}

const Navlink = ({ href, children }: NavlinkProps) => (
  <Link href={href}>
    <div className='cursor-pointer'>{children}</div>
  </Link>
)


const Navbar = () => {
  const { user } = useUser()

  const signOut = async () => {
    const { supa } = await import('../../utils/supa')
    supa.auth.signOut()
  }

  return (
    <nav className='flex-none flex justify-between items-center py-5'>
      <Navlink href='/'><Logo /></Navlink>

      {/* <Navlink href='/typing'>Type</Navlink> */}

      <Navlink href='/create'>Create</Navlink>

      {/* <Navlink href='/guides'>Guides</Navlink> */}

      {user
        ? <div className='cursor-pointer' onClick={signOut}>Sign out</div>
        : <Navlink href='/auth'>Start</Navlink>
      }
    </nav>
  )
}

export { Navbar }