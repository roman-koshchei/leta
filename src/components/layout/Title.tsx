import Head from 'next/head'

export const Title = ({ children }: { children: string }) => (
  <Head>
    <title>
      {children} | LETA
    </title>
  </Head>
)