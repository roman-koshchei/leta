import { useUser } from '@supabase/auth-helpers-react'
import Link from 'next/link'
import { ReactNode } from 'react'
import { OutlinedButton, TextButton } from '../common/Button'
import { Logo } from './Logo'

type NavlinkProps = {
  href: string
  children: ReactNode
}


const Navbar = () => {
  const { user } = useUser()

  const signOut = async () => {
    const { supa } = await import('../../utils/supa')
    supa.auth.signOut()
  }

  return (
    <nav className='flex-none flex justify-between items-center py-5'>
      <Link href='/'>
        <div className='cursor-pointer'>
          <Logo />
        </div>
      </Link>

      {/* <Navlink href='/typing'>Type</Navlink> */}

      <Link href='/create'>
        <TextButton>Create</TextButton>
      </Link>

      {/* <Navlink href='/guides'>Guides</Navlink> */}

      {user
        ? <TextButton onClick={signOut}>Sign out</TextButton>
        : <Link href='/auth'>
          <TextButton>Start</TextButton>
        </Link>
      }
    </nav>
  )
}

export { Navbar }