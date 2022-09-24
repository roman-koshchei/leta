import { useUser } from '@supabase/auth-helpers-react'
import Head from 'next/head'
import Link from 'next/link'
import { ReactNode, useEffect, useState } from 'react'
import { Logo } from './Logo'
import { Navlink } from './Navlink'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [darkBrowser, setDarkBrowser] = useState(false)
  const [dark, setDark] = useState(false)
  const { user } = useUser()

  useEffect(() => {
    const isDarkBrowser = globalThis.window
      && globalThis.window.matchMedia('(prefers-color-scheme: dark)').matches
    setDarkBrowser(isDarkBrowser)
    setDark(isDarkBrowser)
  }, [])

  const signOut = async () => {
    const { supa } = await import('../../utils/supa')
    supa.auth.signOut()
  }

  return (
    <>
      <Head>
        <meta name="description" content="Become faster than ever in one click" />
        {/* <link rel='icon' href='/dark-icon.ico' /> */}

        <link rel='icon' href={darkBrowser ? '/img/light-icon.ico' : '/img/dark-icon.ico'} />
      </Head>

      <div className={dark ? 'dark' : ''}>
        <div className='max-w-screen-lg px-6 m-auto h-screen flex flex-col'>

          <nav className='flex-none flex justify-between items-center pt-6 w-full'>
            <Navlink href='/'>
              <Logo />
            </Navlink>

            <Navlink href='/typing'>
              Type
            </Navlink>

            <Navlink href='/create'>
              Create
            </Navlink>

            <Navlink href='/guides'>
              Guides
            </Navlink>

            {user ?
              <div className='cursor-pointer' onClick={signOut}>Sign out</div>
              :
              <Navlink href='/auth'>
                Start
              </Navlink>
            }

          </nav>

          <main className='flex-1'>
            {children}
          </main>

          {/* <footer className='flex-none pb-4 flex justify-between items-center w-full'>
            <div>
              Support us at <a href="https://opencollective.com/paragoda">OpenCollective</a>
            </div>
            <Link href='https://github.com/paragoda/leta'>
              GitHub
            </Link>

          </footer> */}
        </div>
      </div>
    </>
  )
}

export { Layout }