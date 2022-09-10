import Head from 'next/head'

interface TitleProps {
  children: string
}

const Title = ({ children }: TitleProps) => {
  return (
    <Head>
      <title>
        {children}
      </title>
    </Head>
  )
}

export { Title }