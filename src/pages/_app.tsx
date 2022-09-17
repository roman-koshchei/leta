import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components'
import { UserProvider } from '@supabase/supabase-auth-helpers/react'
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'

function LetaApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider profileUrl='/typing' supabaseClient={supabaseClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  )
}

export default LetaApp
