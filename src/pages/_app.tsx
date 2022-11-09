import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { UserProvider } from '@supabase/auth-helpers-react'
import { Layout } from '../components'
import { supa } from '../utils'

function LetaApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider supabaseClient={supa}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  )
}

export default LetaApp
