import { supabaseClient, supabaseServerClient, User } from '@supabase/supabase-auth-helpers/nextjs'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import Head from 'next/head'
import Image from 'next/image'
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

  return (
    <>
      <Head>
        <meta name="description" content="Become faster than ever in one click" />
        {/* <link rel='icon' href='/dark-icon.ico' /> */}


        {darkBrowser
          ? <link rel='icon' href='/img/light-icon.ico' />
          : <link rel='icon' href='/img/dark-icon.ico' />
        }
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
              <div className='cursor-pointer' onClick={() => supabaseClient.auth.signOut()}>Sign out</div>
              :
              <Navlink href='/auth'>
                Start
              </Navlink>
            }

          </nav>

          <main className='flex-1'>
            {children}
          </main>

          <footer className='flex-none h-6'>

          </footer>
        </div>
      </div>
    </>
  )
}

export { Layout }