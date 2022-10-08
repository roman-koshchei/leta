import type { NextPage } from 'next'
import Link from 'next/link'
import { Key, Keyboard, Row, Title } from '../components'
import { useUser } from '@supabase/auth-helpers-react'

/*
page will work as landing page
should include:
- call to action
- Product tagline
- Logos of your biggest clients
- Testimonials
- Product features
- Short instructive videos to promote features
*/

const BlackWhiteKey = ({ className = 'w-16' }: { className?: string }) => {
  return <Key className={`${className} bg-neutral-900 dark:bg-white`} />
}

const Home: NextPage = () => {
  const { user } = useUser()

  return (
    <>
      <Title>LETA - Type faster than ever</Title>

      <div className='grid grid-cols-1 md:grid-cols-2 h-full'>

        <div className='self-center'>
          <h1 className='text-5xl md:text-7xl font-bold mb-5 md:mb-10 md:mr-4'>
            Type faster than ever with LETA
          </h1>

          {user ?
            <p className='text-xl md:text-2xl'>
              Thanks for joining us. We will send you notifications of updates.
            </p>
            : <p className='text-xl md:text-2xl'>
              Find keyboard layout for you. <br />
              Try and practice it online. <br />
              Install on your computer.
            </p>
          }
        </div>

        <div className='aspect-[282/52] md:aspect-[282/68] w-[70rem] md:w-[106.25rem] md:self-center'>
          <div className='flex flex-col h-full gap-3 md:gap-5'>
            <div className='hidden md:flex flex-auto gap-3 md:gap-5 h-16'>
              {[...Array(13)].map((_, i) => <BlackWhiteKey key={`num-${i}`} />)}
              <BlackWhiteKey className='w-[8.75rem]' />
            </div>

            <Row>
              <BlackWhiteKey className='w-[6.75rem]' />
              {[...Array(12)].map((_, i) => <BlackWhiteKey key={`top-${i}`} />)}
              <BlackWhiteKey className='w-[6.75rem]' />
            </Row>

            <Row>
              <BlackWhiteKey className='w-[7.75rem]' />
              {[...Array(11)].map((_, i) => <BlackWhiteKey key={`home-${i}`} />)}
              <BlackWhiteKey className='w-[10.5rem]' />
            </Row>

            <Row>
              <Link href={user ? '/typing' : '/auth'}>
                <div className='flex-auto rounded
            border-neutral-900 hover:bg-neutral-100 border-2 cursor-pointer
            dark:border-white dark:hover:bg-neutral-800 w-[10.5rem] select-none
              text-sm md:text-xl flex justify-center items-center 
              '>
                  Start for free
                </div>
              </Link>
              {[...Array(10)].map((_, i) => <BlackWhiteKey key={`bot-${i}`} />)}
              <BlackWhiteKey className='w-[12.5rem]' />
            </Row>

          </div>
        </div>
      </div>
    </>
  )
}

// const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
//   const { user } = await supabaseClient.auth.api.getUserByCookie(req, res)

export default Home