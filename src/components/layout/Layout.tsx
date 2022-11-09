import Head from 'next/head'
import { ReactNode, useEffect, useState } from 'react'
import { Navbar } from './Navbar'

type LayoutProps = { children: ReactNode }

const Layout = ({ children }: LayoutProps) => {
  const [darkBrowser, setDarkBrowser] = useState(false)
  const [dark, setDark] = useState(false)

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
        <link rel='icon' href={darkBrowser ? '/img/light-icon.ico' : '/img/dark-icon.ico'} />
      </Head>

      <div className={dark ? 'dark' : ''}>
        <div className='overflow-y-auto overflow-x-hidden
        bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white 
        scrollbar-thin scrollbar-thumb-neutral-900 scrollbar-track-white
        dark:scrollbar-thumb-white dark:scrollbar-track-neutral-900
        '>

          <div className='max-w-screen-xl px-6 m-auto h-screen flex flex-col'>

            <Navbar dark={{ val: dark, set: setDark }} />

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
      </div>
    </>
  )
}

export { Layout }