import '../styles/globals.css'
import type { AppProps } from 'next/app'

function LetaApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default LetaApp
