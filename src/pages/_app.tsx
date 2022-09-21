import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components'
import { UserProvider } from '@supabase/supabase-auth-helpers/react'
import { supa } from '../utils/supa'

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
