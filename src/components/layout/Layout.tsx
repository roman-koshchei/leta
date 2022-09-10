import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode, useState } from 'react'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {

  const isDarkPrefered = globalThis.window
    && globalThis.window.matchMedia('(prefers-color-scheme: dark)').matches

  const [dark, setDark] = useState(isDarkPrefered)

  return (
    <>
      <Head>
        <meta name="description" content="Become faster than ever in one click" />
        {/* <link rel='icon' href='/dark-icon.ico' /> */}


        {isDarkPrefered
          ? <link rel='icon' href='/light-icon.ico' />
          : <link rel='icon' href='/dark-icon.ico' />
        }
      </Head>

      <div className={`${dark ? 'dark' : undefined}
      bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white`}>
        <div className=' max-w-screen-lg m-auto'>

          <nav>
            <Link href='/'>
              <Image src={`/${isDarkPrefered ? 'light' : 'dark'}-logo.svg`}
                width={40} height={40} quality={100} />
            </Link>

            <div>

            </div>
          </nav>

          <main>
            {children}
          </main>
        </div>
      </div>
    </>
  )
}

export { Layout }