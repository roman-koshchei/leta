import Head from 'next/head'
import { ReactNode, useEffect, useState } from 'react'
import { Navbar } from './Navbar'

interface LayoutProps {
  children: ReactNode
}

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
        {/* <link rel='icon' href='/dark-icon.ico' /> */}

        <link rel='icon' href={darkBrowser ? '/img/light-icon.ico' : '/img/dark-icon.ico'} />
      </Head>

      <div className={dark ? 'dark' : ''}>
        <div className='max-w-screen-xl px-6 m-auto h-screen flex flex-col'>

          <Navbar />

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