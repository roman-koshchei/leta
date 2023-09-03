import "../styles/globals.css"
import type { AppProps } from "next/app"
import { Layout } from "../components"

function LetaApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default LetaApp
